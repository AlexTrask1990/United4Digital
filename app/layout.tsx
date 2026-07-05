import type { Metadata } from "next";
import { openSans } from "@/app/ui/fonts";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || ""),
  alternates: {
    canonical: process.env.BASE_URL,
  },
  title: "United4Digital",
  description: "United4Digital - Digital Marketing Solutions",
  openGraph: {
    type: "website",
    url: process.env.BASE_URL,
    title: "United4Digital",
    description: "United4Digital - Digital Marketing Solutions, advertisement, online advertisement, publishers, advertisers, data transparency, online advertisement, online ads, video ads",
    images: [
      {
        url: `${process.env.BASE_URL}/favicon.ico`,
        width: 1200,
        height: 630,
        alt: "United4Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@united4digital",
    title: "United4Digital",
    description: "United4Digital - Digital Marketing Solutions",
    images: [`${process.env.BASE_URL}/favicon.ico`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="keywords" content="United4Digital, United 4 Digital, Digital Marketing Solutions, advertisement, online advertisement, publishers, advertisers, data transparency, online advertisement, online ads, video ads" />
      </head>
      <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID || ""} />
      <Analytics />
      <body
        className={`${openSans.variable} flex flex-col min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
