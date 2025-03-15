import "./globals.css";
import type { Metadata } from "next";
import yekanBakh from "@/fonts";

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
      <body className={`${yekanBakh.className} antialiased`}>{children}</body>
    </html>
  );
}
