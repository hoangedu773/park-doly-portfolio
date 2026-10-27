---
title: "Phase 7: Quality Gates"
status: todo
---

# Phase 7: Quality Gates

## Overview

Không tin mắt mình. Đo bằng script thật ở 3 width, soi 20 gate của craft, rồi sửa tối đa 3 vòng.
Phase này là điều kiện để được ship, không phải "chạy cho có".

## Requirements

- [ ] `lint.mjs` sạch (không banned pattern, không stock phrase).
- [ ] `inspect.mjs` chạy 1440/768/390, lưu screenshot, không lỗi tràn ngang/che text.
- [ ] 18/20 craft gate, 100% hard gate (contrast, focus, touch, no fixed width, no pure black/white).
- [ ] Palette/font khớp `design/reference.md`: Ma Shan Zheng + Cormorant Garamond loaded, không fallback.
- [ ] Credit tranh: “Ink landscape generated for this concept · 2026” (hoặc credit public domain nếu thay tranh).
- [ ] Ngoại lệ inspector có lý do: `few-pictures` (1 tranh), `off-centre` (colophon), `font-not-dealt` (chữ Nho).
- [ ] Ảnh hero có `alt` mô tả tranh; không dùng làm background-image mất alt.
- [ ] Lighthouse mobile: perf ≥90, a11y/SEO/BP 100; CLS 0; JS ≤90KB gz.
- [ ] axe DevTools: 0 critical/serious.
- [ ] Không console error, không 404 asset, không link chết.

## Implementation Steps

1. Đối chiếu `design/reference.md`: token, font, credit tranh, tỉ lệ ảnh.
2. Static scan:
   ```bash
   node "C:/Users/hoang/.workbuddy-ai/skills/agentkit/ak-design-taste/scripts/lint.mjs" .
   ```
3. Build + start, rồi inspect:
   ```bash
   npm run build && npm run start
   node "C:/Users/hoang/.workbuddy-ai/skills/agentkit/ak-design-taste/scripts/inspect.mjs" http://localhost:3000 --out .taste-skill/report
   ```
4. Đọc screenshot ở 3 width; chấm rubric; sửa 3 lỗi nặng nhất; lặp tối đa 3 vòng.
5. Điền checklist 20 gate vào `plans/.../reports/craft-gates.md`, ghi rõ gate nào `N/A + lý do`.
6. Chạy Lighthouse (Chrome headless) + axe; lưu JSON vào `reports/`.
7. Kiểm tra keyboard-only và `prefers-reduced-motion` bằng DevTools rendering.
8. Kiểm tra riêng: vermilion chỉ dùng cho chấm/chi tiết lớn, không dùng cho chữ <18px.

## Todo

- [ ] `lint.mjs` sạch.
- [ ] `inspect.mjs` 3 width + screenshot.
- [ ] 3 vòng look-and-fix, ghi lại đã sửa gì.
- [ ] Checklist 20 gate.
- [ ] Palette/font/credit khớp `design/reference.md`.
- [ ] Lighthouse + axe + link check.
- [ ] Keyboard + reduced motion test.
- [ ] Vermilion contrast check.

## Success Criteria

- [ ] Không còn lỗi hard gate.
- [ ] Ảnh chụp 3 width không có text bị che/cắt, không có màn hình trống.
- [ ] Báo cáo gate có bằng chứng (số đo, screenshot), không chỉ tick.
- [ ] Mọi lỗi còn lại được ghi thành `known issue` có lý do, không giấu.
