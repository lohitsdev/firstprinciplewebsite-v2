import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://firstprinciple.studio"),
  title: "FirstPrinciple | Venture Studio",
  description:
    "FirstPrinciple is a venture studio with 12+ years of experience building products, companies, and growth systems from first principles.",
  openGraph: {
    title: "FirstPrinciple | Venture Studio",
    description:
      "A premium venture studio for founders and companies moving from insight to durable execution.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
