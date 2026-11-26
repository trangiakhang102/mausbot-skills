#!/bin/bash
# Hỏi token bot Telegram (ẩn khi gõ) rồi ghi vào .env. Không in giá trị ra màn hình.
cd "$(dirname "$0")"
[ -f .env ] || cp .env.example .env
chmod 600 .env
read -r -s -p "Dán token bot Telegram từ @BotFather (gõ ẩn, Enter): " TG; echo
[ -n "$TG" ] || { echo "Token trống."; exit 1; }
if ! grep -q '^ALLOWED_USER_ID=[0-9][0-9]*$' .env; then
  read -r -p "Telegram user id số của chủ (từ @userinfobot): " UID_TG
  case "$UID_TG" in ''|*[!0-9]*) echo "User id phải là số."; exit 1;; esac
else
  UID_TG=""
fi
TG="$TG" UID_TG="$UID_TG" node -e '
const fs=require("fs");let s=fs.readFileSync(".env","utf8");
const set=(k,v)=>{const re=new RegExp("^"+k+"=.*$","m");s=re.test(s)?s.replace(re,()=>k+"="+v):s.replace(/\n?$/,"\n"+k+"="+v+"\n")};
set("TELEGRAM_BOT_TOKEN",process.env.TG);
if(process.env.UID_TG) set("ALLOWED_USER_ID",process.env.UID_TG);
fs.writeFileSync(".env",s);'
chmod 600 .env
echo "Đã lưu token vào .env (chmod 600). Kiểm tra ALLOWED_USER_ID (và EXTRA_USERS, GROUP_CHAT_ID nếu cần)."
