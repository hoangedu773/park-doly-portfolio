---
title: "The Ink Scroll — portfolio as a painting"
description: "One-page portfolio làm bằng một bức tranh thủy mặc: colophon chữ Nho 墨築, headline English, 3 dự án thật; 3 case study với 24 màn hình. Next.js, Cormorant Garamond + Ma Shan Zheng."
status: pending
priority: P1
effort: 44h
tags: [portfolio, nextjs, design, ink, calligraphy, upwork, fiverr]
created: 2026-10-27
---

# The Ink Scroll — portfolio as a painting

## Overview

Portfolio tiếng Anh cho freelancer fullstack + UI/UX + AI/chatbot, nhắm khách Upwork/Fiverr.
Trang chủ **là một bức tranh thủy mặc**: một landscape khổ ngang, bên trái là **colophon** giấy
(phần lề của cuộn tranh) chứa toàn bộ nội dung, bên phải là tranh. Không card, không ảnh stock,
không hero gradient.

Dấu hiệu thương hiệu là hai chữ Nho **墨築** (Mặc Trúc: mực + dựng), đặt dọc trong colophon.
Headline English vẫn là **“I build in layers.”** — tranh vẽ bằng nhiều lớp mực, web product dựng
bằng nhiều lớp token/component/state.

Câu mô tả:

> On this page, **a single ink-wash landscape and a paper colophon** become **the portfolio: the painting carries the mood, the colophon carries the proof.**

## Goals

| # | Goal | Priority |
|---|------|----------|
| 1 | Khách hiểu “làm được gì” trong 5 giây, thấy bằng chứng trong 20 giây | P1 |
| 2 | Trang chủ là một bức tranh, không phải landing page template | P1 |
| 3 | 3 case study đủ sâu, có 24 màn hình thật | P1 |
| 4 | 18/20 craft gate + taste inspector pass ở 390; 1440 có ngoại lệ có lý do | P1 |
| 5 | Deploy Vercel, OG image, CV PDF, link Upwork/Fiverr | P2 |

## Non-goals

- Blog, CMS, i18n, dark-mode toggle, dashboard admin.
- Contact form backend (mailto + link đặt lịch).
- 3D/WebGL, animation showreel, custom cursor.
- Ảnh stock thay cho sản phẩm; số liệu/testimonial bịa.
- Dùng chữ Nho làm **nội dung chính**; chữ Nho chỉ là mark/thương hiệu, nội dung đọc bằng English.

## The concept

**The Ink Scroll.**

- Trang chủ: một tranh landscape khổ ngang (núi, sông, cầu, am, thuyền) + colophon giấy bên trái.
- Colophon (420px desktop): mark 墨築 dọc, headline “I build in layers.”, CTA “See the work”,
  subline, proof line, nav, 3 tên dự án + năm, trạng thái available, email, credit.
- Tranh chiếm 70% bề ngang; con dấu đỏ **墨** đặt ở góc dưới phải, như ký tên.
- Mobile: tranh 44svh phía trên, colophon xếp dọc phía dưới; mark 墨築 chuyển ngang.
- Case study: 3 trang riêng, mang 24 màn hình thật; trang chủ chỉ giữ tên + năm + link.

**Một thứ sống trên trang:** tranh drift rất chậm (24s), mark 墨築 hiện như mực thấm, con dấu đóng xuống.
Không có interaction phức tạp; trang là một tác phẩm, không phải app.

### Ba biến thể

- **A. Colophon** — mảng giấy 420px có cạnh cứng, giống cuộn tranh được gắn lề: `ink-scroll.html`, `ink-1440.png`.
- **B. Wash** — mảng giấy mờ tan vào tranh, chữ như viết lên mực: `ink-scroll-wash.html`, `ink-wash-1440.png`.
- **C. Blue engraving** — theo đúng 2 ảnh Elaya user gửi: tranh duotone xanh trên kem, hero top-left,
  stats bottom-left, works row, contact bottom-right, seal: `blue-engraving.html`, `blue-1440.png`.
  **Khuyến nghị C** nếu muốn chất Elaya; B nếu muốn thuần mực Nho; A là fallback tương phản cao.
- Cả ba đã qua inspector 390; 1440 có 3 ngoại lệ có lý do (`few-pictures`, `off-centre`, `font-not-dealt`).

## Art direction

- Medium: **ink wash / thủy mặc** trên giấy cũ; một màu mực, một sắc đỏ son.
- Type:
  - **Ma Shan Zheng** — chữ Nho 墨築, 104–124px desktop, 72px mobile.
  - **Cormorant Garamond** — English display + body (400/500/600).
- Palette:
  - `--paper #e7e0d2` (colophon)
  - `--ink #1b1a17`
  - `--ink-soft #4b4841`
  - `--seal #a83a2b`
  - `--seal-bright #c8402a`
- Layout: colophon 420px, full height; tranh `object-fit: cover`; không border, không shadow, không gradient.
- Chi tiết: con dấu 86×86, viền trong 1px, xoay -3deg; chấm đỏ 6px trước tên dự án; credit 13px.

## Image

- File: `public/art/ink-scroll.jpg` (1536×916, đã crop watermark).
- Nguồn: ImageGen, prompt:
  > Traditional East Asian shan-shui ink wash painting on aged rice paper, wide horizontal handscroll composition, 16:9. Vast empty misty space in the upper left and centre for typography. On the right, layered mountains rendered in wet sumi ink washes, fading into mist. A calm river runs from the lower right toward the lower left, with a small wooden bridge and one lone fisherman's boat. A tiny pavilion on a cliff, sparse pine branches framing the top right. Monochrome black ink with subtle warm grey washes, no colour. Minimal, restrained, Song dynasty landscape, elegant negative space. No text, no calligraphy, no signature, no red seal, no border, no frame, no watermark.
- Đây là **placeholder**; nếu muốn bản gốc lịch sử, thay bằng tranh public domain từ The Met/Wikimedia và giữ credit.
- Credit trên page: “Ink landscape generated for this concept · 2026” (đổi nếu dùng tranh gốc).

## Skill contract

| Stage | Skill | Owns |
|---|---|---|
| Direction, house style, look-and-fix | `ak-design-taste` | `lint.mjs`, `inspect.mjs`, screenshots 3 width |
| Layout engine, component states, 20 gates | `ak-design-craft` | 8 states, motion, 20-gate |
| Plan, phases, task hydration | `ak-plan` | plan.md + phase files |

Ngoại lệ có lý do khi chạy inspector:

- `few-pictures`: trang chủ **cố ý** chỉ có 1 tranh. 24 ảnh nằm ở case study.
- `off-centre`: colophon 420px bên trái là bố cục cuộn tranh, không phải lỗi margin.
- `font-not-dealt`: dùng Ma Shan Zheng + Cormorant thay Cabinet Grotesk; đã ghi trong `design/reference.md`.

## Content contract

- Trang chủ: 3 tên dự án + năm + link case study.
- Case study: 8 frame/dự án (24 tổng), metadata, problem, constraint, what I did, result.
- Không bịa khách/số liệu. Ảnh portrait thật hoặc không dùng.

## Tech

- Next.js 15 App Router + TypeScript, CSS Modules + tokens.
- Font: Ma Shan Zheng + Cormorant Garamond (self-host subset ở Phase 3).
- Ảnh: `next/image` cho `ink-scroll.jpg`, `priority`, `sizes="(max-width: 900px) 100vw, 70vw"`.
- Không UI/animation library.
- Budget: JS ≤90KB gz, LCP ≤1.8s 4G, CLS 0, Lighthouse perf ≥90, a11y/SEO/BP 100.

## Phases

| # | Phase | Status |
|---|-------|--------|
| 1 | [Scope Lock](./phase-01-start.md) | Pending |
| 2 | [Evidence & Content](./phase-02-evidence-content.md) | Pending |
| 3 | [Design System & Shell](./phase-03-design-system-shell.md) | Pending |
| 4 | [Home: The Scroll](./phase-04-home-sheet.md) | Pending |
| 5 | [Case Studies](./phase-05-case-studies.md) | Pending |
| 6 | [Motion & Seal](./phase-06-light-table-motion.md) | Pending |
| 7 | [Quality Gates](./phase-07-quality-gates.md) | Pending |
| 8 | [Ship](./phase-08-ship.md) | Pending |

## Success Criteria

- [ ] 1440×900: thấy tranh + 墨築 + “I build in layers.” + CTA trong màn hình đầu.
- [ ] 390: không tràn ngang; inspector 0 FAIL / 0 WARN (đã đạt ở mockup).
- [ ] 3 case study có 24 frame thật, problem → constraint → did → result.
- [ ] Không ảnh stock, không metric bịa.
- [ ] 18/20 craft gate; 100% hard gate.
- [ ] Lighthouse mobile ≥90 perf, 100 a11y/SEO/BP; CLS 0; JS ≤90KB.
- [ ] Deploy + OG + CV PDF + link profile.
- [ ] `ak plan status` = 8/8.

## Must supply

- Tên hiển thị + domain.
- 3 dự án: tên, link/repo, vai trò, stack, năm, kết quả.
- Ảnh portrait thật (hoặc bỏ).
- Link Upwork/Fiverr, email, link đặt lịch.
- Giá/timeline muốn công khai.
