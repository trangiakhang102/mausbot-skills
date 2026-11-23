---
name: template-tin-tuc-quan-su
description: Viết tin tức quân sự/quốc phòng cho tinhte.vn theo văn phong Khoa Đinh (bk9sw) — khí tài, thử nghiệm, viện trợ/xuất khẩu, chiến trường, chân dung vũ khí, lịch sử, sự cố/tình báo, công nghệ quốc phòng — từ link hoặc chủ đề; gọi bằng /template-tin-tuc-quan-su.
---

# Template tin tức quân sự — giọng Khoa Đinh (tinhte.vn)

Biến link nguồn (báo quốc phòng, thông cáo Bộ Quốc phòng, SIPRI, The War Zone/The Drive, Reuters, SCMP…) thành bài BBCode đúng giọng Khoa Đinh (bk9sw) trên tinhte.vn.

## Khi nào dùng
- Lệnh `/template-tin-tuc-quan-su <link hoặc chủ đề>`.
- Tin đã có nguồn: ra mắt/công bố khí tài, máy bay, tàu, drone; chuyến bay đầu hoặc thử nghiệm/phóng; hợp đồng, viện trợ, xuất khẩu vũ khí; tin chiến trường hoặc triển khai; chân dung/giải thích khí tài; lịch sử, câu chuyện; sự cố, tai nạn, tình báo; công nghệ và công nghiệp quốc phòng.
- File format 30 bài là hỗn hợp. Chỉ học bố cục từ nhóm tin quân sự (mục 6). Không dùng cho bài lấy chiến sự làm nền nhưng góc chính là dân sự: McDonald's rút khỏi Nga; hàng không dân dụng + cấm vận (Aeroflot tháo máy bay, Superjet 100, máy bay tái đăng ký); vũ trụ thương mại (Rocket Lab); khoa học dân sự (kính eROSITA). Các dạng đó báo lại, dùng `/viet-tin`.
- Không dùng cho tuyên truyền, bình luận chính trị dài, hướng dẫn tác chiến, tin đồn không nguồn. Tin chưa xác nhận: viết đúng mức độ nguồn, không viết như đã chốt.

## Quy trình
1. Đọc hết nguồn trong `{input}`. Với thông số, giá, thương vong, ngày thử nghiệm: đối chiếu thông cáo, Bộ Quốc phòng hoặc báo cáo gốc. Nguồn lệch nhau thì ghi rõ từng bên, không tự chọn số "đẹp".
2. Kiểm tra chéo ít nhất một nguồn khác nếu tin chiến trường, thương vong, cáo buộc hoặc thông số nhạy.
3. Xác định kiểu tin (mục 6) rồi chọn bản ở mục 3. Có thể kết hợp (sự cố + móc lịch sử, như bài khí cầu).
4. Lấy đủ dữ liệu mục 4. Thiếu thì ghi "chưa rõ"/"chưa công bố" hoặc bỏ; không suy diễn, không bịa thông số, tầm bắn, thương vong, giá hay ngày.
5. Viết bài.
6. Tải hình trong các nguồn tham khảo để minh hoạ cho nội dung bài.
7. Hình tải về lưu tại /Users/khang/AI/tinhte-uploads
8. Chọn cover, viết tiêu đề và thân bài theo khung dưới, rồi chạy mục 8. Khi nguồn có nhiều hình, ưu tiên cover khác ảnh đầu thân bài.
9. Đặt hình vào bài bằng mcp tinhte, ở các vị trí hợp lý.
10. Tự rà: đúng số liệu, tên mã, đơn vị, chính tả. Không bắt chước lỗi gõ trong bài mẫu (ví dụ "Lighting" thay vì Lightning, "đạn dạo", "sữa chữa").
11. Sử dụng mcp tinhte tạo bài viết trên forum 767
12. Trả kết quả là link tinhte.vn, không trả bài viết
13. Gửi kết quả link tinhte.vn cho @mauscheck và gọi skill /mauscheck

## 1. Tiêu đề
Bài mẫu gần như không dùng dấu hai chấm (0/30 bài format). Không ép công thức `[Hãng] ra mắt [tên]: [điểm]`. Dấu `:` chỉ khi dẫn nguồn đầu tít (`Reuters: "…"`).

Công thức hay gặp (trung vị ~74 ký tự, phổ biến 60–100):
`[Quốc gia/lực lượng] [động từ] [khí tài/sự việc], [điểm nhấn]`
`[Tên mã] - [loại khí tài/định vị], [điểm nhấn]`
- Câu sự việc: `Sau 3 lần thất bại, Mỹ đã phóng thành công tên lửa siêu vượt âm AGM-183A từ B-52`; `Ba Lan gởi tăng T-72 cho Ukraine, đổi lấy Challenger 2 hiện đại của Anh`.
- Tên mã + gạch ngang: `Cối tự hành 2S4 Tyulpan - cối lớn nhất thế giới có thể bắn cả đạn hạt nhân`; `Ukraine ra mắt Zerov-8 - drone chuyên đánh chặn Shahed`.
- Chân dung: `Đôi nét về F-22 Raptor - quốc bảo của Hoa Kỳ`; `Uy lực pháo tự hành PzH 2000 trị giá gần 5 triệu đô của Đức`.
- Tít hỏi cho bài giải thích hoặc còn bỏ ngỏ: `Hệ thống pháo phản lực HIMARS có gì đặc biệt?`; `J-35 xịt khói đen thui, Trung Quốc vẫn chưa thể làm chủ công nghệ động cơ?`. Không tít hỏi khi tin sự việc đã chốt (rơi máy bay, ký hợp đồng, thử thành công).
- Biệt danh, cách nói hình ảnh để trong ngoặc kép: `"Kẻ hủy diệt"`, `"nhà trồng"`, `"chim mồi"`, `"nằm đất"`, `"câu" tên lửa`.
- Tiền tố `[Video]` khi bài bám một clip (robot chó, nghi vấn UFO).
- Hai vế: `Hoa Kỳ đã bắn hạ khí cầu Trung Quốc và vụ bắn khí cầu nhớ đời của Hải quân Mỹ năm 1945`; `Mỹ tiếp tục là nhà xuất khẩu vũ khí lớn nhất thế giới, Nga lao dốc, Pháp leo lên vị trí thứ 2`.
- Gắn nguồn/mức xác nhận vào tít khi tin là tuyên bố hoặc chưa chốt: `Nga tuyên bố…`, `được cho…`, `đại học Trung Quốc nói…`, `Nghi vấn…`.
- Động từ đúng việc: "ra mắt", "công bố", "tiết lộ", "thử nghiệm thành công", "phóng", "đưa… đến", "gởi", "bắn hạ", "trục vớt", "bắt". Không "siêu phẩm", không tít reo hò.
- Không phẩy treo, không tít mơ hồ.

## 2. Ảnh cover
- Cover là thumbnail riêng. Tỉ lệ phổ biến ~1,62 (2048×1268) hoặc 16:9 (1920×1080); cũng gặp ~1,5, 3:2, ~2:1. Ảnh vuông/4:3 cắt về 16:9, 3:2 hoặc ~1,62. Dưới 700KB, jpg/png/webp. Một số bài mẫu hiện cover 320×180 (bản xem trước) — hãy lấy bản độ phân giải cao.
- Ưu tiên: (1) ảnh chính thức hoặc key visual của khí tài, thấy rõ kiểu dáng; (2) ảnh/video frame từ thông cáo, triển lãm, thử nghiệm; (3) tin chiến trường: ảnh phương tiện, mảnh vỡ, hiện trường đã xuất bản, không cận thương vong; (4) báo cáo/xuất khẩu: biểu đồ hoặc khí tài đại diện; (5) lịch sử: ảnh tư liệu rõ nguồn.
- Không watermark shop, ảnh chế, đồ họa tuyên truyền chữ dày, render tin đồn, ảnh xác người.
- Khoảng 20/30 bài format dùng cùng một file cho cover và ảnh đầu bài, nhất là tin ngắn. Khi nguồn có nhiều hình, ưu tiên cover khác ảnh đầu (góc khác, slide tổng vs cận tiết).

## 3. Bố cục và các mục H2
Khác skill sản phẩm: 28/30 bài format không có H2, kể cả chân dung dài (NASAMS, Tyulpan, PzH 2000, TOS-1A). Chỉ bài nhiều lớp (FedEx, 6 H2) và chân dung rất dài (F-22, 2 H2) mới tách mục. Ở file 200 bài, H2 chủ yếu nằm ở lịch sử/công nghiệp dài (Martin-Baker, Porsche, VW/Vòm Sắt). Không thêm H2 cho đủ. Không H2 "Kết".

**Bản ngắn/tin nóng (250–700 từ):** một sự việc (triển khai, phát hiện, bắt giữ, tai nạn, ra mắt một mẫu). Mở 1–2 đoạn (sự việc + nguồn + tên khí tài) → cặp ảnh/video + đoạn bối cảnh, thông số đã xác nhận, ý nghĩa → câu khép → dòng nguồn. Không H2. Ví dụ: drone "chim mồi"; T-90M bị phá; Shahed gắn MANPAD; Tejas rơi.

**Bản chuẩn (500–1.100 từ, không H2):** tin thử nghiệm, ra mắt, viện trợ, báo cáo xuất khẩu, công nghệ. Mở: sự việc + nguồn. Lần lượt: đây là gì, ai công bố, thông số cốt lõi, so sánh hoặc bối cảnh, giới hạn/"chưa rõ", câu khép. Xen ảnh–đoạn. Ví dụ: AGM-183A; KF-21 bay lần đầu; SIPRI; APKWS; Poseidon (tuyên bố); J-35 khói đen.

**Bản chân dung/giải thích hoặc lịch sử (1.100–2.700 từ):** có thể không H2 (NASAMS, Tyulpan) hoặc 2–6 `[H2]` khi nhiều lớp/thời kỳ: "MANPAD - nhỏ gọn nhưng nguy hiểm", "Chương trình ATF", "Tại sao là nhà máy Osnabrück?", "Ghế phóng Mk.1 ra đời". Ảnh ngay dưới H2, trước đoạn minh họa. Khép bằng hiện trạng, ý nghĩa hoặc câu nối về hiện tại. Không H2 "Kết".

Đặt tên H2: tên khí tài, chương trình, giai đoạn hoặc câu hỏi cụ thể. `[H2]Tiêu đề[/H2]` trơn, không lồng `[B]`, không đánh số, không H2 rỗng, không `[HEADING]`. `[H3]` chỉ khi gắn link bài liên quan hoặc mục con thật sự cần.

## 4. Nội dung bắt buộc
Luôn có (thiếu thì "chưa rõ"/"chưa công bố" hoặc bỏ):
- Ai công bố/tham gia: quốc gia, quân chủng, nhà thầu, tổ chức (SIPRI, ATLA, SSU…). Ngày hoặc sự kiện ("hôm 24 tháng 1", "Dubai Airshow 2025").
- Tên khí tài đúng mục 7: mã + tên riêng + loại tiếng Việt trong lần xuất hiện đầu.
- Đây là việc gì (ra mắt, thử, viện trợ, bị phá hủy, bị bắt), mức độ xác nhận (thông cáo, video, "được cho", "tuyên bố").
- Thông số cốt lõi chỉ khi nguồn có: tầm, tốc độ (Mach, km/h, hải lý/h), khối lượng, số lượng hợp đồng, giá. Không suy ra số còn thiếu.
- Bối cảnh ngắn: đời trước, đối thủ, chiến trường, lệnh cấm, lý do việc này đáng nói.
- Nguồn mọi số nhạy: "theo SIPRI", "Lockheed Martin nói", "Bộ quốc phòng Đức công bố", "phía Ukraine cho biết".

Có thì đưa: biến thể (Block 1, T-90M, F-35C); nơi thử/triển khai; đối tác (Hàn Quốc–Indonesia, Kongsberg–Raytheon); giới hạn và đánh đổi; link bài tinhte liên quan dạng `[URL='…'][B]Tên bài[/B][/URL]` trong câu hoặc `[H3][URL]…[/URL][/H3]`. Giá Việt Nam chỉ khi có nguồn chính thức; không tự đổi "đô" thành giá niêm yết tại VN.

## 5. Đặt ảnh
- Nguồn không có hoặc ít hình chính thức (nhiều bài chính sách/gọi vốn chỉ dùng cover) thì tìm ảnh nguồn khác để minh họa hợp lý. Bản đủ có 2 ảnh trở lên hoặc video; sự kiện nhiều hơn thì ảnh dư gom `[galleria]` cuối bài.
- Mỗi H2 bắt buộc có ít nhất 1 ảnh, trước đoạn văn nó minh họa. Không lấy cover làm ảnh trong bài.
- Số ảnh: tin nóng 3-5 trong bài; bản chuẩn 3–8; chân dung/lịch sử 5–13. Video thử nghiệm, bắn, tai nạn, demo: `[MEDIA=youtube]id[/MEDIA]`, chú thích nghiêng `[I]…[/I]` khi cần.
- Ảnh đầu sau đoạn mở, rồi xen ảnh–đoạn. Có H2 thì ảnh ngay dưới H2. Ảnh so sánh, cắt ngang, sơ đồ đặt sát đoạn diễn giải.
- Ảnh ngoài chưa tải: `[IMG]url[/IMG]`. Có thể chèn sơ đồ/bảng khi nguồn không có, nhưng không tự vẽ thông số mới.
- Tránh ảnh gây sốc không cần thiết; mô tả sức phá (nhiệt áp, nổ) bằng số và cơ chế, không mô tả thương tích chi tiết.

## 6. Theo kiểu tin
- **Ra mắt/công bố khí tài, máy bay, tàu; chuyến bay đầu:** mở bằng sự việc và chủ thể (KAI/DAPA, TFL, KCNA). Định vị thế hệ (KF-21 "thế hệ 4.5"), vai trò, thông số đã công bố, đối tác/kế hoạch biên chế. Phân biệt "tiết lộ hình ảnh" với "đã hạ thủy/biên chế". Ví dụ: KF-21; Zerov-8; drone muỗi; tàu ngầm hạt nhân Triều Tiên; robot chó (`[Video]`, nêu rõ là demo).
- **Thử nghiệm/phóng:** nêu lần thử (lần 4 sau 3 lần thất bại), đơn vị thử (Phi đội 419, ATLA, Lockheed), giá đỡ/bệ phóng (B-52, JS Asuka), kết quả đúng như nguồn ("phóng thành công", "bắn vào tàu mục tiêu"). Tuyên bố một phía (Poseidon, laser Nga trên Telegram) phải viết "Nga tuyên bố"/"được cho", kèm chuyên gia phản biện nếu có. Không viết như đã trang bị đại trà khi mới EOC/thử.
- **Hợp đồng, viện trợ, xuất khẩu:** số lượng, giá trị, bên giao–bên nhận, khí tài đổi (T-72 đổi Challenger 2), thời hạn nếu có. Báo cáo thị phần (SIPRI 2020–2024) ghi đúng giai đoạn, % và thứ hạng; giải thích ngắn vì sao số đổi (Nga lao dốc sau chiến sự, Pháp bán chiến đấu cơ). Số chưa công bố: "chưa tiết lộ số lượng".
- **Tin chiến trường/triển khai:** mở bằng việc đã quan sát (ảnh, video, phóng viên) và nơi nếu nguồn nêu. Tách "hình ảnh cho thấy" khỏi suy diễn (chưa rõ bị bắn bằng gì). Tả khí tài vừa đủ để hiểu tin, không viết thành catalog. Thương vong chỉ khi nguồn có và gắn nguồn. Ví dụ: BMPT-72 tới Ukraine; Alrosa về Hạm đội Biển Đen; T-90M bị phá; Fattah trong một đợt tấn công — hiệu quả chiến đấu luôn ghi "phía X tuyên bố".
- **Chân dung/giải thích khí tài:** câu đầu định nghĩa (tên, loại, chủ, việc đang làm nó đáng nói). Rồi lịch sử phát triển ngắn, cấu hình, đạn/tên lửa dùng được, tầm/tốc độ, cách triển khai ("bắn và chuồn"), quá trình tham chiến nếu có. Giữ giọng kỹ thuật, không reo "uy lực hủy diệt" trừ khi đang mô tả cơ chế (TOS-1A: sóng nổ, nhiệt độ theo nguồn) và nêu tranh luận pháp lý chỉ khi nguồn có. Ví dụ: HIMARS, NASAMS, F-22, Tyulpan, PzH 2000, TOS-1A.
- **Lịch sử/câu chuyện:** móc hiện tại rồi kể theo thời gian (Zimmerit; ghế Martin-Baker; Porsche/Tiger–Elefant–Maus; kỹ sư Gowadia và B-2). "Mình"/"anh em" chỉ bài kể dài, vừa phải. Kết bằng hiện trạng hoặc bài học, không H2 "Kết".
- **Sự cố, tai nạn, tình báo:** ai xác nhận (IAF, Hải quân Hoa Kỳ, SSU, FBI), thời điểm, nơi, hệ quả đã biết, điều chưa rõ. Không suy nguyên nhân. Bài móc lịch sử (khí cầu 2023 + Fu-Go 1945) phải tách hai chuyện. Cáo buộc gián điệp theo cơ quan điều tra, đúng lời nguồn. Clip chưa kiểm chứng (UFO/Hellfire): "nghi vấn", nêu ai công bố, không kết luận.
- **Công nghệ/công nghiệp quốc phòng:** mô tả concept (APKWS + VAMPIRE, railgun, AI Combat ID, CSDCS trong container, laser đẩy tàu ngầm) rồi giới hạn thực tế, chi phí so sánh nếu nguồn có, chuyên gia phản biện. Nghiên cứu đại học/bài báo mở: không viết như vũ khí đã hiện hữu. Tin công nghiệp (VW làm Vòm Sắt, cấm drone DJI, chip gia dụng trong khí tài Nga) gắn nguồn và mức xác nhận ("được cho", "2 quan chức nói với Reuters").

## 7. Văn phong, số liệu, thuật ngữ
- **Giọng:** khách quan, trung lập với mọi bên. Không cổ vũ bạo lực, không giễu một phía, không viết như cổ động viên. Dùng "chiến sự Ukraine", "cuộc chiến giữa Ukraine và Nga"; chỉ dùng cụm của một bên ("chiến dịch đặc biệt") khi trích dẫn và ghi rõ người nói.
- **Xưng hô:** tin nóng/thông cáo viết khách quan, thường không "mình"/"anh em". "Mình" vừa phải ở câu nhận định hoặc bài sự kiện/lịch sử. "Anh em" chủ yếu bài kể dài. Không "tôi" trừ trích dẫn, không "các bạn", không "quý độc giả". "Chúng ta" rất thưa.
- **Gắn nguồn và tách mạnh:** "theo Bộ quốc phòng…", "Lockheed Martin cho biết", "phía X tuyên bố", "được cho", "chưa rõ", "các chuyên gia cho rằng", "video cho thấy". Tuyên bố chiến thắng, số bắn hạ, "xuyên thủng phòng không" phải gắn bên nói. Không biến tin một nguồn thành sự thật đã xác nhận.
- **Câu:** đoạn 2–5 câu một ý. Mở thường vào sự việc hoặc nguồn, không cứng "[Hãng] vừa chính thức ra mắt". Câu chuyển: "Trở lại với…", "Điều thú vị là", "Chưa rõ…", "Song song với". Có thể mở "Như vậy là…" / "Và như vậy…" khi nối tin đã theo dõi.
- **Tên mã:** giữ nguyên ký hiệu Latin/NATO/GRAU, không dịch F-35, Su-57, HIMARS, T-90M, 2S4. Lần đầu: mã + tên riêng + loại Việt — `HIMARS hay M142 HIMARS là hệ thống pháo phản lực…`; `T-90M Proryv-3 - xe tăng chiến đấu chủ lực (MBT)`; `Panzerhaubitze 2000 (PzH 2000)`; `F-35C`; `F-22 Raptor`; `AGM-183A`; `Shahed-136`; `B-871 Alrosa` lớp Kilo. Biệt danh để trong ngoặc kép. Tên tàu, chương trình giữ nguyên: USS Carl Vinson (CVN-70), JS Asuka, Iron Dome / Vòm Sắt (dùng được cả hai).
- **Giữ tiếng Anh/viết tắt thông dụng:** UAV, UAP, MBT, MLRS, MANPAD, SAM, ICBM, HGV, AEW&C, EOC, ERA, HUD, HMD, AI/ML, NATO, SIPRI, PLA, PLAN, USAF, IAF, IRGC, FCC, SSU, ATLA.
- **Viết tiếng Việt:** chiến đấu cơ, máy bay không người lái, xe tăng chiến đấu chủ lực, pháo tự hành, pháo phản lực phóng loạt, cối tự hành, tàu ngầm, hạm đội, hàng không mẫu hạm, phòng không, tên lửa hành trình, tên lửa siêu vượt âm / bội siêu thanh, đất đối không / không đối không, giáp phản ứng nổ, ghế phóng, súng điện từ (railgun).
- **Định dạng số (theo mẫu):**
  - Thông số: phẩy thập phân, có khoảng trắng trước đơn vị: `76,2 m`, `7,62 mm`, `16,9 m`, `25,5 tấn`, `9,6%`, `2,85 triệu đô`, `4,75 tỉ đô`, `1,6 km`.
  - Mach thường giữ dấu chấm kiểu nguồn: `Mach 2.0`, `Mach 1.81`, `Mach 5`, `Mach 15`. Có thể thêm `Mach 15 (~17900 km/h)` nếu nguồn đổi đơn vị.
  - Dải số: `800 đến 9650 m`, `10 - 12 viên`, `2500 - 3000 độ C`, `2020 - 2024`.
  - Tiền: mẫu hay dùng `820 triệu đô`, `5 triệu đô`, `3000 đô`, `2 tỷ EUR`; đôi khi `50 ngàn USD`, `110.000 USD`. Không `$`, không `VNĐ`. Một bài nên chọn một kiểu (`đô` hoặc `USD`) và giữ đến cuối; "đồng" chỉ giá Việt có nguồn. "tỷ" và "tỉ" đều có trong mẫu — một bài giữ một kiểu.
- **Câu khép:** hiện trạng, bước tiếp theo (thử thêm, điều tra, biên chế), hoặc một câu định vị ("chưa rõ khi nào…", "vẫn chỉ là nghiên cứu"). Không H2 kết.

## 8. Tự kiểm tra trước khi giao
- [ ] Tít theo mẫu Khoa Đinh (câu sự việc, mã + gạch ngang, hoặc tít hỏi chỉ khi bài giải thích/còn bỏ ngỏ); không ép hai chấm, không phẩy treo, không tít cổ vũ.
- [ ] Cover 16:9, 3:2 hoặc ~1,62, dưới 700KB, không watermark, không cận thương vong; khác ảnh đầu bài nếu có đủ hình.
- [ ] Đúng bản (ngắn / chuẩn không H2 / chân dung-lịch sử có H2 khi thật sự cần). H2 trơn, không rỗng, không "Kết".
- [ ] Mọi thông số, tầm bắn, thương vong, giá, ngày đều có nguồn hoặc ghi "chưa rõ". Tuyên bố một phía được gắn đúng bên. Không bịa, không suy diễn.
- [ ] Giọng trung lập; không cổ vũ bạo lực. "Mình"/"anh em" chỉ khi có căn cứ (bài kể, nhận định ngắn).
- [ ] Tên mã, quân chủng, ký hiệu viết đúng; không copy lỗi gõ mẫu.
- [ ] Chỉ BBCode XenForo (`[H2]`, `[B]`, `[I]`, `[LIST][*]`, `[URL='…']`, `[MEDIA]`, `[IMG]`), không Markdown, không `[HEADING]`. 100% tiếng Việt, giữ thuật ngữ Anh/mã hiệu thông dụng. Số và tiền theo mục 7.
- [ ] Dòng nguồn cuối bài: `Theo: [URL='link'][B]Tên nguồn[/B][/URL]` (nhiều nguồn cách nhau dấu phẩy hoặc chấm phẩy). Bài mẫu thường ghi `Theo:`, đôi khi `Tham khảo:` hoặc chỉ chèn link — skill vẫn bắt buộc `Theo:` cho đồng bộ các skill khác.

## 9. Đầu ra
1. Sử dụng mcp tinhte tạo bài viết trên forum 767
2. Trả kết quả là link tinhte.vn, không trả bài viết