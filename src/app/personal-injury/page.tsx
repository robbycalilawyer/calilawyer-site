import { PracticeArea } from "@/components/PracticeArea";
import { injuryContent } from "@/lib/content/injury";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "California Personal Injury Attorneys",
  description:
    "California personal injury attorneys for crashes, premises claims, dog bites, and catastrophic injuries. Free case review.",
  path: "/personal-injury",
  canonical: "/injury",
});

export default function PersonalInjuryAlias() {
  return <PracticeArea content={injuryContent} />;
}
