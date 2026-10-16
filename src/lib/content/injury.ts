import type { PracticeAreaContent } from "./types";
import { CALIFORNIA_LOCATIONS } from "./shared";
import { FEE_TERMS, INJURY_LINKS } from "@/lib/site";

export const injuryContent: PracticeAreaContent = {
  slug: "injury",
  name: "Personal Injury",
  formPractice: "injury",

  hero: {
    eyebrow: "Plaintiff representation",
    headline: "California personal injury attorneys built for pressure.",
    sub: "Insurance companies rely on delay, denial, and low offers. We rely on the records, the medicine, and a file that can be tried — so the evaluation of your claim happens under real leverage.",
    stats: [],
  },

  intro: [
    "The other side starts the same day you are hurt. An adjuster sounds helpful and floats a number before you know what the injury will cost. That sequence is a playbook, not a courtesy.",
    "CaliLawyer.com, in Glendale, reviews crashes, rideshare collisions, trucking wrecks, motorcycle and pedestrian injuries, dog bites, premises claims, catastrophic injuries, and wrongful death. We gather the evidence, document the damages, and deal with the carrier directly.",
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
          "Past and future treatment — emergency care, surgery, therapy, medication, and ongoing needs.",
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
      "Call while evidence still exists — cameras overwrite and vehicles get repaired.",
      "Keep every bill, wage record, and out-of-pocket receipt.",
    ],
  },

  scenarios: {
    title: "Situations we see every week",
    items: [
      "A rear-end crash left neck and back pain that will not quit.",
      "The insurer’s first offer does not cover the medical bills.",
      "You were hit by an uninsured or hit-and-run driver.",
      "Fault is disputed and you are not sure who to call.",
      "A loved one was seriously hurt and cannot manage the claim.",
    ],
  },

  tactics: {
    title: "The insurance playbook",
    intro:
      "The moment you are injured, the at-fault party’s insurer can start a process aimed at paying less. These are three moves we see, and how the file answers them.",
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
      "Choose the injury type to see what makes that claim different, what evidence to preserve, and which damages tend to matter.",
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
      title: "Resolution with leverage",
      body: `Settlement when the number is fair. Litigation when it is not. ${FEE_TERMS}`,
    },
  ],

  whyUs: {
    title: "Why injured Californians call",
    body: "Documents first. Strategy second. Pressure always. You get a lawyer’s attention on a file built to be tried, not a claim number in a queue.",
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
      a: "California uses comparative fault. You may still recover if you were partly responsible, with the recovery reduced by your share. Do not assume you have no case.",
    },
    {
      q: "How long will my case take?",
      a: "It depends on the injury and whether the insurer negotiates in good faith. Some files resolve in months. Serious cases that are tried take longer. We move as fast as your health and the evidence allow.",
    },
  ],

  locations: {
    ...CALIFORNIA_LOCATIONS,
    heading: "Glendale office. Serving injured clients across California",
  },

  finalCta: {
    headline: "Tell us what happened. We’ll tell you the next step.",
    sub: "Free consultation. Confidential, and not a retainer. Find out where the claim actually stands.",
  },
};
