import type { PracticeAreaContent } from "./types";
import { PLACEHOLDER } from "@/lib/site";

export const lemonLawContent: PracticeAreaContent = {
  slug: "lemon-law",
  name: "Lemon Law",
  formPractice: "lemon-law",

  hero: {
    eyebrow: "California Lemon Law",
    headline: "Your car keeps breaking. The law is on your side.",
    sub: "If your vehicle has spent weeks in the shop for the same defect and still isn’t right, California’s lemon law may entitle you to a refund or a replacement — and the manufacturer pays the attorney’s fees.",
    stats: [
      { value: PLACEHOLDER.settlements, label: "Recovered for owners" },
      { value: PLACEHOLDER.years, label: "Years handling lemon claims" },
      { value: "$0", label: "Manufacturer typically pays fees" },
    ],
  },

  intro: [
    "You bought or leased a vehicle expecting it to work. Instead you’ve got a check-engine light that won’t stay off, a transmission that slips, or electronics that keep failing — and repair visit after repair visit hasn’t fixed it.",
    "California’s lemon law (the Song-Beverly Consumer Warranty Act) exists for exactly this. When a manufacturer can’t repair a covered defect after a reasonable number of tries, they may owe you a buyback or a replacement vehicle. We handle the claim end to end, and in qualifying cases the manufacturer — not you — pays our fees.",
  ],

  legalCallout: {
    title: "Important legal information",
    body: `California’s lemon law generally applies to vehicles still under the manufacturer’s warranty, and specific timelines and requirements apply to your situation. Keep every repair order — those documents are the backbone of a lemon claim. ${PLACEHOLDER.disclaimer}`,
  },

  worth: {
    title: "What a lemon claim may recover",
    body: "Depending on your facts, a successful claim can mean getting your money back, a comparable new vehicle, or cash to keep the car. Relief can include:",
    items: [
      {
        label: "Buyback (refund)",
        detail:
          "Return the vehicle for a refund of what you paid, less a statutory mileage offset for use before the first repair attempt.",
      },
      {
        label: "Replacement vehicle",
        detail:
          "A comparable new vehicle in place of your defective one, if you’d rather keep driving than get a refund.",
      },
      {
        label: "Cash-and-keep settlement",
        detail:
          "In some cases, a payment that lets you keep the vehicle and walk away compensated.",
      },
      {
        label: "Incidental costs",
        detail:
          "Towing, rental cars, and related out-of-pocket expenses tied to the defect.",
      },
      {
        label: "Attorney’s fees",
        detail:
          "In qualifying cases the manufacturer pays reasonable attorney’s fees and costs — separate from your recovery.",
      },
    ],
  },

  handle: {
    title: "Vehicles and defects we handle",
    items: [
      "New and many used vehicles under warranty",
      "Cars, trucks, SUVs, and vans",
      "Leased and financed vehicles",
      "Engine, transmission, and drivetrain defects",
      "Electrical, infotainment, and sensor failures",
      "Braking, steering, and safety-system defects",
    ],
  },

  scenarios: {
    title: "Sound familiar?",
    items: [
      "The same problem has been “fixed” three or more times and it’s back.",
      "Your vehicle has been in the shop for weeks, adding up over time.",
      "A defect is serious enough that you don’t feel safe driving it.",
      "The dealer keeps saying they “can’t reproduce” the issue.",
      "You’re still making payments on a car you can’t rely on.",
      "The manufacturer offered a small goodwill payment to make you go away.",
    ],
  },

  process: [
    {
      step: "01",
      title: "Send us your repair orders",
      body: "A free case review. Share your repair history and we’ll tell you honestly whether your vehicle likely qualifies.",
    },
    {
      step: "02",
      title: "We take on the manufacturer",
      body: "We build the claim, handle all communication with the manufacturer, and demand the buyback, replacement, or settlement you’re owed.",
    },
    {
      step: "03",
      title: "You get made whole",
      body: `We push for the best available outcome — and in qualifying cases the manufacturer pays our fees, not you. ${PLACEHOLDER.noFee}`,
    },
  ],

  whyUs: {
    title: "Why California drivers choose us",
    body: "Lemon law is technical and deadline-driven. We know how manufacturers evaluate claims, and we use that to move yours faster and push for full relief.",
    stats: [
      { value: PLACEHOLDER.settlements, label: "Recovered for owners" },
      { value: "$0", label: "Out-of-pocket to start" },
      { value: PLACEHOLDER.years, label: "Years in practice" },
    ],
  },

  testimonials: [
    {
      quote:
        "Four trips to the dealer for the same transmission problem and they kept stalling. The firm got me a full buyback and I didn’t pay a dime.",
      name: "Danielle W.",
      context: "SUV buyback client",
    },
    {
      quote:
        "I thought I was stuck with the payments on a car I couldn’t trust. They handled the manufacturer and got me into a replacement.",
      name: "Andre T.",
      context: "Replacement vehicle client",
    },
    {
      quote:
        "They made a frustrating situation simple. I sent my repair orders and they did the rest.",
      name: "Sofia M.",
      context: "Electrical defect client",
    },
  ],

  faqs: [
    {
      q: "How do I know if my car is a lemon?",
      a: "Generally, a vehicle may qualify if it has a covered defect the manufacturer hasn’t been able to repair after a reasonable number of attempts, or if it’s been out of service for an extended time for repairs — all while under warranty. Send us your repair orders and we’ll evaluate it for free.",
    },
    {
      q: "What does it cost me?",
      a: `In qualifying cases under California’s lemon law, the manufacturer pays reasonable attorney’s fees and costs — separate from what you recover. That means you can pursue a claim with no upfront cost. ${PLACEHOLDER.noFee}`,
    },
    {
      q: "Do I have to keep making my car payments?",
      a: "Yes — keep making payments and keep the vehicle maintained while your claim is pending. Stopping payments can hurt you. We’ll advise you on your specific situation.",
    },
    {
      q: "What if I bought the car used?",
      a: "Many used vehicles still under the manufacturer’s original warranty can qualify. Certified pre-owned and vehicles with remaining factory warranty are worth reviewing. Let us look at your paperwork.",
    },
    {
      q: "How long does a lemon law claim take?",
      a: "Some claims resolve in a few months once the manufacturer sees a well-documented case; others take longer if they resist. We keep things moving and keep you updated at every step.",
    },
  ],

  locations: {
    heading: "Helping vehicle owners across California",
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
    headline: "Stop fighting your car alone.",
    sub: "Send us your repair orders and we’ll tell you where you stand — free, and with no obligation.",
  },
};
