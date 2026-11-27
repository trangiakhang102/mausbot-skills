---
name: template-tin-tuc-windows-microsoft
description: Viết tin tức Windows/Microsoft cho tinhte.vn theo văn phong Khoa Đinh (bk9sw) — cập nhật/build, mẹo, lỗi, báo cáo người dùng, chính sách, vá bảo mật, Edge/Office/Surface/Xbox — từ link hoặc chủ đề; gọi bằng /template-tin-tuc-windows-microsoft.
---

# Template tin tức Windows/Microsoft — giọng Khoa Đinh (tinhte.vn)

Biến link nguồn (Windows Blog, Microsoft Support, Windows Latest, Windows Central, How-To Geek, The Verge, Reddit/X…) thành bài BBCode đúng giọng Khoa Đinh (bk9sw) trên tinhte.vn.

## Khi nào dùng
- Lệnh `/template-tin-tuc-windows-microsoft <link hoặc chủ đề>`.
- Tin Windows/Microsoft đã có nguồn: bản cập nhật, build Insider, tính năng mới; mẹo/cách làm vừa công bố; lỗi, known issue, cảnh báo của hãng; báo cáo người dùng (gắn chưa xác nhận); chính sách, ngưng hỗ trợ, bản quyền; vá bảo mật; sản phẩm Microsoft khác (Office/M365, Edge, Teams, Bing, Surface, Xbox) khi góc viết là phần mềm, dịch vụ hoặc phần cứng Microsoft.
- File format 30 bài có bài lệch. Không học bố cục từ: cuộc thi/giveaway ("Review laptop Windows trúng laptop"); bài `[Hỏi Tinh Tế]` xin cách làm từ cộng đồng; chuyện ngoài lề/tò mò AI không lấy Windows làm trọng tâm (ChatGPT "tạo" key Windows). Không dùng cho trên tay/đánh giá dài, bài hỏi đáp thuần.
- Ranh giới với `/template-tin-tuc-ai`: bài Copilot mà góc viết là mô hình AI, prompt injection, thiết kế LLM (EchoLeak, Copilot Actions/XPIA) dùng skill AI. Skill này khi góc viết là tính năng trên Windows, gói M365, chính sách, giá hoặc sự cố triển khai Copilot.
- Ranh giới với skill linh kiện: bài bám bản cập nhật Windows, mã KB, kênh Insider dùng skill này, kể cả khi lỗi đụng SSD. Bài chip/SSD/PSU thuần, không bám Windows, dùng skill linh kiện. Surface thuộc skill này; laptop hãng khác không lấy Microsoft làm trọng tâm thì không dùng.
- Không bịa mã KB, số build, CVE, ID ViveTool, ngày phát hành hay tính năng. Thiếu thì "chưa rõ"/"chưa công bố".

## Quy trình
1. Đọc hết nguồn trong `{input}`. Mã KB, build, phiên bản (24H2/25H2), kênh Insider, CVE, ngày cắt hỗ trợ: đối chiếu blog, support hoặc release note gốc. Nguồn lệch thì ghi rõ từng bên.
2. Kiểm tra chéo ít nhất một nguồn khác với tin lỗi mất dữ liệu, vá bảo mật, rò rỉ và báo cáo diễn đàn chưa được Microsoft xác nhận.
3. Xác định kiểu tin (mục 6), rồi chọn bản ở mục 3.
4. Lấy đủ dữ liệu mục 4. Thiếu thì "chưa rõ" hoặc bỏ; không suy diễn.
5. Viết bài.
6. Tải hình trong các nguồn tham khảo để minh hoạ bài.
7. Hình tải về lưu tại /Users/khang/AI/tinhte-uploads
8. Chọn cover, viết tiêu đề và thân bài theo khung dưới, rồi chạy mục 8. Khi nguồn có nhiều hình, ưu tiên cover khác ảnh đầu.
9. Đặt hình vào bài bằng mcp tinhte, ở vị trí hợp lý.
10. Tự rà: đúng KB, build, phiên bản, đường dẫn Settings, chính tả. Không bắt chước lỗi gõ trong bài mẫu ("Cloudfare", "Grammaly", "thư muc", "Microsft", "sử udngj").
11. Sử dụng mcp tinhte tạo bài viết trên forum 767
12. Trả kết quả là link tinhte.vn, không trả bài viết
13. Gửi kết quả link tinhte.vn cho @mauscheck và gọi skill /mauscheck bằng `coordinate_bots` tới mauscheck với `thread: "new"` (mỗi lần kiểm tra mở một thread mới)


## 1. Tiêu đề
Bài mẫu gần như không dùng dấu hai chấm làm công thức (3/30: lời trích hoặc "ổ C:"). Không ép `[Hãng] ra mắt [sản phẩm]: [điểm]`.

Công thức hay gặp (trung vị ~80 ký tự, thường 55–100):
`[Microsoft/Windows] [động từ] [sự việc], [hệ quả hoặc cú twist]`
`Cách [việc cần làm] trên Windows 11 [phiên bản]`
`[Tên sản phẩm] - [định vị]`
- Câu sự việc, thường có hook: `Microsoft sẽ ngưng hỗ trợ M365 chạy trên Windows 10, người dùng buộc phải lên Windows 11`; `Bản cập nhật Windows 11 đang gây lỗi một số dòng SSD/HDD, có thể mất dữ liệu không thể phục hồi`.
- Tít mẹo mở bằng "Cách…", "Bật…", "Anh em nên tắt…", giữ nguyên chuỗi giao diện tiếng Anh trong ngoặc kép nếu đó là đối tượng của bài.
- Tên + gạch ngang: `Đã có Nearby Share cho Windows - gửi nhận file nhanh giữa Android và máy tính`.
- Tít hỏi khi giải thích, mời thảo luận hoặc tin còn bỏ ngỏ: `Tính năng Dynamic Refresh Rate đã bắt đầu được phát hành cho Surface Laptop Studio, nó là gì?`. Không tít hỏi khi sự việc đã chốt cứng (đã ra mắt, đã phát hành bản vá) trừ bài mời anh em bình luận.
- Biệt danh, cách nói hình ảnh để trong ngoặc kép: `"inetpub"`, `"rút ống thở"`, `"vô tình"`, `"Bán thoải mái"`.
- Giữ 22H2/24H2/25H2, mã KB, tên máy (Surface Pro 9, File Explorer, Edge Canary) đúng như nguồn. Không "siêu phẩm", không phẩy treo, không tít reo hò.

## 2. Ảnh cover
- Cover là thumbnail riêng, không chèn lại trong thân bài (kể cả khi file cover nằm đầu danh sách attachment). Tỉ lệ phổ biến ~1,62 (2048×1268) hoặc 16:9; 3:2 cũng dùng được. Ảnh vuông, dọc hay banner cắt về 16:9, 3:2 hoặc ~1,62; dưới 700KB, jpg/png/webp. Cover 320×180 ở bài mẫu là bản xem trước — lấy bản phân giải cao.
- Ưu tiên: (1) mẹo/lỗi/tính năng: screenshot giao diện sạch, đúng tính năng bài viết; (2) build Insider: screenshot official hoặc key visual Windows; (3) Surface: ảnh sản phẩm chính thức, máy rõ, nền sạch; (4) chính sách/kiện tụng: key visual hoặc ảnh hiện trường/tòa, không meme; (5) vá bảo mật: ảnh minh hoạ Windows Update hoặc logo, không lộ dữ liệu cá nhân.
- Không watermark shop, ảnh chế, slide chữ dày, screenshot bẩn hay crop lệch nút.
- Một ít bài ngắn chỉ có cover, không ảnh trong bài — chấp nhận. Khi đủ hình, ưu tiên cover khác ảnh đầu.

## 3. Bố cục và các mục H2
Khác skill sản phẩm: 28/30 bài format không có H2, kể cả bài chính sách dài và bài ra mắt Surface. Trong 60 bài đã đọc, chỉ 7 bài có H2. Không thêm H2 cho đủ. Không H2 "Kết".

**Bản ngắn (180–400 từ):** mẹo ít bước, tin tính năng, cảnh báo ngắn. Mở 1–2 đoạn (sự việc + phiên bản/kênh + nguồn) → screenshot + các bước hoặc mô tả → câu khép → dòng nguồn. Không H2. Ví dụ: tắt Chat & Widgets; Task Manager mới; Edge VPN; inetpub.

**Bản chuẩn (400–800 từ, thường không H2):** lỗi cập nhật, chính sách EOL, ra mắt Surface, tính năng có nhiều chi tiết. Mở: sự việc + nguồn. Lần lượt: đây là gì, ai công bố, mã KB/build nếu có, phạm vi ảnh hưởng, cách xử lý tạm, "chưa rõ", câu khép. Xen ảnh–đoạn.

**Bản nhiều lớp (800–1.800 từ):** chỉ tách `[H2]` khi thật sự có nhiều cụm: hai cách làm (`Cách nhanh nhất` / `Cách chậm nhất`), từng nhóm phần cứng Surface, các giai đoạn điều tra, hoặc mẹo dài nhiều phần (`Edge bị tích hợp sâu…`). Ảnh ngay dưới H2, trước đoạn minh họa. Khép bằng hiện trạng. Không H2 "Kết".

Đặt tên H2 cụ thể, không "Tổng quan". `[H2]Tiêu đề[/H2]` trơn, không lồng `[B]`, không đánh số, không H2 rỗng, không `[HEADING]`. `[H3]` chỉ khi gắn link bài liên quan hoặc mục con thật sự cần.

## 4. Nội dung bắt buộc
Luôn có (thiếu thì "chưa rõ"/"chưa công bố" hoặc bỏ):
- Đây là việc gì và mức xác nhận: thông cáo Microsoft, blog Insider, tài liệu Support, "Microsoft xác nhận", "Microsoft đang điều tra", "người dùng báo cáo, chưa được hãng xác nhận".
- Phạm vi: Windows 10 hay 11; phiên bản 22H2/23H2/24H2/25H2; kênh Dev, Beta, Canary, Release Preview hay bản chính thức; mã build, mã KB, CVE — chỉ khi nguồn có, chép đúng từng ký tự.
- Ai công bố, ngày hoặc mốc ("tháng 4 2025", "ngày 14 tháng 10 năm 2025").
- Hệ quả với người dùng: máy nào dính, làm gì được/không được, có mất dữ liệu hay không.
- Bối cảnh ngắn: vì sao đáng nói, liên hệ bản cập nhật hoặc chính sách trước đó.
- Nguồn mọi số nhạy: "theo Microsoft", "một người dùng X", "trang Windows Central cho biết".

Có thì đưa: workaround, ghi rõ là tạm thời; lệnh, ID tính năng, đường dẫn Registry — chép nguyên, không bịa; giá, ngày bán Surface; link bài tinhte `[URL='…'][B]Tên bài[/B][/URL]` xen trong câu. Giá Việt Nam chỉ khi có nguồn chính thức; phép đổi `499 EUR (~15,3 triệu đồng)` là ước lượng.

## 5. Đặt ảnh
- Nguồn không có hoặc ít hình chính thức (nhiều bài chính sách/gọi vốn chỉ dùng cover) thì tìm ảnh nguồn khác để minh họa hợp lý. Bản đủ có 2 ảnh trở lên hoặc video; sự kiện nhiều hơn thì ảnh dư gom `[galleria]` cuối bài.
- Mỗi H2 bắt buộc có ít nhất 1 ảnh, trước đoạn văn nó minh họa. Không lấy cover làm ảnh trong bài.
- Số ảnh: tin ngắn/chính sách 3–5; mẹo 4–7 (mỗi bước then chốt một screenshot); tính năng 2–7, GIF khi cần khoe thao tác; ra mắt Surface 3–7; bài tổng hợp nhiều tính năng có thể nhiều ảnh — không lấy 19 ảnh làm chuẩn.
- Ảnh đầu sau đoạn mở, rồi xen ảnh–đoạn. Có H2 thì ảnh ngay dưới H2. Screenshot bước cài đặt đặt sát câu hướng dẫn, trước hoặc ngay sau bước đó.
- Ảnh ngoài chưa tải: `[IMG]url[/IMG]`. Video: `[MEDIA=youtube]id[/MEDIA]`. Bài mẫu không dùng `[CODE]`; lệnh, ID ViveTool, đường dẫn Registry để dòng riêng, nguyên văn.
- Không dùng lại ảnh cover trong thân bài.

## 6. Theo kiểu tin
- **Cập nhật, build, tính năng mới:** mở bằng việc đã có trên kênh nào, bản nào. Phân biệt "đang thử nghiệm trên kênh Dev/Beta/Canary", "bắt đầu được phát hành", "đã có trên bản chính thức". Ghi build, tên tính năng, điều kiện (WDDM 3.0, đăng ký Insider). Không viết tính năng Insider như đã có với mọi máy. Ví dụ: Task Manager mới (build 22538, Dev); tab File Explorer; File Explorer tích hợp M365 (dự kiến 23H2); Edge Split window trên Canary; DRR cho Surface Laptop Studio.
- **Mẹo, cách làm, tính năng vừa chỉ cách bật:** mở bằng phiền toái hoặc nhu cầu, rồi các bước theo thứ tự. Đường dẫn Settings và chuỗi nút giữ tiếng Anh như bài mẫu (mục 7). Nhiều cách thì mới tách H2. Cảnh báo rủi ro nếu phải sửa Registry, dùng ViveTool hay gỡ bản vá. Không bịa ID. Ví dụ: xóa icon Spotlight; khôi phục menu chuột phải; bật tab Explorer bằng ViveTool; tắt "Let's finish setting up your device".
- **Lỗi, known issue:** mở bằng mã KB/bản cập nhật + triệu chứng + phiên bản bị ảnh hưởng. Tách rõ: báo cáo người dùng / hãng "đang điều tra" / hãng "đã xác nhận". Workaround là tạm thời, "trong khi chờ bản vá". Gỡ KB chỉ nêu sau khi đã nói rủi ro mất vá bảo mật, không biến thành lời khuyên mặc định. Nếu Microsoft đã lên tiếng, phải ghi nhận. Ví dụ: inetpub (cảnh báo + cách khôi phục IIS); KB5063878/KB5062660 lỗi SSD; Family Safety chặn Chrome (Microsoft xác nhận + cách tạm); OBS/AutoCAD dính bản vá tháng 8.
- **Người dùng report (Reddit, X, diễn đàn):** gắn ngay là chưa chốt. Dẫn tài khoản hoặc chuyên mục, mô tả đúng điều kiện tái hiện, không suy thành lỗi toàn cục. Có thể hỏi "anh em có gặp không?" ở cuối. Khi hãng chưa lên tiếng, không viết như đã xác nhận. Ví dụ: quảng cáo trong File Explorer từ screenshot trên Twitter; bảng thử SSD của người dùng X.
- **Chính sách, ngưng hỗ trợ, bản quyền:** nêu mốc ngày, sản phẩm hết hỗ trợ, điều kiện ESU/giá nếu có, hệ quả với người dùng cá nhân và doanh nghiệp. Tách tuyên bố của Microsoft khỏi phán quyết tòa hay động thái chính phủ. Không tư vấn pháp lý. Ví dụ: M365 ngưng trên Windows 10; ESU miễn phí nếu bật Windows Backup; kêu gọi chuyển sang M365; tòa án Anh về bán lại key; làn sóng nguồn mở ở châu Âu.
- **Vá bảo mật, sự cố an ninh:** mã CVE/KB, mức độ, phạm vi, đã có bản vá chưa. Không viết PoC hay hướng dẫn khai thác; chỉ mô tả tác động ở mức người dùng cần biết. Ví dụ: inetpub/CVE-2025-21024; tấn công SharePoint; ESU Windows 10.
- **Sản phẩm Microsoft khác:**
  - *Office/M365:* gói, ngày cắt hỗ trợ, giá thuê bao, kiện tụng — bám tài liệu Support.
  - *Edge:* tách Canary/Dev khỏi bản ổn định; tính năng VPN, Split window, mặc định trình duyệt.
  - *Teams, Bing, Reward:* chỉ khi tin bám dịch vụ Microsoft.
  - *Surface:* ra mắt, rò rỉ (gắn chưa chốt), firmware. Thiết kế, CPU, cổng, giá USD/EUR theo thông cáo. Rò rỉ không viết như đã ra mắt.
  - *Xbox:* chiến lược nền tảng, sa thải, chính sách; không biến thành review máy cầm tay nếu góc viết không phải Microsoft.
  - *Copilot trên Windows/M365:* rollout, giá, sự cố triển khai — xem ranh giới skill AI ở trên.

## 7. Văn phong, số liệu, thuật ngữ
- **Giọng:** khách quan, gắn nguồn, có thể có một câu nhận định ngắn sau khi đã đưa dữ liệu ("mình thấy Microsoft đang tìm đủ mọi cách để thúc đẩy người dùng cập nhật lên Windows 11"). Không PR, không chửi hãng.
- **Xưng hô:** tin thông cáo, chính sách, kiện tụng viết khách quan, thường không "mình". "Mình" vừa phải khi đã thử thật (Nearby Share, MSEdgeRedirect, ViveTool) hoặc một câu nhận định. "Anh em" ở bài mẹo, cảnh báo lỗi, mời chia sẻ. Không "tôi" trừ trích dẫn, không "các bạn", không "quý độc giả". "Bạn" được phép trong bài mẹo/giải thích (`sẽ giúp bạn tăng tốc hiển thị thumbnail`); không dùng ở tin cáo buộc nặng.
- **Câu:** đoạn 2–5 câu một ý. Mở vào sự việc, bối cảnh hoặc nguồn, không cứng "Microsoft vừa chính thức công bố". Câu chuyển: "Thế nhưng", "Chưa rõ", "Điều đáng nói", "Được biết", "Trong khi chờ bản vá".
- **Nên dùng:** "rút ống thở", "cài cắm", "đẻ ra tiến trình ăn RAM", "nghỉ chơi", "chưa rõ", "được cho", "cách giải quyết tạm thời".
- **Tránh:** "siêu phẩm", "bản cập nhật thần thánh", emoji, viết mẹo Registry như không có rủi ro, copy lỗi gõ mẫu.
- **Đường dẫn giao diện (theo mẫu):** giữ tên menu tiếng Anh, kể cả khi Windows của độc giả có thể là tiếng Việt. Ngăn cách bằng ` > ` (có khoảng trắng). Chuỗi nút, hộp thoại, thông báo để nguyên trong ngoặc kép. Ví dụ: `Settings > Personalization`; `Settings > System > Notifications`; `Control Panel > Programs > Turn Windows features on and off`; `click chuột phải vào thanh Taskbar > chọn Taskbar settings`; `New > DWORD (32-bit) Value`. Phím tắt: `Windows + R`, `Shift + F10`. Lần đầu có thể chú thích tiếng Việt: `hình nền (Background)`. Không dịch Start, Taskbar, File Explorer, Settings, Registry Editor, Task Manager, Widgets, OneDrive.
- **Giữ tiếng Anh:** Windows 11 24H2, Insider, build, patch, KB5063878, CVE, Dev/Beta/Canary, Release Preview, ViveTool, WDDM, TPM, ESU, M365, OneDrive, Fluent Design, BSOD, WinRE, SMB, IIS.
- **Viết tiếng Việt:** bản cập nhật, bản vá bảo mật, kênh thử nghiệm, ngưng hỗ trợ, gỡ cài đặt, cách xử lý tạm thời, thanh tác vụ (khi giải thích, tên UI vẫn là Taskbar).
- **Định dạng số (theo mẫu):**
  - Thông số phần cứng và phần trăm: phẩy thập phân, có khoảng trắng trước đơn vị: `13,5"`, `4,4 GHz`, `26,27%`, `8 GB`, `1 TB`, `120 Hz`, `61 đô`.
  - Phiên bản, build, driver, mã phần mềm giữ dấu chấm nguồn: `WDDM 3.0`, `v0.3.1`, `build 22557`, `143.0.7499.194`. Mã KB/CVE không chèn dấu: `KB5063878`, `CVE-2025-21024`.
  - Dải số: `50 - 100 đô`, `6 - 12%`.
  - Ngày: `ngày 14 tháng 10 năm 2025`, `tháng 8 2025`.
  - Tiền: mẫu hay dùng `999 USD`, `61 đô`, `30 đô/năm`, `1300 EUR`, `4.499 USD` đôi khi viết `4499 USD`. Không `$`, không `VNĐ`. Một bài chọn một kiểu (`đô` hoặc `USD`) và giữ đến cuối; "đồng" chỉ giá Việt có nguồn hoặc phép đổi rõ là ước lượng. "tỷ" và "tỉ" đều có — một bài một kiểu.
- **Câu khép:** hiện trạng, "chưa rõ khi nào có bản vá", hệ quả người dùng, hoặc câu hỏi anh em vừa phải. Không H2 kết.

## 8. Tự kiểm tra trước khi giao
- [ ] Tít theo mẫu Khoa Đinh (câu sự việc, "Cách…", tên + gạch ngang, hoặc tít hỏi chỉ khi giải thích/còn bỏ ngỏ/mời thảo luận); không ép hai chấm, không phẩy treo.
- [ ] Cover 16:9, 3:2 hoặc ~1,62, dưới 700KB, không watermark; khác ảnh đầu bài nếu đủ hình; không chèn cover trong thân bài.
- [ ] Đúng bản (ngắn / chuẩn không H2 / nhiều lớp có H2 khi cần). H2 trơn, không rỗng, không "Kết".
- [ ] Mọi mã KB, build, CVE, ID ViveTool, ngày, giá đều có nguồn hoặc ghi "chưa rõ". Báo cáo người dùng được gắn nhãn. Lỗi: phân biệt chưa xác nhận / đang điều tra / hãng đã thừa nhận. Không bịa, không viết PoC.
- [ ] Giọng trung lập. "Mình"/"anh em" chỉ khi có căn cứ. Không "các bạn".
- [ ] Đường dẫn Settings, tên menu, lệnh Registry chép đúng; không copy lỗi gõ mẫu.
- [ ] Chỉ BBCode XenForo (`[H2]`, `[B]`, `[I]`, `[LIST][*]`, `[URL='…']`, `[MEDIA]`, `[IMG]`), không Markdown, không `[HEADING]`. 100% tiếng Việt, giữ thuật ngữ Anh thông dụng. Số/tiền theo mục 7. Lệnh để dòng riêng, không bịa ID.
- [ ] Dòng nguồn cuối bài: `Theo: [URL='link'][B]Tên nguồn[/B][/URL]` (nhiều nguồn cách nhau dấu phẩy hoặc chấm phẩy). Bài mẫu thường chỉ chèn link hoặc ghi `Theo:`; rất ít `Nguồn:`/`Tham khảo:` — skill vẫn bắt buộc `Theo:` cho đồng bộ các skill khác.

## 9. Đầu ra
1. Sử dụng mcp tinhte tạo bài viết trên forum 767
2. Trả kết quả là link tinhte.vn, không trả bài viết