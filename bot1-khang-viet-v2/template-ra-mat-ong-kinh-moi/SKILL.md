---
name: template-ra-mat-ong-kinh-moi
description: "Viết tin \"ra mắt ống kính mới\" cho tinhte.vn (prime, zoom, tele, góc rộng, macro, fisheye, tilt-shift, cine; mọi ngàm) từ link hoặc chủ đề; gọi bằng /template-ra-mat-ong-kinh-moi. Viết xong đăng forum 767 và trả link theo soul."
---
Nguồn: {input}
# Template tin ra mắt ống kính mới (tinhte.vn)

Biến link nguồn (thông cáo hãng, báo nước ngoài, sự kiện tại VN) thành bài BBCode đúng giọng và bố cục tin ống kính tinhte.vn.

## Khi nào dùng
- Lệnh `/template-ra-mat-ong-kinh-moi <link hoặc chủ đề>`.
- Ống vừa công bố chính thức, ống đã công bố nay mở bán hoặc thêm ngàm mới (Sigma 16-300mm có bản Nikon Z), ống ra mắt hoặc có giá chính thức tại VN.
- Không dùng cho: tin đồn/rò rỉ, tin "đang phát triển" chưa có giá, trên tay/review, firmware, bài mà thân máy là chính (dùng `/template-ra-mat-may-anh-moi`). Gặp các dạng này thì báo lại và dùng `/viet-tin`.

## Quy trình
1. Đọc hết nguồn trong `{input}`. Mở thêm trang sản phẩm hoặc thông cáo chính thức của hãng để đối chiếu thông số và giá. Nguồn báo và nguồn hãng lệch nhau thì lấy theo hãng, bỏ thông tin khác hãng.
2. Kiểm tra chéo ít nhất một nguồn khác nếu tin quan trọng.
3. Xác định: (a) công bố toàn cầu, mở bán hay ra mắt tại Việt Nam, (b) hãng và dòng ống (mục 6), (c) phân khúc (mục 7), (d) hãng chính hay hãng nhỏ (mục 9), từ đó chọn bản đầy đủ, tiêu chuẩn hay ngắn (mục 3).
4. Lấy đủ dữ liệu theo mục 4. Thiếu thì bỏ qua hoặc ghi "chưa công bố", không suy diễn, không bịa thông số hay giá.
5. Chọn cover, viết tiêu đề và thân bài theo khung dưới, rồi chạy mục 10. Hình cover và hình đầu tiên trong bài không được trùng nhau.
6. Tự rà lại: đúng số liệu, đúng tên ống, không lỗi chính tả, không còn câu tiếng Anh thừa.
7. Tải và chèn ảnh, đăng bài, trả link: theo mục Đầu ra.
8. Gửi kết quả link tinhte.vn cho @mauscheck và gọi skill /mauscheck bằng `coordinate_bots` tới mauscheck với `thread: "new"` (mỗi lần kiểm tra mở một thread mới), nội dung `/mauscheck <link bài> <link nguồn chính> template-ra-mat-ong-kinh-moi`.

## 1. Tiêu đề
Công thức chính (14/34 bài mẫu có dấu hai chấm, số còn lại là tít liền một câu cũng nêu điểm nhấn):
`[Hãng] ra mắt [Tên ống đầy đủ]: [điểm nhấn 1], [điểm nhấn 2], [giá]`
- Điểm nhấn ưu tiên: "đầu tiên/duy nhất" (theo hãng) → khẩu hoặc dải tiêu cự đặc biệt → trọng lượng → ngàm → quy đổi fullframe (ống crop) → giá đặt cuối.
- Viết liền số và đơn vị: `305g`, `2.7kg`, `75-180mm`, `zoom 18.8x`, `220°`, `1.249 USD`, VN viết "116 triệu".
- Dài 60–100 ký tự, 2–4 điểm nhấn. Không để dấu phẩy, dấu chấm hoặc "..." treo cuối tít.
- Biến thể có trong mẫu:
  - Mở bán: `[Hãng] mở bán [ống] cho [hệ máy]: …` hoặc `[Ống] lên kệ cho Sony E và Canon RF, nặng 305g, giá từ 529 USD`.
  - Thêm ngàm: `[Ống] có bản Nikon Z: [điểm nhấn]`.
  - Nhấn "chính thức": `Fujifilm chính thức ra mắt XF 400mm F4.5: tele siêu nhẹ 1245g, quy đổi 609mm`.
  - Nhiều ống: `Canon ra mắt 3 ống kính RF cao cấp: [ống 1], [ống 2], [ống 3]` hoặc `Sony ra mắt FE 400mm F4.5 GM OSS và FE 600mm F6.3 GM OSS`.
  - Đời mới: nêu mức nâng cấp, ví dụ "35mm F1.4 DG II Art: nhẹ hơn 20%, ngàm E và L".
  - Ống đặc chủng: nêu công dụng, ví dụ "ống zoom mắt cá đầu tiên ngàm E".
- Chỉ nhắc "đầu tiên", "nhẹ nhất", "nhanh nhất" khi hãng tự công bố, và trong bài ghi rõ là theo hãng.
- Tránh tít chỉ có tên ống hoặc tít câu hỏi khi đã có thông tin.

## 2. Ảnh cover
- Cover là ảnh riêng gắn làm thumbnail, không lặp lại trong thân bài. Ảnh ngang tỷ lệ 16:9 hoặc 3:2, dung lượng dưới 700KB, định dạng jpg, png hoặc webp. (Cover mẫu: 12/34 là 3:2, còn lại gần 16:9 hoặc 16:10.)
- Thứ tự ưu tiên khi chọn từ nguồn:
  1. Ảnh sản phẩm chính thức: ống kính đứng một mình hoặc gắn lên body cùng hãng, góc 3/4 hoặc nghiêng, nền sạch (đen, xám, trơn), thấy rõ tên ống và vạch màu dòng (vạch đỏ L, nhãn GM, chữ S, chữ A của Art).
  2. Ảnh lifestyle chính thức: ống gắn máy trên tay người chụp, đúng bối cảnh (sân đấu cho tele, đường phố cho ống fix).
  3. Nhiều ống cùng lúc: một ảnh xếp các ống cùng khung.
  4. Ra mắt tại Việt Nam: ảnh tự chụp tại sự kiện, thấy rõ tên ống.
- Không lấy ảnh watermark shop, render tin đồn, sơ đồ quang học, bảng thông số, ảnh mẫu làm cover.
- Ảnh đầu thân bài là ảnh sản phẩm khác (góc khác, cận vòng khẩu, nút, ngàm), đặt sau đoạn mở hoặc video.

## 3. Bố cục và các mục H2
Bản đầy đủ (500–900 từ; ống cao cấp/pro của hãng chính, nhiều ống ra cùng lúc, nguồn dày):
1. Mở bài, không có H2: 1–2 đoạn. Câu đầu theo mẫu "[Hãng] vừa chính thức ra mắt [tên ống], ống [loại: fix/zoom/tele…] cho [fullframe/crop/medium format] ngàm [X], [điểm đặc biệt nhất]". Câu sau định vị dòng (dòng S, G Master, L, Art…) hoặc nối với đời trước/bộ ba.
2. Video giới thiệu của hãng `[MEDIA=youtube]id[/MEDIA]` nếu có (13/34 bài mẫu).
3. Ảnh sản phẩm, rồi `Thông số chính:` (hoặc `Một vài thông tin cơ bản trong cấu hình ống kính:`), sau đó `[LIST]` 6–12 ý.
4. Các `[H2]` theo điểm nhấn, xếp từ quan trọng nhất trở xuống. Thường gặp:
   - Điểm mới nhất (teleconverter tích hợp, khẩu F1.2, Focus Hold…)
   - Quang học: thấu kính đặc biệt, lớp phủ, lá khẩu, bokeh
   - Lấy nét và chống rung: motor, tốc độ so với đời trước, OIS bao nhiêu stop
   - Thân ống, điều khiển, trọng lượng: vòng khẩu, nút Fn, chống chịu thời tiết, chân đế, hood
5. Mục tùy chọn, chỉ dùng khi có dữ liệu: `Ảnh chụp từ [ống]` (galleria), ống hoặc máy ra cùng (mỗi sản phẩm một H2), `Hình ảnh thực tế` (sự kiện VN), `Các điểm hạn chế`.
6. `[H2]Giá bán và ngày lên kệ[/H2]`.
7. `[H2]Kết[/H2]`: 1–3 đoạn.
8. Dòng nguồn: `Theo: [URL='link'][B]Tên nguồn[/B][/URL]`.

Bản tiêu chuẩn (300–500 từ; ống tầm trung, giá rẻ, ống crop, mở bán, thêm ngàm): mở bài → ảnh → list thông số → các cặp ảnh + đoạn ngắn (lấy nét, quang học, thân ống, so sánh) → giá và ngày bán → đoạn kết → dòng nguồn. Không có H2. Không thêm H2 chỉ để có cho đủ.

Bản ngắn: xem mục 9.

Nhiều ống cùng lúc: mở bài liệt kê đủ tên, mỗi ống một H2 mang tên ống, mỗi H2 có ảnh, điểm nhấn, thông số, giá riêng.

Đặt tên H2: đưa con số hoặc tính năng vào tên mục thay vì tên chung chung. Ví dụ: "Teleconverter 1.4x tích hợp, kéo lên 420mm", "Nhẹ hơn 26%, chỉ còn 998g", "Silky Swift VCM lấy nét nhanh hơn 3.5 lần", "OIS 5.5 stop, có focus limiter". Dùng `[H2]Tiêu đề[/H2]` trơn, không lồng `[B]`, không để ảnh trong thẻ H2, không có H2 rỗng. Chỉ dùng `[H3]` cho mục con thật sự cần.

## 4. Nội dung bắt buộc
Luôn có (thiếu thì bỏ qua hoặc ghi "chưa công bố"):
- Hãng, tên ống đầy đủ đúng cách viết của hãng, dòng ống, ngày công bố, công bố toàn cầu hay tại VN.
- Ngàm (từng ngàm, ngàm nào bán trước), cảm biến ống phủ được (fullframe, APS-C, medium format, M43).
- Tiêu cự (quy đổi fullframe với ống crop/M43/medium format), khẩu tối đa và tối thiểu, prime hay zoom, zoom trong hay ngoài.
- Cấu trúc quang học: số thấu kính/nhóm, thấu kính đặc biệt (ED, Super ED, phi cầu, fluorite, SLD/FLD, UD…), lớp phủ, số lá khẩu.
- Lấy nét: loại motor, AF/MF, lấy nét gần nhất, độ phóng đại tối đa.
- Chống rung quang học bao nhiêu stop (theo chuẩn nào, kết hợp IBIS ra sao) hoặc ghi rõ không có.
- Kích thước, trọng lượng (tách theo ngàm nếu khác), ren filter.
- Giá theo từng ngàm, ngày bán hoặc giao hàng.
- So sánh với đời trước hoặc ống cùng dải bằng số liệu cụ thể (trọng lượng, khẩu, giá).

Có thì đưa vào:
- Vòng khẩu (click/de-click), nút Fn, công tắc AF/MF, focus limiter, khoá zoom, chống bụi ẩm, phủ fluorine, thân kim loại, chân đế Arca-Swiss, hood, filter khay sau, teleconverter tương thích, power zoom.
- Focus breathing, T-stop, vòng răng (cine), giới hạn tilt/shift, body không tương thích.
- Giá VN và nhà phân phối, chỉ khi có nguồn chính thức. Giá shop thì ghi tên shop. Không tự quy đổi USD sang VND, không đoán giá về VN.
- Bộ ống cùng dòng (bộ ba f/1.4, bộ ba zoom f/2.8) kèm giá từng ống.

## 5. Đặt ảnh
- Số ảnh: bản đầy đủ 6–14, tiêu chuẩn 3–6, ngắn 1–4. Ống càng cao cấp càng nhiều ảnh, nhiều góc (toàn thân, cận vòng/nút, gắn máy, sơ đồ quang học, so kích thước).
- Ảnh đặt **trên** đoạn văn nói về nó: ảnh trước, chữ sau. Mỗi H2 có ít nhất một ảnh ngay dưới tiêu đề mục.
- Chú thích `[I]…[/I]` dưới ảnh khi cần giải thích (góc nhìn ở 8mm và 14mm, hiệu ứng tilt-shift).
- Ảnh mẫu chụp từ ống gom vào `[galleria]…[/galleria]`, kèm dòng `[I]Một số ảnh được chụp bằng [ống].[/I]` và nguồn ảnh (`[B]Ảnh:[/B] [URL='…'][B]Nguồn[/B][/URL]`).
- Có thể tạo ảnh minh hoạ khi nguồn hoặc hãng không có: minh hoạ công nghệ, thông số, so sánh thông số.

## 6. Theo dòng ống kính
- **Nikon:** NIKKOR Z dòng S là "dòng cao cấp" (như GM của Sony, L của Canon), f/1.8 S là S tầm trung, ống không S nhấn giá, DX cho crop. Thuật ngữ: VR, Synchro VR, Silky Swift VCM, ARNEO, Meso Amorphous, Nano Crystal. Đời mới viết "S II" kèm "(70-200 đời 2)".
- **Sony:** FE là fullframe, E là crop. G Master (GM) là đỉnh: nhấn độ nét, bokeh, motor XD Linear, độ nhẹ so với đối thủ. G là tầm cao, gọn hơn. Thuật ngữ: OSS, Nano AR II, nút giữ nét, vòng khẩu, Focus Hold.
- **Canon:** RF L là "dòng L chỉ đỏ" cao cấp, RF thường (STM) dễ tiếp cận, RF-S cho máy crop. Giải thích ký hiệu: VCM, USM, STM, IS, "Z" (zoom trong, hướng quay video), PZ (power zoom). Nói chống rung IS cộng IBIS bao nhiêu stop.
- **Fujifilm:** FUJINON XF (APS-C, quy đổi x1.5), XC giá rẻ, GF (medium format, quy đổi x0.79). Giải thích R (vòng khẩu), LM (motor tuyến tính), OIS, WR (chống thời tiết). Nêu teleconverter tương thích và tiêu cự quy đổi sau khi gắn.
- **Sigma:** Art (quang học tốt nhất, khẩu lớn), Contemporary (gọn nhẹ, giá tốt), Sports (tele, thể thao). DG là fullframe, DC là crop, DN là cho mirrorless, OS là chống rung; motor HLA, thấu kính FLD/SLD. Nhấn đời II nhẹ hơn bao nhiêu %, liệt kê đủ ngàm.
- **Tamron:** Di III cho fullframe, Di III-A cho crop, ghi mã model (B091). Motor VXD/RXD, chống rung VC. Nhấn dải zoom, trọng lượng, giá và lịch bán từng ngàm.
- **Viltrox:** LAB flagship, Pro cao cấp, Evo/Air phổ thông; HyperVCM, STM. Nhấn giá so với ống chính hãng cùng thông số, bộ ống cùng dòng.
- **OM System:** M.Zuiko Pro, quy đổi x2. Nhấn độ gọn, chống chịu (IP53), Sync IS, tele dài cầm tay.
- **Hasselblad:** XCD cho medium format, quy đổi x0.79. Nhấn leaf shutter tích hợp, đồng bộ đèn, thiết kế, quang học. Giá nêu thẳng.
- Panasonic Lumix S, Leica: bản tiêu chuẩn, nêu ống hợp body nào ("combo ổn cho Lumix S9").

## 7. Theo phân khúc
- **Pro, flagship (GM, S, L, Art, siêu tele):** nhiều số liệu (quang học, motor, OIS, chống chịu, vận hành), nêu nhóm người dùng cụ thể (thể thao, hoang dã, cưới). So trọng lượng với đối thủ trực tiếp ("Nikon Z 400mm F4.5 khoảng 1.160g").
- **Tầm trung:** nhấn giá trên cấu hình, so với bản cao cấp cùng tiêu cự ("rẻ hơn khá nhiều nhưng chỉ F1.8").
- **Giá rẻ, phổ thông:** giải thích ngắn lợi ích khẩu lớn (bokeh, thiếu sáng), nói rõ đánh đổi so với dòng cao cấp, nhấn giá dễ tiếp cận.
- **Crop/APS-C:** ghi tiêu cự quy đổi, độ nhẹ, body cùng hệ có IBIS không, bộ ống cùng dòng.
- **Medium format:** quy đổi, so trọng lượng và giá với mặt bằng ống medium format.
- **Video, cine:** T-stop, focus breathing, zoom trong cho gimbal, power zoom, de-click.
- **Đặc chủng (tilt-shift, fisheye, macro, probe, VR/3D):** giải thích cơ chế bằng một ví dụ thực tế (chụp nhà cao tầng không đổ, hiệu ứng mô hình tí hon), nêu giới hạn hãng công bố.
- **Ra mắt tại VN:** tít `[Hãng] Việt Nam ra mắt [ống]: [giá VN]`, nhà phân phối, ảnh sự kiện.

## 8. Văn phong
- **Xưng hô:** gọi người đọc là "anh em". Người viết xưng "mình", 1–3 lần mỗi bài, chủ yếu khi nhận định hoặc ở phần Kết ("theo mình", "cá nhân mình thấy"). Không dùng "tôi", "các bạn", "quý độc giả". "Chúng ta" dùng thưa.
- **Câu:** 20–30 chữ, đoạn 1–3 câu, thân thiện, thông tin dày. Từ hay dùng: "khá", "cực kì", "đáng chú ý", "điểm mới", "nâng cấp", "bên cạnh đó", "cụ thể", "tóm lại".
- **Nên dùng:** "vừa chính thức ra mắt", "ống", "ống fix", "ống zoom", "ống tele", "khẩu lớn", "khẩu 1.2", "toàn dải", "đời trước", "đời 2", "mảnh ghép", "bộ ba", "zoom trong", "nhà Sony", "lên kệ", "giao hàng", "dễ tiếp cận", "xịn", "hóng" (chỉ câu cuối).
- **Tránh:** "siêu phẩm", "bom tấn", "đỉnh của chóp", "đột phá" (trừ khi hãng nói), "người tiền nhiệm", giọng PR, câu hỏi tu từ đầu bài, Việt hoá gượng thuật ngữ quen.
- **Giữ tiếng Anh:** AF, MF, tên motor và ký hiệu hãng (mục 6), ED, Super ED, prime, bokeh, focus breathing, de-click, Fn, focus limiter, teleconverter, power zoom, fisheye, tilt-shift, macro, T-stop, hood, filter, CIPA, gimbal, fullframe, crop, APS-C, medium format, IBIS. Tên ngàm viết "ngàm E/RF/Z/X/L/GFX/XCD".
- **Viết tiếng Việt:** tiêu cự, khẩu độ, lá khẩu, thấu kính phi cầu, lớp phủ, lấy nét gần nhất, độ phóng đại, chống rung, vòng khẩu, góc nhìn, quang sai.
- **Định dạng số:** số thập phân dùng dấu chấm (`6.5 stop`, `0.25m`, `0.18x`). Tiền dùng dấu chấm ngăn nghìn: `1.249 USD`, `11.910.000Đ`, trong tít viết "116 triệu", không viết `$599`. Trọng lượng `905g`, `2.7kg`. Khẩu độ trong câu viết `f/1.4`, tên ống giữ đúng cách viết của hãng (`FE 400mm F4.5 GM OSS`, `XF23mm F2.8 R WR`). Dùng một kiểu nhất quán cả bài.
- **Mở bài mẫu (diễn giải):** "Sigma vừa chính thức ra mắt 35mm F1.4 DG II Art (35 Art đời 2) cho ngàm E và L, nâng cấp đáng chú ý nhất là nhẹ hơn 20% và nhỏ hơn 14% so với đời trước."
- **Kết mẫu (diễn giải):** "Với 799 USD, ống này gánh vai trò của một chiếc 70-200mm f/2.8 trên máy crop mà nhẹ hơn rất nhiều. Theo mình đây là lựa chọn đáng cân nhắc cho anh em cần tele khẩu lớn mà vẫn muốn mang nhẹ."
- **Kết bài:** tóm 2–3 điểm đáng giá nhất, ống hợp với ai, nêu 1 hạn chế hoặc đánh đổi. Có thể kết bằng một câu "hóng" hoặc một câu hỏi ngắn cho anh em. Không viết như đã cầm ống, trừ khi input nói rõ người viết có mặt tại sự kiện.

## 9. Hãng nhỏ (bản ngắn)
- Áp dụng cho Laowa (Venus Optics), TTArtisan, 7Artisans, AstrHori, Meike, Samyang, Yongnuo, Sirui, Brightin Star, Thypoch, Pergear… và mọi hãng ngoài 9 hãng chính ở mục 6.
- Dài 150–350 từ, 1–4 ảnh, không có H2, không galleria trừ khi ảnh mẫu là điểm chính.
- Khung: mở bài 1–2 câu (hãng, tên, ngàm, điểm khác lạ) → ảnh → list thông số 4–8 ý → 1 đoạn giải thích công dụng/điểm đặc biệt → giá và nơi bán → 1 câu kết → dòng nguồn.
- Bỏ: quang học chi tiết, lớp phủ, so sánh dài, nhận định nhiều đoạn.
- Ngoại lệ: ống có kỷ lục hoặc lần đầu tiên theo hãng công bố (tilt-shift f/2, fisheye 220°, probe zoom rộng nhất) thì được viết bản tiêu chuẩn.
- Ống lấy nét tay ghi rõ "lấy nét tay"; chất lượng chưa rõ thì nói thẳng, không tô vẽ.

## 10. Tự kiểm tra trước khi giao
- [ ] Tít theo công thức, 60–100 ký tự, số và đơn vị viết liền, không dấu phẩy hoặc "..." treo.
- [ ] Cover đúng thứ tự ưu tiên, 16:9 hoặc 3:2, dưới 700KB, khác ảnh đầu trong thân bài, không watermark.
- [ ] Mở bài nêu đủ hãng, tên ống, ngàm, cảm biến phủ, điểm nhấn.
- [ ] List thông số đủ mục bắt buộc hoặc đã ghi "chưa công bố"; ống crop có tiêu cự quy đổi.
- [ ] Đúng bản (đầy đủ, tiêu chuẩn, ngắn) theo hãng và phân khúc. H2 trơn, đặt tên theo điểm nhấn, không rỗng.
- [ ] Ảnh trên đoạn tương ứng, mỗi H2 có ảnh, chú thích `[I]`, ảnh mẫu trong galleria.
- [ ] Giá theo từng ngàm và ngày bán. Giá VN có nguồn chính thức hoặc ghi chưa có. Không giá đoán.
- [ ] Có so sánh đời trước hoặc đối thủ bằng số liệu cụ thể.
- [ ] Gọi người đọc "anh em", xưng "mình" không quá 3 lần, không có từ trong danh sách tránh.
- [ ] Chỉ BBCode XenForo (`[H2]`, `[H3]`, `[B]`, `[I]`, `[LIST]`, `[URL]`, `[galleria]`, `[MEDIA]`), không Markdown, không `[HEADING]`. 100% tiếng Việt, giữ thuật ngữ Anh thông dụng.
- [ ] Đã đối chiếu thông số với trang chính thức của hãng. Có dòng `Theo:`.

## 11. Đầu ra
Theo soul: `create_thread` ở forum 767 (ảnh theo soul), trả tiêu đề và link, không in bài. Bàn giao mauscheck: theo bước cuối mục Quy trình.
