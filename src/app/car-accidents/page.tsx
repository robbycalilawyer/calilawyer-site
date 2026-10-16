import { PracticeArea } from "@/components/PracticeArea";
import { carAccident } from "@/lib/content/accidents";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  ...carAccident.meta,
  path: carAccident.aliasPath,
  canonical: carAccident.meta.path,
});

export default function CarAccidentsAlias() {
  return <PracticeArea content={carAccident.content} />;
}
