import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-fuchsia-100 mb-8 py-4">
        <div className="container mx-auto flex justify-evenly">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
          <Link href="/changelog">
            <a>Changelog</a>
          </Link>
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>
      <footer className="bg-fuchsia-100 mt-8 py-4">
        <div className="container mx-auto flex justify-center">
          &copy; 2022 ERmilburn02
        </div>
      </footer>
    </div>
  );
}
