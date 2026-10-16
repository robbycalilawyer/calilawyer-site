import { notFound } from "next/navigation";
import { AnswerPage } from "@/components/AnswerPage";
import { geoPagesUnder } from "@/lib/content/geo";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return geoPagesUnder("injury").map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = geoPagesUnder("injury").find((item) => item.slug === slug);
  if (!page) return {};
  return pageMeta({
    title: page.title,
    description: page.description,
    path: page.path,
  });
}

export default async function InjuryGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = geoPagesUnder("injury").find((item) => item.slug === slug);
  if (!page) notFound();
  return <AnswerPage page={page} />;
}
