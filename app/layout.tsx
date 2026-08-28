import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import BottomDock from "@/components/BottomDock";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tanvi",
  description: "Tanvi Batchu's portfolio.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <CursorGlow />
        <Link
          href="/"
          aria-label="Home"
          style={{
            position: "fixed",
            top: "1.5rem",
            left: "1.75rem",
            zIndex: 50,
            color: "var(--ink)",
            opacity: 0.7,
            transition: "opacity 0.2s",
          }}
          className="hover:opacity-100 hidden md:block"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </Link>
        <div style={{ position: "relative", zIndex: 10 }}>
          <main className="pb-24">{children}</main>
        </div>
        <BottomDock />
      </body>
    </html>
  );
}
