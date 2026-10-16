import { PageHero } from "@/components/PageHero";
import { PLACEHOLDER, SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How CaliLawyer handles information submitted through this marketing site. Placeholder policy pending a legal review before launch.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        sub="Placeholder policy for attorney review. Last updated October 16, 2026."
      />
      <section className="bg-paper">
        <div className="container-site max-w-3xl space-y-8 py-16 text-ink/80 md:py-20">
          <p>
            This is a placeholder privacy policy for {SITE.name}. It must be
            replaced with legally reviewed copy before the site is treated as
            final.
          </p>
          <h2 className="h-card text-ink">1. Information we collect</h2>
          <p>
            We collect what you send when you request a case review or email
            the firm: name, phone, email, case type, and the description you
            choose to include.
          </p>
          <h2 className="h-card text-ink">2. How we use it</h2>
          <p>
            We use that information to review the inquiry, respond, and — only
            if you later sign a retainer — provide legal services. We also use
            it to meet legal duties that apply to the firm.
          </p>
          <h2 className="h-card text-ink">3. Calls and texts</h2>
          <p>
            {PLACEHOLDER.tcpa} If you submit a phone number, you agree we may
            contact you by phone or text about that inquiry. Message and data
            rates may apply. Reply STOP to opt out of texts.
          </p>
          <h2 className="h-card text-ink">4. Sharing</h2>
          <p>
            We do not sell personal information. We share it with people inside
            the firm and with service providers needed to operate the practice
            or evaluate the inquiry.
          </p>
          <h2 className="h-card text-ink">5. Attorney–client privilege</h2>
          <p>
            Information sent through this website is not privileged until a
            written retainer creates an attorney–client relationship. Do not
            send highly confidential or time-sensitive information through the
            forms.
          </p>
          <p>
            Questions about this placeholder: {SITE.email}. Office:{" "}
            {PLACEHOLDER.office}.
          </p>
        </div>
      </section>
    </>
  );
}
