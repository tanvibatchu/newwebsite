"use client";
import { useState } from "react";

const projects = [
  {
    num: "01",
    title: "ArtiCue — AI Speech Therapy Companion",
    award: "Winner · Google Seed Support · Hack Canada",
    desc: "Built for Canadian children facing waitlists of up to 920 days for a government-funded speech-language pathologist. Kids practice daily with Nova, an animated coach voiced by ElevenLabs, while Gemini 2.5 Flash scores pronunciation using age-calibrated clinical rubrics in real time.",
    tags: ["Next.js", "TypeScript", "Gemini 2.5 Flash", "ElevenLabs", "Firebase", "Auth0"],
    image: "/articue.png",
    href: "https://devpost.com/tanvibatchu10",
    year: "2026",
  },
  {
    num: "02",
    title: "RiskSpeak — AI Portfolio Risk Explainer",
    award: "Personal Project",
    desc: "Full-stack platform integrating broker APIs (Wealthsimple, Questrade, IBKR) for automated portfolio imports and real-time risk assessment. Analytics engine computing 15+ financial metrics with automatic S&P 500/TSX 60 benchmark selection and NewsAPI sentiment risk alerts.",
    tags: ["Python", "FastAPI", "React", "YFinance", "GeminiAPI", "TailwindCSS"],
    image: "/riskspeak.png",
    href: "#",
    year: "2025",
  },
  {
    num: "03",
    title: "MarketMeet — Quantitative Robo-Advisor",
    award: "Personal Project",
    desc: "Python-based portfolio construction platform. Multi-factor screening model against TSX/S&P 500 benchmarks, matched to 0.05% accuracy. Modified Markowitz mean-variance framework with full backtesting system measuring Sharpe ratio, drawdowns, and cumulative returns.",
    tags: ["Python", "SciPy", "Pandas", "NumPy", "YFinance", "Jupyter"],
    image: "/marketmeet.png",
    href: "#",
    year: "2025",
  },
  {
    num: "04",
    title: "CityScapes — Visualise Your Impact",
    award: "Winner · 1st Overall · ClaudeHacks @ UWaterloo",
    desc: "Built in a 5-hour sprint. AI-assisted urban planning platform that helps cities visualize, analyze, and act on greenspace opportunities.",
    tags: ["Next.js", "React", "TypeScript", "Mapbox", "TailwindCSS"],
    image: "/cityscapes.png",
    href: "#",
    year: "2025",
  },
  {
    num: "05",
    title: "LandLock — Climate Risk Intelligence Platform",
    award: "UofT Hacks 2026",
    desc: "Multi-agent system (CrewAI + LangGraph) orchestrating 3 specialized agents analyzing 20+ BC government datasets for wildfire, zoning, and climate risk. Interactive map frontend translating complex data into 0–100 actionable risk scores for homebuyers and insurers.",
    tags: ["Python", "CrewAI", "LangGraph", "FastAPI", "React", "Mapbox", "TypeScript"],
    image: "/landlock.png",
    href: "#",
    year: "2026",
  },
  {
    num: "06",
    title: "FakeSeek — Deepfake Detection Platform",
    award: "3rd Overall · TechNova Hackathon 2025",
    desc: "Platform empowering users to protect their digital identity by scanning the web for manipulated media and impersonation risks. GeminiAPI deepfake analysis, BeautifulSoup detection pipelines, React + TypeScript frontend with Google OAuth.",
    tags: ["Python", "GeminiAPI", "React", "TypeScript", "MongoDB", "BeautifulSoup"],
    image: "/fakeseek.png",
    href: "#",
    year: "2025",
  },
];

const SHOW = 3;

export default function ProjectCards({ dark = false }: { dark?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects : projects.slice(0, SHOW);

  const cardBg    = dark ? "rgba(255,255,255,0.08)" : "var(--card-bg)";
  const cardBorder = dark ? "rgba(255,255,255,0.15)" : "var(--border)";
  const tagBg     = dark ? "rgba(255,255,255,0.1)"  : "var(--surface)";
  const tagColor  = dark ? "rgba(255,255,255,0.6)"  : "var(--muted)";
  const tagBorder = dark ? "rgba(255,255,255,0.2)"  : "var(--border)";
  const titleColor = dark ? "#fff"                  : "var(--ink)";
  const descColor  = dark ? "rgba(255,255,255,0.75)": "var(--body)";
  const yearColor  = dark ? "rgba(255,255,255,0.4)" : "var(--muted)";

  return (
    <div>
          <div className="flex flex-col gap-6">
        {visible.map((p) => (
          <a
            key={p.num}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card flex rounded-2xl overflow-hidden no-underline"
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              boxShadow: "0 2px 12px var(--shadow)",
              minHeight: "220px",
              textDecoration: "none",
            }}
          >
            {/* Project image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.image}
              alt={p.title}
              className="w-52 shrink-0 object-cover"
            />

            {/* Content */}
            <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold mb-1" style={{ color: "var(--accent)" }}>
                  {p.award}
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-base" style={{ color: titleColor }}>
                    {p.title}
                  </h3>
                  <span style={{ color: "var(--accent)", fontSize: "0.85rem" }}>↗</span>
                </div>
                <p className="text-sm" style={{ color: descColor, lineHeight: 1.65 }}>
                  {p.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: tagBg,
                      color: tagColor,
                      border: `1px solid ${tagBorder}`,
                    }}
                  >
                    {t}
                  </span>
                ))}
                <span className="text-xs ml-auto self-center" style={{ color: yearColor }}>
                  {p.year}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {!expanded && projects.length > SHOW && (
        <button
          onClick={() => setExpanded(true)}
          className="mt-6 px-5 py-2 rounded-full text-sm font-medium transition-opacity hover:opacity-70"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--muted)",
          }}
        >
          Show {projects.length - SHOW} more projects
        </button>
      )}
    </div>
  );
}
