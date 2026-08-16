const awards = [
  {
    year: "2025",
    title: "EGOI National Team Camp Qualifier + CIW Bronze",
    note: "Top 10 female competitive programmers out of 4,000+ in the CCC",
  },
  {
    year: "2025",
    title: "Lieutenant Governor's Community Volunteer Award",
    note: "Government of Ontario · 1,000+ community service hours",
  },
  {
    year: "2025",
    title: "President's Entrance Scholarship of Distinction",
    note: "University of Waterloo · Research Experience Award, International Exchange Award",
  },
  {
    year: "2024 & 2025",
    title: "DECA Provincial Champion + Top 8% Internationally",
    note: "Business Law & Ethics (2025), Project Management (2024)",
  },
  {
    year: "2024",
    title: "Best Stock Pitch & Presentation",
    note: "Wharton School of Business, University of Pennsylvania",
  },
  {
    year: "2022–2025",
    title: "Provincial Classics Champion (Certamen) — 6× first place",
    note: "National Junior Classical League · Roman History, Mythology, Latin",
  },
];

const interests = [
  { label: "Carnatic Music", note: "Vocalist for 15+ years" },
  { label: "Classics & Latin", note: "President of Classics Club. 6× provincial Certamen champion" },
  { label: "Competitive Programming", note: "CIW Bronze · C++ and Python" },
  { label: "Financial History", note: "Tracking correlations between bond prices, rates, and major historical events" },
  { label: "Telugu", note: "Bilingual — English and Telugu" },
  { label: "Cooking", note: "Experimenting with new recipes and cuisines" },
];

export default function AboutPage() {
  return (
    <div className="pt-12 pb-24">
      <h1 className="text-[1.6rem] font-medium tracking-tight mb-2">About</h1>

      {/* Bio */}
      <div className="flex flex-col gap-4 max-w-[520px] mb-16">
        <p className="text-[0.95rem] text-[#444] mt-4">
          I&apos;m a CS & Finance (CFM) student at Waterloo. I build at the intersection
          of software, markets, and AI — and I care a lot about building things that
          actually matter.
        </p>
        <p className="text-[0.95rem] text-[#444]">
          I like projects that are practical, make an impact, are rigorous, and a little
          ambitious.
        </p>
        <p className="text-[0.95rem] text-[#444]">
          Open to opportunities after Fall 2026.
        </p>
        <div className="flex gap-5 pt-2">
          {[
            { label: "GitHub", href: "https://github.com/tanvibatchu" },
            { label: "LinkedIn", href: "https://linkedin.com/in/tanvi-batchu" },
            { label: "Email", href: "mailto:tsabatch@uwaterloo.ca" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-sm text-[#111] border-b border-[#111] pb-px hover:text-[#888] hover:border-[#888] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Awards */}
      <section className="border-t border-[#e5e5e5] pt-10 mb-14">
        <h2 className="text-[0.75rem] font-medium uppercase tracking-widest text-[#888] mb-8">
          Recognition
        </h2>
        <div className="flex flex-col">
          {awards.map((a, i) => (
            <div
              key={i}
              className="flex gap-8 py-4 border-b border-[#e5e5e5] first:border-t first:border-[#e5e5e5]"
            >
              <div className="w-20 shrink-0 pt-0.5">
                <span className="text-xs text-[#888]">{a.year}</span>
              </div>
              <div>
                <p className="text-sm font-medium mb-0.5">{a.title}</p>
                <p className="text-xs text-[#888]">{a.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section className="border-t border-[#e5e5e5] pt-10">
        <h2 className="text-[0.75rem] font-medium uppercase tracking-widest text-[#888] mb-8">
          Interests
        </h2>
        <div className="flex flex-col">
          {interests.map((item, i) => (
            <div
              key={i}
              className="flex gap-8 py-3.5 border-b border-[#e5e5e5] first:border-t first:border-[#e5e5e5]"
            >
              <div className="w-40 shrink-0">
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              <span className="text-sm text-[#888]">{item.note}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
