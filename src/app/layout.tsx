import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomCTA } from "@/components/MobileBottomCTA";
import { FloatingCTA } from "@/components/FloatingCTA";
import { CaseReviewModal } from "@/components/CaseReviewModal";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { legalServiceSchema } from "@/lib/schema";

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
    "CaliLawyer fights for people hurt by negligence and consumers stuck with defective vehicles. Free California case review for lemon law and personal injury.",
  openGraph: {
    title: `${SITE.name} — California Personal Injury & Lemon Law Attorneys`,
    description:
      "Trial-ready pressure for California lemon law and personal injury claims. Free case review, statewide representation.",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "CaliLawyer — California lemon law and personal injury",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
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
        <JsonLd data={legalServiceSchema()} />
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
        <FloatingCTA />
        <MobileBottomCTA />
        <CaseReviewModal />
      </body>
    </html>
  );
}
