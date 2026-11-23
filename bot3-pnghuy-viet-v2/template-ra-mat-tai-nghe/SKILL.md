---
name: template-ra-mat-tai-nghe
description: Viết tin "ra mắt tai nghe" cho tinhte.vn (true wireless, chụp tai, gaming headset, open-ear, dẫn truyền xương, IEM hi-end, tai nghe có dây; toàn cầu hoặc tại VN) theo giọng pnghuy, từ link hoặc chủ đề; gọi bằng /template-ra-mat-tai-nghe.
---

# Template tin ra mắt tai nghe (tinhte.vn)

Biến link nguồn (thông cáo, trang sản phẩm, báo nước ngoài, sự kiện tại VN) thành bài BBCode đúng giọng pnghuy (Huy Nhỏ) và bố cục tin tai nghe trên tinhte.vn.

## Khi nào dùng
- Lệnh `/template-ra-mat-tai-nghe <link hoặc chủ đề>`.
- Tai nghe vừa công bố chính thức: đời mới, dòng mới, cả series (Pro/thường/X), bản đã ra mắt toàn cầu nay có giá hoặc mở bán tại VN, thêm màu mới có giá.
- Loa di động, loa thông minh, soundbar ra mắt **cùng** tai nghe: mỗi sản phẩm một H2 trong bài này. Bài **chỉ có loa**: được dùng skill này với checklist loa ở mục 4, nhưng báo lại để anh chốt.
- Không dùng cho: tin đồn/rò rỉ, trên tay/trải nghiệm/review/so sánh, firmware, mẹo bật codec. Tai nghe chỉ là phụ trong tin điện thoại (tặng kèm, bỏ tai nghe khỏi hộp, Unpacked mà điện thoại là chính) thì dùng `/template-tin-tuc-smart-phone`. Gặp dạng khác thì báo lại và dùng `/viet-tin`.

## Quy trình
1. Đọc hết nguồn trong `{input}`. Mở thêm trang sản phẩm hoặc thông cáo chính thức của hãng (ra mắt VN thì mở trang hãng/nhà phân phối tại VN) để đối chiếu thông số, giá, màu, ngày bán. Nguồn báo lệch hãng thì lấy theo hãng.
2. Kiểm tra chéo một nguồn khác nếu tin quan trọng.
3. Xác định: (a) toàn cầu, triển lãm hay tại VN, (b) kiểu tai nghe (mục 6), (c) hãng (mục 7), (d) phân khúc (mục 8), (e) một mẫu hay nhiều mẫu, từ đó chọn bản đầy đủ, nhiều mẫu hoặc ngắn (mục 3).
4. Lấy đủ dữ liệu theo mục 4. Thiếu thì bỏ qua hoặc ghi "hãng chưa công bố", không suy diễn, không bịa thông số hay giá.
5. Viết bài.
6. Tải hình ảnh trong các nguồn tham khảo để minh hoạ cho nội dung bài viết.
7. Hình tải về lưu tại /Users/khang/AI/tinhte-uploads
8. Chọn cover, viết tiêu đề và thân bài theo khung dưới, rồi chạy mục 10. Hình cover và hình đầu tiên trong bài không được trùng nhau.
9. Đặt hình vào bài bằng mcp tinhte, ở các vị trí hợp lý.
10. Tự rà lại: đúng số liệu, đúng tên và phiên bản, không lỗi chính tả, không câu tiếng Anh thừa.
11. Sử dụng mcp tinhte tạo bài viết trên forum 767
12. Trả kết quả là link tinhte.vn, không trả bài viết
13. Gửi kết quả link tinhte.vn cho @mauscheck và gọi skill /mauscheck

## 1. Tiêu đề
Công thức chính (bài mẫu pnghuy: 4/5 bài format có dấu hai chấm và giá, dài 76–96 ký tự, trung vị khoảng 92):
`[Hãng] ra mắt [Tên tai nghe]: [điểm nhấn 1], [điểm nhấn 2], [điểm nhấn 3], giá [X] USD`
- Phần sau dấu hai chấm là chuỗi tính năng ngắn, cách nhau dấu phẩy, mỗi cụm 2–5 chữ: "chống ồn chủ động", "xuyên âm", "driver 50mm", "pin 35 tiếng/giờ", "hai driver", "thiết kế trong suốt", "SmartSwitch", "MFi, Google Fast Pair". Giá luôn đứng cuối: `giá 170 USD`, `giá từ 100 USD` (nhiều mẫu), `giá 6.990.000 đồng`.
- Điểm nhấn ưu tiên: thứ mới nhất so với đời trước (thiết kế lạ, chống ồn, driver, chip) → tính năng kết nối/hệ sinh thái → pin → giá.
- Dài 60–100 ký tự, 2–4 điểm nhấn. Không để dấu phẩy, "..." treo cuối, không hai dấu cách liền, không hai dấu hai chấm trong một tít.
- Biến thể có trong mẫu:
  - Câu chuyện "lần đầu": `Bose ra mắt tai nghe nhét tai có dây đầu tiên sau 11 năm, có chống ồn chủ động, giá 99 USD`, `Samsung Galaxy Buds On, tai nghe mở đầu tiên của Samsung, có giá 229 USD tại Mỹ, bán từ 6/11`.
  - Tên đứng đầu, không động từ: `Samsung Galaxy Buds Pro: chống ồn chủ động, thiết kế mới, hai driver, …`.
  - Nhiều sản phẩm: `realme ra mắt loa di động Pocket Bluetooth và tai nghe true wireless Buds Q2`.
  - Ra mắt VN: `Sony ra mắt tai nghe không dây hoàn toàn WF-1000XM5, giá 6.990.000 đồng`.
  - Màu mới: `[Tên] có thêm hai màu mới: [màu 1] và [màu 2], giá không đổi [X]`.
- Động từ đúng sự kiện: "ra mắt", "giới thiệu", "công bố", "mở bán". Giá trong tít phải khớp giá hãng; ghi đủ số lẻ hoặc dùng "từ" khi nhiều mức. Không tít câu hỏi khi tin đã chốt, không "siêu phẩm", không viết hoa cả cụm.

## 2. Ảnh cover
- Cover là file riêng gắn làm thumbnail, không chèn lại trong thân bài (5/5 bài format: ảnh cover `inserted=false`). Ảnh ngang 16:9 hoặc 3:2 (bài mẫu 2048x1152, 2048x1365), dưới 700KB, jpg/png/webp. Ảnh vuông hoặc dọc phải cắt về khung ngang.
- Thứ tự ưu tiên khi chọn từ nguồn:
  1. Ảnh key visual/hero chính thức của hãng: tai nghe + hộp sạc (true wireless) hoặc tai nghe đặt nghiêng 3/4 (chụp tai), nền sạch, thấy rõ thiết kế mới (vỏ trong suốt, kiểu kẹp tai, màu mới).
  2. Nhiều mẫu hoặc cả dòng: ảnh xếp các mẫu cùng khung (như ảnh "Barracuda Line").
  3. Ra mắt tại VN: ảnh sự kiện hoặc ảnh nhà phân phối thấy rõ sản phẩm, không lấy ảnh người phát biểu.
- Không lấy ảnh người mẫu cận mặt, render tin đồn, ảnh watermark shop, slide thông số làm cover.
- Ảnh đầu thân bài là góc khác: tai nghe đeo trên tai, hộp sạc mở, các màu, cấu trúc bên trong.

## 3. Bố cục và các mục H2
**Bản đầy đủ** (450–900 từ, một mẫu flagship hoặc nguồn dày, như Studio Buds+, Beats 360):
1. Mở bài, không H2, 1–2 đoạn: "[Hãng] (vừa) chính thức ra mắt [tên đầy đủ], [kiểu tai nghe] tiếp theo của [hãng/dòng], [định vị: hướng đến ai]" rồi tóm 2–4 điểm nâng cấp so với đời trước.
2. Ảnh đầu (khác cover), video hãng `[MEDIA=youtube]id[/MEDIA]` nếu có.
3. 3–5 `[H2]` theo điểm nhấn, xếp từ mới nhất xuống. Mẫu đặt tên ngắn kiểu: "Ngoại hình xuyên thấu", "Chống ồn chủ động và xuyên âm", "Chip xử lý âm thanh", "Pin tối đa 32 giờ, sạc nhanh qua USB-C", "Hỗ trợ cả hệ sinh thái Apple và Android".
4. `[H2]Giá bán của [Tên][/H2]` (hoặc "Giá bán và thời điểm lên kệ") là H2 cuối. Không có mục "Kết".
5. Tuỳ chọn: "Mời anh em xem thêm:" + 1–3 `[preview]link bài Tinhte liên quan[/preview]` (đời trước, so sánh, trên tay).
6. Dòng nguồn.

**Bản nhiều mẫu** (cả dòng gaming, tai nghe + loa, ra mắt cùng sự kiện): mở bài liệt kê đủ tên và định vị từng mẫu. Mỗi mẫu một H2 mang tên sản phẩm, ví dụ "Razer Barracuda Pro", "Tai nghe true wireless realme Buds Q2". Trong mỗi H2: ảnh → 2–4 đoạn → khối `Cấu hình [Tên]:` dạng `[LIST]`, dòng cuối là giá (`[*]Giá: 249,99 USD`). Không thêm H2 "Giá bán" riêng khi giá đã nằm trong từng mục.

**Bản ngắn** (150–450 từ, 2/5 bài format không H2; nguồn mỏng, màu mới, giá VN): mở bài → các đoạn "Thiết kế …", "Bên trong …", "Về chống ồn …", "Về màu sắc và giá bán thì …" xen ảnh → dòng nguồn. Không thêm H2 cho đủ.

H2 trơn `[H2]Tiêu đề[/H2]`: không lồng `[B]` (bài mẫu cũ có `[H2][B]…[/B][/H2]`, bỏ thói quen này), không đánh số, không để ảnh trong thẻ H2, không H2 rỗng. Đưa con số hoặc tính năng vào tên mục khi có.

## 4. Nội dung bắt buộc
Luôn có (thiếu thì ghi "hãng chưa công bố" hoặc bỏ qua):
- Hãng, tên đúng cách viết của hãng (Studio Buds+, WF-1000XM5, Beoplay HX, RΛZΞR/Razer), kiểu tai nghe, ngày công bố, toàn cầu hay tại VN, đời trước là gì.
- Thiết kế: kiểu đeo (in-ear, kẹp tai, chụp tai, on-ear), chất liệu, trọng lượng (mỗi bên tai nghe với true wireless, g với chụp tai), màu, phụ kiện trong hộp (số cặp ear tips, túi, cáp).
- Âm thanh: driver (kích thước mm, số lượng, loại: dynamic, BA, planar, màng carbon/bio-cellulose), chip (H2, Snapdragon S7, chip tùy chỉnh), trở kháng/độ nhạy với tai nghe có dây, Hi-Res, Spatial Audio, Dolby Atmos, head tracking.
- Chống ồn: có hay không ANC, số micro, mức cải thiện hãng công bố ("tốt hơn 1,6 lần", "lọc 99%"), xuyên âm/Ambient/Transparency, chế độ thích ứng. Open-ear thì nói rõ không có ANC.
- Kết nối: Bluetooth (phiên bản), codec (SBC, AAC, aptX Adaptive/Lossless, LDAC, LC3, SSC), multipoint (có hay **không**), Fast Pair, Swift Pair, MFi, chuyển thiết bị tự động, Find My/Find My Device; gaming thì 2.4GHz dongle, USB-C, 3,5 mm, độ trễ.
- Pin: giờ trên tai nghe, tổng giờ với hộp, điều kiện (bật/tắt ANC), sạc nhanh ("sạc 5 phút nghe thêm 1 giờ"), USB-C, sạc không dây Qi; dung lượng mAh nếu có.
- Chống nước: IPX4, IP54, IPX7 kèm một câu ý nghĩa (mồ hôi, mưa nhẹ).
- Ứng dụng và tính năng: app, EQ tuỳ chỉnh, điều khiển cảm ứng/cử chỉ đầu, in-ear detection, micro đàm thoại, trợ lý (Siri, Gemini, Bixby), dịch trực tiếp.
- Giá từng phiên bản, ngày đặt trước và ngày lên kệ, thị trường nào. Giá VN chỉ khi hãng/nhà phân phối công bố; không tự quy đổi. Nguồn đã quy đổi thì ghi "khoảng X triệu đồng" và nêu nguồn.
- So sánh với đời trước bằng số liệu, và nêu cả tính năng **còn thiếu** khi nguồn xác nhận (pnghuy hay viết: "vẫn thiếu in-ear detection", "không hỗ trợ multipoint").

Loa (khi đi kèm hoặc bài chỉ có loa): số củ loa woofer/tweeter, công suất W, cấu hình kênh (5.1, 7.1.4), Wi-Fi, AirPlay 2, Chromecast, Spotify Connect, eARC/HDMI, pin, IP, trọng lượng, giá.

## 5. Đặt ảnh
- Nguồn không có hoặc ít hình chính thức (nhiều bài chính sách/gọi vốn chỉ dùng cover) thì tìm ảnh nguồn khác để minh họa hợp lý. Bản đủ có 2 ảnh trở lên hoặc video; sự kiện nhiều hơn thì ảnh dư gom `[galleria]` cuối bài.
- Mỗi H2 bắt buộc có ít nhất 1 ảnh, trước đoạn văn nó minh họa. Không lấy cover làm ảnh trong bài.
- Số ảnh: bản đầy đủ 4–8, nhiều mẫu 2–4 mỗi H2. Không dùng cover làm ảnh trong bài.
- Ảnh đầu đặt ngay sau đoạn mở. Bài có H2 thì ảnh đặt ngay dưới H2 hoặc sau câu dẫn đầu tiên của mục; ảnh nằm trước hoặc ngay sau đoạn nói về nó.
- Thứ tự góc: toàn sản phẩm/đeo trên tai → hộp sạc, nút → cấu trúc driver, micro → các màu.
- Hai ảnh cùng ý (hai màu, hai góc): gom trong `[galleria]…[/galleria]`.
- Chú thích `[I]Ảnh: [Hãng/nguồn][/I]` dưới ảnh khi lấy từ báo.
- Ảnh landscape, dưới 700KB. Có thể tạo ảnh minh hoạ so sánh thông số khi nguồn không có.

## 6. Theo kiểu tai nghe
- **True wireless:** "tai nghe true wireless", "tai nghe không dây hoàn toàn". Nhấn thiết kế tai nghe + hộp sạc, ANC, xuyên âm, pin tai nghe/tổng với case, IP, sạc không dây, multipoint, app.
- **Chụp tai (over-ear/on-ear):** đệm tai, headband, lực kẹp, gập phẳng, trọng lượng, driver 40–50mm, số micro ANC, pin dài, cổng USB-C/3,5 mm, USB audio/lossless có dây.
- **Gaming headset:** "tai nghe gaming". Kết nối kép 2.4GHz + Bluetooth, độ trễ, micro boom tháo rời, âm thanh vòm/không gian (THX, 7.1), phần mềm, nền tảng hỗ trợ (PC, PS5, Switch). Trích lời đại diện hãng trong `[I]"…"[/I]` khi thông cáo có.
- **Open-ear, kẹp tai, dẫn truyền xương:** nói rõ không bịt ống tai, vẫn nghe âm thanh xung quanh, có/không ANC, cách chống lọt âm, độ bám khi vận động. Viết đúng tên kiểu: "tai nghe mở (open-ear)", "kẹp tai", "dẫn truyền qua xương".
- **Audiophile, IEM hi-end:** số driver và phân tần (dynamic, BA, planar), vật liệu vỏ, trở kháng (Ω), độ nhạy (dB), cáp (2-pin, MMCX, 3.5/4.4mm balanced), triển lãm ra mắt (CanJam…). Viết khách quan, không tả chất âm khi chưa nghe.
- **Có dây USB-C/3,5 mm:** lý do quay lại (không lo pin), chiều dài dây, remote, micro, lossless/độ trễ.
- **Giá rẻ, phổ thông:** giá và ưu đãi lên sớm, nêu điểm cắt giảm (ENC thay ANC, Bluetooth cũ, không app).
- **Trẻ em:** giới hạn âm lượng (dB), độ bền, chất liệu (chưa có mẫu pnghuy, viết khách quan).

## 7. Theo hãng
- **Apple/Beats:** "nhà Beats". Chip H2 hay chip Beats tùy chỉnh, hệ quả với chuyển thiết bị trong hệ sinh thái Apple; Spatial Audio, Dolby Atmos; Find My cùng Find My Device/Fast Pair cho Android; giá USD lẻ (169,99 USD); có thể nêu giá VN khi Apple/nhà bán chính thức công bố.
- **Samsung:** Galaxy Buds, codec SSC/SSC-HQ, Auto Switch giữa thiết bị Galaxy, Galaxy AI, Gemini, Bixby, cử chỉ đầu. Nêu vị trí giá trong dòng (đắt thứ mấy so với Buds Pro/Buds thường).
- **Sony:** mã WF/WH-1000XM, chip V2/QN2e, LDAC, Inzone (gaming), PlayStation Pulse; nêu cải thiện chống ồn theo % hãng công bố; chương trình thu cũ đổi mới khi ra mắt VN.
- **Bose:** QuietComfort, Ultra, Immersive Audio, CustomTune, QuietControl, Aware Mode; giọng "quay lại sau X năm" khi đúng.
- **B&O:** định vị cao cấp, vật liệu (nhôm, da cừu, vải), so sánh trong dòng (sau H95), MFi, Swift Pair, Fast Pair, aptX Adaptive, trở kháng; giá USD tròn.
- **Sennheiser:** MOMENTUM, driver TrueResponse, aptX Lossless, pin thay được nếu có; ghi giá VN khi nhà phân phối công bố.
- **JBL, Razer, SteelSeries, HyperX, Audio-Technica:** gaming/streamer nhấn kết nối, micro, phần mềm (QuantumENGINE, Razer Audio); ra mắt VN thì giá đồng và ưu đãi.
- **Hãng Trung Quốc giá rẻ (realme, Xiaomi, Huawei, Anker soundcore, Edifier, QCY):** bài ra mắt VN thường là thông cáo, viết gọn lại, bỏ câu PR ("Dám Sống Trội", "đáng kinh ngạc"). Giá gốc và giá ưu đãi, ngày mở bán, kênh bán (Shopee, Lazada) khi nguồn nêu.

## 8. Theo phân khúc
- **Tầm trung:** ANC, app, multipoint, codec; đối thủ cùng tầm một câu khi nguồn nêu.
- **Flagship:** chống ồn, chip, âm thanh không gian, micro, hệ sinh thái.
- **Hi-end, xa xỉ:** vật liệu, hoàn thiện, cấu trúc driver; nêu giá thẳng, không bình luận "đắt" nếu không có căn cứ.
- **Ra mắt VN:** nhà phân phối, giá đồng, ngày đặt trước/mở bán, ưu đãi kèm thời hạn.
- **Toàn cầu:** giá tiền gốc, thị trường; "chưa có thông tin về Việt Nam" khi đúng là chưa có.

## 9. Văn phong
- **Xưng hô:** tin ra mắt viết khách quan. "Anh em" dùng thưa ("Mời anh em xem thêm", một câu hỏi cuối). "Mình" 0–2 lần ở câu nhận xét nhẹ ("mình không thấy B&O đề cập đến việc sạc nhanh"). Không "tôi", "các bạn", "quý độc giả"; "bạn" trong thông cáo phải đổi thành "người dùng". Không viết như đã nghe thử.
- **Mở bài pnghuy:** "Như vậy là [Hãng] chính thức ra mắt…", "Vậy là sau bao nhiêu đồn đoán thì cuối cùng [Hãng] cũng đã ra mắt…", "Hôm nay [Hãng] đã chính thức ra mắt…", "[Hãng] vừa công bố…". "Đúng như những hình ảnh rò rỉ" khi trước đó đã có tin rò rỉ.
- **Câu:** 20–35 chữ, đoạn 2–4 câu; chuyển ý bằng "Phần nâng cấp quan trọng tiếp theo là…", "Về phần chip và driver,", "Cuối cùng là giá,", "Một chi tiết thay đổi nhỏ nữa…". Ghi nguồn: "theo Beats", "Samsung cho biết", "theo hãng chia sẻ".
- **Nên dùng:** "chống ồn chủ động ANC", "xuyên âm", "đàm thoại", "người tiền nhiệm"/"đời trước" (không lặp quá 2 lần), "case"/"hộp sạc", "ear tips", "kháng nước kháng bụi", "lên kệ", "đặt trước", "hướng đến".
- **Tránh:** "siêu phẩm", "đỉnh của chóp", "đột phá" (trừ khi hãng nói), "trải nghiệm âm thanh đáng kinh ngạc", dấu chấm than, emoji, câu hỏi tu từ đầu bài.
- **Giữ tiếng Anh:** true wireless, ANC, driver, codec, SBC, AAC, aptX, LDAC, LC3, Bluetooth, multipoint, Fast Pair, Spatial Audio, Dolby Atmos, head tracking, Transparency, Adaptive EQ, ear tips, IEM, BA, planar, USB-C, Hi-Res, open-ear, MFi, Find My.
- **Viết tiếng Việt:** chống ồn chủ động, xuyên âm, màng loa, hộp sạc, thời lượng pin, sạc nhanh, kháng nước, cảm biến, nút điều khiển, đệm tai, dẫn truyền qua xương.
- **Định dạng số:** mỗi bài chọn một kiểu tiền và giữ nguyên: `169,99 USD`, `1.999 USD` (chấm ngăn nghìn, phẩy thập phân), không `$199`, `169.99$`. Giá VN: `6.990.000 đồng` hoặc `3,99 triệu đồng`; dùng "đồng", không "đ", "VNĐ". Đơn vị: `11 mm`, `4,1 g`, `9,5 giờ`, `61 mAh`, `25 Ohm`; chọn "giờ" thay "tiếng" và giữ suốt bài.
- **Câu khép:** giá + ngày bán + nơi đặt hàng; tuỳ chọn một câu tóm điểm khác đời trước. Không viết đoạn "Kết" riêng.

## 10. Tự kiểm tra trước khi giao
- [ ] Tít đúng công thức, 60–100 ký tự, giá khớp hãng và đúng kiểu, không dấu treo, không hai dấu cách liền.
- [ ] Cover đúng thứ tự ưu tiên, khung ngang, dưới 700KB, khác ảnh đầu thân bài, không watermark.
- [ ] Mở bài đủ hãng, tên, kiểu tai nghe, định vị, 2–4 điểm nâng cấp.
- [ ] Đủ mục bắt buộc (driver, ANC, codec, Bluetooth/multipoint, pin, IP, trọng lượng, app/EQ, giá, ngày bán, màu) hoặc đã ghi "hãng chưa công bố"; có so sánh đời trước bằng số liệu.
- [ ] Đúng bản (đầy đủ, nhiều mẫu, ngắn). H2 trơn, không `[B]` trong H2, không rỗng; H2 giá là H2 cuối nếu có; không mục "Kết".
- [ ] Ảnh cạnh đoạn tương ứng, mỗi H2 có ảnh, không lặp cover.
- [ ] Không giá đoán, không tự quy đổi tiền; một kiểu tiền, một kiểu số thập phân suốt bài.
- [ ] Khách quan, "mình" không quá 2 lần, không "các bạn", không từ trong danh sách tránh.
- [ ] Chỉ BBCode XenForo (`[H2]`, `[H3]`, `[B]`, `[I]`, `[LIST]`, `[URL]`, `[galleria]`, `[MEDIA]`, `[preview]`), không Markdown, không `[HEADING]`. 100% tiếng Việt, giữ thuật ngữ Anh thông dụng.
- [ ] Có dòng nguồn cuối bài: `Theo: [URL='link'][B]Tên nguồn[/B][/URL]` (nhiều nguồn cách nhau dấu phẩy, ưu tiên trang hãng).

## 11. Đầu ra
1. Sử dụng mcp tinhte tạo bài viết trên forum 767
2. Trả kết quả là link tinhte.vn, không trả bài viết