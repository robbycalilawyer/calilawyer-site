import { HomeBands } from "@/components/home/HomeBands";
import { HomeHero } from "@/components/home/HomeHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "California’s Lemon Law & Injury Firm",
  description:
    "CaliLawyer.com in Glendale reviews California lemon law claims and personal injury cases. Free consultation.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeBands />
    </>
  );
}
