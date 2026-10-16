import { PracticeArea } from "@/components/PracticeArea";
import { lemonLawContent } from "@/lib/content/lemon-law";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "California Lemon Law Attorneys",
  description:
    "California lemon law review for defective vehicles, repeat warranty repairs, buybacks, and replacements. Free repair-history review.",
  path: "/lemon-law",
});

export default function LemonLawPage() {
  return <PracticeArea content={lemonLawContent} />;
}
