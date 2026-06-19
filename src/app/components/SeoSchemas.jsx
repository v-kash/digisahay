/**
 * SeoSchemas — Ready-made schema bundles for each page.
 *
 * Usage:
 *   import { HomeSchemas } from "@/components/SeoSchemas";
 *
 *   export default function HomePage() {
 *     return (
 *       <>
 *         <HomeSchemas />
 *         <main>...</main>
 *       </>
 *     );
 *   }
 */

import JsonLd from "./JsonLd";
import { organizationGraph } from "@/schemas/organization";
import { websiteSchema } from "@/schemas/website-schema";
import { faqHomeSchema } from "@/schemas/faq-home";
import { faqServicesSchema } from "@/schemas/faq-services";
import { servicesListSchema, websiteDevelopmentSchema } from "@/schemas/services-list";
import {
  breadcrumbHome,
  breadcrumbServices,
  breadcrumbOurWorks,
  breadcrumbContact,
} from "@/schemas/breadcrumbs";
import {
  ourWorksSchema,
  industriesServedSchema,
  featuredCaseStudySchema,
} from "@/schemas/our-works";

// ── Home page ─────────────────────────────────────────────────
export function HomeSchemas() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={organizationGraph} />
      <JsonLd data={faqHomeSchema} />
      <JsonLd data={servicesListSchema} />
      <JsonLd data={breadcrumbHome} />
    </>
  );
}

// ── Services page ─────────────────────────────────────────────
export function ServicesSchemas() {
  return (
    <>
      <JsonLd data={servicesListSchema} />
      <JsonLd data={websiteDevelopmentSchema} />
      <JsonLd data={faqServicesSchema} />
      <JsonLd data={breadcrumbServices} />
    </>
  );
}

// ── Our Works page ────────────────────────────────────────────
export function OurWorksSchemas() {
  return (
    <>
      <JsonLd data={ourWorksSchema} />
      <JsonLd data={industriesServedSchema} />
      <JsonLd data={featuredCaseStudySchema} />
      <JsonLd data={breadcrumbOurWorks} />
    </>
  );
}

// ── Contact page ──────────────────────────────────────────────
export function ContactSchemas() {
  return (
    <>
      <JsonLd data={organizationGraph} />
      <JsonLd data={breadcrumbContact} />
    </>
  );
}

// ── Root layout (inject on every page) ───────────────────────
export function RootSchemas() {
  return (
    <>
      <JsonLd data={websiteSchema} />
    </>
  );
}