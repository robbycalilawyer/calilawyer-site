import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Case Results",
  description:
    "CaliLawyer.com does not publish case results on this site. A past result is not a prediction of a future outcome.",
  path: "/results",
});

export default function ResultsPage() {
  return (
    <PageHero
      eyebrow="Results"
      title="Case results."
      sub="Case results are not published on this site. A past result is not a prediction of a future outcome."
    />
  );
}
