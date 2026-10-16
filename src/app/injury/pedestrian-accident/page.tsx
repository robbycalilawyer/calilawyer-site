import { PracticeArea } from "@/components/PracticeArea";
import { pedestrianAccident } from "@/lib/content/accidents";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(pedestrianAccident.meta);

export default function PedestrianAccidentPage() {
  return <PracticeArea content={pedestrianAccident.content} />;
}
