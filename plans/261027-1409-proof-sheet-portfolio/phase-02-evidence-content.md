---
title: "Phase 2: Evidence & Content"
status: todo
---

# Phase 2: Evidence & Content

## Overview

Biến 3 dự án thành 24 frame thật + copy thật. Đây là phase chặn: không có ảnh và số liệu thật
thì không được bắt đầu dựng giao diện, vì mọi layout đều phụ thuộc vào tỉ lệ và số lượng frame.

## Requirements

- [ ] 3 dự án chạy được (local hoặc live) để chụp.
- [ ] Mỗi dự án 8 frame: landing, flow chính, dashboard/chat, mobile, empty, loading, error, detail.
- [ ] Ảnh desktop 1440×900 @2x, mobile 390×844 @2x; PNG/WebP, không nén mất chữ.
- [ ] Mỗi ảnh có `alt` mô tả **điều nó chứng minh**, không mô tả chung chung.
- [ ] Copy: hero 1 câu, 3 project blurb, 3 dịch vụ, about 5 câu, process 4 bước, CTA 2 câu.

## Implementation Steps

1. Audit từng dự án: chạy local, liệt kê route/trạng thái có thể chụp. Ghi vào `content/evidence.md`.
2. Với mỗi dự án, chọn 8 trạng thái theo checklist; nếu thiếu state, tạo state thật trong app (empty/loading/error)
   thay vì bịa ảnh.
3. Chụp bằng Playwright với Chrome có sẵn:
   ```bash
   npx playwright screenshot --viewport-size=1440,900 --full-page <url> public/work/<slug>/01-landing.png
   ```
   Với state cần click/scroll, viết `scripts/capture.mjs` dùng `playwright` + `channel: 'chrome'`.
4. Chuẩn hoá ảnh: cắt bỏ browser chrome, giữ đúng tỉ lệ, xuất WebP q=82 + PNG gốc.
5. Viết `content/projects.ts` theo type:
   ```ts
   type Frame = { src: string; alt: string; caption: string; kind: 'desktop' | 'mobile' };
   type Project = {
     slug: string; name: string; year: number; role: string; stack: string[];
     duration: string; liveUrl?: string; private?: boolean; blurb: string;
     problem: string; constraint: string; did: string[]; result: string; frames: Frame[];
   };
   ```
6. Viết copy vào `content/copy.ts` (hero, services, about, process, cta). Không dùng từ tự khen.
7. Kiểm tra: đếm frame = 24; mọi ảnh > 1600px; không ảnh stock; không text placeholder.

## Todo

- [ ] `content/evidence.md` — audit 3 dự án.
- [ ] 24 ảnh trong `public/work/<slug>/`, đúng tên `01-...` → `08-...`.
- [ ] `content/projects.ts` đầy đủ, type-check pass.
- [ ] `content/copy.ts` đầy đủ, tiếng Anh, không sáo ngữ.
- [ ] `content/brief.md` có link live/repo + kết quả thật.

## Success Criteria

- [ ] 24 frame thật, mỗi frame có alt + caption "điều nó chứng minh".
- [ ] Không còn `TBD`, `Lorem`, `Project 1`, `Client A`.
- [ ] Mỗi dự án có ít nhất 1 kết quả định lượng hoặc một mô tả kiểm chứng được.
- [ ] Ảnh đủ nét ở 2x, tổng dung lượng < 6MB sau tối ưu.
