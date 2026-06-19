/**
 * Schema: FAQPage — Services
 * FAQs from the Services page accordion section.
 * Inject on: app/services/page.js
 */

export const faqServicesSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Digital Sahaay provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital Sahaay provides a complete suite of digital growth services: Website & App Development, SEO Optimization, Social Media Marketing, Performance Marketing, Branding & Design, Content Marketing, Lead Generation and Business Growth Consulting. Each service is available as a standalone solution or as part of a bundled growth package.",
      },
    },
    {
      "@type": "Question",
      name: "Who are Digital Sahaay's services designed for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our services are designed for startups, small and medium-sized businesses (SMEs), growing brands and enterprise businesses across all industries. We have tailored plans for businesses at every stage — from those just building their digital presence to established brands looking to scale aggressively.",
      },
    },
    {
      "@type": "Question",
      name: "Does Digital Sahaay work with businesses from all industries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We have successfully delivered digital solutions for businesses across manufacturing, healthcare, engineering, agriculture, travel, jewellery & fashion, organic & wellness, smart living, recycling, NGOs and more. Our team adapts strategy based on your specific industry and audience.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I choose Digital Sahaay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital Sahaay stands out because of our results-driven approach, affordability for MSMEs and dedicated team of experts. We are backed by NextGen Business Consultancy — awarded Most Trusted Business Advisory of the Year 2026 by Outlook Business. We deliver transparent reporting, dedicated experts and proven growth strategies with a 95% client retention rate.",
      },
    },
    {
      "@type": "Question",
      name: "Can I hire Digital Sahaay for a single service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can hire us for a single service — such as just SEO, just website development or just social media marketing — without committing to a full package. We offer flexible engagements designed around your immediate needs and budget.",
      },
    },
    {
      "@type": "Question",
      name: "Does Digital Sahaay provide customized digital solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We don't believe in rigid one-size-fits-all packages. After a free consultation, our team creates a customized digital strategy based on your business goals, industry, target audience and budget — ensuring every investment drives real, measurable growth.",
      },
    },
  ],
};