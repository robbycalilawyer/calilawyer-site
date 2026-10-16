import type { FaqItem } from "@/components/Accordion";
import { FEE_TERMS } from "@/lib/site";

/** Shared FAQ copy used on the home page and /faq. */
export const SITE_FAQS: FaqItem[] = [
  {
    q: "Do I pay anything upfront?",
    a: `Free consultation. ${FEE_TERMS} In a successful qualifying lemon law claim, the manufacturer may be ordered to pay reasonable attorney’s fees.`,
  },
  {
    q: "What is a California lemon law case?",
    a: "Under the Song-Beverly Consumer Warranty Act, a vehicle bought or leased in California with a warranty may qualify when a substantial defect isn't repaired after a reasonable number of attempts. Possible outcomes include a buyback, a replacement, or cash compensation. Whether your vehicle qualifies depends on the repair history and the warranty.",
  },
  {
    q: "What should I do immediately after an auto accident?",
    a: "Get to safety and call 911 so there's a report. Get medical care even if you feel fine. Then photograph the scene, the vehicles, and any injuries you can see.",
  },
  {
    q: "Can I still call for a review if I am not sure I have a case?",
    a: "Yes. Most people don't know the legal standard that applies to their facts. Free consultation. We'll tell you if we see a path forward.",
  },
  {
    q: "Do you handle cases throughout California?",
    a: "Yes. The office is in Glendale. We also help clients in Burbank, Pasadena, Los Angeles, Orange County, San Diego, the Inland Empire, Sacramento, and the Bay Area. Much of the process can be handled remotely.",
  },
  {
    q: "Does submitting a form make me a client?",
    a: "No. A form, a call, or a free consultation doesn't create an attorney-client relationship. That starts only when you and the firm sign a written retainer.",
  },
];
