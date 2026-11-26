#!/bin/bash
# Gửi một tin vào nhóm Telegram của anh (GROUP_CHAT_ID trong .env).
# Dùng:  echo "nội dung" | bash send-group.sh      hoặc      bash send-group.sh file.txt
# Tắt xem trước link, tự cắt mỗi đoạn 4000 ký tự. Không bao giờ in token.
DIR="$(cd "$(dirname "$0")" && pwd)"
[ -f "$DIR/.env" ] || { echo "Thiếu $DIR/.env" >&2; exit 2; }
if [ -n "$1" ]; then
  [ -f "$1" ] || { echo "Không thấy file: $1" >&2; exit 2; }
  SG_FILE="$1"
else
  SG_FILE="$(mktemp)"; trap 'rm -f "$SG_FILE"' EXIT
  cat > "$SG_FILE"
fi
SG_DIR="$DIR" SG_FILE="$SG_FILE" /opt/homebrew/bin/node - <<'JS'
const fs = require("fs");
const env = {};
for (const line of fs.readFileSync(process.env.SG_DIR + "/.env", "utf8").split("\n")) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
  if (m && !line.trim().startsWith("#")) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
}
const token = env.TELEGRAM_BOT_TOKEN, chat = env.GROUP_CHAT_ID;
if (!token || !chat) { console.error("Thiếu TELEGRAM_BOT_TOKEN hoặc GROUP_CHAT_ID trong .env"); process.exit(2); }
const text = fs.readFileSync(process.env.SG_FILE, "utf8").trim();
if (!text) { console.error("Tin trống, không gửi."); process.exit(2); }
(async () => {
  // cắt ưu tiên tại xuống dòng, tối đa 4000 ký tự mỗi đoạn
  const parts = []; let rest = text;
  while (rest.length > 4000) {
    let cut = rest.lastIndexOf("\n", 4000); if (cut < 1000) cut = 4000;
    parts.push(rest.slice(0, cut)); rest = rest.slice(cut).replace(/^\n/, "");
  }
  parts.push(rest);
  for (let i = 0; i < parts.length; i++) {
    const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ chat_id: chat, text: parts[i], disable_web_page_preview: true, link_preview_options: { is_disabled: true } }),
    });
    const j = await r.json().catch(() => ({}));
    if (!j.ok) { console.error("Gửi lỗi:", j.description || r.status); process.exit(1); }
  }
  console.log(`Đã gửi ${parts.length} tin vào nhóm.`);
})().catch((e) => { console.error("Gửi lỗi:", e.message); process.exit(1); });
JS
