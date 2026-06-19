/**
 * Schema: WebSite
 * Enables Google Sitelinks Searchbox in SERPs.
 * Inject on every page (root layout preferred).
 */

import { SEO } from "@/lib/seo";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SEO.siteUrl}/#website`,
  name: SEO.siteName,
  alternateName: "Digital Sahay",
  url: SEO.siteUrl,
  description: SEO.defaultDescription,
  publisher: { "@id": `${SEO.siteUrl}/#organization` },
  inLanguage: "en-IN",
  potentialAction: [
    {
      // Sitelinks Searchbox — Google may show a search box under your result
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SEO.siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  ],
};