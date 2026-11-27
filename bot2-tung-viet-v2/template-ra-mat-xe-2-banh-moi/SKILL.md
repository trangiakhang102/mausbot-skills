---
name: template-ra-mat-xe-2-banh-moi
description: "Viết tin \"ra mắt xe máy 2 bánh mới\" cho tinhte.vn (xe số, tay ga, côn tay, phân khối lớn, xe máy điện; ra mắt VN hoặc toàn cầu) từ link hoặc tên chính thức của sản phẩm; gọi bằng /template-ra-mat-xe-2-banh-moi. Viết xong đăng forum 767 và trả link theo soul."
---
Nguồn: {input}
# Template tin ra mắt xe máy 2 bánh mới (tinhte.vn)

Biến link nguồn (thông cáo hãng, báo nước ngoài, sự kiện tại VN) hoặc tên chính thức của sản phẩm thành bài BBCode đúng giọng và bố cục tin xe máy trên tinhte.vn.

## Khi nào dùng
- Lệnh `/template-ra-mat-xe-2-banh-moi <link hoặc tên chính thức của sản phẩm>`.
- Xe máy, mô tô, xe máy điện vừa công bố chính thức; đời mới (năm model mới, đổi màu, lên Euro 4); xe đã ra mắt toàn cầu nay về VN hoặc có giá chính thức tại VN; ra mắt tại triển lãm (EICMA…); hãng mới vào VN; nhiều mẫu cùng lúc.
- Không dùng cho: tin đồn/rò rỉ, trên tay/trải nghiệm/review, so sánh, triệu hồi, doanh số, ô tô (dùng `/template-ra-mat-xe-moi`), xe đạp điện. Gặp các dạng này thì báo lại và dùng `/viet-tin`.

## Quy trình
1. Đọc hết nguồn trong `{input}` hoặc tự tìm luôn khi có tên chính thức của sản phẩm. Mở thêm trang sản phẩm hoặc thông cáo chính thức của hãng (ra mắt VN thì mở trang của hãng tại VN) để đối chiếu thông số, giá, màu, ngày bán. Nguồn báo và nguồn hãng lệch nhau thì lấy theo hãng, bỏ thông tin khác hãng.
2. Kiểm tra chéo ít nhất một nguồn khác nếu tin quan trọng.
3. Xác định: (a) ra mắt tại VN hay toàn cầu/nước ngoài, (b) hãng và dòng xe (mục 6), (c) phân khúc (mục 7), (d) xe mới/thế hệ mới hay chỉ đổi màu, nâng cấp nhẹ, từ đó chọn bản đầy đủ, tiêu chuẩn hay ngắn (mục 3).
4. Lấy đủ dữ liệu theo mục 4. Thiếu thì bỏ qua hoặc ghi "chưa công bố", không suy diễn, không bịa thông số hay giá.
5. Chọn cover, viết tiêu đề và thân bài theo khung dưới, rồi chạy mục 10. Hình cover và hình đầu tiên trong bài không được trùng nhau.
6. Tự rà lại: đúng số liệu, đúng tên xe và tên phiên bản, không lỗi chính tả, không còn câu tiếng Anh thừa.
7. Tải và chèn ảnh, đăng bài, trả link: theo mục Đầu ra.
8. Gửi kết quả link tinhte.vn cho @mauscheck và gọi skill /mauscheck bằng `coordinate_bots` tới mauscheck với `thread: "new"` (mỗi lần kiểm tra mở một thread mới), nội dung `/mauscheck <link bài> <link nguồn chính> template-ra-mat-xe-2-banh-moi`.

## 1. Tiêu đề
Công thức chính (16/30 bài mẫu có dấu hai chấm, 18/30 có giá, 15/30 có năm model):
`[Hãng] [Tên xe] [năm model] ra mắt [tại Việt Nam]: [điểm nhấn 1], [điểm nhấn 2], giá từ [X] triệu đồng`
- Điểm nhấn ưu tiên: thay đổi lớn nhất (thế hệ mới, động cơ, Euro 4, YECVT, E-Clutch) → trang bị mới (TFT, ABS, TCS) → màu, bản mới → số lượng giới hạn → giá đặt cuối.
- Dài 60–100 ký tự (mẫu: trung vị 74). Giá viết kiểu Việt: "giá từ 78,09 triệu", "699 triệu đồng", "từ hơn 152 triệu đồng". Không để dấu phẩy, "..." treo cuối, không hai dấu cách liền.
- Biến thể có trong mẫu:
  - Lần đầu về VN: `Honda GB350S lần đầu ra mắt thị trường Việt Nam, giá 134,99 triệu đồng`.
  - Nhà phân phối đứng đầu: `Yamaha Việt Nam ra mắt NVX 2025: Số CVT điều khiển điện, ABS, TCS, giá từ 56,5 triệu đồng`.
  - Nhiều mẫu: `VinFast ra mắt hai mẫu xe máy điện hoàn toàn mới: Kinet và Kyo, giá từ 30 triệu đồng`.
  - Toàn cầu/triển lãm: thay giá bằng trang bị mới, `Honda SH350i 2027 ra mắt tại EICMA: thêm màn hình TFT 4,2 inch, kết nối RoadSync và 6 màu mới`. Chưa có giá thì ghi "chưa rõ giá bán" hoặc bỏ.
  - Bản giới hạn: `[Xe] giá [X] triệu tại Việt Nam: bản kỷ niệm 80 năm, chỉ có 1.946 chiếc`.
  - Xe điện: điểm nhấn là quãng đường, `VinFast ra mắt Evo Grand mới: 262 km mỗi lần sạc, giá từ 25,9 triệu đồng`.
- Động từ đúng sự kiện: "ra mắt", "giới thiệu", "mở bán" (đã công bố, nay bán), "gia nhập thị trường Việt Nam" (hãng mới).
- Tránh tít câu hỏi, viết hoa cả cụm, dấu chấm than, "siêu phẩm".

## 2. Ảnh cover
- Cover là ảnh riêng gắn làm thumbnail, không lặp lại trong thân bài. Ảnh ngang tỷ lệ 16:9 hoặc 3:2, dung lượng dưới 700KB, định dạng jpg, png hoặc webp. (Cover mẫu: 16/30 là 3:2, 8/30 là 4:3, 6/30 là 16:9; ảnh 4:3 phải cắt về 3:2.)
- Thứ tự ưu tiên khi chọn từ nguồn:
  1. Ảnh báo chí chính thức, toàn thân xe góc 3/4 phía trước, xe nằm trọn khung, thấy rõ đầu đèn và logo. Nền studio trơn (khoảng 8/30) hoặc ngoài trời đúng chất xe (khoảng 12/30): tay ga ở phố, mô tô trên đèo, enduro ở địa hình.
  2. Ra mắt tại VN: ảnh sự kiện thấy rõ xe và tên xe (khoảng 5/30), không lấy ảnh người phát biểu.
  3. Nhiều mẫu hoặc nhiều màu: một ảnh xếp các xe cùng khung hoặc ghép 2–4 ảnh (3/30).
- Không lấy ảnh watermark, render tin đồn, bảng giá, slide chữ, ảnh chi tiết làm cover.
- Ảnh đầu thân bài là góc khác (ngang thân, 3/4 sau, màu khác, cận đầu đèn), đặt sau đoạn mở.

## 3. Bố cục và các mục H2
Bản đầy đủ (650–1.300 từ, 15/30 bài mẫu; xe mới hoặc thế hệ mới, tay ga cao cấp, côn tay, phân khối lớn, xe điện mới, nhiều mẫu, nguồn dày):
1. Mở bài, không có H2: 1–2 đoạn. Câu đầu theo mẫu "[Đơn vị] vừa chính thức giới thiệu [tên xe đầy đủ + năm], [loại xe/phân khúc], [thay đổi chính]". Đoạn 2: phiên bản, ngày bán, nơi bán, khoảng giá (ghi đã gồm VAT), hoặc vị trí trong dòng xe.
2. Ảnh, rồi các `[H2]` theo thứ tự hay gặp:
   - `Thiết kế` (ngoại hình, đèn, màu, phiên bản)
   - `Động cơ & vận hành` (động cơ, công suất, hộp số, khung, treo, phanh, lốp, tiêu hao)
   - `Tiện ích & an toàn` (đồng hồ, smartkey, ABS/TCS, cốp, kết nối)
   - Xe điện thêm `Pin, quãng đường & sạc`.
3. Mục tùy chọn, chỉ khi có dữ liệu: `Thông số kỹ thuật chính` (`[LIST]`), lịch sử dòng xe (bản kỷ niệm), hạ tầng đổi pin/sạc, `Hình ảnh thực tế` (sự kiện VN).
4. `[H2]Giá bán & các phiên bản[/H2]` (hoặc `Giá bán và ưu đãi`, `Giá bán & thời điểm ra mắt`): luôn là H2 cuối. Khép bằng 1–2 câu xe hợp với ai hoặc khác biệt giữa các bản. Không có mục "Kết" (0/30 bài mẫu).
5. `[galleria]` ảnh còn lại (22/30 bài mẫu, đặt cuối).
6. Dòng nguồn: `Theo: [URL='link'][B]Tên nguồn[/B][/URL]`.

Bản tiêu chuẩn (350–650 từ; đổi màu, lên Euro 4, nâng cấp nhẹ, xe phân khối lớn đã có toàn cầu nay về VN): mở bài → các cặp ảnh + đoạn mở bằng "Về thiết kế,", "Về động cơ,", "Về trang bị," → giá và ngày bán (`[LIST]`) → câu khép → galleria → dòng nguồn. Không có H2. Không thêm H2 cho đủ.

Bản ngắn (150–350 từ, 1–4 ảnh; bản màu/đặc biệt, toàn cầu chưa về VN, hãng nhỏ): mở bài → ảnh → 1–2 đoạn điểm mới → giá hoặc "chưa công bố giá" → dòng nguồn.

Nhiều mẫu cùng lúc: mở bài liệt kê đủ tên và khoảng giá, mỗi mẫu một H2 mang tên xe kèm định vị ("VinFast Kinet: thể thao, mạnh mẽ"; mẫu chung động cơ gộp một H2 như "CBR650R & CB650R"), có thể thêm `Trang bị chung`, rồi `Giá bán các phiên bản` gộp cuối.

Đặt tên H2: ngắn ("Thiết kế", "Tiện ích") hoặc đưa điểm nhấn vào ("Động cơ eSP+ Euro 4", "YECVT và 2 chế độ lái", "Pin LFP, đi 262 km mỗi lần sạc"). Mỗi bài một kiểu. `[H2]Tiêu đề[/H2]` trơn, không lồng `[B]`, không đánh số, không để ảnh trong thẻ H2, không có H2 rỗng. `[H3]` chỉ cho mục con thật cần (giá tách theo dòng SH160i/SH125i).

## 4. Nội dung bắt buộc
Luôn có (thiếu thì bỏ qua hoặc ghi "chưa công bố"):
- Hãng, đơn vị phân phối, tên xe đúng cách viết của hãng (Sh mode, Exciter 155 VVA), năm model, ngày công bố, ra mắt tại VN hay toàn cầu, nhập khẩu hay lắp ráp.
- Loại xe và phân khúc; số phiên bản, tên từng bản, màu từng bản; bản nào có ABS, bản nào CBS.
- Động cơ: tên (eSP+, Blue Core…), dung tích, số xi-lanh, làm mát, van, phun xăng điện tử, chuẩn khí thải. Công suất và mô-men xoắn kèm vòng/phút. Hộp số (CVT, số tròn, 6 cấp, ly hợp).
- Thay đổi so với đời trước bằng số liệu cụ thể (LCD lên TFT 4,2 inch, USB-A lên USB-C).
- Giá từng phiên bản/màu, đã gồm VAT bao nhiêu % (Honda thường công bố cả 8% và 10%), ngày bán, nơi bán (HEAD, Honda DreamWing, Honda CB, đại lý…).

Có thì đưa vào:
- Kích thước, chiều cao yên, khoảng sáng gầm, trọng lượng, bình xăng, cốp (lít, chứa mũ gì).
- Khung, phuộc trước/sau (hành trình ngược USD, đường kính), phanh (đĩa mm, piston, ABS 1 hay 2 kênh), vành và lốp (inch, cỡ lốp, không săm).
- Đèn, đồng hồ (LCD/TFT, inch), smartkey, kết nối app, TCS/HSTC, Idling Stop, ESS, cổng sạc, chế độ lái.
- Tiêu hao nhiên liệu kèm chuẩn đo (WMTC) và nguồn; tốc độ tối đa.
- Xe điện: mô-tơ, công suất danh định và tối đa (W), pin (loại, kWh, số pin, tháo rời), quãng đường và điều kiện đo, thời gian sạc, đổi pin, giá kèm pin/thuê pin, chống nước IP.
- Bảo hành (xe, pin), ưu đãi kèm thời hạn, quà tặng, số lượng giới hạn.
- So sánh: chủ yếu với đời trước hoặc các bản trong dòng. Đối thủ chỉ một câu khi nguồn nêu hoặc khi định vị phân khúc.
- Giá VN chỉ khi có nguồn chính thức. Không tự quy đổi USD, EUR, bảng sang VND, không đoán giá về VN.

Sau thông số quan trọng thêm nửa câu "nghĩa là gì": "yên cao 880 mm là mức cao với xe đường phố, người thấp nên ngồi thử".

## 5. Đặt ảnh
- Nguồn không có hoặc ít hình chính thức (nhiều bài chính sách/gọi vốn chỉ dùng cover) thì tìm ảnh nguồn khác để minh họa hợp lý. Bản đủ có 2 ảnh trở lên hoặc video; sự kiện nhiều hơn thì ảnh dư gom `[galleria]` cuối bài.
- Mỗi H2 bắt buộc có ít nhất 1 ảnh, trước đoạn văn nó minh họa. Không lấy cover làm ảnh trong bài.
- Số ảnh: bản đầy đủ 6–12 ảnh trong thân bài, tiêu chuẩn 3–6, ngắn 1–4; cộng galleria. Mẫu: trung vị 14,5 ảnh mỗi bài, 5,5 ảnh trong thân. Xe phân khúc càng cao càng nhiều góc.
- Ảnh đặt **trên** đoạn văn nói về nó: ảnh trước, chữ sau (22/30 bài mẫu đặt ảnh ngay đầu đoạn). Mỗi H2 có ít nhất một ảnh ngay dưới tiêu đề mục.
- Thứ tự góc gợi ý: toàn thân → đầu đèn → thân, màu → đuôi → động cơ → phanh, mâm → đồng hồ → cốp → pin/sạc → các màu.
- Ảnh còn lại gom vào một `[galleria]…[/galleria]` sau mục giá, không lặp ảnh trong thân.
- Chú thích `[I]…[/I]` dưới ảnh chỉ khi cần giải thích.
- Video của hãng: `[MEDIA=youtube]id[/MEDIA]` sau đoạn mở.
- Có thể tạo ảnh minh hoạ khi nguồn hoặc hãng không có: minh hoạ công nghệ, thông số, so sánh thông số.

## 6. Theo dòng xe
- **Honda:** "Honda Việt Nam (HVN)". Vision, LEAD, Air Blade, Vario: cốp, tiêu hao, Idling Stop, smartkey. SH, SH Mode, SH350i: "gia đình SH", đèn, TFT, My Honda+/RoadSync, ABS 2 kênh, HSTC, giá từng bản kèm 8% và 10% VAT. Wave, Future, Super Cub: bền, tiết kiệm, Super Cub nhắc di sản C100. Winner R, CB/CBR/Rebel/GB/NX, Gold Wing: DreamWing/Honda CB, E-Clutch, HSTC, phong cách xe. UC3, CUV e:: pin đổi, trạm sạc, quãng đường.
- **Yamaha:** gọi "Yamaha Motor Việt Nam". Janus, Grande, LEXi, NVX, XMAX: Blue Core, hybrid (Grande, GEAR 125 Hybrid), YECVT, Y-Connect. Exciter, Jupiter: "xe côn tay", VVA, TCS, A&S. R15/R3/MT, WR155: R-DNA, ngồi thể thao, địa hình.
- **Piaggio, Vespa:** thiết kế, di sản, bản đặc biệt (946 con giáp, bản kỷ niệm), số lượng giới hạn, động cơ i-get, ABS.
- **Suzuki, SYM:** gọn, nhấn giá và điểm khác đời trước.
- **VinFast, Yadea, Dat Bike:** theo mục 7 "Xe máy điện", thêm trạm đổi pin, ứng dụng.
- **Phân khối lớn nhập khẩu (BMW Motorrad, Ducati, Kawasaki, Triumph, Harley-Davidson, KTM, Royal Enfield, Lambretta):** nhà phân phối, kiểu xe, động cơ (Boxer, V-twin, xi-lanh thẳng hàng), công suất, điện tử (chế độ lái, ABS Pro, kiểm soát lực kéo, quickshifter), khung, phuộc, phanh. Giữ tên công nghệ của hãng (DTC, MSR, Keyless Ride).

## 7. Theo phân khúc
- **Xe số phổ thông:** tiết kiệm xăng, bền, giá, màu mới; thường bản tiêu chuẩn/ngắn.
- **Tay ga phổ thông:** cốp, smartkey, tiêu hao, chiều cao yên, CBS/ABS, giá từng bản.
- **Tay ga cao cấp:** thiết kế, TFT, kết nối, ABS 2 kênh, kiểm soát lực kéo, chênh trang bị giữa các bản.
- **Côn tay, thể thao:** động cơ, VVA, hộp số 6 cấp, ly hợp chống trượt, TCS, phuộc, tư thế lái.
- **Phân khối lớn:** số liệu dày, chiều cao yên ("dễ chống chân"), điện tử, hợp người mới hay người có kinh nghiệm. Nên có H2 động cơ và khung gầm.
- **Xe máy điện:** đặt giá (kèm pin/thuê pin) và quãng đường lên đầu, câu nhắc quãng đường thực tế thay đổi theo tải và tốc độ, tốc độ tối đa so với xe xăng, sạc và đổi pin.
- **Bản màu mới/đặc biệt, giới hạn:** bản tiêu chuẩn hoặc ngắn; nói rõ cơ khí giữ nguyên hay đổi, số lượng, giá.
- **Ra mắt toàn cầu/triển lãm:** giá theo tiền gốc nếu có, đoạn "chưa có thông tin về Việt Nam" hoặc nhắc bản đang bán tại VN kèm giá.
- **Ra mắt VN:** nhà phân phối, ngày bán, đại lý, giá gồm VAT, ưu đãi kèm thời hạn.

## 8. Văn phong
- **Xưng hô:** tin ra mắt viết khách quan. Gọi người đọc qua vai trò: "người dùng", "người lái", "khách hàng", "người mua". "Mình" chỉ 1–2 lần ở câu nhận định cuối (5/30 bài mẫu), "anh em" rất thưa (2/30). Không dùng "tôi", "các bạn", "quý độc giả".
- **Câu:** 20–30 chữ, đoạn 2–4 câu một ý, mở bằng "Về thiết kế,", "Ở phía sau,", "Đáng chú ý,". Ghi nguồn bằng "theo Honda", "theo công bố của hãng", "Honda cho biết".
- **Nên dùng:** "vừa chính thức giới thiệu/ra mắt", "phiên bản", "đời trước", "thế hệ hiện hành", "giữ nguyên", "làm mới", "bổ sung", "đáng chú ý", "điểm mới", "cụ thể", "hướng đến", "phù hợp với", "đổi lại", "giá bán lẻ đề xuất", "mở bán".
- **Tránh:** "siêu phẩm", "đẳng cấp", "đỉnh cao", "đột phá" (trừ khi hãng nói), "người tiền nhiệm" lặp lại, câu PR ("mang đến trải nghiệm…"), dấu chấm than, emoji, câu hỏi tu từ.
- **Giữ tiếng Anh:** ABS, CBS, TCS/HSTC, ESS, TFT, LCD, LED, Smart Key, USB-C, Bluetooth, CVT, VVA, E-Clutch, Idling Stop, quickshifter, naked, sport, scrambler, adventure, enduro, cruiser, roadster, dual-sport, in-hub, IP67, WMTC, Euro 4/Euro5+, DOHC/SOHC, tên app và tên phiên bản.
- **Viết tiếng Việt:** xi-lanh, mô-men xoắn, mô-tơ, phun xăng điện tử, làm mát bằng dung dịch/không khí, phân khối, phân khối lớn (không viết "PKL" trong bài), côn tay, tay ga, xe số, ly hợp chống trượt, phuộc hành trình ngược, giảm xóc, phanh đĩa, vành, lốp không săm, cốp, yên, ghi đông, khóa thông minh, kiểm soát lực kéo. Viết tắt lần đầu kèm nghĩa ("kiểm soát lực kéo TCS").
- **Định dạng số:** kiểu Việt, dấu phẩy thập phân (15,2 mã lực; 4,2 inch; 78,09 triệu; 23/30 bài mẫu), dấu chấm ngăn nghìn (2.160 mm, 7.500 vòng/phút). Số và đơn vị cách một dấu cách (805 mm, 172 kg, 28 lít, 31,5 Nm), riêng dung tích viết liền như tên gọi (155cc). Công suất giữ đơn vị hãng công bố, quy đổi để trong ngoặc với chữ "khoảng" ("15,5 kW (khoảng 21 mã lực)"). Giá trong câu "78,09 triệu đồng"; trong `[LIST]` ghi đủ số `[*]Thể Thao (ABS): 104.490.000 đồng`. Dùng "đồng", không "VNĐ", "đ".
- **Mở bài mẫu (diễn giải):** "Honda Việt Nam vừa chính thức giới thiệu SH160i và SH125i 2027, thay đổi chính là động cơ eSP+ đạt Euro 4, theo hãng giảm khoảng 60% khí thải so với đời trước."
- **Câu khép mẫu (diễn giải):** "SH350i 2027 hợp với người cần tay ga bánh lớn đi phố êm, chạy xa được, nay thêm màn hình kết nối điện thoại; ai đang đi bản 2025 thì chưa cần lên đời."
- **Câu khép:** tóm điểm đáng giá nhất, xe hợp với ai, 1 đánh đổi nếu có. Không viết như đã lái thử, trừ khi input nói rõ người viết có mặt tại sự kiện.

## 10. Tự kiểm tra trước khi giao
- [ ] Tít theo công thức, 60–100 ký tự, giá kiểu Việt, không dấu phẩy treo, không hai dấu cách liền.
- [ ] Cover đúng thứ tự ưu tiên, 16:9 hoặc 3:2, dưới 700KB, khác ảnh đầu trong thân bài, không watermark.
- [ ] Mở bài đủ đơn vị, tên xe + năm, phân khúc, thay đổi chính, ngày bán, khoảng giá.
- [ ] Đủ mục bắt buộc hoặc đã ghi "chưa công bố"; có so sánh đời trước bằng số liệu.
- [ ] Đúng bản (đầy đủ, tiêu chuẩn, ngắn). H2 trơn, không rỗng, Giá bán là H2 cuối, không mục "Kết".
- [ ] Ảnh trên đoạn tương ứng, mỗi H2 có ảnh, galleria cuối không lặp ảnh thân bài.
- [ ] Giá từng bản/màu, ghi VAT, ngày và nơi bán. Giá VN có nguồn chính thức hoặc ghi chưa có. Không giá đoán, không tự quy đổi tiền.
- [ ] Quãng đường xe điện và tiêu hao xăng có ghi chuẩn/điều kiện đo.
- [ ] Viết khách quan, "mình" không quá 2 lần, không có từ trong danh sách tránh.
- [ ] Chỉ BBCode XenForo (`[H2]`, `[H3]`, `[B]`, `[I]`, `[LIST]`, `[URL]`, `[galleria]`, `[MEDIA]`), không Markdown, không `[HEADING]`. 100% tiếng Việt, giữ thuật ngữ Anh thông dụng.
- [ ] Đã đối chiếu thông số với trang chính thức của hãng. Có dòng `Theo:`.

## 11. Đầu ra
Theo soul: `create_thread` ở forum 767 (ảnh theo soul), trả tiêu đề và link, không in bài. Bàn giao mauscheck: theo bước cuối mục Quy trình.
