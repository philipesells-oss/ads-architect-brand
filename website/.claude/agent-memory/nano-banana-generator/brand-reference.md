---
name: ADS Architect Brand Color & Typography Reference
description: Exact color codes, font specifications, and SaaS aesthetic guidelines for all visual design work
type: reference
---

## Color Palette

| Element | Hex | RGB | Usage | Notes |
|---------|-----|-----|-------|-------|
| Primary Background | #0A0A0A | 10, 10, 10 | Canvas for all dark posts | True black feels harsh; this obsidian is warm |
| Accent (Signal Teal) | #00D4AA | 0, 212, 170 | CTAs, highlights, key metrics | Primary brand accent — high saturation |
| Secondary Surface | #111111 | 17, 17, 17 | Cards, containers, boxes | Barely lighter than black; creates depth |
| Text Primary | #FAFAFA | 250, 250, 250 | Headlines, main copy | Not pure white — more readable |
| Text Secondary | #A1A1AA | 161, 161, 170 | Metadata, supporting text | Medium gray for less important info |
| Accent Dark | #009B81 | 0, 155, 129 | Hover states, depth on accent | Darker teal for interaction states |
| Error/Warning Red | #D43F3F | 212, 63, 63 | Problem indicators, "before" states | Slightly desaturated red for premium feel |

## Typography

### Font Families

1. **Inter** (Headings, body)
   - Weights used: 400 (Regular), 700 (Bold)
   - Licensed: Google Fonts (free)
   - Usage: All headlines, supporting text, copy
   - Excellent readability at small sizes

2. **JetBrains Mono** (Metrics, data, numbers)
   - Weight: 700 (Bold)
   - Licensed: JetBrains (free)
   - Usage: KPIs, metrics, cost figures, percentages
   - Monospace gives authority to numerical data

### Type Scale (1:1 Square Posts)

| Element | Size | Weight | Color | Usage |
|---------|------|--------|-------|-------|
| Main Headline | 36-52px | Bold (700) | #FAFAFA | Post title, primary message |
| Quote/Feature Text | 52-92px | Bold (700) | #FAFAFA or #00D4AA | Large impact metrics or callouts |
| Subheading | 16-28px | Bold (700) | #00D4AA or #FAFAFA | Secondary messaging |
| Body Copy | 12-20px | Regular (400) | #A1A1AA | Supporting text, descriptions |
| Label/Metadata | 11-14px | Regular (400) | #A1A1AA | Smaller supporting text |
| Metric Number | 42-96px | Bold (700) | #FAFAFA or #00D4AA | KPIs, percentages, statistics |

### Type Scale (9:16 Vertical Reels)

| Element | Size | Weight | Color | Usage |
|---------|------|--------|-------|-------|
| Hero Headline | 48-56px | Bold (700) | #FAFAFA | Large text impact on mobile |
| Subheading | 18-28px | Bold (700) | #00D4AA | Secondary headline |
| Body Copy | 13-18px | Regular (400) | #FAFAFA | Main message body |
| Supporting | 12-14px | Regular (400) | #A1A1AA | Metadata, supporting info |
| Button Text | 14-16px | Bold (700) | #0A0A0A (on teal bg) | CTA text |
| Stats/Metrics | 72-96px | Bold (700) | #00D4AA or #FAFAFA | Large data emphasis |

## Spacing Grid

**Base unit: 20px**

- Micro spacing: 4px, 8px
- Small spacing: 20px (base)
- Medium spacing: 40px
- Large spacing: 60px, 80px
- XL spacing: 100px+

All padding, margins, positioning based on 20px multiples for consistency.

## Visual Design Principles (SaaS Aesthetic)

### Hierarchy & Emphasis

1. **Signal vs Noise:**
   - Use teal (#00D4AA) sparingly — only for CTAs, key metrics, emphasis
   - Most text is #FAFAFA or #A1A1AA
   - Avoid too many color calls to action on one post

2. **Whitespace:**
   - Generous negative space is premium
   - Cards and elements should "breathe"
   - Minimal borders, no drop shadows

3. **Contrast:**
   - Ensure all text has min 4.5:1 contrast (WCAG AA)
   - Test light text on dark backgrounds
   - Use #A1A1AA for secondary text (still passes contrast)

### Pattern & Texture

- Avoid busy backgrounds
- Subtle texture acceptable: thin lines, dot patterns (1-2% opacity max)
- Geometric elements OK: circles, lines, simple icons
- No photography, no filters, no gradients

### Reference Brands

**Vercel (@vercel)**
- Minimal dark interface
- Strong, centered typography
- Generous whitespace
- Accent color use (similar to teal)

**Linear (@linear)**
- Clean geometric diagrams
- Layered card designs
- High contrast text
- Purple accent (analogous approach to teal)

**Stripe (@stripe)**
- Restrained color palette
- Product-focused messaging
- Professional dark theme
- Minimal illustration style

## Component Standards

### Cards

- Background: #111111
- Border: Optional 1px #00D4AA or none
- Padding: 20px minimum
- Border radius: 0px (hard edges for minimal look)

### Buttons

- Background: #00D4AA
- Text: #0A0A0A (bold, readable)
- Padding: 16px horizontal, 12px vertical minimum
- Width: 260px standard for CTAs
- Height: 56px standard for CTAs
- Border radius: 0px

### Dividers

- Lines: 3px weight, #00D4AA, full opacity
- Dashed dividers: 3px dash pattern, #00D4AA
- Subtle separators: 1px #111111

### Icons

- Stroke weight: 4px for outlined icons
- Size: 24px (small), 60px (medium), 120px+ (hero)
- Color: #00D4AA for primary, #A1A1AA for secondary
- Style: Minimal, geometric, no fill unless hero icon

## Animation Guidance (for Reels)

- Keep minimal: 1-3 animations per 9:16 video
- Duration: 2-4 seconds per reveal/animation
- Easing: Linear or ease-in for professional feel
- Text reveals: Entrance animations on key numbers/quotes
- Line animations: Subtle line draws for diagrams
- Fade in/out: 0.5 second minimum for legibility

## Accessibility Notes

- Minimum text size: 11px (metadata), 14px (body)
- Avoid pure reds/greens for color-blind accessibility
- Red + teal combo is readable for red/green colorblind users
- All metrics should have labels (not just numbers)
- High contrast between text and background mandatory

## File Export Standards

- Format: PNG (transparent) for social, JPG (flat) for web
- Resolution: 72 DPI (social media standard)
- Color mode: RGB
- Canvas size: 1080×1080 (square), 1080×1920 (vertical)
- File naming: `ads-architect-[post-number]-[concept].png`
