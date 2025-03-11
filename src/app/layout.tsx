import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import RQProvider from "@/components/providers/RQProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "lol-stats-tracker",
  description: "Role Information Introduction Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const NAV_LINK_STYLE =
    "p-2.5 min-w-[150px] flex text-center justify-center item-center leading-[30px] hover:bg-[#892f2f]";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#5b5f5e]`}
      >
        <nav className="sticky min-h-[50px]  bg-[#B33A3A] content-center">
          <div className="flex justify-around gap-2 flex-wrap text-[#eeeeee] font-bold max-w-[1200px] my-0 mx-auto">
            <Link className={NAV_LINK_STYLE} href="/">
              홈
            </Link>
            <Link className={NAV_LINK_STYLE} href="/champions">
              챔피언 목록
            </Link>
            <Link className={NAV_LINK_STYLE} href="/items">
              아이템 목록
            </Link>
            <Link className={NAV_LINK_STYLE} href="/rotation">
              챔피언 로테이션
            </Link>
          </div>
        </nav>
        <main className="flex items-center w-full max-w-[1200px] my-0 mx-auto p-8 box-border relative min-h-[calc(100vh-50px)] text-center justify-center">
          <RQProvider>{children}</RQProvider>
        </main>
      </body>
    </html>
  );
}
