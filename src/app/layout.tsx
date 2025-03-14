import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import RQProvider from "@/components/providers/RQProvider";
import { ThemeProvider } from "next-themes";
import ThemeChange from "@/components/ThemeChange";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#5b5f5e] relative`}
      >
        <nav className="sticky min-h-[50px]  bg-[var(--nav-bg-color)] content-center">
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
          <RQProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem={false}
            >
              {children}
              <ThemeChange />
            </ThemeProvider>
          </RQProvider>
        </main>
      </body>
    </html>
  );
}
