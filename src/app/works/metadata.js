/**
 * Our Works Page Metadata
 * ─────────────────────────────────────────────────────────────
 * USAGE in app/our-works/page.js:
 *
 *   export { metadata } from "@/app/our-works/metadata";
 *   // then add <OurWorksSchemas /> inside the page component JSX
 * ─────────────────────────────────────────────────────────────
 */

import { SEO, buildOgImage, buildUrl } from "@/lib/seo";

const PAGE_TITLE =
  "Our Works & Case Studies | Real Digital Growth Results | Digital Sahaay";

const PAGE_DESCRIPTION =
  "See how Digital Sahaay has helped 100+ businesses across manufacturing, healthcare, engineering, agriculture, travel & more achieve measurable digital growth. Real case studies. Real results. Industries across India.";

const PAGE_URL = buildUrl("/our-works");

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    // Portfolio & case study terms
    "digital marketing case studies India",
    "website development portfolio India",
    "digital marketing portfolio agency",
    "SEO results case study India",
    "social media marketing results",
    "performance marketing case studies",
    // Industry-specific
    "manufacturing digital marketing India",
    "healthcare digital marketing agency India",
    "agriculture website development India",
    "jewellery brand digital marketing",
    "travel agency digital marketing India",
    "NGO digital marketing India",
    // Trust signals
    "digital marketing agency client results",
    "proven digital marketing results India",
    "human centered digital solutions",
    "digital marketing agency portfolio Ahmedabad",
    // Long-tail
    "best digital marketing agency results India",
    "digital agency that delivers ROI India",
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
        "Digital Sahaay Portfolio — Real Results for Real Businesses Across India"
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