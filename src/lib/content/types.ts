import type { FaqItem } from "@/components/Accordion";

/** Data contract for the reusable PracticeArea template. */
export interface PracticeAreaContent {
  slug: "injury" | "lemon-law";
  /** e.g. "Personal Injury". */
  name: string;
  /** Which funnel the inline LeadForm belongs to. */
  formPractice: "injury" | "lemon-law";

  /** Optional link back to the practice hub, shown above the hero eyebrow. */
  breadcrumb?: { href: string; label: string };

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

  /**
   * Opening answer on a guide page. 40 to 60 words, and the first
   * sentence is the answer.
   */
  directAnswer?: string;

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

  /** Common scenarios, or an evidence list on child pages. */
  scenarios: {
    title: string;
    items: string[];
  };

  /** Optional insurance-playbook block used by the injury hub. */
  tactics?: {
    title: string;
    intro: string;
    items: { tactic: string; reality: string; counter: string }[];
  };

  /** Optional cards linking to child practice pages. */
  related?: {
    title: string;
    intro?: string;
    items: { href: string; title: string; description: string }[];
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
