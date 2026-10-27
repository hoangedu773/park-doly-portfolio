---
title: "Phase 8: Ship"
status: todo
---

# Phase 8: Ship

## Overview

Đưa lên mạng, kiểm tra bằng mắt trên thiết bị thật, và bàn giao. Ship không phải "deploy xong là hết":
phải có OG preview, CV, link profile, và một trang 404 tử tế.

## Requirements

- [ ] Deploy Vercel (production), domain (nếu có) trỏ đúng.
- [ ] OG image 1200×630 từ tranh + headline “I build in layers.”, <300KB.
- [ ] `sitemap.xml`, `robots.txt`, canonical, JSON-LD Person.
- [ ] CV PDF 1 trang, link tải trên header/footer.
- [ ] Link Upwork/Fiverr/email/book-a-call hoạt động.
- [ ] 404 + error page đã test.
- [ ] Credit tranh có trên page và trong README.
- [ ] Analytics nhẹ (Vercel Analytics) hoặc bỏ qua có chủ đích.

## Implementation Steps

1. `vercel --prod` hoặc connect Git; set env nếu có.
2. Metadata: `metadataBase`, title template, description, OG/Twitter card.
3. `app/opengraph-image.tsx` hoặc file tĩnh 1200×630: crop tranh + headline; kiểm tra bằng `https://www.opengraph.xyz/`.
4. Tối ưu ảnh: `great-wave.jpg` 2.3MB → các size 640/1024/1600/2400 WebP/AVIF; `next/image` tự phục vụ; giữ file gốc trong `public/art/`.
5. `app/sitemap.ts`, `app/robots.ts`.
6. CV: `/cv` printable, `@media print` 1 trang A4; xuất PDF; đặt ở `public/cv.pdf`.
7. Test trên iPhone/Android thật: scroll, tap, screen viewer, mailto.
8. Viết `README.md` ngắn: stack, cách thêm dự án, cách chạy, nơi đặt ảnh, credit tranh.
9. Đóng plan: `ak plan update poffolio/261027-1409 --status completed`.

## Todo

- [ ] Deploy production + domain.
- [ ] OG image + preview đúng.
- [ ] Ảnh hero tối ưu, không serve file 2.3MB cho mobile.
- [ ] Sitemap/robots/JSON-LD.
- [ ] CV PDF.
- [ ] Test thiết bị thật.
- [ ] README + credit tranh.
- [ ] Đóng plan.

## Success Criteria

- [ ] URL live mở được, không lỗi console.
- [ ] OG preview hiện đúng ảnh + title.
- [ ] CV PDF mở được, đúng 1 trang.
- [ ] Mọi link ngoài dùng `rel="noopener"`, không link chết.
- [ ] `ak plan status` = 8/8.
