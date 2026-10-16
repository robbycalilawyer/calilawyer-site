import { PracticeArea } from "@/components/PracticeArea";
import { lemonLawContent } from "@/lib/content/lemon-law";
import type { PracticeAreaContent } from "@/lib/content/types";
import { pageMeta } from "@/lib/seo";
import { FEE_TERMS } from "@/lib/site";

export const metadata = pageMeta({
  title: "What qualifies as a lemon in California",
    description:
    "How to tell if a California vehicle may qualify under the lemon law. It depends on the repair history and the warranty. Free consultation.",
  path: "/lemon-law/what-qualifies",
});

// Reuses the same PracticeArea template as the /lemon-law hub; only
// the content object changes to focus on qualification.
const whatQualifiesContent: PracticeAreaContent = {
  ...lemonLawContent,
  breadcrumb: { href: "/lemon-law", label: "Lemon law" },
  related: undefined,
  hero: {
    ...lemonLawContent.hero,
    eyebrow: "What Qualifies",
    headline: "Does your vehicle actually qualify as a lemon?",
    sub: "There's no single repair count. It comes down to the repair history and the warranty.",
  },
  directAnswer:
    "A vehicle may qualify when a covered defect isn't fixed after a reasonable number of repair attempts, or when it's been out of service for a long stretch, and the manufacturer's warranty still applies. Your repair orders are the evidence that matters.",
  intro: [
    "The question we hear most is “Is my car a lemon?” It depends on the details. A few signals make a file worth sending over.",
  ],
  worth: {
    title: "Signals your vehicle may qualify",
    body: "If several of these describe your situation, a free consultation can start with your repair orders:",
    items: [
      {
        label: "Repeat repair attempts",
        detail:
          "The same covered defect has been back to the shop multiple times without a lasting fix.",
      },
      {
        label: "Extended time in the shop",
        detail:
          "Your vehicle has been out of service for repairs for a significant cumulative period.",
      },
      {
        label: "A safety-related defect",
        detail:
          "The problem is serious enough that it could affect your safety, even with fewer attempts.",
      },
      {
        label: "Still under warranty",
        detail:
          "The defect showed up and was reported while the manufacturer’s warranty was in effect.",
      },
      {
        label: "Documented history",
        detail:
          "You have repair orders for each visit. Those orders are the core of a lemon claim.",
      },
    ],
  },
  scenarios: {
    title: "Common qualifying situations",
    items: [
      "Three or more repair visits for the same unresolved defect.",
      "Weeks of cumulative downtime waiting on repairs.",
      "A dealer that keeps saying it “can’t reproduce” the problem.",
      "A serious safety defect after only one or two attempts.",
      "Used vehicles may qualify, case by case.",
      "A leased vehicle with a persistent, documented issue.",
    ],
  },
  faqs: [
    {
      q: "Is there an exact number of repairs that makes a car a lemon?",
      a: "No single number applies to every case. California’s standard turns on whether the manufacturer had a “reasonable” number of attempts, which depends on the defect’s severity and your specific facts. Fewer attempts may be enough for a serious safety issue.",
    },
    ...lemonLawContent.faqs,
  ],
  finalCta: {
    headline: "Not sure if you qualify? Let us look.",
    sub: `Send us your repair orders and we’ll tell you honestly whether you have a claim. Free consultation. ${FEE_TERMS}`,
  },
};

export default function WhatQualifiesPage() {
  return <PracticeArea content={whatQualifiesContent} path="/lemon-law/what-qualifies" />;
}
