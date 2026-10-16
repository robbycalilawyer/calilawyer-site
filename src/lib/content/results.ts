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

/** Case-result cards stay empty for launch. Do not invent outcomes. */
export const RESULTS: ResultItem[] = [];

export const HOME_RESULTS: ResultItem[] = [];
