/**
 * Contact Us Page Metadata
 * ─────────────────────────────────────────────────────────────
 * USAGE in app/contact-us/page.js:
 *
 *   export { metadata } from "@/app/contact-us/metadata";
 *   // then add <ContactSchemas /> inside the page component JSX
 * ─────────────────────────────────────────────────────────────
 */

import { SEO, buildOgImage, buildUrl } from "@/lib/seo";

const PAGE_TITLE =
  "Contact Digital Sahaay | Book Free Consultation | Ahmedabad, Chennai, Pune";

const PAGE_DESCRIPTION =
  "Get in touch with Digital Sahaay — India's trusted digital growth partner. Book a free strategy consultation with our experts. 3 offices across India: Ahmedabad (Gujarat), Chennai (Tamil Nadu) and Pune (Maharashtra). Call +91-63576-65915.";

const PAGE_URL = buildUrl("/contact-us");

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    // Contact / CTA terms
    "contact digital sahaay",
    "book free digital marketing consultation India",
    "free digital strategy call",
    "digital marketing consultation Ahmedabad",
    "digital marketing agency contact India",
    // Location-specific
    "digital marketing agency Ahmedabad address",
    "digital marketing agency Chennai address",
    "digital marketing agency Pune address",
    "digital marketing office Ahmedabad",
    "digital marketing office Chennai",
    "digital marketing office Pune",
    // Intent-driven
    "hire digital marketing agency India",
    "get free digital marketing strategy",
    "digital growth partner consultation India",
    "digital sahaay phone number",
    "digital sahaay email",
    // Brand
    "digital sahaay contact",
    "nextgen business consultancy contact",
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
        "Contact Digital Sahaay — Free Digital Strategy Consultation"
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