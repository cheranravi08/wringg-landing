# WRINGG Landing Page

Production-ready standalone landing page for WRINGG, built with Next.js, TypeScript, Tailwind CSS, and the App Router.

## Brand

- Company: WRINGG
- Tagline: Wash. Wear. Repeat.
- Domain: wringg.in
- Location: BTM Layout, Bengaluru
- WhatsApp: +91 84385 08211
- Email: hello@wringg.in

## Routes

- `/` - landing page
- `/privacy` - Privacy Policy
- `/terms` - Terms & Conditions
- `/refund` - Refund & Cancellation Policy
- `/shipping` - Shipping & Delivery Policy
- `/contact` - Contact page

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

This project uses `output: "export"` in `next.config.ts`, so the static production site is generated in the `out` directory.

## Cloudflare Worker Deployment

This project deploys as a Cloudflare Worker with static assets from the `out` directory.

Wrangler is included for CLI deployment.

```bash
npm run build
npm run worker:preview
```

Deploy the Worker:

```bash
npm run worker:deploy
```

If this is your first Cloudflare CLI deploy, authenticate first:

```bash
npx wrangler login
```

The Wrangler config is in `wrangler.jsonc`. Static assets are served from `out` using Workers static assets without an assets binding.

## Assets

The site uses the current WRINGG brand assets from `public`:

- Navbar: `public/LOGO+TEXT.jpg`
- Footer and metadata icon: `public/LOGO.jpg`
- Generated page visuals: `public/1 (2).png`, `public/1 (3).png`, `public/1 (4).png`, `public/1 (5).png`, `public/1.WEBP.png`, `public/2.WEBP.png`

## Pilot CTA Links

The landing page is currently in pilot mode. Primary CTAs use WhatsApp prefilled flows for early customer pickup requests and host onboarding, with button text framed as product actions instead of WhatsApp actions. These can later be swapped for app deep links or form URLs in `src/app/page.tsx`.
