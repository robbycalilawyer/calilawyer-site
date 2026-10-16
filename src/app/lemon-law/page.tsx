import { PracticeArea } from "@/components/PracticeArea";
import { lemonLawContent } from "@/lib/content/lemon-law";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "California Lemon Law Attorneys",
  description:
    "California lemon law matters for defective vehicles, repeat warranty repairs, buybacks, and replacements. Free consultation from the Glendale office.",
  path: "/lemon-law",
});

export default function LemonLawPage() {
  return <PracticeArea content={lemonLawContent} />;
}
