---
name: viet-tin
description: "Đọc nguồn, phân loại tin máy ảnh/ống kính rồi gọi đúng template để viết bài tinhte.vn (bot 1). Gọi bằng /viet-tin <link hoặc tên chính thức của sản phẩm>."
---
Tin cần viết: {input}

# /viet-tin
Lệnh anh gõ. Khi chạy /viet-tin, làm theo hướng dẫn dưới. `{input}` là phần anh gõ sau lệnh (link tin hoặc tên chính thức của sản phẩm).

Quy tắc chung về ngôn ngữ, BBCode, ảnh, đăng bài forum 767 nằm ở soul, bàn giao mauscheck nằm ở template. Skill này chỉ lo đọc nguồn, phân loại, rồi gọi đúng template.

## Các bước
1. Đọc nguồn trong `{input}`. Nếu chỉ có tên sản phẩm thì tìm trang hãng hoặc thông cáo trước, rồi 1–2 nguồn tiếng Anh uy tín. Xác minh tin có thật và nguồn đáng tin. Ghi dữ kiện cứng (tên, thông số, giá, ngày, thị trường) để template dùng lại, không đọc lại trang đã đọc.
2. Chọn đúng một template theo bảng dưới. Tên dạng chỉ ghi trong chat nếu cần, không đưa dòng `Dạng:` vào bài.
3. Gọi `/<tên template> <link hoặc tên sản phẩm>` và để template viết, chọn ảnh, tự kiểm tra.
4. Đăng bài theo soul (`create_thread` forum 767, trả tiêu đề và link). Bàn giao mauscheck theo bước cuối của template. Đầu ra của template trỏ về soul: làm một lần, đã có link bài thì không tạo thêm. Mỗi tin chỉ một bài.

## Bảng chọn template
- Ra mắt thân máy hoặc thiết bị ghi hình (mirrorless, compact, medium format, action cam, camera 360, máy quay gimbal, instax, máy quay cinema nhỏ), kể cả máy đã ra mắt toàn cầu nay có giá hoặc ra mắt tại Việt Nam: `/template-ra-mat-may-anh-moi`
- Ra mắt ống kính có thông tin chính thức (prime, zoom, tele, góc rộng, macro, fisheye, tilt-shift, cine, mọi ngàm): `/template-ra-mat-ong-kinh-moi`
- Máy và ống kính ra cùng lúc: thân máy là chính thì dùng template máy ảnh.
- Tin không có template thì viết theo quy trình chung, đăng forum 767 và bàn giao Mauscheck như bài thường.

Tin chạm hai dạng thì chọn theo nội dung chính của nguồn (cái được nói nhiều nhất trong tít và đoạn mở).

## Kiểm cuối
- Mọi thông số, giá, ngày đều có nguồn. Chỗ thiếu ghi "chưa công bố". Không có giá quy đổi hay ước tính.
- Không chép lỗi chính tả từ nguồn không chính thức. Không lấy bài một dòng làm nguồn chính.
- Nếu đã viết: đã tạo đúng một bài ở forum 767 và đã gửi @mauscheck. Nếu không có template khớp: đã dừng, báo anh, chưa tạo bài.
