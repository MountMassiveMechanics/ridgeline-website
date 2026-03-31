# Ridgeline Fleet Services — Marketing Website

Next.js 16 · Tailwind CSS v4 · Google Fonts (Barlow + Barlow Condensed) · Vercel

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Logo

Place your logo file at:

```
public/logo.png
```

The logo is a transparent-background circular PNG badge. It renders at three sizes:
- **Nav:** 52×52 px
- **Hero:** 120×120 px
- **Footer:** 44×44 px

## Calendly / Booking URL

All "Schedule a Fleet Assessment" CTAs currently link to `#`. To wire up Calendly:

1. Copy `.env.example` → `.env.local`
2. Set `NEXT_PUBLIC_ASSESSMENT_URL=https://calendly.com/your-handle/fleet-assessment`
3. Replace the `ASSESSMENT_URL` constant in `components/Nav.tsx`, `components/Hero.tsx`, and `components/Pricing.tsx` with `process.env.NEXT_PUBLIC_ASSESSMENT_URL ?? "#"`.

## Deploy to Vercel

```bash
npx vercel
```

Or connect the repo in the Vercel dashboard — it auto-detects Next.js and deploys on every push to main.

## Brand Colors

| Token      | Hex       | Usage                     |
|------------|-----------|---------------------------|
| navy       | `#1B2F5E` | Primary, hero bg, nav CTA |
| gold       | `#B8962E` | Accent, CTAs, eyebrows    |
| dark-navy  | `#13244A` | Trust bar, footer         |
| light-text | `#9AAFCF` | Subheads on dark          |
| muted      | `#7A94B8` | Secondary text on dark    |

## Project Structure

```
app/
  layout.tsx        fonts, metadata, html shell
  page.tsx          page composition
  globals.css       Tailwind v4 @theme + base styles
components/
  Nav.tsx
  Hero.tsx
  TrustBar.tsx
  HowItWorks.tsx
  Pricing.tsx
  Industries.tsx
  Testimonials.tsx
  Footer.tsx
public/
  logo.png          ← add your logo here
vercel.json
.env.example
```
