---
name: template-bk9sw-drama-cong-nghe
description: Viết tin "drama công nghệ" cho tinhte.vn theo văn phong Khoa Đinh (bk9sw) — kiện tụng, phạt, truy tố, lệnh cấm/cấm vận, tố cáo, bê bối, sa thải/CEO, người dùng phản ứng, hãng đấu nhau — từ link hoặc chủ đề; gọi bằng /template-bk9sw-drama-cong-nghe.
---

# Template drama công nghệ — giọng Khoa Đinh (tinhte.vn)

Biến link nguồn (Reuters, The Verge, Tom's Hardware, The Register, văn bản tòa án, thông cáo cơ quan quản lý…) thành bài BBCode đúng giọng Khoa Đinh (bk9sw) trên tinhte.vn.

## Khi nào dùng
- Lệnh `/template-bk9sw-drama-cong-nghe <link hoặc chủ đề>`.
- Tin có xung đột giữa các bên và đã có nguồn: kiện dân sự, kiện tập thể, tranh chấp sáng chế/bản quyền; cơ quan quản lý kiện, phạt, truy tố, tòa phán quyết, kháng cáo; lệnh cấm, cấm vận, danh sách đen; tố cáo công khai, bê bối, rò rỉ bí mật công nghệ, hàng giả/gian lận cấu hình; sa thải hàng loạt, CEO bị bãi nhiệm; người dùng phản ứng, tẩy chay quyết định của hãng; hai công ty "nghỉ chơi", cà khịa nhau.
- Ranh giới:
  - `/template-tin-tuc-ai`: góc viết là mô hình AI, năng lực, an toàn AI. Kiện, phạt, cấm, tranh chấp giữa các công ty AI (bản quyền dữ liệu, thâu tóm, cấm chip AI) thì dùng skill này.
  - `/template-tin-tuc-windows-microsoft`: bản cập nhật, lỗi, tính năng, EOL Windows/Office. Microsoft bị kiện, bị phạt, sa thải, rút khỏi thị trường thì dùng skill này.
  - `/template-tin-tuc-smart-phone`, `/template-ra-mat-linh-kien-pc-khoa-dinh`: ra mắt và thông số sản phẩm. Lệnh cấm bán điện thoại, hãng PC thua kiện, laptop gian lận CPU thì dùng skill này.
  - `/template-tin-tuc-hang-khong`, `/template-tin-tuc-quan-su`: sự cố bay, khai thác, vũ khí. Boeing bị truy tố, CEO bị sa thải, người tố cáo sai phạm thì dùng skill này.
- Không dùng cho trên tay, đánh giá, mẹo, tin sản phẩm thuần, tin đồn không có bên nào lên tiếng.
- Không bịa số tiền phạt, mức bồi thường, tên thẩm phán, tội danh, ngày xử, số người bị ảnh hưởng hay lời trích. Thiếu thì "chưa rõ"/"chưa công bố".

## Quy trình
1. Đọc hết nguồn trong `{input}`. Ưu tiên văn bản gốc: đơn kiện, cáo trạng, phán quyết, thông cáo của cơ quan quản lý, phát ngôn chính thức. Báo lệch nhau thì ghi rõ từng bên.
2. Kiểm tra chéo ít nhất một nguồn khác với số tiền, tội danh, phán quyết và cáo buộc nhắm vào cá nhân.
3. Xác định kiểu tin (mục 6) và giai đoạn: mới nộp đơn, đang xét xử, đã phán quyết, dàn xếp, kháng cáo. Rồi chọn bản ở mục 3.
4. Lấy đủ dữ liệu mục 4. Thiếu thì "chưa rõ" hoặc bỏ; không suy diễn.
5. Viết bài.
6. Tải hình trong các nguồn tham khảo để minh hoạ bài.
7. Hình tải về lưu tại /Users/khang/AI/tinhte-uploads
8. Chọn cover, viết tiêu đề và thân bài theo khung dưới, rồi chạy mục 8. Khi nguồn có nhiều hình, ưu tiên cover khác ảnh đầu.
9. Đặt hình vào bài bằng mcp tinhte, ở vị trí hợp lý.
10. Tự rà: đúng tên bên kiện/bị kiện, số tiền, mốc ngày, chính tả. Không bắt chước lỗi gõ trong mẫu ("toàn án", "phủ nhật", "vướn", "2027y", "TikToke").
11. Sử dụng mcp tinhte tạo bài viết trên forum 767
12. Trả kết quả là link tinhte.vn, không trả bài viết
13. Gửi kết quả link tinhte.vn cho @mauscheck và gọi skill /mauscheck

## 1. Tiêu đề
Trung vị ~80 ký tự (35–99). 15/30 tít có dấu phẩy nối hai vế; chỉ 2/30 dùng hai chấm (lời trích, chi tiết bị lộ). Không ép công thức hai chấm.

Công thức hay gặp:
`[Bên A] bị [kiện/phạt/cấm/tố/truy tố] vì [hành vi], [hệ quả hoặc con số]`
`[Bên A] kiện [Bên B] vì [lý do], đòi bồi thường [số tiền]`
`[Bối cảnh/twist], [Bên A] [động từ] [sự việc]`
- Thể bị động gắn nguồn cáo buộc: "bị kiện", "bị tố", "bị nghi", "bị cáo buộc", "thua kiện", "bị phạt", "bị truy tố". Không viết tít khẳng định tội khi chưa có phán quyết hoặc nhận tội.
- Số tiền, quy mô đưa vào tít khi có: `bị phạt 140 triệu đô`, `mức phạt lên đến 1,4 ngàn tỷ USD`, `thua kiện 3,45 triệu đô`.
- Mở bằng bối cảnh/twist: `Dù đã hết làm điện thoại, BlackBerry vẫn bị kiện vì BlackBerry 10`; `Mặc cho cấm vận, SMIC vẫn…`; `Sau khi bị kiện vì…, Microsoft xin lỗi…`.
- Lời trích hoặc cách nói hình ảnh trong ngoặc kép: `"mua hớ"`, `"ăn cắp phần mềm"`, `"Bán thoải mái"`, `"trả tiền để đạt top"`, `"hậu Trump"`, `"tội ác độc quyền"`.
- Tít hỏi khi tin còn bỏ ngỏ hoặc giải thích hệ quả: `Điều gì sẽ xảy ra với người dùng Mỹ nếu TikTok bị cấm?`. "!" cuối tít hiếm (2/30), chỉ khi sự việc thật sự gây sốc.
- Không "siêu phẩm", "chấn động", "sốc", emoji; không phẩy treo.

## 2. Ảnh cover
- 30/30 bài mẫu dùng file cover riêng (`cover-<chủ đề>.jpg`), không chèn lại trong thân bài. Tỉ lệ ~1,62 (2048×1268) ở bài cũ, 16:9 (1920×1080) ở bài mới. Cắt về 16:9 hoặc ~1,62, dưới 700KB, jpg/png/webp.
- Kiểu cover trong mẫu:
  1. Hai bên đối đầu: hai logo hoặc biển hiệu đặt cạnh nhau (GlobalFoundries/TSMC; Riot/Imba dùng key art game bị tố đạo nhái).
  2. Nhân vật trung tâm: CEO, người tố cáo, người phát ngôn — chân dung rõ mặt, có thể ghép logo công ty (Zuckerberg + Meta; Barnett; Muilenburg).
  3. Sản phẩm bị nhắc trong vụ việc, có thể kèm biểu tượng cấm hoặc screenshot bài đăng của người tố (drone + biển cấm; RTX 50 + tweet Snowden).
  4. Văn bản gốc gây chuyện: screenshot email xin lỗi, thông báo chính thức (M365 xin lỗi người dùng Úc).
  5. Logo/key visual công ty trên sân khấu hoặc trụ sở khi không có ảnh tốt hơn.
- Không ảnh chế, ảnh nạn nhân, hiện trường gây sốc, ảnh lộ thông tin cá nhân người thường. Không watermark, không slide chữ dày.
- Bài ngắn có thể chỉ có cover (2/30 mẫu). Khi đủ hình, cover khác ảnh đầu.

## 3. Bố cục và các mục H2
23/30 bài format không có H2. Bài có H2 (7/30) đều dài, nhiều giai đoạn. Không thêm H2 cho đủ. Không H2 "Kết".

**Bản ngắn (300–500 từ, không H2):** lệnh cấm, phán quyết, kháng cáo, tố cáo một chiều. Mở: ai, làm gì, theo phán quyết/đơn kiện nào → chi tiết cáo buộc hoặc nội dung lệnh → phản hồi bên kia → bối cảnh ngắn → dòng nguồn. 0–1 ảnh. Ví dụ: Oppo bị cấm bán tại Đức; Intel kháng cáo thành công; Snowden chê RTX 50.

**Bản chuẩn (500–900 từ, không H2):** đa số bài. Mở 1–2 đoạn chốt sự việc và con số → "Chuyện là…"/"Cụ thể là…" kể nguồn cơn → nội dung đơn kiện, cáo trạng, lập luận từng bên → phản hồi của bị đơn/hãng → tiền lệ, vụ tương tự, tác động thị trường → câu khép. Xen ảnh–đoạn.

**Bản nhiều lớp (900–1.700 từ, có H2):** vụ việc kéo dài, nhiều giai đoạn hoặc nhiều nhóm bị ảnh hưởng. Đoạn mở trước H2 đầu tiên tóm toàn bộ sự việc. H2 tách theo diễn biến hoặc câu hỏi người đọc: `Chuyện gì xảy ra với chương trình NZXT Flex?` → `NZXT thua kiện và các phương án giải quyết`; `Cadence phạm tội gì?` → `Lip-Bu Tan liệu có liên quan?`; TikTok tách theo nhóm ảnh hưởng (kho ứng dụng / nhà bán hàng / nhân viên / thương vụ mua lại); Boeing tách: phát hiện → khiếu nại → nghi vấn. Ảnh ngay dưới H2.

H2 dạng câu hỏi hoặc mệnh đề cụ thể, không dấu hai chấm cuối (mẫu cũ có, bỏ). `[H2]Tiêu đề[/H2]` trơn, không lồng `[B]`, không đánh số, không H2 rỗng, không `[HEADING]`.

## 4. Nội dung bắt buộc
Luôn có (thiếu thì "chưa rõ"/"chưa công bố" hoặc bỏ):
- **Ai với ai:** bên kiện/cơ quan/người tố và bên bị; giới thiệu bằng gạch nối: `ValueLicensing - một công ty chuyên bán bản quyền phần mềm đã qua sử dụng tại Anh`; cơ quan viết tên Việt + viết tắt: `Ủy ban Cạnh tranh và Tiêu dùng Úc (ACCC)`, `Ủy ban Truyền thông Liên bang (FCC)`.
- **Chuyện gì:** hành vi bị cáo buộc, viết theo văn bản (đơn kiện, cáo trạng, thông báo) và gắn nguồn.
- **Ở đâu, giai đoạn nào:** tòa nào/cơ quan nào; mới nộp đơn, đang xét xử, đã phán quyết, dàn xếp, nhận tội, kháng cáo.
- **Con số:** tiền phạt, bồi thường đòi, số tiền dàn xếp, số người bị ảnh hưởng, số sáng chế, mức án tối đa — chép đúng nguồn, nói rõ là "đòi", "đề xuất", "tối đa" hay đã chốt.
- **Mốc thời gian:** ngày nộp đơn, ngày phán quyết, hạn chót, nguồn cơn từ năm nào.
- **Phản hồi bên bị:** phủ nhận, bác bỏ, xin lỗi, hứa hoàn tiền, kháng cáo, "từ chối bình luận", "chưa đưa ra bình luận". Chưa có phản hồi thì ghi rõ.
- **Hệ quả cho người dùng/thị trường:** ai được hoàn tiền, sản phẩm nào bị cấm bán, điều kiện nhận bồi thường.
- **Nguồn** của mọi cáo buộc và số nhạy.

Có thì đưa: tiền lệ ("Đây không phải là lần đầu tiên…"), vụ tương tự ở hãng khác ("Không chỉ Logitech, Nintendo cũng…"), lời trích luật sư/thẩm phán/người phát ngôn, giải thích thuật ngữ pháp lý, góc Việt Nam (chỉ khi đã kiểm tra: "Kiểm tra trang của Việt Nam cũng không có gói M365 Classic"), link bài tinhte liên quan.

## 5. Đặt ảnh
- Nguồn không có hoặc ít hình chính thức (nhiều bài chính sách/gọi vốn chỉ dùng cover) thì tìm ảnh nguồn khác để minh họa hợp lý. Bản đủ có 2 ảnh trở lên hoặc video; sự kiện nhiều hơn thì ảnh dư gom `[galleria]` cuối bài.
- Mỗi H2 bắt buộc có ít nhất 1 ảnh, trước đoạn văn nó minh họa. Không lấy cover làm ảnh trong bài.
- Số ảnh: bản ngắn 2-3; bản chuẩn 5–7; bản nhiều lớp 6–12. Video YouTube khi nguồn cơn là video bóc phốt (GamersNexus với NZXT).
- Ảnh đầu thường sau 2–4 đoạn. Có H2 thì ảnh ngay dưới H2. Ảnh chứng cứ (bảng so sánh đạo nhái, screenshot email, tweet) đặt sát đoạn nói về nó.
- Chú thích khi ảnh là người hoặc nơi chốn: `[CENTER][I]Phó chủ tịch Huawei - Victor Zhang.[/I][/CENTER]` hoặc "(ảnh trên)" trong câu kế tiếp.
- Bài liên quan: `[LIST][*][URL='link tinhte']Tên bài[/URL][/LIST]` sau đoạn mở hoặc giữa bài; hoặc link xen trong câu `[URL='…']vụ kiện liên quan đến…[/URL]`.
- Ảnh ngoài chưa tải: `[IMG]url[/IMG]`. Video: `[MEDIA=youtube]id[/MEDIA]`. Không dùng lại ảnh cover trong thân bài.

## 6. Theo kiểu tin (mẫu 30 bài: kiện dân sự 11, cơ quan kiện/phạt/truy tố 6, cấm/cấm vận 8, tố cáo/bê bối 4, CEO 1)
- **Kiện dân sự, kiện tập thể, sáng chế/bản quyền:** mở bằng ai kiện ai, vì sao, đòi bao nhiêu. Dùng "Đơn kiện cáo buộc…", "Các luật sư lập luận…", "nguyên đơn nhấn mạnh…". Kể nguồn cơn ("Chuyện là vào năm 2021…"). Bản dàn xếp nêu điều kiện nhận tiền, quỹ bồi thường, cam kết thay đổi. Ví dụ: Logitech, NZXT Flex, Canon, Riot–Imba, Nokia–Oppo, GlobalFoundries–TSMC.
- **Cơ quan quản lý kiện, phạt, truy tố, tòa phán quyết:** tên cơ quan + viết tắt, căn cứ luật, mức phạt và cách tính ("lấy số người dùng nhân mức phạt tối đa"), tội danh và mức án tối đa. "Theo cáo trạng…", "bị buộc tội", "đã đồng ý nhận tội" chỉ khi đúng như vậy. Kháng cáo: nêu phán quyết cũ, lý do tòa hủy/giữ. Ví dụ: Meta 4 bang, Cadence 140 triệu đô, phi công Boeing bị truy tố, FTC–NVIDIA/ARM, Intel kháng cáo EU.
- **Lệnh cấm, cấm vận, chính sách nhà nước:** ai ban hành, phạm vi (sản phẩm mới hay cả máy đã bán), ngoại lệ, hiệu lực, lý do chính thức, phản ứng của công ty/nước bị nhắm, hệ quả cho người dùng. Ví dụ: FCC cấm drone nước ngoài; TikTok; Huawei ở Anh; Huawei hết giấy phép TGL; Trung Quốc siết tiền ảo.
- **Tố cáo, chỉ trích công khai, bê bối, rò rỉ, gian lận:** gắn rõ ai tố, qua kênh nào, bằng chứng gì; tách ý kiến cá nhân với xác nhận độc lập ("Dĩ nhiên đây chỉ là ý kiến cá nhân của Snowden… Tuy nhiên, Tom's Hardware cho rằng…"). Có xác nhận của bên thứ ba thì nêu. Ví dụ: Snowden chê RTX 50; DuckDuckGo tố Google; Stadia upscale; Chuwi "treo đầu dê bán thịt chó".
- **Cái chết, tai nạn liên quan vụ việc:** chỉ đưa kết luận của cảnh sát/cơ quan điều tra, không gợi ý thủ phạm; nghi vấn để dạng câu hỏi gắn với dư luận ("Liệu chăng… ?") và ngay sau đó ghi kết luận chính thức.
- **Sa thải, CEO bị bãi nhiệm, rút khỏi thị trường:** con số/tỉ lệ nhân sự, bộ phận bị ảnh hưởng, người thay thế, lý do hãng đưa ra, chuỗi sự cố dẫn tới quyết định. Ví dụ: Boeing sa thải Muilenburg; Microsoft cắt 9000 người.
- **Người dùng phản ứng, tẩy chay:** quyết định của hãng → phản ứng cụ thể (trích bình luận, đơn kiến nghị) → lý do hãng đưa ra → hệ quả. Có thể hỏi anh em ở cuối. Ví dụ: Sony ngừng bán đĩa; Kindle cũ; Netflix bỏ cast.
- **Hãng đấu nhau, cà khịa:** trích nguyên văn từng bên, giữ chừng mực, không đứng về phía nào. Ví dụ: Bezos kiện NASA và Musk cà khịa; Amazon–Microsoft JEDI; Google "nghỉ chơi" Scale AI.

## 7. Văn phong, pháp lý, số liệu
- **Giọng:** kể chuyện mạch lạc, khách quan, gắn nguồn; một câu nhận định ngắn sau khi đã đưa dữ liệu ("thà rằng đừng quảng cáo 4K thì đã chẳng có gì phải bàn"). Không PR, không chửi hãng, không mỉa nạn nhân.
- **Xưng hô:** đa số viết khách quan, không xưng. "Mình" khi đã tự kiểm tra hoặc trải nghiệm thật ("Mình đã thử kiểm tra trang Microsoft 365…"). "Anh em" ở câu hỏi cuối hoặc khi chạm người dùng ("anh em có để ý điều này?"). "Bạn" chỉ trong câu giải thích chung, không dùng ở đoạn cáo buộc. "Tôi" chỉ trong lời trích. Không "các bạn", không "quý độc giả".
- **Pháp lý — bắt buộc:**
  - Chưa phán quyết: "bị cáo buộc", "bị tố", "bị nghi", "được cho là", "theo đơn kiện", "theo cáo trạng". Không viết "X lừa đảo", "X ăn cắp" như sự thật; lời buộc tội nặng chỉ nằm trong ngoặc kép kèm người nói.
  - Phân biệt: nộp đơn ≠ thắng kiện; dàn xếp không có nghĩa là nhận sai (ghi nếu bên đó "phủ nhận mọi hành vi sai trái"); nhận tội, phán quyết, kháng cáo ghi đúng.
  - Luôn có phản hồi hoặc tình trạng phản hồi của bên bị cáo buộc. Cá nhân không phải nhân vật công chúng: chỉ ghi tên như nguồn đã công bố, không thêm đời tư.
  - Không tư vấn pháp lý, không đoán kết quả xử, không phán xét đạo đức.
- **Câu chuyển hay dùng:** "Cụ thể là", "Chuyện là", "Trước đó", "Hồi tháng…", "Thế nhưng", "Dù vậy", "Điều đáng nói", "Được biết", "Cho dễ hình dung thì", "Về phần mình". Đoạn 2–5 câu một ý.
- **Từ của Khoa Đinh:** "gã khổng lồ phần mềm/hàng không", "cà khịa", "treo đầu dê bán thịt chó", "sao y bản chính", "chung thuyền", "đăng đàn", "phanh phui", "vạch trần", "la ó", "rút ống thở", "nghỉ chơi", "đội xanh/đội đỏ" (Intel/AMD). Dùng vừa phải, không chồng nhiều trong một đoạn.
- **Giữ tiếng Anh:** tên vụ/chương trình (Flex, Speak Up, JEDI), Entity List (lần đầu kèm "danh sách thực thể"), dark pattern (kèm giải thích), EDA, SEP, KOL, benchmark, upscale, CEO. Thuật ngữ pháp lý viết tiếng Việt: kiện tập thể, dàn xếp, cáo trạng, bồi thẩm đoàn, phán quyết, kháng cáo, lệnh đình chỉ, nguyên đơn, bị đơn.
- **Số và tiền (theo mẫu):**
  - Phẩy thập phân, chấm hàng nghìn, khoảng trắng trước đơn vị: `3,45 triệu đô`, `19.322 khách hàng`, `923.117,92 đô`, `16 GB`, `28 nm`.
  - Tiền: mẫu dùng `đô` nhiều nhất (`140 triệu đô`), `USD` khi nhấn số rất lớn (`1,4 ngàn tỷ USD`), tiền gốc kèm quy đổi: `270 triệu bảng Anh (~350 triệu USD)`, `1,06 tỉ EUR (1,2 tỷ đô)`. Một bài chọn một kiểu (`đô` hoặc `USD`), một kiểu `tỷ` hoặc `tỉ`, giữ đến cuối. Không `$`, không `VNĐ`. Hàng nghìn tỷ viết `ngàn tỷ`.
  - Dải số: `73 - 97 triệu đô`, `40 - 50 đô`.
  - Ngày: `ngày 7 tháng 4`, `30 tháng 6`, `tháng 5, 2026`. "hôm thứ 2 vừa qua" chỉ khi đã có mốc ngày ở gần.
- **Trích dẫn:** dịch sang tiếng Việt, đặt trong ngoặc kép, kèm người nói và chức danh: `Người phát ngôn của DJI cho rằng "…"`. Không bịa lời trích.
- **Câu khép:** bước tiếp theo (kháng cáo, phiên xử, hạn chót), tiền lệ/vụ tương tự, tác động thị trường, hoặc một câu hỏi mở vừa phải ("vậy cáo buộc của DuckDuckGo liệu có đúng?"). Không H2 kết, không kết luận ai đúng ai sai khi chưa có phán quyết.

## 8. Tự kiểm tra trước khi giao
- [ ] Tít bị động gắn cáo buộc ("bị kiện/bị tố/bị nghi"), có con số khi có; không khẳng định tội chưa xử; không phẩy treo.
- [ ] Cover riêng 16:9 hoặc ~1,62, dưới 700KB, đúng một trong 5 kiểu mục 2; không ảnh chế/nạn nhân; khác ảnh đầu nếu đủ hình; không chèn cover trong bài.
- [ ] Đúng bản (ngắn / chuẩn không H2 / nhiều lớp có H2). H2 trơn, không dấu hai chấm cuối, không "Kết".
- [ ] Đủ: ai–ai, cáo buộc, tòa/cơ quan, giai đoạn, con số, mốc ngày, phản hồi bên bị, hệ quả. Mọi con số và lời trích có nguồn hoặc "chưa rõ".
- [ ] Ngôn ngữ pháp lý đúng giai đoạn; lời buộc tội nặng trong ngoặc kép có người nói.
- [ ] Giọng trung lập; "mình"/"anh em" có căn cứ; không "các bạn"; "tôi" chỉ trong trích dẫn.
- [ ] Tiền một kiểu (`đô` hoặc `USD`, `tỷ` hoặc `tỉ`), phẩy thập phân; không lỗi gõ mẫu.
- [ ] Chỉ BBCode XenForo (`[H2]`, `[B]`, `[I]`, `[LIST][*]`, `[URL='…']`, `[MEDIA]`, `[IMG]`, `[CENTER]`), không Markdown, không `[HEADING]`. 100% tiếng Việt, giữ thuật ngữ Anh thông dụng.
- [ ] Dòng nguồn cuối bài: `Theo: [URL='link'][B]Tên nguồn[/B][/URL]` (nhiều nguồn cách nhau dấu chấm phẩy). Bài mới trong mẫu chỉ để link tên báo; skill vẫn bắt buộc `Theo:` cho đồng bộ.

## 9. Đầu ra
1. Sử dụng mcp tinhte tạo bài viết trên forum 767
2. Trả kết quả là link tinhte.vn, không trả bài viết