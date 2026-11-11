import type { PracticeAreaContent } from "./types";
import { CALIFORNIA_LOCATIONS } from "./shared";
import { FEE_TERMS, INJURY_LINKS } from "@/lib/site";

export const injuryContent: PracticeAreaContent = {
  slug: "injury",
  name: "Personal Injury",
  formPractice: "injury",

  hero: {
    eyebrow: "Plaintiff representation",
    headline: "California personal injury lawyer in Glendale.",
    sub: "An insurer can delay, deny, or offer less than the bills. We start with the records and the medical care, then we ask for a number that matches them.",
    stats: [],
  },

  intro: [
    "The other side starts the same day you're hurt. An adjuster sounds helpful and names a number before you know what the injury will cost. That's a tactic, not a favor.",
    "The Glendale office reviews crashes, rideshare collisions, and trucking wrecks. We also take motorcycle and pedestrian injuries, dog bites, premises claims, catastrophic injuries, and wrongful death. We gather the evidence and deal with the carrier ourselves.",
  ],

  legalCallout: {
    title: "Important legal information",
    body: `Generally 2 years from the injury (CCP §335.1). Claims against a public entity generally must be presented within 6 months (Gov. Code §911.2). Evidence disappears, memories fade, and vehicles get repaired. ${FEE_TERMS} Free consultation.`,
  },

  worth: {
    title: "How compensation is evaluated",
    body: "No lawyer can promise a number. A complete claim usually accounts for more than the first medical bill. Depending on the facts, that picture can include:",
    items: [
      {
        label: "Medical care",
        detail:
          "Past and future treatment, including emergency care, surgery, therapy, medication, and ongoing needs.",
      },
      {
        label: "Lost income",
        detail:
          "Wages already lost and a reduced ability to earn going forward.",
      },
      {
        label: "Pain and suffering",
        detail:
          "The physical limits and disruption the injury forced into daily life.",
      },
      {
        label: "Property damage",
        detail: "Repair or replacement of a vehicle and other damaged property.",
      },
      {
        label: "Out-of-pocket costs",
        detail:
          "Mileage, equipment, home changes, and the smaller costs that add up.",
      },
    ],
  },

  handle: {
    title: "What to do now",
    items: [
      "Get medical care, even if you feel steady in the moment.",
      "Photograph the scene, vehicles, hazards, and visible injuries.",
      "Save witness names, incident reports, and any video you already have.",
      "Call while the evidence still exists. Cameras overwrite, and vehicles get repaired.",
      "Keep every bill, wage record, and out-of-pocket receipt.",
    ],
  },

  scenarios: {
    title: "Calls that sound like this",
    items: [
      "Neck and back pain from a rear-end crash that won't quit.",
      "The insurer's first offer doesn't cover the medical bills.",
      "The other driver was uninsured, or left the scene.",
      "People disagree about fault, and you aren't sure who to call.",
      "A loved one was seriously hurt and can't manage the claim.",
    ],
  },

  tactics: {
    title: "What insurers do",
    intro:
      "Once you're hurt, the other side's insurer can start working to pay less. Here are two moves we see, and how the file answers them.",
    items: [
      {
        tactic: "Quick settlements",
        reality:
          "A fast check often arrives before anyone knows the full medical picture.",
        counter:
          "We wait until the treatment picture is clear enough to demand a real number.",
      },
      {
        tactic: "Delay",
        reality:
          "A slow file is a file that misses deadlines or wears people out.",
        counter:
          "We put the claim on a schedule and file suit when stalling is the strategy.",
      },
    ],
  },

  related: {
    title: "Cases we handle",
    intro:
      "Pick the injury. The page says what makes that claim different and what to keep.",
    items: INJURY_LINKS.map((item) => ({
      href: item.href,
      title: item.label,
      description: item.description,
    })),
  },

  process: [
    {
      step: "01",
      title: "Tell us what happened",
      body: "A free consultation. We listen, look at what you already have, and tell you honestly whether we can help.",
    },
    {
      step: "02",
      title: "We build and press the claim",
      body: "Records, photos, witnesses, and medical documentation. Then we take over the conversations with the insurer.",
    },
    {
      step: "03",
      title: "Resolution",
      body: "We prepare every case as if it may go to trial.",
    },
  ],

  whyUs: {
    title: "Why injured Californians call",
    body: "You get a lawyer on a file built from the records, not a claim number in a queue.",
    stats: [],
  },

  testimonials: [],

  faqs: [
    {
      q: "How much does it cost to hire you?",
      a: `Free consultation. ${FEE_TERMS}`,
    },
    {
      q: "How long do I have to file a claim?",
      a: "Generally 2 years from the injury (CCP §335.1). Claims against a public entity generally must be presented within 6 months (Gov. Code §911.2).",
    },
    {
      q: "What if I was partly at fault?",
      a: "California uses comparative fault. You may still recover if you were partly responsible. The recovery is reduced by your share. Don't assume you have no case.",
    },
    {
      q: "How long will my case take?",
      a: "It depends on the injury and whether the insurer negotiates in good faith. Some files resolve in months. Serious cases that are tried take longer. We move as fast as your health and the evidence allow.",
    },
  ],

  locations: {
    ...CALIFORNIA_LOCATIONS,
    heading: "The office is in Glendale.",
    lede: "Injured clients call from across California.",
  },

  finalCta: {
    headline: "Tell us what happened.",
    sub: "We'll tell you the next step, and where the claim stands. Free consultation. It isn't a retainer.",
  },
};
