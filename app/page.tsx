import Link from "next/link";

const highlights = [
  {
    label: "ArtiCue",
    note: "Winner · Google Seed Support · Hack Canada",
    href: "/work",
  },
  {
    label: "CityScapes",
    note: "1st Overall · ClaudeHacks @ UWaterloo",
    href: "/work",
  },
  {
    label: "RBC Capital Markets",
    note: "AI Engineer · Algo Research · May–Dec 2026",
    href: "/experience",
  },
  {
    label: "EGOI National Camp",
    note: "Top 10 female competitive programmers · CCC 2025",
    href: "/about",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-16 pb-24">
        <h1 className="text-[2rem] font-medium tracking-tight leading-tight mb-4">
          Hi, I&apos;m Tanvi.
        </h1>
        <p className="text-[#555] max-w-[460px] mb-2">
          CS & Finance at Waterloo. I build at the intersection of software,
          markets, and AI.
        </p>
        <p className="text-sm text-[#888]">
          Incoming AI Engineer @ RBC Capital Markets &middot; Quant @ Marble Investments
        </p>
      </section>

      {/* Highlights */}
      <section className="border-t border-[#e5e5e5] pt-12 pb-24">
        <h2 className="text-[0.75rem] font-medium uppercase tracking-widest text-[#888] mb-8">
          Highlights
        </h2>
        <div className="flex flex-col">
          {highlights.map((h, i) => (
            <Link
              key={i}
              href={h.href}
              className="flex items-baseline justify-between py-4 border-b border-[#e5e5e5] first:border-t first:border-[#e5e5e5] group"
            >
              <span className="text-sm font-medium group-hover:underline underline-offset-4 decoration-[#ccc]">
                {h.label}
              </span>
              <span className="text-xs text-[#888] text-right ml-4">{h.note}</span>
            </Link>
          ))}
        </div>

        <div className="flex gap-6 mt-10">
          <Link href="/work" className="text-sm text-[#888] hover:text-[#111] transition-colors">
            All projects →
          </Link>
          <Link href="/experience" className="text-sm text-[#888] hover:text-[#111] transition-colors">
            Experience →
          </Link>
        </div>
      </section>
    </div>
  );
}
