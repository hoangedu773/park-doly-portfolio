// Single source of truth for the canonical site URL.
// Order: explicit env (custom domain) → Vercel production domain → local fallback.
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const previewHost = process.env.VERCEL_URL;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (productionHost
    ? `https://${productionHost}`
    : previewHost
      ? `https://${previewHost}`
      : "https://park-doly-portfolio.vercel.app");
