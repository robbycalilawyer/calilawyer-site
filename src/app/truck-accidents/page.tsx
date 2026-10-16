import { PracticeArea } from "@/components/PracticeArea";
import { truckAccident } from "@/lib/content/accidents";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  ...truckAccident.meta,
  path: truckAccident.aliasPath,
  canonical: truckAccident.meta.path,
});

export default function TruckAccidentsAlias() {
  return <PracticeArea content={truckAccident.content} />;
}
