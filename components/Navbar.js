"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const links = [
    { href: "/", label: "Home" },
    { href: "/dogs", label: "Browse Dogs" },
    { href: "/about", label: "About" },
    { href: "/#shelters", label: "Shelters" },
    { href: "/#how", label: "How it works" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-cream-200 bg-cream-50/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Logo textClass="text-3xl" tribute={isHome} />

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 font-semibold text-ink/80 transition hover:bg-cream-200 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/dogs" className="btn-primary ml-2">
            Take me to the dogs!
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-xl p-2 text-ink md:hidden"
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-cream-200 bg-cream-50 px-4 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 font-semibold text-ink/80 hover:bg-cream-200"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/dogs"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Take me to the dogs!
          </Link>
        </div>
      )}
    </header>
  );
}
