import { PageHero } from "@/components/PageHero";
import { ResultsExplorer } from "@/components/ResultsExplorer";
import { PLACEHOLDER } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Case Results",
  description:
    "Placeholder case results for CaliLawyer. Figures are not verified outcomes. Past results do not guarantee a similar result.",
  path: "/results",
});

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Case results."
        sub="The cards below are placeholders. They are not a record of verdicts or settlements."
      />
      <section className="bg-gold">
        <div className="container-site py-8">
          <p className="text-sm font-semibold leading-relaxed text-ink">
            Past results do not guarantee future outcomes. Each case depends on
            its own facts and law. Replace {PLACEHOLDER.result} with a verified
            figure before publishing.
          </p>
        </div>
      </section>
      <section className="bg-paper">
        <div className="container-site py-16 md:py-20">
          <ResultsExplorer />
        </div>
      </section>
    </>
  );
}
