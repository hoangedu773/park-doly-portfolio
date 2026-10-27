# Decision — pivot from contact sheet to graphic poster

Date: 2026-10-27
Status: accepted by user request

## Trigger

User asked for a **graphic** design like `elayadesign/ai-design-skills`, and specifically remembered
a landing page using Hokusai's *Great Wave*. The first concept (The Proof Sheet, contact-sheet direction)
was archival and quiet; it did not carry the poster energy the user wants.

## Before → after

| | Before | After |
|---|---|---|
| Direction | `contact-sheet` | `loud-flat-poster` |
| Hero | name + 3 text blocks + 24 small frames | Great Wave full-bleed + 2-line poster headline |
| Type | Libre Franklin + Source Serif 4 | Cabinet Grotesk 800/500/400 |
| Palette | frost + slate (light cool) | bone + ink + indigo + vermilion |
| Work | 3 runs of 8 frames, light table | 3 full-width panels, 1 large screen + 3 details |
| Motion | masked headline 900ms | masked headline + image drift + per-word manifesto |
| Interaction | light table dialog | screen viewer dialog (same native `<dialog>` pattern) |

## What stays

- 3 real projects, 8 frames each = 24 real screens; no stock.
- 3 case studies with problem → constraint → what I did → result.
- Next.js 15, TypeScript, CSS Modules, no UI/animation library.
- Quality gates: taste `lint`/`inspect` at 1440/768/390, craft 20-gate, Lighthouse budgets.
- No fake clients, metrics or testimonials.

## Why the wave is not decoration

The print is a **woodblock**: keyblock, colour blocks, registration marks, printed in layers.
A web product is also built in layers: tokens, components, states, tests. The headline **“I build in layers”**
ties the art to the craft. The wave is the proof of taste, not a background.

## Sources

- Repo: https://github.com/elayadesign/ai-design-skills (MIT)
- Skill: https://raw.githubusercontent.com/elayadesign/ai-design-skills/main/skills/landing-page-design/SKILL.md
- Author: https://elaya.design
- Art: https://www.metmuseum.org/art/collection/search/45434 (public domain)
- Local image: `public/art/great-wave.jpg` (3859×2594)

## Open

- The exact demo landing page the user remembers was not found. The repo has no demo; the author's site
  and projects do not use the print; X blocks unauthenticated timeline access. The art and the design
  system were sourced independently.
- The mockup is hero-only. Work panels and case studies are specified in Phase 4–5 and will use real
  screenshots from Phase 2.
