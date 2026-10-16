import type { FaqItem } from "@/components/Accordion";
import { PLACEHOLDER, SITE } from "@/lib/site";

/** LegalService + Attorney graph. Unverified identity fields stay bracketed. */
export function legalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${SITE.url}/#firm`,
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.url,
        telephone: SITE.phoneE164,
        email: SITE.email,
        image: `${SITE.url}/assets/og-image.png`,
        logo: `${SITE.url}/assets/CaliLawyer_Logo.png`,
        areaServed: {
          "@type": "State",
          name: "California",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: PLACEHOLDER.office,
          addressRegion: "CA",
          addressCountry: "US",
        },
        description:
          "California firm reviewing lemon law claims and personal injury matters. Free case review. Figures, results, and credentials on this site are placeholders until attorney-verified.",
      },
      {
        "@type": "Attorney",
        "@id": `${SITE.url}/#attorney`,
        name: PLACEHOLDER.attorney,
        identifier: PLACEHOLDER.barNumber,
        worksFor: { "@id": `${SITE.url}/#firm` },
        areaServed: "California",
        url: `${SITE.url}/about`,
      },
    ],
  };
}

export function faqSchema(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
