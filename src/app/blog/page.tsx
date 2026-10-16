import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { BLOG_POSTS } from "@/lib/content/blog";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Resources",
  description:
    "Short notes on lemon law paperwork, what to do after a crash, and rideshare coverage. These aren't finished articles.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="A few notes before you call."
        sub="These cards are previews. The full articles aren't published yet."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/blog" },
        ]}
      />
      <section className="bg-paper">
        <div className="container-site py-20 md:py-28">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <li
                key={post.title}
                className="flex flex-col rounded-[var(--radius-lg)] bg-white p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-ink">
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
