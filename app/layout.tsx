import "./globals.css";
import type { Metadata } from "next";
import yekanBakh from "@/fonts";

import AdvertisingNavbar from "@/components/pages/home/templates/AdvertisingNavbar";

export const metadata: Metadata = {
  title: "اپل استور",
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
        <main className="pt-10 2xl:pt-15">{children}</main>
      </body>
    </html>
  );
}
