import { PracticeArea } from "@/components/PracticeArea";
import { lemonLawContent } from "@/lib/content/lemon-law";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "California Lemon Law Attorneys",
  description:
    "If the dealer hasn't fixed the car, we can review the warranty file. Buybacks and replacements depend on the facts. Free consultation from the Glendale office.",
  path: "/lemon-law",
});

export default function LemonLawPage() {
  return <PracticeArea content={lemonLawContent} />;
}
