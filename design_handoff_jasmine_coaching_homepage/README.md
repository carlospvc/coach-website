# Handoff: Jasmine Truong — Executive Leadership Coach Homepage

## Overview

A single-page homepage for **Jasmine Truong**, executive leadership coach (PhD, CPCC, ACC). The design positions her as a serious, cosmopolitan thinking partner for senior executives — black/white/grays aesthetic, heavy typography, grayscale portrait photography.

Core narrative: she helps executives connect with themselves first, so they can lead with clarity and conviction. The work is **introspective by necessity, and results-oriented by design.**

## About the design files

The HTML/JSX in this bundle is a **design reference**, not production code. The implementer should **recreate the design in the target codebase's existing environment** (React/Next.js, Vue/Nuxt, Astro, etc.) using its established component patterns, design tokens, and conventions. If there is no existing codebase, choose a framework appropriate to the project (Next.js + Tailwind is a sensible default for a static marketing site) and implement from scratch.

The bundled file `v5.html` loads React + Babel from CDN and a single inline-JSX component (`variations/v5-behance.jsx`). It is meant to be opened directly in a browser for visual reference. It is NOT shippable.

## Fidelity

**High-fidelity.** Pixel-perfect mockup with final colors, typography, spacing, and the key motion behaviors (rotating questions, mix-blend-mode hero effect). The developer should match the visuals closely.

## Page structure

The page is a single scrolling document with anchored sections in this order:

1. **Sticky nav** — dark, blurred glass over hero
2. **Hero** — full-width dark, name wordmark + grayscale portrait, no body copy
3. **Pull-quote** — single centered statement on dark bg
4. **What I Do + Is this right for you?** — light bg, two-column "What I Do" + merged rotating-questions block
5. **Services** — dark bg, three numbered rows
6. **Testimonials** — light gray bg, 4-cell grid
7. **Who am I** — light bg, two-column with portrait
8. **Contact** — dark bg, simple form + huge wordmark footer
9. **Footer meta** — copyright + location

---

## Sections, in detail

### 1. Sticky Nav

- Position: `sticky; top: 0; z-index: 30`
- Background: `rgba(25,25,23,.92)` with `backdrop-filter: blur(10px)`
- Border-bottom: `1px solid rgba(255,255,255,.14)`
- Padding: `18px 48px`
- Layout: flex space-between, three groups

**Brand (left):** `JASMINE TRUONG` — `font-weight: 800; font-size: 17px; letter-spacing: -.01em`. Color white.

**Links (center):** 5 anchors, `font-size: 13px; color: rgba(255,255,255,.65)`, hover → white:
- About → `#about`
- Is this for you? → `#questions`
- Coaching → `#services`
- Testimonials → `#testimonials`
- Who am I → `#aboutme`
- Gap: 32px

**CTA (right):** `Book a free call →` inside a pill `padding: 8px 14px; border: 1px solid rgba(255,255,255,.3); border-radius: 999px; font-size: 13px`. Hover → fill white, ink-color text.

---

### 2. Hero (the centerpiece)

- Section background: `#191917` (the page's ink color)
- Min-height: `720px`
- `position: relative; overflow: hidden; isolation: isolate;`
- Inside, a `.hero-stage` container `height: 660px; padding: 0 24px; position: relative; z-index: 2`
- Decorative subtle grid overlay (`.hero-bg`): two `repeating-linear-gradient`s at 4% white opacity, plus a vertical dark gradient, the whole layer at `opacity: 0.35`. Optional but adds texture.

**Composition** — three absolutely-positioned children:

a) **Wordmark "Jasmine Truong"** — single line, anchored at bottom of stage:
- `left: 24px; right: 24px; bottom: 90px;`
- `font-weight: 800;`
- `font-size: clamp(96px, 14vw, 175px);`
- `line-height: .9; letter-spacing: -.05em;`
- `white-space: nowrap; text-align: center;`
- `color: #ffffff;`
- `z-index: 3;`
- **`mix-blend-mode: difference;`** ← critical for the effect

b) **"Coaching" sub-label** — sits visually below "Truong", aligned with start of T:
- `position: absolute; left: 53%; bottom: 36px;`
- `font-weight: 500;`
- `font-size: clamp(32px, 4.5vw, 60px);`
- `line-height: 1; letter-spacing: -.015em;`
- `text-align: left; color: rgba(255,255,255,.42);`
- `z-index: 3; pointer-events: none;`

c) **Portrait photo** — a tall rectangle that intersects the wordmark from above:
- `position: absolute; top: 20px; left: 53%;`
- `width: 440px; aspect-ratio: 3/4; max-height: 580px;`
- `z-index: 2;` (BELOW the wordmark in stacking order — the wordmark's `mix-blend-mode: difference` operates against the photo behind it)
- Image: `object-fit: cover; object-position: 50% 25%;`
- Filter: `grayscale(1) contrast(1.05) brightness(1);`

**The visual effect:** The wordmark sits at z-index 3 with `mix-blend-mode: difference`. Where the wordmark passes over the dark background, the white letters render as bright white (difference of white and dark = bright). Where the wordmark passes over the photo, each pixel of the letter inverts the photo color underneath — dark photo regions (hair, coat) become bright letter pixels; light photo regions (skin, highlights) become dark letter pixels. This creates the "ghosted through the photo" Kasia Siwosz–style look.

`isolation: isolate` on the hero is required so the blend-mode only computes against the photo and bg layer, not the page below.

**Responsive (≤1000px):**
- Wordmark `font-size: 60px`
- Photo `width: 260px; left: 50%;`
- Hero corner labels (if present) — none in this design

Mobile (≤700px): the wordmark may still overflow at very narrow widths; consider tightening letter-spacing further or hiding "Coaching" below a breakpoint.

---

### 3. Pull-quote

- Background: `#191917` (dark)
- Padding: `140px 0`
- Centered single column, max-width: `1000px`
- Large quotation mark `"` in white, `font-size: 80px; font-weight: 600; line-height: 0; margin-bottom: 56px`
- Blockquote: `font-weight: 400; font-size: 56px; letter-spacing: -.02em; line-height: 1.12; margin: 0 0 40px`
  - `strong` words inside get `font-weight: 800` for emphasis
- Copy: **"Leadership begins with presence, and becomes real in practice."** with `begins with presence` and `real in practice` bolded.
- Attribution: `"— A working principle"` `font-size: 13px; color: rgba(255,255,255,.55); letter-spacing: .04em`

---

### 4. What I Do + rotating questions (merged section)

- Background: `#ffffff`
- Padding: `140px 0`

**Top: What I Do block** — two-column grid:
- `grid-template-columns: 1fr 1fr; gap: 80px; align-items: start;`

Left column:
- Heading "What I Do":
  - `font-weight: 800; font-size: clamp(56px, 6vw, 88px);`
  - `line-height: .96; letter-spacing: -.035em; text-transform: uppercase`
  - `margin: 0 0 28px`
- Body paragraph:
  - `font-size: 16px; color: #6b6b67; line-height: 1.6; max-width: 460px`
  - `strong` inside → color `#191917; font-weight: 700`
  - Copy: *"I don't teach you how to win. You've mastered that already. **What you need is a trusted partner to help you move beyond the version of success you've already outgrown.**"*

Right column:
- Heading h2:
  - `font-weight: 400; font-size: 38px; line-height: 1.2; letter-spacing: -.015em; margin: 0 0 24px`
  - `strong` inside → `font-weight: 800`
  - Copy: *"The work is **introspective by necessity**, and **results-oriented by design**. The two aren't in tension — they're the same arc, walked patiently."*
- Body paragraph:
  - `font-size: 15.5px; line-height: 1.65; color: #6b6b67; max-width: 560px`
  - Copy: *"Before strategy, we get honest about what you actually want — and what you've been telling yourself you should want. From there, clarity inside changes what's possible outside: cleaner decisions, real conversations, a steadier presence at the top of your team."*

**Below: Questions block** — separated by `border-top: 1px solid rgba(25,25,23,.12); margin-top: 120px; padding-top: 80px;`

Layout:
- Top row, flex space-between, align-items: end, margin-bottom: 64px:
  - Heading h3 "Is this right for you?" — `font-weight: 300; font-size: 36px; letter-spacing: -.015em; max-width: 580px`
  - Pager: counter (`01 / 03` etc) + 100px horizontal progress bar (1px tall, `#e6e4df` track, `#191917` fill with `transform: scaleX(...)` based on `(idx+1)/total`, `transition: transform .6s cubic-bezier(.4,0,.2,1)`)

Rotating question stage:
- `position: relative; min-height: 360px; padding-left: 56px; max-width: 1100px`
- Bullet: 14×14px black circle absolutely at `left: 0; top: 32px`
- Question text:
  - `font-weight: 800; font-size: clamp(56px, 7.5vw, 108px)`
  - `line-height: .98; letter-spacing: -.035em; text-transform: uppercase`
  - `transition: opacity .45s, transform .45s` (fade + 16px Y slide)
- Sub-text:
  - `font-size: 17px; color: #6b6b67; max-width: 540px; line-height: 1.55; margin: 0`
  - `transition: opacity .45s .1s, transform .45s .1s`

CTA row below: `margin-top: 64px; padding-left: 56px; display: flex; gap: 20px`
- Black button "If yes — let's talk →" → `#contact`
- Gray note text "Or scroll on and read the rest."

**Question rotation behavior:**
- 3 questions, auto-advance every **4.8 seconds**, infinite loop
- On change: fade out (400ms), swap content, fade in
- State: `qIdx` (current index), `transitioning` boolean
- Pseudocode:
  ```js
  const advance = (dir = 1) => {
    setTransitioning(true);
    setTimeout(() => {
      setQIdx(i => (i + dir + questions.length) % questions.length);
      setTransitioning(false);
    }, 380);
  };
  useEffect(() => {
    const t = setInterval(() => advance(1), 4800);
    return () => clearInterval(t);
  }, []);
  ```

**Questions content (exact copy):**

1. *"Do you feel you have to wear a mask to lead?"*  
   Sub: "High-functioning. Trusted. Quietly exhausted by the version of you that's showing up to work."

2. *"Are you leading from your true self?"*  
   Sub: "Or from a role you stepped into a long time ago and never quite stopped performing?"

3. *"What would change if you stopped performing?"*  
   Sub: "For your team. Your decisions. The relationships you keep meaning to repair — and you."

---

### 5. Services

- Background: `#191917` (dark)
- Padding: `140px 0`
- Header: 100px column for index "03" + content column with eyebrow, h2, lead paragraph
  - eyebrow micro: `dot + "Ways to Work Together"` *(removed in current design — keep absent)*
  - h2: "Three paths in. **One foundation.**" — `font-weight: 400; font-size: 56px; line-height: 1; letter-spacing: -.025em`; `strong` → `font-weight: 800`
  - lead: short paragraph in `rgba(255,255,255,.6)`

Each service is a row:
- `display: grid; grid-template-columns: 100px 1.2fr 1.8fr 120px; gap: 48px; align-items: start`
- `padding: 40px 0; border-top: 1px solid rgba(255,255,255,.14)`
- Hover: `padding-left: 16px; background: rgba(255,255,255,.02)` (250ms transition)

Per row:
- `.sno` — `/01`, `/02`, `/03` — `font-size: 22px; font-weight: 800; letter-spacing: -.01em`
- Title block — `stitle: font-size: 28px; font-weight: 600` + `smeta: font-size: 12px; color: rgba(255,255,255,.5); letter-spacing: .06em; text-transform: uppercase`
- Body — `p: font-size: 15.5px; line-height: 1.6; color: rgba(255,255,255,.75)` + `ul: list-style: none; columns: 2; column-gap: 24px;` items with `—` prefix
- Arrow — 52×52 circle `border: 1px solid rgba(255,255,255,.3); border-radius: 50%; align-self: center; justify-self: end`. On hover → white fill, ink color.

**Services content (exact copy):**

1. **1:1 Coaching** · *6–12 months · Weekly · By application*  
   "A confidential thinking partnership for senior leaders. We meet weekly for six to twelve months — long enough for the inner work to translate into the way you actually lead."  
   Items: Weekly 90-min sessions / Async support between / Stakeholder interviews / Tailored frameworks

2. **Team Coaching** · *Executive teams · 6–18 months*  
   "For teams whose individual talent hasn't yet become collective intelligence. We work in rhythm with your operating cadence, not on top of it."  
   Items: Team assessment / Quarterly offsites / Inter-meeting coaching / Conflict facilitation

3. **Leadership Workshops** · *Half-day to two-day intensives*  
   "Research-grounded sessions for emerging and senior leaders, custom-built around the questions your organization is actually wrestling with."  
   Items: Custom curriculum / 8–24 leader cohorts / Pre-work + follow-through / Virtual or in-person

---

### 6. Testimonials

- Background: `#f3f3f3` (soft gray)
- Padding: `140px 0`
- Header (no eyebrow):
  - h2 "What clients say **after** the work has settled in." — `font-weight: 400; font-size: 48px; line-height: 1.1; letter-spacing: -.02em; margin: 16px 0 0` with bolded "after"
- Grid: `grid-template-columns: 1fr 1fr; gap: 0` (2×2)
- Cards `.testi`:
  - `padding: 40px; border: 1px solid rgba(25,25,23,.12); margin: -1px 0 0 -1px; background: #ffffff` (overlapping borders to avoid double-rules)
  - Layout: flex column gap: 24
  - Top: quote mark "" — `font-size: 36px; font-weight: 800; line-height: 0`
  - Blockquote — `font-size: 22px; line-height: 1.35; letter-spacing: -.012em; font-weight: 400`
  - Author block (margin-top: auto):
    - 40×40 circle avatar with initials, `background: #191917; color: white; font-weight: 700; font-size: 13px`
    - Name + role stacked

**Testimonials content (exact copy):**

1. *"Jasmine helped me see the leader I had been avoiding becoming. Six months later, my board calls me a different CEO."* — **Anika Reyes**, CEO, Halverson Industries (AR)
2. *"The rare coach who holds the strategic and the personal in the same breath — and knows which one the moment is asking for."* — **Marcus Yeoh**, COO, Northbright Health (MY)
3. *"Our exec team finally has a shared language for the hard conversations. Jasmine made that possible without scripting them for us."* — **Priya Anand**, CPO, Lattice Bio (PA)
4. *"I came in wanting better answers. I left having learned to live with better questions — and that has changed how I lead."* — **Daniel Brookes**, EVP Strategy, Pellingham Group (DB)

These are placeholder testimonials — replace with real client quotes before launch.

---

### 7. Who am I (about me)

- Background: `#ffffff`
- Padding: `140px 0`
- Two-column grid: `1.05fr 1fr; gap: 80px; align-items: center`
- Left: photo, `aspect-ratio: 4/5; overflow: hidden; background: #f3f3f3`. Image: `object-fit: cover; object-position: 50% 30%; filter: grayscale(1) contrast(1.02)`. **Use `assets/jasmine-looking-up.jpg`** (the second of the two portraits).
- Right: text column
  - h2 "Who am I." — `font-weight: 800; font-size: clamp(80px, 9vw, 132px); line-height: .92; letter-spacing: -.04em; text-transform: uppercase; margin: 24px 0 32px`
  - Paragraphs `font-size: 17px; line-height: 1.65; max-width: 520px`
  - Lesson block: margin-top 32, border-top, flex with micro-label + emphasized statement
  - Credentials row: 3 entries (Education / Credentials / Based), `border-top: 1px solid; padding-top: 24px; display: flex; gap: 28px`

**Copy:**

> Who am I.
>
> I'm a PhD-credentialed executive coach who has spent the last twelve years inside organizations — watching brilliant leaders quietly come apart at the top of their careers.
>
> Not because they lacked talent. Because no one had ever asked them what **they** actually wanted, separately from what the role demanded.
>
> I built my practice around that gap. The work is grounded in organizational psychology, attachment theory, and a stubborn faith that the leader you're trying to become is already in the room.
>
> **Lesson carried forward** — You don't need someone to teach you how to win. You need a partner who can help you move beyond the version of success you've already outgrown.

Credentials:
- Education: **PhD, Org. Psychology**
- Credentials: **CPCC · ACC**
- Based: **Zürich · Worldwide**

---

### 8. Contact (dark, with form)

- Background: `#191917`
- Padding: `140px 0 0` (no bottom — wordmark footer flows in)
- Header h2 "No pressure. **Just clarity.**" — `font-weight: 400; font-size: 56px; line-height: 1.05; letter-spacing: -.02em; margin: 16px 0 64px; max-width: 720px` with `strong` → `font-weight: 800`. *No eyebrow above.*
- Grid: `grid-template-columns: 1.1fr 1.4fr; gap: 80px; align-items: start; padding-bottom: 100px`

**Left column:**
- Paragraph: *"Every engagement opens with an unhurried call. No agenda, no obligation — just space to find out whether the work we'd do together is the work you actually want done."*

**Right column — form:**
- `display: flex; flex-direction: column; gap: 22px`
- Two grid rows (`grid-template-columns: 1fr 1fr; gap: 20px`):
  - Name, Email
  - Role, Organization
- Interest select (1:1 Coaching / Team Coaching / Leadership Workshops / Not sure yet)
- What brings you here? — textarea, 60px min-height
- Submit button: "Start the conversation →" — `background: #ffffff; color: #191917; padding: 18px 28px; font-weight: 700; font-size: 13px; letter-spacing: .1em; text-transform: uppercase`

**Field styling (dark form):**
- Labels: 11px uppercase tracking
- Inputs: `background: transparent; border: 0; border-bottom: 1px solid rgba(255,255,255,.25); padding: 8px 0 12px; color: white; font-size: 17px`
- Focus: `border-color: #ffffff`

**On submit:** preventDefault, set submitted state, render confirmation block:
> Received
>
> **THANK YOU. I'LL REPLY WITHIN TWO BUSINESS DAYS.** (font-weight 800, 32px, uppercase)

### 9. Footer wordmark + meta

- `.foot-mark` — padding `64px 48px 24px`
- Big wordmark `JASMINE TRUONG` again: `font-weight: 800; font-size: clamp(80px, 14vw, 220px); letter-spacing: -.045em; line-height: .9`
- `.foot-meta` — padding `0 48px 32px`, flex space-between, font-size 12px, color `rgba(255,255,255,.5)`, top border separator
  - Left: `© Jasmine Truong Coaching · 2026 · All rights reserved`
  - Right: `Zürich · Worldwide · By application`

---

## Design tokens

```css
/* Colors */
--ink:        #191917;   /* primary text, dark sections */
--paper:      #ffffff;   /* white surface */
--soft:       #f3f3f3;   /* light gray surface (testimonials, what-i-do hover) */
--mute:       #8a8a86;   /* tertiary text */
--mute-dark:  #6b6b67;   /* body text muted */
--rule:       rgba(25,25,23,.12);    /* hairline on light bg */
--rule-dark:  rgba(255,255,255,.14); /* hairline on dark bg */

/* Type */
font-family: "Manrope", "Outfit", system-ui, sans-serif;
/* Weights used: 300, 400, 500, 600, 700, 800 */

/* Spacing */
section padding-y: 140px (desktop) / 80px (mobile)
container max-width: 1320px; padding: 0 48px (24px mobile)

/* Radii */
buttons: 999px (pills) / 0 (rect CTA in contact)
photo / image containers: 0 (no rounding — sharp rectangles)

/* Hairlines */
1px solid rule colors above

/* Transitions */
hover: .15–.25s ease
question rotation: .6s cubic-bezier(.4,0,.2,1) for progress bar; .45s ease for content
```

---

## Typography

- **Font family**: Manrope (primary), Outfit (fallback)
- **Weights loaded**: 300, 400, 500, 600, 700, 800
- Load via Google Fonts:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800&display=swap">
  ```

Type scale (representative — see each section for specifics):
- Hero wordmark: 96–175px / weight 800 / letter-spacing -.05em / mix-blend-mode: difference
- Hero coaching: 32–60px / weight 500 / color rgba(255,255,255,.42)
- Big section heads (Who am I, Footer wordmark): 80–220px / weight 800 / uppercase
- Section h2 (What I Do, Services, Testimonials, Contact): 38–56px / weight 400 (with bolded `strong` runs at 800)
- Rotating questions: 56–108px / weight 800 / uppercase / clamp(56px, 7.5vw, 108px)
- Body large: 17px / weight 400 / line-height 1.65
- Body small: 13–14px / weight 400
- Micro / eyebrows / labels: 11–12px / letter-spacing .12em / uppercase / weight 500

---

## Interactions & behavior

| Element | Behavior |
|---|---|
| Sticky nav | Stays at top, blurred glass over hero |
| Anchor links | Scroll to section IDs (`#about`, `#questions`, `#services`, `#testimonials`, `#aboutme`, `#contact`) |
| Service rows | Hover shifts content right by 16px + light bg tint; circular arrow fills white |
| Rotating questions | Auto-advance every 4.8s; fade-out → swap → fade-in (380–450ms); progress bar animates with 600ms cubic-bezier(.4,0,.2,1) |
| "If yes — let's talk" button | Anchor to `#contact` |
| Form submit | preventDefault; set submitted state; show confirmation card in form's place |
| Hover on form inputs | Border-bottom color changes to white on focus |
| Photo grayscale | All photos `filter: grayscale(1) contrast(1.05)` |
| Mix-blend-mode hero | The wordmark uses `mix-blend-mode: difference` so it inverts against whatever is behind it (photo or dark bg). Requires `isolation: isolate` on the `.hero` parent to scope the blend. |

---

## Responsive behavior

Single breakpoint at **1000px** (mobile/tablet):
- Container padding 24px instead of 48px
- Nav links hide; only CTA stays visible
- Hero photo `width: 260px; left: 50%`
- Hero wordmark `font-size: 60px`
- Section padding `80px 0`
- Two-column grids collapse to single column
- Service rows collapse to vertical stack (60px num + content)
- Form grid rows go single-column

Consider adding a smaller breakpoint (~600px) for very narrow viewports where the wordmark may still need to drop to two lines.

---

## State management

Two pieces of React state in the V5 component:

```jsx
const [qIdx, setQIdx] = useState(0);              // rotating question index
const [transitioning, setTransitioning] = useState(false); // fade-out flag
const [submitted, setSubmitted] = useState(false); // form submission flag
```

In a real implementation, replace the form submission with a real backend call (e.g. POST to `/api/contact`, or a Formspree/HubSpot/etc. integration). The current `e.preventDefault()` + `setSubmitted(true)` is mock-only.

---

## Assets

Two grayscale portraits, both real photos of Jasmine. Copy into the project as:

- `assets/jasmine-serious.jpg` — used in the **hero** (more direct, looking at camera)
- `assets/jasmine-looking-up.jpg` — used in the **Who am I** section (aspirational, looking up)

Both render with `filter: grayscale(1) contrast(1.05)`. **Do not substitute** these photos.

---

## Files in this handoff

- `v5.html` — entry HTML, loads React + Babel + the JSX file
- `variations/v5-behance.jsx` — single React component containing all CSS injection + the page tree. Read this for exact markup + styling.
- `assets/jasmine-serious.jpg`
- `assets/jasmine-looking-up.jpg`

---

## Implementation notes

1. **The mix-blend-mode hero is the hero**. If you can't reproduce the `mix-blend-mode: difference` effect, the design loses its identity. Test on the target browser stack before substituting alternatives. Safari, Chrome, Firefox all support it on text elements.

2. **`isolation: isolate` is required** on the `.hero` ancestor. Without it, the blend computes against the rest of the page below the hero and produces wrong results when scrolled.

3. **No emoji, no icons** anywhere in the design — keep it austere. Arrows are simple unicode `→` `↗`.

4. **Microcopy matters.** The italic-strong combinations carry the tone. Don't substitute generic copy without checking the rhythm of bolded clauses (`introspective by necessity` / `results-oriented by design`, etc.).

5. **Testimonials are placeholders.** Replace before launch.

6. **No third-party trackers, no chat widgets.** This is meant as a quiet, premium-feeling site.

7. **Accessibility:**
   - Form fields all have `<label>`s
   - The rotating questions section should expose a polite ARIA live region for screen readers, OR include prev/next controls and pause-on-focus
   - Color contrast: white on `#191917` passes WCAG AA Large at every size used; the `rgba(255,255,255,.42)` "Coaching" sub-label is decorative and below the wordmark — fine
   - Focus states: dark form inputs change border-bottom on focus; add a focus ring to buttons for keyboard users

8. **Performance:**
   - Pre-load both photo assets in `<head>`
   - Use `font-display: swap` (already in Google Fonts URL via `display=swap`)
   - Lazy-render heavy sections below the fold if framework supports

---
