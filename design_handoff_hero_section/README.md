# Handoff: Coaching Website — Hero Section

## Overview

This package contains the **hero section** for Jasmine Truong's executive coaching website. It is the first thing a visitor sees: a full-bleed black-and-white portrait, a centered name set in a heavy sans, and a tagline directly below it. The composition has been refined through several rounds with the designer; the final variant is what's in `hero.html`.

## About the Design Files

The files in this bundle are **design references built in HTML/CSS**. They are not production code to ship as-is — they are an unambiguous specification of how the hero should look and behave.

Your job: **recreate this hero in the project's actual codebase** (React, Vue, Astro, plain HTML, whatever the rest of the site uses), using its established components, design tokens, and conventions. If the project doesn't have a codebase yet, choose the most appropriate framework and implement the hero there using the values documented below.

## Fidelity

**High-fidelity.** Pixel-perfect mockup with final colors, type sizes, weights, spacing, and the exact tagline copy with bold-emphasis spans. Reproduce the layout exactly; substitute the project's font/color tokens only if they match the values listed below.

---

## The Hero Composition

A single full-bleed section that fills the top of the page.

```
┌─────────────────────────────────────────────────────┐
│  JASMINE TRUONG    About · Coaching · …    Book →   │  ← Nav
│                                                     │
│                                                     │
│              [ B&W portrait, face                   │
│                in the upper third ]                 │
│                                                     │
│                                                     │
│                                                     │
│                                                     │
│                   Jasmine Truong                    │  ← Name (huge,
│                                                     │     mix-blend-difference)
│       Leadership begins with presence,              │  ← Tagline (light,
│        and becomes real in practice.                │     with bold spans)
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Stacking order (z-index)

1. **Photo** (background, full bleed, B&W)
2. **Gradient overlay** (bottom darken, ensures text contrast)
3. **Grain overlay** (optional, 3.5% opacity SVG noise; can be omitted)
4. **Nav** (z-index 30)
5. **Name + tagline stack** (default flow above the overlays)

---

## Component Details

### Section frame
- **Element**: a single `<section class="hero">` at the top of the page
- **Width**: 100% of viewport
- **Aspect ratio**: `1320 / 760` (≈ 1.74:1) — letterboxes naturally on wide screens
- **Min height**: `600px` so very wide-but-short viewports still feel like a hero
- **Background**: `#191917` (used as fallback while the photo loads)
- **Overflow**: hidden
- **`isolation: isolate`** — required so `mix-blend-mode: difference` on the name only blends against the photo, not whatever is behind the page

### Photo
- **Source**: `assets/jasmine-serious.jpg` (1600×1067, supplied with this package)
- **Sizing**: `width: 100%; height: 100%; object-fit: cover`
- **Crop**: `object-position: 50% 6%` — raises her face into the upper third
- **Treatment**: `filter: grayscale(1) contrast(1.06) brightness(0.6)`
  - `grayscale(1)` — strict B&W, no color
  - `contrast(1.06)` — slight bump for definition
  - `brightness(0.6)` — darkens enough that white text below stays legible

### Bottom gradient
A linear gradient overlay on its own absolutely-positioned div (`.hero-grad`), `inset: 0`, `pointer-events: none`:

```css
background: linear-gradient(
  180deg,
  rgba(0, 0, 0, 0.25)   0%,
  rgba(0, 0, 0, 0)     30%,
  rgba(0, 0, 0, 0)     45%,
  rgba(0, 0, 0, 0.82) 100%
);
```

A subtle darken at the very top (helps nav legibility) and a stronger darken at the bottom (under the name + tagline). The middle stays clean so her face isn't muddied.

### Grain (optional)
Pseudo-element on `.hero::after`:
- Inline SVG `<feTurbulence>` data URL, repeated
- `opacity: 0.035`
- `mix-blend-mode: overlay`

Adds photographic texture to the dark areas. Safe to omit if your stack dislikes inline SVG data URLs.

### Navigation
- **Position**: absolute, top: 0, full width, z-index 30
- **Background**: `rgba(25, 25, 23, 0.6)` + `backdrop-filter: blur(8px)`
- **Border-bottom**: `1px solid rgba(255, 255, 255, 0.14)`
- **Padding**: `18px 36px`
- **Layout**: flex, `justify-content: space-between`, `align-items: center`
- **Brand mark** (left): "JASMINE TRUONG" — Manrope 800, 13px, letter-spacing 0.04em
- **Links** (center): flex row, gap 26px, each `color: rgba(255,255,255,0.65)`, 12px. Hover → solid white.
- **CTA pill** (right): "Book a free call →" — 7px 14px padding, `1px solid rgba(255,255,255,0.3)` border, `border-radius: 999px`, 12px. Hover → white fill, ink text.

### Name + tagline stack (the focal block)

A single absolutely-positioned container, anchored to the bottom of the hero:

```css
.hero-stack {
  position: absolute;
  left: 0; right: 0;
  bottom: 70px;
  text-align: center;
}
```

#### Name — `<h1 class="hero-name">`
- **Copy**: `Jasmine Truong`
- **Font**: Manrope 800
- **Size**: `128px`
- **Letter-spacing**: `-0.05em` (tight)
- **Line-height**: `0.9`
- **Color**: `#ffffff`
- **`mix-blend-mode: difference`** — inverts the name against the photo behind it. Over dark areas → white. Over light areas → dark. This is the signature move of the composition; do not drop it.
- **Margin-bottom**: `26px` (gap to tagline)

#### Tagline — `<p class="hero-tagline">`
- **Copy** (exact, with emphasis):

  > Leadership **begins with presence**, and becomes **real in practice**.

  As HTML:
  ```html
  Leadership <strong>begins with presence</strong>, and becomes <strong>real in practice</strong>.
  ```

- **Font**: Manrope 300 (light)
- **Size**: `30px`
- **Line-height**: `1.25`
- **Letter-spacing**: `-0.012em`
- **Color**: `rgba(255, 255, 255, 0.92)` (everything except `<strong>`)
- **Bold spans**: Manrope 700, color `#ffffff`
- **Case**: mixed case as written — **do NOT uppercase**, **do NOT all-caps**
- **Padding**: `0 80px` (keeps the line from touching the edges on narrow viewports)

---

## Responsive Behavior

Below 900px viewport width:
- Nav padding tightens to `14px 20px`
- Nav links list (`<ul>`) hides — only brand + CTA remain
- Name shrinks via `clamp(56px, 12vw, 96px)`
- Tagline shrinks via `clamp(16px, 3.2vw, 22px)` with `padding: 0 24px`
- Stack moves up to `bottom: 48px`

See `hero.html` for the full media query.

---

## Design Tokens

### Colors (B&W only — no other hues anywhere)

| Token  | Hex       | Used for                              |
|--------|-----------|---------------------------------------|
| ink    | `#191917` | Page bg, fallback while photo loads   |
| paper  | `#ffffff` | Name, bold tagline spans, hover-fill  |
| rule   | `rgba(255,255,255,0.14)` | Nav bottom border |
| mute   | `rgba(255,255,255,0.5)`  | (general muted white if needed)|

The tagline body text uses `rgba(255, 255, 255, 0.92)` — slightly softer than pure white so the `<strong>` emphasis spans pop.

### Typography

| Role       | Family  | Weight | Size  | Letter-spacing | Line-height |
|------------|---------|--------|-------|----------------|-------------|
| Name       | Manrope | 800    | 128px | -0.05em        | 0.9         |
| Tagline    | Manrope | 300    | 30px  | -0.012em       | 1.25        |
| Tagline `<strong>` | Manrope | 700 | 30px  | -0.012em       | 1.25        |
| Nav brand  | Manrope | 800    | 13px  | 0.04em         | normal      |
| Nav links  | Manrope | 400    | 12px  | normal         | normal      |

**Font import** (Google Fonts):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap">
```

### Spacing

| Where                          | Value |
|--------------------------------|-------|
| Nav padding                    | `18px 36px` |
| Stack distance from bottom     | `70px` |
| Gap between name and tagline   | `26px` (name `margin-bottom`) |
| Tagline horizontal padding     | `80px` |

### Effects

- Photo filter: `grayscale(1) contrast(1.06) brightness(0.6)`
- Nav backdrop: `rgba(25,25,23,0.6)` + `backdrop-filter: blur(8px)`
- Name blend: `mix-blend-mode: difference`
- Grain: SVG `<feTurbulence>` at `opacity: 0.035`, `mix-blend-mode: overlay`

---

## Assets

| File                          | Notes |
|-------------------------------|-------|
| `assets/jasmine-serious.jpg`  | 1600×1067 portrait, supplied. The crop with `object-position: 50% 6%` assumes this exact framing. If you swap in a different photo, you'll likely need to re-tune the object-position to keep her face in the upper third. |

The grain overlay is generated inline (SVG data URL); no asset needed.

---

## Files in This Bundle

| File                            | Purpose |
|---------------------------------|---------|
| `hero.html`                     | The hero, standalone. Open it directly in a browser. Every CSS rule is in the `<style>` block at the top, heavily commented. This is the source of truth. |
| `hero-final-reference.png`      | Reference screenshot. |
| `assets/jasmine-serious.jpg`    | Hero portrait. |
| `README.md`                     | This document. |

---

## Implementation Notes & Gotchas

1. **`isolation: isolate` on `.hero` is not optional.** Without it, `mix-blend-mode: difference` on the name will blend against the page background, not just the photo, and the inversion effect breaks the first time the hero is composed into a larger layout.

2. **The name uses `<h1>`** for semantic and SEO reasons — it's the page's primary heading. The tagline uses `<p>`. Don't demote the name to a `<div>` even if your design system pushes you to.

3. **The tagline emphasis is content, not styling.** The `<strong>` wraps on "begins with presence" and "real in practice" are part of the copy as approved by the client. Keep them as `<strong>` (not `<b>` or styled spans) so they survive screen readers and CMS round-trips.

4. **Photo crop is sensitive.** `object-position: 50% 6%` was tuned so the name lands cleanly below her mouth. If the photo is replaced, re-tune.

5. **Don't lighten the photo.** The `brightness(0.6)` is what makes the white tagline readable. If you reduce the darkening (e.g. to brighten her face), the tagline's contrast against bright sky/background pixels will fail accessibility checks.

6. **B&W is a hard constraint.** No colored accents, no hover-color reveals, no brand-color CTA. The whole site brief commits to grayscale.
