---
name: template-tin-tuc-ai
description: Viết tin tức AI cho tinhte.vn (ra mắt mô hình, cập nhật, tính năng mới, benchmark, chính sách/kinh doanh, giá gói, có mặt tại VN) từ link hoặc chủ đề; gọi bằng /template-tin-tuc-ai.
---

# Template tin tức AI (tinhte.vn)

Biến link nguồn (blog hãng, thông cáo, keynote, báo nước ngoài) thành bài BBCode đúng giọng và bố cục tin AI trên tinhte.vn.

## Khi nào dùng
- Lệnh `/template-tin-tuc-ai <link hoặc chủ đề>`.
- Tin đã công bố: ra mắt mô hình/sản phẩm AI; cập nhật hoặc ngừng hỗ trợ phiên bản; tính năng AI mới trong app/dịch vụ; nghiên cứu hay benchmark do hãng/tổ chức công bố; chính sách, tố cáo, gọi vốn, IPO; đổi giá/gói; có mặt tại VN hoặc tiếng Việt; tổng hợp sự kiện (Google I/O…); phát ngôn lãnh đạo.
- Không dùng cho: hướng dẫn, trên tay/trải nghiệm, review, phân tích ý kiến dài, tin đồn chưa được hãng xác nhận. Chip/linh kiện thuần thông số dùng `/template-ra-mat-linh-kien-pc`; chỉ dùng skill này khi góc viết là năng lực AI (LLM trên máy, NPU, agent). Dạng khác thì báo lại và dùng `/viet-tin`.

## Quy trình
1. Đọc hết nguồn trong `{input}`. Mở thêm trang/blog chính thức của hãng để đối chiếu tên mô hình, gói, giá token, ngày và thị trường. Báo và hãng lệch nhau thì lấy theo hãng, bỏ thông tin khác hãng.
2. Kiểm tra chéo thêm một nguồn nếu tin quan trọng (tố cáo, định giá, benchmark).
3. Xác định: (a) thể loại tin (mục 6), (b) hãng (mục 7), (c) một sản phẩm, nhiều tính năng hay tổng hợp sự kiện, từ đó chọn bản ngắn, đầy đủ hoặc tổng hợp (mục 3).
4. Lấy đủ dữ liệu theo mục 4. Thiếu thì bỏ qua hoặc ghi "chưa công bố"/"chưa rõ"; không suy diễn, không bịa benchmark, giá, ngày hay khả năng.
5. Viết bài.
6. Tải hình trong các nguồn tham khảo để minh hoạ cho nội dung bài.
7. Hình tải về lưu tại /Users/khang/AI/tinhte-uploads
8. Chọn cover, viết tiêu đề và thân bài theo khung dưới, rồi chạy mục 10. Cover và hình đầu tiên trong bài không được trùng nhau.
9. Đặt hình vào bài bằng mcp tinhte, ở các vị trí hợp lý.
10. Tự rà: đúng số liệu, tên mô hình/gói/API, chính tả.
11. Sử dụng mcp tinhte tạo bài viết trên forum 767
12. Trả kết quả là link tinhte.vn, không trả bài viết
13. Gửi kết quả link tinhte.vn cho @mauscheck và gọi skill /mauscheck bằng `coordinate_bots` tới mauscheck với `thread: "new"` (mỗi lần kiểm tra mở một thread mới)

## 1. Tiêu đề
Công thức phổ biến (17/30 bài mẫu có dấu hai chấm, trung vị 85 ký tự, dài 40–99):
`[Hãng] ra mắt [sản phẩm/mô hình/tính năng]: [điểm nhấn 1], [điểm nhấn 2]`
- Điểm nhấn ưu tiên: thay đổi người dùng cảm nhận được (tốc độ, bớt “bịa”, swarm, kết nối ngân hàng) → đối tượng hoặc gói (Max, Pro, doanh nghiệp) → giá token hoặc chi phí so với đối thủ → thị trường/ngày nếu là điểm chính.
- Dài 60–100 ký tự, 2–3 điểm nhấn. Tin rất gọn (phát hành app) có thể 40–60 ký tự. Không dấu phẩy hay "..." treo cuối, không hai dấu cách liền.
- Biến thể có trong mẫu:
  - Tên sản phẩm đứng đầu: `Claude Cowork: trợ lý AI có khả năng thực thi tác vụ…`, `Perplexity Computer: …`, `Androidify: …`.
  - Sự kiện: `Google I/O 2026: [chủ đề] là gì?`, `Google I/O 2026 và tất cả những gì bạn cần biết: [các điểm chính]`.
  - Cập nhật hệ sinh thái: `Pixel Drop tháng 3/2026: [tính năng 1], [tính năng 2], [tính năng 3]`.
  - So sánh/nâng cấp: `[Tên] vừa ra mắt có nâng cấp gì so với [đời trước]?`
  - Câu hỏi khi tin còn bỏ ngỏ: `Anthropic ra mắt bộ office…, liệu người dùng sẽ từ bỏ Microsoft Office?` Không đặt tít hỏi khi tin đã chốt.
  - Báo cáo/điều tra: `Báo cáo: [hiện tượng], [hệ quả]`.
  - Phát ngôn: `[Hãng] CEO [Tên]: [ý chính]`.
  - Động thái chính sách: `[Hãng] tố/chặn/buộc/ngừng hỗ trợ [đối tượng], [hệ quả]`.
- Động từ đúng sự kiện: "ra mắt", "giới thiệu", "công bố", "phát hành", "thử nghiệm", "ngừng hỗ trợ", "tố", "chặn". Không "siêu phẩm", không viết hoa cả cụm.

## 2. Ảnh cover
- Cover là ảnh riêng gắn làm thumbnail, không lặp trong thân bài (0/30 bài mẫu dùng cover làm ảnh đầu). Ưu tiên ngang 16:9 (20/30; 1600×900, 1920×1080, 2096×1182); chấp nhận 3:2 hoặc ~2:1 (header blog). Ảnh vuông/4:3 cắt về 16:9 hoặc 3:2. Dưới 700KB, jpg/png/webp.
- Thứ tự ưu tiên khi chọn từ nguồn:
  1. Key visual hoặc header blog chính thức có tên mô hình/sản phẩm (thường đặt tên file `cover-…`).
  2. Ảnh giao diện hoặc sản phẩm chính thức, nằm trọn khung, không che chữ dày.
  3. Sự kiện (I/O, diễn đàn tại VN): ảnh sân khấu hoặc key visual sự kiện, thấy rõ tên hãng.
- Không lấy ảnh watermark, meme, render tin đồn, slide chữ dày, ảnh phát biểu (trừ khi tin chính là phát ngôn và không có visual khác).
- Ảnh đầu thân bài phải khác cover: biểu đồ benchmark, screenshot tính năng, khung hình demo.

## 3. Bố cục và các mục H2
**Bản ngắn/chuẩn không H2 (15/30 bài mẫu, 325–900 từ):** một mô hình, một tính năng, hoặc tin chính sách nguồn mỏng. Mở bài → các đoạn theo ý (định vị, cách hoạt động, số liệu, giá/gói, giới hạn, ngày và thị trường) xen ảnh/video nếu có → câu khép → dòng nguồn. Không thêm H2 cho đủ.

**Bản đầy đủ (2–5 H2, khoảng 600–1.000 từ):** mô hình flagship, tính năng phức tạp, đổi chính sách ảnh hưởng người dùng, tin có nhiều lớp.
1. Mở bài không H2, 1–2 đoạn: câu đầu "[Hãng] vừa giới thiệu/công bố/ra mắt [tên đầy đủ], [định vị], [điểm nhấn lớn nhất]". Đoạn 2: gói, nền tảng, thị trường, ngày có mặt.
2. Video hoặc demo của hãng `[MEDIA=youtube]id[/MEDIA]` (hoặc `[preview]` clip trên trang hãng) nếu có.
3. Các `[H2]` theo ý, từ quan trọng nhất trở xuống. Thường gặp:
   - "[Tên] là gì?" hoặc cách hoạt động
   - Năng lực/hiệu năng so với đời trước hoặc đối thủ (chỉ số hãng công bố)
   - Giá, gói, khả năng tiếp cận
   - Bảo mật và quyền riêng tư (khi tính năng đụng dữ liệu cá nhân)
   - So với đối thủ / tác động với người dùng
4. Khép bằng đoạn thường. Không bắt buộc H2 kết. Mẫu thưa có "Tổng kết", "Góc nhìn" hoặc "Anh em nên làm gì?" (bài cảnh báo); chỉ dùng khi thật sự cần, không thêm cho đủ.

**Bản tổng hợp sự kiện (nhiều H2, 800–2.200 từ):** mở bài nêu sự kiện, câu định vị và 1–2 số liệu khung nếu hãng công bố, rồi mỗi sản phẩm hoặc tính năng một H2 mang đúng tên ("Gemini 3.5 Flash", "Antigravity 2.0").

Đặt tên H2: đưa tên tính năng, câu hỏi ngắn hoặc con số vào ("Agentic Vision là gì?", "Giá cả và khả năng tiếp cận"). Dùng `[H2]Tiêu đề[/H2]` trơn, không lồng `[B]`, không nhét ảnh vào trong thẻ H2, không H2 rỗng, không đánh số. `[H3]` chỉ khi mục con thật cần.

## 4. Nội dung bắt buộc
Luôn có (thiếu thì ghi "chưa công bố"/"chưa rõ" hoặc bỏ qua):
- Hãng, tên sản phẩm/mô hình/tính năng đúng cách viết của hãng, ngày hoặc sự kiện công bố.
- Đây là cái gì, dành cho ai, khác gì đời trước hoặc sản phẩm song song (Flash/Pro, Instant/Thinking, Cowork/Code, Argon/Carbon).
- Cách dùng: nền tảng (app, web, API, desktop, Vertex, Antigravity), gói (Free, Plus, Pro, Max, Ultra, Enterprise, Edu), thị trường, ngày có mặt. Với người dùng Việt Nam: đã có, sắp có hay "hiện chưa khả dụng".
- Giới hạn và điều nó không làm (chỉ đọc, không tư vấn đầu tư, chưa có Windows, không dùng để huấn luyện mô hình…).
- Giá nếu là điểm của tin: USD mỗi 1 triệu token (đầu vào/đầu ra), giá gói tháng, hoặc "chưa rõ khi nào mở cho gói miễn phí".

Có thì đưa vào:
- Số benchmark do hãng hoặc tổ chức độc lập công bố, luôn ghi tên bài test (GDPval, SWE-Bench, GPQA Diamond, Humanity’s Last Exam, Artificial Analysis, OSWorld, SEC-bench…) và cụm "theo [hãng]/theo công bố". Không tự thêm hay quy đổi điểm.
- Cơ chế bảo mật, quyền kết nối, đối tác trung gian (Plaid, MCP).
- Tên API (`gpt-5.3-chat-latest`), chế độ (Thinking, Instant), hạn mức/legacy và ngày ngừng hỗ trợ.
- `[preview]` bài tinhte liên quan hoặc "Mời anh em đọc thêm:" trước thẻ preview.
- Tác động với người dùng VN (phải cập nhật app trước ngày nào, tính năng chưa có tại VN).

## 5. Đặt ảnh
- Nguồn không có hoặc ít hình chính thức (nhiều bài chính sách/gọi vốn chỉ dùng cover) thì tìm ảnh nguồn khác để minh họa hợp lý. Bản đủ có 2 ảnh trở lên hoặc video; sự kiện nhiều hơn thì ảnh dư gom `[galleria]` cuối bài.
- Mỗi H2 bắt buộc có ít nhất 1 ảnh, trước đoạn văn nó minh họa. Không lấy cover làm ảnh trong bài.
- Bản đủ 4–8 ảnh hoặc video; sự kiện nhiều hơn thì ảnh dư gom `[galleria]` cuối bài.
- Ảnh đặt ngay dưới H2 hoặc sau đoạn mở, trước đoạn văn nó minh họa. Không lấy cover làm ảnh trong bài.
- Ưu tiên: biểu đồ benchmark của hãng, screenshot tính năng, khung demo, schema kết nối.
- Ảnh lấy từ báo nước ngoài mà chưa tải lên được: `[IMG]url[/IMG]` rồi `[I]Ảnh: Windows Latest.[/I]` (hoặc tên nguồn).
- Video hãng: `[MEDIA=youtube]id[/MEDIA]` hoặc `[video]id[/video]` sau đoạn mở. Ảnh landscape, dưới 700KB.
- Có thể tạo ảnh minh họa (so sánh giá token, mốc ngừng hỗ trợ) khi nguồn không có hình. Không dựng screenshot giả.

## 6. Theo thể loại tin
- **Ra mắt mô hình/sản phẩm:** định vị trong dòng (Flash/Pro, Sol/Terra/Luna, Carbon/Argon), năng lực mới, benchmark kèm tên bài, giá token, nơi có mặt (app, API, Search, Vertex), mô hình mặc định thay cái nào. Đối thủ chỉ khi hãng hoặc nguồn nêu. Có thể một câu về chiến lược giá nếu nguồn có số.
- **Cập nhật/phiên bản, ngừng hỗ trợ:** cái gì đổi với người dùng hiện tại, ngày cắt, dữ liệu/lịch sử có được giữ không, hạn mức mới, việc cần làm (cập nhật app). Nêu cả phần chưa đổi (Codex vẫn tách, Instant không tính hạn mức…).
- **Tính năng AI mới trong app/dịch vụ:** mô tả việc người dùng làm được, quyền và dữ liệu nào được lấy, mặc định tắt hay bật, giới hạn, gói và thị trường, rủi ro hãng thừa nhận (beta có thể suy luận sai). Có thể so một đoạn với đối thủ cùng kiểu (Cowork so Operator, Pantheon so Recall) khi nguồn đủ căn cứ.
- **Nghiên cứu/benchmark:** chỉ thuật lại số đã công bố, tên bộ đo, điều kiện (có/không tool, có web). Không suy ra "mạnh nhất mọi mặt" nếu nguồn chỉ đứng đầu một chỉ số.
- **Chính sách, tố cáo, kinh doanh, gọi vốn, IPO:** nêu cáo buộc và phía bị nêu (bác bỏ, chưa bình luận) thành hai lớp rõ; số định giá, doanh thu, lỗ phải có nguồn; không biến nhận định thành sự thật. Khép bằng hệ quả cho người dùng hoặc thị trường, không kết án.
- **Đổi giá/gói:** giá cũ nếu có, giá mới theo đơn vị token hoặc gói tháng, gói nào bị ảnh hưởng, so với đối thủ chỉ khi nguồn nói.
- **Có mặt tại VN / tiếng Việt / sự kiện local:** ngày, nơi, đối tác, người dùng nào dùng được ngay; tránh hứa tính năng toàn cầu đã có tại VN khi nguồn không nói.
- **Tổng hợp sự kiện:** như bản nhiều H2 ở mục 3; mỗi H2 tự đủ ý, không giả định độc giả đã đọc mục khác.
- **Phát ngôn lãnh đạo:** trích ý, nêu bối cảnh (sự kiện, bài trên X, phỏng vấn), không viết thành thông cáo sản phẩm nếu chưa có sản phẩm.

## 7. Theo hãng
- **OpenAI / ChatGPT / GPT:** gọi đúng phiên bản (GPT-5.3 Instant, GPT-5.6 Sol/Terra/Luna) và gói. Hay nhấn trải nghiệm trò chuyện, giảm hallucination, agent "làm việc thật" (Work, Codex), API và Legacy Models. So Gemini hoặc Claude khi nguồn nêu. Viết rõ ngày ngừng hỗ trợ và hạn mức chung nếu có.
- **Google / Gemini:** gọi đúng dòng (Flash, Pro, Argon, Carbon) và chỗ cắm (app Gemini, AI Mode trên Search, Vertex AI, AI Studio, Antigravity, Workspace). Thường có giá token cạnh tranh, Personal Intelligence/quyền riêng tư, sự kiện I/O. Phân biệt mô hình hàng ngày và mô hình "bài toán khó".
- **Anthropic / Claude:** tách Cowork (người dùng cuối, file local, Max, macOS) và Code (lập trình). Tính năng tài chính/office: nhấn chế độ đọc, trình kết nối, thị trường Mỹ, không thay thế phần mềm chuyên dụng. Tin an toàn: thuật lại ranh giới (bản quyền game, không huấn luyện trên chat nhạy cảm) và việc hãng nói sẽ còn chỉnh.
- **Microsoft / Copilot / Windows:** Pantheon, Recall, Hybrid Intelligence, Copilot trên Windows; nói rõ đang thử nghiệm hay đã phát hành, cần NPU hay không. Phát ngôn (Nadella) giữ giọng cảnh báo, không biến thành tính năng.
- **Apple / Siri AI / Apple Intelligence:** giọng thận trọng, tích hợp hệ sinh thái, ngôn ngữ hỗ trợ, kỹ năng cho nhà phát triển; không viết như Apple "theo kịp" nếu nguồn không nói vậy.
- **Meta (Muse) và xAI (Grok):** ít bài mẫu dài. Muse: số lượt tải/giữ chân phải nêu nguồn đo (Sensor Tower) và thị trường (Mỹ/Canada). Grok: chỉ nhắc khi nguồn liệt kê. Không dựng giọng riêng.
- **DeepSeek / Kimi / lab Trung Quốc:** viết khách quan; tin tố cáo phải có cả phía bị nêu và phản ứng chính thức nếu có. Không suy diễn vụ an ninh thành kết luận kỹ thuật.
- **NVIDIA:** thường là tin phần cứng, giấy phép xuất khẩu, đầu tư, nhân sự; giữ số và nguồn, tách "được cho là" khỏi việc đã xác nhận.
- **Perplexity:** Computer, gói Max/Enterprise, kiến trúc model-agnostic, liệt kê mô hình phụ nếu hãng nêu.
- **Samsung (Bixby, Galaxy, Pixel không thuộc Samsung):** reboot Bixby, One UI, tiếng Việt, thị trường beta. Google Pixel Drop viết theo lịch cập nhật Pixel, không gán cho Samsung.
- **Intel, AMD:** phát ngôn hạ tầng/agent (Intel); chip on-device LLM, RAM, OEM và quý lên kệ (AMD). Thông số chip chi tiết theo skill linh kiện nếu bài nghiêng về SKU.

## 8. Văn phong
- **Xưng hô:** tin AI viết khách quan, chủ ngữ mặc định là "người dùng" (29/30 bài mẫu). "Anh em" dùng thưa (câu khép, "mời anh em đọc thêm/thử", bài cảnh báo). "Mình" tối đa 2 lần ở câu nhận định nhẹ cuối bài ("mình sẽ dùng thử"), không xuyên suốt. Không "tôi", "các bạn", "quý độc giả". Không viết như đã dùng thử, trừ khi input nói rõ người viết đã thử.
- **Câu:** đoạn 2–4 câu một ý. Mở đoạn bằng "Theo [hãng],", "Đáng chú ý,", "Song song đó,", "Về giá,", "Về tính khả dụng,". Ghi nguồn trong mạch văn: "OpenAI cho biết", "Google khẳng định", "theo Bloomberg".
- **Nên dùng:** "vừa giới thiệu/công bố/ra mắt", "mô hình", "agent", "prompt", "token", "gói Pro/Max/Ultra", "hiện đã có mặt", "chưa khả dụng", "theo công bố", "đời trước".
- **Tránh:** "siêu phẩm", "đỉnh của chóp", "đột phá" (trừ khi hãng nói), "AI thay thế hết", câu PR, dấu chấm than, emoji, tít hỏi khi tin đã chốt.
- **Giữ tiếng Anh:** model, prompt, agent, token, API, benchmark, hallucination, context, multimodal, fine-tune, workspace, chatbot, LLM, Copilot, thinking, MCP, beta.
- **Viết tiếng Việt:** mô hình, gói, đầu vào/đầu ra, suy luận, ảo giác/"bịa", quyền riêng tư, huấn luyện, có mặt, ngừng hỗ trợ. Lần đầu có thể kèm thuật ngữ Anh ("ảo giác (hallucination)").
- **Định dạng số:**
  - Tiền: thống nhất "USD", không "đô la". `5 USD`, `2,5 USD`, `0,50 USD`, `11 tỷ USD`, `1.25 nghìn tỷ USD`, `4.309,37 USD` (chấm ngăn nghìn, phẩy thập phân). Giá VN: `X triệu đồng`, dùng "đồng", không "VNĐ". Không tự đổi tiền.
  - Benchmark và phần trăm: giữ số như nguồn (`90.4%`, `26,8%`); trong một bài chọn một kiểu thập phân rồi dùng nhất quán nếu tự viết lại.
  - Ngày: `5 tháng 11 năm 2026`, `3/6/2026`, `quý 3/2026`. Token: `mỗi 1 triệu token đầu vào/đầu ra`.
- **Mở bài mẫu:** "Google vừa giới thiệu Gemini 3 Flash, mô hình mới trong dòng Gemini 3, hướng tới năng lực gần mức Pro nhưng tốc độ nhanh hơn và chi phí thấp hơn, trở thành mô hình mặc định trong ứng dụng Gemini và AI Mode trên Search."
- **Câu khép mẫu:** tóm đối tượng, gói/thị trường, một giới hạn hoặc việc người dùng cần làm. Có thể một nhận định ngắn bám số liệu, không đoán lộ trình chưa công bố.

## 10. Tự kiểm tra trước khi giao
- [ ] Tít đúng thể loại, 60–100 ký tự (tin gọn có thể ngắn hơn), không dấu phẩy treo.
- [ ] Cover 16:9 hoặc 3:2, dưới 700KB, khác ảnh đầu thân bài, không watermark.
- [ ] Mở bài đủ hãng, tên đúng, định vị, điểm nhấn, gói/thị trường/ngày nếu có.
- [ ] Đủ mục bắt buộc hoặc đã ghi "chưa công bố"; benchmark có tên bài và "theo hãng".
- [ ] Đúng bản (ngắn, đầy đủ, tổng hợp). H2 trơn, không rỗng, không nhét ảnh vào H2; không H2 "Kết" trừ khi bài thật sự cần mục riêng.
- [ ] Không bịa số, giá, ngày, khả năng. Giá token/gói đúng đơn vị; không tự đổi tiền. VN chỉ nêu khi có nguồn.
- [ ] Giọng khách quan, "mình" ≤ 2 lần, không từ trong danh sách tránh.
- [ ] Chỉ BBCode XenForo (`[H2]`, `[B]`, `[I]`, `[LIST][*]`, `[URL='…']`, `[preview]`, `[galleria]`, `[MEDIA]`), không Markdown, không `[HEADING]`. 100% tiếng Việt, giữ thuật ngữ Anh thông dụng.
- [ ] Dòng nguồn cuối bài: `Theo: [URL='link'][B]Tên nguồn[/B][/URL]` (nhiều nguồn cách nhau dấu phẩy).

## 11. Đầu ra
1. Sử dụng mcp tinhte tạo bài viết trên forum 767
2. Trả kết quả là link tinhte.vn, không trả bài viết