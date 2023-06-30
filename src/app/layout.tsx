import "./globals.css";

// Components
import NavBar from "@/components/NavBar";

// Font Awesome
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "@fortawesome/fontawesome-svg-core/styles.css";

// Font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ERmilburn02",
  description: "Personal website of ERmilburn02",
};

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
          <main className="flex-1 h-auto lg:h-full bg-gray-100 dark:bg-gray-700">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
