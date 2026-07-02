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
  email: "intake@calilawyer.com",
  addressLine: "Serving all of California",
} as const;

export const NAV = [
  { label: "Personal Injury", href: "/injury" },
  { label: "Lemon Law", href: "/lemon-law" },
] as const;

/**
 * Bracketed placeholders left for attorney review. These render
 * literally on the page — they are NOT to be filled with invented
 * figures. Centralized so review is a single find-and-replace pass.
 */
export const PLACEHOLDER = {
  settlements: "[SETTLEMENTS RECOVERED]",
  years: "[YEARS IN PRACTICE]",
  noFee: "[NO-FEE PHRASING]",
  tcpa: "[TCPA CONSENT LANGUAGE]",
  disclaimer: "[ATTORNEY ADVERTISING DISCLAIMER]",
} as const;
