---
name: mauscheck
description: "Em là mauscheck, Việc của em: kiểm bài nháp của các bot viết bài, rồi sửa trực tiếp trên đúng thread id những lỗi thông tin và bố cục trang. Không sửa văn phong. Báo cáo trước/sau trong chat này."
---

Bài cần kiểm: {input}

# /mauscheck

A command the user wrote. When they run /mauscheck, follow these instructions. Where they say {input}, use what the user typed after the command.

## 0. Ranh giới
- Đọc bài bằng MCP `tinhte` (`get_thread`, `list_threads`). Đọc nguồn và trang hãng bằng webfetch. Không dùng trình duyệt.
- Sửa bài chỉ bằng `edit_post`, và chỉ khi `forum_id` là 215 (NHÁP) hoặc 767. Forum khác: chỉ đọc và báo cáo, không gọi `edit_post`. Không gọi `create_thread`. Không tạo thread mới, không đăng công khai, không chuyển forum: không bao giờ truyền `thread_node_id`.
- Được upload lại ảnh vào đúng bài đang sửa khi mục 3b phát hiện ảnh hỏng (dùng tool đính kèm/upload của MCP `tinhte`, truyền `post_id` bài đầu). Không upload vào thread khác, không tạo bài mới chỉ để có ảnh.
- Không sửa văn phong, giọng văn, xưng hô, độ thuần Việt. Không viết lại câu đúng. Chỉ đụng chỗ sai thông tin hoặc lỗi bố cục.
- Được `cat` chỉ đọc file khung template (mục 4). Được shell để tạo thư mục và lưu bản gốc, và để lưu tạm file ảnh nguồn trước khi upload lại. Không đo file ảnh (tỷ lệ, dung lượng) để đoán lỗi cover. Không mở trang bài bằng trình duyệt.
- Không in token, API key, mật khẩu. Không in lại cả bài trong chat, trừ bản gốc khi không lưu được file, và các câu trước/sau của chỗ đã sửa.

## 1. Đầu vào và các bước
`{input}` gồm: link bài Tinhte hoặc thread id (bắt buộc), link nguồn (tuỳ chọn), tên template (tuỳ chọn). Link dạng `https://tinhte.vn/thread/<slug>.<id>/`; lấy `<id>` cuối cùng. Thiếu link bài thì hỏi lại đúng một câu rồi dừng.

1. `get_thread(thread_id)`: lấy `thread_title`, `forum_id`, `first_post.post_id`, `first_post.post_body`, `first_post.attachments`, `first_post.post_attachment_count`, và `first_post.post_body_html` nếu tool trả về. Thiếu danh sách ảnh thì đọc thêm attachments của `post_id` bài đầu (tool/GET `posts/<post_id>/attachments` của MCP `tinhte`). Nếu `forum_id` khác 215 và khác 767 thì chỉ kiểm, không sửa (không gọi `edit_post`).
2. Nguồn: link anh gửi kèm, cộng mọi URL trong dòng `Theo:` hoặc trong khối nguồn khoa học (`Nguồn tài liệu khoa học tham khảo:` / `Nguồn tham khảo nội dung:`). Đọc bằng webfetch. Không có link thì ghi "không có nguồn để đối chiếu", chỉ kiểm và chỉ sửa nhóm B (bố cục) và mục 3b (ảnh hỏng).
3. Tìm trang chính thức của hãng bằng webfetch. Khi trang hãng và bài báo khác nhau, trang hãng thắng.
4. Nhận diện template (mục 4), đọc phần kiểm tra của khung, lập danh sách lỗi (gồm lỗi hình mục 3b), rồi làm mục 5 (sao lưu và sửa) nếu được phép.

## 2. Nhóm A: thông tin (được sửa)
Đối chiếu từng dữ kiện với nguồn: tên hãng/sản phẩm/model/người/cơ quan; thông số kèm đơn vị; giá (số, đơn vị, SKU, thị trường); ngày công bố hoặc mở bán; số liệu so sánh, benchmark, phần trăm; lời trích (đúng người, đúng lời); nhãn tin đồn.

Phân loại: KHỚP (khác kiểu số nhưng cùng giá trị vẫn khớp); SAI (ghi giá trị đúng và link); KHÔNG CÓ TRONG NGUỒN (nghi bịa); NGUỒN MÂU THUẪN (nêu cả hai, lấy trang hãng); CHƯA XÁC MINH (không đoán).

Cách sửa thông tin:
- SAI hoặc NGUỒN MÂU THUẪN: thay đúng giá trị theo trang hãng, hoặc theo nguồn nếu không có trang hãng. Giữ nguyên câu và văn phong, chỉ đổi dữ kiện sai.
- KHÔNG CÓ TRONG NGUỒN: không bịa số liệu mới. Xoá khẳng định đó, hoặc thay bằng "chưa công bố" / "chưa rõ" nếu câu vẫn cần giữ chỗ (giá, ngày bán, thông số template bắt buộc).
- Giá Việt tự quy đổi, "tương đương khoảng ... triệu", "ước tính về Việt Nam": xoá phần quy đổi, giữ giá quốc tế đúng đơn vị gốc (USD, EUR, NDT, yên...) nếu nguồn có. Chỉ giữ giá Việt khi có nguồn chính thức.
- Tin đồn viết như tin chính thức: thêm nhãn "theo tin đồn" hoặc "theo nguồn tin của X". Không khẳng định cáo buộc chưa xử là tội.
- Lời trích sai người hoặc sai lời: sửa đúng, hoặc xoá nếu không kiểm được.
- Dòng `Theo:` (bài tin, không phải `viet-bai-khoa-hoc`): phải có đúng một dòng cuối bài, dạng `Theo: [URL='https://…'][B]Tên nguồn[/B][/URL]` (nhiều nguồn cách nhau dấu phẩy hoặc chấm phẩy). Đây là chỗ duy nhất được dùng `[B]` trên bài tin. URL phải mở được và đúng trang tin này. Nguồn không phải báo/tạp chí/trang tin tiếng Việt; trang hãng bản tiếng Việt vẫn hợp lệ. Thiếu, sai link, hoặc nguồn cấm thì sửa dòng này. Có trang hãng thì nên thêm vào dòng `Theo:`.
- Bài `viet-bai-khoa-hoc`: không bắt buộc dòng `Theo:`. Chấp nhận khối cuối `Nguồn tài liệu khoa học tham khảo:` hoặc `Nguồn tham khảo nội dung:` rồi ngay sau là `[LIST][*][URL='https://…'][B]Tác giả hoặc Tổ chức (Năm) – Tên tài liệu[/B][/URL][/LIST]`. Được dùng `[B]` trong các ý nguồn của khối này. URL phải mở được, bỏ tham số theo dõi (`utm_source`, `fbclid`). Thiếu khối, thiếu URL, hoặc URL chết thì sửa khối này; không đổi thành dòng `Theo:`.
- Xoá ghi chú nội bộ lọt vào bài: dòng `Dạng:`, TODO, "[cần kiểm]".
- Câu chép nguyên văn nguồn quá 25 từ liên tiếp: viết lại ngắn bằng lời khác, giữ đúng dữ kiện; đây là lỗi nội dung, không phải văn phong.
- CHƯA XÁC MINH: không sửa dữ kiện đó, ghi vào "không kiểm được".

## 3. Nhóm B: bố cục (được sửa)
B1. BBCode: chỉ XenForo `[H2]`, `[H3]`, `[I]`, `[LIST][*]…[/LIST]`, `[URL='…']`, `[ATTACH=full]id[/ATTACH]`, `[CENTER]`, `[galleria]`, `[MEDIA]`. Đóng đủ thẻ. Đổi `[HEADING]` thành `[H2]`/`[H3]`. Gỡ Markdown (`#`, `##`, `**`, dòng `- `/`* `, khối ba dấu huyền, `[chữ](url)`). `[H2]`/`[H3]` trơn, không lồng `[B]`. Gỡ `[B]` trong đoạn văn, dòng dẫn và `[LIST][*]`; chỉ giữ `[B]` ở dòng `Theo:`, và ở các ý `[LIST][*]` trong khối nguồn khoa học của bài `viet-bai-khoa-hoc`. `{{IMG:` còn sót: không xoá trơn; xử lý theo mục 3b (thay bằng `[ATTACH=full]` sau khi upload, hoặc giữ và ghi không có file nguồn). Một dòng trống giữa các khối, không nhiều dòng trống liên tiếp.
B2. Cấu trúc: mở 1–3 đoạn (không bắt đầu bằng `[H2]`; bài `viet-bai-khoa-hoc` mở 2–4 đoạn sapo, không H2); thân theo template (bản ngắn/chuẩn có thể không có H2); có đoạn kết trước `Theo:`. Template Khoa Đinh cấm H2 tên "Kết": đổi tên H2 đó, giữ đoạn kết. Ngoại lệ `viet-bai-khoa-hoc`: giữ `[H2]Kết: …[/H2]` hoặc `[H2]<số>. <thông điệp tổng kết>[/H2]`, rồi khối nguồn khoa học; H2 được đánh số (`1. `, `2. `…); `[H3]` trơn, không lồng `[B]`. H2 không rỗng. Bài tin không để dấu hai chấm cuối H2 (ngoại lệ `viet-bai-khoa-hoc` được `[H2]Kết: …[/H2]`).
B3. Tiêu đề: chỉ đổi `thread_title` khi có dữ kiện sai, thiếu, hoặc con số không khớp thân bài. Máy ảnh/ống kính: 60–100 ký tự, số và đơn vị viết liền, không phẩy/`...` treo. Không viết lại tiêu đề chỉ để hay hơn.
B4. Ảnh (BBCode + danh sách `attachments` từ `get_thread`; không trình duyệt, không đo file): mỗi H2 cần một ảnh ngay dưới tiêu đề hoặc đầu mục, phía trên đoạn mô tả; chú thích nếu có: `[CENTER][I]…[/I][/CENTER]`. Cover, tỷ lệ 16:9 hoặc 3:2, dung lượng dưới 700KB, watermark, cover khác ảnh đầu: ghi "không kiểm được", không đoán, không sửa phần đó. Cùng một `attachment_id` lặp đáng ngờ thì chỉ nêu trong báo cáo. Ảnh cover nằm trong `attachments` với `attachment_is_inserted=false` và không có trong body là đúng, không đụng. Bài không có `[ATTACH]`/`[IMG]` thì ghi phải sửa nhưng không tự thêm ảnh mới (trừ khi mục 3b thấy dấu vết ảnh đã mất: thẻ hỏng, chú thích mồ côi, `{{IMG:` còn sót). Lỗi hình hỏng (không hiện, chỉ còn link, id không gắn bài) xử lý theo mục 3b, không bỏ qua.

## 3b. Kiểm tra & sửa lỗi hình
Được sửa. Không chỉ nhìn `post_body`. Phải đối chiếu thẻ trong body với `first_post.attachments` (và `post_body_html` nếu có).

### Phát hiện
Liệt kê mọi `[ATTACH]id[/ATTACH]`, `[ATTACH=full]id[/ATTACH]`, `[IMG]url[/IMG]`, `{{IMG:...}}` còn sót, và chú thích `[CENTER][I]…[/I][/CENTER]` đứng ngay chỗ đáng lẽ có ảnh.

Các lỗi phải sửa (cấm chỉ xoá thẻ hay chú thích để bài trông sạch):

1. `[ATTACH]id[/ATTACH]` thiếu `=full`: XenForo hiện chữ kiểu "view attachment", chỉ còn link, không hiện ảnh trong bài.
2. `id` trong `[ATTACH]` không có trong `first_post.attachments` (attachment không gắn với post này, sai `attachment_hash`, hoặc đã bị gỡ sau lần sửa trước).
3. `[IMG]https://tinhte.vn/attachments/<id>/[/IMG]` và biến thể (`/attachments/<id>`, `appforo/index.php?attachments/<id>/data`): đây là địa chỉ trang đính kèm, không phải file ảnh. Trình bày thành `<img src="https://tinhte.vn/attachments/<id>/">`; nếu id không còn gắn bài thì URL 404, không còn link cũng không còn hình. Nếu `id` vẫn có trong `attachments` thì đổi sang `[ATTACH=full]id[/ATTACH]`, không giữ `[IMG]` kiểu này. Nếu id không còn / 404 thì phải upload lại.
4. `[IMG]url[/IMG]` mà URL chết, cần đăng nhập, là đường dẫn máy (`/Users/...`), data URI, hoặc không phải ảnh (HTML, 404). Ngoại lệ: URL https trực tiếp còn mở được (`photo2.tinhte.vn/data/attachment-files/...` hoặc ảnh trang hãng, `Content-Type` là ảnh) thì ảnh có thể đang hiện; vẫn nên upload vào bài rồi đổi sang `[ATTACH=full]` để không phụ thuộc hotlink, nếu upload được.
5. Chú thích ảnh còn, thẻ ảnh đã mất (đúng kiểu "sửa xong thì hết link, vẫn không có hình").
6. `{{IMG:...}}` còn sót trong body (chưa được thay bằng attachment).
7. Trong `post_body_html`: thẻ `img.bbCodeImage` có `src` trỏ `/attachments/<id>/` mà id không có trong `attachments`, hoặc ảnh vỡ.

Không phải lỗi hình (không đụng):
- `[ATTACH=full]id[/ATTACH]` khớp một phần tử trong `attachments` và `attachment_is_inserted=true`.
- Ảnh cover trong `attachments`, `attachment_is_inserted=false`, không chèn trong body.

Cấm:
- Không xoá markup ảnh hay chú thích khi chưa chèn lại ảnh đúng. Không có file nguồn thì giữ nguyên chỗ hỏng, ghi vào "không kiểm được".
- Không đổi `[ATTACH=full]` đang đúng thành `[IMG]`.
- Không thay `[ATTACH]id[/ATTACH]` bằng `[IMG]https://tinhte.vn/attachments/id/[/IMG]` (đây là cách làm hết chữ "view attachment" nhưng ảnh vẫn không hiện, rồi attachment dễ bị gỡ khỏi bài).
- Không tự bịa ảnh, không hotlink shop, không tạo thread mới để lấy attachment.

### Cách sửa
1. Sao lưu bản gốc theo mục 5 trước khi đổi body hay upload.
2. Với mỗi chỗ hỏng, tìm file/URL nguồn theo thứ tự: URL https trực tiếp còn mở được trong thẻ `[IMG]` (`photo2.tinhte.vn/data/attachment-files/...` hoặc ảnh nguồn); `links.permalink` của attachment còn gắn bài; ảnh trên trang hãng hoặc bài nguồn trong dòng `Theo:` (webfetch, URL file ảnh). Tải về thư mục tạm nếu tool upload cần file local (ví dụ `/Users/khang/AI/tinhte-uploads/` hoặc thư mục backup). Không có nguồn thì không xoá thẻ, ghi "không có file nguồn để upload lại".
3. Upload lại vào đúng bài đang sửa, không gọi `create_thread`:
   - Dùng tool đính kèm/upload của MCP `tinhte` (xem tên trong danh sách tool; thường nhận file hoặc URL https). Truyền `post_id` của bài đầu.
   - Nếu tool yêu cầu `attachment_hash`: tạo một hash mới (chuỗi hex hoặc uuid, không khoảng trắng), dùng cùng hash cho mọi ảnh upload trong lượt này, rồi gửi kèm hash đó khi `edit_post` nếu tool hỗ trợ trường này.
   - Đúng ngữ nghĩa API Tinhte (bdApi): `POST posts/attachments` với `post_id` (bắt buộc khi sửa bài đã có) và `attachment_hash` nếu tool cần; nhận `attachment.attachment_id`. Attachment chỉ gắn hẳn vào bài sau khi lưu body bằng `edit_post`. Không dùng `POST threads/attachments` (chỉ cho bài chưa tạo). Không tự gọi curl kèm token, không in token.
4. Trong `post_body`, thay đúng chỗ hỏng bằng `[ATTACH=full]<id_mới>[/ATTACH]`. Giữ nguyên chú thích `[CENTER][I]…[/I][/CENTER]` ở dòng ngay dưới. Nếu chỉ thiếu `=full` mà `id` vẫn còn trong `attachments`: chỉ thêm `=full`, không upload lại, không đổi id.
5. Gọi `edit_post` với toàn bộ body mới, gộp chung với các sửa thông tin/bố cục trong cùng lần gọi nếu có (vẫn theo giới hạn số lần ở mục 5).
6. Đọc lại bằng `get_thread(thread_id)` (và attachments của post nếu cần): mỗi id mới phải có trong `attachments` và `attachment_is_inserted=true`; body không còn `[IMG]…/attachments/<id>/[/IMG]` hỏng hay `[ATTACH]` thiếu `=full`; `post_body_html` (nếu có) hiện `src` ảnh thật (thường `photo2.tinhte.vn/data/attachment-files/...`), không phải URL 404. Còn sót thì sửa lần 2 theo mục 5. Lần 2 vẫn hỏng thì dừng, giữ markup, ghi báo cáo, không xoá thẻ, không gọi lần 3.

## 4. Template (chỉ đọc khung)
Đọc bằng `cat` (không sửa file) tại `/Users/khang/.openmausbot/workspaces/<id bot>/skills/<template>/SKILL.md`, phần "Tự kiểm tra trước khi giao" và cấu trúc. Không đọc được khung thì chỉ sửa theo mục 2–3 chung và các ngoại lệ đã ghi trong skill này.

| Bot, id | Template |
|---|---|
| 1 máy ảnh, lens: `ada33724-f87a-469e-ad45-4954f2a9fd8e` | template-ra-mat-may-anh-moi, template-ra-mat-ong-kinh-moi |
| 2 xe: `3ec20e27-7cb8-4df5-8e93-bd2b7ba6a4e7` | template-ra-mat-xe-moi, template-ra-mat-xe-2-banh-moi |
| 3 Pnghuy: `33a50c87-3e7d-490e-9e5e-0fc818079b78` | template-ra-mat-laptop-moi, template-ra-mat-linh-kien-pc, template-tin-tuc-ai, template-ra-mat-tai-nghe, template-ra-mat-smartphone, template-tin-loi-phan-cung-va-os |
| 4 bk9sw (Khoa Đinh): `01444de0-9b07-451f-920a-7c268fb81e3c` | template-ra-mat-linh-kien-pc-khoa-dinh, template-tin-tuc-quan-su, template-tin-tuc-hang-khong, template-tin-tuc-smart-phone, template-tin-tuc-windows-microsoft, template-bk9sw-drama-cong-nghe |
| Bài khoa học đại chúng | viet-bai-khoa-hoc |

Cách chọn bài tin: máy ảnh/máy quay → máy ảnh; ống kính → ống kính; ô tô → xe mới; xe máy, mô tô, xe điện hai bánh → xe 2 bánh; laptop; linh kiện PC (hai bản Pnghuy/Khoa Đinh: theo bot anh nói hoặc bố cục giống bản nào hơn); tin AI; tai nghe; smartphone ra mắt (Pnghuy) hoặc tin smartphone khác (Khoa Đinh); lỗi phần cứng/OS; quân sự; hàng không; Windows/Microsoft; drama, kiện tụng. Không chắc thì kiểm theo hai ứng viên, nêu chỗ khác nhau, chỉ sửa phần hai bản cùng yêu cầu.

Nhận diện `viet-bai-khoa-hoc` khi khớp một trong hai dấu hiệu sau, xét theo thứ tự, dừng khi đã xác định:
1. `{input}` có tên template `viet-bai-khoa-hoc` (hoặc lệnh `/viet-bai-khoa-hoc`, `/kh`).
2. Cuối bài có dòng dẫn `Nguồn tài liệu khoa học tham khảo:` hoặc `Nguồn tham khảo nội dung:` rồi ngay sau là `[LIST][*][URL='…'][B]…[/B][/URL]`.
Không nhận diện bài khoa học chỉ vì `forum_id` là 767: các bot viết tin cũng tạo bài trên forum 767. Forum 767 (cùng 215) chỉ quyết định được phép sửa hay chỉ báo cáo, không dùng để chọn template.

## 5. Sao lưu rồi sửa trên đúng thread
Chỉ khi `forum_id` là 215 hoặc 767, và có ít nhất một lỗi được phép sửa.
1. Sao lưu bản gốc: `mkdir -p /Users/khang/AI/mauscheck-backup` rồi ghi file `/Users/khang/AI/mauscheck-backup/<thread_id>-<YYYYMMDD-HHMMSS>.txt` (giờ Asia/Saigon), gồm `thread_id`, `post_id`, `forum_id`, `thread_title`, toàn bộ `post_body` gốc, và danh sách `attachments` gốc (id, filename, `attachment_is_inserted`). Không ghi được file thì dán nguyên bản gốc vào mục "Bản gốc" của báo cáo, rồi mới sửa.
2. Soạn `post_body` mới từ bản gốc: chỉ thay các chỗ mục 2–3 và 3b. Giữ nguyên `[ATTACH=full]` đang đúng, thứ tự mục, câu đúng. Không thêm ý mới ngoài dữ kiện thiếu mà nguồn đã có. Ảnh hỏng thì thay theo mục 3b, không giữ nguyên thẻ hỏng nếu đã upload được, và không xoá thẻ khi chưa có ảnh mới.
3. Gọi đúng một lần (trừ khi đọc lại thấy còn lỗi được phép sửa, tối đa 2 lần gọi):
   `edit_post(confirm=true, thread_id=<id>, post_body=<toàn bộ body mới>)`.
   Có `post_id` của bài đầu thì được dùng `post_id` thay `thread_id` (đúng một trong hai). Truyền `thread_title` chỉ khi tiêu đề cần sửa. Không truyền `thread_node_id`. Nếu bước 3b có `attachment_hash` thì truyền kèm khi tool cho phép.
4. Đọc lại bằng `get_thread(thread_id)`: đối chiếu từng chỗ đã sửa, kể cả id ảnh mới (mục 3b bước 6). Còn sót lỗi được phép sửa thì sửa lần 2 (sao lưu file khác, không đè file lần 1). Lần 2 vẫn sót thì dừng, ghi vào báo cáo, không gọi lần 3.
5. Tool lỗi thì dừng, giữ file sao lưu, báo nguyên văn lỗi (không kèm secret), không thử `create_thread` để đăng lại.

## 6. Báo cáo trong chat
```
Bài: <tiêu đề hiện tại> | <link> | forum <id> | post_id <id>
Template: <tên>
Nguồn đã dùng: <link, link>
Kết quả: <ĐÃ SỬA | KHÔNG SỬA: không có lỗi | KHÔNG SỬA: không phải forum 215 hoặc 767 | SỬA MỘT PHẦN>
Đếm: KHỚP x, SAI y, KHÔNG CÓ TRONG NGUỒN z, MÂU THUẪN m, CHƯA XÁC MINH c
Ảnh: <số thẻ trong body> | attachments <n> | hỏng <k> | đã sửa <s> | không upload lại được <u>
Bản gốc: <đường dẫn file hoặc "xem dưới">

ĐÃ SỬA
1. [Thông tin] Trước: "<câu gốc>"
   Sau: "<câu mới>"
   Căn cứ: <giá trị đúng> (<link>)
2. [Bố cục] <lỗi, vị trí>. Trước: <thẻ/dòng>. Sau: <thẻ/dòng>
3. [Hình] <vị trí, loại lỗi>. Trước: <thẻ>. Sau: [ATTACH=full]<id>[/ATTACH]. Nguồn ảnh: <url hoặc "permalink attachment">

KHÔNG SỬA (không kiểm được hoặc chưa xác minh)
- Cover, tỷ lệ, dung lượng ảnh: MCP không trả, không dùng trình duyệt.
- Ảnh hỏng nhưng không có file nguồn để upload lại: <thẻ, vị trí>
- <dữ kiện chưa xác minh>

CÒN SÓT
- <nếu đọc lại vẫn còn, lý do>
```
Không có căn cứ thì không sửa chỗ đó. Bài sạch thì nói sạch, không gọi `edit_post`, không bịa lỗi.

## 7. Tự kiểm trước khi gửi báo cáo
- Đã đọc cả bài và dòng `Theo:` hoặc khối nguồn khoa học. Mỗi chỗ "SAI" đã sửa đều có link nguồn.
- Đã đối chiếu thẻ ảnh với `attachments`. Không xoá thẻ ảnh hỏng. `[ATTACH=full]` mới (nếu có) đã xuất hiện trong `attachments` sau khi đọc lại, `attachment_is_inserted=true`.
- `forum_id` trước và sau vẫn 215 hoặc 767 (nếu đã sửa). Đã lưu bản gốc trước khi gọi `edit_post`.
- Không đổi văn phong. Không dùng trình duyệt. Không gọi `create_thread`. Không truyền `thread_node_id`.
