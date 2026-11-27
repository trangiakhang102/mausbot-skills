---
name: template-ra-mat-may-anh-moi
description: "Viết tin \"ra mắt máy ảnh mới\" cho tinhte.vn (mirrorless, compact, medium format, action cam, camera 360, máy quay gimbal, instax) từ link hoặc chủ đề; gọi bằng /template-ra-mat-may-anh-moi. Viết xong đăng forum 767 và trả link theo soul."
---
Nguồn: {input}
# Template tin ra mắt máy ảnh mới (tinhte.vn)

Biến link nguồn (thông cáo hãng, báo nước ngoài, thông tin sự kiện tại VN) thành bài BBCode đúng giọng và bố cục bài tin máy ảnh trên tinhte.vn. Khung rút từ 18 bài ra mắt máy ảnh đã đăng và văn phong 200 bài gần nhất của cây bút chuyên mảng máy ảnh. Bài đăng ở forum 767 theo soul, đăng xong không tự sửa.

## Khi nào dùng
- Lệnh `/template-ra-mat-may-anh-moi <link hoặc chủ đề>`.
- Thân máy hoặc thiết bị ghi hình vừa công bố chính thức: mirrorless full-frame, APS-C, M43, medium format, compact ống liền, action cam, camera 360, máy quay gimbal kiểu Pocket, máy số bỏ túi kiểu Instax Pal, máy quay "V"/cinema nhỏ gọn.
- Máy đã công bố toàn cầu nay ra mắt hoặc có giá chính thức tại VN.
- Không dùng cho bài chỉ về ống kính, tin đồn/rò rỉ, trên tay/trải nghiệm/review, firmware, tin hoãn giao hàng. Gặp dạng này, báo lại và dùng `/viet-tin`.

## Quy trình
1. Đọc hết nguồn trong `{input}`. Đối chiếu thông số, giá với trang sản phẩm hoặc thông cáo chính thức của hãng; báo lệch hãng thì lấy theo hãng, bỏ thông tin khác hãng.
2. Kiểm tra chéo ít nhất 1 nguồn khác nếu tin quan trọng.
3. Xác định: (a) công bố toàn cầu hay ra mắt tại VN, (b) dòng máy (mục "Theo dòng máy"), (c) phân khúc (mục "Theo phân khúc"), (d) chỉ viết tin ra mắt máy mới, không viết bản đặc biệt của máy đã ra mắt trước.
4. Lấy đủ dữ liệu theo checklist "Nội dung bắt buộc"; thiếu mục nào ghi "chưa công bố", không suy diễn.
5. Chọn cover, viết tít và thân bài theo khung dưới, rồi chạy "Tự kiểm tra". Cover không trùng ảnh đầu bài
6. Tự rà lại: đúng số liệu và tên, không lỗi chính tả, không còn câu Anh thừa.
7. Tải và chèn ảnh, đăng bài, trả link: theo mục Đầu ra.
8. Gửi kết quả link tinhte.vn cho @mauscheck và gọi skill /mauscheck bằng `coordinate_bots` tới mauscheck với `thread: "new"` (mỗi lần kiểm tra mở một thread mới), nội dung `/mauscheck <link bài> <link nguồn chính> template-ra-mat-may-anh-moi`.

## 1. Tiêu đề
Công thức chính (13/18 mẫu có dấu hai chấm):
`[Hãng] ra mắt [Tên máy]: [điểm nhấn 1], [điểm nhấn 2], [điểm nhấn 3], [giá]`
- Điểm nhấn theo thứ tự ưu tiên: độ phân giải hoặc loại cảm biến → video mạnh nhất → tính năng mới đáng nói nhất (IBIS, Open Gate, EVF, nút màu, chống nước…) → giá đặt cuối nếu có.
- Viết số liền đơn vị: `102MP`, `24.5MP`, `4K60`, `7K60 RAW`, `6.2K 4:2:2 10-bit`, `IBIS 8.5 stop`, `13.5 stop DR`, `2.199 USD`.
- Dài khoảng 60–100 ký tự, 2–4 điểm nhấn. Không để phẩy hay "..." treo cuối tít.
- Biến thể trong mẫu:
  - Nhấn "chính thức": `[Tên máy] chính thức ra mắt: …` (ví dụ: "Canon EOS R6 Mark III chính thức ra mắt: 7K60 RAW, Open Gate, IBIS 8.5 stop, 32.5MP").
  - Ra mắt tại VN: `[Hãng] Việt Nam ra mắt [Tên máy][ và ống kính đi cùng]: [giá VN]`, giá viết gọn kiểu "114 triệu". Nhiều sản phẩm cùng lúc: `[Máy 1], [Máy 2]… chính thức ra mắt tại Việt Nam`.
  - Bản rút gọn hoặc biến thể: `[Tên máy]: [khác biệt chính], [chênh giá so với bản gốc]` (ví dụ: "Nikon Z5 IIC: full-frame bỏ kính ngắm, rẻ hơn Z5 II khoảng 450 USD").
  - Máy phong cách hoặc "máy vui": nhấn trải nghiệm thay vì spec (ví dụ: "Fujifilm ra mắt máy ảnh Instax Pal 2: bỏ túi, 30 bộ lọc màu, thiết kế đẹp").
  - Chỉ nhắc kỷ lục ("nhỏ nhất thế giới", "nhẹ nhất") khi hãng tự công bố; nêu rõ trong bài theo hãng.
- Tránh tít mơ hồ "[Tên máy] - máy ảnh compact mới của [hãng]" hoặc tít câu hỏi khi đã có thông tin.

## 2. Ảnh cover
- Cover là ảnh riêng gắn làm thumbnail, thường không lặp trong thân bài. Ảnh ngang, tỷ lệ khoảng 16:10 hoặc 3:2, rộng 1.200–2.048px.
- Thứ tự ưu tiên từ nguồn:
  1. Ảnh sản phẩm chính thức của hãng: thân máy gắn ống kính, chính diện hoặc góc 3/4, nền sạch (đen, trắng, xám, màu trơn). Phổ biến nhất trong mẫu.
  2. Ảnh lifestyle chính thức: bàn tay cầm máy hoặc người đang chụp, máy giữa khung, rõ logo.
  3. Ra mắt tại VN: ảnh tự chụp tại sự kiện, máy cầm tay hoặc đặt bàn, thấy rõ tên máy.
  4. Nhiều phiên bản hoặc nhiều máy: một ảnh xếp các máy cùng khung.
- Compact, action cam, camera 360, Pocket: chọn ảnh thấy rõ ống kính và màn hình. Máy dạng hộp, không báng (kiểu Sigma fp): ảnh trước-sau đặt cạnh nhau cũng được.
- Không lấy ảnh watermark shop, render tin đồn, slide chữ dày đặc, hoặc ảnh mẫu chụp từ máy làm cover.
- Ảnh đầu thân bài là ảnh sản phẩm khác (góc khác, cận nút hoặc màn hình), đặt sau đoạn mở hoặc trước list thông số.

## 3. Bố cục và các mục H2
Bản đầy đủ (500–1.000 từ, nguồn dày):
1. Mở bài, không H2: 1–3 đoạn ngắn. Câu đầu theo mẫu "[Hãng] vừa chính thức ra mắt [máy], [định vị: loại cảm biến, độ phân giải, video tối đa], [điểm đặc biệt nhất]". Có thể móc sự kiện ("tại sự kiện X-Summit…"), khoảng cách đời trước ("Sau 7 năm kể từ…") hoặc phân khúc.
2. `{{IMG}}` ảnh sản phẩm, rồi dòng `Thông số chính:` (hoặc `Các thông tin cơ bản:`), rồi `[LIST]` 7–15 ý.
3. Các `[H2]` theo điểm nhấn, xếp quan trọng nhất xuống. Thường gặp:
   - Thiết kế, ngoại hình, nút hoặc vòng xoay mới; cảm biến, chụp ảnh, lấy nét; khả năng quay video; màn hình, EVF, pin, cổng, thẻ nhớ (có thể gộp là "Các thông tin khác")
4. Mục tùy chọn, chỉ khi có dữ liệu: `Hình ảnh thực tế [máy]` (sự kiện tại VN), ống kính hoặc phụ kiện ra mắt cùng (mỗi sản phẩm một H2 riêng), các phiên bản trong series, `Các điểm hạn chế`, mẫu ảnh chụp thử (dùng `[galleria]`).
5. `[H2]Giá bán và ngày lên kệ[/H2]` (hoặc `Giá bán` / `Giá`).
6. `[H2]Kết[/H2]`: 1–3 đoạn.
7. Dòng nguồn: `Theo: [URL='link'][B]Tên nguồn[/B][/URL]`.

Bản ngắn (dưới khoảng 450 từ, nguồn mỏng, 8/18 mẫu): mở bài → list thông số → các cặp ảnh + đoạn ngắn → giá → một đoạn kết → dòng nguồn. Không H2, không thêm H2 chỉ để cho đủ.

Đặt tên H2 theo số hoặc tính năng, tránh tên chung chung. Ví dụ: "EVF độ sáng 4000nits", "Base ISO 80 mới (cũ là ISO 100)", "Cảm biến 24.5MP partially stacked, chụp liên tiếp 20 hình/giây", "Thời lượng pin lên tới 4 tiếng". Dùng `[H2]Tiêu đề[/H2]` trơn, không lồng `[B]`, không để ảnh trong H2, không H2 rỗng. Chỉ dùng `[H3]` cho mục con thật cần.

## 4. Nội dung bắt buộc
Luôn có (thiếu thì ghi "chưa công bố"):
- Hãng, tên máy đầy đủ, ngày công bố, công bố toàn cầu hay tại VN.
- Cảm biến: kích thước (fullframe, APS-C, M43, medium format, 1", 1/1.3"…), độ phân giải, công nghệ (BSI, stacked, partially stacked, X-Trans…).
- Vi xử lý; lấy nét: hệ AF và chủ thể nhận diện được.
- Chống rung: IBIS bao nhiêu stop, hoặc ghi rõ không có IBIS.
- Chụp liên tiếp: fps với màn trập cơ và điện tử, buffer nếu có.
- Video: độ phân giải và fps tối đa, crop hay không crop, oversampling, bit depth/chroma, codec, Log, RAW (internal hay qua HDMI), Open Gate, slo-mo.
- Giá body và bộ kit tách riêng, ngày bán.
- So với đời trước: ít nhất 1–2 nâng cấp có số cụ thể (ví dụ 24MP → 32.5MP, nhanh hơn 3.5 lần).

Có thì đưa vào:
- EVF (điểm ảnh, độ phóng đại, độ sáng), LCD (kích thước, kiểu lật).
- Thân máy: chất liệu, chống chịu thời tiết, kích thước, trọng lượng.
- Pin (mã pin, số ảnh hoặc phút quay), khe thẻ (SD, CFexpress Type B), bộ nhớ trong, cổng (HDMI full-size, USB-C, cấp nguồn), tản nhiệt hoặc quạt, âm thanh (32-bit float, XLR), livestream qua USB-C, kết nối cloud/app, màu dựng sẵn (film simulation, Picture Control, Leica Look).
- Giá VN và nhà phân phối chỉ khi có nguồn chính thức. Giá tham khảo từ shop thì ghi rõ tên shop. Không tự quy đổi USD sang VND, không đoán giá về VN.
- So sánh đối thủ cùng tầm giá: 1 câu, có căn cứ.

List thông số: mỗi `[*]` là ý ngắn, dạng `Cảm biến: …` hoặc cụm danh từ. Không chép nguyên bảng spec hãng. Bảng spec dài thì có thể thêm list thứ hai `Tóm tắt cấu hình chính:` ở cuối bài.

## 5. Đặt ảnh
- Nguồn không có hoặc ít hình chính thức (nhiều bài chính sách/gọi vốn chỉ dùng cover) thì tìm ảnh nguồn khác để minh họa hợp lý. Bản đủ có 2 ảnh trở lên hoặc video; sự kiện nhiều hơn thì ảnh dư gom `[galleria]` cuối bài.
- Mỗi H2 bắt buộc có ít nhất 1 ảnh, trước đoạn văn nó minh họa. Không lấy cover làm ảnh trong bài.
- Số ảnh: bài đầy đủ 6–12 ảnh, bài ngắn 2–5 ảnh. Bài sự kiện VN có thể nhiều hơn, mỗi ảnh kèm 1 câu.
- Ảnh đặt **trên** đoạn văn nói về nó (ảnh trước, chữ sau). Mỗi H2 có ít nhất 1 ảnh ngay dưới tiêu đề mục.
- Chú thích ngắn `[I]…[/I]` dưới ảnh, chỉ khi cần giải thích (cận cảm biến, khe thẻ, nút mới, so đời trước).
- Ảnh mẫu chụp từ máy gom vào `[galleria]…[/galleria]`, kèm dòng `[I]Một số ảnh được chụp bằng [máy].[/I]` và ghi nguồn ảnh (`[B]Ảnh:[/B] [URL='…'][B]Nguồn[/B][/URL]`).
- Video demo hãng: `[MEDIA=youtube]id[/MEDIA]`.
- Đánh dấu ảnh bằng dòng `{{IMG:mô tả ảnh|chú thích nếu có}}`. Ảnh thật chèn theo soul. Không hotlink `[IMG]` từ shop.
- Có thể tạo ảnh minh họa khi nguồn/hãng không có ảnh cho: công nghệ, thông số, hoặc thông số so sánh.

## 6. Theo dòng máy
- **Mirrorless full-frame:** nhấn cân bằng chụp và quay. Nêu loại cảm biến, AF, IBIS, video RAW/Open Gate, khe thẻ, HDMI. Luôn so số liệu với đời trước.
- **APS-C ("máy crop"):** nhấn gọn nhẹ (body + ống khoảng bao nhiêu gram), màu dựng sẵn hoặc vòng xoay màu, đối tượng chụp vui, du lịch. Nói thẳng điểm cắt giảm: 1 khe SD, 4K60 crop 1.5x, EVF độ phóng đại thấp so với giá. Liệt kê giá từng bộ kit.
- **M43:** nêu tên cảm biến "M43" hoặc "Micro Four Thirds". Nhấn độ gọn, ống quy đổi, video (Open Gate, V-Log).
- **Medium format (GFX, Hasselblad):** so trọng lượng và kích thước "với các máy medium format". Nhấn độ phân giải, RAW 16-bit, pixel shift, base ISO, IBIS ("cảm biến càng lớn thì rung nhỏ càng dễ thấy"), leaf shutter, chế độ crop hoặc tỷ lệ khung.
- **Compact ống liền:** ghi tiêu cự thật kèm quy đổi fullframe, khẩu độ, macro gần nhất (cm), đối tượng (du lịch, đường phố), thân máy, giá.
- **Action cam:** kích thước cảm biến, dynamic range bao nhiêu stop, Log 10-bit, 4K120, pin bao nhiêu giờ ở chế độ nào, chống nước bao nhiêu mét không cần vỏ, màn hình trước/sau, Wi-Fi, kết nối mic. Bản bán tại VN: liệt kê từng combo, giá và phụ kiện kèm.
- **Camera 360, máy quay gimbal (Pocket, Luna):** cấu hình từng camera (cảm biến, khẩu, tiêu cự quy đổi), chế độ quay, tracking AI, mic, bộ nhớ trong và thẻ, pin, phụ kiện kèm. So đối thủ trực tiếp bằng 1 câu.
- **Instax và máy số "vui":** mở bài định nghĩa máy là gì / không phải là gì (ví dụ: máy số, không in ảnh liền). Nhấn thiết kế, filter, khung hình, app. Đưa thông số xuống sau, nói rõ cấu hình khiêm tốn. Không so máy cấu hình cao.
- **Máy thiên về video (dòng V, cinema nhỏ gọn):** codec, Log (C-Log2/3, N-Log, L-Log…), RAW internal/HDMI, Open Gate, tản nhiệt hoặc quạt và thời gian quay, base ISO kép, 32-bit float, timecode, UI xoay dọc, livestream UVC.
- **Retro, rangefinder:** nói triết lý thiết kế, các dial, so với dòng X100 hoặc máy phim tương ứng. Nhắc rõ đánh đổi lấy sự gọn nhẹ (không IBIS, khẩu nhỏ, chỉ JPG…).

## 7. Theo phân khúc
- **Entry-level:** viết dễ hiểu, giải thích ngắn thuật ngữ khó (ví dụ "Open Gate là quay hết cảm biến thay vì crop về 16:9"). Nhấn tính năng cho người mới (filter, chế độ tự động, làm mịn da), giá dễ tiếp cận, chênh với bản cao hơn.
- **Tầm trung, enthusiast:** nhấn tỷ lệ giá/cấu hình và "đủ chiến" (IBIS, 4K Log, chụp nhanh), so với đời trước và đối thủ cùng tầm.
- **Pro, flagship:** nhiều số liệu hơn: stacked, fps đầy độ phân giải, buffer, RAW video, EVF, độ bền, khe CFexpress. Nêu nhóm dùng cụ thể (studio, thể thao, hoang dã, sản xuất video).
- **Niche, luxury (Leica, Hasselblad, bản giới hạn):** nhấn vật liệu, chi tiết thủ công, số lượng giới hạn, Look hoặc màu riêng. Ghi rõ phần cứng giữ nguyên hay đổi so với bản gốc. Giá nêu thẳng, không bình luận "đắt hay rẻ" nếu không có căn cứ.
- **Vlog, creator:** màn hình lật trước, quay dọc hoặc UI dọc, mic và hotshoe, livestream, tracking, pin, độ gọn. Nêu kịch bản cụ thể (tự quay, phỏng vấn, sự kiện).

## 8. Văn phong
- **Xưng hô:** gọi người đọc "anh em". Người viết xưng "mình" khi nhận định, 1–3 lần/bài, chủ yếu ở Kết ("theo mình", "với mình", "cá nhân mình thấy"). Không dùng "tôi", "các bạn", "quý độc giả". "Chúng ta" dùng thưa.
- **Câu:** trung bình 20–30 chữ, mỗi đoạn 1–3 câu. Giọng thân thiện, thông tin dày. Dùng tự nhiên "khá", "cực kì", "đáng chú ý", "điểm mới", "nâng cấp", "bên cạnh đó", "cụ thể", "tóm lại".
- **Nên dùng:** "vừa chính thức ra mắt", "đời trước", "đời đầu", "body", "bộ kit", "ống kính", "cảm biến", "chống rung body (IBIS)", "lấy nét", "màn trập cơ/điện tử", "kính ngắm EVF", "khe thẻ", "quay", "slo-mo", "hậu kỳ", "phân khúc", "dễ tiếp cận", "cân bằng giữa chụp và quay", "xịn", "chiến", "hóng" (chỉ ở câu cuối).
- **Tránh:** "siêu phẩm", "bom tấn", "đỉnh của chóp", "không thể tin nổi", "đột phá" (trừ khi hãng nói), "người tiền nhiệm" lặp nhiều lần, giọng PR "mang đến trải nghiệm hoàn hảo", câu hỏi tu từ ở đầu bài, Việt hóa gượng thuật ngữ quen ("dải tương phản động", "màn trập lăn", "độ sâu bit").
- **Giữ tiếng Anh:** IBIS, AF, Dual Pixel CMOS AF II, BSI, stacked/partially stacked (lần đầu có thể kèm "chồng một phần"), Open Gate, RAW/N-RAW/ProRes RAW, Log (F-Log2, C-Log2, N-Log, S-Log3, D-Log M, I-Log), LUT, codec, 4:2:2 10-bit, oversampling, dynamic range, stop, rolling shutter, pixel shift, base ISO, EVF, LCD, hotshoe, HDMI full-size, USB-C, CFexpress Type B, timecode, 32-bit float, tracking, pre-capture, crop, fullframe, medium format, APS-C, M43, creator, vlog, livestream. Tên ngàm viết "ngàm E/RF/Z/X/L".
- **Viết tiếng Việt:** cảm biến, chống rung, lấy nét, nhận diện chủ thể, màn trập, kính ngắm, ống kính, tiêu cự (quy đổi fullframe), khẩu độ, chụp liên tiếp, độ phân giải, chống chịu thời tiết, tản nhiệt, thời lượng pin.
- **Định dạng số:** số thập phân thông số dùng dấu chấm (`24.5MP`, `6.2K`, `IBIS 8.5 stop`, `1/1.3 inch`). Tiền dùng dấu chấm ngăn nghìn: `2.199 USD`, `71.830.000Đ`, tít viết "114 triệu". Khẩu độ trong câu viết `f/1.8`, tên ống kính giữ đúng cách viết của hãng (`XF23mm F2.8 R WR`). Trọng lượng viết `883g`. Một kiểu, dùng nhất quán cả bài.
- **Mở bài mẫu (diễn giải):** "Canon vừa chính thức ra mắt EOS R8 Mark II, máy fullframe 24.2MP nay đã có chống rung body (IBIS) và quay tối đa 4K60, nhắm tới anh em vừa chụp vừa quay nhẹ nhàng."
- **Kết mẫu (diễn giải):** "Với mức 2.199 USD, fp2 sửa gần hết những điểm yếu của đời đầu như màn hình cố định, micro HDMI và pin yếu, mà vẫn giữ được kích thước bỏ túi. Theo mình đây là chiếc máy đáng chờ cho anh em cần một bộ vừa chụp vừa quay thật gọn."
- **Kết bài:** tóm 2–3 điểm đáng giá, nói máy hợp với ai, nêu 1 hạn chế nếu có. Có thể kết bằng câu "hóng" ngắn. Không viết như đã cầm máy hay kể demo, trừ khi input nói rõ người viết có mặt ở sự kiện.

## 9. Quy tắc cứng
- Ngôn ngữ, không bịa số liệu, BBCode: theo soul. Thuật ngữ Anh giữ theo mục 8; mọi con số phải có trong nguồn hoặc trang hãng; `[H3]` hiếm dùng.
- Link mua hàng shop chỉ chèn khi người giao việc yêu cầu.

## 10. Tự kiểm tra trước khi giao
- [ ] Tít đúng công thức, 60–100 ký tự, số liền đơn vị, không phẩy treo.
- [ ] Cover đúng ưu tiên, khác ảnh đầu thân bài, không watermark.
- [ ] Mở bài 1–3 đoạn: hãng, máy, định vị, điểm nhấn.
- [ ] Thông số 7–15 ý, đủ mục bắt buộc hoặc ghi "chưa công bố".
- [ ] H2 thẻ trơn, đặt theo điểm nhấn, không rỗng; bài ngắn bỏ H2.
- [ ] Ảnh trên đoạn tương ứng, mỗi H2 có ảnh, chú thích `[I]`.
- [ ] Giá body/kit tách riêng; giá VN có nguồn chính thức hoặc ghi chưa có; không đoán.
- [ ] So với đời trước bằng số cụ thể.
- [ ] Gọi "anh em", "mình" ≤3 lần, không dùng từ cấm.
- [ ] Đối chiếu thông số trang hãng; có dòng `Theo:`.

## 11. Đầu ra
Theo soul: `create_thread` ở forum 767 (ảnh theo soul), trả tiêu đề và link, không in bài. Bàn giao mauscheck: theo bước cuối mục Quy trình.
