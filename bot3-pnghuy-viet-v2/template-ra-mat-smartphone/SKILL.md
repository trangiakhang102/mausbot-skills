---
name: template-ra-mat-smartphone
description: Viết tin "ra mắt smartphone" cho tinhte.vn (flagship, máy gập flip/fold/gập ba, camera phone, gaming, siêu bền, tầm trung, giá rẻ; ra mắt Trung Quốc, toàn cầu hoặc về Việt Nam) theo giọng pnghuy (Huy Nhỏ), từ link hoặc chủ đề; gọi bằng /template-ra-mat-smartphone.
---

# Template tin ra mắt smartphone (tinhte.vn)

Biến link nguồn (thông cáo, newsroom, báo nước ngoài, sự kiện tại VN) thành bài BBCode đúng giọng pnghuy (Huy Nhỏ) và bố cục tin ra mắt điện thoại trên tinhte.vn.

## Khi nào dùng
- Lệnh `/template-ra-mat-smartphone <link hoặc chủ đề>`.
- Điện thoại vừa công bố chính thức: đời mới, cả series, ra mắt Trung Quốc, ra mắt toàn cầu, máy đã ra mắt nay **về Việt Nam** (sự kiện, giá, mở bán), bản màu mới có giá, sự kiện ra mắt điện thoại kèm hệ sinh thái (đồng hồ, tai nghe, AIoT).
- Không dùng cho: tin đồn/rò rỉ, cập nhật phần mềm, lỗi, doanh số, chính sách, thị trường, hủy dự án; các tin đó dùng `/template-tin-tuc-smart-phone` (giọng Khoa Đinh). Không dùng cho trên tay, đánh giá, so sánh, máy tính bảng, máy đọc sách. Gặp dạng khác thì báo lại và dùng `/viet-tin`.

## Quy trình
1. Đọc hết nguồn trong `{input}`. Mở thêm trang sản phẩm hoặc thông cáo của hãng (ra mắt VN thì trang hãng tại VN) để đối chiếu thông số, giá, màu, ngày bán. Nguồn báo lệch hãng thì lấy theo hãng.
2. Kiểm tra chéo một nguồn khác nếu tin quan trọng.
3. Xác định: (a) Trung Quốc, toàn cầu hay VN (mục 8), (b) kiểu máy (mục 6), (c) phân khúc (mục 7), (d) hãng (mục 9), (e) một mẫu, series hay sự kiện nhiều sản phẩm; từ đó chọn bản ở mục 3.
4. Lấy đủ dữ liệu mục 4. Thiếu thì bỏ qua hoặc ghi "hãng chưa công bố", không suy diễn, không bịa thông số hay giá.
5. Viết bài.
6. Tải hình ảnh trong các nguồn tham khảo để minh hoạ cho nội dung bài viết.
7. Hình tải về lưu tại /Users/khang/AI/tinhte-uploads
8. Chọn cover, viết tiêu đề và thân bài theo khung dưới, rồi chạy mục 11. Hình cover và hình đầu tiên trong bài không được trùng nhau.
9. Đặt hình vào bài bằng mcp tinhte, ở các vị trí hợp lý.
10. Tự rà lại: đúng số liệu, đúng tên và phiên bản, không lỗi chính tả, không câu tiếng Anh thừa.
11. Sử dụng mcp tinhte tạo bài viết trên forum 767
12. Trả kết quả là link tinhte.vn, không trả bài viết
13. Gửi kết quả link tinhte.vn cho @mauscheck và gọi skill /mauscheck

## 1. Tiêu đề
Công thức chính (22/30 bài mẫu có dấu hai chấm, 16/30 có giá, dài 58–100 ký tự, trung vị 85):
`[Hãng] ra mắt [Tên máy]: [điểm nhấn 1], [điểm nhấn 2], giá từ [X]`
- Điểm nhấn là thứ mới hoặc khác biệt nhất: độ mỏng ("mỏng 3,5mm"), camera ("camera kép 200MP hợp tác ARRI"), chip ("flagship đầu tiên dùng Dimensity 9300"), pin ("pin 8.800mAh"), tính năng lạ ("Camera gimbal 4 DoF"), độ bền, cam kết cập nhật ("7 năm nâng cấp OS"). Có thể nói thẳng điểm yếu: "Thiết kế cũ, chip mới".
- Giá đứng cuối: `giá từ 599 USD`, `giá từ 6.499 NDT`, `giá từ 7,49 triệu đồng`. Máy chưa có giá VN: "chưa có giá cụ thể".
- Biến thể có trong mẫu:
  - Về VN: `[Tên/Series] ra mắt tại Việt Nam: [điểm nhấn], giá từ [X] triệu đồng` (13/30 tít có "Việt Nam"); `[Hãng] Việt Nam ra mắt [Tên]: …`; `[Series] về Việt Nam: …`.
  - Toàn cầu/Trung Quốc: `[Tên] ra mắt toàn cầu: …`, `[Hãng] ra mắt [Tên] tại thị trường quốc tế`.
  - Series nhiều mẫu: liệt kê đủ tên (`Google ra mắt Pixel 11, Pixel 11 Pro và Pixel 11 Pro XL với chip Tensor G6, camera nâng cấp mạnh`) hoặc gọi "Series".
  - Sự kiện kèm hệ sinh thái: `Xiaomi ra mắt Xiaomi 17 Series và các sản phẩm AIoT tại Việt Nam`.
  - Máy ngách: `[Tên]: Điện thoại chuyên dụng cho [mục đích], giá X USD, bán ra [thời điểm]`.
  - Màu mới: `[Hãng] ra mắt [Tên] phiên bản màu [màu] tại Việt Nam`.
- Động từ: "ra mắt" (26/30), "giới thiệu", "công bố", "về Việt Nam", "mở bán". Không dùng "siêu phẩm", không tít câu hỏi, không hai dấu hai chấm, không dấu phẩy treo cuối. Viết đúng tên hãng (HONOR, REDMI, vivo, OPPO, iPhone 17e).

## 2. Ảnh cover
- Cover là file riêng, không chèn lại trong thân bài (29/30 bài mẫu cover `inserted=false`). Khung ngang 16:9 hoặc 3:2 (mẫu 2048x1365, 1280x720), dưới 700KB.
- Ưu tiên khi chọn:
  1. Ra mắt VN có ảnh tự chụp: ảnh máy thật tại sự kiện, thấy mặt lưng/cụm camera và màu nổi bật nhất; không lấy ảnh sân khấu, người phát biểu, nghệ sĩ.
  2. Toàn cầu/Trung Quốc: key visual hoặc hero chính thức của hãng (mặt lưng + mặt trước, các màu xếp cạnh nhau), nền sạch.
  3. Máy gập: ảnh cả gập và mở. Series: đủ các mẫu trong một khung.
- Không lấy render tin đồn, ảnh watermark, slide thông số, ảnh chụp livestream làm cover.
- Ảnh đầu thân bài là góc khác: máy cầm tay, các màu, cận cụm camera.

## 3. Bố cục và các mục H2
**Bản thông số** (toàn cầu/Trung Quốc, 600–1.700 từ; Pixel, iPhone, HONOR, Huawei, Galaxy Z):
1. Mở bài không H2, 1–2 đoạn: ngày, nơi ra mắt (sự kiện, thị trường), tên đầy đủ, vị trí trong dòng ("mẫu gập ba thứ ba của hãng", "mức giá dễ tiếp cận nhất trong dòng iPhone 17"), 2–4 điểm nâng cấp, có thể kèm giá khởi điểm.
2. Ảnh đầu hoặc video hãng (`[MEDIA=youtube]id[/MEDIA]`).
3. H2 theo khối, thứ tự hay gặp: `Thiết kế` (hoặc `Thiết kế & Màn hình`, `Thiết kế & độ bền`) → `Màn hình` → `Cấu hình` / `Cấu hình & pin` / `Hiệu năng & pin` → `Camera` → `Phần mềm` / `Hệ điều hành` → `Giá bán` / `Giá bán và thời điểm bán ra`. Camera phone đưa `Camera` lên ngay sau `Thiết kế`. H2 có thể dài khi gói điểm nhấn: "Thiết kế HiLight cho 2 phiên bản Pro, bản thường có đảo camera giảm 40% độ dày".
4. H2 cuối là giá. Không có mục "Kết".

**Bản sự kiện VN** (500–2.400 từ; Galaxy S, OPPO A/Reno, vivo V, Redmi Note, HONOR X):
- Mở bài: "Hôm qua [ngày], [Hãng] Việt Nam chính thức ra mắt…", giá từ bao nhiêu ngay đoạn 1–2, rồi định vị phân khúc và đối thủ.
- Nguồn mỏng thì không H2 (6/30 bài mẫu): chuỗi ảnh tự chụp, mỗi ảnh kèm 1–3 câu (thiết kế → màn hình → chip/RAM → pin/sạc → phần mềm/AI → độ bền → đại sứ, nghệ sĩ) → giá từng bản → ưu đãi và thời hạn → "Nhiều hình ảnh hơn về [Tên]:" + `[galleria]`.
- Nguồn dày thì chia H2 theo mẫu máy hoặc theo "Giá bán tại Việt Nam", "Các chương trình khuyến mãi hiện có".

**Bản series hoặc sự kiện nhiều sản phẩm**: mỗi mẫu một H2 mang tên máy ("OPPO Reno12 Pro 5G", "Oppo Find N3 Flip"). Sản phẩm phụ (đồng hồ, tai nghe, TV, AIoT) mỗi cái một H2 hoặc gom vào "Các sản phẩm khác", dùng `[H3]` cho từng món. H2 cuối `Giá bán` gom giá tất cả, hoặc giá nằm trong từng H2.

**Bản ngắn** (400–700 từ, nguồn mỏng, như Mate XT 2, vivo V60 Lite): không H2, mở bài → các đoạn thiết kế/màn hình → chip/pin → camera → IP/kết nối → giá và thị trường.

H2 trơn `[H2]Tiêu đề[/H2]`: không lồng `[B]` (bài mẫu cũ có, bỏ thói quen này), không viết hoa mỗi chữ, không H2 rỗng, không đánh số. Thông số cuối bài dạng `[LIST]` khi nhiều phiên bản.

## 4. Nội dung bắt buộc
Luôn có (thiếu thì ghi "hãng chưa công bố" hoặc bỏ):
- Tên đúng, ngày và nơi ra mắt, thị trường, đời trước, vị trí trong dòng.
- **SoC:** tên chip, tiến trình, cấu trúc CPU/GPU khi có, mức tăng % so với đời trước, chip phụ (ISP, modem, chip bảo mật), tản nhiệt. RAM, bộ nhớ (LPDDR5X, UFS 4.1), thẻ nhớ.
- **Màn hình:** kích thước, tấm nền (OLED, LTPO, AMOLED), độ phân giải, tần số quét (1–120Hz), độ sáng HDR/đỉnh (nit), PWM, kính bảo vệ. Máy gập: cả màn hình ngoài và trong, nếp gấp, bản lề.
- **Camera:** từng camera (độ phân giải, cảm biến và kích thước, khẩu độ, zoom quang, OIS), camera trước, video (4K60, Log, Dolby Vision), đối tác (Leica, ZEISS, ARRI), phụ kiện ống kính.
- **Pin/sạc:** mAh (silicon-carbon nếu có), sạc dây W và thời gian (% sau 30 phút), sạc không dây, Qi2, MagSafe, sạc ngược.
- **Thiết kế/vật liệu:** khung (nhôm, titan, Armor Aluminum), mặt lưng, độ dày mm, trọng lượng g (máy gập: dày khi gập và mở), nút mới (Action, Camera Control), màu (tên hãng đặt, kèm tên tiếng Việt khi ra mắt VN).
- **OS/AI:** phiên bản Android và giao diện (One UI, HyperOS, ColorOS, MagicOS, OriginOS, HarmonyOS, iOS), số năm cập nhật, tính năng AI chính (Galaxy AI, Gemini, Apple Intelligence, YOYO) và 1 câu ý nghĩa.
- **Kết nối:** 5G, Wi-Fi, Bluetooth, NFC, eSIM, vệ tinh, USB-C.
- **Độ bền:** IP68/IP69/IP69K kèm ý nghĩa, MIL-STD-810H, SGS, kính chống va đập.
- **Cấu hình và giá:** từng bản RAM/bộ nhớ, giá từng bản, ngày đặt trước và ngày bán, thị trường.
- **Riêng ra mắt VN:** giá đề nghị từng bản, ngày mở bán, kênh bán (Thế Giới Di Động, FPT Shop, CellphoneS, mi.com, cửa hàng hãng), ưu đãi đặt trước kèm thời hạn, bảo hành, đại sứ thương hiệu; bản VN khác bản quốc tế (chip, màu, bộ nhớ) khi nguồn nêu.
- So sánh đời trước bằng số liệu và nêu cả điểm **giữ nguyên/cắt giảm** khi nguồn xác nhận: "dung lượng pin như cũ", "Pixel 11 tiêu chuẩn là mẫu duy nhất không có LTPO", "sạc không dây 80W phải mua riêng".

## 5. Đặt ảnh
- Nguồn không có hoặc ít hình chính thức (nhiều bài chính sách/gọi vốn chỉ dùng cover) thì tìm ảnh nguồn khác để minh họa hợp lý. Bản đủ có 2 ảnh trở lên hoặc video; sự kiện nhiều hơn thì ảnh dư gom `[galleria]` cuối bài.
- Mỗi H2 bắt buộc có ít nhất 1 ảnh, trước đoạn văn nó minh họa. Không lấy cover làm ảnh trong bài.
- Số ảnh: bản thông số 5–15 (kèm video hãng), sự kiện VN 10–120 với nhiều `[galleria]`, bản ngắn 4–9.
- Ảnh đầu: ngay sau đoạn mở (bài VN thường sau đoạn 1, bài toàn cầu sau đoạn 1–3). Bài có H2 thì ảnh ngay dưới H2 hoặc sau câu dẫn đầu mục.
- Ảnh nằm cạnh đoạn nói về nó: thiết kế → màu → màn hình → chip/slide hiệu năng → camera và ảnh chụp mẫu → phần mềm → giá.
- Nhiều ảnh cùng ý (màu, góc máy, ảnh chụp mẫu, sự kiện) gom `[galleria]…[/galleria]`. So sánh hai đời dùng `[compare]` khi có hai ảnh cùng góc.
- Ảnh sự kiện VN có chú thích ngắn `[I]…[/I]`; ảnh lấy từ báo ghi `[I]Ảnh: [nguồn][/I]`.
- Ảnh landscape, dưới 700KB, tải về thay vì chèn link ngoài.

## 6. Theo kiểu máy
- **Flagship:** chip, camera đối tác, màn hình sáng nhất, AI, cam kết cập nhật, giá tăng hay giữ so với đời trước (Pixel 11 "tăng 100 USD… do khủng hoảng giá RAM").
- **Máy gập dọc (flip):** màn hình ngoài làm được gì, định vị người trẻ, nếp gấp, bản lề, tản nhiệt, so Z Flip/Find N Flip.
- **Máy gập ngang (fold):** độ mỏng khi gập/mở, trọng lượng so với flagship thanh, màn hình ngoài rộng hơn, độ bền bản lề và UTG, đa nhiệm.
- **Gập ba:** cách gập (vào trong hay accordion), kích thước khi mở/gập, độ dày mỏng nhất, giá rất cao, thị trường bán; so đối thủ gập ba.
- **Camera phone:** đưa camera lên đầu, cảm biến, đối tác, tele tiềm vọng, phụ kiện ống kính/grip, chống rung CIPA kèm giải thích ngắn, video Log/LUT; nói rõ "số hãng công bố, chưa kiểm chứng".
- **Gaming phone:** chip, tản nhiệt, tần số quét, chế độ game, hợp tác đội eSports.
- **Siêu bền (rugged):** chuẩn IP66/68/69, MIL-STD-810H, số bài test, rơi bao nhiêu mét; viết đúng số hãng đưa, không nói "không thể vỡ".
- **Máy mỏng/nhỏ gọn:** độ dày, trọng lượng, đánh đổi pin/camera.
- **Máy ngách** (bàn phím vật lý, gimbal, màn hình rộng): giải thích ý tưởng, nhóm người dùng, một câu nhắc máy tiền thân (BlackBerry, LG VU) nếu hợp.
- **Series nhiều mẫu:** nói rõ các bản khác nhau ở chip, màn hình, camera, pin, giá.

## 7. Theo phân khúc
- **Flagship (từ khoảng 20 triệu đồng):** công nghệ mới, camera, AI; giá viết thẳng.
- **Cận cao cấp (13–20 triệu):** bản rút gọn từ flagship, thừa hưởng gì, cắt gì (Xiaomi T, Reno).
- **Tầm trung (7–13 triệu):** thiết kế, màn hình AMOLED, pin lớn, sạc nhanh, độ bền, AI phổ thông; đối thủ cùng tầm một câu ("đối thủ của Redmi Note 15 Series, Galaxy A56 5G…").
- **Giá rẻ (dưới 7 triệu):** giá và ưu đãi lên đầu, pin, màn hình, độ bền; nêu điểm cắt giảm (Helio, Unisoc, IPS, sạc chậm).

## 8. Theo thị trường
- **Trung Quốc:** giá gốc NDT/tệ từng bản. Quy đổi chỉ khi nguồn đã quy đổi hoặc ghi rõ "khoảng X triệu đồng, giá quy đổi chưa thuế". Câu cuối về kế hoạch quốc tế/VN ("chưa công bố", "Mỹ gần như chắc chắn không có").
- **Toàn cầu/Mỹ:** giá USD (hoặc tiền nơi ra mắt, như SGD), ngày đặt trước, lên kệ, thị trường; "chưa có thông tin về Việt Nam" khi đúng vậy.
- **Về VN:** nơi sự kiện, bao lâu sau ra mắt quốc tế, giá đề nghị ("khi mua thực tế có thể tốt hơn nhờ khuyến mãi"), kênh bán, ưu đãi, bản VN khác gì.

## 9. Theo hãng
- **Apple:** so đời trước (16e → 17e), chip A, modem C, nút mới, Apple Intelligence, giá USD rồi giá VN khi Apple công bố; nêu máy bị khai tử.
- **Samsung:** Unpacked, Snapdragon "for Galaxy" hay Exynos theo bản, Galaxy AI, 7 năm cập nhật, giá đề nghị Samsung Vina và ưu đãi mở bán.
- **Google:** Tensor, Gemini, số năm cập nhật OS, camera AI, giá USD; không bán chính hãng tại VN.
- **Xiaomi/REDMI/POCO:** Leica, HyperOS, Xiaomi ưu ái VN (ra mắt gần như cùng lúc quốc tế), gom AIoT/Mijia; chuẩn độ bền REDMI Titan.
- **HONOR:** MagicOS, YOYO, pin silicon-carbon lớn, độ bền, hợp tác máy quay (ARRI).
- **Huawei:** Kirin, HarmonyOS, camera RYYB/khẩu độ thay đổi, giá tệ, hạn chế ở Mỹ.
- **vivo:** ZEISS, cảm biến LYTIA, phụ kiện tele, OriginOS/Funtouch, dòng V cho người trẻ.
- **OPPO/OnePlus:** dòng Reno (thiết kế, AI, concert), A (bền, pin), Find (gập, camera Hasselblad), SuperVOOC, ColorOS.
- **ZTE/Nubia, hãng nhỏ:** viết gọn thông cáo, bỏ câu PR, giữ giá và kênh bán.

## 10. Văn phong
- **Xưng hô:** khách quan là chính. "Mình" 0–3 lần cho nhận xét nhẹ hoặc trải nghiệm thật tại sự kiện ("cảm giác cầm máy tại sự kiện mình thấy chắc chắn"); không viết như đã dùng lâu. "Anh em" ở câu dẫn ("Mời anh em xem thêm", "anh em kéo xuống cuối bài nhé") và câu hỏi cuối. Không "tôi", "các bạn", "quý độc giả"; "bạn" trong thông cáo đổi thành "người dùng".
- **Mở bài pnghuy:** "Hôm qua [ngày], [Hãng] Việt Nam chính thức ra mắt…", "Như vậy [Tên] đã chính thức ra mắt…", "Rất nhanh ngay sau khi ra mắt tại thị trường quốc tế thì…", "[Hãng] vừa giới thiệu…", "Đúng như những hình ảnh rò rỉ…".
- **Câu nối:** "Về thiết kế,", "Bên trong,", "Về pin,", "Cụ thể,", "Bên cạnh đó,", "Điểm nhấn nằm ở…", "Chi tiết gây bất ngờ hơn là…". Ghi nguồn số liệu: "theo HONOR", "Google cho biết".
- **Bình luận nhẹ, có căn cứ** (tối đa 2 câu/bài): "(hào phóng đó Apple)", "nước đi khá khôn của vivo".
- **Tránh:** "siêu phẩm", "đỉnh cao", "vô cùng", "đẳng cấp", câu PR ("hứa hẹn khẳng định vị thế"), dấu chấm than, emoji, ký hiệu trích dẫn sót như `[23]`. "Siêu bền", "pin siêu trâu" chỉ dùng khi hãng dùng và chỉ một lần.
- **Giữ tiếng Anh:** SoC, chip, CPU, GPU, NPU, RAM, LTPO, OLED, AMOLED, PWM, OIS, zoom, tele, Log, LUT, AI, Wi-Fi 7, Bluetooth, eSIM, USB-C, Qi2, MagSafe, flagship, series. Viết "tần số quét", "đặt trước" thay refresh rate, pre-order.
- **Viết tiếng Việt:** điện thoại gập, gập ba, màn hình ngoài/trong, bản lề, mặt lưng, khung viền, cụm camera, camera góc siêu rộng, camera tiềm vọng, sạc không dây, kháng nước kháng bụi, đời trước/thế hệ tiền nhiệm (không lặp quá 2 lần).
- **Định dạng số** (bài mẫu lẫn lộn, skill chốt một kiểu): `6,8 inch`, `10.000 nit`, `5.000mAh`, `100W`, `8,9mm`, `215g`, `4K 60fps`. Giá: `599 USD`, `1.099 USD`, `6.499 NDT` (hoặc "tệ", giữ một kiểu), VN trong thân bài `25.990.000 đồng`, trong tít `25,99 triệu đồng`. Không `$499`, `9,490,000đ`, `VNĐ`, `11.99 triệu`. Mỗi bài một kiểu tiền chính, quy đổi để trong ngoặc.
- **Câu khép:** giá + ngày bán + nơi bán, hoặc kế hoạch về VN; tuỳ chọn một câu hỏi cho anh em. Không đoạn "Kết" riêng.

## 11. Tự kiểm tra trước khi giao
- [ ] Tít đúng công thức, 60–100 ký tự, giá khớp hãng và đúng định dạng, không dấu treo.
- [ ] Cover đúng ưu tiên, khung ngang, dưới 700KB, khác ảnh đầu thân bài.
- [ ] Mở bài có hãng, tên, nơi/ngày ra mắt, định vị, điểm nâng cấp. Ảnh cạnh đoạn tương ứng, mỗi H2 có ảnh.
- [ ] Đủ SoC, màn hình, camera, pin/sạc, thiết kế, trọng lượng/độ dày, OS/AI, kết nối, IP, màu, cấu hình/giá, ngày bán; bài VN có giá đề nghị, kênh bán, ưu đãi.
- [ ] Không bịa thông số, giá; không tự quy đổi tiền; một kiểu tiền, một kiểu số thập phân.
- [ ] H2 trơn, không `[B]`, không rỗng, H2 giá là cuối nếu có, không mục "Kết".
- [ ] Khách quan, "mình" ≤3, không "tôi", "các bạn", không từ trong danh sách tránh.
- [ ] Chỉ BBCode XenForo (`[H2]`, `[H3]`, `[B]`, `[I]`, `[LIST]`, `[URL]`, `[galleria]`, `[compare]`, `[MEDIA]`, `[preview]`), không Markdown, không `[HEADING]`. 100% tiếng Việt, giữ thuật ngữ Anh thông dụng.
- [ ] Có dòng nguồn cuối bài: `Theo: [URL='link'][B]Tên nguồn[/B][/URL]` (nhiều nguồn cách nhau dấu phẩy, ưu tiên trang hãng; bài sự kiện VN ghi trang hãng tại VN).

## 11. Đầu ra
1. Sử dụng mcp tinhte tạo bài viết trên forum 767
2. Trả kết quả là link tinhte.vn, không trả bài viết
