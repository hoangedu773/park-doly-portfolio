---
title: "Phase 5: Case Studies"
status: todo
---

# Phase 5: Case Studies

## Overview

3 trang `/work/[slug]` đủ sâu để trả lời "có làm được việc của tôi không": problem → constraint →
what I did → result → screens → link. Không phải blog, không phải gallery ảnh.

## Requirements

- [ ] 1 template dùng chung, data-driven từ `content/projects.ts`.
- [ ] Mỗi trang 6–8 ảnh thật, có caption "điều nó chứng minh".
- [ ] Cấu trúc: header (tên, năm, role, stack, live link) → Problem → Constraint → What I did (3 bullet) → Result → Screens → Next/Prev.
- [ ] `generateStaticParams` + `generateMetadata` riêng cho từng trang.
- [ ] JSON-LD `CreativeWork` (không bịa rating).
- [ ] Ảnh `next/image` với `sizes`, `priority` chỉ cho ảnh đầu.

## Implementation Steps

1. `app/work/[slug]/page.tsx`: lấy project theo slug, `notFound()` nếu không có.
2. `components/CaseHeader.tsx`: tên + metadata dạng bảng nhỏ, không card.
3. `components/CaseSection.tsx`: heading + paragraph + figure; grid 12 cột, text 6 cột.
4. `components/CaseGallery.tsx`: ảnh lớn + caption, không lightbox (light table chỉ ở home).
5. `components/CaseNav.tsx`: prev/next theo thứ tự năm.
6. `generateMetadata`: title, description, OG image lấy từ frame đầu.
7. Kiểm tra: mỗi trang có ít nhất 1 kết quả định lượng; không copy-paste giữa 3 trang.

## Todo

- [ ] Template + 3 trang.
- [ ] 3 bộ copy riêng (problem/constraint/did/result).
- [ ] Ảnh + caption + alt.
- [ ] Prev/next + breadcrumb về home.
- [ ] Metadata + JSON-LD.

## Success Criteria

- [ ] 3 URL `/work/<slug>` build tĩnh, mở trực tiếp không lỗi.
- [ ] Mỗi trang có 6+ ảnh, không CLS.
- [ ] Không trang nào dài quá 6 màn hình desktop (đọc được trong 2 phút).
- [ ] Link live (nếu có) mở tab mới, `rel="noopener"`.
