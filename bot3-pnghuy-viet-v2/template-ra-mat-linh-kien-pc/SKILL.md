---
name: template-ra-mat-linh-kien-pc
description: Viết tin "ra mắt linh kiện PC" cho tinhte.vn (CPU/SoC, GPU, mainboard, RAM/bộ nhớ, SSD/lưu trữ, nguồn, case, tản nhiệt; phổ thông đến workstation/máy chủ; toàn cầu, triển lãm hoặc tại VN) từ link hoặc chủ đề; gọi bằng /template-ra-mat-linh-kien-pc.
---

# Template tin ra mắt linh kiện PC (tinhte.vn)

Biến link nguồn (thông cáo hãng, Wccftech/TechPowerUp, keynote, ra mắt tại VN) thành bài BBCode đúng giọng và bố cục tin linh kiện trên tinhte.vn.

## Khi nào dùng
- Lệnh `/template-ra-mat-linh-kien-pc <link hoặc chủ đề>`.
- Linh kiện vừa công bố chính thức; đời mới hoặc bản refresh; biến thể màu/phiên bản (bản trắng "W", bản SFF, bản DUO); công bố tại triển lãm/keynote; ra mắt tại VN; chuẩn hoặc công nghệ bộ nhớ mới (HUDIMM, SOCAMM2, HBM).
- Không dùng cho: tin đồn/rò rỉ, trên tay, review, thử nghiệm hiệu năng, giá RAM/thị trường, laptop (dùng `/template-ra-mat-laptop-moi`). Gặp các dạng này thì báo lại và dùng `/viet-tin`.

## Quy trình
1. Đọc hết nguồn trong `{input}`. Mở thêm trang sản phẩm, thông cáo hoặc slide chính thức của hãng để đối chiếu thông số, giá, ngày bán. Báo và hãng lệch nhau thì lấy theo hãng.
2. Kiểm tra chéo ít nhất một nguồn khác nếu tin quan trọng.
3. Xác định: (a) toàn cầu, triển lãm hay tại VN, (b) loại linh kiện (mục 7), (c) hãng (mục 6), (d) phân khúc (mục 8), (e) một sản phẩm, cả dòng hay nhiều sản phẩm trong một sự kiện, từ đó chọn bản ngắn, đầy đủ hoặc tổng hợp (mục 3).
4. Lấy đủ dữ liệu theo mục 4. Thiếu thì bỏ qua hoặc ghi "chưa công bố"; không suy diễn, không bịa thông số, điểm benchmark hay giá.
5. Viết bài.
6. Tải hình trong các nguồn tham khảo để minh hoạ cho nội dung bài.
7. Hình tải về lưu tại /Users/khang/AI/tinhte-uploads
8. Chọn cover, viết tiêu đề và thân bài theo khung dưới, rồi chạy mục 10. Cover và hình đầu tiên trong bài không được trùng nhau.
9. Đặt hình vào bài bằng mcp tinhte, ở các vị trí hợp lý.
10. Tự rà: đúng số liệu, tên mã, SKU, chính tả.
11. Sử dụng mcp tinhte tạo bài viết trên forum 767
12. Trả kết quả là link tinhte.vn, không trả bài viết
13. Gửi kết quả link tinhte.vn cho @mauscheck và gọi skill /mauscheck

## 1. Tiêu đề
Công thức chính (19/24 bài mẫu có dấu hai chấm, phần lớn 70–110 ký tự):
`[Hãng] ra mắt [loại linh kiện] [Tên sản phẩm]: [điểm nhấn 1], [điểm nhấn 2]`
- Nói rõ loại linh kiện trong tít khi tên chưa tự nói: "mainboard", "card đồ họa", "module LPDRAM", "chuẩn RAM", "ổ NVMe". Ví dụ: `COLORFUL ra mắt mainboard iGame X870E VULCAN W OC: Thiết kế trắng ánh kim, tích hợp màn hình LCD`.
- Tên mã đặt trong ngoặc kép sau tên thương mại: `Intel Core Ultra 200S Plus "Arrow Lake-Refresh" ra mắt: thêm nhân E, hiệu quả hơn, giá rất hấp dẫn`.
- Điểm nhấn ưu tiên: thông số dễ hiểu nhất (192GB RAM, 256GB, 6nm, Wi-Fi 7, 128 làn PCIe 5.0) → đối tượng (cho workstation, cho AI data center, cho máy chơi game cầm tay) → mức hiệu năng so sánh khi hãng công bố ("tiệm cận RTX 4060") → giá nếu là điểm nhấn.
- Biến thể có trong mẫu:
  - Sự kiện: `CES26: [Hãng] [tên]: [điểm nhấn]`, `COMPUTEX 2026: [Hãng] [tên] ra mắt…`, `[COMPUTEX 2026] Đi coi [Hãng] trình diễn…` (bài đi booth), `AMD Advancing AI: …`.
  - Tên sản phẩm đứng đầu: `AMD Ryzen AI MAX 400 ra mắt: hỗ trợ tối đa 192GB RAM…`.
  - Kèm ngày bán: `GPU Trung Quốc Lisuan 7G100 6nm ra mắt 20/5, đạt chứng nhận WHQL…`.
  - Tại VN: `[Tên] chính thức ra mắt tại Việt Nam`.
  - Công nghệ/chuẩn/nguyên mẫu: `[Hãng] giới thiệu chuẩn RAM HUDIMM để kéo giá DDR5 xuống`, `[Hãng] trình làng nguyên mẫu…`.
- Động từ: "ra mắt", "giới thiệu", "trình làng", "công bố". Tên hãng viết như mẫu (COLORFUL, ASUS, AMD, NVIDIA). Không tít câu hỏi khi tin đã chốt, không dấu phẩy treo.

## 2. Ảnh cover
- Cover là ảnh riêng gắn làm thumbnail, không lặp lại trong thân bài (24/24 bài mẫu). Phần lớn ngang 16:9 (2048×1152, 1920×1080, 2560×1440, 1280×720); ảnh tự chụp 3:2; vài key visual 2:1. Dưới 700KB, jpg/png/webp. Ảnh vuông hoặc 4:3 phải cắt về 16:9 hoặc 3:2.
- Ưu tiên:
  1. Key visual (KV) chính thức của hãng có sản phẩm và tên dòng: hay dùng cho mainboard, card đồ họa COLORFUL.
  2. Ảnh sản phẩm chính thức nằm trọn khung: con chip/box CPU, card nhìn 3/4 thấy quạt và tên, mainboard nhìn chính diện, thanh RAM/SSD trên nền sạch.
  3. Ảnh dựng "cover-…" từ slide/ảnh hãng: chip + tên thế hệ (Panther Lake, Xeon 600, Ryzen AI Max 400).
  4. Triển lãm/keynote: ảnh tự chụp sân khấu hoặc booth thấy rõ tên hãng và sản phẩm.
- Không dùng ảnh watermark, render tin đồn, slide dày chữ.
- Ảnh đầu thân bài là góc khác (slide, bảng SKU), đặt sau đoạn mở.

## 3. Bố cục và các mục H2
**Bản ngắn (400–750 từ, 12/24 bài mẫu, dạng phổ biến nhất):** một sản phẩm, một dòng hoặc một chuẩn; hãng công bố gọn (mainboard COLORFUL, card đồ họa đối tác, RAM/SSD, máy chủ). Mở bài → các cặp ảnh + đoạn theo ý ("Về thiết kế,", "Về cấp điện,", "Về bộ nhớ,", "Ở phía CPU và GPU,") → đoạn giá và ngày bán hoặc "chưa công bố giá bán và thời điểm lên kệ" → `[preview]` bài liên quan nếu có → dòng nguồn. Không có H2, không thêm H2 cho đủ.

**Bản đầy đủ (650–2.000 từ):** CPU/GPU thế hệ mới, nền tảng lớn, nguồn có nhiều slide.
1. Mở bài không H2, 1–3 đoạn: câu đầu "[Hãng] vừa chính thức ra mắt/giới thiệu [tên đầy đủ] ([tên mã] nếu có), [định vị], [điểm nhấn lớn nhất]". Đoạn sau: tiến trình, đối tượng, ngày lên kệ hoặc giá nếu có.
2. `[preview]link bài tinhte liên quan[/preview]` (bài kiến trúc, bài đời trước), có thể mở bằng "Mời anh em đọc thêm:".
3. Các `[H2]` theo điểm nhấn, từ quan trọng nhất trở xuống. Thường gặp:
   - Cấu hình/kiến trúc ("Cấu hình CPU, GPU", "Những dấu ấn của Intel Panther Lake")
   - Từng SKU hoặc nhóm SKU ("Core Ultra 9 và Core Ultra X9…", "Core Ultra 5")
   - Tính năng mới ("Cải thiện kết nối D2D", "Sẵn sàng cho CUDIMM quad-rank")
   - Hiệu năng hãng công bố ("Hiệu năng CPU, GPU và NPU", "So sánh với Intel và AMD")
   - Kết nối/nền tảng ("Kết nối")
   - Mục cuối: thời điểm có hàng ("Thời điểm ra mắt sản phẩm") hoặc góc nhìn người mua ("Mua bây giờ hay chờ?") khi nguồn đủ căn cứ.
4. Dòng nguồn.

**Bản tổng hợp sự kiện (keynote, booth, nhiều dòng):** đoạn mở nêu sự kiện và các sản phẩm chính, rồi mỗi sản phẩm hoặc dòng một H2 mang tên sản phẩm ("AMD EPYC Venice CPU", "Lexar Play Pro", "Intel Xeon 6+"). Ảnh còn lại gom `[galleria]` cuối bài sau câu "Thêm hình ảnh:".

Đặt tên H2: đưa tên sản phẩm, con số hoặc tính năng vào ("HBM5 lộ diện: base die 2nm và cấu trúc tản nhiệt dạng "ống khói""). Dùng `[H2]Tiêu đề[/H2]` trơn (đồng bộ skill laptop; 8 bài mẫu lồng `[B]` nhưng không bắt buộc), không đánh số, không H2 rỗng. Không có H2 "Kết" (chỉ 1 bài trên tay có "Tạm kết"); khép bằng đoạn thường.

## 4. Nội dung bắt buộc
Luôn có (thiếu thì ghi "chưa công bố" hoặc bỏ qua):
- Hãng, tên sản phẩm và SKU đúng cách viết của hãng, tên mã, ngày/sự kiện công bố, toàn cầu hay tại VN.
- Định vị: cho ai (game thủ, dựng máy phổ thông, ép xung, sáng tạo, workstation, máy chủ/AI data center, công nghiệp/nhúng), thế hệ nào thay thế.
- Thông số cốt lõi theo loại (mục 7), kèm khác biệt với đời trước hoặc bản tiêu chuẩn bằng số liệu (L3 24 MB lên 30 MB, 192GB lên 256GB, thêm nhân E).
- Tương thích nền tảng: socket, chipset, chuẩn RAM, PCIe, có cần đổi mainboard/BIOS không.
- Giá (MSRP) từng SKU nếu có, ngày lên kệ, kênh bán (OEM/SI, box bán lẻ). Không có thì ghi "hãng chưa công bố giá bán và thời điểm lên kệ".

Có thì đưa vào:
- Số liệu hiệu năng do hãng công bố, luôn ghi rõ là "theo hãng"/"Intel tuyên bố", nêu bài test (Geekbench 6.5, 3DMark) và đối thủ được so. Không tự thêm benchmark.
- Công nghệ đi kèm, đối tác OEM, bảo hành.
- `[preview]` bài tinhte liên quan (kiến trúc, đời trước, trên tay). 11/24 bài mẫu có.
- Giá VN chỉ khi có nguồn chính thức. Không tự quy đổi USD sang VND.

## 5. Đặt ảnh
- Nguồn không có hoặc ít hình chính thức (nhiều bài chính sách/gọi vốn chỉ dùng cover) thì tìm ảnh nguồn khác để minh họa hợp lý. Bản đủ có 2 ảnh trở lên hoặc video; sự kiện nhiều hơn thì ảnh dư gom `[galleria]` cuối bài.
- Mỗi H2 bắt buộc có ít nhất 1 ảnh, trước đoạn văn nó minh họa. Không lấy cover làm ảnh trong bài.
- Số ảnh: bản ngắn 3–4 ảnh, bản đầy đủ 5–15, tổng hợp sự kiện 15–60 kèm `[galleria]`.
- Ảnh đặt sau đoạn mở đầu tiên, rồi xen kẽ ảnh–đoạn; trong bản đầy đủ ảnh đặt ngay dưới H2, trước đoạn nói về nó.
- Slide của hãng (bảng SKU, biểu đồ hiệu năng) đặt ngay trên đoạn diễn giải slide đó.
- Ảnh lấy từ báo nước ngoài mà không tải lên được: `[IMG]url[/IMG]` rồi `[I]Ảnh: Wccftech.[/I]`.
- Video: `[MEDIA=youtube]id[/MEDIA]` sau đoạn mở.
- Có thể tạo ảnh minh hoạ (sơ đồ, bảng so sánh) khi nguồn không có.

## 6. Theo hãng
Có bài mẫu:
- **Intel (7 bài):** nêu tên thương mại + tên mã ("Panther Lake", "Arrow Lake-Refresh", "Granite Rapids-WS"), tiến trình (Intel 18A, TSMC N3B) và cấu trúc tile/Foveros, cụm nhân P/E/LP-E, iGPU Xe/Arc, NPU, chipset (800 series, W890), giá MSRP USD. So với đời trước và đối thủ AMD bằng số hãng công bố.
- **AMD (2 bài):** họ chip (Ryzen AI MAX, EPYC, Instinct), tên mã (Gorgon Halo, Venice), Zen/RDNA, số nhân/luồng, Unified Memory, đối tác OEM và quý lên kệ.
- **Qualcomm (1 bài):** mã SKU (X2P-64-100), cụm nhân Prime/Performance, Adreno, so với thế hệ đầu và Intel/AMD theo hãng.
- **COLORFUL (5 bài):** viết hoa tên hãng; dòng iGame (cao cấp, phong cách "Ultra", "VULCAN") và BATTLE-AX (phổ thông). Nhấn thiết kế (màu trắng, ARGB, LCD), cấp điện (pha, DrMOS A), khe M.2, cơ chế tháo nhanh; giá thường "liên hệ đại diện tại từng khu vực".
- **Samsung (1 bài):** bộ nhớ cho AI/data center (HBM4E, HBM5, base die, tản nhiệt), không phải SSD tiêu dùng.
- **Micron, Kingston, Asrock, Lexar, OWC, Lisuan (mỗi hãng 1 bài):** Micron/Kingston viết giọng doanh nghiệp, máy chủ, công nghiệp (JEDEC, độ tin cậy, vòng đời); Asrock nói rõ đánh đổi hiệu năng lấy giá; Lexar dòng sản phẩm theo nhu cầu (AI-Grade, Play X/Pro, bản giới hạn); OWC lưu trữ ngoài Thunderbolt cho dân sáng tạo; GPU Trung Quốc nói rõ thị trường, chứng nhận driver, mức hiệu năng hãng tự so.
- **ASUS (1 bài trên tay mainboard ROG Strix):** tên dòng ROG Strix/TUF/Prime, tính năng riêng (NitroPath DRAM, tháo nhanh). Tin ra mắt viết khách quan như COLORFUL.

Chưa có bài mẫu ra mắt, viết chung, chỉ dùng điều hãng công bố:
- **NVIDIA:** GeForce RTX (kiến trúc, CUDA core, VRAM, bus, TGP, DLSS), giá MSRP USD; bản đối tác (ASUS, MSI, GIGABYTE, COLORFUL) nói rõ OC, tản, kích thước.
- **MSI, GIGABYTE/AORUS:** mainboard/card theo bậc dòng của hãng (MEG/MPG/MAG/PRO; AORUS/AERO/GAMING/EAGLE).
- **Corsair, NZXT, Noctua:** nguồn, case, tản; nêu đúng tên dòng, không dựng giọng riêng.
- **WD, Samsung SSD, Kingston FURY:** dung lượng, PCIe Gen, tốc độ đọc/ghi tuần tự, TBW, bảo hành.

## 7. Theo loại linh kiện
- **CPU/SoC (10 bài):** tên mã, tiến trình, nhân/luồng (P/E), xung base/boost, cache L2/L3, TDP/PL2, iGPU, NPU (TOPS), socket/chipset, RAM hỗ trợ, làn PCIe, giá từng SKU. Nhiều SKU thì chia H2 theo bậc (Ultra 9/7/5) hoặc liệt kê `[LIST]`.
- **GPU/card đồ họa (3 bài):** GPU gốc, tiến trình, VRAM (GDDR6/GDDR7, bus), chuẩn PCIe, API hỗ trợ, tản (số quạt), kích thước, đèn, danh sách SKU; bản SFF/DUO cho máy nhỏ gọn.
- **Mainboard (5 bài, 2 trên tay):** chipset, socket, cấp điện (pha, DrMOS A), số lớp PCB, khe RAM (số khe, tối đa GB, MT/s), khe PCIe, số M.2 (bao nhiêu Gen5), SATA, cổng I/O (USB4, LAN, Wi-Fi 7), tính năng ép xung/BIOS, thẩm mỹ.
- **RAM/bộ nhớ (5 bài):** chuẩn module (DDR5, CUDIMM, RDIMM/MRDIMM, SOCAMM2, HBM), dung lượng, tốc độ MT/s/Gbps, băng thông, đối tượng (PC, máy chủ AI), trạng thái chuẩn hóa JEDEC, nguyên mẫu hay đã giao hàng.
- **SSD/lưu trữ (3 bài):** giao tiếp (PCIe Gen, NVMe, Thunderbolt 5, USB4), tốc độ, dung lượng, controller/DRAM-less, RAID, vỏ/tản, phần mềm, giá.
- **Nguồn (PSU), case, tản nhiệt, màn hình/gear: chưa có bài mẫu.** Viết chung: PSU (công suất W, chuẩn 80 PLUS/Cybenetics, ATX 3.1, 12V-2x6, modular, bảo hành); case (form factor, mainboard hỗ trợ, quạt/rad, chiều dài GPU, kính/mesh); tản (khí/AIO, kích thước rad, TDP hỗ trợ, socket, độ ồn dBA); màn hình (kích thước, tấm nền, độ phân giải, Hz). Chỉ dùng số hãng công bố.

## 8. Theo phân khúc
- **Phổ thông/entry:** nói rõ cho ai, giá trị/chi phí, điểm cắt giảm (DDR4, ít khe, PCIe 4.0), khả năng nâng cấp từ hệ thống cũ (BATTLE-AX B760M, Lisuan 7G100, HUDIMM).
- **Tầm trung/mainstream:** P/P, so đời trước và đối thủ trực tiếp; game 1080p/1440p khi hãng có số.
- **Cao cấp/enthusiast/flagship:** ép xung, cấp điện, vật liệu, thẩm mỹ, kỷ lục; có thể một câu "dư thừa với người dùng phổ thông" khi có căn cứ (X870E VULCAN, Core Ultra 9).
- **Workstation:** nhân, làn PCIe, kênh bộ nhớ, ECC/RDIMM, vPro/quản trị, ứng dụng (mô phỏng, dựng hình, AI) (Xeon 600).
- **Máy chủ/AI data center/công nghiệp (có trong mẫu):** dung lượng, băng thông, điện năng, làm mát chất lỏng, độ tin cậy, chuẩn hóa; giọng thuần thông tin (SOCAMM2, HBM5, EPYC, Kingston Design-In).

## 9. Văn phong
- **Xưng hô:** tin ra mắt từ thông cáo viết khách quan, gần như không "mình"/"anh em" (15/24 bài). Bài có tác giả ở sự kiện/booth hoặc có nhận định giá dùng "mình" 1–8 lần và "anh em" ("mình đánh giá là tốt", "anh em sẽ phải đổi mainboard"). Mặc định: khách quan; "mình" tối đa 2 lần ở câu nhận định; "anh em" ở lời mời đọc thêm hoặc câu khép. Không "tôi", "quý độc giả".
- **Câu:** đoạn 2–4 câu một ý, câu khá dài, nhiều thông số liền nhau. Mở đoạn bằng "Về…", "Ở phía…", "Song song đó,", "Trong khi đó,". Ghi nguồn bằng "theo AMD", "Intel cho biết", "hãng tuyên bố", "theo thông tin công bố".
- **Nên dùng:** "vừa chính thức ra mắt/giới thiệu/trình làng", "tên mã", "tiến trình", "đầu bảng", "hướng đến", "lên kệ", "giá khởi điểm", "đối thủ", "đội đỏ/đội xanh" (thưa), "bo mạch chủ"/"mainboard".
- **Tránh:** "siêu phẩm", "đỉnh của chóp", "đột phá" (trừ khi hãng nói), câu PR, "vô cùng mạnh mẽ" lặp lại, dấu chấm than, emoji.
- **Giữ tiếng Anh:** CPU, GPU, NPU, iGPU, SoC, P-core/E-core, TDP, PL2, boost, cache, die, tile, base die, socket, chipset, DrMOS, PCB, VRM, PCIe, M.2, NVMe, DDR5, CUDIMM, RDIMM, HBM, SFF, mini-ITX, ARGB, BIOS, MSRP, P/P, OEM, SI, SKU, workstation, data center, LLM, agentic AI, inference, WHQL, Wi-Fi 7, USB4.
- **Viết tiếng Việt:** vi xử lý, card đồ họa, bo mạch chủ, bộ nhớ đệm, nhân, luồng, xung nhịp, tản nhiệt, cấp điện, ép xung, khe cắm, băng thông, tiến trình, máy trạm (song song "workstation"), lên kệ.
- **Định dạng số:**
  - Tiền USD: `199 USD`, `1.999 USD`, `59,99 USD` (chấm ngăn nghìn, phẩy thập phân, đồng bộ skill laptop). Mẫu có lúc viết "499 đô la"; skill thống nhất "USD". Không `$499`.
  - Giá VN: `X triệu đồng` hoặc `X.XXX.000 đồng`; dùng "đồng", không "VNĐ". Không tự đổi tiền.
  - Thông số kỹ thuật: mẫu phần lớn dùng dấu chấm thập phân (`5.3GHz`, `4.04 GHz`, `243.5 mm`), một bài AMD dùng phẩy (`3,1 GHz`). Mặc định chấm cho thông số, giữ một kiểu suốt bài.
  - Đơn vị: `192GB`, `6400 MT/s`, `20+1+1+1 pha`, `125W`, giữ nhất quán dấu cách. Ngày `20/5`, `quý 3/2026`.
- **Mở bài mẫu:** "AMD vừa chính thức giới thiệu dòng SoC Ryzen AI MAX 400 (Gorgon Halo), nổi bật nhất là hỗ trợ tới 192GB Unified Memory."
- **Câu khép:** giá và ngày bán, hoặc trạng thái (sản xuất hàng loạt, chờ chuẩn hóa, gửi mẫu), cộng 1 câu định vị cho ai. Không viết như đã dùng thử, trừ khi input nói rõ người viết đã có mẫu hoặc ở sự kiện.

## 10. Tự kiểm tra trước khi giao
- [ ] Tít theo công thức, nêu loại linh kiện khi cần, tên mã trong ngoặc kép, không dấu phẩy treo.
- [ ] Cover đúng thứ tự ưu tiên, 16:9 hoặc 3:2, dưới 700KB, khác ảnh đầu thân bài, không watermark.
- [ ] Đủ thông số cốt lõi theo loại; có so đời trước bằng số liệu; tương thích nền tảng.
- [ ] Đúng bản (ngắn, đầy đủ, tổng hợp). H2 trơn, không rỗng, không "Kết".
- [ ] Ảnh ngoài có `[I]Ảnh: …[/I]`.
- [ ] Hiệu năng ghi "theo hãng" kèm bài test; không benchmark tự chế. Giá đúng SKU hoặc ghi chưa công bố; không tự quy đổi tiền.
- [ ] Giọng khách quan, "mình" ≤ 2 lần.
- [ ] Chỉ BBCode XenForo (`[H2]`, `[B]`, `[I]`, `[LIST][*]`, `[URL='…']`, `[preview]`, `[galleria]`, `[MEDIA]`), không Markdown. 100% tiếng Việt, giữ thuật ngữ Anh thông dụng.
- [ ] Dòng nguồn cuối bài: `Theo: [URL='link'][B]Tên nguồn[/B][/URL]` (nhiều nguồn cách nhau dấu phẩy).

## 11. Đầu ra
1. Sử dụng mcp tinhte tạo bài viết trên forum 767
2. Trả kết quả là link tinhte.vn, không trả bài viết