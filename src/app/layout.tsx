import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { SITE } from "@/lib/site";

// DISPLAY — editorial authority, headlines only.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

// BODY / UTILITY.
const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

// DATA / FIGURES — settlement amounts, case numbers, stats.
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calilawyer.com"),
  title: {
    default: `${SITE.name} — California Personal Injury & Lemon Law Attorneys`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Injured in an accident or stuck with a lemon? CaliLawyer routes California injury victims and defective-vehicle owners to the right team. Free case review.",
  openGraph: {
    title: `${SITE.name} — California Personal Injury & Lemon Law Attorneys`,
    description:
      "Two ways we fight for you: personal injury and California lemon law. Free case review.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${hanken.variable} ${jetbrains.variable} antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[var(--radius-sm)] focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        {/* Extra bottom padding so the sticky mobile bar never covers content. */}
        <main id="main" className="pb-24 md:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
