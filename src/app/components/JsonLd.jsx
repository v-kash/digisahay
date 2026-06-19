/**
 * JsonLd — Injects JSON-LD structured data into <head>
 *
 * Usage (in any page.js or layout.js):
 *   import JsonLd from "@/components/JsonLd";
 *   import { organizationSchema } from "@/schemas/organization";
 *
 *   export default function Page() {
 *     return (
 *       <>
 *         <JsonLd data={organizationSchema} />
 *         <main>...</main>
 *       </>
 *     );
 *   }
 *
 * Note: In Next.js App Router, <script> tags rendered in a
 * Server Component are hoisted into <head> automatically.
 */

export default function JsonLd({ data }) {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0),
      }}
    />
  );
}