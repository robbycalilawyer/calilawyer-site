import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Resources",
  description: "Notes from the Glendale office. Nothing is posted here yet.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <PageHero
      eyebrow="Resources"
      title="A few notes before you call."
      sub="Nothing is posted here yet."
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Resources", path: "/blog" },
      ]}
    />
  );
}
