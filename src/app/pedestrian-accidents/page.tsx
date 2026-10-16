import { PracticeArea } from "@/components/PracticeArea";
import { pedestrianAccident } from "@/lib/content/accidents";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  ...pedestrianAccident.meta,
  path: pedestrianAccident.aliasPath,
  canonical: pedestrianAccident.meta.path,
});

export default function PedestrianAccidentsAlias() {
  return <PracticeArea content={pedestrianAccident.content} path={pedestrianAccident.meta.path} />;
}
