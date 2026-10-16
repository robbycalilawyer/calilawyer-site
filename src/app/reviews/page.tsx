import { AnswerPage } from "@/components/AnswerPage";
import { reviewsPage } from "@/lib/content/geo";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: reviewsPage.title,
  description: reviewsPage.description,
  path: reviewsPage.path,
});

export default function ReviewsPage() {
  return <AnswerPage page={reviewsPage} />;
}