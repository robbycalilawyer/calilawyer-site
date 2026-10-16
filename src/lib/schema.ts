import type { FaqItem } from "@/components/Accordion";
import { ATTORNEY_ALT, ATTORNEY_PHOTO } from "@/lib/attorney-photo";
import {
  ATTORNEY,
  FEE_TERMS,
  FIRM_ID,
  LANGUAGE_CODES,
  OFFICE,
  PERSON_ID,
  SITE,
} from "@/lib/site";

/** One firm node plus the responsible attorney. */
export function legalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LegalService"],
        "@id": FIRM_ID,
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.url,
        telephone: SITE.phoneE164,
        email: SITE.email,
        image: `${SITE.url}/assets/og-image.png`,
        logo: `${SITE.url}/assets/CaliLawyer_Logo.png`,
        knowsLanguage: [...LANGUAGE_CODES],
        address: {
          "@type": "PostalAddress",
          streetAddress: OFFICE.street,
          addressLocality: OFFICE.city,
          addressRegion: OFFICE.region,
          postalCode: OFFICE.postalCode,
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "City", name: "Glendale" },
          { "@type": "City", name: "Burbank" },
          { "@type": "City", name: "Pasadena" },
          { "@type": "City", name: "Los Angeles" },
          { "@type": "State", name: "California" },
        ],
        knowsAbout: [
          "Personal injury law",
          "California lemon law",
          "Song-Beverly Consumer Warranty Act",
        ],
        founder: { "@id": PERSON_ID },
        description: `CaliLawyer.com in Glendale reviews California lemon law and personal injury matters. Free consultation. ${FEE_TERMS}`,
      },
      personSchema(),
    ],
  };
}

/** Person, not the deprecated Attorney type. */
export function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: ATTORNEY.name,
    jobTitle: "Attorney",
    identifier: ATTORNEY.barNumber,
    url: `${SITE.url}/about`,
    image: {
      "@type": "ImageObject",
      url: `${SITE.url}${ATTORNEY_PHOTO.src}`,
      width: ATTORNEY_PHOTO.width,
      height: ATTORNEY_PHOTO.height,
      caption: ATTORNEY_ALT,
    },
    worksFor: { "@id": FIRM_ID },
    knowsLanguage: [...LANGUAGE_CODES],
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE.street,
      addressLocality: OFFICE.city,
      addressRegion: OFFICE.region,
      postalCode: OFFICE.postalCode,
      addressCountry: "US",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: `State Bar of California, Bar No. ${ATTORNEY.barNumber}`,
      description: `Admitted ${ATTORNEY.admitted}`,
      recognizedBy: {
        "@type": "Organization",
        name: "State Bar of California",
        url: "https://www.calbar.ca.gov/",
      },
    },
    knowsAbout: ["Personal injury", "Lemon law"],
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

export function breadcrumbSchema(items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? `${SITE.url}/` : `${SITE.url}${item.path}`,
    })),
  };
}

export function articleSchema(page: {
  h1: string;
  path: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.h1,
    description: page.description,
    datePublished: "2026-10-16",
    dateModified: "2026-10-16",
    author: { "@id": PERSON_ID },
    publisher: { "@id": FIRM_ID },
    mainEntityOfPage: `${SITE.url}${page.path}`,
  };
}

/** City page service. References the firm. No second office. */
export function cityServiceSchema(page: {
  path: string;
  city: string;
  serviceName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE.url}${page.path}#service`,
    name: page.serviceName,
    url: `${SITE.url}${page.path}`,
    provider: { "@id": FIRM_ID },
    parentOrganization: { "@id": FIRM_ID },
    areaServed: { "@type": "City", name: page.city },
  };
}
