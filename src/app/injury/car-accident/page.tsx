import type { Metadata } from "next";
import { PracticeArea } from "@/components/PracticeArea";
import { injuryContent } from "@/lib/content/injury";
import type { PracticeAreaContent } from "@/lib/content/types";
import { PLACEHOLDER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Car Accident Attorneys in California",
  description:
    "Hit by another driver? We take on the insurance company and fight for the full value of your car accident claim. Free review, no upfront cost.",
};

// Same PracticeArea template — only the data differs. This proves the
// hub template is reusable for programmatic child pages.
const carAccidentContent: PracticeAreaContent = {
  ...injuryContent,
  hero: {
    ...injuryContent.hero,
    eyebrow: "Car Accidents",
    headline: "Hit by another driver? Don’t settle for the first offer.",
    sub: "Insurers count on you accepting fast, before you know what your injuries really cost. We build the full picture and hold them to it.",
  },
  intro: [
    "A car accident can upend everything in seconds — your health, your income, your ability to get to work. Meanwhile the at-fault driver’s insurer is already working to pay you as little as possible.",
    "We handle California car accident claims from the first call: preserving evidence, documenting your injuries, dealing with the adjusters, and pursuing the full value of what you’ve lost. You focus on recovering; we focus on the fight.",
  ],
  worth: {
    ...injuryContent.worth,
    body: "No one can promise a number, but a proper car accident claim accounts for far more than your repair estimate. It should include:",
  },
  scenarios: {
    title: "Car accidents we handle",
    items: [
      "Rear-end and stop-and-go freeway collisions",
      "Left-turn and intersection crashes",
      "Uninsured and hit-and-run drivers",
      "Rideshare (Uber/Lyft) and delivery-vehicle crashes",
      "Multi-car pileups where fault is disputed",
      "Serious and catastrophic-injury collisions",
    ],
  },
  faqs: [
    {
      q: "What should I do right after a car accident?",
      a: "If you’re able: get to safety, call 911, take photos, exchange information, and see a doctor even if you feel “okay.” Then call us before giving any recorded statement to the other driver’s insurer.",
    },
    ...injuryContent.faqs,
  ],
  finalCta: {
    headline: "Just been in a crash? Let’s talk today.",
    sub: `The sooner we start, the more evidence we can protect. The call is free and there’s no obligation. ${PLACEHOLDER.noFee}`,
  },
};

export default function CarAccidentPage() {
  return <PracticeArea content={carAccidentContent} />;
}
