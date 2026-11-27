---
name: template-tin-tuc-hang-khong
description: "Viết tin tức hàng không dân dụng cho tinhte.vn theo văn phong Khoa Đinh (bk9sw) — ra mắt/chứng nhận, đơn hàng, sự cố/tai nạn, công nghệ, sân bay, công nghiệp/cấm vận, hàng không Việt Nam, lịch sử — từ link hoặc chủ đề; gọi bằng /template-tin-tuc-hang-khong. Viết xong đăng forum 767 và trả link theo soul."
---
Nguồn: {input}
# Template tin tức hàng không — giọng Khoa Đinh (tinhte.vn)

Biến link nguồn (Simple Flying, Reuters, AVHerald, thông cáo hãng, NTSB/FAA/EASA/CAAC…) thành bài BBCode đúng giọng Khoa Đinh (bk9sw) trên tinhte.vn.

## Khi nào dùng
- Lệnh `/template-tin-tuc-hang-khong <link hoặc chủ đề>`.
- Tin hàng không dân dụng đã có nguồn: ra mắt hoặc chuyến bay đầu; chứng nhận, bàn giao; đơn hàng, đội bay, đường bay; sự cố/tai nạn; công nghệ (động cơ, SAF, eVTOL, siêu thanh); sân bay/hạ tầng; công nghiệp/kinh doanh (Boeing, Airbus, COMAC, cấm vận); hàng không Việt Nam; lịch sử, câu chuyện; chính sách hãng bay/hành khách.
- Ranh giới với `/template-tin-tuc-quan-su`: máy bay quân sự, khí tài, drone chiến đấu, tai nạn chiến đấu cơ → skill quân sự, trừ khi góc viết là dân dụng. Tin dân dụng dính địa chính trị (cấm vận Superjet/Aeroflot, cắt động cơ C919/C909, CR929) vẫn dùng skill này.
- File format 30 bài có bài lệch chuyên mục. Không học bố cục từ: sự cố CNTT lấy hãng bay làm hệ quả (BSOD/CrowdStrike); phim thuê máy bay quân sự (Top Gun: Maverick); hải quan/du lịch không gắn khai thác hàng không (phạt đồ hiệu nhập cảnh). Tin vũ trụ thương mại (SpaceX, Blue Origin, ISS, vệ tinh) không dùng skill này.
- Không dùng cho tin đồn không nguồn hay hướng dẫn bay. Tin chưa xác nhận viết đúng mức nguồn, không như đã chốt.

## Quy trình
1. Đọc hết nguồn trong `{input}`. Với thông số, thương vong, giá, ngày chứng nhận/bàn giao: đối chiếu thông cáo hãng, cơ quan điều tra hoặc báo cáo gốc. Nguồn lệch thì ghi rõ từng bên, không tự chọn số "đẹp".
2. Kiểm tra chéo ít nhất một nguồn khác với tin tai nạn, thương vong, cáo buộc phá hoại hoặc đơn hàng lớn.
3. Xác định kiểu tin (mục 6) rồi chọn bản ở mục 3. Có thể kết hợp (tai nạn + lịch sử hãng, như Yeti/Nepal).
4. Lấy đủ dữ liệu mục 4. Thiếu thì ghi "chưa rõ"/"chưa công bố" hoặc bỏ; không suy diễn, không bịa thông số, thương vong, giá hay ngày.
5. Chọn cover, viết tiêu đề và thân bài theo khung dưới, rồi chạy mục 8. Khi nguồn có nhiều hình, ưu tiên cover khác ảnh đầu.
6. Tự rà: đúng số liệu, mã hiệu, đơn vị, chính tả. Không bắt chước lỗi gõ trong bài mẫu ("Boieg", "xao xuống đất", "thở tối đa", "VQ Anh").
7. Tải và chèn ảnh, đăng bài, trả link: theo mục Đầu ra.
8. Gửi kết quả link tinhte.vn cho @mauscheck và gọi skill /mauscheck bằng `coordinate_bots` tới mauscheck với `thread: "new"` (mỗi lần kiểm tra mở một thread mới), nội dung `/mauscheck <link bài> <link nguồn chính> template-tin-tuc-hang-khong`.

## 1. Tiêu đề
Bài mẫu gần như không dùng dấu hai chấm làm công thức (bài có `:` thường là tên riêng như Top Gun: Maverick, hoặc dẫn nguồn `United Airlines: …` / `Reuters nói …`). Không ép `[Hãng] ra mắt [tên]: [điểm]`.

Công thức hay gặp (trung vị ~80 ký tự, thường 60–100):
`[Hãng/quốc gia] [động từ] [máy bay/sự việc], [điểm nhấn]`
`[Tên/chủ thể] - [định vị], [điểm nhấn]`
- Câu sự việc: `Boeing 737 của China Eastern Airlines lao xuống núi với 132 người trên khoang`; `Mỹ đình chỉ bán động cơ cho Trung Quốc, COMAC C919 nguy cơ "nằm đất"`.
- Tên + gạch ngang: `Pan Am - hãng hàng không biểu tượng của Mỹ đang được hồi sinh`; `Sân bay mang tên Cristiano Ronaldo - công trình độc đáo và nguy hiểm bậc nhất`.
- Tít hỏi cho bài giải thích hoặc còn bỏ ngỏ: `Vì sao máy bay phản lực tư nhân thường thiết kế 2 động cơ đặt sau?`. Không tít hỏi khi sự việc đã chốt (rơi máy bay, ký đơn hàng, được chứng nhận).
- Gắn nguồn khi tin chưa chốt: `Reuters nói Vietnam Airlines sẽ sớm hoàn tất…`, `Delta bị nghi…`, `Rất có thể đây là chiếc máy bay của Amelia Earhart…`.
- Biệt danh, cách nói hình ảnh để trong ngoặc kép: `"nằm đất"`, `"Sân bay ma"`.
- Tiền tố `[Video]` khi bài bám một clip (gãy càng Miami, DHL gãy đôi).
- Động từ đúng việc: "ra mắt", "được cấp chứng chỉ", "đặt hàng", "bàn giao", "rơi", "hạ cánh khẩn cấp", "đình chỉ", "rút khỏi". Không "siêu phẩm", không tít reo hò, không phẩy treo.

## 2. Ảnh cover
- Cover là thumbnail riêng. Tỉ lệ phổ biến ~1,62 (2048×1268) hoặc 16:9; cũng gặp 3:2. Ảnh vuông/4:3 cắt về 16:9, 3:2 hoặc ~1,62; dưới 700KB, jpg/png/webp. Cover 320×180 ở bài mẫu là bản xem trước — lấy bản phân giải cao.
- Ưu tiên: (1) ảnh chính thức của máy bay, đội bay hoặc sân bay; (2) chứng nhận/bàn giao: xuất xưởng, bay thử, lễ bàn giao; (3) tai nạn: hiện trường đã xuất bản, không cận thương vong; (4) công nghiệp: nhà máy, động cơ, biểu đồ đơn hàng; (5) lịch sử: ảnh tư liệu rõ nguồn.
- Không watermark shop, ảnh chế, slide chữ dày, render tin đồn, ảnh xác người.
- Khoảng 13/30 bài format dùng cùng file cho cover và ảnh đầu, nhất là tin ngắn. Khi có nhiều hình, ưu tiên cover khác ảnh đầu.

## 3. Bố cục và các mục H2
Khác skill sản phẩm: 24/30 bài format không có H2, kể cả tin công nghiệp dài (C919, CR929). Chỉ bài nhiều lớp mới tách mục: điều tra (Boeing/Barnett), câu chuyện (The Terminal, jack tai nghe, AirTag), sân bay (Madeira) hay giải thích (động cơ đặt sau). File 200 bài cũng vậy (Ciudad Real, Pan Am). Không thêm H2 cho đủ. Không H2 "Kết".

**Bản ngắn/tin nóng (250–700 từ):** một sự việc (tai nạn, sự cố, chính sách hãng). Mở 1–2 đoạn (sự việc + nguồn + loại máy bay/hãng) → cặp ảnh/video + bối cảnh, số đã xác nhận → câu khép → dòng nguồn. Không H2. Ví dụ: TAP tông xe máy; gãy càng Miami; DHL Costa Rica.

**Bản chuẩn (500–1.200 từ, không H2):** chứng nhận, đơn hàng, cấm vận, công nghệ, chính sách. Mở: sự việc + nguồn. Lần lượt: đây là gì, ai công bố, số cốt lõi, bối cảnh, "chưa rõ", câu khép. Xen ảnh–đoạn. Ví dụ: C919 chứng nhận; VNA 737 MAX; cắt LEAP-1C; 777X trễ hẹn; Autoland.

**Bản giải thích, sân bay hoặc lịch sử (1.100–2.500 từ):** 2–6 `[H2]` khi nhiều lớp/thời kỳ: "Ngài Alfred là ai?", "Đường băng rất ngắn", "Những lần Pan Am được hồi sinh". Ảnh ngay dưới H2, trước đoạn minh họa. Khép bằng hiện trạng. Không H2 "Kết".

Đặt tên H2: tên máy bay/chương trình, giai đoạn, địa danh hoặc câu hỏi cụ thể. `[H2]Tiêu đề[/H2]` trơn, không lồng `[B]`, không đánh số, không H2 rỗng, không `[HEADING]`. Bài mẫu thỉnh thoảng có H2 kèm `:` hoặc `!` — skill dùng H2 trơn. `[H3]` chỉ khi gắn link bài liên quan hoặc mục con thật sự cần.

## 4. Nội dung bắt buộc
Luôn có (thiếu thì "chưa rõ"/"chưa công bố" hoặc bỏ):
- Ai công bố/tham gia: hãng bay, nhà sản xuất, cơ quan (NTSB, FAA, EASA, CAAC, TSA, IATA, ICAO…). Ngày hoặc sự kiện ("hôm 4 tháng 9", "theo giờ địa phương").
- Tên máy bay đúng mục 7: mã hiệu + loại tiếng Việt lần đầu. Có thì thêm số hiệu chuyến, số đuôi, sân bay (mã IATA).
- Đây là việc gì (chứng nhận, đặt hàng, rơi, hạ cánh khẩn, đình chỉ) và mức xác nhận (thông cáo, "Reuters dẫn nguồn tin", "được cho", "chưa rõ").
- Thông số cốt lõi chỉ khi nguồn có: số người trên khoang, thương vong, số máy bay, tầm bay, MTOW, giá. Không suy ra số còn thiếu.
- Bối cảnh ngắn: đời máy bay, đối thủ, lệnh cấm, vì sao đáng nói.
- Nguồn mọi số nhạy: "theo CAAC", "NTSB đã có mặt…", "Reuters dẫn các nguồn tin trong ngành", "DHL nói".

Có thì đưa: biến thể (737-800, 737 MAX 8); động cơ (LEAP-1C, SaM146); đối tác (UAC–COMAC, CFM); giới hạn; link bài tinhte `[URL='…'][B]Tên bài[/B][/URL]` trong câu hoặc `[H3][URL]…[/URL][/H3]`. Giá Việt Nam chỉ khi có nguồn chính thức; `54000 baht (36,7 triệu đồng)` là ước lượng, không phải giá niêm yết tại VN.

## 5. Đặt ảnh
- Nguồn không có hoặc ít hình chính thức (nhiều bài chính sách/gọi vốn chỉ dùng cover) thì tìm ảnh nguồn khác để minh họa hợp lý. Bản đủ có 2 ảnh trở lên hoặc video; sự kiện nhiều hơn thì ảnh dư gom `[galleria]` cuối bài.
- Mỗi H2 bắt buộc có ít nhất 1 ảnh, trước đoạn văn nó minh họa. Không lấy cover làm ảnh trong bài.
- Số ảnh: tin nóng 3-5; bản chuẩn 3–7; lịch sử/sân bay 5–13. Bài "sân bay ma" trong file 200 bài nhiều ảnh bất thường — không lấy làm chuẩn. Video: `[MEDIA=youtube]id[/MEDIA]`, chú thích `[I]…[/I]` khi cần. Bài `[Video]` đưa clip lên ngay sau đoạn mở.
- Ảnh đầu sau đoạn mở, rồi xen ảnh–đoạn. Có H2 thì ảnh ngay dưới H2. Biểu đồ đơn hàng, sơ đồ đặt sát đoạn diễn giải.
- Ảnh ngoài chưa tải: `[IMG]url[/IMG]`. Có thể chèn sơ đồ/bảng khi nguồn không có, nhưng không tự vẽ thông số mới.
- Tránh ảnh gây sốc không cần thiết; mô tả hiện trường bằng số và việc đã quan sát, không mô tả thương tích chi tiết.

## 6. Theo kiểu tin
- **Ra mắt, chuyến bay đầu, chứng nhận, bàn giao:** mở bằng việc đã xảy ra và cơ quan cấp phép (STA/EASA, CAAC). Phân biệt "hoàn thành bay thử" với "đã được chứng nhận kiểu loại", "biên bản ghi nhớ" với "đơn đã chốt", "dự kiến bàn giao" với "đã giao". Số giờ bay thử, đối thủ cùng phân khúc (C919 ~ A320neo/737 MAX) chỉ khi nguồn có. Ví dụ: C919 gần chứng nhận; AirCar được cấp chứng chỉ châu Âu.
- **Đơn hàng, đội bay, đường bay:** số lượng, loại máy bay, bên đặt–bên bán, giá trị và thời hạn nếu có. Tin chưa chốt giữ đúng lời nguồn (`Reuters nói`, `ký biên bản ghi nhớ`, `đàm phán bán 10 chiếc E190`). Máy bay bị trả/từ chối: nêu số máy đã hoàn thiện, thiệt hại theo hãng, ai nhận mua lại.
- **Sự cố, tai nạn:** mở bằng loại máy bay, hãng, số người trên khoang, việc đã xảy ra, nơi, thời điểm. Ghi số hiệu chuyến, số đuôi, tuổi máy bay nếu có. Thương vong chỉ khi đã xác nhận; chưa rõ thì "chưa có con số thương vong cụ thể". Phải nêu cơ quan điều tra (NTSB, CAAC, CAAN, BEA…). Không suy nguyên nhân; "chưa rõ tại sao… rơi". Giả thuyết của giới chức (phá hoại, kỹ thuật, thời tiết) dẫn đúng lời, giữ "chưa thể đưa ra cáo buộc". Ảnh/video hiện trường có chú thích; không cận thi thể. Lịch sử an toàn của hãng đặt sau sự việc, không lấn át tin nóng. Tin đang cập nhật: `*Cập nhật:` + `[LIST]`. Ví dụ: China Eastern MU5735; Yeti YT691; DHL Vilnius; RED Air Miami.
- **Công nghệ (động cơ, SAF, eVTOL, siêu thanh):** định nghĩa concept, ai phát triển, đã thử đến đâu, giới hạn thực tế. eVTOL/xe bay: tách "chứng nhận đủ điều kiện bay" khỏi "đã khai thác thương mại"; sự cố diễn tập (Xpeng) ghi rõ nơi, thương vong, không suy lỗi. SAF: chỉ viết khi nguồn có số liệu pha trộn hoặc chứng nhận — file mẫu chưa có bài SAF riêng. Ví dụ: Garmin Autoland; Duality; AirCar; giải thích động cơ đặt sau; sự cố pitot-static.
- **Sân bay, hạ tầng:** mở bằng tên sân bay, mã IATA/ICAO, vị trí, vì sao đáng nói (đường băng ngắn, quy hoạch thất bại). Kể theo thời gian: thiết kế, mở rộng, sự cố, hiện trạng. Số đầu tư và chiều dài đường băng phải có nguồn. Ví dụ: Madeira; Ciudad Real "sân bay ma".
- **Công nghiệp, kinh doanh, cấm vận:** Boeing, Airbus, COMAC, UAC, động cơ CFM/Safran. Mở bằng quyết định (đình chỉ xuất khẩu, rút liên doanh, trễ chứng nhận) rồi hệ quả đội bay ("nằm đất", thiếu phụ tùng, tái sản xuất Tu-214/Il-96). Gắn nguồn. Bài điều tra/cáo buộc (người tố cáo Boeing): tách việc đã xác nhận khỏi tin chưa rõ, không kết luận án mạng. Ví dụ: C919/C909 bị cắt động cơ; CR929; Superjet 100; Aeroflot tháo linh kiện; 777X trễ hẹn.
- **Hàng không Việt Nam:** Vietnam Airlines, Vietjet, Bamboo, nghị định/bộ GTVT. Ưu tiên thông cáo hãng và nguồn trong nước; tin Reuters về đơn hàng VNA phải ghi là nguồn tin ngành, chưa xác nhận loại máy bay thì không viết như đã chốt. Tin quyền hành khách (hoàn vé khi trễ chuyến) gần người đọc hơn, "anh em" vừa phải, không thành tư vấn pháp lý. Ví dụ: đơn 50 chiếc 737 MAX; video an toàn bay VNA; nghị định hoàn vé.
- **Lịch sử, câu chuyện:** móc hiện tại rồi kể theo thời gian (The Terminal/Nasseri; jack tai nghe; Amelia Earhart; Pan Am). "Mình"/"anh em" chỉ bài kể dài, vừa phải. Kết bằng hiện trạng, không H2 "Kết".
- **Chính sách hãng bay, hành khách, an ninh sân bay:** quy định mới (tai nghe United, ghế ngả WestJet, 100 ml chất lỏng, AirTag/Lufthansa), kiện tụng, hành vi trên tàu bay, TSA. Nêu hiệu lực, phạm vi, lý do hãng đưa ra. Giữ giọng sự việc; hành vi nhạy viết đủ để hiểu tin, không tô vẽ.

## 7. Văn phong, số liệu, thuật ngữ
- **Giọng:** khách quan, gắn nguồn. Không cổ vũ, không giễu hãng hay quốc gia. Tai nạn: tôn trọng nạn nhân, không câu view bằng thương tích.
- **Xưng hô:** tin nóng, tai nạn, công nghiệp viết khách quan, thường không "mình"/"anh em". "Mình" vừa phải ở câu nhận định hoặc bài kể/giải thích/kinh nghiệm bay. "Anh em" chủ yếu bài kể dài hoặc tin quyền hành khách tại Việt Nam. Không "tôi" trừ trích dẫn, không "các bạn", không "quý độc giả". "Bạn" chỉ trong bài giải thích khi gọi người đọc (`Tại sao bạn không được đem chất lỏng…`); đừng dùng ở tin tai nạn hay công nghiệp.
- **Gắn nguồn:** "theo CAAC", "NTSB đã mở cuộc điều tra", "Reuters dẫn các nguồn tin", "DHL nói", "được cho", "chưa rõ". Tuyên bố một phía, số thương vong, cáo buộc phá hoại phải gắn bên nói.
- **Câu:** đoạn 2–5 câu một ý. Mở vào sự việc hoặc nguồn, không cứng "[Hãng] vừa chính thức ra mắt". Câu chuyển: "Được biết…", "Điều đáng nói…", "Chưa rõ…", "Trong khi đó…".
- **Tên máy bay và hãng:** giữ nguyên mã hiệu Latin, không dịch 737 MAX, A350-1000, A320neo, C919, CR929, ATR 72-500, MD-82, Tu-214, Superjet 100, 777X. Lần đầu: loại Việt + mã — `máy bay phản lực thương mại thân hẹp C919`; `Boeing 737-800, số đuôi B-1791`; `Sukhoi Superjet 100 là máy bay phản lực thương mại cỡ nhỏ (regional jet)`. Hãng giữ tên chính thức: Vietnam Airlines, China Eastern, Lufthansa, United, Delta, Aeroflot, COMAC, UAC, CFM. Cơ quan: lần đầu viết đủ tiếng Việt rồi viết tắt — `Cục hàng không dân dụng Trung Quốc (CAAC)`, `Cơ quan an toàn vận tải quốc gia (NTSB)`, `Cục hàng không liên bang (FAA)`, `Cơ quan An toàn Hàng không Liên minh châu Âu (EASA)`. Sân bay: tên + mã IATA khi có (`Madeira Cristiano Ronaldo (FNC)`, `Milan Bergamo (IATA: BGY)`).
- **Giữ viết tắt thông dụng:** MTOW, ETOPS, CVR, FDR, IATA, ICAO, TSA, SAF, eVTOL, IFE, MoU, MAX, NG, neo, pitot-static, Autoland.
- **Viết tiếng Việt:** máy bay phản lực thương mại, thân hẹp / thân rộng, chứng nhận kiểu loại, đội bay, đường băng, cất/hạ cánh, hạ cánh khẩn cấp, kiểm soát không lưu, buồng lái, hộp đen, hành lý xách tay / ký gửi, tiếp viên, cơ trưởng / cơ phó, nhân viên mặt đất, đơn đặt hàng, bàn giao.
- **Định dạng số (theo mẫu):**
  - Thông số: phẩy thập phân, có khoảng trắng trước đơn vị: `38,9 m`, `4,16 m`, `72,5 tấn`, `4075 km`, `8,8%`, `36,7 triệu đồng`.
  - Mach và đơn vị hàng không giữ kiểu nguồn, thường kèm đổi SI: `Mach 0.785 (834 km/h)`, `23000 ft (~7000 m)`, `376 knot (gần 700 km/h)`.
  - Dải số: `13 - 14 triệu đô`, `2.000 đến 3.000 đô/lốp`.
  - Tiền: mẫu hay dùng `99 triệu đô`, `1 tỉ đô`, `5 tỷ đô`, `11000 đô/giờ`, `250.000 đô`, `54000 baht (36,7 triệu đồng)`, đôi khi `206 tỷ USD`, `1,1 tỉ EUR`. Không `$`, không `VNĐ`. Một bài chọn một kiểu (`đô` hoặc `USD`) và giữ đến cuối; "đồng" chỉ giá Việt có nguồn hoặc phép đổi rõ là ước lượng. "tỷ" và "tỉ" đều có trong mẫu — một bài giữ một kiểu.
- **Câu khép:** hiện trạng, bước tiếp theo (điều tra, chứng nhận, bàn giao) hoặc "chưa rõ khi nào…". Không H2 kết.

## 8. Tự kiểm tra trước khi giao
- [ ] Tít theo mẫu Khoa Đinh (câu sự việc, tên + gạch ngang, hoặc tít hỏi chỉ khi bài giải thích/còn bỏ ngỏ); không ép hai chấm, không phẩy treo, không tít cổ vũ.
- [ ] Cover 16:9, 3:2 hoặc ~1,62, dưới 700KB, không watermark, không cận thương vong; khác ảnh đầu bài nếu đủ hình.
- [ ] Đúng bản (ngắn / chuẩn không H2 / giải thích-lịch sử có H2 khi cần). H2 trơn, không rỗng, không "Kết".
- [ ] Mọi thông số, thương vong, giá, ngày, số hiệu chuyến đều có nguồn hoặc ghi "chưa rõ". Không suy nguyên nhân tai nạn. Tuyên bố một phía được gắn đúng bên. Không bịa, không suy diễn.
- [ ] Giọng trung lập, tôn trọng nạn nhân. "Mình"/"anh em" chỉ khi có căn cứ (bài kể, kinh nghiệm bay, quyền hành khách). Không "các bạn".
- [ ] Mã hiệu máy bay, hãng, cơ quan, sân bay viết đúng; không copy lỗi gõ mẫu.
- [ ] Chỉ BBCode XenForo (`[H2]`, `[B]`, `[I]`, `[LIST][*]`, `[URL='…']`, `[MEDIA]`, `[IMG]`), không Markdown, không `[HEADING]`. 100% tiếng Việt, giữ thuật ngữ Anh/mã hiệu thông dụng. Số và tiền theo mục 7.
- [ ] Dòng nguồn cuối bài: `Theo: [URL='link'][B]Tên nguồn[/B][/URL]` (nhiều nguồn cách nhau dấu phẩy). Bài mẫu có 12/30 dùng `Theo:`, một ít `Tham khảo:`, nhiều bài chỉ chèn link — skill vẫn bắt buộc `Theo:` cho đồng bộ các skill khác.

## 9. Đầu ra
Theo soul: `create_thread` ở forum 767 (ảnh theo soul), trả tiêu đề và link, không in bài. Bàn giao mauscheck: theo bước cuối mục Quy trình.
