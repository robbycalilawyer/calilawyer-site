import { PracticeArea } from "@/components/PracticeArea";
import { rideshareAccident } from "@/lib/content/accidents";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  ...rideshareAccident.meta,
  path: rideshareAccident.aliasPath,
  canonical: rideshareAccident.meta.path,
});

export default function RideshareAccidentsAlias() {
  return <PracticeArea content={rideshareAccident.content} path={rideshareAccident.meta.path} />;
}
