import { PracticeArea } from "@/components/PracticeArea";
import { truckAccident } from "@/lib/content/accidents";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(truckAccident.meta);

export default function TruckAccidentPage() {
  return <PracticeArea content={truckAccident.content} path={truckAccident.meta.path} />;
}
