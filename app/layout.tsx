import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Tanvi Batchu",
  description: "CS & Finance at Waterloo. Building at the intersection of software, markets, and AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="max-w-[680px] mx-auto px-6">{children}</main>
        <footer className="max-w-[680px] mx-auto px-6 py-10 pb-16">
          <p className="text-xs text-[#888]">Tanvi Batchu &mdash; 2026</p>
        </footer>
      </body>
    </html>
  );
}
