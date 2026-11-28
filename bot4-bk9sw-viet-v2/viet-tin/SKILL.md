---
name: viet-tin
description: "Đọc nguồn, phân loại tin drama/linh kiện PC/hàng không/quân sự/smartphone/Windows rồi gọi đúng template để viết bài tinhte.vn (bot 4). Gọi bằng /viet-tin <link hoặc tên chính thức của sản phẩm>."
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
- Drama công nghệ (kiện tụng, phạt, truy tố, lệnh cấm, cấm vận, tố cáo, bê bối, sa thải, CEO, người dùng phản ứng, hãng đấu nhau): `/template-bk9sw-drama-cong-nghe`
- Ra mắt linh kiện PC (CPU, GPU, mainboard, RAM, SSD, PSU, case, tản nhiệt) và tin tiến trình, foundry: `/template-ra-mat-linh-kien-pc-khoa-dinh`
- Hàng không dân dụng (ra mắt, chứng nhận, đơn hàng, sự cố, công nghệ, sân bay, hàng không Việt Nam, lịch sử): `/template-tin-tuc-hang-khong`
- Quân sự, quốc phòng (khí tài, thử nghiệm, viện trợ, xuất khẩu, chiến trường, lịch sử, công nghệ quốc phòng): `/template-tin-tuc-quan-su`
- Tin smartphone (ra mắt, rò rỉ, cập nhật phần mềm, giá, thị trường, sự cố, chính sách, chuỗi cung ứng): `/template-tin-tuc-smart-phone`
- Windows và Microsoft (bản cập nhật, build, mẹo, lỗi, chính sách, vá bảo mật, Edge, Office, Surface, Xbox): `/template-tin-tuc-windows-microsoft`
- Nếu lõi tin là kiện tụng, phạt hay bê bối thì dùng drama, kể cả khi chủ thể là hãng điện thoại hay Microsoft.
- Tin không có template thì viết theo quy trình chung, đăng forum 767 và bàn giao Mauscheck như bài thường.

Tin chạm hai dạng thì chọn theo nội dung chính của nguồn (cái được nói nhiều nhất trong tít và đoạn mở).

## Kiểm cuối
- Mọi thông số, giá, ngày đều có nguồn. Chỗ thiếu ghi "chưa công bố". Không có giá quy đổi hay ước tính.
- Không chép lỗi chính tả từ nguồn không chính thức. Không lấy bài một dòng làm nguồn chính.
- Nếu đã viết: đã tạo đúng một bài ở forum 767 và đã gửi @mauscheck. Nếu không có template khớp: đã dừng, báo anh, chưa tạo bài.
