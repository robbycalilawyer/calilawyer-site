import { AnswerPage } from "@/components/AnswerPage";
import { attorneyPage } from "@/lib/content/geo";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: attorneyPage.title,
  description: attorneyPage.description,
  path: attorneyPage.path,
});

export default function AttorneyPage() {
  return <AnswerPage page={attorneyPage} />;
}
