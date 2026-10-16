import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ATTORNEY, LANGUAGES, OFFICE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About the Firm",
  description:
    "CaliLawyer.com is a Glendale plaintiff firm for injury victims and consumers with defective vehicles. Free consultation.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our firm"
        title="California advocacy with a modern edge."
        sub="We built CaliLawyer.com because injury victims and consumers deserve the same attention manufacturers and insurers buy by the hour."
      />
      <section className="bg-white">
        <div className="container-site grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-ink/80">
            <h2 className="h-section text-ink">A plaintiff firm built for Californians.</h2>
            <p>
              The practice is modern on purpose: clear updates, a real person
              on the file, and pressure that comes from documents rather than
              volume.
            </p>
            <p>
              <strong>Documents first. Strategy second. Pressure always.</strong>{" "}
              We do not guess at value. We collect the record, then we ask the
              other side to answer it.
            </p>
            <p>
              Whether the other side is a manufacturer sitting on a warranty
              file or a carrier sitting on a crash, the job is the same: level
              the information.
            </p>
          </div>
          <figure>
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-bone bg-ink">
              <Image
                src="/assets/attorney-portrait.jpg"
                alt="Rober A. Terziyan"
                width={1024}
                height={1024}
                className="aspect-[4/5] w-full object-cover grayscale"
              />
            </div>
            <figcaption className="mt-3 text-sm text-ink/60">
              Rober A. Terziyan
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="bg-paper">
        <div className="container-site max-w-3xl py-16 md:py-24">
          <h2 className="h-section text-ink">Credentials and admissions</h2>
          <dl className="mt-8 space-y-6 rounded-[var(--radius-lg)] border border-bone bg-white p-6 md:p-8">
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
