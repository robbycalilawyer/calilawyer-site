import { PracticeArea } from "@/components/PracticeArea";
import { injuryContent } from "@/lib/content/injury";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Personal Injury Lawyer in Glendale, CA",
  description:
    "Injury work from the Glendale office, including crashes, premises claims, dog bites, and catastrophic injuries. Free consultation. You're not a client until a retainer is signed.",
  path: "/injury",
});

export default function InjuryPage() {
  return <PracticeArea content={injuryContent} />;
}
