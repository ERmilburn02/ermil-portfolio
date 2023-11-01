import "./globals.css";

// Components
import NavBar from "@/components/NavBar";

// Font Awesome

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "@fortawesome/fontawesome-svg-core/styles.css";

// Font
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ERmilburn02",
  description: "Personal website of ERmilburn02",
  authors: { name: "ERmilburn02", url: "https://www.ermilburn02.com" },
};

export const viewport: Viewport = {
  themeColor: "rgb(55 65 81)",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex lg:flex-row flex-col h-full">
          <NavBar />
          <main className="flex-1 h-auto lg:h-full bg-gray-700 text-white overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
