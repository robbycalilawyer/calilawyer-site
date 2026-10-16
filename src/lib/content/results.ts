import { PLACEHOLDER } from "@/lib/site";

export const RESULT_CATEGORIES = [
  "All",
  "Lemon Law",
  "Auto Accidents",
  "Trucking",
  "Premises Liability",
  "Wrongful Death",
] as const;

export type ResultCategory = (typeof RESULT_CATEGORIES)[number];

export interface ResultItem {
  amount: string;
  type: string;
  category: Exclude<ResultCategory, "All">;
  detail: string;
}

/**
 * Result cards from the second-version site. Dollar figures and
 * outcome claims are bracketed until an attorney verifies them.
 */
export const RESULTS: ResultItem[] = [
  {
    amount: PLACEHOLDER.result,
    type: "Motor vehicle collision",
    category: "Auto Accidents",
    detail:
      "Placeholder summary: multi-vehicle collision with serious orthopedic injuries. Replace with a verified result before publishing.",
  },
  {
    amount: PLACEHOLDER.result,
    type: "Commercial trucking crash",
    category: "Trucking",
    detail:
      "Placeholder summary: tractor-trailer lane-change collision. Replace with a verified result before publishing.",
  },
  {
    amount: PLACEHOLDER.result,
    type: "Lemon law buyback",
    category: "Lemon Law",
    detail:
      "Placeholder summary: repeated transmission defect and a buyback demand. Replace with a verified result before publishing.",
  },
  {
    amount: PLACEHOLDER.result,
    type: "Slip and fall",
    category: "Premises Liability",
    detail:
      "Placeholder summary: unmarked wet floor in a retail store. Replace with a verified result before publishing.",
  },
  {
    amount: PLACEHOLDER.result,
    type: "Wrongful death",
    category: "Wrongful Death",
    detail:
      "Placeholder summary: fatality claim. Replace with a verified result and family permission before publishing.",
  },
  {
    amount: PLACEHOLDER.result,
    type: "Lemon law cash compensation",
    category: "Lemon Law",
    detail:
      "Placeholder summary: client kept a defective vehicle and sought cash for diminished value. Replace with a verified result before publishing.",
  },
];

export const HOME_RESULTS = [
  RESULTS[0],
  RESULTS[2],
  RESULTS[1],
  RESULTS[5],
] as const;
