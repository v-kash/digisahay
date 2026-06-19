/**
 * Home Page Metadata
 * ─────────────────────────────────────────────────────────────
 * USAGE in app/page.js:
 *
 *   export { metadata } from "@/app/home/metadata";
 *   // then add <HomeSchemas /> inside the page component JSX
 * ─────────────────────────────────────────────────────────────
 */

import { SEO, buildOgImage, buildUrl } from "@/app/lib/seo";

const PAGE_TITLE =
  "Digital Sahaay | Grow Your Business with Smart Digital Solutions | India";

const PAGE_DESCRIPTION =
  "India's trusted digital growth partner. Digital Sahaay helps 100+ startups & businesses build strong online presence, generate quality leads & achieve measurable growth. 3X avg growth rate, 5X ROI on campaigns, 95% client retention. Offices in Ahmedabad, Chennai & Pune.";

const PAGE_URL = SEO.siteUrl;

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    // Primary — high intent
    "digital marketing agency India",
    "digital marketing company Ahmedabad",
    "digital marketing services India",
    "website development company Ahmedabad",
    "SEO agency India",
    // Secondary
    "social media marketing agency India",
    "performance marketing agency India",
    "lead generation company India",
    "branding agency Ahmedabad",
    "content marketing India",
    "business growth consultant India",
    // Local
    "digital marketing Ahmedabad",
    "digital marketing Chennai",
    "digital marketing Pune",
    "digital agency Gujarat",
    // Long-tail
    "best digital marketing agency for small business India",
    "affordable digital marketing services SME India",
    "ROI focused digital marketing India",
    "digital marketing for startups India",
    "trusted digital growth partner India",
    "India's trusted digital growth partner",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { "en-IN": PAGE_URL },
  },
  openGraph: {
    type: "website",
    locale: SEO.locale,
    url: PAGE_URL,
    siteName: SEO.siteName,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      buildOgImage(
        "Digital Sahaay — Grow Your Business with Smart Digital Solutions"
      ),
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SEO.twitterHandle,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [SEO.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};