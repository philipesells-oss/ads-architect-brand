# ADS ARCHITECT — DESIGN BRIEF OUTPUT
**Design Chief | Routed Specialists: @aaron-draplin (Logo), @brad-frost (Design System)**
*Generated: 2026-04-07*
*Source: ads-architect-brandbook.md — Sections 10, 13*

---

## ROUTING DECISION

| Deliverable | Specialist | Justification |
|---|---|---|
| Logo System | @aaron-draplin | Logo master — wordmark + monogram system |
| Color/Typography/Design System | @brad-frost | Atomic Design — tokens, scales, component specs |
| Website Wireframe | Design Chief (this document) | Structural architecture, not visual execution |
| Acquisition Stack Animation | @brad-frost + @dev | Component spec + implementation |

**Tier Priority:** This is a full brand identity build. Tier 0 (brand strategy) was completed by the Brand Chief. We proceed directly to Tier 2 execution (Logo + Design System).

---

# PART 1 — VISUAL IDENTITY EXECUTION PLAN

## 1.1 Logo System

### Direction

The brandbook specifies: "The name IS the logo." This is a wordmark-first approach — no abstract symbols, no generic marketing iconography.

### Deliverables

| Asset | Spec | Format |
|---|---|---|
| Primary Wordmark | "ADS Architect" full horizontal | SVG, PNG (dark bg + light bg) |
| Stacked Wordmark | "ADS" over "Architect" for vertical contexts | SVG, PNG |
| Monogram | "AA" ligature for small contexts (favicon, avatar) | SVG, PNG, ICO |
| Clearspace | Minimum padding = height of the "A" character | Documented in system |

### Design Constraints

```
DO:
- Architectural ligature between letterforms (A-D-S connection)
- Premium weight — medium to semibold, never thin
- Geometric construction — grid-based, measurable
- Works at 16px favicon AND 120px hero
- Monochrome first (white on dark), then accent variant

DO NOT:
- Megaphone, graph, chart, or "ad" iconography
- Blue gradients (generic agency territory)
- Rounded/friendly shapes (we are precise, not approachable)
- More than 2 weights in the logo itself
```

### Exploration Options (from brandbook)

| Option | Description | Recommendation |
|---|---|---|
| A | Clean wordmark, architectural ligature A→D→S | PRIMARY — strongest alignment with brand archetype |
| B | Wordmark + minimal blueprint/grid icon | SECONDARY — test for contexts needing icon separation |
| C | "AA" monogram as standalone mark | REQUIRED — for favicon, social avatar, small UI |

[AUTO-DECISION] "Which option to lead with?" → Option A as primary, Option C as companion mark (reason: The Architect archetype demands the name carries the authority. A standalone icon dilutes the "name IS the logo" directive.)

---

## 1.2 Color System

### Primary Palette

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--color-bg-primary` | Obsidian | `#0A0A0A` | Primary background, hero sections |
| `--color-bg-secondary` | Carbon | `#111111` | Cards, elevated surfaces |
| `--color-bg-tertiary` | Graphite | `#1A1A1A` | Secondary containers, code blocks |
| `--color-surface` | Slate | `#222222` | Input fields, subtle separators |

### Accent Palette

| Token | Name | Hex | Usage |
|---|---|---|---|
| `--color-accent-primary` | Signal Teal | `#00D4AA` | CTAs, links, active states, key metrics |
| `--color-accent-hover` | Signal Teal Light | `#33DDBB` | Hover states |
| `--color-accent-muted` | Signal Teal Dim | `#00D4AA1A` | Background tints, tags |

[AUTO-DECISION] "Which accent color: deep teal, electric blue, or warm amber?" → Signal Teal (#00D4AA) (reason: Teal maps to the Vercel/Linear visual reference. It reads as "technical + premium" without the generic SaaS-blue problem. Amber skews hospitality/luxury and conflicts with the "not luxurious" directive. Electric blue is too close to generic agency territory.)

### Neutral Scale

| Token | Hex | Usage |
|---|---|---|
| `--color-text-primary` | `#FAFAFA` | Headings, primary text |
| `--color-text-secondary` | `#A1A1AA` | Body text, descriptions |
| `--color-text-tertiary` | `#71717A` | Captions, metadata |
| `--color-text-disabled` | `#3F3F46` | Disabled states |
| `--color-border-default` | `#27272A` | Borders, dividers |
| `--color-border-hover` | `#3F3F46` | Interactive borders |

### Semantic Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-success` | `#22C55E` | Positive metrics, confirmations |
| `--color-warning` | `#F59E0B` | Alerts, caution states |
| `--color-error` | `#EF4444` | Errors, negative metrics |
| `--color-info` | `#3B82F6` | Informational badges |

### Rules

1. **No grey-on-grey.** Text always has minimum 4.5:1 contrast ratio against its background (WCAG AA).
2. **Accent is scarce.** Signal Teal appears ONLY on CTAs, links, active indicators, and key metrics. Never as large background fills.
3. **Dark-first.** The light theme is a future consideration, not a launch requirement.

---

## 1.3 Typography System

### Font Stack

| Role | Font | Fallback | Weight |
|---|---|---|---|
| Headings | Inter | system-ui, -apple-system, sans-serif | 600 (SemiBold), 700 (Bold) |
| Body | Inter | system-ui, -apple-system, sans-serif | 400 (Regular), 500 (Medium) |
| Monospace / Metrics | JetBrains Mono | ui-monospace, "Cascadia Code", monospace | 500 (Medium) |

[AUTO-DECISION] "Inter or Neue Haas Grotesk?" → Inter (reason: Inter is open-source, optimized for screens, has a complete glyph set, variable font support, and is the standard at Vercel/Linear — our visual references. Neue Haas requires licensing and has inferior screen rendering at small sizes.)

### Type Scale

| Token | Size | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|
| `--text-display` | 72px / 4.5rem | 1.1 | -0.02em | Hero headline |
| `--text-h1` | 48px / 3rem | 1.15 | -0.02em | Page titles |
| `--text-h2` | 36px / 2.25rem | 1.2 | -0.015em | Section headers |
| `--text-h3` | 28px / 1.75rem | 1.25 | -0.01em | Subsections |
| `--text-h4` | 22px / 1.375rem | 1.3 | 0 | Card titles |
| `--text-h5` | 18px / 1.125rem | 1.4 | 0 | Labels, overlines |
| `--text-body-lg` | 18px / 1.125rem | 1.6 | 0 | Lead paragraphs |
| `--text-body` | 16px / 1rem | 1.6 | 0 | Default body |
| `--text-body-sm` | 14px / 0.875rem | 1.5 | 0 | Secondary text |
| `--text-caption` | 12px / 0.75rem | 1.4 | 0.02em | Captions, legal |
| `--text-mono` | 14-48px (context) | 1.3 | 0.05em | Metrics, data points |

### Rules

1. **Minimum body size: 16px.** No exceptions on any device.
2. **Metrics and numbers always in JetBrains Mono.** This creates the "data-forward" personality specified in the brief.
3. **Negative letter-spacing on headings only.** Body text stays at 0.
4. **Maximum 2 weights per context.** A heading section uses SemiBold + Regular, never three weights.

---

## 1.4 Spacing & Layout Tokens

### Spacing Scale (8px base)

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 4px | Tight gaps, inline elements |
| `--space-2` | 8px | Icon padding, small gaps |
| `--space-3` | 12px | Compact padding |
| `--space-4` | 16px | Default padding |
| `--space-5` | 24px | Card padding, section gaps |
| `--space-6` | 32px | Between related sections |
| `--space-8` | 48px | Between major sections |
| `--space-10` | 64px | Page section separators |
| `--space-12` | 96px | Hero padding, massive gaps |
| `--space-16` | 128px | Section top/bottom on desktop |

### Grid

| Breakpoint | Columns | Gutter | Margin |
|---|---|---|---|
| Mobile (< 640px) | 4 | 16px | 20px |
| Tablet (640-1024px) | 8 | 24px | 40px |
| Desktop (1024-1440px) | 12 | 24px | 80px |
| Wide (> 1440px) | 12 | 32px | auto (max-width: 1280px) |

---

# PART 2 — HOMEPAGE WIREFRAME (STRUCTURAL)

## 2.1 Desktop Wireframe (1440px viewport)

```
┌─────────────────────────────────────────────────────────────────┐
│ NAV                                                             │
│ [Logo]          Services   Case Studies   About     [Book Audit]│
│                                                    ↑ accent btn │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                         HERO SECTION                            │
│                     padding: 128px top/bottom                   │
│                                                                 │
│            "We Build the System.                                │
│             You Fill the Calendar."                             │
│            [display: 72px, Inter 700, #FAFAFA]                  │
│                                                                 │
│            Acquisition infrastructure for premium               │
│            hospitality and wellness brands.                     │
│            [body-lg: 18px, Inter 400, #A1A1AA]                  │
│                                                                 │
│            [Book Your Free Audit]  [See How It Works]           │
│            ↑ accent solid btn       ↑ ghost/outline btn         │
│                                                                 │
│            PROOF BAR:                                           │
│            "50+ systems built" · "$2M+ tracked" · "4.8x ROAS"  │
│            [mono: JetBrains Mono 500, #00D4AA]                  │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                      PROBLEM SECTION                            │
│                    padding: 96px top/bottom                     │
│                                                                 │
│            Overline: "THE PROBLEM"                              │
│            [h5, uppercase, #00D4AA, letter-spacing: 0.1em]      │
│                                                                 │
│            "Most brands run ads in isolation."                  │
│            [h2, 36px, #FAFAFA]                                  │
│                                                                 │
│            3-column grid:                                       │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            │
│  │ No system    │ │ No follow-up │ │ No data      │            │
│  │              │ │              │ │              │            │
│  │ Ads run but  │ │ Leads come   │ │ Reports show │            │
│  │ nothing      │ │ in but no    │ │ clicks, not  │            │
│  │ connects     │ │ one responds │ │ bookings     │            │
│  └──────────────┘ └──────────────┘ └──────────────┘            │
│  [cards: bg #111111, border #27272A, radius 8px]                │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                  ACQUISITION STACK SECTION                       │
│                   padding: 96px top/bottom                      │
│                                                                 │
│            Overline: "THE SOLUTION"                             │
│            "One System. Four Engines.                           │
│             One Goal: Fill Your Calendar."                      │
│            [h2, 36px, #FAFAFA]                                  │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              ACQUISITION STACK DIAGRAM                   │    │
│  │          (see Part 3 for animation specs)                │    │
│  │                                                         │    │
│  │  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐       │    │
│  │  │ATTRACT │→ │CAPTURE │→ │CONVERT │→ │ RETAIN │       │    │
│  │  │        │  │        │  │        │  │        │       │    │
│  │  │Meta    │  │Landing │  │CRM     │  │Email   │       │    │
│  │  │Google  │  │Forms   │  │WhatsApp│  │Loyalty │       │    │
│  │  │TikTok  │  │Booking │  │Follow  │  │Upsell  │       │    │
│  │  └────────┘  └────────┘  └────────┘  └────────┘       │    │
│  │                                                         │    │
│  │  ┌─────────────────────────────────────────────────┐   │    │
│  │  │ INTELLIGENCE LAYER                               │   │    │
│  │  │ Cost/Booking · ROAS · LTV · Conversion Rate     │   │    │
│  │  └─────────────────────────────────────────────────┘   │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
│  Column descriptions below diagram (ATTRACT, CAPTURE, etc.)     │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                     SERVICES SECTION                             │
│                   padding: 96px top/bottom                      │
│                                                                 │
│            Overline: "WHAT WE BUILD"                            │
│            "Three Systems. One Architecture."                   │
│                                                                 │
│  ┌──────────────────┐ ┌──────────────────┐ ┌────────────────┐  │
│  │ THE ACQUISITION  │ │ THE REVENUE      │ │ THE ACQUISITION│  │
│  │ ARCHITECTURE     │ │ PIPELINE         │ │ SPRINT         │  │
│  │ PROGRAM          │ │                  │ │                │  │
│  │                  │ │ Your acquisition │ │ First system   │  │
│  │ Full system.     │ │ engine. Built in │ │ live in 14     │  │
│  │ Ongoing.         │ │ 30 days.         │ │ days.          │  │
│  │                  │ │                  │ │                │  │
│  │ [Learn More →]   │ │ [Learn More →]   │ │ [Learn More →] │  │
│  └──────────────────┘ └──────────────────┘ └────────────────┘  │
│                                                                 │
│           [Book Your Free Acquisition Audit →]                  │
│           ↑ full-width accent CTA below cards                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    CASE STUDIES SECTION                          │
│                   padding: 96px top/bottom                      │
│                                                                 │
│            Overline: "RESULTS"                                  │
│            "Systems That Perform."                              │
│                                                                 │
│  ┌──────────────────┐ ┌──────────────────┐ ┌────────────────┐  │
│  │ BOUTIQUE HOTEL   │ │ PREMIUM SPA      │ │ EXPERIENCE     │  │
│  │                  │ │                  │ │ VENUE          │  │
│  │ Cost/booking:    │ │ New bookings:    │ │ Off-season:    │  │
│  │ $127 → $48       │ │ 18 → 67/mo      │ │ +89% YoY       │  │
│  │ [-62%]           │ │ [+272%]          │ │                │  │
│  │                  │ │                  │ │                │  │
│  │ [Read Case →]    │ │ [Read Case →]    │ │ [Read Case →]  │  │
│  └──────────────────┘ └──────────────────┘ └────────────────┘  │
│  [metrics in JetBrains Mono, accent color for delta %]          │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    SOCIAL PROOF SECTION                          │
│                    padding: 64px top/bottom                     │
│                                                                 │
│  Logo bar (greyscale client logos, 6-8 across)                  │
│                                                                 │
│  Key metrics row:                                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │   50+    │  │  $2M+    │  │  4.8x    │  │  -62%    │       │
│  │ systems  │  │ tracked  │  │ avg ROAS │  │ avg cost │       │
│  │  built   │  │ revenue  │  │          │  │ reduction│       │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
│  [numbers: mono 48px accent, labels: body-sm #A1A1AA]           │
│  [counter animation on scroll-into-view]                        │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                     ABOUT SECTION                                │
│                   padding: 96px top/bottom                      │
│                                                                 │
│  2-column: Left = Founder photo (dark, editorial)               │
│            Right = Brief authority statement                     │
│                                                                 │
│            "We don't deliver reports.                            │
│             We deliver reservations."                           │
│                                                                 │
│            2-3 sentences of founder credibility.                │
│            [About Us →] link                                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                       FAQ SECTION                                │
│                   padding: 96px top/bottom                      │
│                                                                 │
│  Accordion style, 6-8 questions                                 │
│  [border-bottom #27272A, smooth expand animation]               │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                     FINAL CTA SECTION                            │
│                   padding: 128px top/bottom                     │
│                   bg: subtle gradient or #111111                │
│                                                                 │
│            "Ready to Build Your                                 │
│             Acquisition System?"                                │
│            [h1, 48px, centered]                                 │
│                                                                 │
│            "Book your free Acquisition Audit.                   │
│             We'll show you exactly where revenue                │
│             is being left on the table."                        │
│                                                                 │
│            [Book Your Free Audit]                               │
│            ↑ large accent button, centered                      │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ FOOTER                                                          │
│ [Logo]   Services | Cases | About | Contact   [LinkedIn icon]   │
│          (c) 2026 ADS Architect. All rights reserved.           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2.2 Mobile Wireframe (375px viewport)

```
┌─────────────────────────┐
│ NAV                     │
│ [Logo]         [☰ Menu] │
├─────────────────────────┤
│                         │
│  HERO (padding: 64px Y) │
│                         │
│  "We Build the System.  │
│   You Fill the          │
│   Calendar."            │
│  [display: 36px]        │
│                         │
│  Acquisition infra...   │
│  [body: 16px]           │
│                         │
│  [Book Your Free Audit] │
│  ↑ full-width btn       │
│                         │
│  [See How It Works]     │
│  ↑ full-width ghost btn │
│                         │
│  PROOF BAR (horizontal  │
│  scroll or stacked):    │
│  50+ · $2M+ · 4.8x     │
│  [mono, accent]         │
│                         │
├─────────────────────────┤
│                         │
│  PROBLEM (stacked)      │
│  3 cards → vertical     │
│  stack, full-width      │
│                         │
├─────────────────────────┤
│                         │
│  ACQUISITION STACK      │
│  Horizontal scroll OR   │
│  vertical stack:        │
│                         │
│  ┌───────────────────┐  │
│  │ ATTRACT           │  │
│  │ Meta · Google ·   │  │
│  │ TikTok            │  │
│  │       ↓           │  │
│  ├───────────────────┤  │
│  │ CAPTURE           │  │
│  │ Landing · Forms · │  │
│  │ Booking           │  │
│  │       ↓           │  │
│  ├───────────────────┤  │
│  │ CONVERT           │  │
│  │ CRM · WhatsApp ·  │  │
│  │ Follow-Up         │  │
│  │       ↓           │  │
│  ├───────────────────┤  │
│  │ RETAIN            │  │
│  │ Email · Loyalty · │  │
│  │ Upsell            │  │
│  ├───────────────────┤  │
│  │ INTELLIGENCE      │  │
│  │ Cost · ROAS · LTV │  │
│  └───────────────────┘  │
│                         │
├─────────────────────────┤
│                         │
│  SERVICES               │
│  3 cards → stacked      │
│  full-width each        │
│                         │
│  [Book Audit] full-w    │
│                         │
├─────────────────────────┤
│                         │
│  CASE STUDIES           │
│  Horizontal snap-scroll │
│  1 card visible + peek  │
│                         │
├─────────────────────────┤
│                         │
│  SOCIAL PROOF           │
│  2x2 metric grid        │
│  Logo bar: scroll       │
│                         │
├─────────────────────────┤
│                         │
│  ABOUT                  │
│  Photo on top           │
│  Text below             │
│                         │
├─────────────────────────┤
│                         │
│  FAQ                    │
│  Accordion (same)       │
│                         │
├─────────────────────────┤
│                         │
│  FINAL CTA              │
│  [h2: 28px, centered]   │
│  [Book Audit] full-w    │
│                         │
├─────────────────────────┤
│ FOOTER (stacked)        │
│ Logo · Links · Social   │
│ Copyright               │
└─────────────────────────┘
```

### Mobile-Specific Rules

1. **Hero must convert at 375px.** The headline, one line of subtext, and the primary CTA must be visible above the fold without scrolling.
2. **Display font drops to 36px** on mobile (from 72px desktop).
3. **All CTAs become full-width** on mobile.
4. **Horizontal scroll** for case study cards (snap-scroll, 1 card visible with next-card peek).
5. **Hamburger menu** replaces horizontal nav. Menu overlay is full-screen dark (#0A0A0A at 98% opacity).
6. **Touch targets minimum 44x44px** (Apple HIG compliance).

---

# PART 3 — ACQUISITION STACK ANIMATION SPECS

## 3.1 Component Architecture

```
<AcquisitionStack>
  ├── <StackHeader />           // Overline + headline
  ├── <StackDiagram>            // The animated visual
  │   ├── <StackColumn phase="attract" />
  │   ├── <StackColumn phase="capture" />
  │   ├── <StackColumn phase="convert" />
  │   ├── <StackColumn phase="retain" />
  │   ├── <FlowArrows />        // Connecting arrows between columns
  │   └── <IntelligenceLayer /> // Bottom bar
  ├── <StackDescriptions />     // 4 column descriptions below
  └── <StackCTA />              // Optional CTA below
</AcquisitionStack>
```

## 3.2 Animation Sequence (Scroll-Triggered)

The animation triggers when the component enters the viewport (IntersectionObserver, threshold 0.3).

### Phase Timeline

| Time | Element | Animation | Easing |
|---|---|---|---|
| 0ms | Container border | Fade in from 0 → 1 opacity | ease-out |
| 0ms | Header text | Fade + slide up 20px | ease-out |
| 200ms | ATTRACT column | Fade in + slide up 30px | cubic-bezier(0.16, 1, 0.3, 1) |
| 400ms | Arrow 1 (ATTRACT → CAPTURE) | Draw SVG path left-to-right | linear |
| 500ms | CAPTURE column | Fade in + slide up 30px | cubic-bezier(0.16, 1, 0.3, 1) |
| 700ms | Arrow 2 (CAPTURE → CONVERT) | Draw SVG path left-to-right | linear |
| 800ms | CONVERT column | Fade in + slide up 30px | cubic-bezier(0.16, 1, 0.3, 1) |
| 1000ms | Arrow 3 (CONVERT → RETAIN) | Draw SVG path left-to-right | linear |
| 1100ms | RETAIN column | Fade in + slide up 30px | cubic-bezier(0.16, 1, 0.3, 1) |
| 1400ms | INTELLIGENCE LAYER | Fade in + expand width 0% → 100% | ease-out |
| 1600ms | Intelligence metrics | Fade in, stagger 100ms each | ease-out |
| 1800ms | Column items (sub-items) | Fade in, stagger 80ms per item | ease-out |

### Total Duration: ~2400ms

### Individual Column Animation Detail

Each `<StackColumn>` animates as follows:
1. Column container: opacity 0 → 1, translateY 30px → 0 (duration: 500ms)
2. Column header (ATTRACT/CAPTURE/etc): already visible with container
3. Column items (Meta Ads, Google Ads, etc): stagger in 80ms apart, opacity 0 → 1, translateY 10px → 0 (duration: 300ms each)

### Flow Arrows

- SVG `<path>` elements with `stroke-dasharray` + `stroke-dashoffset` animation
- Arrow style: 1px solid line with small arrowhead, color `#27272A` (border color) with accent glow
- On completion, arrows pulse once with accent color (`#00D4AA` at 30% opacity)

### Intelligence Layer

- Expands from center outward (scaleX 0 → 1, transform-origin: center)
- Metrics text fades in after bar expansion completes
- Metrics use monospace font with subtle accent color

## 3.3 Interaction States

| State | Behavior |
|---|---|
| **Default (pre-scroll)** | All elements at opacity 0, translated down |
| **In viewport** | Animation sequence plays once |
| **Hover on column (desktop)** | Column bg shifts to `#1A1A1A`, border to `#00D4AA33`, subtle 200ms transition |
| **Hover on column items** | Individual item text shifts to `#FAFAFA` from `#A1A1AA` |
| **Reduced motion** | All animations replaced with instant opacity fade (200ms). No translateY, no stagger. |

## 3.4 Technical Implementation Notes

```
FRAMEWORK: Next.js (App Router) + Framer Motion
INTERSECTION: useInViewport hook or framer-motion whileInView
SVG ARROWS: Inline SVG, animated via CSS stroke-dashoffset
MOBILE: Stack columns vertically, arrows become downward
PERFORMANCE:
  - Use will-change: transform, opacity on animated elements
  - Remove will-change after animation completes (onAnimationComplete)
  - Prefer transform/opacity only (compositor-friendly, no layout thrash)
  - SVG arrows: precompute dasharray length
ACCESSIBILITY:
  - prefers-reduced-motion: reduce → skip all animation
  - aria-label on the diagram container
  - Each column has role="group" with aria-label
```

## 3.5 Counter Animation (Social Proof Metrics)

| Metric | Start | End | Duration | Format |
|---|---|---|---|---|
| Systems built | 0 | 50 | 1500ms | `{n}+` |
| Revenue tracked | $0 | $2M | 2000ms | `${n}M+` |
| Average ROAS | 0.0 | 4.8 | 1800ms | `{n}x` |
| Cost reduction | 0 | 62 | 1500ms | `-{n}%` |

- Easing: ease-out (fast start, slow finish for dramatic effect)
- Trigger: IntersectionObserver, same as stack
- Font: JetBrains Mono, 48px desktop / 36px mobile
- Color: `#00D4AA` (accent) for the number, `#A1A1AA` for the label

---

# PART 4 — DESIGN SYSTEM RECOMMENDATIONS

## 4.1 System Architecture (Atomic Design)

Following @brad-frost's methodology:

```
ATOMS
├── Colors (tokens defined in 1.2)
├── Typography (tokens defined in 1.3)
├── Spacing (tokens defined in 1.4)
├── Icons (Lucide icon set — minimal, consistent stroke weight)
├── Button (primary, secondary, ghost, link)
├── Badge (accent, success, warning, neutral)
├── Input (text, email, textarea)
├── Divider (horizontal, accent variant)
└── Logo (primary, stacked, monogram)

MOLECULES
├── NavLink (icon? + text + active state)
├── MetricCard (number + label + delta badge)
├── ServiceCard (title + description + CTA link)
├── CaseStudyCard (title + key metric + delta + CTA)
├── FAQItem (question + collapsible answer)
├── ProofBar (metric + label, inline)
├── SectionHeader (overline + heading + optional subtext)
└── CTABlock (heading + description + button)

ORGANISMS
├── Navbar (logo + nav links + CTA button)
├── HeroSection (headline + sub + CTAs + proof bar)
├── ProblemGrid (section header + 3 problem cards)
├── AcquisitionStack (animated diagram + descriptions)
├── ServicesGrid (section header + 3 service cards + CTA)
├── CaseStudiesRow (section header + 3 case cards)
├── SocialProofBar (logo strip + metrics row)
├── AboutSection (image + text block)
├── FAQSection (section header + accordion items)
├── FinalCTA (heading + text + large button)
└── Footer (logo + links + social + copyright)

TEMPLATES
├── Homepage (all organisms assembled)
├── ServicePage (hero + details + CTA)
├── CaseStudyPage (hero + narrative + metrics + CTA)
├── AuditLandingPage (hero + form + what-to-expect)
└── AboutPage (founder + team + process)

PAGES (instances with real content)
```

## 4.2 Component Design Tokens (CSS Custom Properties)

```css
:root {
  /* Surfaces */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Shadows (subtle, dark-theme appropriate) */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
  --shadow-accent: 0 0 20px rgba(0, 212, 170, 0.15);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
  --transition-spring: 500ms cubic-bezier(0.16, 1, 0.3, 1);

  /* Z-index scale */
  --z-base: 0;
  --z-dropdown: 10;
  --z-sticky: 20;
  --z-overlay: 30;
  --z-modal: 40;
  --z-toast: 50;
}
```

## 4.3 Button System

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `#00D4AA` | `#0A0A0A` | none | `#33DDBB`, shadow-accent |
| Secondary | transparent | `#FAFAFA` | 1px `#27272A` | border `#3F3F46`, bg `#111111` |
| Ghost | transparent | `#A1A1AA` | none | text `#FAFAFA` |
| Link | transparent | `#00D4AA` | none | underline, `#33DDBB` |

| Size | Padding | Font Size | Height |
|---|---|---|---|
| sm | 8px 16px | 14px | 36px |
| md | 12px 24px | 16px | 44px |
| lg | 16px 32px | 18px | 52px |

### Button Rules
1. **One primary CTA per viewport.** Never two accent buttons visible simultaneously.
2. **Mobile: all buttons are `lg` size** (minimum 44px touch target).
3. **Hover state includes 200ms transition.** No instant color jumps.

## 4.4 Card System

```
BASE CARD:
  background: var(--color-bg-secondary)    // #111111
  border: 1px solid var(--color-border-default)  // #27272A
  border-radius: var(--radius-md)          // 8px
  padding: var(--space-5)                  // 24px
  transition: var(--transition-base)

HOVER:
  border-color: var(--color-border-hover)  // #3F3F46
  background: var(--color-bg-tertiary)     // #1A1A1A

ACCENT VARIANT (for featured/highlighted):
  border-color: rgba(0, 212, 170, 0.2)
  box-shadow: var(--shadow-accent)
```

## 4.5 Navbar Behavior

| State | Behavior |
|---|---|
| Top of page | Transparent background, no border |
| Scrolled (> 80px) | `bg: #0A0A0A/80%`, `backdrop-filter: blur(12px)`, `border-bottom: 1px #27272A` |
| Mobile open | Full-screen overlay, `#0A0A0A/98%`, centered nav links |

## 4.6 Dark Theme Principles

1. **Surface hierarchy through lightness, not shadow.** `#0A0A0A` → `#111111` → `#1A1A1A` → `#222222` creates depth without heavy shadows.
2. **Borders do the heavy lifting.** Use 1px borders (`#27272A`) to separate elements instead of shadows.
3. **Accent is functional, not decorative.** `#00D4AA` only appears where user action is possible or metrics demand attention.
4. **White text hierarchy:** `#FAFAFA` for headings, `#A1A1AA` for body, `#71717A` for tertiary. Three levels maximum.
5. **Images and photos use a dark overlay** (`#0A0A0A` at 40-60%) to maintain the dark aesthetic even with light photography.

---

# EXECUTION CHECKLIST

## Priority 1 — Immediate (Week 3-4 per roadmap)

| # | Deliverable | Specialist | Status |
|---|---|---|---|
| 1 | Logo system (primary + stacked + monogram) | @aaron-draplin | [ ] |
| 2 | Color system finalized (tokens in CSS) | @brad-frost | [ ] |
| 3 | Typography system finalized (tokens in CSS) | @brad-frost | [ ] |
| 4 | Homepage design (desktop) | @brad-frost | [ ] |
| 5 | Homepage design (mobile) | @brad-frost | [ ] |
| 6 | Acquisition Stack diagram (static) | @brad-frost | [ ] |
| 7 | Acquisition Stack animation (implemented) | @dev | [ ] |
| 8 | LinkedIn banner | @aaron-draplin | [ ] |

## Priority 2 — Sales Materials

| # | Deliverable | Specialist | Status |
|---|---|---|---|
| 9 | Proposal template | @brad-frost | [ ] |
| 10 | Case study 1-page PDF template | @brad-frost | [ ] |
| 11 | Revenue Intelligence Brief template | @brad-frost | [ ] |

## Priority 3 — Social

| # | Deliverable | Specialist | Status |
|---|---|---|---|
| 12 | LinkedIn post template (results format) | @brad-frost | [ ] |
| 13 | Instagram/TikTok content template | @brad-frost | [ ] |

---

## HANDOFF: @design-chief → @aaron-draplin

**Project:** ADS Architect Visual Identity
**Phase Completed:** Design brief, color/typography system, wireframes, animation specs
**Deliverables Transferred:** This document (design-brief-output.md)
**Context for Next Phase:** Logo system creation — wordmark-first approach, Option A primary, Option C monogram companion
**Success Criteria:** Logo works at 16px (favicon) and 120px (hero), monochrome-first, no agency clichés

## HANDOFF: @design-chief → @brad-frost

**Project:** ADS Architect Design System
**Phase Completed:** Token definitions, component architecture, atomic structure
**Deliverables Transferred:** This document (Parts 1.2-1.4, Part 4)
**Context for Next Phase:** Implement design tokens in CSS custom properties, build component library per atomic structure
**Success Criteria:** All tokens from this document implemented, WCAG AA compliance on all text, dark-first with no light theme required at launch

---

*Design Chief Output v1.0*
*Routed from: ads-architect-brandbook.md sections 10, 13*
*Next action: @aaron-draplin begins logo exploration, @brad-frost begins token implementation*
