---
name: template-ra-mat-linh-kien-pc-khoa-dinh
description: Viết tin "ra mắt linh kiện PC" cho tinhte.vn theo văn phong Khoa Đinh (bk9sw) — CPU, GPU, mainboard, RAM, SSD, PSU, case, tản nhiệt, tin tiến trình/foundry — từ link hoặc chủ đề; gọi bằng /template-ra-mat-linh-kien-pc-khoa-dinh.
---

# Template tin ra mắt linh kiện PC — giọng Khoa Đinh (tinhte.vn)

Biến link nguồn (thông cáo hãng, Wccftech/Tom's Hardware, keynote, tin foundry) thành bài BBCode đúng giọng Khoa Đinh (bk9sw) trên tinhte.vn.

## Khi nào dùng
- Lệnh `/template-ra-mat-linh-kien-pc-khoa-dinh <link hoặc chủ đề>`.
- Linh kiện vừa công bố chính thức: CPU/SoC, GPU/card, bo mạch chủ/chipset, RAM/chuẩn bộ nhớ, SSD, nguồn, case, tản nhiệt; SKU mới (K/non-K/KS, refresh); công bố tại triển lãm; chuẩn mới (CAMM, 12V-2x6); tin công bố tiến trình, máy quang khắc, giá wafer, công cụ sản xuất chip (cùng chuyên mục "chip - bán dẫn - phần cứng PC").
- File format 30 bài là hỗn hợp. Chỉ học bố cục từ nhóm công bố/ra mắt: Raptor Lake, 13900KS, Alder Lake-H/P/U, Alder Lake non-K + chipset 600, 5800X3D, CAMM, AirJet, concept bo ASUS, PSU MSI. Không dùng template này cho các thể loại khác trong file: hỏi-đáp/phân tích ("8 GB RAM có còn đủ?"), so sánh benchmark đơn thuần, trên tay/đánh giá/ráp máy, hướng dẫn firmware, tin sự cố, phóng sự (buôn lậu CPU), ra mắt laptop/máy trạm (Precision, ZBook, Blade — dùng `/template-ra-mat-laptop-moi` hoặc `/viet-tin`). Tin đồn/rò rỉ: báo lại, không viết như đã chốt.

## Quy trình
1. Đọc hết nguồn trong `{input}`. Mở thêm trang sản phẩm, thông cáo hoặc slide chính thức để đối chiếu thông số, giá, ngày bán. Báo và hãng lệch thì lấy theo hãng.
2. Kiểm tra chéo ít nhất một nguồn khác nếu tin quan trọng.
3. Xác định: (a) toàn cầu, triển lãm hay tin ngành, (b) loại (mục 7), (c) hãng (mục 6), (d) phân khúc (mục 8), (e) một SKU, cả dòng hay bài giải thích công nghệ — rồi chọn bản ở mục 3.
4. Lấy đủ dữ liệu mục 4. Thiếu thì bỏ hoặc ghi "chưa công bố"/"chưa rõ"; không suy diễn, không bịa thông số, benchmark hay giá.
5. Viết bài.
6. Tải hình trong các nguồn tham khảo để minh hoạ cho nội dung bài.
7. Hình tải về lưu tại /Users/khang/AI/tinhte-uploads
8. Chọn cover, viết tiêu đề và thân bài theo khung dưới, rồi chạy mục 10. Ưu tiên cover khác ảnh đầu thân bài khi nguồn có nhiều hình.
9. Đặt hình vào bài bằng mcp tinhte, ở các vị trí hợp lý.
10. Tự rà: đúng số liệu, tên mã, SKU, chính tả. Không bắt chước lỗi gõ trong bài mẫu.
11. Sử dụng mcp tinhte tạo bài viết trên forum 767
12. Trả kết quả là link tinhte.vn, không trả bài viết
13. Gửi kết quả link tinhte.vn cho @mauscheck và gọi skill /mauscheck bằng `coordinate_bots` tới mauscheck với `thread: "new"` (mỗi lần kiểm tra mở một thread mới)

## 1. Tiêu đề
Bài mẫu gần như không dùng dấu hai chấm (1/30 bài format, dạng "Tin buồn: …"). Không ép công thức `[Hãng] ra mắt [tên]: [điểm]` của skill pnghuy.

Công thức hay gặp:
`[Hãng] chính thức ra mắt [tên], [điểm nhấn 1], [điểm nhấn 2]`
`[Hãng] ra mắt [tên] - [định vị], [cấu hình]`
`[Hãng] tiếp tục giới thiệu [SKU], [điểm nhấn]`
- Đưa số dễ hiểu vào tít, viết kiểu Việt: `24 nhân`, `5,8 GHz`, `6 GHz`. Ví dụ: `Intel chính thức ra mắt Raptor Lake, có đến 24 nhân, 5,8 GHz, hiệu năng cải thiện ở mức 2 con số`.
- Sự kiện: hashtag `#CES22`/`#CES26` dính đầu tít. Ví dụ: `#CES22 Intel ra mắt các vi xử lý thế hệ 12 dòng non-K cùng chipset H670, B660 và H610`; `#CES22 Tất cả về dòng vi xử lý Alder Lake cho laptop, Core i3 có đến 10 nhân!`.
- Một tính năng: `MSI ra mắt PSU có tính năng chống cháy card dùng kết nối 16-pin 12V-2x6`.
- Tin foundry: câu khẳng định hoặc có chủ ngữ nguồn (`Reuters: …`, `Báo Trung Quốc khẳng định …`, `Tin buồn: TSMC thông báo tăng giá …`). Dấu `!` chỉ khi tin thật sự bất ngờ. Tít câu hỏi dành cho bài mở/phân tích, không dùng khi tin ra mắt đã chốt.
- Động từ: "ra mắt", "chính thức ra mắt", "giới thiệu", "công bố". "Đội xanh"/"đội đỏ" dùng trong thân, hạn chế nhồi vào tít.
- Dài khoảng 70–110 ký tự. Không phẩy treo, không tít mơ hồ.

## 2. Ảnh cover
- Cover là thumbnail riêng. Tỉ lệ phổ biến ~1,62 (2048×1268) hoặc 16:9 (1920×1080, 1362×765); cũng gặp 3:2. Dưới 700KB, jpg/png/webp. Ảnh vuông hoặc 4:3 cắt về 16:9, 3:2 hoặc ~1,62.
- Ưu tiên: (1) slide/key visual chính thức có tên dòng hoặc chip; (2) ảnh sản phẩm chính thức (hộp/die CPU, card, bo, RAM, SSD, PSU) nền sạch; (3) tin foundry: nhà máy, wafer, máy quang khắc; (4) concept/triển lãm: ảnh thấy rõ hãng và ý tưởng.
- Không dùng watermark, render tin đồn, slide dày chữ.
- Một số bài mẫu dùng ảnh cùng kích thước cho cover và ảnh đầu bài. Khi nguồn có nhiều hình, chọn cover khác ảnh đầu (slide tổng vs bảng SKU, hoặc góc khác).

## 3. Bố cục và các mục H2
Khác skill pnghuy: bài ra mắt của Khoa Đinh phần lớn không có H2 (28/30 bài format, gồm cả 3 bài ra mắt cả dòng CPU). Chỉ bài giải thích công nghệ (CAMM, 3D V-Cache) và một ít bài điều tra dài ở file 200 bài mới dùng H2. Không thêm H2 cho đủ.

**Bản ngắn (300–750 từ):** một SKU, một sản phẩm, một tính năng hoặc tin ngành. Mở 1–2 đoạn (sự kiện/bối cảnh + tên + điểm nhấn) → cặp ảnh + đoạn → giá, ngày bán hoặc "chưa công bố" → dòng nguồn. Không H2. Ví dụ: Core i9-13900KS; PSU MSI GPU Safeguard+.

**Bản đầy đủ dòng/thế hệ (1.200–1.800 từ):** vẫn thường không H2. Mở: nơi/sự kiện, tên mã, nối đời trước, nhóm nào ra trước. Rồi lần lượt từng ý bằng cặp ảnh slide + đoạn: kiến trúc nhân, xung, số nhân/SKU, cache, TDP (PL1/PL2), bộ nhớ, socket/chipset (có cần đổi bo không), hiệu năng hãng công bố (kèm cấu hình test), giá. Ví dụ: Raptor Lake-S; Alder Lake-H/P/U; Alder Lake non-K + H670/B660/H610 + tản Laminar.

**Bản giải thích công nghệ (kèm ra mắt, 1.200–1.600 từ):** 2–4 `[H2]` đặt tên cụ thể hoặc câu hỏi: "3D V-Cache cơ bản là gì?", "Tại sao chỉ có Ryzen 7 5800X3D", "Ưu điểm của CAMM so với SO-DIMM". Ảnh ngay dưới H2, trước đoạn minh họa. Khép bằng giá, ý nghĩa thử nghiệm hoặc hướng thế hệ sau. Không H2 "Kết".

Đặt tên H2: đưa tên công nghệ, SKU hoặc câu hỏi vào. `[H2]Tiêu đề[/H2]` trơn, không lồng `[B]`, không đánh số, không H2 rỗng, không `[HEADING]`.

## 4. Nội dung bắt buộc
Luôn có (thiếu thì ghi "chưa công bố"/"chưa rõ" hoặc bỏ):
- Hãng, tên/SKU đúng cách viết hãng, tên mã, ngày hoặc sự kiện công bố.
- Định vị: cho ai, thế hệ nào thay, dòng nào ra trước.
- Thông số cốt lõi theo loại (mục 7), so đời trước hoặc bản chuẩn bằng số (`thêm 8 nhân E`, `L2 1,25 MB lên 2 MB`, `DDR5-4800 lên 5200/5600`).
- Tương thích: socket, chipset, RAM, PCIe, có phải đổi bo/BIOS không.
- Giá từng SKU nếu có, ngày lên kệ, kênh (box, OEM). Chưa có thì ghi chưa công bố. Số rò rỉ phải nói "Thông tin rò rỉ trước đó cho biết". Hiệu năng luôn ghi "Intel cho biết"/"theo AMD"/"đến từ nguồn phía thứ 3", nêu bài test, đối thủ, cấu hình (card, RAM, TGP).

Có thì đưa: TDP/PL1/PL2 và hệ quả tản nhiệt; đánh đổi (thêm cache thì giảm xung); công nghệ kèm (XTU, Thread Director, vPro, Afterburner); bảo hành. Link bài tinhte liên quan chèn `[URL]` trong câu; mẫu gần như không dùng `[preview]`. Giá VN chỉ khi có nguồn chính thức; `589 đô (~14 triệu đồng)` là ước lượng, không phải giá niêm yết tại VN.

## 5. Đặt ảnh
- Nguồn không có hoặc ít hình chính thức (nhiều bài chính sách/gọi vốn chỉ dùng cover) thì tìm ảnh nguồn khác để minh họa hợp lý. Bản đủ có 2 ảnh trở lên hoặc video; sự kiện nhiều hơn thì ảnh dư gom `[galleria]` cuối bài.
- Mỗi H2 bắt buộc có ít nhất 1 ảnh, trước đoạn văn nó minh họa. Không lấy cover làm ảnh trong bài.
- Số ảnh: bản ngắn 2–3; bản đầy đủ 5–11; bài giải thích 7–10. Review trong file format (14–23 ảnh) không phải chuẩn tin ra mắt.
- Ảnh đầu sau đoạn mở, rồi xen ảnh–đoạn; có H2 thì ảnh ngay dưới H2. Slide SKU hoặc biểu đồ đặt sát đoạn diễn giải. Có thể chồng 2 ảnh khi so kích thước/module. Chú thích ngắn khi cần ("Bên trong một CCD Zen 3.").
- Ảnh ngoài chưa tải: `[IMG]url[/IMG]`. Video: `[MEDIA=youtube]id[/MEDIA]`. Có thể tạo sơ đồ/bảng so sánh khi nguồn không có.

## 6. Theo hãng
Có bài mẫu:
- **Intel (nhiều bài):** tên thương mại + tên mã (Raptor Lake, Alder Lake, Golden Cove/Raptor Cove, Gracemont); tiến trình Intel 7; hybrid P/E; xung, cache L2/L3, TDP PL1/PL2; iGPU Xe/UHD, Arc khi có; socket LGA1700, chipset 600/700 (H670/B660/H610); XTU, Thread Director, vPro. So đời trước và AMD bằng số hãng, nêu cấu hình test. Gọi "đội xanh" được, đừng lạm. Nhắc tản khi TDP tăng.
- **AMD (vài bài):** Ryzen/EPYC, tên mã, Zen, CCD, 3D V-Cache, AM4/AM5, TSMC/3DFabric. Giải thích đánh đổi (cache tăng, xung giảm, TDP giữ). "Đội đỏ". Nêu rõ khi hãng chỉ test game.
- **NVIDIA:** không có bài ra mắt GeForce đầy đủ. Tin mẫu có H200, RTX 50/5050, 12VHPWR/12V-2x6, DLSS, CUDA/Tensor/RT, TGP, GDDR6/GDDR7. Bài ra mắt GPU viết theo bản ngắn/đầy đủ mục 3, chỉ dùng số đã dẫn. Không gọi "chú Hoàng" trong tin ra mắt.
- **MSI (1 bài PSU):** vào bối cảnh sự cố 12V-2x6, rồi tên tính năng (GPU Safeguard+), dòng (MPG Ai TS), cách hoạt động, Afterburner, phạm vi hỗ trợ. Ngắn, khách quan, nguồn trang hãng.
- **ASUS (concept bo, tin đồn nhà máy RAM):** mô tả ý tưởng (cổng mặt sau, đi dây), đối chiếu Project Zero/Stealth, hợp tác case (Lian Li, Cooler Master, Phanteks). Chưa có bài ra mắt ROG/TUF/Prime — viết chung theo thông cáo.
- **Dell (CAMM):** "miếng RAM", JEDEC, chuẩn mở, dung lượng/tốc độ, so SO-DIMM. Không viết như độc quyền khi hãng nói chuẩn mở.
- **TSMC / Samsung foundry / SMIC / Micron:** luôn gắn nguồn ("Báo Trung Quốc khẳng định", "Theo DigiTimes", "Reuters"). Không khẳng định đột phá tiến trình nếu chỉ một tờ báo loan. Thêm bối cảnh cấm xuất khẩu, nhân tài, giá wafer khi có trong nguồn.
- **Samsung / Kioxia / Corsair / Phison (SSD–RAM):** mẫu chủ yếu là sự cố, hàng nhái, giá, bao bì — chưa có bài ra mắt thuần. Ra mắt thì viết dung lượng, chuẩn, tốc độ, DRAM/DRAMless, TBW, bảo hành theo thông cáo.

Chưa có bài mẫu ra mắt, viết chung, chỉ dùng điều hãng công bố:
- **GIGABYTE/AORUS:** theo bậc dòng hãng (AORUS/AERO/GAMING/EAGLE). Mẫu chỉ nhắc thoáng (Stealth, heatsink M.2).
- **NZXT, Noctua, Cooler Master, Lian Li, WD, Kingston, SK hynix:** đúng tên dòng, không dựng giọng riêng.

## 7. Theo loại linh kiện
- **CPU/SoC (nhiều bài):** tên mã, tiến trình, nhân/luồng (P/E), xung base/boost, cache L2/L3, TDP/PL1/PL2, iGPU, NPU nếu có, socket/chipset, RAM, làn PCIe, giá từng SKU. Nhiều SKU kể theo bậc i9/i7/i5/i3 hoặc H/P/U, không nhất thiết tách H2.
- **GPU/card:** chưa có bài ra mắt GeForce/Radeon đầy đủ. Viết chung: GPU gốc, tiến trình, VRAM (loại, bus, dung lượng — ví dụ 5050 laptop GDDR7 / desktop GDDR6), PCIe, TGP, tản, kích thước, DLSS/FSR, bản AIB. Chỉ số đã dẫn.
- **Mainboard/chipset (chipset 600, concept ASUS):** chipset, lane DMI/PCIe, khe RAM và OC RAM, M.2/SATA, USB (3.2 Gen2x2), có OC CPU không, bố cục I/O, form. Bo bán lẻ cụ thể: thêm cấp điện, lớp PCB, thẩm mỹ — chưa có mẫu.
- **RAM/bộ nhớ (CAMM, RAM hàn, Corsair):** chuẩn (DDR5, SO-DIMM, CAMM, LPDDR), dung lượng, MT/s hoặc MHz như nguồn, kênh, JEDEC, nâng cấp được hay hàn trên bo.
- **SSD:** chưa có bài ra mắt thuần. Viết chung: PCIe Gen/NVMe, tốc độ, dung lượng, controller, DRAM/DRAMless, TBW, tản, firmware, bảo hành.
- **Nguồn (có bài MSI):** công suất, dòng, chuẩn ATX/PCIe 5.x, đầu 12V-2x6, tính năng bảo vệ, phần mềm, card hỗ trợ.
- **Case: chưa có bài mẫu.** Form, bo hỗ trợ, quạt/rad, chiều dài GPU, kính/mesh — chỉ số hãng.
- **Tản nhiệt:** có tản stock Intel Laminar (RH1/RM1/RS1) và tin AirJet; đế tản Razer trong mẫu là bài đánh giá, không lấy làm khuôn ra mắt. Viết khí/AIO, TDP, socket, rad, độ ồn khi có số.
- **Tin tiến trình/foundry/công cụ (nhiều bài format):** tiến trình (7nm, 14A), máy quang khắc, giá sản xuất, lệnh cấm, nhân sự. Giọng tin ngành, dẫn nguồn chặt; không viết như bài ra mắt sản phẩm bán lẻ.

## 8. Theo phân khúc
- **Phổ thông/non-K/i3/"quốc dân":** giá tiếp cận, đại đa số, văn phòng/học sinh; nói rõ phần cắt (không nhân E, không OC, ít EU). Ví dụ 12400F dưới 200 USD.
- **Tầm trung:** so đời trước và đối thủ; nêu khác biệt SKU (12600 non-K khác 12600K).
- **Cao cấp/flagship/K/KS:** xung, nhân, cache, OC; KS là die tốt, số lượng giới hạn. Nhắc TDP và tản.
- **Gaming:** 1080p khi hãng có số; đưa đúng đối thủ gaming (5800X3D), không chỉ flagship đa nhân.
- **Laptop H/P/U:** cửa sổ TDP (H 35–65 W, P ~28–64 W, U 15–55 W hoặc 9–29 W); máy dày gaming khác Ultrabook; vPro khi có.
- **Máy trạm:** mẫu là máy nguyên chiếc (Precision) — không dùng template này cho cả máy. Linh kiện workstation: vPro, ECC/RDIMM, làn PCIe, GPU chuyên nghiệp khi nguồn nói.
- **Máy chủ/AI/foundry:** giọng thông tin, lệnh cấm, năng lực sản xuất; không giọng "anh em build máy".

## 9. Văn phong
- **Xưng hô:** tin thông cáo/báo nước ngoài viết khách quan (PSU MSI, 13900KS, hầu hết tin ngành: không "mình"/"anh em"). Bài sự kiện người viết có mặt, hoặc một câu nhận định kỹ thuật, được dùng "mình" vừa phải. "Anh em" rất thưa trong tin ra mắt, chủ yếu ở lời khuyên phần cứng. Không "tôi" (trừ trích dẫn), không "các bạn", không "quý độc giả". "Bạn" chỉ khi giải thích generic.
- **Câu:** đoạn 2–5 câu một ý, nhiều thông số liền nhau, có câu chuyển ("Nhìn qua thì… nhưng thực tế", "Điều thú vị là", "Trước mắt", "Song song với", "Tuy nhiên"). Mở bài thường vào sự kiện hoặc bối cảnh, không cứng "[Hãng] vừa chính thức ra mắt" như skill pnghuy. Ghi nguồn: "Intel cho biết", "AMD giải thích rằng", "Hãng nêu chi tiết", "đến từ một nguồn phía thứ 3".
- **Nên dùng:** "vi xử lý", "tên mã", "nhân P/nhân E", "bộ đệm", "xung nhịp", "tiến trình", "bo mạch chủ", "card đồ họa", "ép xung"/"OC", "lên kệ", "flagship", "đội xanh/đội đỏ", "chưa rõ", "không loại trừ khả năng".
- **Tránh:** "siêu phẩm", "đỉnh của chóp", PR rỗng, chấm than trong thân, emoji, viết như đã dùng thử khi chỉ có thông cáo.
- **Giữ tiếng Anh:** CPU, GPU, NPU, iGPU, SoC, P-core/E-core, TDP, PL1, PL2, boost, cache, die, CCD, IHS, TSV, socket, chipset, PCB, VRM, PCIe, M.2, NVMe, DDR5, SO-DIMM, CAMM, JEDEC, MT/s, SKU, BIOS, MSRP, OEM, vPro, DLSS, CUDA, TGP, 12V-2x6, 12VHPWR, Afterburner, XTU.
- **Viết tiếng Việt:** vi xử lý, card đồ họa, bo mạch chủ, bộ đệm, nhân, luồng, xung nhịp, tản nhiệt, cấp điện, ép xung, khe cắm, băng thông, tiến trình, máy trạm, lên kệ.
- **Định dạng số (theo mẫu, khác skill pnghuy):**
  - Thông số: phẩy thập phân, có khoảng trắng trước đơn vị: `5,8 GHz`, `3,8 GHz`, `9,5%`, `1,47 kg`, `18,8 mm`, `6,6 TFLOPS`, `125 W`, `16 GB`, `8 GB RAM`, `24 nhân`, `30 MB`.
  - Điểm benchmark lớn: chấm `982.5 điểm`, `18453.4 điểm`.
  - Dải số: `15 - 20%`, `4,3 - 4,4 GHz`, `từ 200 đến 400 MHz`.
  - Tiền: mẫu lẫn `589 đô (~14 triệu đồng)`, `167 USD`, `399 USD`, `7 tỷ đô`. Không `$`, không `VNĐ`. Một bài chọn một kiểu (`đô` hoặc `USD`) và giữ đến cuối. "đồng" cho giá Việt. Không tự đổi thành giá niêm yết tại VN.
- **Câu khép:** giá và ngày bán, tương thích nền tảng, hoặc một câu định vị (thử nghiệm công nghệ, chờ chuẩn hóa, cần tản tốt). Không H2 kết.

## 10. Tự kiểm tra trước khi giao
- [ ] Tít theo mẫu Khoa Đinh (phẩy/gạch/hashtag sự kiện, số kiểu `5,8 GHz`), không ép hai chấm, không phẩy treo, không tít hỏi khi tin đã chốt.
- [ ] Cover 16:9, 3:2 hoặc ~1,62, dưới 700KB, không watermark; khác ảnh đầu bài nếu có đủ hình.
- [ ] Đủ thông số cốt lõi theo loại; so đời trước bằng số; có tương thích nền tảng.
- [ ] Đúng bản (ngắn / đầy đủ không H2 / giải thích có H2). H2 trơn, không rỗng, không "Kết".
- [ ] Hiệu năng ghi rõ theo hãng hoặc nguồn thứ 3, kèm bài test; không benchmark tự chế. Giá đúng SKU hoặc chưa công bố; tin rò rỉ phải gắn nhãn.
- [ ] Giọng khách quan với tin thông cáo; "mình" chỉ khi có căn cứ hoặc nhận định ngắn.
- [ ] Chỉ BBCode XenForo (`[H2]`, `[B]`, `[I]`, `[LIST][*]`, `[URL='…']`, `[MEDIA]`, `[IMG]`), không Markdown, không `[HEADING]`. 100% tiếng Việt, giữ thuật ngữ Anh thông dụng. Số và đơn vị theo mục 9.
- [ ] Dòng nguồn cuối bài: `Theo: [URL='link'][B]Tên nguồn[/B][/URL]` (nhiều nguồn cách nhau dấu phẩy hoặc chấm phẩy). Bài mẫu thường chỉ ghi tên nguồn hoặc `Tham khảo:`, bài sự kiện đôi khi không có dòng nguồn — skill vẫn bắt buộc `Theo:` cho đồng bộ các skill khác.

## 11. Đầu ra
1. Sử dụng mcp tinhte tạo bài viết trên forum 767
2. Trả kết quả là link tinhte.vn, không trả bài viết