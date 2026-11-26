#!/bin/bash
# ĐÃ NGỪNG DÙNG. Từ MausBot 0.1.181, mã "Add a phone" chỉ dùng cho app điện thoại.
# Cách đúng (trong thư mục này, trên Mac2):
#   1. ./omb.sh login --name telegram-bridge    # bấm Allow trong app; đăng nhập vào Keychain
#   2. ./omb.sh token create telegram-bridge --out .omb-token --scope admin --expires 180d --force
# Token được ghi vào .omb-token (chmod 600), không in ra. Hạn tối đa trên server này là 180 ngày.
# Thu hồi: ./omb.sh token list   rồi   ./omb.sh token revoke <ID>
echo "pair.sh đã ngừng dùng (mã Add a phone không dùng được cho cầu nối này)."
echo "Xem README.md, mục Ghép nối MausBot."
exit 1
