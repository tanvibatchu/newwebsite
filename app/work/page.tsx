const projects = [
  {
    year: "2026",
    title: "ArtiCue",
    href: "https://github.com/tanvibatchu",
    description:
      "AI speech therapy companion for Canadian children facing 920-day waitlists. Kids practice with Nova, an animated coach voiced by ElevenLabs, while Gemini 2.5 Flash scores pronunciation using age-calibrated clinical rubrics in real time.",
    tags: ["Next.js", "TypeScript", "Gemini", "ElevenLabs", "Firebase"],
    award: "Winner · Google Seed Support · Hack Canada",
  },
  {
    year: "2026",
    title: "LandLock",
    href: "https://github.com/tanvibatchu",
    description:
      "Multi-agent climate risk platform orchestrating 3 specialized agents across 20+ BC government datasets for wildfire, zoning, and climate risk. Translates complex data into 0–100 actionable risk scores on an interactive map.",
    tags: ["Python", "CrewAI", "LangGraph", "FastAPI", "React", "Mapbox"],
    award: "UofT Hacks 2026",
  },
  {
    year: "2025",
    title: "RiskSpeak",
    href: "https://github.com/tanvibatchu",
    description:
      "Full-stack portfolio risk platform integrating broker APIs (Wealthsimple, Questrade, IBKR) for automated portfolio imports. Analytics engine computing 15+ financial metrics with automatic benchmark selection and sentiment-based risk alerts.",
    tags: ["Python", "FastAPI", "React", "YFinance", "Gemini", "TailwindCSS"],
  },
  {
    year: "2025",
    title: "MarketMeet",
    href: "https://github.com/tanvibatchu",
    description:
      "Quantitative robo-advisor using a multi-factor screening model against TSX/S&P 500, matched to 0.05% accuracy. Modified Markowitz mean-variance framework with full backtesting measuring Sharpe ratio, drawdowns, and cumulative returns.",
    tags: ["Python", "SciPy", "Pandas", "NumPy", "YFinance", "Jupyter"],
  },
  {
    year: "2025",
    title: "CityScapes",
    href: "https://github.com/tanvibatchu",
    description:
      "AI-assisted urban planning platform helping cities visualize and act on greenspace opportunities. Built in a 5-hour sprint.",
    tags: ["Next.js", "TypeScript", "Mapbox", "TailwindCSS"],
    award: "1st Overall · ClaudeHacks @ UWaterloo",
  },
  {
    year: "2025",
    title: "FakeSeek",
    href: "https://github.com/tanvibatchu",
    description:
      "Deepfake detection platform scanning the web for manipulated media and impersonation risks. Gemini API analysis, BeautifulSoup pipelines, Google OAuth.",
    tags: ["Python", "Gemini", "React", "TypeScript", "MongoDB"],
    award: "3rd Overall · TechNova 2025",
  },
];

export default function WorkPage() {
  return (
    <div className="pt-12 pb-24">
      <h1 className="text-[1.6rem] font-medium tracking-tight mb-2">Projects</h1>
      <p className="text-sm text-[#888] mb-12">Things I&apos;ve built.</p>

      <div>
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex gap-8 py-7 border-b border-[#e5e5e5] first:border-t first:border-[#e5e5e5]"
          >
            <div className="w-12 shrink-0 pt-0.5">
              <span className="text-xs text-[#888]">{p.year}</span>
            </div>
            <div>
              <div className="flex items-baseline gap-3 mb-1.5 flex-wrap">
                <h2 className="text-base font-medium">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4 decoration-[#ccc]"
                  >
                    {p.title}
                  </a>
                </h2>
                {p.award && (
                  <span className="text-[0.7rem] text-[#888]">{p.award}</span>
                )}
              </div>
              <p className="text-sm text-[#555] mb-2.5">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[0.7rem] text-[#888] border border-[#e5e5e5] rounded px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
