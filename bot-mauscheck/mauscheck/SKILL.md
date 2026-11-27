---
name: mauscheck
description: "Kiểm bài tinhte.vn do bot viết đăng ở forum 767, rồi sửa trực tiếp trên đúng thread những lỗi thông tin, bố cục và ảnh hỏng. Không sửa văn phong. Báo cáo trước/sau trong chat. Gọi bằng /mauscheck <link bài> [link nguồn] [tên template]."
---
Bài cần kiểm: {input}

# /mauscheck
Lệnh anh hoặc bot viết gõ. Khi chạy /mauscheck, làm đúng các bước dưới. `{input}` là phần gõ sau lệnh.

## 0. Ranh giới
- Đọc bài bằng MCP `tinhte` (`get_thread`). Đọc nguồn bằng webfetch. Không dùng trình duyệt.
- Chỉ sửa bằng `edit_post`, chỉ khi `forum_id` là 767. Forum khác thì chỉ báo cáo.
- Không gọi `create_thread`, không truyền `thread_node_id`, không tạo bài mới để lấy ảnh.
- Được upload lại ảnh hỏng vào đúng bài đang sửa (mục 4). Được dùng shell để lưu bản gốc, lưu tạm ảnh nguồn và đọc khung template. Không đo file ảnh để đoán lỗi cover.
- Không sửa văn phong, giọng, xưng hô. Không viết lại câu đúng.
- Không in token. Không in lại cả bài trong chat, trừ bản gốc khi không lưu được file.

## 1. Các bước
1. Lấy thread id: link `https://tinhte.vn/thread/<slug>.<id>/` thì lấy `<id>` cuối. Thiếu link thì hỏi đúng một câu rồi dừng.
2. `get_thread(thread_id)`: lấy `thread_title`, `forum_id`, `first_post.post_id`, `post_body`, `attachments`, và `post_body_html` nếu có. Thiếu danh sách ảnh thì đọc attachments của `post_id`.
3. Nguồn: link trong `{input}` cộng các URL ở dòng `Theo:` (hoặc khối nguồn của bài khoa học). Mỗi trang đọc một lần. Chỉ tìm thêm trang hãng khi bài là tin ra mắt sản phẩm hoặc khi hai nguồn lệch nhau. Trang hãng thắng. Không có nguồn thì ghi "không có nguồn để đối chiếu", chỉ kiểm mục 3 và 4.
4. Xác định template (mục 5) và đọc phần tự kiểm tra của nó.
5. Lập danh sách lỗi theo mục 2, 3, 4.
6. Không có lỗi được phép sửa: báo "sạch", không gọi `edit_post`.
7. Có lỗi: sao lưu, sửa, đọc lại theo mục 6, rồi báo cáo theo mục 7.

## 2. Thông tin
Đối chiếu từng dữ kiện với nguồn: tên hãng, sản phẩm, model, người; thông số và đơn vị; giá (số, đơn vị, phiên bản, thị trường); ngày; số liệu, phần trăm, benchmark; lời trích; nhãn tin đồn.
Nhãn: KHỚP (cùng giá trị, khác cách viết vẫn khớp), SAI, KHÔNG CÓ TRONG NGUỒN, MÂU THUẪN, CHƯA XÁC MINH.
Cách sửa:
- SAI hoặc MÂU THUẪN: thay đúng giá trị theo trang hãng (không có thì theo nguồn). Giữ nguyên câu, chỉ đổi dữ kiện.
- KHÔNG CÓ TRONG NGUỒN: không bịa số mới. Xoá khẳng định đó, hoặc ghi "chưa công bố" nếu template bắt buộc giữ mục.
- Giá Việt tự quy đổi ("tương đương khoảng", "ước tính về Việt Nam"): xoá phần quy đổi, giữ giá gốc. Chỉ giữ giá Việt khi có nguồn chính thức.
- Tin đồn viết như tin chính thức: thêm "theo tin đồn" hoặc "theo nguồn tin của X". Không khẳng định cáo buộc chưa xử là tội.
- Lời trích sai người hoặc sai lời: sửa đúng, không kiểm được thì xoá.
- Câu chép nguyên văn nguồn quá 25 từ liên tiếp: viết lại ngắn, giữ dữ kiện.
- CHƯA XÁC MINH: không sửa, ghi vào "không kiểm được".
- Dòng `Theo:` (bài tin): đúng một dòng cuối bài, dạng `Theo: [URL='https://…'][B]Tên nguồn[/B][/URL]`, nhiều nguồn cách nhau dấu phẩy. URL phải mở được và đúng tin này. Nguồn không được là báo hay trang tin tiếng Việt (trang hãng bản tiếng Việt vẫn được). Có trang hãng thì nên thêm vào.
- Bài khoa học (`viet-bai-khoa-hoc`): không bắt buộc `Theo:`. Cuối bài có `Nguồn tài liệu khoa học tham khảo:` hoặc `Nguồn tham khảo nội dung:` rồi `[LIST][*][URL='https://…'][B]Tác giả hoặc Tổ chức (Năm) – Tên tài liệu[/B][/URL][/LIST]`. URL mở được, bỏ `utm_*`, `fbclid`. Không đổi khối này thành dòng `Theo:`.

## 3. Bố cục
- BBCode chỉ gồm `[H2]`, `[H3]`, `[I]`, `[LIST][*]…[/LIST]`, `[URL='…']`, `[ATTACH=full]id[/ATTACH]`, `[CENTER]`, `[galleria]`, `[MEDIA]`. Đóng đủ thẻ.
- `[HEADING]` đổi thành `[H2]` hoặc `[H3]`. Gỡ Markdown (`#`, `**`, dòng `- `, khối ba dấu huyền, `[chữ](url)`).
- `[H2]`, `[H3]` trơn, không lồng `[B]`, không rỗng. Bài tin không để dấu hai chấm cuối H2.
- Gỡ `[B]` trong đoạn văn, dòng dẫn, list. Chỉ giữ `[B]` ở dòng `Theo:`, ở khối nguồn bài khoa học, và ở link bài liên quan khi template cho phép.
- Xoá ghi chú nội bộ: dòng `Dạng:`, TODO, "[cần kiểm]".
- Mở bài 1–3 đoạn, không bắt đầu bằng `[H2]`. Có đoạn kết trước `Theo:`. Template Khoa Đinh (bot 4) cấm H2 tên "Kết": đổi tên H2 đó, giữ đoạn kết.
- Bài khoa học: mở 2–4 đoạn không H2; H2 đánh số `1. `, `2. `; được `[H2]Kết: …[/H2]`.
- Một dòng trống giữa các khối, không nhiều dòng trống liền nhau.
- Tiêu đề: chỉ đổi `thread_title` khi có dữ kiện sai hoặc không khớp thân bài. Không viết lại cho hay hơn.
- Lỗi chính tả rõ ràng: sửa.
- Ảnh: mỗi H2 nên có ảnh ngay dưới tiêu đề, trên đoạn mô tả, chú thích `[CENTER][I]…[/I][/CENTER]`. Bài thiếu ảnh thì chỉ ghi vào báo cáo, không tự thêm ảnh mới (trừ ảnh hỏng ở mục 4). Cover, tỷ lệ, dung lượng, watermark, cover trùng ảnh đầu: ghi "không kiểm được", không sửa. Cover nằm trong `attachments` với `attachment_is_inserted=false` và không có trong body là đúng.

## 4. Ảnh hỏng
Đối chiếu mọi thẻ ảnh trong body với `attachments` (và `post_body_html` nếu có).
Lỗi phải sửa:
1. `[ATTACH]id[/ATTACH]` thiếu `=full`: id còn trong `attachments` thì chỉ thêm `=full`, không upload lại.
2. id trong `[ATTACH]` không có trong `attachments`.
3. `[IMG]https://tinhte.vn/attachments/<id>/[/IMG]` và biến thể: id còn thì đổi sang `[ATTACH=full]id[/ATTACH]`; id mất thì upload lại.
4. `[IMG]url[/IMG]` với URL chết, cần đăng nhập, đường dẫn máy (`/Users/…`), data URI, hoặc không phải ảnh. URL https còn mở được thì nên upload vào bài rồi đổi sang `[ATTACH=full]`.
5. Còn chú thích nhưng mất thẻ ảnh.
6. Còn sót `{{IMG:…}}`.
7. `post_body_html` có ảnh trỏ `/attachments/<id>/` mà id không còn.
Không đụng: `[ATTACH=full]id[/ATTACH]` khớp `attachments` với `attachment_is_inserted=true`; cover chưa chèn.
Cách sửa:
1. Tìm file theo thứ tự: URL https trong thẻ `[IMG]` còn mở được; `links.permalink` của attachment còn gắn bài; ảnh trên trang hãng hoặc nguồn ở dòng `Theo:`. Lưu tạm vào `/Users/khang/AI/tinhte-uploads/mauscheck-<thread_id>/` nếu tool cần file.
2. Upload bằng tool đính kèm của MCP `tinhte`, truyền `post_id` bài đầu. Tool cần `attachment_hash` thì tạo một hash mới (hex hoặc uuid), dùng chung cho cả lượt, gửi kèm khi `edit_post` nếu tool hỗ trợ. Không dùng upload cho bài chưa tạo, không tự gọi curl kèm token.
3. Thay đúng chỗ hỏng bằng `[ATTACH=full]<id mới>[/ATTACH]`, giữ chú thích dòng dưới.
4. Không tìm được file: giữ nguyên chỗ hỏng, ghi "không có file nguồn để upload lại".
Cấm: xoá thẻ hay chú thích khi chưa có ảnh thay; đổi `[ATTACH=full]` đúng thành `[IMG]`; thay `[ATTACH]` bằng `[IMG]https://tinhte.vn/attachments/id/[/IMG]`; hotlink ảnh shop; bịa ảnh.

## 5. Template
- Tên template lấy từ `{input}` nếu có. Không có thì đoán theo nội dung bằng bảng dưới.
- Chỉ đọc phần tự kiểm tra, không đọc cả file:
  `awk '/^## .*Tự kiểm tra/{f=1} f&&/^## .*Đầu ra/{exit} f' /Users/khang/.openmausbot/workspaces/<id bot>/skills/<template>/SKILL.md`
  Không đọc được thì kiểm theo mục 2–4.
| Bot, id | Template |
|---|---|
| 1 máy ảnh, lens: `ada33724-f87a-469e-ad45-4954f2a9fd8e` | template-ra-mat-may-anh-moi, template-ra-mat-ong-kinh-moi |
| 2 xe: `3ec20e27-7cb8-4df5-8e93-bd2b7ba6a4e7` | template-ra-mat-xe-moi, template-ra-mat-xe-2-banh-moi |
| 3 Pnghuy: `33a50c87-3e7d-490e-9e5e-0fc818079b78` | template-ra-mat-laptop-moi, template-ra-mat-linh-kien-pc, template-tin-tuc-ai, template-ra-mat-tai-nghe, template-ra-mat-smartphone, template-tin-loi-phan-cung-va-os |
| 4 bk9sw (Khoa Đinh): `01444de0-9b07-451f-920a-7c268fb81e3c` | template-ra-mat-linh-kien-pc-khoa-dinh, template-tin-tuc-quan-su, template-tin-tuc-hang-khong, template-tin-tuc-smart-phone, template-tin-tuc-windows-microsoft, template-bk9sw-drama-cong-nghe |
| Bài khoa học | viet-bai-khoa-hoc |

Bài là bài khoa học khi `{input}` ghi `viet-bai-khoa-hoc` (hoặc `/kh`), hoặc cuối bài có khối nguồn khoa học ở mục 2. Không suy ra bài khoa học chỉ vì forum 767, vì bot viết tin cũng đăng ở forum 767.

## 6. Sao lưu, sửa, đọc lại
1. Sao lưu: `mkdir -p /Users/khang/AI/mauscheck-backup`, ghi `/Users/khang/AI/mauscheck-backup/<thread_id>-<YYYYMMDD-HHMMSS>.txt` (giờ Asia/Saigon) gồm thread_id, post_id, forum_id, tiêu đề, toàn bộ `post_body` gốc, danh sách attachments (id, filename, `attachment_is_inserted`). Không ghi được thì dán bản gốc vào báo cáo rồi mới sửa.
2. Soạn body mới từ bản gốc, chỉ thay các chỗ lỗi. Giữ `[ATTACH=full]` đúng, thứ tự mục, câu đúng.
3. Gọi một lần `edit_post(confirm=true, thread_id=<id>, post_body=<body mới>)`, hoặc dùng `post_id` thay `thread_id`. Thêm `thread_title` chỉ khi tiêu đề sai.
4. `get_thread` đọc lại: mỗi chỗ đã sửa đúng; id ảnh mới có trong `attachments` với `attachment_is_inserted=true`; `forum_id` không đổi. Còn lỗi thì sao lưu file mới rồi sửa lần 2. Lần 2 còn lỗi thì dừng, ghi vào báo cáo, không gọi lần 3.
5. Tool lỗi: dừng, giữ bản sao lưu, báo nguyên văn lỗi (không kèm token), không thử `create_thread`.

## 7. Báo cáo trong chat
```
Bài: <tiêu đề> | <link> | forum <id> | post_id <id>
Template: <tên>
Nguồn: <link, link>
Kết quả: <ĐÃ SỬA | SẠCH | SỬA MỘT PHẦN | KHÔNG SỬA: forum không được phép>
Đếm: KHỚP x, SAI y, KHÔNG CÓ TRONG NGUỒN z, MÂU THUẪN m, CHƯA XÁC MINH c
Ảnh: thẻ <n> | attachments <n> | hỏng <k> | đã sửa <s> | không upload lại được <u>
Bản gốc: <đường dẫn file>

ĐÃ SỬA
1. [Thông tin] Trước: "<câu gốc>" → Sau: "<câu mới>". Căn cứ: <giá trị đúng> (<link>)
2. [Bố cục] <vị trí>. Trước: <thẻ/dòng> → Sau: <thẻ/dòng>
3. [Ảnh] <vị trí, loại lỗi> → [ATTACH=full]<id>[/ATTACH]. Nguồn ảnh: <url>

KHÔNG KIỂM ĐƯỢC
- Cover, tỷ lệ, dung lượng ảnh (MCP không trả)
- <dữ kiện chưa xác minh, ảnh không có file nguồn>

CÒN SÓT
- <nếu có, lý do>
```
Trước khi gửi: mỗi chỗ SAI đã sửa đều có link nguồn; không xoá thẻ ảnh hỏng khi chưa có ảnh thay; đã sao lưu trước `edit_post`; không đổi văn phong; không gọi `create_thread`.
