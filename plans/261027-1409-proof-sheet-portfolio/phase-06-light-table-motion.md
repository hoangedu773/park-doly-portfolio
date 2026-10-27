---
title: "Phase 6: Motion & Seal"
status: todo
---

# Phase 6: Motion & Seal

## Overview

Chuyển động tối thiểu nhưng có chủ đích: mực thấm cho mark, chữ nổi lên, con dấu đóng xuống, tranh drift.
Trang là một tác phẩm, không phải app; không thêm interaction thừa.

## Requirements

- [ ] Mark 墨築: `inkIn` 1.3s (opacity + blur 3px → 0 + translateY 10px → 0).
- [ ] Headline/subline/proof/nav/works/contact: `fadeUp` 900ms, stagger 80–100ms.
- [ ] Seal: `stamp` 500ms (scale 1.25 → 1, rotate -3deg), delay 1.25s.
- [ ] Tranh: `drift` 24s alternate (scale 1 → 1.03, translateX -0.6%).
- [ ] `prefers-reduced-motion`: tắt toàn bộ animation/transform; giữ opacity tức thời.
- [ ] Không `transition: all`; chỉ `transform`/`opacity`/`filter` (filter chỉ ở inkIn).
- [ ] Case study gallery: hover/focus state cho ảnh, không lightbox phức tạp.

## Implementation Steps

1. `@keyframes inkIn`, `fadeUp`, `stamp`, `drift` trong `globals.css`.
2. Gán animation theo thứ tự đọc: mark → headline → CTA → subline → proof → nav → works → contact.
3. Seal delay sau mark; không đè CTA.
4. Reduced motion media query tắt hết.
5. Test CLS: ảnh có width/height, mark có height cố định desktop.
6. Test 390: animation ngắn, không giật; tranh không drift trên mobile.

## Todo

- [ ] inkIn + fadeUp.
- [ ] stamp.
- [ ] drift.
- [ ] Reduced motion.
- [ ] CLS check.
- [ ] Case study hover/focus.

## Success Criteria

- [ ] CLS 0.
- [ ] Reduced motion: không còn transform/drift.
- [ ] Không animation nào >1.4s ngoài drift.
- [ ] Seal không đè text/CTA ở 1440/768/390.
- [ ] Keyboard focus vẫn rõ trong lúc animation chạy.
