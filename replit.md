# Options21

A multi-page financial trading website for Paul Wise (AFSL-licensed options trader/educator), covering options education, AI trading tools, live Traders Group broadcasts, crypto/tokenisation, compliance, and geopolitical market analysis.

## Run & Operate

- Workflow `artifacts/options21: web` — serves the static site (Vite dev server)
- `pnpm --filter @workspace/options21 run build` — production build to `artifacts/options21/dist/public`
- Required env: `PORT`, `BASE_PATH` (set by workflow config)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: Vite (multi-page static HTML — no React/framework)
- All pages: standalone self-contained HTML with inline CSS and inline JS
- Fonts: Google Fonts (Cormorant Garamond, DM Sans, JetBrains Mono) via CDN
- Charts: TradingView embedded iframes

## Where things live

- `artifacts/options21/` — all HTML pages live here (Vite root)
- `artifacts/options21/vite.config.ts` — multi-page Vite config with `rollupOptions.input` for all pages
- `attached_assets/` — original source HTML files from user

## Architecture decisions

- Pure static multi-page site — no React, no framework, no build-time JS bundling needed
- Each HTML page is fully self-contained (inline CSS, inline JS, Google Fonts CDN)
- Vite used as dev server + production bundler; `rollupOptions.input` lists all pages
- Pages link to each other via `.html` extensions (e.g. `href="courses.html"`) which works correctly with Vite's base path `/`
- React, Tailwind, and Replit dev plugins removed from vite.config.ts — not needed for static HTML

## Product

Core site pages (11): index, courses, traders-group, ai-trading, ai-course, crypto, crypto-tokenisation, compliance, articles, about, contact

Article pages (27 total):
- **article-oil-shock-1970s.html**, **article-ai-infrastructure.html**, **article-tesla-cybercab.html** — original 3 articles
- **article-oil-shock-risk.html**, **article-tesla-optimus.html**, **article-elon-infrastructure.html**, **article-texas-ai-capacity.html**, **article-three-layers-ai.html** — AI/energy batch
- **article-gold-gld.html**, **article-future-equity-drivers.html**, **article-bear-steepener.html**, **article-sector-performance-jan26.html** — macro/commodities batch
- **article-copper-demand.html**, **article-stock-buybacks-2025.html**, **article-bitcoin-halving.html**, **article-repo-market.html** — markets batch
- **article-gold-rally-history.html**, **article-30yr-bond.html**, **article-buyback-trends-2024.html**, **article-australia-usa-tariffs.html** — macro/geopolitics batch
- **article-uranium-demand.html**, **article-nuscale-smr.html** — nuclear/energy batch
- **article-tesla-av-2025.html**, **article-defence-etfs.html**, **article-gold-silver-ratio.html**, **article-us-debt-default.html** — latest batch

Support pages: article-template.html, privacy.html, disclaimer.html

articles.html cards: 31 total; 24 are linked to article pages, 7 remain as href="#" placeholders (no document yet for: Hot Tech List, GM/Palantir/Moderna, EOS, Marathon Digital, DroneShield, Trader Status, INDA ETFs)

## User preferences

- Site content and design provided by user as pre-built HTML files — do not regenerate or redesign without instruction
- AFSL 247412 (Ivanhoe International Pty Ltd)

## Gotchas

- HTML files must stay in `artifacts/options21/` root (Vite root) for relative links like `href="courses.html"` to resolve correctly
- Do NOT add React/Tailwind back to vite.config.ts — the pages are pure HTML
- If adding new pages, add them to `rollupOptions.input` in vite.config.ts
- New article pages use the same inline-CSS template as article-australia-usa-tariffs.html

## Pointers

- See the `pnpm-workspace` skill for workspace structure
- See `artifacts` skill for artifact lifecycle (createArtifact, presentArtifact, etc.)
