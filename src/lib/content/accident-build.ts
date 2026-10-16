import type { FaqItem } from "@/components/Accordion";
import type { PracticeAreaContent } from "./types";
import { injuryContent } from "./injury";
import { FEE_TERMS } from "@/lib/site";

interface AccidentSpec {
  eyebrow: string;
  headline: string;
  sub: string;
  difference: string;
  evidenceIntro: string;
  evidence: string[];
  damagesIntro: string;
  damages: { label: string; detail: string }[];
  help: string[];
  faqs: FaqItem[];
  finalHeadline: string;
  finalSub: string;
}

export function buildAccident(spec: AccidentSpec): PracticeAreaContent {
  return {
    ...injuryContent,
    breadcrumb: { href: "/injury", label: "Personal injury" },
    related: undefined,
    tactics: undefined,
    hero: {
      eyebrow: spec.eyebrow,
      headline: spec.headline,
      sub: spec.sub,
      stats: injuryContent.hero.stats,
    },
    intro: [spec.difference, spec.evidenceIntro],
    worth: {
      title: "Damages that may matter",
      body: spec.damagesIntro,
      items: spec.damages,
    },
    handle: {
      title: "How CaliLawyer.com helps",
      items: spec.help,
    },
    scenarios: {
      title: "Evidence to preserve now",
      items: spec.evidence,
    },
    faqs: [injuryContent.faqs[0], ...spec.faqs],
    finalCta: {
      headline: spec.finalHeadline,
      sub: spec.finalSub,
    },
  };
}

export function sharedHelp(line: string) {
  return [
    line,
    "We take the adjuster's calls so you don't have to.",
    "Medical records and wage loss get written down before a demand goes out.",
    "We prepare the file as if the case may go to trial.",
    FEE_TERMS,
  ];
}
