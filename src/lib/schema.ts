import type { FaqItem } from "@/components/Accordion";
import { ATTORNEY, FEE_TERMS, LANGUAGE_CODES, OFFICE, SITE } from "@/lib/site";

/** LegalService + Attorney graph for the approved firm facts. */
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
        knowsLanguage: [...LANGUAGE_CODES],
        areaServed: [
          { "@type": "City", name: OFFICE.city },
          { "@type": "State", name: "California" },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: OFFICE.street,
          addressLocality: OFFICE.city,
          addressRegion: OFFICE.region,
          postalCode: OFFICE.postalCode,
          addressCountry: "US",
        },
        description: `CaliLawyer.com in Glendale reviews California lemon law and personal injury matters. Free consultation. ${FEE_TERMS}`,
      },
      {
        "@type": "Attorney",
        "@id": `${SITE.url}/#attorney`,
        name: ATTORNEY.name,
        identifier: ATTORNEY.barNumber,
        worksFor: { "@id": `${SITE.url}/#firm` },
        knowsLanguage: [...LANGUAGE_CODES],
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
