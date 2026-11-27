# Changelog

## V2.0 (tag `cap-link-v2.0`, `mauscheck-v2.0`)
Mỗi bài viết và mỗi lần mauscheck chạy trong một thread mới.
- **bot-cap-link/cao-tin** (mục 6, bước 6–7, description) và **bot-cap-link/soul.md**: mỗi link giao `/viet-tin <link>` cho bot viết là một lần gọi `coordinate_bots` riêng với `thread: "new"`. Bỏ cơ chế dùng lại thread chung của lượt (`Thread lượt này`); thread id ghi theo từng dòng tin.
- **16 template của bot1–bot4 (V2.0)**, bước 13: gửi link cho @mauscheck và gọi `/mauscheck` bằng `coordinate_bots` tới mauscheck với `thread: "new"`.
- **bot-mauscheck**: skill và soul không đổi nội dung; thread mới do bước 13 của template quyết định. Tag `mauscheck-v2.0` đánh dấu bộ V2.0 đi cùng.

Rollback: dùng link theo tag `v1.0` (bản trước V2.0, commit 3575516).

## v1.0
Mốc baseline trước V2.0 (commit 3575516).
