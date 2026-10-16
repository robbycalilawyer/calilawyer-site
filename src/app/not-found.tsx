import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="container-site py-24">
        <p className="eyebrow text-ink/60">404</p>
        <h1 className="h-section mt-3 text-ink">That page is not on this site.</h1>
        <p className="mt-4 max-w-xl text-lg text-ink/75">
          The address may have changed. Start from the two practice areas, or
          request a free consultation from the contact page.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/" className="font-semibold text-ink">
            <span className="border-b-2 border-gold pb-0.5">Home</span>
          </Link>
          <Link href="/injury" className="font-semibold text-ink">
            <span className="border-b-2 border-gold pb-0.5">Personal injury</span>
          </Link>
          <Link href="/lemon-law" className="font-semibold text-ink">
            <span className="border-b-2 border-gold pb-0.5">Lemon law</span>
          </Link>
          <Link href="/contact" className="font-semibold text-ink">
            <span className="border-b-2 border-gold pb-0.5">Contact</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
