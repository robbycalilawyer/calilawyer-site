import { PageHero } from "@/components/PageHero";
import { ATTORNEY, FEE_TERMS, OFFICE, SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms and Disclaimers",
  description:
    "Attorney advertising notice for CaliLawyer.com. Sending a form doesn’t create an attorney-client relationship. We handle cases on contingency.",
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
          <h2 className="h-card text-ink">No attorney-client relationship</h2>
          <p>
            Sending a form, an email, or a text doesn’t make you a client of{" "}
            {SITE.name}. A relationship starts only when both sides sign a
            written representation agreement.
          </p>
          <h2 className="h-card text-ink">Past results</h2>
          <p>
            Case results are not published on this site. A past result is not a
            prediction of a future outcome. Every case is different.
          </p>
          <h2 className="h-card text-ink">Fees</h2>
          <p>{FEE_TERMS} Free consultation.</p>
          <h2 className="h-card text-ink">Attorney advertising</h2>
          <p>
            This website may be considered attorney advertising. Hiring a lawyer
            is an important decision and should not rest on an advertisement
            alone. Nothing here says the quality of these legal services is
            greater than the quality of services from other lawyers.
          </p>
          <h2 className="h-card text-ink">Responsible attorney</h2>
          <p>
            The responsible attorney is {ATTORNEY.name}, State Bar of California
            No. {ATTORNEY.barNumber}. Principal office: {OFFICE.display}.
          </p>
        </div>
      </section>
    </>
  );
}
