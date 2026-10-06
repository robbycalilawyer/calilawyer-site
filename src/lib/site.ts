/**
 * Site-wide constants. Single source of truth for firm identity,
 * phone number, and navigation so components never hardcode them.
 */

export const SITE = {
  name: "CaliLawyer",
  legalName: "CaliLawyer, APC",
  // Display + tel: forms of the primary phone number.
  phoneDisplay: "(800) 555-0100",
  phoneHref: "tel:+18005550100",
  // SMS / text line. Same placeholder number until a real line is set.
  smsHref: "sms:+18005550100",
  email: "intake@calilawyer.com",
  addressLine: "Serving all of California",
} as const;

/** Primary header navigation. */
export const NAV = [
  { label: "Personal Injury", href: "/injury" },
  { label: "Lemon Law", href: "/lemon-law" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

/** Footer link groups. */
export const FOOTER_PRACTICE = [
  { label: "Personal Injury", href: "/injury" },
  { label: "Car Accidents", href: "/injury/car-accident" },
  { label: "Truck Accidents", href: "/injury/truck-accident" },
  { label: "Motorcycle Accidents", href: "/injury/motorcycle-accident" },
  { label: "Rideshare Accidents", href: "/injury/rideshare-accident" },
  { label: "Pedestrian Accidents", href: "/injury/pedestrian-accident" },
  { label: "Dog Bites", href: "/injury/dog-bite" },
  { label: "Slip & Fall", href: "/injury/slip-and-fall" },
  { label: "Lemon Law", href: "/lemon-law" },
  { label: "What Qualifies", href: "/lemon-law/what-qualifies" },
] as const;

export const FOOTER_FIRM = [
  { label: "About", href: "/about" },
  { label: "Case Results", href: "/results" },
  { label: "FAQ", href: "/faq" },
  { label: "Resources", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Disclaimer", href: "/terms" },
] as const;

/**
 * Bracketed placeholders left for attorney review. These render
 * literally on the page — they are NOT to be filled with invented
 * figures, names, awards, or bar numbers. Centralized so review is a
 * single find-and-replace pass.
 */
export const PLACEHOLDER = {
  settlements: "[SETTLEMENTS RECOVERED]",
  years: "[YEARS IN PRACTICE]",
  noFee: "[NO-FEE PHRASING]",
  tcpa: "[TCPA CONSENT LANGUAGE]",
  disclaimer: "[ATTORNEY ADVERTISING DISCLAIMER]",
  // Required for attorney-advertising compliance — supply before launch.
  responsibleAttorney: "[RESPONSIBLE ATTORNEY NAME], California Bar No. [BAR NUMBER]",
  firmAddress: "[FIRM ADDRESS REQUIRED]",
} as const;
