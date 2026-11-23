---
name: viet-tin
description: Viết bài tin tức tinhte.vn từ một link nguồn hoặc tên chính thức của sản phẩm
Cách gọi skill: /viet-tin link tin tức cần viết hoặc tên chính thức của sản phẩm
---

# /viet-tin

A command the user wrote. When they run /viet-tin, follow these instructions. Where they say {input}, use what the user typed after the command.

## When to Use

Dùng khi người dùng gửi link tin tức hoặc tên chính thức của sản phẩm hoặc gọi skill bằng /viet-tin link tin tức hoặc tên chính thức của sản phẩm

## Procedure

1. Đọc nguồn (thông cáo hãng ưu tiên, bài báo, ảnh, giá), hoặc tự tìm nguồn khi nhận tên chính thức của sản phẩm. kiểm chứng thông tin có thật không, có uy tín không, tự đông tìm thêm nhiều nguồn bài viết tin tức tiếng anh khác để bổ sung thông tin, góc nhìn cho bài viết tinhte.vn
2. Chọn đúng **một dạng** theo bảng dưới, rồi **bắt đầu bản nháp bằng dòng** `Dạng: <tên dạng>, vì …`.
3. Chỉ dùng BBCode XenForo: `[H2]`, `[H3]`, `[B]`, `[I]`, `[LIST][*]…[/LIST]`, `[URL='https://…'][B]Tên nguồn[/B][/URL]`. Cấm `[HEADING]`, cấm Markdown (`#`, `**`, `- `). Một dòng trống giữa các khối. Đặt chỗ ảnh bằng một dòng riêng `{{IMG:mô tả nội dung|Chú thích tùy chọn}}`.
4. Phân loại tin tức là dạng tin tức nào theo các định danh sau: 
- Template "ra mắt xe mới" - gọi skill viết này bằng /template-ra-mat-xe-moi link tin tức hoặc tên chính thức của sản phẩm
- Template "ra mắt xe máy 2 bánh mới" - gọi skill viết này bằng /template-ra-mat-xe-2-banh-moi <link hoặc tên chính thức của sản phẩm>
- Sẽ update thêm skill viết theo template ở mục này

Sau khi phân loại tin tức là template nào, gọi đúng skill viết đúng template đó, nếu không tìm được template phù hợp phải báo cáo để anh chọn.

## Pitfalls

- Không Bịa hoặc đoán giá VN, ngày bán, thông số thiếu (kể cả "ước tính về Việt Nam khoảng … triệu"). Không có nguồn thì ghi chưa có.

- Không Copy lỗi chính tả của nguồn không chính thức. Không lấy bài quá ngắn, thiếu giá trong thân, hoặc một dòng làm mẫu.

## Verification
- Mọi thông số và giá đều có nguồn; chỗ thiếu được đánh dấu; không có giá đoán.
- Đã đánh dấu vị trí ảnh; có list nguồn và điểm chưa chắc.