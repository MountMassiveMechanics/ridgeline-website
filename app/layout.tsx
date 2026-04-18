import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import RevealInit from "@/components/RevealInit";

const barlow = Barlow({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  title: "Ridgeline Fleet Services — Flat-Rate Mobile Fleet Maintenance",
  description:
    "ASE-certified mobile fleet maintenance for commercial service fleets in the Denver Metro area. $200/vehicle/month flat rate. HVAC, plumbing, electrical, and contractor vehicles kept on the road.",
  keywords:
    "fleet maintenance Denver, mobile fleet service, ASE certified mechanics, commercial vehicle maintenance, flat rate fleet program",
  openGraph: {
    title: "Ridgeline Fleet Services",
    description:
      "Flat-rate monthly maintenance for commercial service fleets. Denver Metro — 40-mile radius.",
    siteName: "Ridgeline Fleet Services",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body className="font-sans antialiased">
        <RevealInit />
        {children}
      </body>
    </html>
  );
}
