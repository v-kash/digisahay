/**
 * ─────────────────────────────────────────────────────────────
 *  Digital Sahaay — Central SEO Configuration
 *  digitalsahaay.com
 * ─────────────────────────────────────────────────────────────
 *  Import this anywhere you need SEO constants.
 *  All page metadata & schema files pull from here.
 * ─────────────────────────────────────────────────────────────
 */

export const SEO = {
  // ── Core ──────────────────────────────────────────────────
  siteName: "Digital Sahaay",
  siteUrl: "https://www.digitalsahaay.com",
  tagline: "India's Trusted Digital Growth Partner",

  // ── Default meta ──────────────────────────────────────────
  defaultTitle: "Digital Sahaay | Digital Marketing Agency India",
  titleTemplate: "%s | Digital Sahaay",
  defaultDescription:
    "India's trusted digital growth partner. Digital Sahaay helps 100+ businesses build stronger online presence, generate quality leads & achieve measurable growth through website development, SEO, social media marketing and more. Offices in Ahmedabad, Chennai & Pune.",

  // ── Assets ── (create these files in /public/images/)  ───
  logo: "https://www.digitalsahaay.com/images/logo.png",
  ogImage: "https://www.digitalsahaay.com/images/og-image.jpg", // must be 1200×630
  ogImageWidth: 1200,
  ogImageHeight: 630,

  // ── Locale ────────────────────────────────────────────────
  locale: "en_IN",
  language: "en-IN",
  country: "IN",

  // ── Brand colors ──────────────────────────────────────────
  themeColor: "#5B46F8",
  backgroundColor: "#ffffff",

  // ── Social ────────────────────────────────────────────────
  twitterHandle: "@digitalsahaay",
  social: {
    linkedin: "https://in.linkedin.com/company/nextgen-business-consultancy",
    facebook:
      "https://www.facebook.com/p/Next-Gen-Business-Consultancy-Private-Limited-61574060610065/",
    instagram: "https://www.instagram.com/next_gen_group_of_companies/",
    youtube: "https://www.youtube.com/@NextGen-Business-Consultancy",
  },

  // ── Verification codes (replace with real codes) ──────────
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE",
    bing: "REPLACE_WITH_BING_WEBMASTER_CODE",
  },

  // ── Services ──────────────────────────────────────────────
  services: [
    {
      name: "Website Development",
      slug: "website-development",
      description:
        "Modern, responsive and high-performing websites designed to build credibility and generate leads.",
    },
    {
      name: "SEO Optimization",
      slug: "seo-optimization",
      description:
        "Data-driven SEO strategies to improve search rankings, increase visibility and drive organic traffic.",
    },
    {
      name: "Social Media Marketing",
      slug: "social-media-marketing",
      description:
        "Build brand awareness and engage your audience across all major social media platforms.",
    },
    {
      name: "Performance Marketing",
      slug: "performance-marketing",
      description:
        "ROI-focused advertising campaigns across Google, Meta and other platforms for measurable results.",
    },
    {
      name: "Branding & Design",
      slug: "branding-design",
      description:
        "Creative strategies, one and powerful brand identity that stands out and builds trust.",
    },
    {
      name: "Content Marketing",
      slug: "content-marketing",
      description:
        "Content strategies that attract, educate and convert your target audience across all channels.",
    },
    {
      name: "Lead Generation",
      slug: "lead-generation",
      description:
        "Generate consistent, high-quality leads for your business through proven digital strategies.",
    },
    {
      name: "Business Growth Consulting",
      slug: "business-consulting",
      description:
        "Strategic guidance to help your business scale confidently with data-backed decisions.",
    },
  ],

  // ── Branch offices ────────────────────────────────────────
  branches: {
    ahmedabad: {
      id: "ahmedabad",
      name: "Digital Sahaay — Ahmedabad",
      city: "Ahmedabad",
      state: "Gujarat",
      stateCode: "GJ",
      postalCode: "380054",
      street: "2nd Floor, President Plaza, 5g Highway Thatej",
      fullAddress:
        "2nd Floor, President Plaza, 5g Highway Thatej, Ahmedabad – 380054, Gujarat, India",
      phone: "+91-63576-65915",
      phoneE164: "+916357665915",
      email: "info@digitalsahaay.com",
      // ⚠️ Replace with exact coordinates from Google Maps
      geo: { lat: 23.05169584121351, lng: 72.51896023573782 },
      mapUrl:
        "https://www.google.com/maps/search/President+Plaza+5g+Highway+Thatej+Ahmedabad+380054",
      openingHours: "Mo,Tu,We,Th,Fr,Sa 10:00-19:00",
    },
    chennai: {
      id: "chennai",
      name: "Digital Sahaay — Chennai",
      city: "Chennai",
      state: "Tamil Nadu",
      stateCode: "TN",
      postalCode: "600035",
      street: "46 Fanepet, 2nd Street, Subbu Towers, 3rd Floor, Nandanam",
      fullAddress:
        "46 Fanepet, 2nd Street, Subbu Towers, 3rd Floor, Nandanam, Chennai – 600035, Tamil Nadu, India",
      phone: "+91-63576-65925",
      phoneE164: "+916357665925",
      email: "info@digitalsahaay.com",
      geo: { lat: 13.0418, lng: 80.2341 },
      mapUrl:
        "https://www.google.com/maps/search/Subbu+Towers+Nandanam+Chennai+600035",
      openingHours: "Mo,Tu,We,Th,Fr,Sa 10:00-19:00",
    },
    pune: {
      id: "pune",
      name: "Digital Sahaay — Pune",
      city: "Pune",
      state: "Maharashtra",
      stateCode: "MH",
      postalCode: "411001",
      street:
        "Trade Centre, B-102, N Main Rd, Liberty Phase 2, Ragvilas Society, Koregaon Park",
      fullAddress:
        "Trade Centre, B-102, N Main Rd, Liberty Phase 2, Ragvilas Society, Koregaon Park, Pune – 411001, Maharashtra, India",
      phone: "+91-72111-98498",
      phoneE164: "+917211198498",
      email: "info@digitalsahaay.com",
      geo: { lat: 18.5362, lng: 73.8946 },
      mapUrl:
        "https://www.google.com/maps/search/Trade+Centre+Koregaon+Park+Pune+411001",
      openingHours: "Mo,Tu,We,Th,Fr,Sa 10:00-19:00",
    },
  },

  // ── Industries served (from Our Works page) ───────────────
  industries: [
    "Manufacturing",
    "Healthcare",
    "Engineering",
    "Agriculture",
    "Travel Agency",
    "Jewellery & Fashion",
    "Organic & Wellness",
    "SmartLiving",
    "Recycling",
    "NGO & Nonprofit",
  ],

  // ── Stats (for schema markup) ──────────────────────────────
  stats: {
    businessesServed: "100+",
    avgGrowthRate: "3X",
    roiOnCampaigns: "5X",
    clientRetention: "95%",
  },
};

// ── Helpers ─────────────────────────────────────────────────

/** Build absolute URL from a path */
export function buildUrl(path = "") {
  return `${SEO.siteUrl}${path}`;
}

/** Build OG image object for metadata */
export function buildOgImage(
  alt = "Digital Sahaay — Digital Marketing Agency India",
) {
  return {
    url: SEO.ogImage,
    width: SEO.ogImageWidth,
    height: SEO.ogImageHeight,
    alt,
    type: "image/jpeg",
  };
}

/** Collect all social profile URLs as array */
export function getSocialUrls() {
  return Object.values(SEO.social);
}

/** Get branch objects as an array */
export function getBranches() {
  return Object.values(SEO.branches);
}
