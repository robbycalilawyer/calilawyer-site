import { AttorneyFigure } from "@/components/AttorneyPortrait";
import { PageHero } from "@/components/PageHero";
import { ATTORNEY, LANGUAGES, OFFICE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About the firm",
  description:
    "CaliLawyer.com is a Glendale firm for injury cases and lemon law. Free consultation. We handle cases on contingency.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The firm"
        title="A Glendale office for California cases."
        sub="CaliLawyer.com reviews injury cases and lemon law claims. Free consultation. We handle cases on contingency."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <section className="bg-white">
        <div className="container-site grid items-center gap-12 py-20 md:py-32 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-ink/80">
            <h2 className="h-section text-ink">What the office does.</h2>
            <p>
              You’ll get updates in plain language, from a person on the file.
              We start with the documents. We don’t guess what the case is
              worth.
            </p>
            <p>
              We collect the record, then we ask the other side to answer it.
              That other side might be a manufacturer with a warranty file or
              an insurer with a crash.
            </p>
          </div>
          <AttorneyFigure />
        </div>
      </section>
      <section className="bg-paper">
        <div className="container-site max-w-3xl py-20 md:py-32">
          <h2 className="h-section text-ink">Credentials and admissions</h2>
          <dl className="mt-8 space-y-6 rounded-[var(--radius-lg)] bg-white p-6 md:p-8">
            <div>
              <dt className="font-semibold text-ink">Responsible attorney</dt>
              <dd className="mt-1 text-ink/75">
                {ATTORNEY.name}, State Bar of California No. {ATTORNEY.barNumber}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Principal office</dt>
              <dd className="mt-1 text-ink/75">{OFFICE.display}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Admissions</dt>
              <dd className="mt-1 text-ink/75">State Bar of California</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Languages</dt>
              <dd className="mt-1 text-ink/75">{LANGUAGES.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
