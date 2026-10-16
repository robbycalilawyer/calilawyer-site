/**
 * Site-wide constants. Single source of truth for firm identity,
 * phone number, and navigation so components never hardcode them.
 */

export const SITE = {
  name: "CaliLawyer.com",
  legalName: "CaliLawyer.com",
  url: "https://calilawyer.com",
  phoneDisplay: "(310) 331-0310",
  phoneHref: "tel:+13103310310",
  smsHref: "sms:+13103310310",
  /** Schema telephone. Call links stay on phoneHref. */
  phoneE164: "+1-310-331-0310",
  email: "intake@calilawyer.com",
  addressLine: "315 Arden Ave Ste 10, Glendale, CA 91203",
} as const;

export const OFFICE = {
  street: "315 Arden Ave Ste 10",
  city: "Glendale",
  region: "CA",
  postalCode: "91203",
  display: "315 Arden Ave Ste 10, Glendale, CA 91203",
} as const;

/** Approved fee line. No percentage and no costs explanation. */
export const FEE_TERMS = "We handle cases on contingency.";

export const LANGUAGES = ["English", "Armenian", "Spanish"] as const;
export const LANGUAGE_CODES = ["en", "hy", "es"] as const;

export const ATTORNEY = {
  name: "Rober A. Terziyan",
  barNumber: "351959",
  /** ISO date of California admission. Do not convert this into years of experience. */
  admitted: "2023-12-01",
  admittedDisplay: "December 1, 2023",
  path: "/attorneys/robby-terziyan",
} as const;

export const ATTORNEY_ADDRESS = OFFICE.display;
export const PERSON_ID = `${SITE.url}${ATTORNEY.path}#person`;
export const FIRM_ID = `${SITE.url}/#firm`;

export const NAV = [
  { label: "Lemon Law", href: "/lemon-law" },
  { label: "Personal Injury", href: "/injury" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const FIRM_LINKS = [
  { label: "About the firm", href: "/about" },
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
    href: "/injury/car-accidents",
    description:
      "High-speed collisions, intersection crashes, and highway accidents.",
  },
  {
    label: "Truck accidents",
    href: "/injury/truck-accidents",
    description:
      "Commercial vehicle crashes, jackknifes, and catastrophic injuries.",
  },
  {
    label: "Motorcycle accidents",
    href: "/injury/motorcycle-accidents",
    description:
      "Lane-splitting crashes, severe road rash, and traumatic brain injuries.",
  },
  {
    label: "Rideshare accidents",
    href: "/injury/rideshare-accidents",
    description:
      "Uber and Lyft collisions, passenger injuries, and driver negligence.",
  },
  {
    label: "Pedestrian accidents",
    href: "/injury/pedestrian-accidents",
    description: "Crosswalk injuries, hit-and-runs, and severe bodily harm.",
  },
  {
    label: "Dog bites",
    href: "/injury/dog-bites",
    description: "Strict-liability reviews, scarring, and nerve damage.",
  },
  {
    label: "Slip and Fall Lawyer",
    href: "/injury/premises-liability",
    description:
      "Premises liability, unsafe conditions, and negligent property owners.",
  },
] as const;

export const SERVICE_CITIES = [
  "Glendale",
  "Burbank",
  "Pasadena",
  "Los Angeles",
  "Long Beach",
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
  "Oakland",
] as const;
