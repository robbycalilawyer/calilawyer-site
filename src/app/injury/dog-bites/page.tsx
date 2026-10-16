import { PracticeArea } from "@/components/PracticeArea";
import { dogBite } from "@/lib/content/accidents";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(dogBite.meta);

export default function DogBitePage() {
  return <PracticeArea content={dogBite.content} path={dogBite.meta.path} />;
}
