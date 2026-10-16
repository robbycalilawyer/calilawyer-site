import { HomeBands } from "@/components/home/HomeBands";
import { HomeHero } from "@/components/home/HomeHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "California lemon law and injury law",
  description:
    "CaliLawyer.com in Glendale reviews California lemon law and personal injury cases. Free consultation. We handle cases on contingency.",
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
