# Handoff: Accreditations block ("Trained & Certified")

## Overview

A new credentials row to add **inside the existing "Who am I" section** on the coaching homepage (`#aboutme`), positioned directly **below** the existing two-column (photo + bio) grid, **inside the same white container**. It surfaces five coaching certifications as elegant typographic marks in pure black & white — matching the rest of the site's aesthetic rather than reproducing third-party badge logos.

## About the Design Files

The files in this bundle are **design references created in HTML** — a prototype of the intended look. The task is to **recreate this block inside the existing codebase** using its established patterns (e.g. React component, Vue SFC, etc.) and design tokens — not to drop the HTML in verbatim.

## Fidelity

**High-fidelity.** Pixel-perfect with final colors, typography, spacing. Recreate exactly.

## Placement

- Lives inside the existing `<section className="aboutme" id="aboutme">` (the "Who am I" white-paper section).
- Sits as a sibling to `.aboutme-grid`, **after** it, **inside the same `.container`**.
- Spans the full width of the container (not constrained to the right text column).

Resulting structure:

```
<section class="aboutme">
  <div class="container">
    <div class="aboutme-grid"> … existing photo + bio … </div>

    <div class="accreds"> ← NEW
      <div class="accreds-head"><h3>Trained &amp; Certified</h3></div>
      <div class="accreds-row">
        <div class="accred"> … × 5 … </div>
      </div>
    </div>
  </div>
</section>
```

## Layout

- Top of block: 1px hairline rule (`--rule`) above, 56px padding to header.
- Header: single short eyebrow heading "Trained & Certified", centered, all caps, letter-spaced.
- Body: 5-column CSS grid, equal columns, zero gap, hairline vertical dividers between cells (`border-left` on all cells except the first).
- Each cell: centered column — 84px circular mark, then 18px gap, then credential name + issuer stacked.

## The five credential cells

| # | Mark text  | Mark size class | Credential name                         | Issuer                          |
|---|------------|-----------------|------------------------------------------|---------------------------------|
| 1 | `PCC`      | `size-l` (22px) | Professional Certified Coach             | International Coach Federation  |
| 2 | `CPCC`     | `size-m` (19px) | Certified Professional Co-Active Coach   | Co-Active Training Institute    |
| 3 | `Co·A`     | `size-s` (16px) | Co-Active Leadership Certificate         | Co-Active Training Institute    |
| 4 | `BBC`      | `size-s` (16px) | Brain-Based Coaching Certificate         | NeuroLeadership Institute       |
| 5 | `iEQ9`     | `size-m` (19px) | Integrative Enneagram Practitioner       | Integrative9 — Accredited       |

The mark size class only changes the font-size inside the circle so different-length labels look optically balanced. The circle dimensions stay 84×84 in every cell.

For the third cell the dot between "Co" and "A" should render at 50% opacity (`<span style="opacity:.5">·</span>`) so it reads as a subtle separator rather than a punctuation glyph.

## Components

### `.accreds` (container)
- `margin-top: 100px`
- `padding-top: 56px`
- `border-top: 1px solid var(--rule)`

### `.accreds-head`
- Flex, `justify-content: center`, `align-items: baseline`
- `margin: 0 0 56px`

### `.accreds-head h3`
- font: Manrope 600, 13px / 1, `letter-spacing: .22em`, uppercase
- color: `var(--mute-dark)` (rgba(10,10,10,.62))
- margin: 0
- copy: `Trained & Certified` (ampersand encoded as `&amp;`)

### `.accreds-row`
- `display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; align-items: stretch`

### `.accred` (each cell)
- `padding: 8px 24px 4px`
- `border-left: 1px solid var(--rule)` (remove on `:first-child`)
- flex column, centered, `gap: 18px`

### `.accred .mark`
- 84 × 84 px circle
- `border: 1px solid var(--ink)`
- `border-radius: 50%`
- background `var(--paper)`, color `var(--ink)`
- font: Manrope 800, `letter-spacing: -.02em`
- centered flex
- size variants: `.size-l` 22px · `.size-m` 19px · `.size-s` 16px (`letter-spacing: -.01em`)
- transition `background .2s, color .2s`

### `.accred:hover .mark`
- background → `var(--ink)`
- color → `var(--paper)`
- (the rest of the cell does nothing on hover)

### `.accred .body`
- flex column, centered, `gap: 8px`, `min-height: 84px` (keeps the row visually balanced when copy varies in length)

### `.accred .name`
- Manrope 700, 13px / 1.3, `letter-spacing: -.005em`, uppercase
- color `var(--ink)`
- `max-width: 180px`

### `.accred .issuer`
- Manrope 500, 10.5px / 1.4, `letter-spacing: .14em`, uppercase
- color `var(--mute)`
- `max-width: 180px`

## Interactions & Behavior

- **Mark hover** — invert mark to filled black with white text (200ms transition on `background` and `color`). Optional but recommended; gives the row a tactile feel without breaking the static composition.
- No clicks, no nav, no tooltips. The block is purely informational.

## Responsive

Single breakpoint at `max-width: 1000px`:

- `.accreds`: `margin-top: 64px; padding-top: 40px`
- `.accreds-head`: `margin-bottom: 40px`
- `.accreds-row`: `grid-template-columns: repeat(2, 1fr); gap: 32px 0`
- `.accred`: `border-left: 0; padding: 16px 12px`
- `.accred:nth-child(even)`: re-add `border-left: 1px solid var(--rule)` so the 2-col grid keeps a divider down the middle
- Result: 2 columns × 3 rows (the 5th cell sits alone in the last row, left column)

## Design Tokens (reuse existing site tokens)

```
--ink:        #0a0a0a
--paper:      #ffffff
--soft:       #f4f3ef    (page background outside the white card)
--rule:       rgba(10,10,10,.10)
--mute:       rgba(10,10,10,.45)
--mute-dark:  rgba(10,10,10,.62)
```

Typography: **Manrope** (existing site font) — weights 500, 600, 700, 800.

## Why typographic marks instead of real badge logos

The reference image showed full-color third-party badges (ICF PCC roundel, CTI CPCC badge, NeuroLeadership coloured logo, iEQ9 logo, etc). Those are:

1. Protected trademarks of their issuing bodies.
2. Loud, multi-color, and incompatible with the site's strict B&W aesthetic.

The handoff therefore renders each credential as an **original B&W typographic mark** — a 1px circular outline with the abbreviation set in the site's display sans. If the client later decides they specifically want the official issuer badges (some accreditations *require* this in their usage guidelines — worth checking with ICF / NLI), swap each `.accred .mark` for an `<img>` of the official mark; everything else (layout, dividers, name + issuer rows) stays.

## Assets

None. The block is pure HTML/CSS — no images, no icons.

## Files in this handoff

- `accreditations.html` — standalone preview of just this block, with the parent white card as a wrapper and a dashed placeholder where the existing "Who am I" grid sits.
- `README.md` — this file.
- `screenshots/`
  - `01-accreditations-block.png` — desktop 5-column layout, isolated on white card.
  - `02-responsive-mobile.png` — mobile 2-column layout (≤1000px breakpoint).
  - `03-in-context-on-site.png` — block as it renders in the live `v5.html` page, between "Who am I" bio and the "No pressure. Just clarity." Contact section.

## Reference files in the parent project

- `variations/v5-behance.jsx` — the live source where this block has been added. CSS lives in the injected `<style>` near `/* ACCREDITATIONS */`; JSX lives inside `<section className="aboutme">`, immediately after `.aboutme-grid`.
- `v5.html` — entry HTML that renders `V5Behance` and shows the full page in context.
