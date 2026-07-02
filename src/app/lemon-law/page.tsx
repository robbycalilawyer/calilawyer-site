import type { Metadata } from "next";
import { PracticeArea } from "@/components/PracticeArea";
import { lemonLawContent } from "@/lib/content/lemon-law";

export const metadata: Metadata = {
  title: "California Lemon Law Attorneys",
  description:
    "Stuck with a defective vehicle? California lemon law may entitle you to a refund or replacement — and the manufacturer pays the fees. Free case review.",
};

export default function LemonLawPage() {
  return <PracticeArea content={lemonLawContent} />;
}
