import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SparkleBackdrop from "@/components/SparkleBackdrop";
import AgeGateProvider from "@/components/AgeGateProvider";
import Navbar from "@/components/Navbar";
import DirectCtaFooter from "@/components/DirectCtaFooter";
import VipConciergeWidget from "@/components/VipConciergeWidget";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SHINEE | Maxim Cover Girl Semi-Finalist • Private VIP Sanctuary & Flagship",
  description:
    "Official luxury VIP portal & editorial portfolio flagship for Shinee (@jmj.era • @shinee.lv), Verified Maxim Cover Girl Semi-Finalist in Las Vegas, NV.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} dark`}
    >
      <body
        style={{
          fontFamily: "var(--font-sans), sans-serif",
        }}
        className="min-h-screen bg-[#0a0a0a] text-zinc-100 antialiased selection:bg-[#d4af37]/35 selection:text-[#fff8e7]"
      >
        <AgeGateProvider>
          {/* Subtle Ambient Sparkle Backdrop */}
          <SparkleBackdrop />

          {/* Sticky Global Navigation */}
          <Navbar />

          {/* Dynamic Page Content */}
          <main className="relative z-10">{children}</main>

          {/* Global Direct Conversion Footer */}
          <DirectCtaFooter />

          {/* Floating Live VIP Concierge Widget */}
          <VipConciergeWidget />
        </AgeGateProvider>
      </body>
    </html>
  );
}
