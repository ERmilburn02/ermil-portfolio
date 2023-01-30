import Link from "next/link";
import useDarkMode from "../hooks/useDarkMode";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-white">
      <header className="bg-fuchsia-100 dark:bg-purple-900 text-black dark:text-white mb-8 py-4">
        <div className="container mx-auto flex justify-evenly">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/changelog">Changelog</Link>
          <button onClick={handleMode}>
            <a>Toggle theme</a>
          </button>
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>
      <footer className="bg-fuchsia-100 dark:bg-purple-900 text-black dark:text-white mt-8 py-4">
        <div className="container mx-auto flex justify-center">
          &copy; 2022 ERmilburn02
        </div>
      </footer>
    </div>
  );
}
