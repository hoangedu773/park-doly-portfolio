---
title: "Phase 4: Home — The Scroll"
status: todo
---

# Phase 4: Home — The Scroll

## Overview

Dựng trang chủ **một bức tranh**: tranh landscape 70% bề ngang, colophon giấy 420px bên trái chứa toàn bộ
nội dung; con dấu đỏ ở góc dưới phải. Đây là phase quyết định “trông có được không”.

## Requirements

- [ ] Chọn biến thể sau khi user duyệt: **A. Colophon** (cạnh cứng) hoặc **B. Wash** (giấy mờ tan vào tranh — khuyến nghị).
- [ ] Colophon 420px (A) hoặc 460px + wash 560px (B), full height, nền `--paper`.
- [ ] Mark **墨築** dọc (writing-mode vertical-rl), 104–124px, Ma Shan Zheng.
- [ ] Headline **“I build in layers.”** 46px Cormorant, 1–2 dòng.
- [ ] CTA **“See the work”** 46px tall, nền ink, chữ paper, full width colophon.
- [ ] Subline 16px ink, max 33ch; proof 13px; nav 14px; works 19px; contact 19px.
- [ ] 3 tên dự án + năm + link case study; không card, không ảnh.
- [ ] Tranh `object-fit: cover`, `object-position: 54% 48%`, drift 24s.
- [ ] Seal 86×86, chữ 墨, góc dưới phải, xoay -3deg.
- [ ] Mobile: tranh 44svh, colophon xếp dọc, mark 墨築 chuyển ngang 72px.
- [ ] Không tràn ngang ở 390; CTA visible trong màn hình đầu.

## Implementation Steps

1. `components/InkStage.tsx`: `<img>`/`next/image` + `.colophon` + `.seal`.
2. `components/Colophon.tsx`: mark, h1, CTA, subline, proof, nav, works, contact, credit.
3. `components/WorksList.tsx`: 3 dòng, chấm son 6px, năm bên phải, link.
4. `components/Seal.tsx`: `aria-hidden`, chữ 墨, viền trong.
5. CSS: colophon flex column, `margin-top:auto` cho contact; mobile stack.
6. Kiểm tra 1440×900: tranh + 墨築 + headline + CTA trong màn hình đầu.
7. Kiểm tra 390: tranh 44svh, mark ngang, CTA trước subline.
8. Kiểm tra 768: colophon 420px vẫn ổn; nếu chật, chuyển stack sớm.

## Todo

- [ ] Ink stage + tranh.
- [ ] Colophon + mark + headline.
- [ ] CTA + subline + proof.
- [ ] Nav + works + contact + credit.
- [ ] Seal.
- [ ] Mobile stack.

## Success Criteria

- [ ] 1440×900: thấy tranh, 墨築, headline, CTA.
- [ ] 390: không tràn ngang; inspector 0 FAIL / 0 WARN.
- [ ] CTA ≥44px, focus ring rõ.
- [ ] Không gradient, shadow, card, icon.
- [ ] Tên dự án/year đúng dữ liệu thật.
