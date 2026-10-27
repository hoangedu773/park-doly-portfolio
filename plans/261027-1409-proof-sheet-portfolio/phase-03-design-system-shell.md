---
title: "Phase 3: Design System & Shell"
status: todo
---

# Phase 3: Design System & Shell

## Overview

Dựng nền cho hướng **ink scroll**: Next.js, tokens giấy/mực/son, hai font (Ma Shan Zheng + Cormorant Garamond),
colophon 420px, con dấu, tranh nền. Chưa làm nội dung dự án.

## Requirements

- [ ] Next.js 15 App Router + TypeScript, không UI library.
- [ ] Font: Ma Shan Zheng (chữ Nho) + Cormorant Garamond (English), self-host subset ở `public/fonts/`.
- [ ] Tokens: `--paper #e7e0d2`, `--ink #1b1a17`, `--ink-soft #4b4841`, `--seal #a83a2b`, `--seal-bright #c8402a`.
- [ ] `:focus-visible` ring 2px `--seal`, offset 3px; skip link.
- [ ] Ảnh `ink-scroll.jpg` qua `next/image`, `priority`, `sizes="(max-width: 900px) 100vw, 70vw"`.
- [ ] Không `overflow-x: hidden` trên body; không fixed width; không shadow/gradient.

## Implementation Steps

1. Scaffold:
   ```bash
   npx create-next-app@latest . --ts --app --css-modules --eslint --no-tailwind --import-alias "@/*"
   ```
2. `app/globals.css`: reset, tokens, `::selection`, focus ring, reduced motion.
3. `lib/fonts.ts` + `@font-face`:
   ```css
   @font-face{font-family:"Ma Shan Zheng";src:url("/fonts/ma-shan-zheng.woff2") format("woff2");font-display:swap}
   @font-face{font-family:"Cormorant Garamond";src:url("/fonts/cormorant-garamond-400.woff2") format("woff2");font-weight:400;font-display:swap}
   ```
   Subset chữ Nho chỉ cần 墨築; dùng fonttools pyftsubset hoặc Google Fonts CSS.
4. `components/Colophon.tsx`: brand/mark, headline, CTA, subline, proof, nav, works, contact, credit.
5. `components/Seal.tsx`: 86×86, chữ 墨, viền trong 1px, xoay -3deg, `aria-hidden`.
6. `components/InkStage.tsx`: ảnh nền + colophon + seal; mobile 44svh.
7. `app/layout.tsx`: metadata, `lang="en"`, skip link.
8. `app/not-found.tsx` + `app/error.tsx`.
9. Test 1440/768/390; kiểm tra không tràn ngang, touch target ≥44px.

## Todo

- [ ] Scaffold + `npm run dev`.
- [ ] Tokens + fonts load đúng, không fallback.
- [ ] Colophon + seal + ink stage.
- [ ] Ảnh `next/image` không méo, LCP ổn.
- [ ] 404 + error page.
- [ ] Mobile stack đúng.

## Success Criteria

- [ ] `npm run build` pass.
- [ ] 3 width không tràn ngang.
- [ ] Token/font khớp `design/reference.md`.
- [ ] Colophon rộng 420px desktop, 100% mobile.
- [ ] Seal không đè text, không đè CTA.
