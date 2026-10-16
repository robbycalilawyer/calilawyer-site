import type { FaqItem } from "@/components/Accordion";
import { PLACEHOLDER } from "@/lib/site";

/** Shared FAQ copy used on the home page and /faq. */
export const SITE_FAQS: FaqItem[] = [
  {
    q: "Do I pay anything upfront?",
    a: `Case reviews are free and there is no obligation. Personal injury and lemon law matters are often handled on contingency, and lemon law claims can involve fee-shifting if a manufacturer is required to pay reasonable attorney’s fees. ${PLACEHOLDER.noFee}`,
  },
  {
    q: "What is a California lemon law case?",
    a: "Under the Song-Beverly Consumer Warranty Act, a vehicle purchased or leased in California with a warranty may qualify for review when a substantial defect is not repaired after a reasonable number of attempts. Possible outcomes include a buyback, a replacement, or cash compensation. Whether a specific vehicle qualifies depends on the repair history and the warranty.",
  },
  {
    q: "What should I do immediately after an auto accident?",
    a: "Get to safety and call 911 so a report can be made. Seek medical care even if you feel fine. Photograph the scene, the vehicles, and visible injuries. Do not give a recorded statement to the other driver’s insurer before you have talked with a lawyer.",
  },
  {
    q: "Can I still call for a review if I am not sure I have a case?",
    a: "Yes. Most people do not know the legal standard that applies to their facts. The review is free and confidential. We will tell you whether we see a path forward.",
  },
  {
    q: "Do you handle cases throughout California?",
    a: "Yes. We review matters statewide, including Los Angeles, Orange County, San Diego, the Inland Empire, Sacramento, and the Bay Area. Much of the process can be handled remotely.",
  },
  {
    q: "Does submitting a form make me a client?",
    a: "No. A form, a call, or a free case review does not create an attorney–client relationship. That relationship begins only when you and the firm sign a written retainer.",
  },
];
