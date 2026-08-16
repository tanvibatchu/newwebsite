"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "work" },
  { href: "/experience", label: "experience" },
  { href: "/about", label: "about" },
  { href: "mailto:tsabatch@uwaterloo.ca", label: "contact", external: true },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between max-w-[680px] mx-auto px-6 py-8">
      <Link href="/" className="text-sm font-medium hover:text-[#888] transition-colors">
        Tanvi Batchu
      </Link>
      <div className="flex gap-6">
        {links.map((l) =>
          l.external ? (
            <a key={l.label} href={l.href}
              className="text-sm text-[#888] hover:text-[#111] transition-colors">
              {l.label}
            </a>
          ) : (
            <Link key={l.label} href={l.href}
              className={`text-sm transition-colors ${
                pathname.startsWith(l.href)
                  ? "text-[#111]"
                  : "text-[#888] hover:text-[#111]"
              }`}>
              {l.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
