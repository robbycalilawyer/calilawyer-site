import { PracticeArea } from "@/components/PracticeArea";
import { dogBite } from "@/lib/content/accidents";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  ...dogBite.meta,
  path: dogBite.aliasPath,
  canonical: dogBite.meta.path,
});

export default function DogBitesAlias() {
  return <PracticeArea content={dogBite.content} path={dogBite.meta.path} />;
}
