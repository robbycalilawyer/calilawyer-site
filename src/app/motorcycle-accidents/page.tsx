import { PracticeArea } from "@/components/PracticeArea";
import { motorcycleAccident } from "@/lib/content/accidents";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  ...motorcycleAccident.meta,
  path: motorcycleAccident.aliasPath,
  canonical: motorcycleAccident.meta.path,
});

export default function MotorcycleAccidentsAlias() {
  return <PracticeArea content={motorcycleAccident.content} path={motorcycleAccident.meta.path} />;
}
