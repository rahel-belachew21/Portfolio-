import Link from "next/link";
import { profile } from "@/data/profile";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 lg:px-8">
        <p className="text-[var(--secondary-text)]">
          © {year} {profile.name}. All rights reserved.
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[var(--secondary-text)] sm:gap-x-4">
            {footerLinks.map((item, index) => (
              <li key={item.href} className="flex items-center gap-x-3 sm:gap-x-4">
                <Link
                  href={item.href}
                  className="transition hover:text-[var(--foreground)] hover:underline hover:decoration-[var(--accent)] hover:underline-offset-4"
                >
                  {item.label}
                </Link>
                {index < footerLinks.length - 1 ? (
                  <span aria-hidden="true" className="text-[var(--border)]">
                    ·
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
