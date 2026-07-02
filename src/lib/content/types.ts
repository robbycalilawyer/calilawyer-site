import type { FaqItem } from "@/components/Accordion";

/** Data contract for the reusable PracticeArea template. */
export interface PracticeAreaContent {
  slug: "injury" | "lemon-law";
  /** e.g. "Personal Injury". */
  name: string;
  /** Which funnel the inline LeadForm belongs to. */
  formPractice: "injury" | "lemon-law";

  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    /** Stat counters shown in the hero. Placeholders stay bracketed. */
    stats: {
      value: string;
      label: string;
      to?: number;
      prefix?: string;
      suffix?: string;
    }[];
  };

  /** Narrative intro paragraph(s). */
  intro: string[];

  /** "Important legal information" callout. */
  legalCallout: {
    title: string;
    body: string;
  };

  /** "What your case may be worth". */
  worth: {
    title: string;
    body: string;
    /** Damages / relief list items. */
    items: { label: string; detail: string }[];
  };

  /** What we handle. */
  handle: {
    title: string;
    items: string[];
  };

  /** Common scenarios. */
  scenarios: {
    title: string;
    items: string[];
  };

  /** 3-step process. */
  process: { step: string; title: string; body: string }[];

  /** Why-us stats block. */
  whyUs: {
    title: string;
    body: string;
    stats: { value: string; label: string; to?: number; suffix?: string }[];
  };

  testimonials: {
    quote: string;
    name: string;
    context: string;
    rating?: number;
  }[];

  faqs: FaqItem[];

  locations: {
    heading: string;
    cities: string[];
  };

  finalCta: {
    headline: string;
    sub: string;
  };
}
