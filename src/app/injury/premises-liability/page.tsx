import { PracticeArea } from "@/components/PracticeArea";
import { slipAndFall } from "@/lib/content/accidents";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(slipAndFall.meta);

export default function SlipAndFallPage() {
  return <PracticeArea content={slipAndFall.content} />;
}