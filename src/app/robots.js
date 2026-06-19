/**
 * Next.js App Router robots.js
 * Generates /robots.txt automatically.
 * Place this file at: app/robots.js
 *
 * Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */

import { SEO } from "@/app/lib/seo";

export default function robots() {
  return {
    rules: [
      {
        // Allow all crawlers on all public pages
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",        // Block API routes
          "/_next/",      // Block Next.js internals
          "/admin/",      // Block admin area (if exists)
          "/dashboard/",  // Block dashboard (if exists)
          "/*.json$",     // Block raw JSON files
          "/private/",    // Block any private sections
        ],
      },
      {
        // GPTBot — OpenAI crawler
        // Remove this block if you want OpenAI to index your content
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        // Google-Extended — Google's AI training crawler
        // Remove this block if you want Google AI to use your content
        userAgent: "Google-Extended",
        disallow: "/",
      },
      {
        // CCBot — Common Crawl (used for AI training)
        userAgent: "CCBot",
        disallow: "/",
      },
    ],
    sitemap: `${SEO.siteUrl}/sitemap.xml`,
    host: SEO.siteUrl,
  };
}