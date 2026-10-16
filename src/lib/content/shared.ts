import type { PracticeAreaContent } from "./types";
import { SERVICE_CITIES } from "@/lib/site";

export const CALIFORNIA_LOCATIONS: PracticeAreaContent["locations"] = {
  heading: "Serving clients across California",
  cities: [...SERVICE_CITIES],
};
