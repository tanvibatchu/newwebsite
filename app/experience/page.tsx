const experience = [
  {
    role: "AI Engineer — Algorithmic Research",
    company: "RBC Capital Markets",
    location: "Toronto",
    period: "May – Dec 2026",
    bullets: [
      "Developed an arrival cost decomposition model using LightGBM and SHAP values to isolate execution performance from external market volatility; published findings to the trade floor",
      "Grew Algo Monocle adoption from 7 to 30 trade-floor users by building an LLM-powered research tool for execution data, charting, and client reports; extended coverage to EMEA markets",
      "Engineered kdb+/q scripts to parse large timeseries datasets, cutting order data preparation from 2 hours to under 10 minutes",
      "Reduced manual report review by ~40% by incorporating cost metrics so the LLM could identify execution issues automatically",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "WatStreet – World Order Book",
    location: "Waterloo",
    period: "May 2026 – Present",
    bullets: [
      "Built a predictive model for limit order books using Mamba-based sequence memory and a Dreamer-style world model (RSSM), trained through 5 implementation phases from toy sandbox to full closed-loop system",
      "Wrote smoke tests and a pytest suite run in CI on every backend push",
      "Benchmarked against the public FI-2010 dataset and arXiv:1910.03743",
    ],
  },
  {
    role: "Quantitative Researcher",
    company: "Marble Investments",
    location: "Canada",
    period: "Jan 2026 – Present",
    bullets: [
      "Analyzed short-term momentum in hype stocks — abnormal volume spikes and rapid price acceleration across market conditions",
      "Backtested systematic trading signals incorporating liquidity and volatility thresholds to establish entry & exit criteria",
      "Evaluated Sharpe ratio, drawdown depth, win-rate consistency, and regime analysis; refined parameters to enhance risk-adjusted returns",
    ],
  },
  {
    role: "Software Engineering Intern — Test Automation",
    company: "FinTek Soft",
    location: "Toronto",
    period: "Sept – Dec 2024",
    bullets: [
      "Built Python automation frameworks using PyTest & Selenium for fintech web apps",
      "Reduced regression testing time by 30% by replacing manual QA with scalable automated pipelines",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="pt-12 pb-24">
      <h1 className="text-[1.6rem] font-medium tracking-tight mb-2">Experience</h1>
      <p className="text-sm text-[#888] mb-12">Where I&apos;ve worked.</p>

      <div className="flex flex-col gap-12">
        {experience.map((e, i) => (
          <div key={i} className="flex gap-8">
            <div className="w-28 shrink-0 pt-0.5">
              <span className="text-xs text-[#888] leading-relaxed">{e.period}</span>
            </div>
            <div>
              <h2 className="text-base font-medium">{e.role}</h2>
              <p className="text-sm text-[#888] mb-4">
                {e.company} &middot; {e.location}
              </p>
              <ul className="flex flex-col gap-2">
                {e.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="text-sm text-[#555] pl-3 relative before:content-['—'] before:absolute before:left-0 before:text-[#ccc]"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
