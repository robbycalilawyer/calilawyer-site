import type { FaqItem } from "@/components/Accordion";

export type GeoKind = "article" | "faq" | "city" | "person" | "reviews";

export interface GeoSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface GeoPage {
  path: string;
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  /** Direct answer under the H1. */
  answer: string;
  kind: GeoKind;
  city?: string;
  serviceName?: string;
  sections: GeoSection[];
  table?: {
    caption: string;
    headers: string[];
    rows: string[][];
  };
  citations: { label: string; href: string }[];
  faqs: FaqItem[];
  related: { href: string; title: string }[];
}

export function pageSlug(path: string) {
  const parts = path.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? "";
}

export function geo(page: Omit<GeoPage, "slug">): GeoPage {
  return { ...page, slug: pageSlug(page.path) };
}
