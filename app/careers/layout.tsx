import type { Metadata } from "next";
import { openSans } from "@/app/ui/fonts";
import Footer from "@/app/ui/Footer/Footer";
import Header from "@/app/ui/Header/Header";

export const metadata: Metadata = {
  alternates: {
    canonical: `${process.env.BASE_URL}/careers`,
  },
  title: "Careers",
  description:
    "Join United4Digital. Explore career opportunities in digital marketing and mobile games.",
  openGraph: {
    title: "Careers | United4Digital",
    url: `${process.env.BASE_URL}/careers`,
    description:
      "Join United4Digital. Explore career opportunities in digital marketing and mobile games.",
  },
};

export default function CareersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
