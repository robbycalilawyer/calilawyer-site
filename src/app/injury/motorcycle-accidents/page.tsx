import { PracticeArea } from "@/components/PracticeArea";
import { motorcycleAccident } from "@/lib/content/accidents";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(motorcycleAccident.meta);

export default function MotorcycleAccidentPage() {
  return <PracticeArea content={motorcycleAccident.content} path={motorcycleAccident.meta.path} />;
}
