/**
 * Site-wide constants. Single source of truth for firm identity,
 * phone number, and navigation so components never hardcode them.
 *
 * Factual claims that need attorney review stay as bracketed
 * placeholders. They render literally — they are not filled with
 * invented figures.
 */

export const SITE = {
  name: "CaliLawyer",
  legalName: "CaliLawyer, APC",
  url: "https://calilawyer.com",
  /** Display form of the vanity intake line from the second-version brand. */
  phoneDisplay: "(800) CALI-LAW",
  phoneHref: "tel:+18002254529",
  smsHref: "sms:+18002254529",
  phoneE164: "+1-800-225-4529",
  email: "intake@calilawyer.com",
  addressLine: "Serving all of California",
} as const;

export const NAV = [
  { label: "Lemon Law", href: "/lemon-law" },
  { label: "Personal Injury", href: "/injury" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const FIRM_LINKS = [
  { label: "About the firm", href: "/about" },
  { label: "Case results", href: "/results" },
  { label: "FAQ", href: "/faq" },
  { label: "Resources", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

/** Injury child pages. Canonical paths stay nested under /injury. */
export const INJURY_LINKS = [
  {
    label: "Car accidents",
    href: "/injury/car-accident",
    description:
      "High-speed collisions, intersection crashes, and highway accidents.",
  },
  {
    label: "Truck accidents",
    href: "/injury/truck-accident",
    description:
      "Commercial vehicle crashes, jackknifes, and catastrophic injuries.",
  },
  {
    label: "Motorcycle accidents",
    href: "/injury/motorcycle-accident",
    description:
      "Lane-splitting crashes, severe road rash, and traumatic brain injuries.",
  },
  {
    label: "Rideshare accidents",
    href: "/injury/rideshare-accident",
    description:
      "Uber and Lyft collisions, passenger injuries, and driver negligence.",
  },
  {
    label: "Pedestrian accidents",
    href: "/injury/pedestrian-accident",
    description: "Crosswalk injuries, hit-and-runs, and severe bodily harm.",
  },
  {
    label: "Dog bites",
    href: "/injury/dog-bites",
    description: "Strict-liability reviews, scarring, and nerve damage.",
  },
  {
    label: "Slip and fall",
    href: "/injury/slip-and-fall",
    description:
      "Premises liability, unsafe conditions, and negligent property owners.",
  },
] as const;

export const SERVICE_CITIES = [
  "Los Angeles",
  "Orange County",
  "San Diego",
  "Riverside",
  "San Bernardino",
  "Sacramento",
  "San Francisco",
  "San Jose",
  "Fresno",
  "Bakersfield",
  "Ventura",
  "Glendale",
  "Long Beach",
  "Oakland",
] as const;

/**
 * Bracketed placeholders left for attorney review. Centralized so
 * review is a single find-and-replace pass.
 */
export const PLACEHOLDER = {
  settlements: "[SETTLEMENTS RECOVERED]",
  clients: "[CLIENTS HELPED]",
  years: "[YEARS IN PRACTICE]",
  result: "[RESULT AMOUNT]",
  noFee:
    "[NO-FEE PHRASING — suggested: No fee unless we recover compensation for you. Costs and case expenses may still apply depending on your written agreement.]",
  tcpa: "[TCPA CONSENT LANGUAGE]",
  disclaimer: "[ATTORNEY ADVERTISING DISCLAIMER]",
  attorney: "[RESPONSIBLE ATTORNEY]",
  barNumber: "[BAR NUMBER]",
  office: "[OFFICE ADDRESS]",
  languages:
    "[LANGUAGES — confirm before publishing. Export copy: We speak Armenian and Spanish. Se habla Español.]",
  testimonial:
    "[CLIENT TESTIMONIAL — replace with a verified review and written permission.]",
  clientName: "[CLIENT NAME]",
  admissions:
    "[BAR ADMISSIONS — confirm before publishing. Export lists State Bar of California and the U.S. District Court for the Central District of California.]",
} as const;
