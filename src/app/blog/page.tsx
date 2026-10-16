import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { BLOG_POSTS } from "@/lib/content/blog";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Resources",
  description:
    "Short previews on California lemon law documents, car-accident steps, rideshare coverage, and insurance calls. Full articles are not published yet.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Resources and insights."
        sub="Know the process before the other side calls. These cards are previews, not finished articles."
      />
      <section className="bg-paper">
        <div className="container-site py-16 md:py-20">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <li
                key={post.title}
                className="flex flex-col rounded-[var(--radius-lg)] border border-bone bg-white p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink">
                    {post.category}
                  </p>
                  <p className="figure text-xs text-ink/50">{post.date}</p>
                </div>
                <h2 className="mt-4 font-display text-2xl text-ink">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                  {post.excerpt}
                </p>
                <Link href="/contact" className="mt-6 text-sm font-semibold text-ink">
                  <span className="border-b-2 border-gold pb-0.5">
                    Discuss this with us
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
