/**
 * Services Page Metadata
 * ─────────────────────────────────────────────────────────────
 * USAGE in app/services/page.js:
 *
 *   export { metadata } from "@/app/services/metadata";
 *   // then add <ServicesSchemas /> inside the page component JSX
 * ─────────────────────────────────────────────────────────────
 */

import { SEO, buildOgImage, buildUrl } from "@/app/lib/seo";

const PAGE_TITLE =
  "Digital Marketing Services | Website Development, SEO, Social Media & More | Digital Sahaay";

const PAGE_DESCRIPTION =
  "Explore Digital Sahaay's complete digital growth services — website & app development, SEO optimization, social media marketing, performance marketing, branding & design, content marketing, lead generation and business consulting. Customized plans for every budget.";

const PAGE_URL = buildUrl("/services");

// Page-specific OG image (ideally create a services-specific one)
const OG_IMAGE_ALT =
  "Digital Sahaay — Complete Digital Marketing Services for Businesses in India";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    // Service-specific
    "digital marketing services India",
    "website development services India",
    "SEO services India",
    "social media marketing services",
    "performance marketing services India",
    "branding services India",
    "content marketing services",
    "lead generation services India",
    "business consulting India",
    // Location-specific
    "website development Ahmedabad",
    "SEO company Ahmedabad",
    "social media marketing Ahmedabad",
    "digital marketing services Ahmedabad",
    "website development Chennai",
    "SEO company Pune",
    // Service-specific long-tail
    "custom website development India",
    "Google Ads agency India",
    "Meta ads agency India",
    "ecommerce website development India",
    "landing page development India",
    "brand identity design India",
    "digital marketing package for small business",
    "website and SEO package India",
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
    images: [buildOgImage(OG_IMAGE_ALT)],
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