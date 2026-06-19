/**
 * Root Layout Metadata
 * ─────────────────────────────────────────────────────────────
 * USAGE: Copy this `metadata` export into your app/layout.js
 *
 *   // app/layout.js
 *   export { metadata } from "@/app/layout-metadata";
 *
 *   // or copy the object directly into your layout.js
 * ─────────────────────────────────────────────────────────────
 */

import { SEO, buildOgImage } from "@/lib/seo";

export const metadata = {
  // ── metadataBase (required for absolute OG URLs) ──────────
  metadataBase: new URL(SEO.siteUrl),

  // ── Title ─────────────────────────────────────────────────
  title: {
    default: SEO.defaultTitle,
    template: SEO.titleTemplate, // "%s | Digital Sahaay"
  },

  // ── Description ───────────────────────────────────────────
  description: SEO.defaultDescription,

  // ── Keywords (Bing + minor signals) ───────────────────────
  keywords: [
    "digital marketing agency India",
    "digital marketing Ahmedabad",
    "website development company India",
    "SEO agency Ahmedabad",
    "social media marketing India",
    "performance marketing agency India",
    "digital growth partner India",
    "online marketing services",
    "lead generation services India",
    "branding agency India",
    "content marketing agency",
    "business growth consulting India",
    "digital marketing Chennai",
    "digital marketing Pune",
    "digital marketing for SMEs",
    "ROI focused digital marketing",
  ],

  // ── Authors & creator ─────────────────────────────────────
  authors: [{ name: SEO.siteName, url: SEO.siteUrl }],
  creator: SEO.siteName,
  publisher: SEO.siteName,

  // ── Canonical ─────────────────────────────────────────────
  alternates: {
    canonical: SEO.siteUrl,
    languages: {
      "en-IN": SEO.siteUrl,
    },
  },

  // ── Open Graph ────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: SEO.locale,
    url: SEO.siteUrl,
    siteName: SEO.siteName,
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: [buildOgImage()],
  },

  // ── Twitter / X Card ─────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: SEO.twitterHandle,
    creator: SEO.twitterHandle,
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: [SEO.ogImage],
  },

  // ── Robots ────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Icons ─────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: SEO.themeColor,
      },
    ],
  },

  // ── Manifest ──────────────────────────────────────────────
  manifest: "/manifest.json",

  // ── Verification codes ────────────────────────────────────
  verification: {
    google: SEO.verification.google,
    other: {
      "msvalidate.01": SEO.verification.bing,
    },
  },

  // ── Extra meta ────────────────────────────────────────────
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ── Theme color ───────────────────────────────────────────
  // (Next.js 14+)
  // themeColor: SEO.themeColor,

  // ── App-specific ──────────────────────────────────────────
  applicationName: SEO.siteName,
  category: "Digital Marketing Agency",

  // ── Geo meta (for local SEO signals) ─────────────────────
  // Note: Next.js metadata API doesn't have a direct geo field;
  // add these via custom <meta> tags in your layout's <head>:
  //   <meta name="geo.region" content="IN-GJ" />
  //   <meta name="geo.placename" content="Ahmedabad" />
  //   <meta name="geo.position" content="23.0785;72.5878" />
  //   <meta name="ICBM" content="23.0785, 72.5878" />
};

