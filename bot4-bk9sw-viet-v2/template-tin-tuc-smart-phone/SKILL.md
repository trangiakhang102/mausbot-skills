---
name: template-tin-tuc-smart-phone
description: "Viết tin tức smartphone cho tinhte.vn theo văn phong Khoa Đinh (bk9sw) — ra mắt, rò rỉ, cập nhật phần mềm, giá/thị trường, sự cố, chính sách, chuỗi cung ứng — từ link hoặc chủ đề; gọi bằng /template-tin-tuc-smart-phone. Viết xong đăng forum 767 và trả link theo soul."
---
Nguồn: {input}
# Template tin tức smartphone — giọng Khoa Đinh (tinhte.vn)

Biến link nguồn (thông cáo hãng, GSMArena, Reuters, Nikkei, iFixit, blog hãng…) thành bài BBCode đúng giọng Khoa Đinh (bk9sw) trên tinhte.vn.

## Khi nào dùng
- Lệnh `/template-tin-tuc-smart-phone <link hoặc chủ đề>`.
- Tin smartphone đã có nguồn: ra mắt hoặc sắp ra mắt; rò rỉ/tin đồn (gắn là chưa chốt); cập nhật phần mềm, tính năng, chính sách nền tảng; giá, doanh số, sản xuất, chuỗi cung ứng/chip cho máy; sự cố, bảo mật, quyền riêng tư; tự sửa chữa, quy định (pin, USB-C); mổ máy; lịch sử, câu chuyện, khám phá; giải thích chính sách cập nhật hoặc máy cũ.
- File format 30 bài có bài lệch chuyên mục. Không học bố cục từ: điều tra nghe lén/tấn công hạ tầng (FBI–Trump/Vance, chuyên mục Máy bay - Khoa học); vụ kiện nhà mạng/SIM swap lấy bồi thường làm trọng tâm (T-Mobile); tin dịch vụ/app không bám sản phẩm hay nền tảng máy (Netflix bỏ cast). Không dùng cho trên tay/đánh giá dài, Kindle, Vision Pro, cửa hàng game console.
- Ranh giới với `/template-ra-mat-linh-kien-pc-khoa-dinh`: foundry/chip thuần (CXMT, DRAM) dùng skill linh kiện. Skill này khi góc viết là điện thoại hoặc chuỗi cung ứng máy.
- Không viết tin đồn như đã chốt. Không bịa thông số, giá, ngày.

## Quy trình
1. Đọc hết nguồn trong `{input}`. Thông số, giá, ngày bán, số liệu thị trường: đối chiếu thông cáo hoặc báo cáo gốc. Nguồn lệch thì ghi rõ từng bên, không tự chọn số "đẹp".
2. Kiểm tra chéo ít nhất một nguồn khác với tin rò rỉ, sự cố bảo mật, cáo buộc giám sát hoặc số doanh số.
3. Xác định kiểu tin (mục 6), kiểu máy và phân khúc (mục 7), rồi chọn bản ở mục 3.
4. Lấy đủ dữ liệu mục 4. Thiếu thì "chưa rõ"/"chưa công bố" hoặc bỏ; không suy diễn.
5. Chọn cover, viết tiêu đề và thân bài theo khung dưới, rồi chạy mục 9. Khi nguồn có nhiều hình, ưu tiên cover khác ảnh đầu.
6. Tự rà: đúng số liệu, tên máy, SoC, đơn vị, chính tả. Không bắt chước lỗi gõ trong bài mẫu ("Samsugn", "Androdi", "cũ thể").
7. Tải và chèn ảnh, đăng bài, trả link: theo mục Đầu ra.
8. Gửi kết quả link tinhte.vn cho @mauscheck và gọi skill /mauscheck bằng `coordinate_bots` tới mauscheck với `thread: "new"` (mỗi lần kiểm tra mở một thread mới), nội dung `/mauscheck <link bài> <link nguồn chính> template-tin-tuc-smart-phone`.

## 1. Tiêu đề
Bài mẫu gần như không dùng dấu hai chấm làm công thức (3/30: lời trích, "OS 5:", "nội địa:"). Không ép `[Hãng] ra mắt [máy]: [điểm]`.

Công thức hay gặp (trung vị ~72 ký tự, thường 55–100):
`[Hãng] [động từ] [máy/sự việc], [điểm nhấn hoặc cú twist]`
`[Tên máy] - [định vị]`
- Câu sự việc, thường có hook: `Sony sáng nay đã ra mắt Xperia 10 VIII mới và nó "y như cũ"`; `Galaxy S8/Note 8 bất ngờ có bản cập nhật`.
- Tên + gạch ngang: `Qin F22 Pro - smartphone Android đội lốt điện thoại cục gạch của Xiaomi`; `iFixit mổ Trump Mobile T1 - hoá ra HTC U24 Pro đội lốt`.
- Tít hỏi khi tin còn bỏ ngỏ hoặc bài giải thích: `Toàn dải Pixel sẽ được sản xuất tại Việt Nam trong năm tới?`. Không tít hỏi khi sự việc đã chốt (đã ra mắt, đã phát hành cập nhật).
- Gắn nguồn hoặc lời khẳng định khi tin chưa chốt: `Onward Mobility khẳng định: "Chúng tôi chưa chết"…`.
- Biệt danh, cách nói hình ảnh để trong ngoặc kép: `"khịa"`, `"y như cũ"`, `"app lạ"`, `"chính chủ"`, `"đội lốt"`, `"đem con bỏ chợ"`.
- Động từ đúng việc: "ra mắt", "sẽ ra mắt", "khẳng định sẽ cập nhật", "tiết lộ", "mổ". Không "siêu phẩm", không phẩy treo, không tít reo hò.

## 2. Ảnh cover
- Cover là thumbnail riêng. Tỉ lệ phổ biến ~1,62 (2048×1268) hoặc 16:9 (1920×1080). Ảnh vuông/4:3/dọc cắt về 16:9, 3:2 hoặc ~1,62; dưới 700KB, jpg/png/webp. Cover 320×180 ở bài mẫu là bản xem trước — lấy bản phân giải cao.
- Ưu tiên: (1) ảnh sản phẩm chính thức, máy rõ, nền sạch; (2) ra mắt/rò rỉ: key visual hoặc render hãng (không render tin đồn không nguồn); (3) cập nhật: ảnh máy hoặc giao diện; (4) thị trường: lineup hoặc biểu đồ nguồn; (5) mổ máy: ảnh teardown; (6) sự cố bảo mật: ảnh minh hoạ, không lộ dữ liệu cá nhân.
- Không watermark shop, ảnh chế, slide chữ dày.
- Đại đa số bài mẫu dùng cùng file cho cover và ảnh đầu, nhất là tin ngắn. Khi đủ hình, ưu tiên cover khác ảnh đầu.

## 3. Bố cục và các mục H2
Khác skill sản phẩm: 24/30 bài format không có H2, kể cả tin vừa (Face Unlock, tự sửa, Jolla, EU pin). Chỉ bài nhiều lớp mới tách mục: lịch sử, khám phá, chính sách theo hãng, điều tra/mổ máy. Không thêm H2 cho đủ. Mặc định không H2 "Kết". Một bài điều tra mẫu có "Kết luận và khuyến nghị" — chỉ dùng khi bài phân tích cần lời khuyên cụ thể, không gắn vào tin ra mắt/cập nhật.

**Bản ngắn/tin nóng (400–1.200 từ):** một sự việc (ra mắt, cập nhật, teaser). Mở 1–2 đoạn (sự việc + nguồn + điểm nhấn) → ảnh hoặc video → thông số dệt trong đoạn; `[LIST]` chỉ khi cụm thông số dày → câu khép → dòng nguồn. Không H2.

**Bản chuẩn (1.200–3.500 từ, thường không H2):** chính sách, tính năng, thị trường, ra mắt có bối cảnh. Mở: sự việc + nguồn. Lần lượt đây là gì, ai công bố, số cốt lõi, so đời trước hoặc đối thủ, "chưa rõ", câu khép. Xen ảnh–đoạn.

**Bản nhiều lớp (2.500–9.000 từ):** 2–7 `[H2]` khi có nhiều hãng, nhiều lớp kỹ thuật hoặc nhiều giai đoạn: tên hãng, câu mô tả (`"Nghi vấn" Made in USA`), hoặc câu hỏi. Ảnh ngay dưới H2, trước đoạn minh họa.

Đặt tên H2 cụ thể, không "Tổng quan". `[H2]Tiêu đề[/H2]` trơn, không lồng `[B]`, không đánh số, không H2 rỗng, không `[HEADING]`. `[H3]` chỉ khi gắn link bài liên quan hoặc mục con thật sự cần.

## 4. Nội dung bắt buộc
Luôn có (thiếu thì "chưa rõ"/"chưa công bố" hoặc bỏ):
- Ai công bố (hãng, iFixit, Counterpoint, Nikkei) và ngày hoặc sự kiện ("sáng nay", "hôm 6 tháng 1", "tại MWC 2022").
- Tên máy/dòng viết đủ lần đầu (Xperia 10 VIII, Galaxy S8, Pixel 7 Pro).
- Đây là việc gì và mức xác nhận: thông cáo, "nguồn tin độc quyền", "có thể sẽ", "chưa rõ".
- Thông số cốt lõi chỉ khi nguồn có: SoC, RAM/bộ nhớ, màn, camera, pin, sạc, OS và số năm cập nhật, giá, ngày bán. Không suy số còn thiếu.
- Bối cảnh ngắn: đời trước, đối thủ, vì sao đáng nói (LG đã rời mảng di động; S8 đã "đồ cổ"; máy "đội lốt").
- Nguồn mọi số nhạy: "Google cho biết", "Nikkei Asia cho biết", "iFixit khẳng định".

Có thì đưa: biến thể (Pro, Pro Fold, Ultra); thị trường bán; so iPhone/Android khi nguồn có; link bài tinhte `[URL='…'][B]Tên bài[/B][/URL]` trong câu. Giá Việt Nam chỉ khi có nguồn chính thức; `499 EUR (~15,3 triệu đồng)` là ước lượng, không phải giá niêm yết tại VN. File mẫu chưa có bài ra mắt/giá chính thức tại VN — gặp tin này thì ghi rõ kênh, ngày, giá từng bản, không suy từ giá quốc tế.

## 5. Đặt ảnh
- Nguồn không có hoặc ít hình chính thức (nhiều bài chính sách/gọi vốn chỉ dùng cover) thì tìm ảnh nguồn khác để minh họa hợp lý. Bản đủ có 2 ảnh trở lên hoặc video; sự kiện nhiều hơn thì ảnh dư gom `[galleria]` cuối bài.
- Mỗi H2 bắt buộc có ít nhất 1 ảnh, trước đoạn văn nó minh họa. Không lấy cover làm ảnh trong bài.
- Số ảnh: tin nóng 3–5; bản chuẩn 4–7; khám phá/lịch sử/mổ máy 5–16. Video `[MEDIA=youtube]id[/MEDIA]` hoặc `[MEDIA=twitter]id[/MEDIA]`; bài teaser đưa media ngay sau đoạn mở.
- Ảnh đầu sau đoạn mở, rồi xen ảnh–đoạn. Có H2 thì ảnh ngay dưới H2. Biểu đồ, ảnh so bo mạch đặt sát đoạn diễn giải. Chú thích `[I]…[/I]` khi cần.
- Ảnh ngoài chưa tải: `[IMG]url[/IMG]`. Có thể chèn bảng so sánh, nhưng không tự bịa thông số.

## 6. Theo kiểu tin
- **Ra mắt:** mở bằng việc đã xảy ra và định vị. Xperia 10 VIII vào thẳng "y như cũ", rồi thiết kế, `[LIST]` cấu hình khi thông số dày, số năm cập nhật, giá nếu có. Jolla: ra mắt + OS + giá đặt trước, rồi bối cảnh hãng. Qin F22 Pro: "vừa xuất hiện" trên cơ sở dữ liệu, dệt thông số, "chưa rõ giá". Phân biệt "đã ra mắt", "sẽ ra mắt vào tháng 4", "xuất hiện trên chứng nhận". HTC flagship/metaverse: giữ "chưa rõ".
- **Rò rỉ, tin đồn, kế hoạch chưa chốt:** đánh dấu suốt bài (`Nguồn tin độc quyền từ Nikkei Asia`, `có thể sẽ`, `được cho`, tít hỏi). Xperia 1 V: "chưa có nhiều thông tin", "phải đến giữa năm sau". Pixel sản xuất tại VN: kế hoạch 2027, không viết như nhà máy đã chuyển xong. Không nâng tin đồn thành thông cáo.
- **Cập nhật phần mềm, tính năng, chính sách nền tảng:** máy nào, bản nào (mã build nếu có), phạm vi, đổi gì. S8/Note 8 hết hỗ trợ, "đồ cổ", bản không đổi OS — thường chỉ vá lỗi. LG cam kết Android 12: đối chiếu lịch đã hứa và thực tế. Tính năng mới (Face Unlock, One UI 9 chặn Juice Jacking, S26 AirDrop, recovery mất hạ cấp OS, Google chặn app không "chính chủ"): cơ chế, giới hạn, hệ quả. Sideload: mốc thời gian, nước áp dụng trước, so iOS; không thành hướng dẫn lách luật.
- **Giá, doanh số, sản xuất, Việt Nam:** số phải có nguồn (Counterpoint, Nikkei). Giá như mẫu: `150 - 250 đô`, `tầm 600 EUR`. Sản xuất tại VN là tin chuỗi cung ứng, không phải "ra mắt tại Việt Nam". Giá Pixel kèm theo chỉ là giá quốc tế. Chưa có bài mẫu giá niêm yết VN.
- **Chip, chuỗi cung ứng cho máy:** Apple–Broadcom, vận động mua chip nhớ, Google gom đơn DRAM cho Pixel. Tách việc đã ký khỏi lời vận động. Foundry thuần để skill linh kiện.
- **Sự cố, bảo mật, quyền riêng tư:** việc + quy mô có nguồn, không suy số nạn nhân. Tên app/mã độc, hãng đã gỡ chưa, lời khuyên ngắn (đổi mật khẩu, xác thực 2 lớp) — không thành hướng dẫn tấn công. Xiaomi nội địa: tách "hãng nói chống gian lận" khỏi phát hiện độc lập; máy nội địa khác bản quốc tế. RCS/máy công ty: chỉ Fully Managed Device.
- **Chính sách, tự sửa, quy định:** ai công bố, thị trường, máy được hỗ trợ, mốc thời gian. So Apple/Samsung/Google khi nguồn có. EU pin: không viết "iPhone sẽ có pin tháo rời" như đã chốt — giữ "có thể", "nếu được thông qua".
- **Mổ máy / "đội lốt":** dẫn iFixit, so từng phần (màn, bo, SoC, RAM, pin, sạc). Tách quan sát khỏi suy luận. Không kết luận pháp lý "Made in USA" nếu nguồn chưa chốt.
- **Lịch sử, câu chuyện, khám phá:** móc hiện tại rồi kể theo thời gian (N91; Nokia 16 năm; máy Triều Tiên theo clip). "Mình"/"anh em" vừa phải. Khám phá: ghi đang theo nguồn clip, không viết như mình trên tay.
- **Giải thích, chính sách cập nhật, máy cũ:** có thể H2 theo hãng. Số năm OS/bảo mật theo từng dòng, không gộp cả hãng. Lời khuyên ("Android 12 hay 13 an toàn hơn") là nhận định.
- **Teaser, marketing:** ngắn, trích câu chốt, kèm clip, không tự lập bảng so thông số.

## 7. Theo kiểu máy, phân khúc và hãng
Viết theo dữ liệu nguồn; không bịa thế mạnh.

**Kiểu máy** (chưa có bài mẫu thì chỉ dùng số hãng):
- **Flagship dạng thanh:** Pixel 7/7 Pro, Galaxy S/Ultra, S8/Note 8, HTC cao cấp. Nhấn đúng điểm nguồn, so đời trước và iPhone khi có.
- **Gập/flip:** mẫu chỉ nhắc Z Flip 4 và Pixel 11 Pro Fold. Ghi rõ bản gập, giá nếu có; không bịa độ bền bản lề.
- **Máy ảnh:** Xperia 1 — triết lý viền/camera trước; giữ đúng mức "kỳ vọng" của hãng.
- **Tầm trung, compact:** Xperia 10 VIII (6,1", ~600 EUR) — so đời trước thật thà, kể cả "y như cũ"; jack 3,5 mm, khe thẻ, số năm cập nhật nếu có.
- **Cục gạch/feature phone Android:** Qin F22 Pro — nút bấm + cảm ứng, SoC, Android đủ dùng, "chưa rõ giá".
- **Máy lạ, OS khác, "đội lốt":** Jolla/Sailfish (riêng tư, pin tháo, không Play); T1 = U24 Pro. Không viết như flagship mainstream.
- **iPhone và Android:** so chỉ khi nguồn có (Face ID vs Face Unlock, số năm cập nhật, tự sửa, teaser Samsung). Không bênh hãng.
- **Máy nội địa:** nói rõ thị trường (HyperOS nội địa ≠ bản quốc tế).
- **Gaming, rugged, Mini/Lite/FE:** gần như không có bài riêng (thoáng Key2 LE, Pro/Fold). Viết phần bị cắt so bản đầy đủ và giá theo thông cáo; không dựng giọng "máy chơi game" nếu hãng không nói.

**Phân khúc:** phổ thông/giá rẻ (`150 - 250 đô`, cục gạch) nhấn giá và phần cắt; tầm trung (Xperia 10, U24 Pro) so đời trước và flagship cùng hãng; flagship (Pixel Pro, Galaxy S/Ultra, Xperia 1) đủ thông số và cập nhật; siêu cao cấp/gập ít mẫu — chỉ giá và vị trí dòng khi nguồn có. Không tô "đắt nhất thế giới" nếu hãng không công bố.

**Hãng có bài mẫu:** Samsung (teaser, cập nhật, tự sửa, One UI, S26, máy cũ); Google/Pixel (Face Unlock, iFixit, sản xuất, RCS, sideload); Apple/iPhone (đối chiếu, quy định, chip); Sony/Xperia (ra mắt 10, rò rỉ 1); Xiaomi (cục gạch, HyperOS nội địa, cập nhật); HTC (sắp ra mắt, đội lốt); LG (cập nhật dư âm); Jolla; BlackBerry/OnwardMobility. Oppo, Vivo, OnePlus, Realme chủ yếu trong bài chính sách cập nhật — đúng số năm từng dòng. Chưa có bài mẫu thuần (Nothing, Honor, Asus ROG, Nubia, Fairphone): theo thông cáo, không đoán giọng hãng.

## 8. Văn phong, số liệu, thuật ngữ
- **Giọng:** khách quan, gắn nguồn, có thể có câu nhận định ngắn sau khi đã đưa dữ liệu ("Quá khó hiểu khi Sony…"). Không PR, không chửi hãng, không cổ vũ phe iPhone hay Android.
- **Xưng hô:** tin thông cáo, thị trường, sự cố viết khách quan, thường không "mình"/"anh em". "Mình" vừa phải khi có trải nghiệm thật (đang xài V50, máy Android cũ) hoặc một câu nhận định. "Anh em" ở bài giải thích, lịch sử, gợi nhớ hãng. Không "tôi" trừ trích dẫn, không "các bạn", không "quý độc giả". "Bạn" chỉ trong bài giải thích hoặc quyền riêng tư; không dùng ở tin cáo buộc nặng.
- **Câu:** đoạn 2–5 câu một ý. Mở vào sự việc, bối cảnh hoặc nguồn, không cứng "[Hãng] vừa chính thức ra mắt". Câu chuyển: "Điều thú vị là", "Thế nhưng", "Chưa rõ", "Điều đáng nói", "Được biết".
- **Nên dùng:** "đội lốt", "cục gạch", "đồ cổ", "đem con bỏ chợ", "chưa rõ", "được cho", "flagship", "nội địa".
- **Tránh:** "siêu phẩm", "đỉnh của chóp", emoji, viết như đã trên tay khi chỉ có thông cáo hoặc clip người khác.
- **Giữ tiếng Anh:** SoC, Snapdragon, Tensor, Helio, RAM, LPDDR, OLED, USB-C, eSIM, Face ID, Face Unlock, Play Store, APK, sideload, RCS, HyperOS, One UI, Sailfish OS, iFixit, ODM, ROM, AOSP.
- **Viết tiếng Việt:** điện thoại, màn hình, pin, sạc nhanh, cảm biến vân tay, camera trước/chính, bản cập nhật, vá bảo mật, lên kệ, đặt hàng trước, tự sửa chữa.
- **Tên máy:** giữ nguyên Galaxy S22 Ultra, Pixel 11 Pro Fold, Xperia 10 VIII (Mark 8), iPhone 14 Pro Max, Snapdragon 6 Gen 3, Android 16. Lần đầu có thể thêm loại Việt.
- **Định dạng số (theo mẫu):**
  - Thông số: phẩy thập phân, có khoảng trắng trước đơn vị: `6,1"`, `15,3 triệu đồng`, `19,35 Wh`, `8 GB RAM`, `5000 mAh`, `108 MP`, `30 W` (mẫu đôi khi viết `30W` — một bài giữ một kiểu). Cảm biến giữ kiểu nguồn: `1/1.56"`.
  - Dải số: `150 - 250 đô`, `8 - 10%`.
  - Tiền: mẫu hay dùng `899 đô`, `tầm 600 EUR`, `499 EUR (~15,3 triệu đồng)`, `4 tỷ đô`. Đôi khi `USD`, `đô la`. Không `$`, không `VNĐ`. Một bài chọn một kiểu (`đô` hoặc `USD`) và giữ đến cuối; "đồng" cho giá Việt hoặc phép đổi rõ là ước lượng. "tỷ" và "tỉ" đều có trong mẫu — một bài một kiểu.
- **Câu khép:** hiện trạng, "chưa rõ giá/thị trường", hệ quả người dùng, hoặc bước tiếp theo. Không H2 kết với tin nóng.

## 9. Tự kiểm tra trước khi giao
- [ ] Tít theo mẫu Khoa Đinh (câu sự việc, tên + gạch ngang, hoặc tít hỏi chỉ khi còn bỏ ngỏ/giải thích); không ép hai chấm, không phẩy treo.
- [ ] Cover 16:9, 3:2 hoặc ~1,62, dưới 700KB, không watermark; khác ảnh đầu bài nếu đủ hình.
- [ ] Đúng bản (ngắn / chuẩn không H2 / nhiều lớp có H2 khi cần). H2 trơn, không rỗng, không "Kết" trừ bài điều tra cần khuyến nghị.
- [ ] Mọi thông số, giá, ngày, số doanh số đều có nguồn hoặc ghi "chưa rõ". Tin đồn/rò rỉ được gắn nhãn. Không bịa, không suy diễn, không viết như đã trên tay.
- [ ] Giọng trung lập. "Mình"/"anh em" chỉ khi có căn cứ. Không "các bạn".
- [ ] Tên máy, SoC, hãng viết đúng; không copy lỗi gõ mẫu.
- [ ] Chỉ BBCode XenForo (`[H2]`, `[B]`, `[I]`, `[LIST][*]`, `[URL='…']`, `[MEDIA]`, `[IMG]`), không Markdown, không `[HEADING]`. 100% tiếng Việt, giữ thuật ngữ Anh thông dụng. Số/tiền theo mục 8.
- [ ] Dòng nguồn cuối bài: `Theo: [URL='link'][B]Tên nguồn[/B][/URL]` (nhiều nguồn cách nhau dấu phẩy hoặc chấm phẩy). Bài mẫu thường chỉ chèn link hoặc ghi `Theo:`/`Tham khảo:` — skill vẫn bắt buộc `Theo:` cho đồng bộ các skill khác.

## 10. Đầu ra
Theo soul: `create_thread` ở forum 767 (ảnh theo soul), trả tiêu đề và link, không in bài. Bàn giao mauscheck: theo bước cuối mục Quy trình.
