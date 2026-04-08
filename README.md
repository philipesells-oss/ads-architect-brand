# ADS Architect — Brand & Digital Assets

> Acquisition Infrastructure for Hospitality & Wellness Brands  
> Live site: [adsarchitect.agency](https://adsarchitect.agency)

---

## What's in this repo

```
ads-architect-brand/
├── brand/
│   ├── brandbook.md              ← Full brand strategy (13 sections)
│   ├── design-brief.md           ← Design system, tokens, wireframes
│   └── instagram/
│       ├── visual-briefs.md      ← 10 post designs + Midjourney prompts
│       └── 30-day-calendar.md    ← Full content calendar + captions
└── website/                      ← Next.js 14 source code
```

---

## Instagram Posts — How to Download

All 10 posts are live and rendered at full Instagram resolution:

| # | Format | Content | URL |
|---|--------|---------|-----|
| 1 | 1:1 | Before/After Metrics ($347→$127) | [/instagram/post/1](https://adsarchitect.agency/instagram/post/1) |
| 2 | 1:1 | Acquisition Stack™ Diagram | [/instagram/post/2](https://adsarchitect.agency/instagram/post/2) |
| 3 | 1:1 | Quote Card — Reports vs Reservations | [/instagram/post/3](https://adsarchitect.agency/instagram/post/3) |
| 4 | 9:16 | Reel — Why Your Ads Aren't Working | [/instagram/post/4](https://adsarchitect.agency/instagram/post/4) |
| 5 | 1:1 | 3 Critical Gaps Analysis | [/instagram/post/5](https://adsarchitect.agency/instagram/post/5) |
| 6 | 9:16 | Reel — Acquisition Sprint 14 Days | [/instagram/post/6](https://adsarchitect.agency/instagram/post/6) |
| 7 | 1:1 | WhatsApp Automation — 200+ Reservations | [/instagram/post/7](https://adsarchitect.agency/instagram/post/7) |
| 8 | 9:16 | Reel — CPB $127→$48 Case Study | [/instagram/post/8](https://adsarchitect.agency/instagram/post/8) |
| 9 | 1:1 | ROAS vs Cost Per Booking | [/instagram/post/9](https://adsarchitect.agency/instagram/post/9) |
| 10 | 9:16 | Reel — Built in Bali, Trusted Worldwide | [/instagram/post/10](https://adsarchitect.agency/instagram/post/10) |

**Gallery view:** [adsarchitect.agency/instagram](https://adsarchitect.agency/instagram)

### How to export as PNG
1. Open any post URL above
2. Right-click on the post → **Inspect Element**
3. Right-click the root `<div>` → **Capture node screenshot**
4. Saves at exact resolution: 1080×1080 (1:1) or 1080×1920 (9:16)

---

## Website

Built with Next.js 14, Tailwind CSS, Framer Motion.

```bash
cd website
npm install
npm run dev     # localhost:3000
npm run build   # production build
```

### Environment Variables (for GHL integration)
Create a `.env.local` in `/website`:
```
GHL_API_KEY=your_key_here
GHL_LOCATION_ID=your_location_id_here
```

---

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Obsidian | `#0A0A0A` | Primary background |
| Signal Teal | `#00D4AA` | Accent, CTAs |
| Carbon | `#111111` | Cards, surfaces |
| Snow | `#FAFAFA` | Primary text |
| Muted | `#A1A1AA` | Secondary text |

**Fonts:** Inter (headings) · JetBrains Mono (metrics/numbers)

---

## Instagram Bio (selected)

```
Hospitality & Wellness brands: we turn ad spend into booked appointments.
50+ systems built · $2M+ managed · 4.8x avg ROAS
🔗 Book your free audit ↓
```
