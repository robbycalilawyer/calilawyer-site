import { PracticeArea } from "@/components/PracticeArea";
import { rideshareAccident } from "@/lib/content/accidents";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(rideshareAccident.meta);

export default function RideshareAccidentPage() {
  return <PracticeArea content={rideshareAccident.content} path={rideshareAccident.meta.path} />;
}
