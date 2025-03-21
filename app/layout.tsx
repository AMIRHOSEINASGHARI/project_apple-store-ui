import "./globals.css";
import type { Metadata } from "next";
import yekanBakh from "@/fonts";

import AdvertisingNavbar from "@/components/pages/home/templates/AdvertisingNavbar";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "فروشگاه اپل استور",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.className} antialiased`}>
        <AdvertisingNavbar />
        <Header />
        <main className="mt-55 mb-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
