// Cầu nối Telegram <-> MausBot. Không cần cài thư viện (chỉ cần Node 18+).
// Gọi CLI `openmausbot` đi kèm app (omb.sh): bots / run / wait / interrupt.
import { spawn } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, chmodSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const DIR = dirname(fileURLToPath(import.meta.url));
const OMB = join(DIR, "omb.sh");
const STATE_FILE = join(DIR, "state.json");
const ENV_FILE = join(DIR, ".env");

// ---- đọc .env (không bao giờ in giá trị ra log) ----
function loadEnv(file) {
  if (!existsSync(file)) return;
  for (const line of readFileSync(file, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (!m || line.trim().startsWith("#")) continue;
    let v = m[2];
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    if (process.env[m[1]] === undefined) process.env[m[1]] = v;
  }
}
loadEnv(ENV_FILE);

const TG_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
const ALLOWED = String(process.env.ALLOWED_USER_ID || "").trim();
const JOB_TIMEOUT = process.env.JOB_TIMEOUT || "30m";
const log = (...a) => process.stdout.write(`${new Date().toISOString()} ${a.map(String).join(" ")}\n`);
if (!TG_TOKEN || !ALLOWED || !/^\d+$/.test(ALLOWED)) {
  log("Thiếu TELEGRAM_BOT_TOKEN hoặc ALLOWED_USER_ID trong .env. Xem README.md.");
  process.exit(2);
}
const TOKEN_FILE = join(DIR, ".omb-token");
if (!existsSync(TOKEN_FILE) && !process.env.OPENMAUSBOT_TOKEN) {
  log("Cảnh báo: chưa có ~/AI/mausbot-telegram/.omb-token. Chạy: ./omb.sh login --name telegram-bridge rồi ./omb.sh token create telegram-bridge --out .omb-token --scope admin --expires 180d");
}

// EXTRA_USERS=UID:Tên bot hoặc UID:id, nhiều mục cách nhau bằng dấu phẩy
function parseExtraSpec(raw) {
  const map = new Map();
  for (const part of String(raw || "").split(",")) {
    const s = part.trim();
    if (!s) continue;
    const i = s.indexOf(":");
    if (i < 1) continue;
    const uid = s.slice(0, i).trim();
    const ref = s.slice(i + 1).trim();
    if (!/^\d+$/.test(uid) || !ref) continue;
    if (!map.has(uid)) map.set(uid, []);
    map.get(uid).push(ref);
  }
  return map;
}
const EXTRA_SPEC = parseExtraSpec(process.env.EXTRA_USERS || "");
const EXTRA_IDS = new Map(); // uid -> [botId, ...]

const API = `${process.env.TELEGRAM_API_BASE || "https://api.telegram.org"}/bot${TG_TOKEN}`;
async function tg(method, body = {}, signal) {
  const res = await fetch(`${API}/${method}`, {
    method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body), signal,
  });
  const j = await res.json().catch(() => ({}));
  if (!j.ok) throw new Error(`telegram ${method}: ${j.description || res.status}`);
  return j.result;
}

async function say(chatId, text, extra = {}) {
  const s = String(text ?? "").trim() || "(trống)";
  const parts = [];
  for (let i = 0; i < s.length; i += 4000) parts.push(s.slice(i, i + 4000));
  for (let i = 0; i < parts.length; i++) {
    try { await tg("sendMessage", { chat_id: chatId, text: parts[i], disable_web_page_preview: true, ...(i === parts.length - 1 ? extra : {}) }); }
    catch (e) { log("gửi lỗi:", e.message); }
  }
}

const isOwner = (uid) => String(uid) === ALLOWED;
const isKnownUser = (uid) => isOwner(uid) || EXTRA_SPEC.has(String(uid));

function allowedOf(uid, all) {
  if (isOwner(uid)) return all;
  const ids = EXTRA_IDS.get(String(uid));
  if (ids?.length) return all.filter((b) => ids.includes(b.id));
  const refs = EXTRA_SPEC.get(String(uid)) || [];
  const out = [];
  for (const ref of refs) {
    const b = all.find((x) => x.id === ref) || uniqueByName(all, ref);
    if (b && !out.some((x) => x.id === b.id)) out.push(b);
  }
  return out;
}
function uniqueByName(all, ref) {
  const m = all.filter((b) => norm(b.name) === norm(ref));
  return m.length === 1 ? m[0] : null;
}
function denyOther(allowed) {
  const names = allowed.map((b) => b.name).join(", ");
  return names
    ? `Bạn chỉ được dùng bot: ${names}. Không dùng được bot khác và không gửi tin vào nhóm.`
    : "Bạn chưa được cấp bot nào.";
}

// ---- trạng thái theo từng người (bot mặc định, chế độ cuộc chat) ----
let state = { users: {} };
try {
  const raw = JSON.parse(readFileSync(STATE_FILE, "utf8"));
  if (raw.users && typeof raw.users === "object") state.users = raw.users;
  else state.users[ALLOWED] = { defaultBot: raw.defaultBot ?? null, mode: raw.mode === "current" ? "current" : "new" };
} catch {}
const save = () => writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
function userState(uid) {
  const id = String(uid);
  if (!state.users[id]) state.users[id] = { defaultBot: null, mode: "new" };
  if (state.users[id].mode !== "current" && state.users[id].mode !== "new") state.users[id].mode = "new";
  return state.users[id];
}
function ensureDefault(uid, allowed) {
  const st = userState(uid);
  if (isOwner(uid)) return st;
  if (allowed.length === 1 && st.defaultBot !== allowed[0].id) { st.defaultBot = allowed[0].id; save(); }
  else if (st.defaultBot && !allowed.some((b) => b.id === st.defaultBot)) { st.defaultBot = null; save(); }
  return st;
}

function setEnvKey(key, value) {
  if (!existsSync(ENV_FILE)) return;
  const lines = readFileSync(ENV_FILE, "utf8").split(/\n/);
  let found = false;
  const out = lines.map((line) => {
    if (/^\s*#/.test(line) || !line.includes("=")) return line;
    const k = line.split("=")[0].trim();
    if (k !== key) return line;
    found = true;
    return `${key}=${value}`;
  });
  if (!found) out.push(`${key}=${value}`);
  writeFileSync(ENV_FILE, out.join("\n").replace(/\n?$/, "\n"));
  try { chmodSync(ENV_FILE, 0o600); } catch {}
}

async function resolveExtraUsers(all) {
  if (!EXTRA_SPEC.size) return;
  if (EXTRA_IDS.size) return;
  const written = [];
  for (const [uid, refs] of EXTRA_SPEC) {
    const ids = [];
    const names = [];
    for (const ref of refs) {
      const b = all.find((x) => x.id === ref) || uniqueByName(all, ref);
      if (!b) { log(`EXTRA_USERS: không khớp bot cho user ${uid}`); continue; }
      if (!ids.includes(b.id)) { ids.push(b.id); names.push(b.name); }
    }
    EXTRA_IDS.set(uid, ids);
    written.push(...ids.map((id) => `${uid}:${id}`));
    log(`user ${uid} được phép: ${names.join(", ") || "(không khớp bot nào)"}`);
  }
  if (written.length) setEnvKey("EXTRA_USERS", written.join(","));
}

// ---- gọi CLI ----
function omb(args, { stdin, timeoutMs = 60000 } = {}) {
  return new Promise((resolve) => {
    const p = spawn(OMB, args, { env: process.env, stdio: ["pipe", "pipe", "pipe"] });
    let out = "", err = "";
    const timer = timeoutMs ? setTimeout(() => p.kill("SIGTERM"), timeoutMs) : null;
    p.stdout.on("data", (d) => (out += d));
    p.stderr.on("data", (d) => (err += d));
    p.on("close", (code) => { if (timer) clearTimeout(timer); resolve({ code, out, err }); });
    p.on("error", (e) => resolve({ code: 127, out: "", err: String(e) }));
    if (stdin !== undefined) p.stdin.end(stdin); else p.stdin.end();
  });
}
const parse = (s) => { try { return JSON.parse(s); } catch { return null; } };

async function listBots() {
  const r = await omb(["bots", "--json"]);
  const j = parse(r.out);
  if (!j?.bots) throw new Error("Không đọc được danh sách bot. App MausBot có đang mở không? " + (j?.error || r.err.slice(-200)));
  if (EXTRA_SPEC.size && EXTRA_IDS.size === 0) await resolveExtraUsers(j.bots);
  return j.bots;
}

const norm = (s) => String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").trim();
function resolveBot(bots, ref) {
  const q = norm(ref);
  if (!q) return null;
  let m = bots.filter((b) => norm(b.name) === q);
  if (m.length === 1) return m[0];
  if (/^\d+$/.test(q) && bots[Number(q) - 1]) return bots[Number(q) - 1];
  m = bots.filter((b) => norm(b.name).startsWith(q));
  if (m.length === 1) return m[0];
  m = bots.filter((b) => norm(b.name).includes(q));
  if (m.length === 1) return m[0];
  return m.length > 1 ? { ambiguous: m } : null;
}

// tách "<bot>: <việc>" — ưu tiên tên bot dài nhất khớp đầu câu
function splitTarget(bots, text) {
  const t = text.trim();
  const lower = norm(t);
  let best = null;
  for (const b of bots) {
    const n = norm(b.name);
    if (lower.startsWith(n) && /^\s*[:：]/.test(t.slice(n.length)) && (!best || n.length > norm(best.name).length)) best = b;
  }
  if (best) return { bot: best, task: t.slice(norm(best.name).length).replace(/^\s*[:：]\s*/, "") };
  const m = t.match(/^([^:：\n]{1,60})[:：]\s*([\s\S]+)$/);
  if (m) {
    const r = resolveBot(bots, m[1]);
    if (r?.ambiguous) return { ambiguous: r.ambiguous };
    if (r) return { bot: r, task: m[2] };
  }
  return null;
}

const botLine = (b, i, uid) => `#${i + 1} ${b.name} — ${b.busy ? "đang làm" : "rảnh"}${b.chiefOfStaff ? " (chief)" : ""}${userState(uid).defaultBot === b.id ? "  ⭐ mặc định" : ""}`;


const BRIDGE_COMMANDS = new Set(["/start", "/help", "/bots", "/use", "/status", "/stop", "/wait", "/last", "/mode"]);
const KHOA_HOC_ID = "18a20566-9728-4e2d-8d3a-6903666757e9";
// Bỏ @tênbot sau lệnh; với bot Bài khoa học, /kh → /viet-bai-khoa-hoc (tên skill mà MausBot nhận).
function normalizeTask(text, bot) {
  let t = String(text || "").replace(/^(\/[A-Za-z0-9_]+)@[A-Za-z0-9_]+/, "$1");
  if (bot?.id === KHOA_HOC_ID) t = t.replace(/^\/kh(?=\s|$)/i, "/viet-bai-khoa-hoc");
  return t;
}

// ---- chạy việc ----
const running = new Map(); // botId -> { name, since, chatId, userId }

function describeResult(r) {
  const j = parse(r.out);
  const reply = j?.reply?.text;
  const needs = j?.job?.needsInput;
  if (r.code === 0) return reply || "Xong, nhưng bot không để lại câu trả lời dạng chữ. Mở app MausBot để xem.";
  if (r.code === 3) {
    const q = Array.isArray(needs) && needs.length ? needs.map((n) => `• ${n.botName}: ${String(n.question).slice(0, 500)}`).join("\n") : "";
    return `⚠️ Bot cần anh trả lời hoặc duyệt. Mở app MausBot để trả lời.${q ? "\n" + q : ""}${reply ? "\n\nTin gần nhất của bot:\n" + reply : ""}\n\nTrả lời xong, gõ /wait để em chờ tiếp.`;
  }
  if (r.code === 4) return `⏳ Quá ${JOB_TIMEOUT} mà bot chưa xong (bot vẫn đang chạy). Gõ /wait để chờ tiếp.${reply ? "\n\nTin gần nhất:\n" + reply : ""}`;
  if (r.code === 130) return "Đã dừng chờ.";
  if (r.code === 5) return "❌ Không kết nối/không có quyền với MausBot (app có mở không? token còn hạn không?).";
  return `❌ Bot không hoàn thành (${j?.state || "mã " + r.code}).${reply ? "\n\n" + reply : ""}${!reply && (j?.error || r.err) ? "\n" + String(j?.error || r.err).slice(-400) : ""}`;
}

async function runJob(chatId, bot, task, { userId, fresh } = {}) {
  const st = userState(userId);
  if (fresh === undefined) fresh = st.mode === "new";
  task = normalizeTask(task, bot);
  if (process.env.BRIDGE_DRY_RUN) {
    log(`dry-run giao việc: user ${userId} → ${bot.name} (${bot.id}): ${task}`);
    await say(chatId, `[dry-run] Sẽ giao cho "${bot.name}": ${task}`);
    return;
  }
  if (running.has(bot.id)) {
    await say(chatId, `${bot.name} đang chạy việc từ Telegram rồi. Chờ xong hoặc /stop ${bot.name}.`);
    return;
  }
  running.set(bot.id, { name: bot.name, since: Date.now(), chatId, userId: String(userId) });
  log(`giao việc: user ${userId} → ${bot.name} (${bot.id}), ${fresh ? "cuộc chat mới" : "cuộc chat hiện tại"}`);
  await say(chatId, `✅ Đã giao cho "${bot.name}" (${fresh ? "cuộc chat mới" : "cuộc chat hiện tại"}). Em chờ kết quả...`);
  const typing = setInterval(() => tg("sendChatAction", { chat_id: chatId, action: "typing" }).catch(() => {}), 4500);
  try {
    const sendId = `tg-${Date.now()}`;
    const r = await omb(["run", "--bot", bot.id, "-", "--task", fresh ? "new" : "current", "--send-id", sendId,
      "--timeout", JOB_TIMEOUT, "--on-input", "exit", "--json", "--quiet"], { stdin: task, timeoutMs: 0 });
    await say(chatId, `${bot.name}:\n\n${describeResult(r)}`);
  } catch (e) {
    await say(chatId, "❌ Lỗi cầu nối: " + e.message);
  } finally {
    clearInterval(typing);
    running.delete(bot.id);
  }
}

async function waitJob(chatId, bot, userId) {
  if (running.has(bot.id)) return say(chatId, `Em đang chờ ${bot.name} rồi.`);
  running.set(bot.id, { name: bot.name, since: Date.now(), chatId, userId: String(userId) });
  log(`chờ tiếp: user ${userId} → ${bot.name} (${bot.id})`);
  await say(chatId, `Em chờ tiếp "${bot.name}"...`);
  const typing = setInterval(() => tg("sendChatAction", { chat_id: chatId, action: "typing" }).catch(() => {}), 4500);
  try {
    const r = await omb(["wait", "--bot", bot.id, "--timeout", JOB_TIMEOUT, "--on-input", "exit", "--json", "--quiet"], { timeoutMs: 0 });
    let txt = describeResult(r);
    if (r.code === 0 && !parse(r.out)?.reply) {
      const m = await omb(["messages", "--bot", bot.id, "--limit", "5", "--json"]);
      const arr = parse(m.out)?.messages;
      const last = Array.isArray(arr) ? [...arr].reverse().find((x) => x.role === "bot" && x.kind === "text" && x.text?.trim()) : null;
      txt = last ? last.text : "Bot không chạy việc nào lúc này.";
    }
    await say(chatId, `${bot.name}:\n\n${txt}`);
  } finally { clearInterval(typing); running.delete(bot.id); }
}

async function pickBot(chatId, ref, userId) {
  const all = await listBots();
  const allowed = allowedOf(userId, all);
  ensureDefault(userId, allowed);
  if (ref) {
    const inAllowed = resolveBot(allowed, ref);
    if (inAllowed?.ambiguous) { await say(chatId, "Trùng nhiều bot:\n" + inAllowed.ambiguous.map((b) => "• " + b.name).join("\n")); return null; }
    if (inAllowed) return inAllowed;
    const raw = resolveBot(all, ref);
    if (raw && !raw.ambiguous) { await say(chatId, denyOther(allowed)); return null; }
    await say(chatId, `Không tìm thấy bot "${ref}". Gõ /bots.`);
    return null;
  }
  const st = userState(userId);
  const r = st.defaultBot ? allowed.find((b) => b.id === st.defaultBot) : null;
  if (!r) { await say(chatId, "Chưa có bot mặc định. Gõ /use <bot> hoặc ghi rõ bot."); return null; }
  return r;
}

// ---- tin nhắn chờ chọn bot ----
const pending = new Map(); // chatId -> { text, userId }

async function onMessage(msg) {
  if (msg.chat.type !== "private") return; // trong nhóm: chỉ ghi nhớ id nhóm, không trả lời
  const chatId = msg.chat.id;
  const userId = msg.from?.id;
  const text = (msg.text || "").trim();
  if (!text) return;
  const [cmdRaw, ...rest] = text.split(/\s+/);
  const arg = rest.join(" ").trim();
  const cmd = cmdRaw.startsWith("/") ? cmdRaw.split("@")[0].toLowerCase() : null;

  const allForHelp = cmd === "/start" || cmd === "/help" || cmd === "/bots" || cmd === "/status" ? await listBots() : null;
  const allowed = allForHelp ? allowedOf(userId, allForHelp) : null;
  if (allowed) ensureDefault(userId, allowed);

  if (cmd === "/start" || cmd === "/help") {
    if (!isOwner(userId)) {
      const names = allowed.map((b) => b.name).join(", ") || "(chưa có)";
      return say(chatId, [
        `Bạn được dùng bot: ${names}. Chỉ trong chat riêng với bot này.`,
        "• Tin nhắn thường → gửi cho bot đó",
        "• /bots — bot bạn được phép dùng",
        "• /status, /stop, /wait, /last — chỉ với bot được phép",
        "• /mode new|current — mỗi việc một cuộc chat mới (mặc định) hoặc dùng tiếp",
        "• Lệnh khác (ví dụ /kh …) được chuyển cho bot được phép",
        "Bạn không dùng được bot khác và không gửi tin vào nhóm.",
      ].join("\n"));
    }
    return say(chatId, [
      "Cầu nối MausBot. Cách dùng:",
      "• /bots — danh sách bot",
      "• /use <bot> — chọn bot mặc định (tên, một phần tên không dấu, hoặc số #N trong /bots)",
      "• Tin thường → gửi cho bot mặc định",
      "• <bot>: <việc> — gửi cho bot cụ thể, ví dụ: 7: cào tin hôm nay (7 = số #N trong /bots, hoặc gõ tên: cấp link: ...)",
      "• Không có bot mặc định → em hiện nút để anh chọn bot",
      "• /status — việc đang chạy",
      "• /stop [bot] — bấm Stop bot (kèm các bot được giao)",
      "• /wait [bot] — chờ tiếp việc đang chạy / sau khi anh đã trả lời trong app",
      "• /last [bot] — xem tin cuối của bot",
      "• /mode new|current — mỗi việc mở cuộc chat mới (mặc định) hoặc dùng tiếp cuộc chat hiện tại",
      "• Lệnh khác (ví dụ /kh …) được chuyển cho bot mặc định hoặc bot ghi trong tin",
    ].join("\n"));
  }
  if (cmd === "/bots") {
    if (!allowed.length) return say(chatId, "Bạn chưa được cấp bot nào.");
    return say(chatId, allowed.map((b, i) => botLine(b, i, userId)).join("\n"));
  }
  if (cmd === "/use") {
    if (!isOwner(userId) && norm(arg) === "none") return say(chatId, denyOther(allowed || allowedOf(userId, await listBots())));
    if (!arg) {
      const all = allForHelp || await listBots();
      const allow = allowed || allowedOf(userId, all);
      ensureDefault(userId, allow);
      const st = userState(userId);
      if (!st.defaultBot) return say(chatId, "Chưa chọn bot mặc định. /use <bot>");
      const b = allow.find((x) => x.id === st.defaultBot);
      return say(chatId, `Bot mặc định: ${b?.name ?? "(không còn)"}.${isOwner(userId) ? " Đổi: /use <bot>, bỏ: /use none" : ""}`);
    }
    if (isOwner(userId) && norm(arg) === "none") { userState(userId).defaultBot = null; save(); return say(chatId, "Đã bỏ bot mặc định."); }
    const b = await pickBot(chatId, arg, userId);
    if (!b) return;
    userState(userId).defaultBot = b.id; save();
    return say(chatId, `Bot mặc định: ${b.name}`);
  }
  if (cmd === "/mode") {
    const st = userState(userId);
    if (arg === "new" || arg === "current") { st.mode = arg; save(); }
    return say(chatId, `Chế độ: ${st.mode === "new" ? "mỗi việc một cuộc chat mới" : "dùng tiếp cuộc chat hiện tại"}. Đổi: /mode new | /mode current`);
  }
  if (cmd === "/status") {
    const allow = allowed;
    const busy = allow.filter((b) => b.busy);
    const lines = [];
    lines.push(busy.length ? "Bot đang làm:\n" + busy.map((b) => `• ${b.name} (${b.activity})`).join("\n") : "Không bot nào đang làm.");
    const mine = [...running.values()].filter((j) => isOwner(userId) || allow.some((b) => b.name === j.name));
    if (mine.length) lines.push("Việc em đang chờ:\n" + mine.map((j) => `• ${j.name} — ${Math.round((Date.now() - j.since) / 60000)} phút`).join("\n"));
    return say(chatId, lines.join("\n\n"));
  }
  if (cmd === "/stop") {
    const b = await pickBot(chatId, arg, userId);
    if (!b) return;
    log(`stop: user ${userId} → ${b.name} (${b.id})`);
    const r = await omb(["interrupt", "--bot", b.id, "--tree", "--json"]);
    return say(chatId, r.code === 0 ? `🛑 Đã bấm Stop "${b.name}".` : `Không dừng được (${(parse(r.out)?.error || r.err).toString().slice(-300)})`);
  }
  if (cmd === "/wait") {
    const b = await pickBot(chatId, arg, userId);
    if (b) await waitJob(chatId, b, userId);
    return;
  }
  if (cmd === "/last") {
    const b = await pickBot(chatId, arg, userId);
    if (!b) return;
    const m = await omb(["messages", "--bot", b.id, "--limit", "10", "--json"]);
    const arr = parse(m.out)?.messages;
    const last = Array.isArray(arr) ? [...arr].reverse().find((x) => x.role === "bot" && x.kind === "text" && x.text?.trim()) : null;
    return say(chatId, last ? `${b.name}:\n\n${last.text}` : "Chưa có tin nào của bot.");
  }
  // Lệnh không phải của cầu nối (ví dụ /kh …) được chuyển nguyên cho bot đích.

  // tin thường
  const all = await listBots();
  const allow = allowedOf(userId, all);
  const st = ensureDefault(userId, allow);
  const spAllow = splitTarget(allow, text);
  const spAll = splitTarget(all, text);
  if (spAllow?.ambiguous || spAll?.ambiguous) {
    const am = spAllow?.ambiguous || spAll.ambiguous;
    return say(chatId, "Trùng nhiều bot:\n" + am.map((b) => "• " + b.name).join("\n"));
  }
  if (spAll?.bot && !allow.some((b) => b.id === spAll.bot.id)) return say(chatId, denyOther(allow));
  if (spAllow?.bot) return void runJob(chatId, spAllow.bot, spAllow.task, { userId });
  if (spAll?.bot) return void runJob(chatId, spAll.bot, spAll.task, { userId });
  const def = st.defaultBot ? allow.find((b) => b.id === st.defaultBot) : null;
  if (def) return void runJob(chatId, def, text, { userId });
  pending.set(chatId, { text, userId });
  const kb = allow.map((b, i) => [{ text: `#${i + 1} ${b.name}`.slice(0, 60), callback_data: `pick:${i}:${b.id.slice(0, 8)}` }]);
  return say(chatId, "Gửi cho bot nào?", { reply_markup: { inline_keyboard: kb } });
}

async function onCallback(cb) {
  if (cb.message?.chat?.type !== "private") return;
  const chatId = cb.message?.chat?.id;
  const userId = cb.from?.id;
  await tg("answerCallbackQuery", { callback_query_id: cb.id }).catch(() => {});
  if (!chatId || !cb.data?.startsWith("pick:")) return;
  const [, idx, idp] = cb.data.split(":");
  const held = pending.get(chatId);
  if (!held?.text) return say(chatId, "Hết hạn, gửi lại tin nhé.");
  const all = await listBots();
  const allow = allowedOf(userId, all);
  const bot = allow[Number(idx)]?.id.startsWith(idp) ? allow[Number(idx)] : allow.find((b) => b.id.startsWith(idp));
  if (!bot) return say(chatId, denyOther(allow));
  pending.delete(chatId);
  tg("editMessageReplyMarkup", { chat_id: chatId, message_id: cb.message.message_id, reply_markup: { inline_keyboard: [] } }).catch(() => {});
  void runJob(chatId, bot, held.text, { userId });
}

// ---- ghi nhớ id các nhóm bot được thêm vào (groups.json), không trả lời trong nhóm ----
const GROUPS_FILE = join(DIR, "groups.json");
function recordChat(chat, why) {
  if (!chat || (chat.type !== "group" && chat.type !== "supergroup" && chat.type !== "channel")) return;
  let g = {};
  try { g = JSON.parse(readFileSync(GROUPS_FILE, "utf8")); } catch {}
  const prev = g[String(chat.id)];
  if (prev && prev.title === chat.title) return;
  g[String(chat.id)] = { title: chat.title || "", type: chat.type, seenAt: new Date().toISOString(), via: why };
  writeFileSync(GROUPS_FILE, JSON.stringify(g, null, 2));
  log(`nhóm: ${chat.id} "${chat.title}" (${chat.type}, ${why})`);
}

// ---- vòng lấy tin ----
async function main() {
  const me = await tg("getMe");
  try {
    const all = await listBots();
    await resolveExtraUsers(all);
  } catch (e) { log("chưa đối được danh sách bot lúc khởi động:", e.message); }
  const extra = [...EXTRA_SPEC.keys()].join(", ") || "không";
  log(`Cầu nối chạy: @${me.username}. Chủ: ${ALLOWED}. User thêm: ${extra}.`);
  let offset = 0;
  for (;;) {
    try {
      const ups = await tg("getUpdates", { offset, timeout: 50, allowed_updates: ["message", "callback_query", "my_chat_member"] });
      for (const u of ups) {
        offset = u.update_id + 1;
        try {
          if (u.my_chat_member) recordChat(u.my_chat_member.chat, "my_chat_member:" + (u.my_chat_member.new_chat_member?.status || ""));
          else if (u.message) recordChat(u.message.chat, "message");
          else if (u.callback_query?.message) recordChat(u.callback_query.message.chat, "callback");
        } catch (e) { log("ghi nhóm lỗi:", e.message); }
        if (!u.message && !u.callback_query) continue;
        const from = u.message?.from?.id ?? u.callback_query?.from?.id;
        const chatType = u.message?.chat?.type ?? u.callback_query?.message?.chat?.type;
        if (!isKnownUser(from)) { log("bỏ qua người lạ, id", from); continue; }
        if (!isOwner(from) && chatType !== "private") { log("bỏ qua tin nhóm từ user", from); continue; }
        (u.message ? onMessage(u.message) : onCallback(u.callback_query)).catch(async (e) => {
          log("lỗi xử lý:", e.message);
          const c = u.message?.chat?.id ?? u.callback_query?.message?.chat?.id;
          const t = u.message?.chat?.type ?? u.callback_query?.message?.chat?.type;
          if (c && t === "private") await say(c, "❌ " + e.message);
        });
      }
    } catch (e) {
      log("lỗi lấy tin:", e.message);
      await new Promise((r) => setTimeout(r, 5000));
    }
  }
}
main().catch((e) => { log("dừng:", e.message); process.exit(1); });
