---
name: template-tin-loi-phan-cung-va-os
description: "Viết tin \"lỗi phần cứng và OS\" cho tinhte.vn theo giọng pnghuy (Huy Nhỏ): lỗi phần cứng, quá nhiệt, pin/sạc, lỗi bản cập nhật Windows/macOS/iOS/One UI, driver, lỗ hổng bảo mật, hướng dẫn sửa lỗi, bài hỏi \"anh em có bị không\", sửa miễn phí, bảo hành; từ link hoặc chủ đề; gọi bằng /template-tin-loi-phan-cung-va-os. Viết xong đăng forum 767 và trả link theo soul."
---
Nguồn: {input}
# Template tin lỗi phần cứng và OS (tinhte.vn)

Biến link nguồn (thông báo hãng, báo nước ngoài, Reddit, diễn đàn hãng) thành bài BBCode đúng giọng pnghuy và bố cục tin lỗi trên tinhte.vn. Skill bao cả lỗi phần cứng và lỗi hệ điều hành, phần mềm (mẫu: 4/30 bài phần cứng thuần, còn lại là OS, bản vá, bảo mật, hướng dẫn sửa).

## Khi nào dùng
- Lệnh `/template-tin-loi-phan-cung-va-os <link hoặc chủ đề>`.
- Dùng cho: khiếm khuyết phần cứng, quá nhiệt, pin/sạc; lỗi bản cập nhật OS, mã KB; lỗi driver, tụt FPS, chậm SSD; lỗ hổng bảo mật trên thiết bị, chip, OS, app; hướng dẫn sửa lỗi; bài hỏi cộng đồng sau bản cập nhật lớn; tổng hợp, phân tích lỗi; sửa miễn phí, đổi máy, bảo hành; hoãn bán vì linh kiện; bản vá đã ra.
- Ranh giới:
  - Trùng chủ đề với skill Windows và smartphone của Khoa Đinh là chủ ý, để đa dạng cách viết: cùng chủ đề vẫn dùng được, skill này luôn viết giọng pnghuy.
  - Kiện tập thể, cơ quan phạt, tranh chấp bồi thường vì lỗi dùng `/template-bk9sw-drama-cong-nghe`. Chương trình sửa, đổi, thu hồi do hãng tự công bố vẫn ở đây.
  - Lỗi của mô hình AI (ảo giác, jailbreak, prompt injection) dùng `/template-tin-tuc-ai`. Ra mắt driver hay linh kiện không có lỗi dùng skill linh kiện.
  - Không dùng cho: rò rỉ dữ liệu hay tấn công vào hệ thống công ty, mẹo không gắn lỗi, tính năng mới thuần, trên tay, đánh giá. Gặp dạng khác thì báo lại và dùng `/viet-tin`.

## Quy trình
1. Đọc hết nguồn trong `{input}`. Mở thông báo gốc của hãng (release health, CVE, post gốc) để đối chiếu thiết bị, phiên bản, KB, build, trạng thái. Nguồn báo lệch hãng thì lấy theo hãng.
2. Kiểm tra chéo ít nhất một nguồn khác với lỗi mất dữ liệu, hỏng phần cứng, cháy nổ, bảo mật, hoặc báo cáo chưa được hãng xác nhận.
3. Xác định: (a) kiểu lỗi (mục 7), (b) trạng thái xác nhận (mục 5), (c) dạng bài (mục 3), (d) nền tảng: Windows (KB, build, OOB/Patch Tuesday), Apple (build, RC, AppleCare), Samsung (bản bảo mật tháng, Samsung Members), Pixel, driver NVIDIA/AMD/Intel.
4. Lấy đủ dữ liệu mục 4. Thiếu thì ghi "chưa rõ" hoặc "hãng chưa công bố", không suy diễn, không bịa số liệu, mã KB, build, CVE.
5. Chọn cover, viết tiêu đề và thân bài theo khung dưới, rồi chạy mục 9. Hình cover và hình đầu tiên trong bài không được trùng nhau.
6. Tự rà lại: đúng số liệu, đúng tên máy, phiên bản, mã KB, build, đường dẫn Settings, không lỗi chính tả, không câu tiếng Anh thừa.
7. Tải và chèn ảnh, đăng bài, trả link: theo mục Đầu ra.
8. Gửi kết quả link tinhte.vn cho @mauscheck và gọi skill /mauscheck bằng `coordinate_bots` tới mauscheck với `thread: "new"` (mỗi lần kiểm tra mở một thread mới), nội dung `/mauscheck <link bài> <link nguồn chính> template-tin-loi-phan-cung-va-os`.

## 1. Tiêu đề
Số liệu mẫu: dài 47–100 ký tự (trung vị 78); 21/30 có chữ "lỗi"; 14/30 hai vế nối dấu phẩy; 7/30 là câu hỏi; 6/30 mở bằng "Hướng dẫn"/"Cách sửa lỗi"; chỉ 1/30 có dấu hai chấm.
- **Tin lỗi:** `[Thiết bị/OS/bản cập nhật] [gặp lỗi/bị/gây] [triệu chứng], [trạng thái hoặc hệ quả]`, như `iMac M1 hết bảo hành tự nhiên bị sọc màn hình, Apple chưa chính thức lên tiếng`.
- **Hãng xác nhận** (kiểu bài 2026): `[Hãng] xác nhận lỗi [X] trên [Y], [chưa hẹn ngày sửa / người dùng gặp lỗi được đổi máy mới]`.
- **Đã vá / sắp vá:** `Lỗi giảm hiệu năng chơi game trên Windows 11 22H2 sắp được vá`.
- **Hỏi cộng đồng:** `Anh em lên [OS + phiên bản] chưa, [hiệu năng/pin] thế nào, có lỗi không?`; `[Máy] bị than phiền vì [triệu chứng], anh em có bị không?`.
- **Hướng dẫn:** `Hướng dẫn khắc phục lỗi "[tên lỗi]" trên [OS]`; `Cách sửa lỗi [triệu chứng] trên [OS + phiên bản]`.
- **Bảo mật:** `Lỗ hổng trong [thành phần] cho phép [hậu quả]`; `Phát hiện lỗ hổng [mức độ] trong [chip/OS]`.
- **Phân tích/tổng hợp:** `Vì sao [OS] càng cập nhật càng nhiều lỗi?`; `Tổng hợp một số lỗi trên [OS] … (và cách sửa)`.
- Trạng thái trong tít phải khớp nguồn: "chưa chính thức lên tiếng", "im lặng", "xác nhận", "đã sửa", "sắp được vá". Chưa xác nhận thì dùng "bị than phiền", "người dùng phản ánh", "có thể", không viết như hãng đã nhận lỗi. Tít đính chính tin lan truyền: `Đèn flash Galaxy S26 có thể làm chảy nhựa, nhưng không chỉ riêng Samsung`.
- Viết đúng tên máy, phiên bản, mã KB. Không từ giật gân, dấu chấm than, hai dấu hai chấm.

## 2. Ảnh cover
- Cover là file riêng, không chèn lại trong thân bài (30/30 mẫu). Khung ngang, mẫu 2048x1268 hoặc 2048x1365, dưới 700KB.
- Ưu tiên khi chọn:
  1. Lỗi phần cứng: ảnh thật cho thấy lỗi (sọc, vết nứt, nhựa chảy) từ nguồn, hoặc ảnh sản phẩm chính thức nếu ảnh lỗi mờ, có watermark.
  2. Lỗi OS, bản vá, hướng dẫn: screenshot thông báo lỗi, Windows Update, Settings sạch, hoặc key visual của OS.
  3. Bảo mật, driver: ảnh thiết bị, chip, GPU hoặc logo thành phần bị ảnh hưởng; không ảnh hacker đội mũ trùm.
- Không lấy ảnh meme, ảnh chụp màn hình có tên hay email người dùng, ảnh watermark báo khác.
- **Cover tạo bằng AI** (được phép khi nguồn không có ảnh đủ tốt: thiếu ảnh, ảnh nhỏ, mờ, watermark, chỉ có ảnh dọc):
  - Khung ngang 16:9 hoặc khoảng 2048x1268, dưới 700KB.
  - Prompt tả thực: đúng thiết bị hoặc giao diện trong bài và đúng triệu chứng (sọc màn hình, game giật, màn hình xanh), kiểu ảnh chụp, ánh sáng tự nhiên.
  - Không logo giả, không chữ hay số liệu trên ảnh, không hư hỏng nặng hơn nguồn mô tả, không người thật, không giả làm ảnh hiện trường.
  - Cuối bài, sau dòng `Theo:`, thêm dòng như mẫu: `[I][B]Hình cover: [tên công cụ AI].[/B][/I]` (mẫu ghi `Hình cover: Gemini Nano Banana Pro.`).
- Ảnh đầu thân bài là góc khác: screenshot lỗi, ảnh người dùng gửi.

## 3. Bố cục và các mục H2
**Tin ngắn** (250–700 từ, không H2; 17/30 mẫu không H2): tin lỗi, bản vá, bảo mật, hoãn bán, sửa miễn phí.
Đoạn mở (ai phát hiện/thông báo, thiết bị, phiên bản, triệu chứng, trạng thái) → chi tiết (điều kiện, quy mô, số liệu đo, nguyên nhân nếu biết) → phản hồi hãng và cách xử lý tạm → bối cảnh lỗi tương tự trước đó kèm `[preview]` → câu khép (người dùng nên làm gì hoặc hỏi anh em).
Tin ngắn thường chỉ có cover (14/30 mẫu không ảnh thân bài); có ảnh hay video từ nguồn thì đặt sau đoạn 1–2.

**Tin dài hoặc phân tích** (800–1.500 từ, 3–4 H2): chuỗi lỗi nhiều bản vá, lỗ hổng phức tạp. H2 dạng câu hỏi, như mẫu:
- `Chuyện gì đã xảy ra?` → `Vậy [hãng] có thể làm được gì?` → `Người dùng có nên lo lắng về lỗ hổng này hay không?` → `Lỡ cài đặt bản patch mà bị lỗi thì làm sao để roll back?`

**Hướng dẫn sửa lỗi** (350–1.400 từ, 7/30 mẫu): mở bằng triệu chứng và lỗi xảy ra khi nào, 1 câu "trong bài này mình sẽ chia sẻ với anh em…". Chia trường hợp hoặc từ dễ đến khó, mỗi cách một H2: `Lỗi … là gì?` → `Tại sao lỗi này xảy ra?` → `Cách sửa lỗi …` (H3 cho từng biến thể) → `Cách tránh lỗi trong tương lai`. Các bước dùng `[LIST]`, mỗi bước một thao tác, screenshot ngay sau bước tương ứng.

**Hỏi cộng đồng** (350–1.400 từ, 5/30 mẫu): bản cập nhật phát hành cho ai, từ khi nào, tính năng chính (vài dòng hoặc H2 `Lộ trình triển khai`, `Tính năng mới và cải tiến nổi bật`), H2 `Các lỗi và sự cố đã biết` khi hãng có danh sách, trải nghiệm thật nếu có, mời anh em chia sẻ.

**Tổng hợp lỗi**: mỗi lỗi một H2 mang tên lỗi (`Lỗi Wi-Fi No Internet Access`), dưới là ảnh, mô tả, cách sửa.

H2 trơn `[H2]Tiêu đề[/H2]`: không lồng `[B]` (mẫu cũ hay có), không rỗng, không đánh số, không lấy câu dẫn làm H2. Không mục "Kết"/"Tạm kết" (chỉ 1/30 mẫu có).

## 4. Nội dung bắt buộc
Luôn có (thiếu thì ghi "chưa rõ" hoặc bỏ):
- **Phạm vi:** model, chip, phiên bản OS, build, KB, driver hay app, khu vực; cả bản *không* bị ảnh hưởng khi nguồn có.
- **Triệu chứng:** mô tả cụ thể, điều kiện tái hiện, số liệu đo kèm người đo ("từ 120–140 FPS xuống 40–70 FPS", "tốc độ ghi 5 MB/s"). Con số suy ra thì ghi "con số lý thuyết".
- **Quy mô và ai báo cáo:** Reddit, Samsung Members, Apple Community, X, báo, nhà nghiên cứu; số bình luận nếu có; "một số", "số lượng nhỏ" đúng lời nguồn.
- **Trạng thái:** người dùng phản ánh / hãng đang điều tra / hãng đã xác nhận / đã có bản vá (mục 5).
- **Nguyên nhân:** hãng nói gì; giả thuyết (chuyên gia, iFixit) ghi rõ là giả thuyết, kèm người nêu.
- **Cách xử lý:** bản vá (mã, ngày, cách cập nhật), cách tạm thời kèm cái giá phải trả (mất vá bảo mật, tắt FreeSync, giảm hiệu năng), cách kiểm tra máy mình có bị không.
- **Phản hồi chính thức:** trích hoặc tóm tuyên bố, người phát ngôn, nơi đăng; chưa có thì ghi "hiện [hãng] chưa đưa ra xác nhận chính thức".
- **Bảo hành, sửa chữa:** sửa miễn phí, đổi máy, thời hạn, model và khoảng sản xuất áp dụng, hoàn tiền, chi phí khi hết bảo hành. Chỉ nói Việt Nam có áp dụng khi đã kiểm tra trang hãng tại Việt Nam.
- **Bảo mật:** CVE, điểm mức độ (`8,1/10`), loại lỗi giải thích 1 câu, điều kiện khai thác (truy cập vật lý, cài app độc, zero-click), đã bị khai thác thực tế chưa, vá ở phiên bản nào.
- Dòng nguồn `Theo:` cuối bài.

## 5. Trạng thái xác nhận và thận trọng
- Tách rõ 4 mức, không trộn: **người dùng phản ánh**, **đang điều tra** ("AMD xác nhận đây là vấn đề thực sự và đang được điều tra"), **đã xác nhận**, **đã vá** (kể cả "dù Microsoft không đề cập là bản sửa lỗi").
- Báo cáo đơn lẻ không viết thành lỗi diện rộng; ghi "chưa rõ đây là vấn đề cục bộ hay lỗi sản xuất".
- Không kết luận "lỗi thiết kế", "hàng lỗi", "Apple cố tình" nếu hãng hay chuyên gia có tên chưa nói vậy. Lời buộc tội nặng phải trích và ghi người nói.
- Tin lan truyền mạng xã hội: tìm thử nghiệm độc lập, nói rõ khi không riêng một hãng hay là hành vi vật lý bình thường.
- Workaround can thiệp hệ thống (gỡ KB, Registry, tắt Gatekeeper, Terminal `sudo`) phải nêu rủi ro ngay trước hoặc sau bước đó; gỡ bản vá bảo mật không phải lời khuyên mặc định.
- Bảo mật: không viết cách khai thác chi tiết, không link mã khai thác; hướng dẫn chỉ ở mức cập nhật, kiểm tra, giảm rủi ro.
- Cháy nổ, pin phồng: khuyên ngưng dùng và liên hệ hãng, không hướng dẫn tự tháo pin.

## 6. Đặt ảnh
- Nguồn không có hoặc ít hình chính thức (nhiều bài chính sách/gọi vốn chỉ dùng cover) thì tìm ảnh nguồn khác để minh họa hợp lý. Bản đủ có 2 ảnh trở lên hoặc video; sự kiện nhiều hơn thì ảnh dư gom `[galleria]` cuối bài.
- Mỗi H2 bắt buộc có ít nhất 1 ảnh, trước đoạn văn nó minh họa. Không lấy cover làm ảnh trong bài.
- Số ảnh: tin ngắn 4-5, tin dài 5-7, hướng dẫn 6–12 (mỗi bước quan trọng một screenshot), hỏi cộng đồng 3–5, tổng hợp mỗi H2 một ảnh.
- Ảnh đầu: sau đoạn mở 1–2, hoặc ngay dưới H2 đầu. Bài có H2 thì ảnh ngay dưới H2 hoặc sau câu dẫn.
- Screenshot lỗi, cửa sổ Settings đặt ngay sau câu mô tả nó. Ảnh người dùng gửi gom `[galleria]` cuối bài, câu dẫn "Một số hình ảnh … của người dùng gặp lỗi:". Video thử nghiệm `[MEDIA=youtube]id[/MEDIA]` sau đoạn mở.
- Ảnh từ diễn đàn hay báo ghi `[I]Ảnh: [nguồn][/I]`. Che tên, email, serial.
- Bài Tinh tế liên quan dùng `[preview]link[/preview]` (13/30 mẫu), đặt ở đoạn bối cảnh hoặc cuối bài, tối đa 3.

## 7. Theo kiểu lỗi
- **Khiếm khuyết phần cứng:** triệu chứng, sau bao lâu dùng, còn bảo hành không, người dùng đã thử gì, chi phí sửa; lỗi cũ của dòng máy (Flexgate) bằng `[preview]`.
- **Quá nhiệt, pin, sạc:** công suất, chuẩn sạc (45W, PPS), % pin người dùng đo sau thời gian sạc; firmware khẩn cấp nếu có; khuyến cáo an toàn.
- **Lỗi bản cập nhật OS:** KB, build, phiên bản bị ảnh hưởng, triệu chứng, hãng đã ghi vào known issues chưa, bản sửa (OOB, Patch Tuesday), cách tạm. Lỗi gõ tiếng Việt là góc riêng cho người dùng Việt Nam.
- **Driver, game:** GPU, phiên bản driver, game, FPS trước/sau, hệ thống không bị; bên nào vá trước (NVIDIA hotfix 581.94 khi Microsoft im lặng).
- **Lỗ hổng bảo mật:** ai phát hiện, đã báo hãng từ khi nào, thiết bị và phiên bản, mức nguy hiểm thực tế, đã vá chưa; lời khuyên: cập nhật, cài app nguồn rõ ràng.
- **Hướng dẫn sửa lỗi:** giải thích lỗi là gì, vì sao, rồi từ cách đơn giản đến phức tạp, cuối bài cách tránh lỗi. "Chúc anh em thành công" được phép một lần.
- **Hỏi cộng đồng "anh em có bị không":** lỗi đã ghi nhận kèm nguồn, máy mình đang dùng và trải nghiệm thật nếu có, câu hỏi cụ thể (pin, BSOD, hiệu năng), mời bình luận.
- **Sửa miễn phí, thu hồi, bảo hành:** thời hạn mới so với cũ, cách đăng ký, nơi mang máy đến; Việt Nam chỉ khi đã kiểm tra (hàng xách tay, chuyển vùng bảo hành).
- **Hoãn bán vì linh kiện:** lời phát ngôn viên, linh kiện nào (hoặc "chưa tiết lộ"), lịch mới.
- **Phân tích "vì sao lỗi nhiều":** dẫn người có chuyên môn bằng tên và vai trò, tách nhận định với dữ kiện.

## 8. Văn phong
- **Xưng hô:** tin ngắn, bảo mật, hãng xác nhận viết khách quan, không "mình" (bài 2026 không có). "Mình" chỉ khi có trải nghiệm thật ("thiết bị mình đang dùng là Galaxy S25+"), tin thường tối đa 3 lần; hướng dẫn và bài cộng đồng được nhiều hơn nếu là thao tác thật. "Anh em" là chính trong hướng dẫn và câu mời. "Bạn" theo đúng thói quen pnghuy (13/65 bài mẫu): trong bài hướng dẫn ("Bạn vừa tải một ứng dụng mới…", 25 lần ở bài macOS), câu giải thích ("bạn có thể hiểu một cách đơn giản…") và lời khuyên trực tiếp ("Nếu đang định mua Pixel 9a thì bạn phải chờ…"); không cần đổi "bạn" thành "anh em". Bài hướng dẫn chọn "anh em" hoặc "bạn" làm chủ đạo, câu mời bình luận vẫn dùng "anh em". Không "tôi", "quý độc giả"; không "các bạn" (0/65 bài mẫu).
- **Mở bài pnghuy:** "Microsoft vừa phát đi một thông báo cho biết…", "Có ít nhất hai chủ đề trên Samsung forum và Reddit nói về…", "Câu chuyện bắt đầu từ một bài post của…", "[Hãng] vừa xác nhận có lỗi ảnh hưởng tới…".
- **Câu nối:** "Theo ghi nhận,", "Cụ thể,", "Đáng chú ý,", "Điểm bất thường là…", "Hiện vẫn chưa rõ…", "Như vậy, ở thời điểm hiện tại, giải pháp thực tế nhất là…".
- **Câu khép:** "Không biết anh em dùng [máy] tại Việt Nam có bị lỗi này hay không, bình luận ở dưới cùng thảo luận nha anh em.", hoặc lời khuyên thực tế.
- **Bình luận nhẹ** (tối đa 2 câu, chỉ khi lỗi đã xác nhận): "sự ổn định đang dần trở nên xa xỉ".
- **Tránh:** "thảm hoạ", "kinh hoàng", "báo động đỏ", dấu chấm than, emoji (mẫu cũ có ":D", "hihi"), câu đùa tắt bảo mật để cài phần mềm lậu, câu PR, lỗi gõ trong mẫu ("Telementry", "WWi-Fi"), ký hiệu trích dẫn sót kiểu `[23]`.
- **Giữ tiếng Anh:** bug, patch, hotfix, driver, build, rollback, BSOD, FPS, stutter, SSD NVMe, firmware, zero-click, known issue, OOB, Patch Tuesday, Insider, RC, Gatekeeper, Terminal, Registry; tên menu, nút, đường dẫn như trên máy.
- **Viết tiếng Việt:** lỗ hổng bảo mật, bản vá, màn hình xanh, quá nhiệt, thay thế miễn phí.
- **Định dạng:** đường dẫn `Settings > Windows Update > Update history` (một kiểu `>`, bỏ `→`), phím tắt `Windows + R`, `Ctrl + Shift + Esc`, lệnh để dòng riêng nguyên văn (có thể bọc `[info]…[/info]` như mẫu, không `[CODE]`), tên nút in đậm `[B]Uninstall[/B]`. Mã KB, build giữ nguyên (`KB5078127`, `22000.176`). Số: `5 MB/s`, `432 GB`, `8,1/10`, `45W`, `600 USD`, ngày `24/1/2026`. Mỗi bài một kiểu tiền.
- **Dòng nguồn bắt buộc cuối bài:** `Theo: [URL='link'][B]Tên nguồn[/B][/URL]`, nhiều nguồn cách nhau dấu phẩy, ưu tiên thông báo gốc của hãng. Bắt buộc ở mọi bài, kể cả hướng dẫn và bài hỏi cộng đồng (ghi tài liệu hãng hoặc nguồn tham khảo); mẫu chỉ 16/30 bài có, skill chuẩn hoá như các skill khác.

## 9. Tự kiểm tra trước khi giao
- [ ] Tít đúng dạng bài, 50–100 ký tự, trạng thái khớp nguồn, không giật gân.
- [ ] Cover đúng ưu tiên (AI chỉ khi nguồn thiếu ảnh tốt), khung ngang, dưới 700KB, khác ảnh đầu thân bài, không lộ dữ liệu cá nhân.
- [ ] Đủ nội dung mục 4; cách xử lý có kèm rủi ro.
- [ ] Bốn mức trạng thái không bị trộn; giả thuyết có người nêu; không bịa mã KB, CVE, số liệu.
- [ ] H2 trơn, không `[B]`, không rỗng, không mục "Kết"; tin ngắn không H2.
- [ ] Xưng hô đúng mục 8, không "tôi", "các bạn", emoji, từ trong danh sách tránh.
- [ ] Chỉ BBCode XenForo (`[H2]`, `[H3]`, `[B]`, `[I]`, `[LIST]`, `[URL]`, `[galleria]`, `[MEDIA]`, `[preview]`, `[info]`), không Markdown, không `[HEADING]`. 100% tiếng Việt, giữ thuật ngữ Anh thông dụng.
- [ ] Có dòng `Theo:` cuối bài; cover AI thì thêm dòng `Hình cover: …`.

## 11. Đầu ra
Theo soul: `create_thread` ở forum 767 (ảnh theo soul), trả tiêu đề và link, không in bài. Bàn giao mauscheck: theo bước cuối mục Quy trình.
