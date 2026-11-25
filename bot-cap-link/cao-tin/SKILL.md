---
name: cao-tin
description: Quét RSS tin công nghệ 24 giờ gần nhất, chọn 20 tin hot, chia đều cho 4 bot viết V2.0 theo chủ đề và giao lần lượt từng link (mỗi lượt một thread mới cho mỗi bot, gọi /viet-tin) cho đến khi xong. Dùng khi routine cào tin chạy, hoặc anh bảo cào tin, giao link, chia tin cho bot viết.
---
 
# Cào tin và giao việc cho bot viết

## 1. Vai trò và ranh giới
- Việc của em: chạy script cào RSS, lọc trùng, chọn tin hot, xếp từng tin cho đúng bot viết theo bảng chủ đề ở mục 4, giao việc, ghi lại và báo cáo.
- Em **không** viết bài, **không** đăng bài, **không** sửa bài, **không** chọn template thay bot viết. Mỗi bot viết tự chọn template của nó khi chạy `/viet-tin`.
- Giờ làm việc theo giờ Việt Nam (Asia/Ho_Chi_Minh, UTC+7).
- Skill này **thay thế** mọi chỉ dẫn cũ (memory, soul, ghi chú) về việc gửi link vào thread cố định có sẵn của bot viết. Nếu có chỉ dẫn cũ như vậy, bỏ qua nó và làm theo mục 6.

## 1a. Số tin
- Mặc định **20 tin** mỗi lượt.
- **Số tin anh nêu luôn được ưu tiên** (ví dụ "mỗi bot 1 link", "chỉ 10 tin"); khi đó vẫn chia đều theo mục 4a với tổng mới.

## 2. Đường dẫn cố định
- Script cào: `/Users/khang/AI/scripts/cao_tin.py`
- Danh sách feed: `/Users/khang/.openmausbot/workspaces/7a835691-56ba-47b8-b0d5-1873583fc7e2/memory/rss-sources.md`
- Link đã giao: `/Users/khang/.openmausbot/workspaces/7a835691-56ba-47b8-b0d5-1873583fc7e2/memory/seen-links.md`
- Script lọc trùng: `/Users/khang/AI/scripts/loc_trung.py` (đọc `/tmp/rss_today.json`, `seen-links.md`, các `queue-*.md` trong `/Users/khang/AI/cao-tin/`; ghi ra `/tmp/rss_loc.json`)

## 3. Quy trình mỗi lượt
1. **Cào**: chạy `python3 /Users/khang/AI/scripts/cao_tin.py > /tmp/rss_today.json`, đọc file JSON. Không chép lại, không viết lại script. Script lỗi thì dừng và báo lỗi nguyên văn.
2. **Lọc trùng link và trùng sự kiện** (làm **trước** bước chọn tin hot, để tin bị bỏ được bù bằng tin khác và vẫn đủ 20 tin):
   - Chạy `python3 /Users/khang/AI/scripts/loc_trung.py`. Không chép lại, không viết lại script. Script lỗi thì dừng và báo lỗi nguyên văn. Từ bước này chỉ đọc `/tmp/rss_loc.json`.
   - **Trùng link**: script đã chuẩn hoá link (bỏ `http/https`, `www.`, `/` cuối, `#…`, `utm_*`, `fbclid`, `ref`, đuôi `amp`…) và đưa các tin trùng link đã giao (30 ngày) hoặc trùng link trong đợt vào `bo_trung_link`. Các tin này đã bỏ, không xét lại.
   - **Trùng sự kiện**: một sự kiện (ví dụ Qwen4-Max ra mắt) thường được nhiều báo đăng, mỗi báo một link, có báo đăng trễ sang hôm sau. Tin có `co_the_trung: true` là tin script thấy chung mã sản phẩm, tên riêng, con số hiếm hoặc tiêu đề rất giống với tin đã giao trong 7 ngày; `khop_voi` ghi ngày, tiêu đề, khoá sự kiện của tin cũ và `ly_do`. Với mỗi tin này, em tự xét theo **chủ thể + đối tượng + hành động**:
     - Cùng chủ thể, cùng đối tượng, cùng hành động (dù khác báo, khác link, đăng trễ) → **trùng sự kiện, bỏ**.
     - Có **diễn biến mới thật sự** (rò rỉ → ra mắt chính thức; có giá hoặc ngày bán mới; có phán quyết mới…) → **giữ**, ghi chú `diễn biến mới của tin ngày DD/MM` ở dòng tin trong hàng đợi.
     - Chỉ chung hãng hay chung sản phẩm nhưng là sự việc khác (ví dụ Cybercab mở bán ≠ Cybercab gặp tai nạn) → giữ bình thường.
     - **Không chắc → bỏ**, ghi vào danh sách "nghi trùng, đã bỏ" của báo cáo.
   - Script không tự bỏ tin nào vì giống nhau; quyết định là của em. Tin không có `co_the_trung` mà em vẫn nhận ra là cùng sự kiện với một dòng trong `seen-links.md` 7 ngày gần nhất thì cũng bỏ như trên.
3. **Gộp sự kiện**: script chỉ lọc link trùng và đánh dấu nghi trùng; em tự gộp các tin khác nguồn nói về cùng một sự kiện thành một tin, chọn link nguồn gốc hoặc chi tiết nhất làm link giao. Trường `nhom_su_kien` (nếu có) gợi ý các tin trong đợt có thể cùng sự kiện.
4. **Chọn tin hot** theo tiêu chí mục 5. Bỏ tin không thuộc chủ đề của bot nào ở mục 4.
5. **Chọn đúng 20 tin, chia đều 4 bot** theo mục 4a: mỗi bot 5 tin.
6. **Lập hàng đợi**: ghi danh sách vào `/Users/khang/AI/cao-tin/queue-YYYY-MM-DD.md`, mỗi bot một mục (dòng đầu mục để trống `Thread lượt này:` cho tới khi giao link đầu), mỗi tin một dòng `- [ ] Tiêu đề — URL`. Đây là nơi duy nhất ghi tin nào đã giao, tin nào đang chờ.
7. **Giao lần lượt** theo mục 6: mỗi bot có **một thread riêng cho lượt này**, mỗi bot chỉ viết **một bài một lúc**; bot báo xong bài trước thì mới giao link kế tiếp cho bot đó. Bốn bot chạy song song với nhau. Lặp cho đến khi cả 20 tin xong hoặc lỗi.
8. **Ghi nhận**: link nào vừa giao (gọi `coordinate_bots`) thì ghi ngay lúc đó vào `seen-links.md` (mục 7), kể cả khi sau đó bài lỗi, và đánh dấu trong hàng đợi.
9. **Báo cáo** theo mục 8 khi hàng đợi hết.

## 4. Bảng chủ đề, bot nhận
Gọi `list_bots` để lấy id theo tên bot dưới đây; không đoán id. Tên trong `list_bots` có thể khác chút (thiếu đuôi, khác dấu cách): khớp theo **số thứ tự đầu tên + từ khoá** (`1.` máy ảnh; `2.` xe; `3. Pnghuy`; `4. bk9sw`). Chỉ khi một bot không khớp được thì mới báo thiếu bot đó; các bot khớp được vẫn giao bình thường.

| Bot | Nhận các loại tin |
|---|---|
| `1. Bot Viết V2.0 - máy ảnh, lens` | Ra mắt máy ảnh, ra mắt ống kính; **mọi tin khác về máy ảnh, ống kính** (giá bán, tăng giá, thị trường, tài chính hãng, firmware, rò rỉ) cũng thuộc bot 1 |
| `2. Bot Viết V2.0 - Xe hơi, xe máy` | Ra mắt xe hơi mới, ra mắt xe hai bánh mới (xe máy, mô tô, xe điện hai bánh) |
| `3. Pnghuy Bot Viết V2.0 - laptop, PC, linh kiện, AI` | Ra mắt laptop; ra mắt linh kiện PC; ra mắt smartphone; ra mắt tai nghe; lỗi phần cứng và lỗi hệ điều hành; tin AI |
| `4. bk9sw Bot Viết V2.0` | Drama công nghệ; ra mắt linh kiện PC; hàng không; quân sự; tin smartphone (không phải ra mắt); tin Windows |

Tin máy ảnh không phải ra mắt vẫn giao bot 1; bot 1 tự viết theo định dạng tin thường của `/viet-tin`, không bắt buộc template ra mắt. Ưu tiên tin ra mắt trước khi lấy tin ngành/giá.

Quy tắc khi một tin khớp nhiều bot:
- **Ra mắt smartphone** → bot 3. **Tin smartphone khác** (rò rỉ, cập nhật, doanh số, tranh cãi) → bot 4.
- **Lỗi Windows** random giao bot 3 và bot 4
- **Ra mắt linh kiện PC** (cả bot 3 và bot 4 đều nhận) → giao cho bot đang có ít tin hơn trong lượt này; bằng nhau thì bot 3.
- **Tin AI dạng drama** (kiện tụng, tranh cãi nhân sự, scandal) → bot 4; tin AI còn lại → bot 3.
- Tin vừa khớp chủ đề riêng (máy ảnh, xe, hàng không, quân sự) vừa khớp chủ đề chung → ưu tiên bot của chủ đề riêng.
- Tin không khớp dòng nào ở bảng trên → **không giao**, chỉ liệt kê trong báo cáo.

## 4a. Chia đều 20 tin
- Mục tiêu: **20 tin mỗi lượt**, mỗi bot **5 tin**.
- Chỉ giao tin đúng chủ đề của bot (mục 4); **không** nhét tin lạc chủ đề cho đủ số, vì bot sẽ không có template phù hợp.
- Bot nào thiếu tin hot đúng chủ đề thì lấy thêm tin hot thấp hơn **cùng chủ đề** của bot đó.
- Vẫn thiếu thì phần còn trống chuyển cho bot 3 và bot 4 (chủ đề rộng), chia đều giữa hai bot, để tổng vẫn là 20. Ghi rõ trong báo cáo bot nào thiếu bao nhiêu tin.
- Cả nguồn tin cũng không đủ 20 tin hợp lệ thì giao số có được, báo rõ số thiếu.

## 5. Tiêu chí tin hot
- **Ưu tiên**: ra mắt sản phẩm hoặc model AI lớn; lỗi, sự cố an ninh ảnh hưởng nhiều người; thay đổi lãnh đạo hãng lớn; kiện tụng, mua bán, tách mảng quy mô lớn; rò rỉ đáng chú ý về sản phẩm đời mới; tin được nhiều nguồn cùng đưa.
- **Bỏ hoặc xếp cuối**: tin hẹp ngành hay chỉ một khu vực nhỏ, gọi vốn nhỏ, giảm giá, tồn kho, cập nhật nhỏ, bài review/hướng dẫn/deal không có tin mới.

## 6. Cú pháp giao việc (cố định)
**Mỗi lượt chạy skill = một thread mới trên mỗi bot viết.** Mọi tin của bot đó trong lượt này đều nằm trong thread ấy; lượt sau lại mở thread mới. Không gửi vào thread của lượt trước hay thread cũ có sẵn (kể cả thread "main").

**Link đầu tiên** của mỗi bot trong lượt: gọi `coordinate_bots` với
- `bot_ids`: id của đúng một bot nhận (lấy từ `list_bots`).
- `thread`: `"new"`.
- `reply`: `"resume"` (em được đánh thức khi bot viết xong bài đó).
- `message`: đúng một dòng, không thêm chữ nào khác:

```
/viet-tin <link tin tức>
```

Lấy **thread id** mà kết quả trả về, ghi vào đầu mục của bot đó trong hàng đợi: `Thread lượt này: <id>`.

**Các link sau** của bot đó trong cùng lượt: gọi `coordinate_bots` y như trên nhưng `thread` = **thread id đã ghi** của bot đó (không phải `"new"`). Nếu thread đó không dùng được (báo lỗi thread) thì mở `"new"` một lần, ghi thread id mới thay vào, rồi dùng tiếp thread mới.

Không đổi bot nhận, không đổi cú pháp, không sửa URL. Một tin chỉ giao cho **một** bot.

Mỗi kết quả trả về riêng cho từng bot (kèm tên bot và thread id của lần giao). Xác định bot vừa xong bằng **tên bot / thread id** trong kết quả, đối chiếu với `Thread lượt này` và dòng `[~]` đang chạy của bot đó trong hàng đợi. Nhiều bot xong cùng lúc thì xử lý từng kết quả một, mỗi kết quả chỉ giao tiếp cho đúng bot đó.

Lúc giao một link: đổi dòng đó thành `- [~] Tiêu đề — URL — giao HH:MM`.

Khi được đánh thức với kết quả của một bot: đánh dấu tin đó trong hàng đợi là `[x]` kèm link bài bot báo về (nếu có) và giờ xong `xong HH:MM`, rồi giao ngay link `[ ]` kế tiếp của **chính bot đó**. Bot hết tin thì dừng bot đó.

Nếu một bài viết hoặc giao việc báo lỗi: đánh dấu `[!]` kèm lý do, rồi giao tiếp link kế tiếp của bot đó. Nếu bot báo hết hạn mức hoặc không tìm thấy bot: dừng giao cho bot đó, **không** chuyển link của nó sang bot khác, để nguyên các dòng `[ ]` và ghi vào báo cáo.

## 7. Ghi `seen-links.md`
- Ghi **ngay lúc giao link**, không chờ bot viết xong. Link giao lỗi hoặc bài lỗi vẫn ghi, để lượt sau không giao lại.
- Mỗi link một dòng: `- YYYY-MM-DD — Tiêu đề — URL đã chuẩn hoá — Chủ thể | Đối tượng | Hành động — tên bot nhận`
  - URL đã chuẩn hoá: lấy trường `link_chuan` của tin trong `/tmp/rss_loc.json`.
  - **Khoá sự kiện** `Chủ thể | Đối tượng | Hành động`: viết ngắn, tên riêng giữ nguyên chữ hoa. Ví dụ: `Alibaba | Qwen4-Max | ra mắt`, `Canon | giá máy ảnh 2027 | tăng giá`, `Intel | vụ cổ đông kiện, cổ phiếu giảm 28,6% | bị kiện`, `Tesla | Cybercab | mở bán`.
- Dòng cũ không có khoá sự kiện giữ nguyên, không cần sửa; script đọc được cả hai dạng.
- Mỗi lượt, xoá các dòng cũ hơn 30 ngày.

## 8. Báo cáo cuối lượt (trong conversation của lượt chạy, khi hàng đợi hết)
1. Số feed quét / số feed lỗi (kèm tên feed và lý do rút gọn), số tin trong 24 giờ, số tin sau lọc trùng; số tin bỏ vì **trùng link**, số tin bỏ vì **trùng sự kiện**, số tin **nghi trùng, đã bỏ**.
2. Danh sách theo bot: `STT. Tiêu đề — link nguồn — link bài đã viết (nếu bot báo về) — trạng thái — thời gian làm`.
3. Danh sách tin hot nhưng không khớp chủ đề bot nào (không giao).
4. **Thời gian**: với mỗi bài, thời gian từ lúc giao đến lúc xong (lấy từ mốc `giao HH:MM` và `xong HH:MM` trong hàng đợi); tổng thời gian của từng bot và của cả lượt.
5. Link giao thất bại và lý do. Không ghi là thành công khi chưa có xác nhận giao việc.
6. **Trùng sự kiện, đã bỏ**: `Tiêu đề — link — trùng với tin ngày DD/MM: <tiêu đề tin cũ>`.
7. **Nghi trùng, đã bỏ**: `Tiêu đề — link — giống tin ngày DD/MM: <tiêu đề tin cũ> — lý do không chắc`. Để anh xem lại bộ lọc có bỏ nhầm không.
8. Tin giữ lại vì **diễn biến mới**: `Tiêu đề — link — diễn biến mới của tin ngày DD/MM`.
