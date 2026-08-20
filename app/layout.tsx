import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import BottomDock from "@/components/BottomDock";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Your Name",
  description: "Placeholder portfolio site.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <CursorGlow />
        <div style={{ position: "relative", zIndex: 10 }}>
          <main className="pb-24">{children}</main>
        </div>
        <BottomDock />
      </body>
    </html>
  );
}
