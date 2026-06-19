/**
 * Next.js App Router sitemap.js
 * Auto-generates /sitemap.xml with proper priorities & change frequencies.
 * Place this file at: app/sitemap.js
 *
 * Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 *
 * ── How to extend ──────────────────────────────────────────
 * If you add blog posts, case study detail pages or service
 * sub-pages, add them to the `dynamicRoutes` array or fetch
 * them from your CMS/database inside this function.
 * ──────────────────────────────────────────────────────────
 */

import { SEO } from "@/app/lib/seo";

export default function sitemap() {
  const now = new Date();

  // ── Static pages ──────────────────────────────────────────
  const staticRoutes = [
    {
      url: SEO.siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SEO.siteUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SEO.siteUrl}/our-works`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SEO.siteUrl}/contact-us`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  // ── Service anchor pages (if you create dedicated service pages) ──
  // Uncomment and update when you create /services/[slug] routes
  /*
  const serviceRoutes = SEO.services.map((service) => ({
    url: `${SEO.siteUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  */

  // ── Location pages (if you create city-specific landing pages) ──
  // Uncomment when you create /locations/[city] routes
  /*
  const locationRoutes = Object.values(SEO.branches).map((branch) => ({
    url: `${SEO.siteUrl}/locations/${branch.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  */

  return [
    ...staticRoutes,
    // ...serviceRoutes,
    // ...locationRoutes,
  ];
}