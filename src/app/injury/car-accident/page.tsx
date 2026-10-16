import { PracticeArea } from "@/components/PracticeArea";
import { carAccident } from "@/lib/content/accidents";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(carAccident.meta);

export default function CarAccidentPage() {
  return <PracticeArea content={carAccident.content} />;
}
