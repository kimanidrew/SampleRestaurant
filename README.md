# JIKO — Kenyan Restaurant Experience

A responsive Next.js App Router website for JIKO, featuring an interactive Three.js hero dish, procedural 3D dining-room tour, Kenyan menu with KES pricing, cart and WhatsApp ordering.

## Asset inspection

The supplied ZIP contains **160 JPEG files**, all in the archive root, totalling approximately **21.19 MB**. They are sequential 480×270 frames depicting the JIKO restaurant entrance, interior, dining and food scenes. No GLB/GLTF model, separate logo, menu document or equirectangular 360° panorama was present.

The source imagery is documented under `public/assets/{images,tour,models}/`. The site currently uses lightweight 3D/CSS illustrations and a procedural room as fallbacks. The original 160 JPEG binaries have **not yet been copied into this repository**; add them to `public/assets/tour/` (or convert them to an optimized WebP sequence) to use the supplied footage in the live gallery/tour. The supplied files are all comfortably below Vercel's 100 MB per-file limit.

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

A GitHub Actions workflow runs the production build on pushes and pull requests to `main`.

## Customize

- Restaurant name, location, phone, email, WhatsApp number, hours, map and social links: `lib/config.ts`
- Menu items, categories, descriptions, tags, ingredients and KES prices: `data/menu.json`
- Brand logo: `public/assets/logo/jiko.svg`
- Replace the procedural 3D food and room fallback with optimized GLB/GLTF models in `public/assets/models/`.
- Add optimized photos/panoramas in `public/assets/images/` and `public/assets/tour/`.

## Deploy to Vercel

1. Push the repository to GitHub (already connected at the repository URL below).
2. In Vercel, choose **Add New → Project** and import `kimanidrew/SampleRestaurant`.
3. Framework preset: **Next.js**. Build command: `npm run build`. Output directory: leave default. Install command: `npm install`.
4. No environment variables are required for the current starter.
5. Click **Deploy**. For a custom domain, open **Project → Settings → Domains**, add your domain (for example `jiko.co.ke`), then copy the DNS records Vercel displays into your domain registrar's DNS settings. Wait for verification and HTTPS provisioning.

## Creator credit

Website created by **Daniel Irungu** · **+254 723 766 032** · **kimanidan585@gmail.com**.
