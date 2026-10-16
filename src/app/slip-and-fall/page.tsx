import { PracticeArea } from "@/components/PracticeArea";
import { slipAndFall } from "@/lib/content/accidents";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  ...slipAndFall.meta,
  path: slipAndFall.aliasPath,
  canonical: slipAndFall.meta.path,
});

export default function SlipAndFallAlias() {
  return <PracticeArea content={slipAndFall.content} path={slipAndFall.meta.path} />;
}
