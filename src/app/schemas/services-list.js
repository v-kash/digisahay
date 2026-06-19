/**
 * Schema: Service ItemList + Individual Service schemas
 * Inject on: app/services/page.js
 */

import { SEO } from "@/lib/seo";

// ── ItemList of all services ──────────────────────────────────
export const servicesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SEO.siteUrl}/services#service-list`,
  name: "Digital Marketing Services by Digital Sahaay",
  description:
    "Complete digital growth services for startups and businesses across India.",
  url: `${SEO.siteUrl}/services`,
  numberOfItems: SEO.services.length,
  itemListElement: SEO.services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      "@id": `${SEO.siteUrl}/services#${service.slug}`,
      name: service.name,
      description: service.description,
      url: `${SEO.siteUrl}/services#${service.slug}`,
      provider: {
        "@id": `${SEO.siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      serviceType: service.name,
    },
  })),
};

// ── Website Development service (detailed) ────────────────────
export const websiteDevelopmentSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SEO.siteUrl}/services#website-development`,
  name: "Website & App Development",
  description:
    "Modern, responsive and high-performing websites and web applications designed to build brand credibility and generate leads. Packages range from single landing pages to enterprise-grade CMS and e-commerce platforms.",
  provider: { "@id": `${SEO.siteUrl}/#organization` },
  serviceType: "Website Development",
  areaServed: { "@type": "Country", name: "India" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Development Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Essential Plan",
        description:
          "Ideal for startups. Single landing page with clean, modern UI design, basic SEO setup, contact form integration and email support.",
        eligibleCustomer: {
          "@type": "BusinessAudience",
          audienceType: "Startups and Freelancers",
        },
      },
      {
        "@type": "Offer",
        name: "Professional Plan",
        description:
          "Ideal for growing brands. Multi-page business website with up to 15 strategic pages, custom UI/UX design, advanced responsive optimization, advanced SEO + performance setup, CRM + lead generation integration and priority support.",
        eligibleCustomer: {
          "@type": "BusinessAudience",
          audienceType: "Growing Businesses & Brands",
        },
      },
      {
        "@type": "Offer",
        name: "Enterprise Plan",
        description:
          "Ideal for scaling businesses. CMS / e-commerce / custom platform with up to 15+ dynamic pages, premium enterprise experience, enterprise-grade mobile optimization, API booking + payment integration and dedicated support.",
        eligibleCustomer: {
          "@type": "BusinessAudience",
          audienceType: "Large Businesses & Enterprise Platforms",
        },
      },
    ],
  },
};