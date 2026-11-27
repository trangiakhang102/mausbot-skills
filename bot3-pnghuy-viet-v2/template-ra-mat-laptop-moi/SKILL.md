---
name: template-ra-mat-laptop-moi
description: Viết tin "ra mắt laptop mới" cho tinhte.vn (phổ thông, gaming, doanh nghiệp, sáng tạo, 2-in-1, AI PC; toàn cầu hoặc tại VN) từ link hoặc chủ đề; gọi bằng /template-ra-mat-laptop-moi.
---

# Template tin ra mắt laptop mới (tinhte.vn)

Biến link nguồn (thông cáo hãng, báo nước ngoài, sự kiện CES/IFA/COMPUTEX, ra mắt tại VN) thành bài BBCode đúng giọng và bố cục tin laptop trên tinhte.vn.

## Khi nào dùng
- Lệnh `/template-ra-mat-laptop-moi <link hoặc chủ đề>`.
- Laptop vừa công bố chính thức; đời mới hoặc làm mới dòng; máy đã ra mắt toàn cầu nay về VN hoặc có giá chính thức tại VN; công bố tại triển lãm; nhiều mẫu cùng lúc; đổi thương hiệu (ví dụ XPS trở lại, Omen mang tên HyperX).
- Không dùng cho: tin đồn/rò rỉ, trên tay/trải nghiệm/review, so sánh mua máy, firmware, doanh số, linh kiện PC, máy để bàn/AIO nếu đó là chủ đề chính (AIO chỉ là mục phụ khi đi cùng dải laptop). Gặp các dạng này thì báo lại và dùng `/viet-tin`.

## Quy trình
1. Đọc hết nguồn trong `{input}`. Mở thêm trang sản phẩm hoặc thông cáo chính thức của hãng (ra mắt VN thì mở trang của hãng tại VN) để đối chiếu thông số, giá, màu, ngày bán. Nguồn báo và nguồn hãng lệch nhau thì lấy theo hãng, bỏ thông tin khác hãng.
2. Kiểm tra chéo ít nhất một nguồn khác nếu tin quan trọng.
3. Xác định: (a) công bố toàn cầu, tại triển lãm hay ra mắt/mở bán tại VN, (b) hãng và dòng máy (mục 6), (c) phân khúc (mục 7), (d) một mẫu, cả series hay chỉ làm mới, từ đó chọn bản đầy đủ, nhiều mẫu hoặc ngắn (mục 3).
4. Lấy đủ dữ liệu theo mục 4. Thiếu thì bỏ qua hoặc ghi "chưa công bố", không suy diễn, không bịa thông số hay giá.
5. Viết bài.
6. Tải hình ảnh trong các nguồn tham khảo để minh hoạ cho nội dung bài viết.
7. Hình tải về lưu tại /Users/khang/AI/tinhte-uploads
8. Chọn cover, viết tiêu đề và thân bài theo khung dưới, rồi chạy mục 10. Hình cover và hình đầu tiên trong bài không được trùng nhau.
9. Đặt hình vào bài bằng mcp tinhte, ở các vị trí hợp lý.
10. Tự rà lại: đúng số liệu, đúng tên máy và tên phiên bản, không lỗi chính tả, không còn câu tiếng Anh thừa.
11. Sử dụng mcp tinhte tạo bài vites trên forum 767
12. Trả kết quả là link tinhte.vn, không trả bài viết
13. Gửi kết quả link tinhte.vn cho @mauscheck và gọi skill /mauscheck bằng `coordinate_bots` tới mauscheck với `thread: "new"` (mỗi lần kiểm tra mở một thread mới)

## 1. Tiêu đề
Công thức chính (28/30 bài mẫu có dấu hai chấm, trung vị 87 ký tự, 8/30 có giá):
`[Hãng] ra mắt [Tên máy]: [điểm nhấn 1], [điểm nhấn 2], [giá]`
- Điểm nhấn ưu tiên: thay đổi lớn nhất (chip, màn hình mới, GPU, thiết kế mỏng/nhẹ, dễ sửa) → tính năng đáng nói (NPU, pin, cổng, RAM nâng cấp được) → giá đặt cuối nếu có.
- Dài 60–100 ký tự, 2–4 điểm nhấn. Giá viết `giá từ 1.999 USD`, `giá từ 16.5 triệu`. Không để dấu phẩy, "..." treo cuối, không hai dấu cách liền.
- Biến thể có trong mẫu:
  - Sự kiện: `CES26: [Hãng] ra mắt [tên], [điểm nhấn]`, `IFA26: [Hãng] [tên], [điểm nhấn]`, `COMPUTEX 2026: …`.
  - Làm mới cả dòng: `CES26: [Hãng] làm mới [dòng], trang bị [chip]`.
  - Nhiều mẫu: liệt kê tên, ví dụ `Lenovo ra mắt ThinkPad X1 Carbon Gen 14, ThinkPad X9-15p và ThinkCentre X`.
  - Câu chuyện thương hiệu: `Dell chính thức mang thương hiệu XPS quay trở lại, giá từ 1600 USD`.
  - Ra mắt/mở bán tại VN: `[Hãng] ra mắt/mở bán [tên] tại Việt Nam, giá từ [X] triệu đồng`.
- Động từ đúng sự kiện: "ra mắt", "giới thiệu", "làm mới", "mở bán" (đã công bố, nay bán). Không đặt tít câu hỏi khi tin đã chốt. Không viết hoa cả cụm, không "siêu phẩm".

## 2. Ảnh cover
- Cover là ảnh riêng gắn làm thumbnail, không lặp lại trong thân bài (0/30 bài mẫu dùng cover làm ảnh đầu). Ảnh ngang tỷ lệ 16:9 hoặc 3:2 (23/30), dung lượng dưới 700KB, định dạng jpg, png hoặc webp. Ảnh 4:3 hoặc vuông phải cắt về 16:9 hoặc 3:2.
- Thứ tự ưu tiên khi chọn từ nguồn:
  1. Ảnh sản phẩm chính thức, máy mở 3/4 hoặc chính diện, nằm trọn khung, thấy rõ logo và màn hình. Nền studio sạch hoặc key visual chính thức của hãng.
  2. Nhiều mẫu hoặc cả series: một ảnh xếp các máy cùng khung hoặc ảnh chủ của sự kiện.
  3. Ra mắt tại VN: ảnh sự kiện thấy rõ máy và tên máy, không lấy ảnh người phát biểu.
- Không lấy ảnh watermark shop, render tin đồn, slide thông số, ảnh booth selfie, ảnh cận chi tiết làm cover.
- Ảnh đầu thân bài là góc khác (cạnh cổng, bản lề, mặt đáy, màu khác, cận màn hình), đặt sau đoạn mở hoặc sau video.

## 3. Bố cục và các mục H2
Bản đầy đủ (800–1.400 từ; một máy flagship hoặc nguồn dày, ví dụ MacBook Pro, Framework):
1. Mở bài, không có H2: 1–2 đoạn. Câu đầu theo mẫu "[Hãng] vừa chính thức giới thiệu/ra mắt [tên máy đầy đủ], [định vị: mỏng nhẹ, gaming, doanh nghiệp…], [điểm nhấn lớn nhất]". Đoạn 2: màu, cấu hình, ngày đặt trước/lên kệ, khoảng giá nếu đã có.
2. Video giới thiệu của hãng `[MEDIA=youtube]id[/MEDIA]` nếu có.
3. Ảnh sản phẩm, rồi các `[H2]` theo điểm nhấn, xếp từ quan trọng nhất trở xuống. Thường gặp:
   - Thiết kế, độ mỏng/nhẹ, màu
   - Màn hình (tấm nền, độ phân giải, Hz, độ sáng)
   - Hiệu năng: chip, NPU, GPU, RAM, SSD
   - Pin, tản nhiệt, cổng kết nối
   - Hệ điều hành, AI, phần mềm (khi là điểm mới)
4. `[H2]Giá bán và thời điểm lên kệ[/H2]` (hoặc `Giá bán và thời gian phát hành`, `Giá bán & ngày bán`): luôn là H2 cuối khi viết một máy. Không có mục "Kết" (0/24 bài tin ra mắt).
5. Dòng nguồn: `Theo: [URL='link'][B]Tên nguồn[/B][/URL]`.

Bản nhiều mẫu (CES/IFA, cả series): mở bài liệt kê đủ tên và định vị từng dòng. Mỗi mẫu một H2 mang tên máy, có thể kèm định vị ngắn ("Galaxy Book6 Ultra: flagship mỏng, mạnh"). Giá và ngày bán để trong từng mục. Không thêm H2 "Giá bán" hay "Kết" chỉ để cho đủ.

Bản ngắn (450–700 từ, 7/24 bài tin ra mắt; một máy IFA/CES, nâng cấp nhẹ, hãng công bố mỏng): mở bài → các cặp ảnh + đoạn ("Về thiết kế,", "Về cấu hình,", "Về kết nối,") → giá và ngày bán, hoặc "Hãng hiện chưa công bố giá bán" → dòng nguồn. Không có H2. Không thêm H2 cho đủ.

Đặt tên H2: đưa con số hoặc tính năng vào tiêu đề mục. Ví dụ: "Hiệu năng từ vi xử lý M5 Pro và M5 Max", "Tính dễ sửa chữa của Framework Laptop 13 Pro", "Thời lượng pin 24 giờ và kết nối ngoại vi". Dùng `[H2]Tiêu đề[/H2]` trơn, không lồng `[B]`, không đánh số, không để ảnh trong thẻ H2, không có H2 rỗng. `[H3]` chỉ cho mục con thật cần.

## 4. Nội dung bắt buộc
Luôn có (thiếu thì bỏ qua hoặc ghi "chưa công bố"):
- Hãng, tên máy đúng cách viết của hãng, dòng máy, ngày công bố, toàn cầu/triển lãm hay tại VN.
- Vi xử lý: tên đầy đủ (Intel Core Ultra Series 3, AMD Ryzen AI Max+ 395, Apple M5 Pro, Snapdragon X2, A18 Pro), số nhân, NPU (TOPS) nếu hãng công bố. GPU tích hợp hoặc rời (RTX, VRAM). RAM: dung lượng, loại (LPDDR5X, LPCAMM2, DDR5), hàn hay nâng cấp được, tốc độ. SSD: giao tiếp, dung lượng tối thiểu–tối đa.
- Màn hình: kích thước, tấm nền (OLED, LCD, mini-LED), độ phân giải, Hz, cảm ứng, độ sáng, chuẩn màu/HDR nếu có.
- Kích thước, độ dày, trọng lượng, chất liệu vỏ, màu.
- Cổng (Thunderbolt, USB-A/C, HDMI, khe thẻ, jack, MagSafe/sạc nam châm), Wi-Fi, Bluetooth.
- Pin (Wh) và thời lượng công bố kèm điều kiện đo nếu có; sạc (công suất, thời gian 50%).
- Hệ điều hành, tính năng AI trên máy (Copilot+, Apple Intelligence, Galaxy AI).
- Thay đổi so với đời trước bằng số liệu (pin thêm 12 giờ, mỏng hơn 0,5 mm, SSD base 256GB lên 512GB).
- Giá từng cấu hình, giá giáo dục nếu có, ngày đặt trước và ngày lên kệ, thị trường nào.

Có thì đưa vào:
- Tản nhiệt, TDP/TGP, độ ồn nếu hãng công bố; webcam, loa, micro, bàn phím, touchpad haptic, vân tay.
- Khả năng sửa/nâng cấp, chuẩn quân sự, bảo mật (TPM, Pluton, Knox, Secured-core).
- Bản DIY, Ubuntu, Enterprise Edition, số lượng giới hạn.
- So sánh: chủ yếu với đời trước hoặc các bản trong dòng. Đối thủ chỉ một câu khi nguồn nêu hoặc khi định vị phân khúc.
- Giá VN chỉ khi có nguồn chính thức. Không tự quy đổi USD, EUR sang VND, không đoán giá về VN. Nguồn đã quy đổi thì ghi "khoảng X triệu đồng" và nêu nguồn.

## 5. Đặt ảnh
- Nguồn không có hoặc ít hình chính thức (nhiều bài chính sách/gọi vốn chỉ dùng cover) thì tìm ảnh nguồn khác để minh họa hợp lý. Bản đủ có 2 ảnh trở lên hoặc video; sự kiện nhiều hơn thì ảnh dư gom `[galleria]` cuối bài.
- Mỗi H2 bắt buộc có ít nhất 1 ảnh, trước đoạn văn nó minh họa. Không lấy cover làm ảnh trong bài.
- Số ảnh: bản đầy đủ 6–15 ảnh trong thân, ngắn 4–8, nhiều mẫu 1–3 ảnh mỗi H2. Không lấy cover làm ảnh trong bài.
- Ảnh đặt **trên** đoạn văn nói về nó: ảnh trước, chữ sau. Mỗi H2 có ít nhất một ảnh ngay dưới tiêu đề mục.
- Thứ tự góc gợi ý: toàn máy → màn hình/bản lề → cạnh cổng → bàn phím/touchpad → mặt đáy hoặc nâng cấp → các màu hoặc các cấu hình.
- Chú thích `[I]…[/I]` dưới ảnh chỉ khi cần (cận cổng, bảng cấu hình, `[I]Ảnh: Engadget.[/I]`).
- Video của hãng: `[MEDIA=youtube]id[/MEDIA]` sau đoạn mở. Ảnh còn lại của sự kiện có thể gom `[galleria]` cuối bài, không lặp ảnh trong thân (thường gặp ở bài trên tay, ít gặp ở tin ra mắt).
- Ảnh landscape, dưới 700KB, jpg/png/webp.
- Có thể tạo ảnh minh hoạ khi nguồn hoặc hãng không có: minh hoạ công nghệ, thông số, so sánh thông số.

## 6. Theo hãng
- **Apple:** "Apple vừa chính thức giới thiệu/ra mắt". Ghi rõ Air, Pro hay Neo; chip M/A, bộ nhớ thống nhất, MagSafe (hoặc "không có MagSafe"), Liquid Retina/PROLED XDR, nano-texture, Touch ID, macOS. Giá USD kèm giá giáo dục; giá VN chỉ khi Apple hoặc nhà bán chính thức công bố. Giọng tin khá chặt, có thể khép bằng một câu hỏi ngắn cho anh em.
- **Lenovo:** ThinkPad (doanh nhân, Aura Edition, bàn phím, độ bền, trọng lượng); Yoga (thiết kế, màu, 2-in-1); IdeaPad (phổ thông); Legion (gaming). Nhiều mẫu thì mỗi máy một H2. Concept màn cuộn phải nói rõ là concept hay đã bán.
- **ASUS:** Zenbook (mỏng nhẹ cao cấp), Vivobook (phổ thông), ExpertBook (doanh nghiệp, bảo mật, so ThinkPad/EliteBook một câu), TUF (gaming bền, gọn), ROG Zephyrus/Flow (gaming mỏng, màn Nebula, Armoury Crate), ProArt (sáng tạo, màu, GPU). CES hay dùng "làm mới dòng".
- **Dell:** XPS (mỏng nhẹ cao cấp, hoàn thiện, màn OLED/LCD). Alienware nêu bậc dòng (Core / Versatile / Flagship) và "hướng đến số đông" khi hãng nói vậy. Dòng phổ thông/sinh viên (14S…) nhấn giá và đối tượng.
- **HP:** OmniBook (tiêu dùng, các bậc 3/5/7/Ultra), EliteBook (doanh nghiệp), HyperX Omen (gaming, nói rõ đổi thương hiệu nếu có).
- **Acer:** Vero (dễ sửa, bền vững), Swift (mỏng nhẹ), Nitro và Predator (thang gaming).
- **MSI:** Prestige/Modern (văn phòng, AI+), Stealth (gaming mỏng), Crosshair/Raider (gaming hiệu năng, tản nhiệt).
- **GIGABYTE / AORUS:** tin thường ngắn, đặc thông số gaming (CPU, GPU, VRAM, tản, cổng). Giá trên Amazon hoặc cửa hàng thì nêu rõ tên nơi bán.
- **Microsoft Surface:** tách Laptop và Pro (2-in-1); PixelSense, touchpad haptic, Surface Connect, Surface Slim Pen; bản Business khác bản phổ thông. Giá nêu thẳng, không bình luận "đắt" nếu không có căn cứ trong nguồn.
- **Samsung:** Galaxy Book theo bậc Ultra / Pro / phổ thông; Galaxy AI, Knox, kết nối hệ sinh thái điện thoại/tablet Galaxy.
- **Framework:** dễ sửa, module, LPCAMM2, SSD thay được, giá tách prebuilt Windows, Ubuntu và DIY.
- **Razer** không có bài ra mắt laptop trong mẫu: viết khách quan như gaming mỏng cao cấp, giữ tên công nghệ của hãng, không dựng giọng riêng.
- Hãng nhỏ (COLORFUL…): bản ngắn, chỉ viết điều đã công bố, không phóng đại.

## 7. Theo phân khúc
- **Phổ thông, giá dễ tiếp cận:** đưa giá và cấu hình base lên sớm, nói rõ điểm cắt giảm (cổng, sạc, RAM/SSD base), hợp sinh viên hay người dùng cơ bản.
- **Tầm trung:** tỷ lệ giá trên màn hình, pin, AI dùng hằng ngày; so đời trước bằng số liệu.
- **Cao cấp, ultrabook:** độ mỏng/nhẹ, hoàn thiện, màn hình, pin, đánh đổi cổng để lấy độ mỏng.
- **Gaming:** CPU+GPU, tản nhiệt, Hz màn hình, bàn phím, vị trí trong dải (TUF/Nitro so với ROG/Predator/Raider). Viết tin ra mắt, không viết như đã chơi thử.
- **Sáng tạo, workstation:** độ phủ màu, GPU, RAM tối đa, xuất hình, máy kiểu ProArt, Yoga Pro, XPS 16, RTX Spark.
- **Doanh nghiệp:** trọng lượng, bàn phím, bảo mật, quản trị, tùy chọn Enterprise. ThinkPad, EliteBook, ExpertBook, Surface for Business.
- **AI PC, Copilot+:** NPU (TOPS), tính năng chạy trên máy; chỉ nêu tính năng hãng công bố, không hứa hiệu năng chưa có số liệu.
- **2-in-1:** bản lề, chế độ máy tính bảng, bút, cân nặng khi gập. Surface Pro, Yoga 2-in-1, Flow Z13, OmniBook Flip, X1 2-in-1.
- **Ra mắt VN:** nhà phân phối, ngày mở bán, giá đồng, ưu đãi kèm thời hạn.
- **Triển lãm, toàn cầu:** giá tiền gốc nếu có; một câu "chưa có thông tin về Việt Nam" khi đúng là chưa có.

## 8. Văn phong
- **Xưng hô:** tin ra mắt viết khách quan. "Anh em" dùng thưa (tổng hợp sự kiện, "mời anh em đọc thêm", một câu hỏi cuối). "Mình" 0–2 lần ở câu nhận định nhẹ, không xuyên suốt bài. Không dùng "tôi", "các bạn", "quý độc giả". Giọng trên tay/review (nhiều "mình", "ngon", "pin trâu") dành cho `/viet-tin`, không dùng trong skill này.
- **Câu:** 20–30 chữ, đoạn 2–4 câu một ý, mở bằng "Về thiết kế,", "Về cấu hình,", "Đáng chú ý,". Ghi nguồn bằng "theo Apple", "hãng cho biết", "theo công bố của hãng".
- **Nên dùng:** "vừa chính thức giới thiệu/ra mắt", "làm mới", "đời trước", "cấu hình", "mỏng nhẹ", "lên kệ", "đặt trước", "điểm nhấn", "đáng chú ý", "hướng đến", "chưa công bố giá bán".
- **Tránh:** "siêu phẩm", "đỉnh của chóp", "đột phá" (trừ khi hãng nói), "người tiền nhiệm" lặp lại, câu PR ("mang đến trải nghiệm hoàn hảo"), dấu chấm than, emoji, câu hỏi tu từ ở đầu bài.
- **Giữ tiếng Anh:** OLED, mini-LED, NPU, TOPS, Copilot+, Apple Intelligence, Thunderbolt, USB-C, LPCAMM2, Wi-Fi 7, Bluetooth, RTX, TGP, VRR, haptic, CNC, Gorilla Glass, DisplayHDR, 2-in-1, AI PC, DIY, Unified Memory, MagSafe, Touch ID.
- **Viết tiếng Việt:** vi xử lý, hiệu năng, tản nhiệt, thời lượng pin, bản lề, bàn rê, cổng kết nối, cảm ứng, độ sáng, tấm nền, lên kệ. Viết tắt lần đầu kèm nghĩa khi cần ("NPU, đơn vị xử lý AI").
- **Định dạng số:** tiền USD theo đa số mẫu: `1.999 USD`, `1.999,99 USD` (chấm ngăn nghìn, phẩy thập phân). Không viết `$3,499` hay `3,499 USD`. Giá VN: `16.5 triệu đồng` hoặc trong list `89.990.000 đồng`; dùng "đồng", không "đ", không "VNĐ" trừ khi nguồn quy đổi trong ngoặc. Không tự đổi tiền. Trong một bài chọn một kiểu đơn vị và giữ nhất quán: `14-inch`, `32 GB`, `75 Wh`, `120 Hz`; số thập phân của thông số chọn một kiểu (`1,4 kg` hoặc `1.4 kg`) rồi dùng suốt bài.
- **Mở bài mẫu (diễn giải):** "Apple vừa chính thức giới thiệu MacBook Air M5: vẫn mỏng nhẹ, không quạt, mạnh hơn với chip M5, bản tiêu chuẩn nâng SSD lên 512GB và có Wi-Fi 7."
- **Câu khép mẫu (diễn giải):** "Framework Laptop 13 Pro hướng đến người muốn máy 13-inch mỏng nhẹ nhưng tự nâng cấp được RAM, SSD và mainboard; giá từ 1.199 USD cho bản DIY, giao hàng dự kiến tháng 6."
- **Câu khép:** tóm 2–3 điểm đáng giá, máy hợp với ai, 1 đánh đổi nếu có. Không viết như đã cầm máy, trừ khi input nói rõ người viết có mặt tại sự kiện.

## 10. Tự kiểm tra trước khi giao
- [ ] Tít theo công thức, 60–100 ký tự, giá đúng kiểu, không dấu phẩy treo, không hai dấu cách liền.
- [ ] Cover đúng thứ tự ưu tiên, 16:9 hoặc 3:2, dưới 700KB, khác ảnh đầu trong thân bài, không watermark.
- [ ] Mở bài đủ hãng, tên máy, định vị, điểm nhấn, ngày bán hoặc khoảng giá nếu có.
- [ ] Đủ mục bắt buộc hoặc đã ghi "chưa công bố"; có so sánh đời trước bằng số liệu.
- [ ] Đúng bản (đầy đủ, nhiều mẫu, ngắn). H2 trơn, không rỗng; nếu có H2 giá thì đó là H2 cuối; không mục "Kết".
- [ ] Ảnh trên đoạn tương ứng, mỗi H2 có ảnh, không lặp cover.
- [ ] Giá từng cấu hình, ngày đặt trước/lên kệ, thị trường. Giá VN có nguồn chính thức hoặc ghi chưa có. Không giá đoán, không tự quy đổi tiền.
- [ ] Pin và NPU có ghi điều kiện/con số hãng công bố, không hứa hiệu năng không có trong nguồn.
- [ ] Viết khách quan, "mình" không quá 2 lần, "anh em" dùng thưa, không có từ trong danh sách tránh.
- [ ] Chỉ BBCode XenForo (`[H2]`, `[H3]`, `[B]`, `[I]`, `[LIST]`, `[URL]`, `[galleria]`, `[MEDIA]`), không Markdown, không `[HEADING]`. 100% tiếng Việt, giữ thuật ngữ Anh thông dụng.
- [ ] Đã đối chiếu thông số với trang chính thức của hãng. Có dòng `Theo:`.

## 11. Đầu ra
1. Sử dụng mcp tinhte tạo bài viết trên forum 767
2. Trả kết quả là link tinhte.vn, không trả bài viết
