import { notFound } from "next/navigation";
import { AnswerPage } from "@/components/AnswerPage";
import { CITY_LEMON_PAGES } from "@/lib/content/geo";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return CITY_LEMON_PAGES.map((page) => ({
    city: page.path.split("/")[1],
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const page = CITY_LEMON_PAGES.find((item) => item.path.startsWith(`/${city}/`));
  if (!page) return {};
  return pageMeta({
    title: page.title,
    description: page.description,
    path: page.path,
  });
}

export default async function CityLemonPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const page = CITY_LEMON_PAGES.find((item) => item.path.startsWith(`/${city}/`));
  if (!page) notFound();
  return <AnswerPage page={page} />;
}
