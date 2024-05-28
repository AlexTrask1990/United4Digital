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
  title: {
    default: "United4Digital",
    template: "%s - United 4 Digital",
  },
  description: "United4Digital",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
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
