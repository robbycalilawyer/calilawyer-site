import { AnswerPage } from "@/components/AnswerPage";
import { ATTORNEY_ALT, ATTORNEY_OG } from "@/lib/attorney-photo";
import { attorneyPage } from "@/lib/content/geo";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: attorneyPage.title,
  description: attorneyPage.description,
  path: attorneyPage.path,
  image: {
    url: ATTORNEY_OG.src,
    width: ATTORNEY_OG.width,
    height: ATTORNEY_OG.height,
    alt: ATTORNEY_ALT,
  },
});

export default function AttorneyPage() {
  return <AnswerPage page={attorneyPage} />;
}
