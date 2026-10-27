# Reference — The Ink Scroll / Elaya / The Great Wave

## Current direction — The Ink Scroll (2026-10-27)

**Ý:** trang chủ là một bức tranh thủy mặc khổ ngang; colophon giấy bên trái chứa nội dung; con dấu đỏ
ở góc dưới phải. Chữ Nho **墨築** (Mặc Trúc: mực + dựng) là mark; headline English “I build in layers.”

**Prompt ImageGen đã dùng:**

> Traditional East Asian shan-shui ink wash painting on aged rice paper, wide horizontal handscroll composition, 16:9. Vast empty misty space in the upper left and centre for typography. On the right, layered mountains rendered in wet sumi ink washes, fading into mist. A calm river runs from the lower right toward the lower left, with a small wooden bridge and one lone fisherman's boat. A tiny pavilion on a cliff, sparse pine branches framing the top right. Monochrome black ink with subtle warm grey washes, no colour. Minimal, restrained, Song dynasty landscape, elegant negative space. No text, no calligraphy, no signature, no red seal, no border, no frame, no watermark.

**Asset:** `public/art/ink-scroll.jpg` (1536×916; đã crop phần watermark “AI生成 / WORKBUDD” ở đáy).
Đây là placeholder; nếu muốn bản gốc lịch sử, thay bằng tranh public domain (The Met / Wikimedia) và giữ credit.

**Type:**
- **Ma Shan Zheng** — 墨築, 104–124px desktop / 72px mobile.
- **Cormorant Garamond** — English display + body, 400/500/600.

**Palette:**
```
--paper:       #e7e0d2
--paper-deep:  #e8dfcd
--ink:         #1b1a17
--ink-soft:    #4b4841
--seal:        #a83a2b
--seal-bright: #c8402a
```

**Layout:** colophon 420px desktop, full height; tranh 70%; seal 86×86 xoay -3deg; mobile tranh 44svh,
colophon xếp dọc, mark 墨築 chuyển ngang.

**Ba biến thể:**
- A. Colophon cạnh cứng — `mockups/ink-scroll.html`, `ink-1440.png`.
- B. Wash (giấy mờ tan vào tranh) — `mockups/ink-scroll-wash.html`, `ink-wash-1440.png`.
- C. **Blue engraving** (theo đúng 2 ảnh Elaya user gửi) — `mockups/blue-engraving.html`, `blue-1440.png`.
  Khuyến nghị C nếu muốn chất Elaya; B nếu muốn thuần mực Nho.

**Variant C — Blue engraving:**
- Full-bleed blue duotone engraving; hero top-left, stats bottom-left, works row, contact bottom-right, seal.
- Palette: `--cream #f4efe4`, `--blue #0d2a5c`, `--cobalt #2b5ca8`, `--seal #b03a2e`.
- Type: **Cormorant Garamond** + **Manrope**.
- Ảnh: `public/art/blue-engraving.jpg` — duotone từ `ink-scroll.jpg` bằng Pillow
  (black `#0d2a5c`, white `#f4efe4`, mid `#6f97c9`), không tốn thêm ImageGen.
- Inspector: 1440 **0 FAIL** (allow `few-pictures`, `off-centre`, `font-not-dealt`), 390 **0 FAIL**;
  warnings: `palette-cream` (đúng reference), `no-footage`, `still-page`.

**Inspector (A/B):** 390px **0 FAIL / 0 WARN**; 1440px có 3 ngoại lệ có lý do:
`few-pictures` (trang chủ cố ý 1 tranh), `off-centre` (colophon là bố cục cuộn tranh),
`font-not-dealt` (font chữ Nho thay Cabinet Grotesk). Ghi rõ trong Phase 7.

---

## Previous direction — The Great Wave (2026-10-27, đã thay)

## Nguồn đã kiểm

| Thứ | Link | Ghi chú |
|---|---|---|
| Repo | https://github.com/elayadesign/ai-design-skills | MIT. 2 skill: `landing-page-design`, `design-to-motion` |
| Skill file | https://raw.githubusercontent.com/elayadesign/ai-design-skills/main/skills/landing-page-design/SKILL.md | Toàn bộ visual system nằm ở Part B |
| Tác giả | https://elaya.design | Site Framer, dịch vụ landing page $2,500 |
| X | https://x.com/elayadesigns | Nơi tác giả đăng demo; X chặn đọc timeline |
| Tranh | https://www.metmuseum.org/art/collection/search/45434 | The Met, objectID 45434, public domain |
| Ảnh gốc | https://images.metmuseum.org/CRDImages/as/original/DP130155.jpg | 3859×2594, đã tải về `public/art/great-wave.jpg` |

**Về cái landing page dùng tranh sóng thần:** tôi không tìm thấy đúng URL demo đó. Repo chỉ có 2 file SKILL.md, không có demo; site tác giả và 2 project (`vidrush.ai`, `slopscan.co`) không dùng tranh. Khả năng cao demo nằm trong post X của tác giả, mà X chặn truy cập không đăng nhập. Thay vào đó tôi lấy **đúng bức tranh** từ The Met và **đúng hệ thống thiết kế** từ repo.

## Hệ thống gốc của Elaya (tóm tắt có chọn lọc)

- **Một typeface** cho cả site. Cho phép: Geist, Manrope, Geist Mono, Poppins. Cấm: Inter, Roboto, Arial, Open Sans, Helvetica. Không italic. Không weight 900.
- **Type scale** 12/14/16/18/20/24/30/36/48/60/72/96/128; snap xuống bước gần nhất.
- **Spacing** 0/2/4/8/12/16/24/32/40/48/64/80/96.
- **Nền phẳng**, không gradient (trừ gradient chữ ở hero), không border một cạnh.
- **Hero** max-width 680px cho heading + subheading; ngắt dòng theo nghĩa.
- **Motion** `cubic-bezier(0.22,1,0.36,1)`, 500ms cho layout, 300ms cho màu/opacity; chỉ animate `transform`/`opacity`; tôn trọng reduced motion.
- **Tagline reveal** bắt buộc: một section chữ lớn, từng từ chuyển từ 25–35% opacity lên full theo thứ tự đọc.
- **Nav** floating pill, blur; mobile mở full-height panel.
- **Nội dung thật**, không lorem; số liệu lẻ; không từ sáo (`revolutionize`, `supercharge`, `cutting edge`, `effortless`).
- **8 states** cho mọi control; focus ring bắt buộc.

## Cái mình giữ / đổi

| Giữ | Đổi | Lý do |
|---|---|---|
| Một typeface, nền phẳng, type lớn, 500ms curve | Dùng **Cabinet Grotesk** thay Geist | Chất poster, hợp tranh khắc gỗ hơn |
| Tagline reveal theo từ | Đặt ở section manifesto, không lặp ở hero | Hero đã có masked headline |
| Hero text max-width, ngắt dòng có nghĩa | Hero dùng ảnh tranh full-bleed, không phải portrait | Yêu cầu của bạn |
| 8 states, focus ring, reduced motion | Giữ nguyên | A11y |
| Nền tối/đen của Elaya | Đổi sang **bone + indigo + vermilion** | Lấy từ chính tranh Hokusai |
| Weight tối đa 700 | Dùng **800 cho display** | Poster cần độ nặng; body vẫn 400/500 |
| Gradient chữ | Không dùng | Tranh đã đủ màu; chữ phẳng đọc tốt hơn |

## Palette chốt

```
--paper:      #e4dfd4   bone, low chroma
--ink:        #101820
--indigo:     #16324f   (lấy từ mực Prussian blue của tranh)
--vermilion:  #c8402a   (dấu chấm, chi tiết nhỏ)
--white:      #f4f4f0
--muted:      #4f5b63
```

Contrast: ink/paper 13.6:1; indigo/paper 9.9:1; white/indigo 11.8:1; vermilion/paper 4.0:1 (chỉ dùng cho chấm lớn, không dùng cho chữ nhỏ).

## Tranh

- Tên: *Under the Wave off Kanagawa (Kanagawa oki nami ura)*, còn gọi *The Great Wave*.
- Tác giả: Katsushika Hokusai, 1830–32, Edo period.
- Nguồn: The Metropolitan Museum of Art, objectID 45434, `isPublicDomain: true`.
- File: `public/art/great-wave.jpg`, 3859×2594, 2.3MB.
- Credit bắt buộc trên page: “Katsushika Hokusai, Under the Wave off Kanagawa, 1830–32. The Met, public domain.”
