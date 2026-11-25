Chủ đề bài khoa học: {input}

# /viet-bai-khoa-hoc

A command the user wrote. When they run /viet-bai-khoa-hoc (hoặc /kh), follow these instructions. Where they say {input}, use what the user typed after the command.

Viết bài khoa học đại chúng (popular science) kết hợp kể chuyện (storytelling) bằng tiếng Việt về khoa học, thiên nhiên, cơ thể người, đời sống, công nghệ nền, lịch sử phát minh và khám phá của con người; trình bày đúng chuẩn BBCode XenForo của tinhte.vn, tạo bài trên forum 767 qua MCP `tinhte`, rồi gửi link sang `mauscheck` để kiểm tra.

## Khi nào dùng
- Khi nhận lệnh `/viet-bai-khoa-hoc <chủ đề hoặc link>`, `/kh <chủ đề hoặc link>`, hoặc yêu cầu tương đương ("viết bài khoa học về…", "viết bài phổ thông khoa học về…").
- Chủ đề thuộc nhóm: khoa học tự nhiên, sinh học, vũ trụ, vật lý, hóa học, cơ thể người & sức khỏe đời sống, tâm lý học, lịch sử phát minh, công nghệ nền tảng, khám phá mới.
- Không dùng cho tin ra mắt sản phẩm thương mại (máy ảnh, điện thoại, xe, laptop, linh kiện PC) hay drama công nghệ; các dạng đó dùng skill/template chuyên biệt tương ứng.
- Nếu `{input}` quá rộng, tự chọn một góc tiếp cận cụ thể, hấp dẫn và kiểm chứng được; chỉ hỏi lại khi thiếu thông tin khiến không thể xác định chủ đề hoặc phạm vi.

## Quy trình
1. Đọc kỹ `{input}` (chủ đề, câu hỏi, hoặc link nguồn anh gửi kèm). Xác định câu chuyện trung tâm và góc tiếp cận theo mục 1.
2. Nghiên cứu nguồn đáng tin cậy theo thứ tự ưu tiên ở mục 1 (bài báo khoa học bình duyệt, đại học/viện nghiên cứu, cơ quan khoa học như NASA/NIH/WHO, bảo tàng/thư viện, báo chí khoa học uy tín). Đối chiếu tối thiểu 2 nguồn độc lập cho các tuyên bố quan trọng.
3. Kiểm chứng số liệu, năm, tên nhà khoa học, quy mô nghiên cứu và giới hạn kết quả. Không bịa bất kỳ con số, trích dẫn, tên nghiên cứu hay URL nào.
4. Lập dàn ý theo nhóm chủ đề và bố cục chuẩn ở mục 4–5.
5. Tìm và tải hình ảnh minh họa hợp lệ về bản quyền (theo mục 6), hoặc tự vẽ biểu đồ/sơ đồ PNG từ dữ liệu có nguồn nếu nguồn không có ảnh phù hợp.
6. Lưu toàn bộ ảnh vào `/Users/khang/AI/tinhte-uploads/` trên Mac2 (định dạng `jpg`/`jpeg`/`png`/`webp`, ưu tiên ảnh ngang, mỗi ảnh dưới 700KB; không dùng tên file ẩn bắt đầu bằng dấu chấm).
7. Chọn **1 ảnh cover riêng** (không lặp lại trong thân bài, khác hẳn ảnh đầu tiên trong thân bài).
8. Viết tiêu đề (≤100 ký tự) và thân bài hoàn chỉnh bằng BBCode XenForo theo đúng layout mục 4, đánh dấu ảnh trong thân bài bằng `{{IMG:/Users/khang/AI/tinhte-uploads/<ten-file>.jpg|Chú thích ngắn}}`.
9. Chạy toàn bộ checklist ở mục 9 (Tự kiểm tra trước khi giao). Tự rà bỏ sạch ký tự thừa (như `PMC+1`, `utm_source=chatgpt.com`), Markdown sót, và lỗi chính tả.
10. Upload ảnh cover trước bằng `upload_attachment(path="/Users/khang/AI/tinhte-uploads/<cover>", forum_id=767)` để lấy `attachment_hash` (tuyệt đối không chèn `[ATTACH]` của cover vào thân bài).
11. Tạo bài bằng MCP `tinhte`: gọi `create_thread(title=..., body=..., forum_id=767, confirm=true, attachment_hash=<hash_tu_cover>)`. Không tạo ở forum khác, không tự sửa bài sau khi đã tạo.
12. Lấy link thread `https://tinhte.vn/thread/...` từ kết quả `create_thread`.
13. Gửi cho bot `mauscheck` đúng một dòng lệnh: `/mauscheck <link tinhte vừa tạo> <các link nguồn chính cách nhau bởi dấu cách> viet-bai-khoa-hoc`.
14. Trả kết quả cho anh theo đúng mẫu ở mục 10 (chỉ trả link bài + trạng thái gửi `mauscheck`, không in lại toàn bộ bài viết trừ khi anh yêu cầu).

## 1. Xác định câu chuyện trung tâm và nghiên cứu nguồn

### 1.1. Câu chuyện trung tâm
Trước khi viết, tự trả lời 5 câu hỏi:
1. Chủ đề chính là gì?
2. Điều gì khiến chủ đề này đáng chú ý hoặc bất ngờ?
3. Câu hỏi lớn mà bài viết sẽ giải đáp là gì?
4. Độc giả nên hiểu và nhớ điều gì sau khi đọc xong?
5. Có chi tiết, nghịch lý hay thí nghiệm nào tạo được sự tò mò ngay từ đầu?

Chọn **một thông điệp trung tâm** xuyên suốt. Không cố nhồi mọi dữ kiện tìm được vào cùng một bài.

### 1.2. Thứ tự ưu tiên nguồn
1. Bài báo khoa học đã bình duyệt, tạp chí khoa học, cơ sở dữ liệu học thuật (Nature, Science, Cell, The Lancet, PNAS, PubMed/PMC, Crossref, Google Scholar — luôn mở kiểm nguồn gốc).
2. Trang chính thức của trường đại học, viện nghiên cứu, phòng thí nghiệm, nhóm nghiên cứu (Rockefeller, Oxford, Cambridge, MIT, Robert Koch Institute…).
3. Cơ quan khoa học, y tế, môi trường, không gian của chính phủ hoặc liên chính phủ (NASA, NOAA, USGS, ESA, CERN, WHO, CDC, NIH…).
4. Bảo tàng khoa học, thư viện, kho lưu trữ lịch sử uy tín (Royal Collection Trust, Museo Galileo, Whipple Museum, History of Science Museum, Library of Congress…).
5. Báo chí khoa học hoặc tài liệu giáo dục chuẩn có biên tập và dẫn nguồn gốc rõ ràng (OpenStax, Nobel Prize, APS News…) để bổ sung bối cảnh hoặc diễn giải.

Không mặc định một nguồn đáng tin chỉ vì đứng đầu kết quả tìm kiếm. Luôn kiểm tra tác giả, năm công bố, đơn vị phát hành, phương pháp và nguồn gốc dẫn lại.

### 1.3. Quy tắc kiểm chứng thông tin
- Với tuyên bố quan trọng, đối chiếu ít nhất 2 nguồn độc lập, ưu tiên nghiên cứu gốc.
- Khi bài báo phổ thông thuật lại một phát hiện, tìm và mở nghiên cứu gốc để xác minh.
- Kiểm tra năm công bố, đối tượng mẫu, quy mô thí nghiệm, điều kiện và giới hạn.
- Không biến tương quan (correlation) thành quan hệ nhân quả (causation).
- Không trình bày kết quả trên tế bào, động vật, trong phòng thí nghiệm hoặc mô hình máy tính như thể đã chứng minh trên người hay ngoài đời thực.
- Không dùng một nghiên cứu đơn lẻ để khẳng định đồng thuận khoa học rộng rãi.
- Khi giới khoa học còn tranh luận (ví dụ: ai là người đầu tiên phát minh ra một thiết bị), trình bày rõ các ghi nhận và mức độ chắc chắn.
- Nếu thông tin mới hoặc có thể thay đổi theo thời gian, kiểm tra cập nhật trước khi viết.
- **Tuyệt đối không bịa** số liệu, tỷ lệ phần trăm, trích dẫn, tên nhà khoa học, tên tạp chí, nghiên cứu, phát biểu hay URL. Dữ kiện nào chưa xác minh được thì bỏ ra hoặc nêu rõ giới hạn "chưa rõ / còn tranh luận".

## 2. Tiêu đề
- Độ dài tối đa **100 ký tự** (editor Tinhte cắt ở 100 ký tự; tối ưu 50–85 ký tự). Đếm kỹ số ký tự trước khi gọi `create_thread`.
- Tiêu đề cụ thể, dễ hiểu, gợi tò mò và phản ánh đúng nội dung bài. Không giật tít quá mức, không khẳng định điều bài viết chưa chứng minh được, không để dấu phẩy hoặc `...` treo cuối tít.
- Các công thức tiêu biểu (rút từ bài mẫu chuẩn Tinhte):
  - **Câu hỏi "Vì sao…?"**: `Vì sao muỗi thích cắn một số người hơn người khác?`
  - **Câu hỏi "… như thế nào?"**: `Chiếc kính hiển vi đã thay đổi cách con người nhìn nhận thế giới như thế nào?`
  - **Câu hỏi "Điều gì xảy ra khi…?"**: `Điều gì xảy ra với não bộ khi chúng ta thiếu ngủ kéo dài?`
  - **Nghịch lý / sự thật bất ngờ**: `Loài sứa bất tử và giới hạn sinh học thực sự đằng sau nó`
  - **Khám phá / cơ chế**: `Vì sao thời gian trôi nhanh hơn khi ta lớn lên?`

## 3. Ảnh cover
- Cover là ảnh riêng gắn làm thumbnail cho bài viết, **không chèn lại vào thân bài** và **phải khác hẳn ảnh đầu tiên trong thân bài** (không lấy ảnh crop từ cùng một tấm ảnh gốc).
- Ảnh ngang (landscape), tỷ lệ ưu tiên 16:9 hoặc 3:2, rộng khoảng 1.200–2.048px, dung lượng **dưới 700KB**, định dạng `jpg`, `jpeg`, `png` hoặc `webp`.
- Chọn ảnh rõ nét, thể hiện trực diện chủ thể bài viết (ảnh hiện tượng tự nhiên, thiết bị khoa học, ảnh hiển vi thật có giấy phép hợp lệ, hoặc ảnh minh họa sạch).
- Tránh ảnh có watermark, chữ dày đặc đè lên khung hình, ảnh mờ vỡ hạt, hoặc ảnh không rõ bản quyền.
- Quy trình upload: gọi `upload_attachment(path="/Users/khang/AI/tinhte-uploads/<cover>", forum_id=767)` trước, lưu lại `attachment_hash` để truyền vào `create_thread`, và không đặt `[ATTACH]` của cover vào `body`.

## 4. Bố cục và các mục H2 (chuẩn BBCode XenForo trên tinhte.vn)

Bài khoa học trên Tinhte đi theo cấu trúc kể chuyện mạch lạc, chia đoạn thoáng và dùng thuần **XenForo BBCode**.

### 4.1. Khung bố cục chuẩn
1. **Mở bài (Sapo — không có `[H2]`)**:
   - Gồm **2–4 đoạn ngắn** (mỗi đoạn 1–3 câu).
   - Mở đầu bằng một tình huống đời sống quen thuộc hoặc một hình ảnh khơi gợi trí tưởng tượng (`"Có bao giờ bạn đi chơi cùng một nhóm bạn..."`, `"Hãy tưởng tượng anh em lấy một giọt nước từ ao hồ..."`), nêu nghịch lý hoặc ý nghĩa lớn của chủ đề, rồi khép lại bằng **1–2 câu hỏi dẫn** vào mục 1.
   - Tránh mở bài sáo rỗng kiểu `"Từ xa xưa, con người luôn..."`.
2. **Ảnh mở đầu thân bài**:
   - Đặt ngay sau đoạn mở bài và **phía trên `[H2]1. ...[/H2]`** bằng dòng `{{IMG:/Users/khang/AI/tinhte-uploads/<anh-1>.jpg|Chú thích ngắn nếu cần}}`.
3. **Các mục thân bài đánh số (`[H2]1. ...[/H2]`, `[H2]2. ...[/H2]`, ...)**:
   - Thường có **5–10 mục `[H2]`** tùy độ sâu chủ đề (bài giải thích hiện tượng thường 6–8 mục; bài lịch sử phát minh/khám phá dài thường 8–10 mục).
   - Tên `[H2]` luôn đánh số thứ tự `1. `, `2. `, `3. `... và mô tả cụ thể nội dung (có thể là câu nhận định rõ ý hoặc câu hỏi gợi mở), ví dụ:
     - `[H2]1. Muỗi không chọn con mồi một cách ngẫu nhiên[/H2]`
     - `[H2]3. Nhóm máu O có thực sự hấp dẫn muỗi hơn?[/H2]`
     - `[H2]7. Kính hiển vi điện tử: Khi ánh sáng không còn đủ để quan sát[/H2]`
   - Không đặt tên `[H2]` chung chung lặp lại (như `Giới thiệu`, `Nội dung chính`, `Thông tin thêm`).
   - Ngay dưới mỗi `[H2]` (hoặc ngay trên đoạn văn tương ứng), đặt ít nhất 1 ảnh minh họa qua `{{IMG:...}}` trước đoạn giải thích.
   - Khi một mục `[H2]` dài cần chia nhánh con (như lịch sử nhiều nhân vật hoặc mốc thời gian), dùng **`[H3]Tiêu đề mục con[/H3]`** (chỉ dùng khi thật sự cần).
4. **Danh sách ý (`[LIST]`)**:
   - Dùng khi liệt kê các giai đoạn cơ chế, trường hợp điển hình, nguyên lý cốt lõi hoặc biện pháp ứng dụng (3–6 ý).
   - Câu dẫn kết thúc bằng dấu hai chấm `:`, **không để dòng trống** giữa câu dẫn và `[LIST]`.
   - Trong mỗi `[*]`, ưu tiên mẫu **`Nhãn ngắn: Giải thích rõ ràng 1–2 câu`** (ví dụ: `[*]Phát hiện từ xa: Muỗi nhận biết khí carbon dioxide (CO₂)...`), chữ thường toàn bộ, không bôi đậm `[B]`.
5. **Kết bài**:
   - Có một mục `[H2]` khép lại theo 1 trong 2 kiểu chuẩn từ bài mẫu:
     - Kiểu 1: `[H2]Kết: <tên thông điệp đọng lại>[/H2]` (ví dụ: `[H2]Kết: Muỗi không thích máu của bạn, chúng thích những tín hiệu cơ thể bạn phát ra[/H2]`).
     - Kiểu 2 (khi nối tiếp mạch số thứ tự): `[H2]10. <thông điệp tổng kết>[/H2]` (ví dụ: `[H2]10. Một phát minh đã thay đổi cách con người nhìn nhận thế giới[/H2]`).
   - Gồm **2–4 đoạn ngắn** nhấn mạnh phát hiện cốt lõi, giải đáp lại câu hỏi ở sapo, và để lại một góc nhìn rộng hơn về tự nhiên, con người hoặc khoa học. Không lặp lại máy móc mở bài.
6. **Nguồn tham khảo cuối bài**:
   - Đặt ngay sau đoạn kết cuối cùng, dùng dòng dẫn chữ thường:
     `Nguồn tài liệu khoa học tham khảo:` (hoặc `Nguồn tham khảo nội dung:`)
   - Theo ngay sau (không dòng trống) là `[LIST]` các nguồn thực sự đã đọc và đối chiếu:
     ```
     Nguồn tài liệu khoa học tham khảo:
     [LIST]
     [*][URL='https://...'][B]Tác giả hoặc Tổ chức (Năm) – Tên bài nghiên cứu hoặc tài liệu[/B][/URL]
     [*][URL='https://...'][B]Tổ chức (Năm) – Tên báo cáo[/B][/URL]
     [/LIST]
     ```
   - URL phải sạch (bỏ mọi tham số theo dõi như `?utm_source=chatgpt.com`, `fbclid`, `ref=`).
   - **Không** chèn bảng nhật ký giấy phép hình ảnh hay mục "Ghi chú biên tập" nội bộ vào thân bài đăng trên Tinhte.

### 4.2. Quy tắc BBCode XenForo chi tiết
- Chỉ sử dụng các thẻ XenForo hợp lệ: `[H2]`, `[H3]`, `[I]`, `[B]` (chỉ ở mục Nguồn tham khảo cuối bài), `[LIST][*]…[/LIST]`, `[URL='…']…[/URL]`, `[ATTACH=full]id[/ATTACH]`, `[CENTER]`, `[galleria]`, `[MEDIA=youtube]id[/MEDIA]`.
- `[H2]` và `[H3]` dùng **thẻ trơn**: `[H2]1. Tiêu đề[/H2]`, `[H3]Tiêu đề con[/H3]`. Tuyệt đối không lồng `[B]` bên trong `[H2]`/`[H3]`, không để `[H2]` rỗng, không nhét ảnh vào bên trong thẻ `[H2]`.
- Chữ trong đoạn văn, câu dẫn và các ý `[*]` viết thường toàn bộ, **không** bôi đậm `[B]`.
- Giữa các khối (đoạn văn, `[H2]`, `[H3]`, `[LIST]`, ảnh kèm chú thích) cách nhau đúng **1 dòng trống**. Không để nhiều dòng trống liên tiếp.
- Giữa `{{IMG:...}}` và chú thích (nếu tự viết `[CENTER][I]...[/I][/CENTER]`) không có dòng trống; khuyến khích truyền chú thích trực tiếp trong `{{IMG:/Users/khang/AI/tinhte-uploads/anh.jpg|Chú thích ngắn}}` để MCP `tinhte` tự chuyển thành `[ATTACH=full]id[/ATTACH]` và `[CENTER][I]Chú thích ngắn[/I][/CENTER]` ngay bên dưới.
- Cấm tuyệt đối trong bài đăng: `[HEADING]`, Markdown (`#`, `##`, `**`, `* `, `- `, bảng `|---|`, link `[chữ](url)`), mã trích dẫn AI sót (`PMC+1`, `Cite`, `[1]`), hoặc ghi chú nội bộ (`[cần kiểm]`, `TODO`).

## 5. Nội dung bắt buộc và điều chỉnh theo nhóm chủ đề

### 5.1. Nhịp nội dung cốt lõi của một bài hoàn chỉnh
Không bắt buộc rập khuôn máy móc, nhưng một bài khoa học đại chúng đầy đủ nên có đủ các lớp:
1. **Điểm móc mở bài**: tình huống đời sống quen thuộc + nghịch lý + câu hỏi trung tâm.
2. **Bối cảnh / trước khi khám phá**: vì sao trước đây con người hiểu nhầm hoặc chưa biết; kiến thức nền tối giản để hiểu phần sau (ví dụ: phân biệt độ phóng đại và độ phân giải; phân biệt muỗi đực và muỗi cái).
3. **Cơ chế hoặc tiến trình cốt lõi**: giải thích hiện tượng diễn ra theo giai đoạn nào, nguyên nhân hóa học/sinh học/vật lý nào đứng sau, kèm năm, tên công trình, tên nhà khoa học hoặc cột mốc lịch sử có nguồn.
4. **Chi tiết mở rộng & giải ảo quan niệm phổ biến**: số liệu/kỷ lục đáng nhớ, thí nghiệm kinh điển lẫn nghiên cứu mới, đối chiếu những lầm tưởng dân gian (như "nhóm máu O, máu ngọt, ăn đồ ngọt" hay "ai thực sự phát minh kính hiển vi?").
5. **Ứng dụng & liên hệ thực tế**: bài học áp dụng vào đời sống (có căn cứ), ứng dụng trong y học/công nghiệp/Việt Nam (ví dụ phòng chống muỗi truyền sốt xuất huyết, kính hiển vi trong IVF/bệnh viện).
6. **Giới hạn bằng chứng**: sau phần giải thích hoặc thí nghiệm, đặt 1–2 câu nêu rõ giới hạn (ví dụ: chỉ mới thử nghiệm trong phòng lab, kết quả chưa nhất quán ở mọi loài, hoặc chưa thể khẳng định một yếu tố duy nhất).
7. **Kết bài & nguồn tham khảo**.

### 5.2. Điều chỉnh theo 4 nhóm chủ đề
- **Khoa học & thiên nhiên**: Hiện tượng gây tò mò → Bối cảnh → Cơ chế tự nhiên theo từng yếu tố/giai đoạn → Quan sát/thí nghiệm chứng minh → Vai trò sinh thái hoặc ứng dụng → Giới hạn hiểu biết.
- **Phát minh & lịch sử công nghệ**: Hạn chế trước phát minh → Nhu cầu & nền tảng kỹ thuật → Các cá nhân và cột mốc nối tiếp (không giản lược thành công lao một người nếu là thành quả nhiều thế hệ) → Nguyên lý hoạt động → Cải tiến hiện đại → Tác động đến khoa học và đời sống hôm nay.
- **Cơ thể người & đời sống**: Trải nghiệm quen thuộc → Cơ chế sinh học/hóa học bên trong → Bằng chứng nghiên cứu (nêu rõ tạp chí, năm, loài/mẫu thử) → Giải ảo lầm tưởng → Biện pháp thực tế an toàn → Giới hạn nghiên cứu. *Lưu ý y tế: không chẩn đoán cá nhân, không đưa lời khuyên điều trị thay bác sĩ, không thổi phồng kết quả.*
- **Khám phá mới & tương lai**: Phát hiện mới → Phương pháp nghiên cứu → Kết quả hiện tại → Ý nghĩa thực tiễn → Tiềm năng và giới hạn/rủi ro/câu hỏi mở (tách rạch ròi kết quả đã đạt được với viễn cảnh dự đoán).

### 5.3. Độ dài bài viết
- Bài giải thích hiện tượng đời sống: khoảng **1.200–2.000 từ** (tương đương độ dày bài 4190015).
- Bài lịch sử phát minh, khám phá nhiều cột mốc: khoảng **2.000–3.500 từ** (tương đương độ dày bài 4190693).
- Tuyệt đối không kéo dài bằng cách lặp ý; độ dài phải phục vụ chiều sâu thông tin và mạch kể chuyện.

## 6. Hình ảnh, biểu đồ và bản quyền

### 6.1. Nguyên tắc bản quyền ảnh (kiểm tra trước khi tải)
Chỉ chọn hình từ nguồn có giấy phép sử dụng rõ ràng theo thứ tự ưu tiên:
1. **Public Domain (Phạm vi công cộng)**: tác phẩm hết thời hạn bảo hộ hoặc được cơ quan phát hành xác định Public Domain.
2. **CC0**: miễn trừ bản quyền tối đa.
3. **Creative Commons**: ưu tiên **CC BY**; có thể dùng **CC BY-SA** khi ghi công đầy đủ. Tránh **CC BY-NC** hoặc **CC BY-ND** nếu không phù hợp hoặc cần cắt sửa ảnh.
4. **Kho ảnh chính thức có điều khoản sử dụng rõ**: NASA, NOAA, USGS, ESA, NIH, bảo tàng/thư viện công (Wikimedia Commons, Openverse, Smithsonian Open Access, Library of Congress Free to Use, Europeana).

**Cấm**: dùng ảnh `All rights reserved`, ảnh tải bừa từ Google Images/báo thương mại/mạng xã hội khi chưa rõ giấy phép, ảnh có watermark, ảnh AI giả làm ảnh chụp thực nghiệm hoặc tư liệu lịch sử. Không mặc định mọi ảnh trên Wikimedia, NASA hay trang đại học đều miễn phí mà phải đọc đúng dòng License của từng tệp.

### 6.2. Biểu đồ và ảnh tự tạo
- Khi nguồn không có ảnh minh họa cơ chế/so sánh số liệu, có thể tự tạo sơ đồ hoặc biểu đồ PNG sạch đẹp từ dữ liệu có nguồn (lưu tại `/Users/khang/AI/tinhte-uploads/`) và ghi chú rõ `Minh họa cơ chế dựa trên...` hoặc `Biểu đồ tổng hợp từ...`.
- Nếu dùng ảnh minh họa tạo bằng AI cho khái niệm trừu tượng, **bắt buộc** ghi chú `Ảnh minh họa tạo bằng AI.` trong chú thích dưới ảnh để không gây hiểu nhầm là ảnh thật.

### 6.3. Quy tắc kỹ thuật & đặt ảnh trên Tinhte
- Toàn bộ file ảnh lưu trong `/Users/khang/AI/tinhte-uploads/`, định dạng `jpg`, `jpeg`, `png`, `webp`, dung lượng **dưới 700KB** (tối đa kỹ thuật MCP là 20MB, nhưng giữ dưới 700KB để tải nhanh và nét), ưu tiên ảnh ngang (16:9 hoặc 3:2).
- Số lượng ảnh: bài 6–8 H2 cần **6–10 ảnh**; bài lịch sử dài 8–10 H2 cần **10–15 ảnh**.
- Vị trí:
  - 1 ảnh mở đầu đặt sau sapo, trên `[H2]1.`.
  - Mỗi `[H2]` có ít nhất 1 ảnh đặt ngay dưới tiêu đề `[H2]` (trước đoạn văn nó minh họa). Các đoạn dài trong cùng một `[H2]` (như giới thiệu thêm thiết bị, nhà khoa học, so sánh TEM/SEM) chèn thêm ảnh ngay **phía trên** đoạn văn mô tả tương ứng.
- Chú thích ảnh: đặt ngắn gọn, có giá trị thông tin (nêu tên nhân vật, thiết bị, hiện tượng hoặc ghi công tác giả/nguồn nếu giấy phép yêu cầu), viết trong phần `|Chú thích` của `{{IMG:path|Chú thích}}` (chuyển thành `[CENTER][I]Chú thích[/I][/CENTER]` khi đăng). Không để chú thích rỗng nghĩa hoặc lặp nguyên văn câu bên dưới.
- Giữ ghi chép URL gốc + tác giả + giấy phép trong quá trình làm việc để đối chiếu nếu cần, nhưng **không** dán bảng nhật ký giấy phép ảnh vào cuối bài Tinhte.

## 7. Văn phong và định dạng số

### 7.1. Giọng văn và xưng hô
- **Giọng văn**: khoa học đại chúng kết hợp kể chuyện — sáng rõ, mạch lạc, khơi gợi tò mò, tôn trọng độc giả; không khô cứng kiểu giáo trình, không hô hào giật gân.
- **Độ dài đoạn & câu**: mỗi đoạn ngắn gọn **1–3 câu** để dễ đọc trên màn hình. Câu văn đầy đủ chủ ngữ, vị ngữ, có từ nối tự nhiên; tránh câu cụt lủn hoặc lối viết ghi chú gạch đầu dòng quá dày.
- **Xưng hô**: linh hoạt và tự nhiên theo ngữ cảnh bài Tinhte — gọi người đọc là `"anh em"` hoặc `"bạn"` (thống nhất trong cả bài hoặc dùng `"anh em"` ở lời dẫn/tương tác và `"ta"` / `"chúng ta"` khi nói chung về con người); người viết có thể xưng `"mình"` thưa (1–3 lần ở các điểm nhận định nhẹ, phần Kết, hoặc chú thích ảnh tự chụp). Tránh `"tôi"`, `"các bạn"`, `"quý độc giả"`.
- **Thuật ngữ**: giải thích khái niệm chuyên môn ngay lần đầu xuất hiện bằng ngôn ngữ đời thường và ví dụ gần gũi (nhưng không dùng phép ví von làm sai bản chất khoa học).
- **100% tiếng Việt, giữ thuật ngữ tiếng Anh/khoa học thông dụng**: giữ nguyên tên riêng, tên khoa học loài (*Aedes aegypti*, *Anopheles gambiae*, *Micrographia*), thuật ngữ phổ biến (CO₂, DNA, RNA, protein, axit carboxylic, axit lactic, cell, compound microscope, TEM, SEM, secretors, DEET, AI agent…). Lần đầu có thể viết song ngữ kiểu `kính hiển vi ghép (compound microscope)` hoặc `tế bào (cells)`.

### 7.2. Từ nên dùng và từ cần tránh
- **Nên dùng tự nhiên**: `đáng chú ý`, `điều thú vị là`, `tuy nhiên`, `cụ thể`, `nói cách khác`, `cần phân biệt`, `từ đó`, `cực kì`, `thực tế cho thấy`, `chưa có bằng chứng đủ mạnh`.
- **Tránh**: `"siêu phẩm"`, `"bom tấn"`, `"gây sốc"`, `"không thể tin nổi"`, `"bí mật động trời"`, `"đột phá chấn động"`, câu sáo `"Từ xa xưa, con người luôn…"`, lặp quá nhiều cụm `"người tiền nhiệm"`, dùng emoji/icon trong thân bài.

### 7.3. Định dạng số liệu và đơn vị
- Nhất quán dùng dấu phẩy thập phân kiểu Việt (`0,0002 milimet`) hoặc dấu chấm cho ký hiệu kỹ thuật quốc tế, nhưng phải **nhất quán trong cùng một bài**. Số nguyên hàng nghìn dùng dấu chấm (`1.000 nanomet`, `1.590` viết năm liền `1590`).
- Ghi rõ đơn vị đo và quy đổi dễ hình dung khi nói đến kích thước cực lớn hoặc cực nhỏ (ví dụ: `200 nanomet chỉ bằng 0,0002 milimet`).
- Năm và thế kỷ: `năm 1665`, `thế kỷ XVII` hoặc `thế kỷ 17` (chọn một kiểu, dùng nhất quán cả bài).

## 8. Quy tắc cứng
- Viết 100% tiếng Việt (chỉ giữ tên riêng, tên khoa học và thuật ngữ thông dụng ở mục 7.1).
- Không bịa số liệu, năm, tên nhà khoa học, nghiên cứu, trích dẫn, URL hay phát biểu.
- Không chép nguyên văn từ nguồn quá 25 từ liên tiếp; phải tổng hợp và diễn giải lại bằng lời văn độc lập.
- Chỉ dùng BBCode XenForo hợp lệ (`[H2]`, `[H3]`, `[I]`, `[B]` ở nguồn cuối bài, `[LIST][*]`, `[URL='…']`, `[ATTACH=full]`, `[CENTER]`, `[galleria]`, `[MEDIA]`). Cấm `[HEADING]` và Markdown.
- Không truyền token, API key, hay đường dẫn file ẩn vào bài hay tin nhắn trả lời.
- Luôn tạo bài vào **`forum_id=767`** qua MCP `tinhte` (`create_thread`). Không tạo vào forum công khai khác nếu anh chưa yêu cầu đổi forum.
- **Bot viết chỉ viết, không tự sửa bài sau khi đã gọi `create_thread`.** Mọi kiểm tra đối chiếu và chỉnh sửa sau đó là việc của `mauscheck`.

## 9. Tự kiểm tra trước khi giao
Trước khi gọi `create_thread`, rà hết danh sách sau:

### Nội dung & độ chính xác
- [ ] Có một thông điệp / câu hỏi trung tâm rõ ràng xuyên suốt bài.
- [ ] Đã kiểm chứng các dữ kiện quan trọng bằng ít nhất 2 nguồn độc lập (ưu tiên nghiên cứu gốc / tổ chức khoa học).
- [ ] Không bịa số liệu, tên nhà khoa học, nghiên cứu, trích dẫn hay URL.
- [ ] Đã tách rõ dữ kiện đã xác minh với giả thuyết, tranh luận hoặc giới hạn nghiên cứu; không biến tương quan thành nhân quả.
- [ ] Bài y tế/sinh học không chẩn đoán cá nhân, không khuyên điều trị thay bác sĩ.

### Bố cục BBCode & Ảnh
- [ ] Tiêu đề ≤100 ký tự, gợi tò mò đúng nội dung, không giật tít, không dấu phẩy/`...` treo.
- [ ] Mở bài (sapo) 2–4 đoạn ngắn, không có `[H2]`, khép bằng câu dẫn tự nhiên.
- [ ] Ảnh cover riêng biệt (upload lấy `attachment_hash`), không chèn trong thân bài, khác hẳn ảnh đầu trong thân bài, ngang, <700KB, hợp lệ bản quyền.
- [ ] Có ảnh mở đầu đặt sau sapo (trên `[H2]1.`). Mỗi `[H2]` có ít nhất 1 ảnh đặt ngay dưới `[H2]` / phía trên đoạn văn minh họa.
- [ ] Mọi `[H2]` đánh số thứ tự (`1.`, `2.`, …), dùng thẻ trơn `[H2]...[/H2]` không lồng `[B]`, không rỗng; `[H3]` dùng trơn khi thật cần.
- [ ] Các đoạn văn ngắn (1–3 câu), chữ thường (không `[B]` trong thân bài và `[*]`), 1 dòng trống giữa các khối, không dòng trống giữa câu dẫn `:` và `[LIST]`.
- [ ] Không còn Markdown, `[HEADING]`, `PMC+1`, `utm_source`, bảng nhật ký ảnh hay ghi chú nội bộ trong body.
- [ ] Cuối bài có kết bài (`[H2]Kết: ...[/H2]` hoặc `[H2]N. ...[/H2]`) và khối `Nguồn tài liệu khoa học tham khảo:` dạng `[LIST][*][URL='...'][B]...[/B][/URL][/LIST]` với URL sạch đã mở kiểm tra.

## 10. Đầu ra và gửi kiểm bài cho mauscheck
1. Tạo bài trên `forum_id=767` bằng MCP `tinhte`:
   `create_thread(title=<tiêu đề>, body=<toàn bộ BBCode>, forum_id=767, confirm=true, attachment_hash=<hash_cover>)`.
2. Sau khi nhận được link `https://tinhte.vn/thread/...`, **không** gọi thêm `edit_post` hay tự sửa bài.
3. Gửi sang bot `mauscheck` (qua tool giao việc giữa các bot nếu có, ví dụ `coordinate_bots` tới bot `mauscheck` với `thread: "new"`, hoặc tag `@mauscheck`) đúng một dòng lệnh:
   ```
   /mauscheck <link tinhte vừa viết> <link nguồn chính 1> <link nguồn chính 2> viet-bai-khoa-hoc
   ```
   (Các link cách nhau bằng dấu cách, rồi tên template `viet-bai-khoa-hoc` ở cuối; ưu tiên đưa các link nguồn gốc quan trọng nhất.)
4. Không cần chờ `mauscheck` xử lý xong mới báo anh. Trả lời anh ngắn gọn theo đúng mẫu sau, **không** in lại toàn bộ bài viết:
   ```
   - Link bài trên forum 767: <link tinhte.vn>
   - Đã gửi mauscheck kiểm: có / không (nếu không gửi được, ghi rõ lý do và kèm sẵn dòng lệnh `/mauscheck <link> <nguồn> viet-bai-khoa-hoc` để anh dán cho mauscheck)
   ```
