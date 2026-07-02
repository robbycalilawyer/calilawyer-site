import type { PracticeAreaContent } from "./types";
import { PLACEHOLDER } from "@/lib/site";

export const injuryContent: PracticeAreaContent = {
  slug: "injury",
  name: "Personal Injury",
  formPractice: "injury",

  hero: {
    eyebrow: "California Personal Injury",
    headline: "You focus on healing. We handle the fight.",
    sub: "After a serious injury, the insurance company goes to work the same day — protecting their money, not your recovery. We even the odds, so a bad moment doesn’t become a lifelong setback.",
    stats: [
      { value: PLACEHOLDER.settlements, label: "Recovered for clients" },
      { value: PLACEHOLDER.years, label: "Years fighting for the injured" },
      { value: "24/7", label: "We answer, day or night" },
    ],
  },

  intro: [
    "An injury changes your days fast. There’s pain, missed work, a car you can’t drive, and a phone that won’t stop ringing with adjusters who sound friendly right up until they make a lowball offer.",
    "Our job is to take that weight off you. We investigate what happened, document the full cost of your injuries, deal with the insurance companies directly, and push your claim toward the outcome it deserves — by settlement when that’s best, and by trial when it isn’t.",
  ],

  legalCallout: {
    title: "Important legal information",
    body: `California generally gives you a limited window to file a personal injury claim, and that window can be shorter when a government entity is involved. Evidence disappears, memories fade, and vehicles get repaired. The sooner we start, the more we can protect. ${PLACEHOLDER.disclaimer}`,
  },

  worth: {
    title: "What your case may be worth",
    body: "Every case is different, and no lawyer can promise a number. What we can do is make sure nothing that belongs in your claim gets left out. A full accounting usually includes:",
    items: [
      {
        label: "Medical bills",
        detail:
          "Past and future treatment — ER, surgery, therapy, medication, and ongoing care.",
      },
      {
        label: "Lost income",
        detail:
          "Wages you’ve already lost and your reduced ability to earn going forward.",
      },
      {
        label: "Pain and suffering",
        detail:
          "The physical pain, limitations, and disruption the injury forced into your life.",
      },
      {
        label: "Property damage",
        detail:
          "Repair or replacement of your vehicle and other property.",
      },
      {
        label: "Out-of-pocket costs",
        detail:
          "Mileage, equipment, home modifications, and the small costs that add up.",
      },
    ],
  },

  handle: {
    title: "What we handle",
    items: [
      "Car, truck, and motorcycle collisions",
      "Rideshare and commercial vehicle crashes",
      "Pedestrian and bicycle injuries",
      "Slip, trip, and fall injuries",
      "Dog bites and animal attacks",
      "Wrongful death claims",
    ],
  },

  scenarios: {
    title: "Situations we see every week",
    items: [
      "A rear-end crash left you with neck and back pain that won’t quit.",
      "The other driver’s insurer is offering far less than your bills.",
      "You were hit by an uninsured or hit-and-run driver.",
      "An adjuster is pressuring you to give a recorded statement.",
      "You’re not sure whose fault it was — or who to even call.",
      "A loved one was seriously hurt and can’t advocate for themselves.",
    ],
  },

  process: [
    {
      step: "01",
      title: "Tell us what happened",
      body: "A free, no-pressure conversation. We listen, answer your questions, and tell you honestly whether you have a case.",
    },
    {
      step: "02",
      title: "We build and press the claim",
      body: "We gather evidence, work with your medical providers, calculate the full value, and take over every conversation with the insurance company.",
    },
    {
      step: "03",
      title: "You get paid",
      body: `We negotiate hard for a fair settlement and go to trial if they won’t be fair. ${PLACEHOLDER.noFee}`,
    },
  ],

  whyUs: {
    title: "Why injured Californians call us",
    body: "We’re selective about the cases we take so we can be relentless on the ones we do. You get a real attorney’s attention — not a claim number in a queue.",
    stats: [
      { value: PLACEHOLDER.settlements, label: "Recovered for clients" },
      { value: "$0", label: "Upfront cost to start" },
      { value: PLACEHOLDER.years, label: "Years in practice" },
    ],
  },

  testimonials: [
    {
      quote:
        "They took over everything with the insurance company the day I called. I actually got to rest and heal instead of arguing on the phone.",
      name: "Marcus D.",
      context: "Rear-end collision client",
    },
    {
      quote:
        "The first offer was insulting. My attorney wasn’t having it, and the final result was many times higher. I never felt like just another file.",
      name: "Priya S.",
      context: "Intersection crash client",
    },
    {
      quote:
        "Straight answers, no runaround. They explained every step and always called me back the same day.",
      name: "Elena R.",
      context: "Pedestrian injury client",
    },
  ],

  faqs: [
    {
      q: "How much does it cost to hire you?",
      a: `Nothing upfront. We work on a contingency basis, which means our fee comes out of the recovery we win for you — not your pocket. ${PLACEHOLDER.noFee}`,
    },
    {
      q: "Should I talk to the other driver’s insurance company?",
      a: "It’s best not to give a recorded statement before you’ve spoken with us. Adjusters are trained to get you to say things that reduce your claim. Let us handle those conversations.",
    },
    {
      q: "How long do I have to file a claim?",
      a: `California sets a deadline (the statute of limitations) for injury claims, and it can be shorter when a government entity is involved. Because the exact deadline depends on your facts, call as soon as you can. ${PLACEHOLDER.disclaimer}`,
    },
    {
      q: "What if I was partly at fault?",
      a: "California follows a comparative fault rule, so you may still recover even if you were partly responsible — your recovery is reduced by your share. Don’t assume you have no case; let us evaluate it.",
    },
    {
      q: "How long will my case take?",
      a: "It depends on the severity of your injuries and whether the insurer negotiates fairly. Some cases resolve in months; serious cases that go to trial take longer. We move as fast as your health and your case allow.",
    },
  ],

  locations: {
    heading: "Serving injured clients across California",
    cities: [
      "Los Angeles",
      "San Diego",
      "San Jose",
      "San Francisco",
      "Fresno",
      "Sacramento",
      "Long Beach",
      "Oakland",
      "Bakersfield",
      "Anaheim",
      "Riverside",
      "Santa Ana",
      "Irvine",
      "Stockton",
      "Chula Vista",
      "Fremont",
    ],
  },

  finalCta: {
    headline: "Talk to someone who’s on your side.",
    sub: "The call is free, the advice is honest, and there’s no obligation. Find out where you stand.",
  },
};
