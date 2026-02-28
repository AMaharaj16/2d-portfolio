import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <Link href="/" className="logo">
            Aayush Maharaj
          </Link>

          <div className="nav-links">
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/coursework">Coursework</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        <main className="container">{children}</main>
      </body>
    </html>
  );
}