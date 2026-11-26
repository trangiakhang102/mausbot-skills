# Cầu nối Telegram ↔ MausBot

Bản lưu của cầu nối chạy trên Mac2 (`~/AI/mausbot-telegram`). Anh nhắn bot Telegram → cầu nối giao việc cho bot MausBot (CLI `openmausbot` đi kèm app) → chờ xong → gửi kết quả về Telegram.

App MausBot phải đang mở. Chủ và người dùng thêm được khai báo trong `.env` (`ALLOWED_USER_ID`, `EXTRA_USERS`) — không ghi id hay token vào repo này.

## Cài đặt (làm một lần, trong Terminal trên máy chạy MausBot)

1. **Tạo bot Telegram:** nhắn @BotFather → `/newbot` → đặt tên → nhận token. Đừng dán token vào chat.
2. **Nhập token Telegram (gõ ẩn):**
   ```
   cd ~/AI/mausbot-telegram && ./setup.sh
   ```
   Dán token rồi Enter. Màn hình không hiện gì là bình thường. Điền `ALLOWED_USER_ID` (và nếu cần `EXTRA_USERS`, `GROUP_CHAT_ID`) vào `.env`.
3. **Ghép nối MausBot** (`pair.sh` đã ngừng dùng: mã "Add a phone" chỉ dành cho app điện thoại):
   ```
   ./omb.sh login --name telegram-bridge
   ```
   Bấm Allow trong app. Rồi tạo token ghi vào file (không in ra; hạn tối đa trên server thường là 180 ngày):
   ```
   ./omb.sh token create telegram-bridge --out .omb-token --scope admin --expires 180d
   ```
   File `.omb-token` chmod 600. Thu hồi: `./omb.sh token list` rồi `./omb.sh token revoke <ID>`.
4. **Chạy thử (tuỳ chọn):** `node bridge.mjs` — thấy "Cầu nối chạy: @tênbot" là được; nhắn `/bots` cho bot Telegram. Ctrl-C để tắt.
5. **Chạy nền, tự khởi động lại:** file mẫu `com.khang.mausbot-telegram.plist` (đường dẫn theo máy Mac2). Chép vào `~/Library/LaunchAgents/` rồi:
   ```
   launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.khang.mausbot-telegram.plist
   ```
   Dừng: `launchctl bootout gui/$(id -u)/com.khang.mausbot-telegram`
   Khởi động lại: `launchctl kickstart -k gui/$(id -u)/com.khang.mausbot-telegram`
   Log: `~/AI/mausbot-telegram/logs/bridge.log` và `bridge.err.log`.

## Dùng trên Telegram

| Gõ | Làm gì |
|---|---|
| `/bots` | Danh sách bot, đánh số `#N` |
| `/use <bot>` | Chọn bot mặc định (tên, một phần tên không dấu, hoặc số `#N`). `/use none` để bỏ |
| tin thường | Gửi cho bot mặc định; chưa chọn thì hiện nút để chọn bot |
| `<bot>: <việc>` | Gửi cho bot cụ thể, ví dụ `cấp link: cào tin hôm nay` hoặc `7: ...` |
| `/status` | Bot đang làm và việc em đang chờ |
| `/stop [bot]` | Bấm Stop (kèm các bot được giao) |
| `/wait [bot]` | Chờ tiếp việc đang chạy (sau khi anh trả lời trong app, hoặc quá thời gian chờ) |
| `/last [bot]` | Tin cuối của bot |
| `/mode new\|current` | Mỗi việc một cuộc chat mới (mặc định) hay dùng tiếp cuộc chat hiện tại |
| lệnh khác, ví dụ `/kh …` | Chuyển cho bot đích (với Bài khoa học, `/kh` được đổi thành `/viet-bai-khoa-hoc`) |

- Bot cần anh trả lời/duyệt (needs-user): cầu nối báo, anh mở app MausBot trả lời rồi gõ `/wait`.
- Tin dài tự cắt từng đoạn 4000 ký tự. Thời gian chờ tối đa mỗi việc: 30 phút (`JOB_TIMEOUT` trong `.env`); hết giờ bot vẫn chạy tiếp.

## Người dùng thêm (hạn chế)

Trong `.env`:
```
EXTRA_USERS=<telegram_user_id>:Bài khoa học
```
Cầu nối đối tên bot thành id lúc khởi động và ghi id vào `EXTRA_USERS` (không chỉ giữ tên). Nhiều người hoặc nhiều bot: cách nhau bằng dấu phẩy, `UID:tên hoặc id`.

Người này chỉ được chat riêng với bot Telegram (không dùng trong nhóm), chỉ thấy và điều khiển đúng bot được phép, bot mặc định được chọn sẵn. `/bots`, `/use`, `/stop`, `/wait`, `/last` và tin dạng `<bot>: việc` đều bị giới hạn như vậy. `/mode` lưu riêng từng người. Cố dùng bot khác hoặc gửi vào nhóm thì bị từ chối. Chủ (`ALLOWED_USER_ID`) vẫn dùng đủ mọi bot. Mỗi lần giao việc, log ghi user id.

## Bảo mật

`.env` (chmod 600) giữ token Telegram. Token MausBot nằm ở `.omb-token` (chmod 600). Không gửi vào chat, không đưa lên GitHub. Token này có quyền điều khiển cả đội bot; lộ thì thu hồi bằng `./omb.sh token revoke <ID>` rồi tạo lại.

`pair.sh` đã ngừng dùng (mã Add a phone chỉ cho app điện thoại).

## File

`bridge.mjs` · `omb.sh` · `setup.sh` · `send-group.sh` · `pair.sh` (đã ngừng dùng) · `com.khang.mausbot-telegram.plist` · `.env.example` · `.gitignore`

Không đưa lên repo: `.env`, `.omb-token`, `state.json`, `groups.json`, `logs/`.
