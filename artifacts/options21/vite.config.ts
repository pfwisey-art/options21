import { defineConfig } from "vite";
import path from "path";

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,
  plugins: [],
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: path.resolve(import.meta.dirname, "index.html"),
        courses: path.resolve(import.meta.dirname, "courses.html"),
        mentoring: path.resolve(import.meta.dirname, "mentoring.html"),
        "traders-group": path.resolve(import.meta.dirname, "traders-group.html"),
        "ai-trading": path.resolve(import.meta.dirname, "ai-trading.html"),
        "ai-course": path.resolve(import.meta.dirname, "ai-course.html"),
        crypto: path.resolve(import.meta.dirname, "crypto.html"),
        "crypto-tokenisation": path.resolve(import.meta.dirname, "crypto-tokenisation.html"),
        compliance: path.resolve(import.meta.dirname, "compliance.html"),
        articles: path.resolve(import.meta.dirname, "articles.html"),
        about: path.resolve(import.meta.dirname, "about.html"),
        contact: path.resolve(import.meta.dirname, "contact.html"),
        "article-template": path.resolve(import.meta.dirname, "article-template.html"),
        "article-oil-shock-1970s": path.resolve(import.meta.dirname, "article-oil-shock-1970s.html"),
        "article-ai-infrastructure": path.resolve(import.meta.dirname, "article-ai-infrastructure.html"),
        "article-tesla-cybercab": path.resolve(import.meta.dirname, "article-tesla-cybercab.html"),
        privacy: path.resolve(import.meta.dirname, "privacy.html"),
        disclaimer: path.resolve(import.meta.dirname, "disclaimer.html"),
        "article-oil-shock-risk": path.resolve(import.meta.dirname, "article-oil-shock-risk.html"),
        "article-tesla-optimus": path.resolve(import.meta.dirname, "article-tesla-optimus.html"),
        "article-elon-infrastructure": path.resolve(import.meta.dirname, "article-elon-infrastructure.html"),
        "article-texas-ai-capacity": path.resolve(import.meta.dirname, "article-texas-ai-capacity.html"),
        "article-three-layers-ai": path.resolve(import.meta.dirname, "article-three-layers-ai.html"),
        "article-gold-gld": path.resolve(import.meta.dirname, "article-gold-gld.html"),
        "article-future-equity-drivers": path.resolve(import.meta.dirname, "article-future-equity-drivers.html"),
        "article-bear-steepener": path.resolve(import.meta.dirname, "article-bear-steepener.html"),
        "article-sector-performance-jan26": path.resolve(import.meta.dirname, "article-sector-performance-jan26.html"),
        "article-copper-demand": path.resolve(import.meta.dirname, "article-copper-demand.html"),
        "article-stock-buybacks-2025": path.resolve(import.meta.dirname, "article-stock-buybacks-2025.html"),
        "article-bitcoin-halving": path.resolve(import.meta.dirname, "article-bitcoin-halving.html"),
        "article-repo-market": path.resolve(import.meta.dirname, "article-repo-market.html"),
        "article-gold-rally-history": path.resolve(import.meta.dirname, "article-gold-rally-history.html"),
        "article-30yr-bond": path.resolve(import.meta.dirname, "article-30yr-bond.html"),
        "article-buyback-trends-2024": path.resolve(import.meta.dirname, "article-buyback-trends-2024.html"),
        "article-australia-usa-tariffs": path.resolve(import.meta.dirname, "article-australia-usa-tariffs.html"),
        "article-uranium-demand": path.resolve(import.meta.dirname, "article-uranium-demand.html"),
        "article-nuscale-smr": path.resolve(import.meta.dirname, "article-nuscale-smr.html"),
        "article-tesla-av-2025": path.resolve(import.meta.dirname, "article-tesla-av-2025.html"),
        "article-defence-etfs": path.resolve(import.meta.dirname, "article-defence-etfs.html"),
        "article-gold-silver-ratio": path.resolve(import.meta.dirname, "article-gold-silver-ratio.html"),
        "article-us-debt-default": path.resolve(import.meta.dirname, "article-us-debt-default.html"),
        "article-tokenised-assets-afsl": path.resolve(import.meta.dirname, "article-tokenised-assets-afsl.html"),
        "article-moodys-downgrade": path.resolve(import.meta.dirname, "article-moodys-downgrade.html"),
        "article-mstr-trade-note": path.resolve(import.meta.dirname, "article-mstr-trade-note.html"),
        "article-bitcoin-etfs-us": path.resolve(import.meta.dirname, "article-bitcoin-etfs-us.html"),
        "article-droneshield": path.resolve(import.meta.dirname, "article-droneshield.html"),
        "article-gm-pltr-mrna": path.resolve(import.meta.dirname, "article-gm-pltr-mrna.html"),
        "article-bitcoin-price-drivers": path.resolve(import.meta.dirname, "article-bitcoin-price-drivers.html"),
        "article-us-jobs-stagflation": path.resolve(import.meta.dirname, "article-us-jobs-stagflation.html"),
      },
    },
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
