import type { PracticeAreaContent } from "./types";
import { PLACEHOLDER, SERVICE_CITIES } from "@/lib/site";

/** Testimonials are unlabeled until a client approves a real quote. */
export const PLACEHOLDER_TESTIMONIALS: PracticeAreaContent["testimonials"] = [
  {
    quote: PLACEHOLDER.testimonial,
    name: PLACEHOLDER.clientName,
    context: "Personal injury client placeholder",
  },
  {
    quote: PLACEHOLDER.testimonial,
    name: PLACEHOLDER.clientName,
    context: "Lemon law client placeholder",
  },
  {
    quote: PLACEHOLDER.testimonial,
    name: PLACEHOLDER.clientName,
    context: "Vehicle owner placeholder",
  },
];

export const CALIFORNIA_LOCATIONS: PracticeAreaContent["locations"] = {
  heading: "Serving clients across California",
  cities: [...SERVICE_CITIES],
};
