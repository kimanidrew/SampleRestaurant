# JIKO — Kenyan Restaurant Experience

A responsive Next.js App Router website for JIKO, with a Kenyan menu, order-by-WhatsApp flow, 3D-inspired food cards, and an interactive restaurant tour.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

## Customization

Edit `lib/config.ts` to change restaurant name, address, phone, hours, WhatsApp, social links, and map location. Edit `data/menu.json` to update menu items and KES prices. Replace SVG art in `public/assets/images/` with your optimized restaurant photography. Add GLB/GLTF models under `public/assets/models/` and update the model paths in the 3D components.

## Vercel

Import this GitHub repository into Vercel, select Next.js, and deploy. No environment variables are required for the starter. Add a custom domain under Project → Settings → Domains and configure the DNS records shown by Vercel.

## Credits

Website created by the JIKO website developer. Contact: +254 723 766 032 · kimanidan585@gmail.com.
