import { PracticeArea } from "@/components/PracticeArea";
import { injuryContent } from "@/lib/content/injury";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "California Personal Injury Attorneys",
  description:
    "California personal injury attorneys in Glendale for crashes, premises claims, dog bites, and catastrophic injuries. Free consultation.",
  path: "/personal-injury",
  canonical: "/injury",
});

export default function PersonalInjuryAlias() {
  return <PracticeArea content={injuryContent} />;
}
