import { PracticeArea } from "@/components/PracticeArea";
import { injuryContent } from "@/lib/content/injury";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "California Personal Injury Attorneys",
  description:
    "California personal injury attorneys for crashes, premises claims, dog bites, and catastrophic injuries. Free case review. No attorney-client relationship until a retainer is signed.",
  path: "/injury",
});

export default function InjuryPage() {
  return <PracticeArea content={injuryContent} />;
}
