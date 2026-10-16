import { PageHero } from "@/components/PageHero";
import { OFFICE, SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How CaliLawyer.com in Glendale handles information submitted through this site.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        sub="Last updated October 16, 2026."
      />
      <section className="bg-paper">
        <div className="container-site max-w-3xl space-y-8 py-16 text-ink/80 md:py-20">
          <p>
            This privacy policy describes how {SITE.name} handles information
            sent through this website.
          </p>
          <h2 className="h-card text-ink">1. Information we collect</h2>
          <p>
            We collect what you send when you request a consultation or email
            the firm: name, phone, email, case type, and the description you
            choose to include.
          </p>
          <h2 className="h-card text-ink">2. How we use it</h2>
          <p>
            We use that information to review the inquiry, respond, and, only
            if you later sign a retainer, provide legal services. We also use
            it to meet legal duties that apply to the firm.
          </p>
          <h2 className="h-card text-ink">3. Sharing</h2>
          <p>
            We don’t sell personal information. We share it with people inside
            the firm and with service providers needed to operate the practice
            or evaluate the inquiry.
          </p>
          <h2 className="h-card text-ink">4. Attorney-client privilege</h2>
          <p>
            Information sent through this website isn’t privileged until a
            written retainer creates an attorney-client relationship. Don’t
            send highly confidential or time-sensitive information through the
            forms.
          </p>
          <p>
            Questions: {SITE.email}. Office: {OFFICE.display}.
          </p>
        </div>
      </section>
    </>
  );
}
