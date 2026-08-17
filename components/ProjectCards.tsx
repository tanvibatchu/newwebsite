"use client";
import { useState } from "react";

const projects = [
  {
    num: "01",
    title: "Project Alpha",
    desc: "A placeholder project description. Replace with your real project details and what problem it solves.",
    tags: ["Python", "TypeScript", "AI"],
    color: "#1e3a5f",
    href: "#",
    year: "2026",
  },
  {
    num: "02",
    title: "Project Beta",
    desc: "Another placeholder project. Built in X hours, won Y hackathon, or reached Z users.",
    tags: ["React", "Next.js", "API"],
    color: "#1a3d2e",
    href: "#",
    year: "2026",
  },
  {
    num: "03",
    title: "Project Gamma",
    desc: "Third placeholder project. Describe the tech stack, impact, and what makes it interesting.",
    tags: ["ML", "Python", "Data"],
    color: "#3d1a2e",
    href: "#",
    year: "2025",
  },
  {
    num: "04",
    title: "Project Delta",
    desc: "Fourth project placeholder. Built something cool here — fill in the details.",
    tags: ["TypeScript", "AWS", "Agents"],
    color: "#2d2a10",
    href: "#",
    year: "2025",
  },
  {
    num: "05",
    title: "Project Epsilon",
    desc: "Fifth project. Another interesting thing you built — what was the outcome?",
    tags: ["Go", "Systems", "DB"],
    color: "#1a1a3d",
    href: "#",
    year: "2024",
  },
];

const SHOW = 3;

export default function ProjectCards() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects : projects.slice(0, SHOW);

  return (
    <div>
      <div className="flex flex-col gap-4">
        {visible.map((p) => (
          <a
            key={p.num}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card flex rounded-2xl overflow-hidden no-underline"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              boxShadow: "0 2px 12px var(--shadow)",
              minHeight: "172px",
              textDecoration: "none",
            }}
          >
            {/* Image / color block */}
            <div
              className="w-40 shrink-0 flex flex-col items-center justify-center gap-1 select-none"
              style={{ background: p.color }}
            >
              <span
                style={{
                  fontSize: "2.8rem",
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.12)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                {p.num}
              </span>
              <span
                style={{
                  color: "rgba(255,255,255,0.28)",
                  fontSize: "0.52rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                {p.tags[0]}
              </span>
            </div>

              {/* Content */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-base" style={{ color: "var(--ink)" }}>
                    {p.title}
                  </h3>
                  <span style={{ color: "var(--accent)", fontSize: "0.85rem" }}>↗</span>
                </div>
                <p className="text-sm" style={{ color: "var(--body)", lineHeight: 1.55 }}>
                  {p.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: "var(--surface)",
                      color: "var(--muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {t}
                  </span>
                ))}
                <span className="text-xs ml-auto self-center" style={{ color: "var(--muted)" }}>
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
          className="mt-4 px-4 py-2 rounded-full text-sm font-medium transition-opacity hover:opacity-70"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--muted)",
          }}
        >
          Expand {projects.length - SHOW} more projects
        </button>
      )}
    </div>
  );
}
