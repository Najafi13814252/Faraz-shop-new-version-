import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "فراز شاپ",
  description: "فروشگاه اینترنتی لوازم دیجیتال",
};

const arad = localFont({
  src: [
    {
      path: '../public/fonts/AradFD-RegularDots2.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/AradFD-MediumDots2.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/AradFD-SemiBoldDots2.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../public/fonts/AradFD-BoldDots2.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-arad',
  display: 'swap',
});

const morabba = localFont({
  src: [
    {
      path: '../public/fonts/Morabba.woff',
      style: 'normal'
    },
  ],
  variable: '--font-morabba',
  display: 'swap',
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="rtl"
      className={cn("h-full", "antialiased", arad.variable, morabba.variable, "font-arad")}
    >
      <body className="min-h-full flex flex-col px-4 md:px-8 lg:px-16 xl:px-36">{children}</body>
    </html>
  );
}
