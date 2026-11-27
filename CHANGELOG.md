# Changelog

## V2.1 (tag `v2.1`)
Gộp bản tối ưu soul / viet-tin / template / mauscheck với V2.0 (commit 6b6105c, tag `cap-link-v2.0`, `mauscheck-v2.0`).
- **Giữ nguyên từ V2.0:** `bot-cap-link` (cao-tin, soul, identity, README), `bot-viet-bai-khoa-hoc`, `telegram-bridge`, README và identity của các bot. Bước bàn giao `coordinate_bots` tới mauscheck với `thread: "new"` được giữ, nay nằm ở bước cuối Quy trình của 16 template (nêu đúng một lần).
- **soul bot1–bot4:** viết lại gọn (~3,3k ký tự, cùng một khung, chỉ khác vai trò và thuật ngữ); là nơi duy nhất quy định ngôn ngữ, BBCode, ảnh, đăng bài `create_thread` forum 767 qua MCP tinhte trên Mac2, trả tiêu đề và link, không sửa bài sau khi đăng. Bỏ mọi chỗ cấm đăng và mọi chỗ nhắc forum 215.
- **viet-tin bot1–bot4:** giữ cấu trúc cũ (đọc nguồn, chọn đúng một template, gọi template; không khớp thì dừng và báo để anh chọn). Thêm bảng chọn template rõ hơn, bỏ dòng `Dạng:` khỏi bài, không đọc lại nguồn đã đọc, không tạo bài trùng.
- **16 template:** nội dung viết bài (tít, bố cục, H2, văn phong, ví dụ, số liệu, cách đặt ảnh, mục Tự kiểm tra) giữ nguyên. Gộp các bước ảnh, MCP, đăng bài thành một bước trỏ về soul; bước cuối giữ bàn giao mauscheck với `thread: "new"`; Đầu ra trỏ về soul. Sửa mâu thuẫn: forum 215 thành 767 (ống kính), bỏ "không tự đăng / chỉ soạn nháp / người đăng thay", sửa lỗi gõ "vites", bỏ đoạn boilerplate trùng, bỏ câu quy cách ảnh và quy tắc chung trùng soul. description khớp hành vi (đăng forum 767).
- **bot-mauscheck:** soul và skill viết lại dạng checklist cho model rẻ (skill ~9,8k ký tự); chỉ sửa bài ở forum 767; chỉ đọc phần Tự kiểm tra của template bằng `awk`; vẫn sửa trực tiếp, sao lưu bản gốc, tối đa 2 lần `edit_post`.

Rollback: dùng tag `cap-link-v2.0` / `mauscheck-v2.0` (V2.0) hoặc `v1.0` (commit 3575516).

## V2.0 (tag `cap-link-v2.0`, `mauscheck-v2.0`)
Mỗi bài viết và mỗi lần mauscheck chạy trong một thread mới.
- **bot-cap-link/cao-tin** (mục 6, bước 6–7, description) và **bot-cap-link/soul.md**: mỗi link giao `/viet-tin <link>` cho bot viết là một lần gọi `coordinate_bots` riêng với `thread: "new"`. Bỏ cơ chế dùng lại thread chung của lượt (`Thread lượt này`); thread id ghi theo từng dòng tin.
- **16 template của bot1–bot4 (V2.0)**, bước 13: gửi link cho @mauscheck và gọi `/mauscheck` bằng `coordinate_bots` tới mauscheck với `thread: "new"`.
- **bot-mauscheck**: skill và soul không đổi nội dung; thread mới do bước 13 của template quyết định. Tag `mauscheck-v2.0` đánh dấu bộ V2.0 đi cùng.

Rollback: dùng link theo tag `v1.0` (bản trước V2.0, commit 3575516).

## v1.0
Mốc baseline trước V2.0 (commit 3575516).
