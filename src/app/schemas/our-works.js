/**
 * Schema: BreadcrumbList — all pages
 * Import the relevant export for each page.
 */

import { SEO } from "@/lib/seo";

const home = {
  "@type": "ListItem",
  position: 1,
  name: "Home",
  item: SEO.siteUrl,
};

export const breadcrumbHome = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [home],
};

export const breadcrumbServices = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    home,
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${SEO.siteUrl}/services`,
    },
  ],
};

export const breadcrumbOurWorks = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    home,
    {
      "@type": "ListItem",
      position: 2,
      name: "Our Works",
      item: `${SEO.siteUrl}/our-works`,
    },
  ],
};

export const breadcrumbContact = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    home,
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact Us",
      item: `${SEO.siteUrl}/contact-us`,
    },
  ],
};

/** Dynamic breadcrumb builder — use for any nested page */
export function buildBreadcrumb(crumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      home,
      ...crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.name,
        item: `${SEO.siteUrl}${c.path}`,
      })),
    ],
  };
}