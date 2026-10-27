# Decision — pivot 2: from graphic poster to ink scroll

Date: 2026-10-27
Status: accepted by user request

## Trigger

User: “page là 1 bức tranh trong đó luôn”, chữ Nho viết bằng mực tàu.
The Great Wave poster was still an image on a page; the user wants the **page itself** to be the painting.

## Before → after

| | Before | After |
|---|---|---|
| Metaphor | printed poster / woodblock layers | handscroll: painting + colophon |
| Layout | full-bleed wave + text overlay | 70% painting, 420px paper colophon |
| Mark | Latin name + English headline | chữ Nho **墨築** + English headline |
| Type | Cabinet Grotesk | Ma Shan Zheng + Cormorant Garamond |
| Palette | bone / indigo / vermilion | paper / ink / seal red |
| Proof | 24 screens on the home | 3 project names on home; 24 screens in case studies |
| Motion | masked headline + drift | ink bleed, fade-up, seal stamp, drift |

## What stays

- “I build in layers.” as the English headline.
- 3 real projects, 8 frames each = 24 real screens, no stock, no fake metrics.
- Next.js 15, TypeScript, CSS Modules, no UI/animation library.
- Taste `inspect` at 1440/768/390 + craft 20-gate + Lighthouse budgets.

## Image

Generated with ImageGen, 1536×1024, watermark cropped to 1536×916.
Prompt and credit in `design/reference.md`. This is a placeholder; a public-domain
museum scroll can replace it without changing the layout.

## Inspector

- 390px: **0 FAIL / 0 WARN**.
- 1440px: `few-pictures`, `off-centre`, `font-not-dealt` allowed with reasons:
  the home is deliberately one painting, the colophon is the scroll margin, the type is calligraphic.

## Open

- Name, 3 projects, links, rates still needed (`content/brief.md`).
- Decide whether the final art is the generated scroll or a public-domain historical scroll.
