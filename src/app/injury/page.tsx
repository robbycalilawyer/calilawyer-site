import type { Metadata } from "next";
import { PracticeArea } from "@/components/PracticeArea";
import { injuryContent } from "@/lib/content/injury";

export const metadata: Metadata = {
  title: "California Personal Injury Attorneys",
  description:
    "Injured in an accident? We handle the insurance company so you can heal. Free case review with California personal injury attorneys. No upfront cost.",
};

export default function InjuryPage() {
  return <PracticeArea content={injuryContent} />;
}
