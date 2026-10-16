import type { PracticeAreaContent } from "./types";
import { CALIFORNIA_LOCATIONS } from "./shared";
import { FEE_TERMS } from "@/lib/site";

export const lemonLawContent: PracticeAreaContent = {
  slug: "lemon-law",
  name: "Lemon Law",
  formPractice: "lemon-law",

  hero: {
    eyebrow: "Consumer protection",
    headline: "California lemon law attorneys for defective vehicles.",
    sub: "If the car keeps going back to the dealer, we can read the repair history and tell you the options. When the manufacturer can't fix a covered defect, the path may be a buyback, a replacement, or cash. The manufacturer may be ordered to pay reasonable attorney’s fees.",
    stats: [],
  },

  intro: [
    "You bought or leased a vehicle that was supposed to work. A warning light comes back, a transmission slips, or the electronics fail, and another visit hasn't fixed it.",
    "California’s lemon law, the Song-Beverly Consumer Warranty Act, is built for that pattern. After a reasonable number of repair attempts, or enough days out of service, the manufacturer may owe a repurchase or a replacement. We handle the manufacturer. You keep the repair orders.",
  ],

  legalCallout: {
    title: "Attorney fee provision",
    body: `In a successful qualifying claim, the manufacturer may be ordered to pay reasonable attorney’s fees. ${FEE_TERMS} Free consultation.`,
  },

  worth: {
    title: "What you may be able to recover",
    body: "Song-Beverly remedies depend on the facts. A successful claim generally pushes the manufacturer toward one of these outcomes:",
    items: [
      {
        label: "Buyback (repurchase)",
        detail:
          "A refund path for what you paid, subject to the statutory mileage offset for use before the first repair attempt.",
      },
      {
        label: "Vehicle replacement",
        detail:
          "A comparable new vehicle when you would rather keep driving than unwind the deal.",
      },
      {
        label: "Cash compensation",
        detail:
          "In some matters, a payment that lets you keep the vehicle and addresses the diminished value.",
      },
      {
        label: "Incidental costs",
        detail:
          "Towing, rental cars, and related out-of-pocket costs tied to the defect.",
      },
      {
        label: "Attorney’s fees",
        detail: "The manufacturer may be ordered to pay reasonable attorney’s fees.",
      },
    ],
  },

  handle: {
    title: "Common lemon law defects",
    items: [
      "Engine failure or stalling",
      "Transmission jerking or slipping",
      "Electrical system failures",
      "Braking system defects",
      "Steering and suspension issues",
      "Infotainment screen crashes",
      "Battery and EV charging failures",
      "Severe water leaks",
    ],
  },

  scenarios: {
    title: "Documents to gather",
    items: [
      "Purchase or lease contract",
      "Current registration",
      "Every dealer repair order",
      "Tow and rental receipts",
      "Written messages with the manufacturer",
      "Warranty booklet or remaining-coverage proof",
    ],
  },

  related: {
    title: "Not sure it qualifies?",
    intro:
      "There is no single repair count that decides every file. Start with the signals, then send the paperwork.",
    items: [
      {
        href: "/lemon-law/what-qualifies",
        title: "What qualifies",
        description:
          "Repair attempts, days out of service, safety defects, and the warranty window.",
      },
    ],
  },

  process: [
    {
      step: "01",
      title: "Send the repair orders",
      body: "A free consultation on the vehicle, the warranty, and the visit history. We tell you whether the file is worth pressing.",
    },
    {
      step: "02",
      title: "We take on the manufacturer",
      body: "We build the demand, handle the manufacturer’s process, and bypass the dealer runaround.",
    },
    {
      step: "03",
      title: "Buyback, replacement, or cash",
      body: `We push for the remedy the facts support. ${FEE_TERMS}`,
    },
  ],

  whyUs: {
    title: "Manufacturer accountability",
    body: "Manufacturers have ways to slow a buyback. We know the paperwork they ask for.",
    stats: [],
  },

  testimonials: [],

  faqs: [
    {
      q: "How do I know if my car is a lemon?",
      a: "A vehicle may qualify when a covered defect isn't repaired after a reasonable number of attempts, or when it's been out of service for repairs for a substantial time, while the manufacturer’s warranty applies. Send the repair orders and we'll review them.",
    },
    {
      q: "What does it cost me?",
      a: `Free consultation. ${FEE_TERMS} The manufacturer may be ordered to pay reasonable attorney’s fees.`,
    },
    {
      q: "Do I have to keep making payments?",
      a: "Yes. Keep the payments current and the vehicle maintained while a claim is pending. Stopping payments can hurt the file. We'll talk through your contract.",
    },
    {
      q: "What if I bought the car used?",
      a: "Used vehicles may qualify, case by case.",
    },
    {
      q: "How long does a lemon law claim take?",
      a: "A documented file can move in a few months. A manufacturer that resists takes longer. We keep you updated, and we don't wait on the dealer to offer a buyback.",
    },
  ],

  locations: {
    ...CALIFORNIA_LOCATIONS,
    heading: "The office is in Glendale. Vehicle owners call from across California.",
  },

  finalCta: {
    headline: "Stop fighting the dealer alone.",
    sub: "Send the repair history. We'll tell you whether the manufacturer should be buying the vehicle back.",
  },
};
