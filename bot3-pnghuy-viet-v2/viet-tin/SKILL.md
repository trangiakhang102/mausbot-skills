---
name: viet-tin
description: "Đọc nguồn, phân loại tin laptop/PC/smartphone/tai nghe/lỗi/AI rồi gọi đúng template để viết bài tinhte.vn (bot 3). Gọi bằng /viet-tin <link hoặc tên chính thức của sản phẩm>."
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
- Ra mắt laptop (phổ thông, gaming, doanh nghiệp, sáng tạo, 2-in-1, AI PC; toàn cầu hoặc tại Việt Nam): `/template-ra-mat-laptop-moi`
- Ra mắt linh kiện PC (CPU/SoC, GPU, mainboard, RAM, SSD, nguồn, case, tản nhiệt): `/template-ra-mat-linh-kien-pc`
- Ra mắt smartphone (flagship, máy gập, camera phone, gaming, tầm trung, giá rẻ): `/template-ra-mat-smartphone`
- Ra mắt tai nghe (true wireless, chụp tai, gaming, open-ear, IEM, có dây): `/template-ra-mat-tai-nghe`
- Lỗi phần cứng, quá nhiệt, pin/sạc, lỗi bản cập nhật OS, driver, lỗ hổng bảo mật, hướng dẫn sửa lỗi, sửa miễn phí, bảo hành: `/template-tin-loi-phan-cung-va-os`
- Tin AI (mô hình mới, tính năng, benchmark, chính sách, kinh doanh, giá gói, có mặt tại Việt Nam; chip chỉ khi góc viết là năng lực AI): `/template-tin-tuc-ai`
- Tin không có template thì viết theo quy trình chung, đăng forum 767 và bàn giao Mauscheck như bài thường.

Tin chạm hai dạng thì chọn theo nội dung chính của nguồn (cái được nói nhiều nhất trong tít và đoạn mở).

## Kiểm cuối
- Mọi thông số, giá, ngày đều có nguồn. Chỗ thiếu ghi "chưa công bố". Không có giá quy đổi hay ước tính.
- Không chép lỗi chính tả từ nguồn không chính thức. Không lấy bài một dòng làm nguồn chính.
- Nếu đã viết: đã tạo đúng một bài ở forum 767 và đã gửi @mauscheck. Nếu không có template khớp: đã dừng, báo anh, chưa tạo bài.
