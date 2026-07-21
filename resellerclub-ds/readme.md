# ResellerClub Design System

A design system for **ResellerClub** — a developer-facing domains/hosting reseller platform. The identity is an **engineered, modern developer-tools aesthetic**: one disciplined **violet** accent, deep slate "ink" for dark surfaces and code panels, warm-neutral whites, and a geometric type pairing. Built for prototyping and building the developer portal, docs, dashboard, and onboarding surfaces.

> ⚠️ This is an **original, improvised identity** — not Bluehost and not any other Newfold property's brand. It was derived from the ResellerClub Developer Portal prototype in the sibling project. The official ResellerClub crown mark is included in `assets/`.

---

## Index — what's in this folder

| Path | What it is |
|------|------------|
| `styles.css` | **Global entry point.** Consumers link this one file. `@import`s only. |
| `tokens/typography.css` | Font families, type scale, tracking + the Google Fonts `@import`. |
| `tokens/colors.css` | Accent ramp, ink/code surfaces, neutrals, semantic palette. |
| `tokens/layout.css` | Radii, 4px spacing scale, shadows, motion (easing/durations). |
| `tokens/base.css` | `.rc` type resets, eyebrow, scrollbar, selection, code-syntax tokens, keyframes. |
| `components/core/` | `Button`, `Badge`, `MethodTag`, `StatusDot`, `Code`, `Icon`. |
| `components/brand/` | `Logo` + `Mark`. |
| `guidelines/` | Foundation spec cards (colors, type, spacing, radii, shadows). |
| `ui_kits/portal/` | Developer-portal recreation (`index.html`). |
| `assets/` | `resellerclub-mark.png` (official crown mark). |
| `SKILL.md` | Agent-Skill manifest for use in Claude Code. |

**Components:** Button · Badge · MethodTag · StatusDot · Code · Icon · Logo (+ Mark).

---

## Content fundamentals

**Voice: precise, confident, developer-to-developer.** The audience is resellers and the engineers (and now AI agents) building on top of the API. Copy is plain and technical without being dry.

- **Casing** — Headlines in sentence case, occasionally with a highlighted noun in accent violet (*"built for **resellers**"*). Buttons in Title Case for primary actions ("Get API keys", "Start building", "Read the docs"). Eyebrows ALL CAPS with wide tracking (`0.16em`).
- **Person** — "You / your agents"-forward. *"One REST API for domains, hosting, and DNS."*
- **Receipts over adjectives** — concrete numbers anchor claims: *"99.99% uptime SLA"*, *"126 ms median response"*, *"800+ TLDs"*, *"register in two calls"*.
- **Short, structural fragments** are welcome in headlines and stat labels.
- **Emoji:** none in production UI. A **sparkle** (`data-lucide="sparkles"`) flags AI/MCP features and is the one "decorative" icon. No unicode glyph icons — every icon is an SVG; arrows inside buttons use a Lucide `arrow-right`, not "→".

---

## Visual foundations

### Color
- **One action color: violet `#6D5EF6`.** Every primary button, link, focus ring, active tab underline, brand mark, and highlighted headline word. Hover darkens to `#5A48E4` (accent-600), press to `#4634BE` (accent-700). The system is deliberately monochromatic on action — no rainbow.
- **Deep slate "ink" `#100E2B`** anchors dark surfaces: nav-on-scroll glassy white aside, dark CTA sections, the onboarding brand rail, dashboard hero cards.
- **Code panels are near-black `#0D0B22`** with a slightly lifted header `#15122F`.
- **Backgrounds are overwhelmingly white** (`#FFFFFF`), with `#F7F8FA` for subtle insets and a whisper-cool `#F7F5FF` accent tint panel.
- **Semantic colors are reserved**, never decorative: teal (GET/success), violet (POST), amber (PUT/PATCH/pending), red (DELETE/danger), green (live/active). Each has a `-soft` background pair.
- **Imagery** (when used) should be clean product/UI shots or abstract slate gradients — never stocky lifestyle photography.

### Type
- **Display: Space Grotesk** (700) — geometric, engineered, tight tracking (`-0.02em`). Heroes hit 56–62px.
- **Body: Hanken Grotesk** (400–600), 16px / line-height 1.6, color near-ink `#10151F`. Large body 18px.
- **Mono: JetBrains Mono** (400–600) — code panels, method tags, metrics ("126 ms"), API paths, and the product tag in the logo.
- **Eyebrows:** uppercase Hanken, 12px, weight 700, tracking `0.16em`, accent-700.

### Spacing & layout
- **4px base scale** (`--rc-s-*`). Marketing sections breathe: 56–80px vertical rhythm. Max content width 1320px with 32px gutters.
- **Split hero** (copy left, code panel right) is the signature landing layout. Docs use a 232px sticky sidebar + content column.

### Borders & radii
- **Controls/buttons: 10px** (`--rc-r-md`). **Cards & code panels: 14–18px.** **Badges & dots: full pill.** Method tags: 8px.
- Card borders are a thin 1px `#E8EAEF`.

### Elevation & motion
- **Slate-tinted shadows** — `rgba(16,14,43, .06–.16)`, never harsh black. Cards rest at `shadow-xs/sm`, lift to `sm/md` on hover.
- **Primary buttons get a violet glow** (`--rc-shadow-accent`) on hover; press removes the glow and darkens — **no scale transform**.
- **Easing `cubic-bezier(0.2,0.7,0.2,1)`**, durations 120 / 200 / 320ms. Restrained: fades and soft elevation, no bounce, no looping decorative animation. A subtle radial violet glow sits behind dark hero/CTA sections.

### Surfaces
- No heavy gradients as primary backgrounds. The only gradients are the brand mark fill and the soft radial glows on ink sections. No textures, no noise, no neumorphism, no frosted glass.

---

## Iconography

- **Lucide** (thin 2px stroke, rounded caps) is the icon system, loaded from CDN: `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`. The `Icon` component wraps this.
- **No emoji, no unicode-character icons.** Every glyph — including the AI sparkle and button arrows — is an SVG.
- **Brand mark** is the ResellerClub **crown** — three figures above two interlocking strokes, in cyan and grey, forming a crown/"W". Provided as `assets/resellerclub-mark.png` (512×512, transparent). The `Logo`/`Mark` components render it. Note the mark keeps its own cyan+grey palette; the bright-blue `#6D5EF6` is the *action* accent, used for buttons/links/focus — the two coexist.

---

## Substitutions made (please review)

| Asset | Status | Notes |
|-------|--------|-------|
| Logo + mark | **Official** | ResellerClub crown mark provided as `assets/resellerclub-mark.png`. |
| Brand accent | **Confirmed** | Violet `#6D5EF6`, chosen by the CEO (July 2026). Previous bright blue (`#1E66FF`) superseded. Legacy heritage orange (`#FF5A1F`) is retained as an alternate in the prototype's Tweaks panel only. |
| Fonts | **Chosen** | Space Grotesk / Hanken Grotesk / JetBrains Mono (Google Fonts) — the intended brand fonts, not substitutes. Confirm if a licensed family is preferred. |
| Icons | **Lucide (CDN)** | Standard substitute; swap if a custom set exists. |

---

## How to use this in a new design

```html
<link rel="stylesheet" href="path/to/styles.css">
<script src="https://unpkg.com/lucide@latest"></script>

<div class="rc">
  <p class="rc-eyebrow">Domains API · v2</p>
  <h1>The domains API built for <span style="color:var(--rc-accent)">resellers</span>.</h1>
  <p style="color:var(--rc-text-2)">One REST API for domains, hosting, and DNS.</p>
  <button class="...">Get API keys</button>
</div>

<script>lucide.createIcons();</script>
```

For React, mount the components from the generated bundle (`window.<Namespace>`) — see each component's `.prompt.md` and the `*.card.html` demos. For full component recipes, open the `ui_kits/portal/index.html` reference.
