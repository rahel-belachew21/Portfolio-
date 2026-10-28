"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems, profile } from "@/data/profile";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_92%,transparent)] backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="flex items-center gap-2 text-sm font-medium tracking-tight text-[var(--foreground)]"
          aria-label="Rahel Belachew home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-xs font-semibold">
            RB
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--secondary-text)] transition hover:text-[var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.cvPath}
            download={profile.cvFileName || "cv.pdf"}
            className="hidden rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-black transition hover:opacity-90 sm:inline-flex"
          >
            Download CV
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-[var(--border)] px-3 py-2 text-sm text-[var(--foreground)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-[var(--border)] bg-[var(--background)] md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-sm text-[var(--secondary-text)] hover:bg-[var(--card)] hover:text-[var(--foreground)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={profile.cvPath}
              download={profile.cvFileName || "cv.pdf"}
              className="mt-1 rounded-md bg-[var(--accent)] px-2 py-2 text-center text-sm font-medium text-black"
              onClick={() => setOpen(false)}
            >
              Download CV
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
