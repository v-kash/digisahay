/**
 * Schema: Organization + LocalBusiness (3 branches)
 * Injected on: Home, Contact pages (and optionally all pages via root layout)
 */

import { SEO, getSocialUrls, getBranches } from "@/lib/seo";

// ── Organization ─────────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SEO.siteUrl}/#organization`,
  name: SEO.siteName,
  alternateName: "Digital Sahay",
  url: SEO.siteUrl,
  logo: {
    "@type": "ImageObject",
    "@id": `${SEO.siteUrl}/#logo`,
    url: SEO.logo,
    contentUrl: SEO.logo,
    width: 400,
    height: 100,
    caption: "Digital Sahaay — India's Trusted Digital Growth Partner",
  },
  image: { "@id": `${SEO.siteUrl}/#logo` },
  description:
    "Digital Sahaay is India's trusted digital growth partner powered by NextGen Business Consultancy Pvt. Ltd. We help startups and businesses build strong online presence, generate quality leads and scale with result-driven digital solutions — website development, SEO, social media marketing, performance marketing, branding, content marketing, lead generation and business consulting.",
  foundingDate: "2024",
  areaServed: [
    { "@type": "Country", "name": "India" },
    { "@type": "City", "name": "Ahmedabad" },
    { "@type": "City", "name": "Chennai" },
    { "@type": "City", "name": "Pune" },
  ],
  knowsAbout: [
    "Digital Marketing",
    "Search Engine Optimization",
    "Website Development",
    "Social Media Marketing",
    "Performance Marketing",
    "Lead Generation",
    "Branding & Design",
    "Content Marketing",
    "Business Growth Consulting",
  ],
  award:
    "Most Trusted Business Advisory of the Year 2026 – Outlook Business",
  parentOrganization: {
    "@type": "Organization",
    name: "NextGen Business Consultancy Private Limited",
    url: "https://in.linkedin.com/company/nextgen-business-consultancy",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SEO.branches.ahmedabad.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Gujarati"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    },
    {
      "@type": "ContactPoint",
      email: "info@digitalsahaay.com",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: getSocialUrls(),
};

// ── LocalBusiness — builder ───────────────────────────────────
function buildLocalBusiness(branch) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MarketingAgency", "ProfessionalService"],
    "@id": `${SEO.siteUrl}/#local-${branch.id}`,
    name: branch.name,
    alternateName: `Digital Sahay ${branch.city}`,
    url: SEO.siteUrl,
    logo: SEO.logo,
    image: SEO.ogImage,
    description: `Digital Sahaay's ${branch.city} office provides complete digital marketing, website development, SEO optimization, social media marketing, performance marketing and business growth consulting services for businesses across ${branch.state}.`,
    telephone: branch.phone,
    email: branch.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.street,
      addressLocality: branch.city,
      addressRegion: branch.state,
      postalCode: branch.postalCode,
      addressCountry: branch.city === "IN" ? "IN" : "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: branch.geo.lat,
      longitude: branch.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, Bank Transfer",
    areaServed: [
      { "@type": "City", name: branch.city },
      { "@type": "State", name: branch.state },
      { "@type": "Country", name: "India" },
    ],
    hasMap: branch.mapUrl,
    servesCuisine: undefined,
    // Services offered
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: SEO.services.map((s, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
        },
        position: i + 1,
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: getSocialUrls(),
    parentOrganization: {
      "@id": `${SEO.siteUrl}/#organization`,
    },
  };
}

export const localBusinessSchemas = getBranches().map(buildLocalBusiness);

// ── Combined @graph (use this for home/contact pages) ─────────
export const organizationGraph = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    ...localBusinessSchemas,
  ],
};