"use client";
import { useState } from "react";

const professional = [
  {
    role: "AI Engineer — Algo Research",
    company: "RBC Capital Markets",
    href: "https://www.rbccm.com/en/expertise/global-markets/electronic-trading/ai-trading",
    period: "May 2026 – Dec 2026",
    location: "Toronto, ON",
    description:
      "Built multi-asset algo trading tools including ETF-to-single-security mapping and EMEA/AMRS/APAC coverage expansion. Developed an arrival cost decomposition model isolating execution performance from market volatility. Built an LLM-powered algorithmic trading analysis assistant for traders and quants. Engineered kdb+/q scripts reducing order data prep from 2 hours to under 10 minutes.",
    tags: ["Python", "kdb+/q", "LLMs", "Algo Trading", "TypeScript"],
    color: "#003168",
    abbr: "RBC",
    logo: "/logo-rbc.png",
  },
  {
    role: "Quantitative Researcher",
    company: "Marble Investments",
    href: "#",
    period: "Jan 2026 – Present",
    location: "Canada",
    description:
      "Analyzed short-term momentum in hype stocks, assessing whether abnormal volume spikes and rapid price acceleration produce repeatable trading patterns. Backtested systematic signals with liquidity and volatility thresholds. Evaluated performance via Sharpe ratio, drawdown depth, win-rate consistency, and regime analysis.",
    tags: ["Python", "Pandas", "NumPy", "Backtesting", "Statistics"],
    color: "#1a1a2e",
    abbr: "MI",
    logo: "/logo-marble.png",
  },
  {
    role: "Software Engineering Intern",
    company: "FinTek Soft",
    href: "#",
    period: "Sept – Dec 2024",
    location: "Toronto, ON",
    description:
      "Designed and implemented Python automation frameworks using PyTest and Selenium for fintech web apps. Reduced regression testing time by 30% by replacing manual QA with scalable automated pipelines. Built reusable utilities to validate business-critical workflows, edge cases, and data consistency.",
    tags: ["Python", "PyTest", "Selenium", "Test Automation"],
    color: "#2d6a4f",
    abbr: "FT",
  },
  {
    role: "Data & Operations Accounting Intern",
    company: "Angel Cosmeceuticals",
    href: "#",
    period: "Nov 2023 – May 2024",
    location: "Mississauga, ON",
    description:
      "Built data validation and reconciliation workflows for 100+ financial records, reducing month-end processing time by 15%. Prepared monthly statements supporting budgeting decisions for $120K+ in annual operating expenditures.",
    tags: ["Excel", "Data Validation", "Financial Reporting"],
    color: "#6b2737",
    abbr: "AC",
  },
];

const extracurricular = [
  {
    role: "Machine Learning Engineer",
    company: "WatStreet — World Order Book",
    href: "#",
    period: "May 2026 – Present",
    location: "Waterloo, ON",
    description:
      "Building a world model-based RL system for LOB execution: learning a latent representation of order book dynamics to simulate realistic market states, training DDQN agents with custom epsilon decay. Researching OOD regularization and evaluating ViT vs CNN/RNN architectures for LOB state representation.",
    tags: ["Python", "PyTorch", "Reinforcement Learning", "DDQN", "ViT"],
    color: "#0f4c75",
    abbr: "WS",
    logo: "/logo-watstreet.png",
  },
  {
    role: "Founder & Project Director",
    company: "BusiAid",
    href: "#",
    period: "Sept 2023 – June 2025",
    location: "Canada",
    description:
      "Founded organization providing accessible financial literacy resources to students across Canada. Hosted panel events and seminars reaching 500+ students; raised funding from CPA Ontario. Released podcast content with thousands of listens across multiple platforms.",
    tags: ["Financial Literacy", "Community", "Fundraising", "Leadership"],
    color: "#be185d",
    abbr: "BA",
    logo: "/logo-busiaid.png",
  },
  {
    role: "National Finance Team",
    company: "Canadian Young Investors' Society",
    href: "#",
    period: "July 2023 – Aug 2024",
    location: "Canada",
    description:
      "Sourced $5,000+ in funding from CPA Ontario, Women in Leadership Foundation, and Wealthsimple. Lead presenter at Canada Youth Changemakers Summit; hosted event with 300+ students reaching 3,000+ overall.",
    tags: ["Finance", "Public Speaking", "Fundraising"],
    color: "#7c3aed",
    abbr: "CY",
    logo: "/logo-cyis.png",
  },
];

export default function ExperienceSection() {
  const [tab, setTab] = useState<"professional" | "extracurricular">("professional");
  const items = tab === "professional" ? professional : extracurricular;

  return (
    <div style={{ paddingTop: "2.5rem" }}>
      {/* Toggle */}
      <div className="flex gap-3" style={{ marginBottom: "2.5rem" }}>
        {(["professional", "extracurricular"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="rounded-full font-semibold capitalize transition-all"
            style={{
              padding: "0.3rem 1rem",
              fontSize: "0.8rem",
              background: tab === t ? "var(--ink)" : "var(--surface)",
              color: tab === t ? "var(--bg)" : "var(--muted)",
              border: "1px solid var(--border)",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Entries */}
      <div className="flex flex-col" style={{ gap: "2rem" }}>
        {items.map((e, i) => (
          <div key={i} className="flex gap-5 items-start">
            {/* Logo */}
            <div
              className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-xs font-bold text-white overflow-hidden"
              style={{ background: (e as {logo?: string; color: string}).logo ? "#fff" : e.color }}
            >
              {(e as {logo?: string; abbr: string}).logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={(e as {logo: string}).logo} alt={e.abbr} className="w-full h-full object-contain p-1" />
              ) : (
                e.abbr
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 flex-wrap mb-1">
                <span className="font-bold text-base" style={{ color: "var(--ink)" }}>
                  {e.role}
                </span>
                <a
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-opacity hover:opacity-60"
                  style={{ color: "var(--muted)" }}
                >
                  {e.company}
                </a>
              </div>
              <p className="text-xs mb-3" style={{ color: "var(--muted)", opacity: 0.7 }}>
                {e.period} · {e.location}
              </p>
              <p className="text-[0.88rem] mb-4" style={{ color: "var(--body)", lineHeight: 1.75 }}>
                {e.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {e.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full"
                    style={{
                      border: "1px solid var(--border)",
                      color: "var(--muted)",
                      background: "var(--surface)",
                      padding: "0.2rem 0.7rem",
                      fontSize: "0.7rem",
                    }}
                  >
                    {tag}
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
