import { PageHero } from "@/components/PageHero";
import { PLACEHOLDER, SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms and Disclaimers",
  description:
    "Attorney advertising notice, no attorney-client relationship from this website, and fee language pending review for CaliLawyer.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Advertisement / Attorney Advertising"
        title="Terms and disclaimers"
        sub={`These terms govern use of ${SITE.name}. They are not a retainer.`}
      />
      <section className="bg-paper">
        <div className="container-site max-w-3xl space-y-8 py-16 text-ink/80 md:py-20">
          <h2 className="h-card text-ink">Not legal advice</h2>
          <p>
            Material on this website is general information. It is not legal
            advice, and it may not reflect the latest development in your
            county or your facts. Do not act, or wait, based only on a page
            here.
          </p>
          <h2 className="h-card text-ink">No attorney–client relationship</h2>
          <p>
            Sending a form, an email, or a text does not make you a client of{" "}
            {SITE.name}. A relationship starts only when both sides sign a
            written representation agreement.
          </p>
          <h2 className="h-card text-ink">Past results</h2>
          <p>
            Any result described on this site is a placeholder (
            {PLACEHOLDER.result}) until an attorney replaces it with a verified
            outcome. Past results do not guarantee a future outcome. Every case
            is different.
          </p>
          <h2 className="h-card text-ink">Fees and costs</h2>
          <p>{PLACEHOLDER.noFee}</p>
          <h2 className="h-card text-ink">Attorney advertising</h2>
          <p>
            {PLACEHOLDER.disclaimer} This website may be considered attorney
            advertising. Hiring a lawyer is an important decision and should not
            rest on an advertisement alone. Nothing here says the quality of
            these legal services is greater than the quality of services from
            other lawyers.
          </p>
          <h2 className="h-card text-ink">Responsible attorney</h2>
          <p>
            The attorney responsible for this website is {PLACEHOLDER.attorney},
            California Bar No. {PLACEHOLDER.barNumber}. Principal office:{" "}
            {PLACEHOLDER.office}. Lawyers of the firm are licensed in California
            unless a page says otherwise — and that statement itself should be
            confirmed before publishing.
          </p>
        </div>
      </section>
    </>
  );
}
