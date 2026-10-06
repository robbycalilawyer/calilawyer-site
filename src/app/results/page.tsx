import type { Metadata } from "next";
import { LinkButton } from "@/components/Button";
import { ResultsGrid, type ResultItem } from "@/components/ResultsGrid";
import { PLACEHOLDER, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Results",
  description:
    "Representative case results across California personal injury and lemon law matters. Figures are placeholders pending attorney verification.",
};

// Representative matters. Every amount is a bracketed placeholder for
// attorney verification — we do not invent or imply settlement figures.
const RESULTS: ResultItem[] = [
  {
    amount: "[RESULT AMOUNT]",
    caseType: "Rear-end collision",
    detail:
      "Freeway rear-end crash with disputed injuries; insurer’s first offer barely covered the ER visit.",
    category: "Auto Accidents",
  },
  {
    amount: "[RESULT AMOUNT]",
    caseType: "Intersection crash",
    detail:
      "Left-turn collision with contested liability and significant soft-tissue injuries.",
    category: "Auto Accidents",
  },
  {
    amount: "[RESULT AMOUNT]",
    caseType: "Commercial truck crash",
    detail:
      "Collision with a loaded big rig; electronic data and driver logs preserved early.",
    category: "Trucking",
  },
  {
    amount: "[RESULT AMOUNT]",
    caseType: "Delivery-truck collision",
    detail:
      "Box-truck crash involving a corporate carrier and a disputed fault claim.",
    category: "Trucking",
  },
  {
    amount: "[RESULT AMOUNT]",
    caseType: "Vehicle buyback",
    detail:
      "Transmission defect the dealer couldn’t fix after repeated attempts. Full buyback recovered.",
    category: "Lemon Law",
  },
  {
    amount: "[RESULT AMOUNT]",
    caseType: "Electrical-defect claim",
    detail:
      "Persistent infotainment and electrical failures under manufacturer warranty.",
    category: "Lemon Law",
  },
  {
    amount: "[RESULT AMOUNT]",
    caseType: "Store slip & fall",
    detail:
      "Fall on an unmarked wet floor; incident video preserved before it was overwritten.",
    category: "Premises",
  },
  {
    amount: "[RESULT AMOUNT]",
    caseType: "Dangerous stairway",
    detail:
      "Broken handrail in a rental property that the owner knew about and failed to fix.",
    category: "Premises",
  },
  {
    amount: "[RESULT AMOUNT]",
    caseType: "Wrongful death",
    detail:
      "Family of a loved one killed by a negligent driver; placeholder pending verification.",
    category: "Wrongful Death",
  },
];

function Disclaimer() {
  return (
    <p className="text-sm leading-relaxed text-ink/70">
      <span className="font-semibold text-ink">
        Past results do not guarantee future outcomes.
      </span>{" "}
      Each case depends on its own facts and law. The figures shown are
      placeholders and must be replaced with verified firm results before
      launch. {PLACEHOLDER.disclaimer}
    </p>
  );
}

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="on-dark bg-ink">
        <div className="container-site py-16 md:py-24">
          <span className="eyebrow text-bone">Case Results</span>
          <h1 className="h-hero mt-4 max-w-3xl text-white">
            Results require proof, pressure, and preparation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone">
            A selection of the kinds of matters we handle across California.
            Outcomes depend entirely on the facts — but they share one thing:
            careful documentation and a willingness to try the case.
          </p>
        </div>
      </section>

      {/* Top disclaimer */}
      <section className="border-b border-bone bg-paper">
        <div className="container-site py-6">
          <Disclaimer />
        </div>
      </section>

      {/* Filterable grid */}
      <section className="bg-paper">
        <div className="container-site py-16 md:py-20">
          <ResultsGrid results={RESULTS} />
        </div>
      </section>

      {/* Bottom disclaimer + CTA */}
      <section className="on-dark bg-charcoal">
        <div className="container-site py-16 md:py-20">
          <div className="rounded-[var(--radius-lg)] border border-charcoal bg-ink p-6 md:p-8">
            <p className="text-sm leading-relaxed text-bone">
              <span className="font-semibold text-white">
                Past results do not guarantee future outcomes.
              </span>{" "}
              Each case depends on its own facts and law. The figures above are
              placeholders and must be replaced with verified firm results
              before launch.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <LinkButton href="/contact" size="lg">
              Start my free case review
            </LinkButton>
            <LinkButton href={SITE.phoneHref} variant="secondary" size="lg" onDark>
              Call {SITE.phoneDisplay}
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
