import React from "react";
import DaysCounter from "@/components/DaysCounter";
import ProjectCards from "@/components/ProjectCards";

const wStyle = { paddingLeft: "clamp(2rem, 8vw, 8rem)", paddingRight: "clamp(2rem, 8vw, 8rem)" } as const;

const bullets = [
  "co-founded a financial literacy org at 15 — grew it to 500+ students across Canada.",
  "CIW bronze medallist — top 10 female competitive programmer out of 4,000+ in the CCC.",
  "led social initiatives from age 13–18 tackling youth homelessness, affordable healthcare, and financial literacy.",
  "6x provincial certamen champion — a roman history & latin academic competition. classics kid at heart.",
  "carnatic vocalist for 15+ years — still practicing, still loving it.",
];

const building: React.ReactNode[] = [
  <>building multi-asset trading tools — researching & building models on the algo research team at <a href="https://www.rbccm.com/en/expertise/global-markets/electronic-trading/ai-trading" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>RBC Capital Markets</a>.</>,
  <>
    <a href="https://devpost.com/tanvibatchu10" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>hacking</a>
    {", "}
    <a href="#projects" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>building</a>
    {", and "}
    <a href="https://cemc.uwaterloo.ca/contests/past_contests/2025/2025CIWSummary.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>competitive programming</a>
    {"! (click the links 🙈)"}
  </>,
];

const experience = [
  {
    year: "2026",
    company: "Company A",
    href: "#",
    role: "Role Title",
    location: "City",
    bullets: [
      "Placeholder bullet describing what you built or owned here.",
      "Quantifiable impact — users, revenue, latency, accuracy, etc.",
    ],
  },
  {
    year: "2025",
    company: "Company B",
    href: "#",
    role: "Role Title",
    location: "City",
    bullets: [
      "Placeholder bullet for this role.",
      "Second bullet describing scope or outcome.",
    ],
  },
  {
    year: "2025",
    company: "Company C",
    href: "#",
    role: "Role Title",
    location: "City",
    bullets: [
      "Placeholder — research, startup, or open source contribution.",
    ],
  },
  {
    year: "2024",
    company: "Company D",
    href: "#",
    role: "Intern / Role Title",
    location: "City",
    bullets: [
      "Placeholder internship bullet.",
      "What you shipped, learned, or improved.",
    ],
  },
];

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="16" height="13" rx="1.5" />
      <path d="M2 7l8 5 8-5" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
      <path d="M13.5 1.5h2.5L10.5 8 17 16.5h-4.5L9 11.5l-4 5H.5L7 9 1 1.5h4.6L9 6.2l4.5-4.7zm-.9 13.5h1.4L5.4 3H3.9L12.6 15z" />
    </svg>
  );
}

const socials = [
  { href: "https://github.com",   icon: <GithubIcon />,   label: "GitHub"   },
  { href: "https://linkedin.com", icon: <LinkedInIcon />, label: "LinkedIn" },
  { href: "mailto:you@email.com", icon: <MailIcon />,     label: "Email"    },
  { href: "https://x.com",        icon: <XIcon />,        label: "X"        },
];

export default function Home() {
  return (
    <div>

      {/* ─── HERO ─────────────────────────────────── */}
      <section className="pt-24 pb-32">
        <div style={wStyle}>
        <div className="flex gap-16 items-start">

          {/* Left */}
          <div className="flex-1 min-w-0">
            <h1
              className="font-extrabold leading-[1.05] mb-7"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4rem)", letterSpacing: "-0.03em" }}
            >
              Hey! I&apos;m{" "}
              <span style={{ color: "var(--accent)" }}>Tanvi</span>.
            </h1>

            <p className="text-base mb-2" style={{ color: "var(--body)", lineHeight: 1.9 }}>
              CS + Finance @ University of Waterloo
            </p>
            <p className="text-sm italic mb-14" style={{ color: "var(--muted)", lineHeight: 1.9 }}>
              <DaysCounter />
            </p>

            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--muted)" }}>
              Currently building:
            </p>
            <ul className="flex flex-col gap-3 mb-16">
              {building.map((b, i) => (
                <li key={i} className="flex gap-3 text-[0.95rem]" style={{ color: "var(--body)", lineHeight: 1.85 }}>
                  <span style={{ color: "var(--ink)" }} className="shrink-0">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--muted)" }}>
              A brief dive:
            </p>
            <ul className="flex flex-col gap-3 mb-16">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-[0.95rem]" style={{ color: "var(--body)", lineHeight: 1.85 }}>
                  <span style={{ color: "var(--ink)" }} className="shrink-0 mt-1">•</span>
                  {b}
                </li>
              ))}
            </ul>

            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: "var(--accent)" }}
            >
              Dive deeper <span>↓</span>
            </a>
          </div>

          {/* Right — photo + socials */}
          <div className="shrink-0 w-52 flex flex-col items-center gap-5 pt-1">
            <div
              className="w-48 h-64 rounded-2xl flex items-center justify-center font-bold text-xl tracking-widest select-none"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--muted)",
              }}
            >
              Photo
            </div>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  title={s.label}
                  className="transition-opacity hover:opacity-50"
                  style={{ color: "var(--muted)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
        </div>
      </section>

      {/* ─── ABOUT (dark) ─────────────────────────── */}
      <section id="about" style={{ background: "var(--bg-alt)" }} className="py-72">
        <div style={wStyle}>
          <h2
            className="font-extrabold mb-16"
            style={{
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "var(--ink-alt)",
            }}
          >
            About me.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "center" }}>
            <div className="flex flex-col gap-8">
              <p style={{ color: "var(--body-alt)", lineHeight: 1.9 }}>
                Hey! I&apos;m Tanvi, and I like solving random problems and building things. Ever since I was little, I&apos;ve loved the concept of solving problems and creating impact. It started with social initiatives and moved to programming to build the actual tools behind it.
              </p>
              <p style={{ color: "var(--body-alt)", lineHeight: 1.9 }}>
                I also love my little life outside of tech. I love music and media (books, tv shows, you name it), cooking, and finding new spots in the city!
              </p>
              <p style={{ color: "var(--body-alt)", lineHeight: 1.9 }}>
                Feel free to scroll through my experience and projects and let me know what you think! Or if you have any food spots in Toronto, let me know. Enjoy!
              </p>
              <div className="flex gap-6 flex-wrap mt-2">
                {[
                  { label: "GitHub · username", href: "https://github.com" },
                  { label: "LinkedIn",           href: "https://linkedin.com" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-opacity hover:opacity-60"
                    style={{
                      color: "rgba(255,255,255,0.9)",
                      borderBottom: "1px solid rgba(255,255,255,0.4)",
                      paddingBottom: "2px",
                    }}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="shrink-0 flex flex-col gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photo-whiteboard.png"
                alt="Tanvi at a whiteboard"
                className="w-56 rounded-2xl object-cover"
                style={{ height: "160px", border: "1px solid rgba(255,255,255,0.25)", marginTop: "-80px" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photo-kid.png"
                alt="Tanvi as a kid"
                className="w-56 rounded-2xl object-cover"
                style={{ height: "160px", border: "1px solid rgba(255,255,255,0.25)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE (light) ───────────────────── */}
      <section id="experience" className="py-72" style={{ background: "var(--bg)" }}>
        <div style={wStyle}>
          <h2
            className="font-extrabold mb-20"
            style={{
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "var(--ink)",
            }}
          >
            Experience
          </h2>

          <div className="relative">
            <div
              className="absolute top-0 bottom-0 w-px"
              style={{ left: "4.2rem", background: "var(--border)" }}
            />

            <div className="flex flex-col gap-24">
              {experience.map((e, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-[4.2rem] pt-0.5 shrink-0">
                    <span className="text-xs font-bold" style={{ color: "var(--accent)" }}>
                      {e.year}
                    </span>
                  </div>
                  <div className="shrink-0 mt-[0.32rem] mr-6 z-10 relative">
                    <div
                      className="w-2.5 h-2.5 rounded-full border-2"
                      style={{ background: "var(--bg)", borderColor: "var(--accent)" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-2">
                      <h3 className="font-semibold text-base" style={{ color: "var(--ink)" }}>
                        {e.company}
                      </h3>
                      <a
                        href={e.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm transition-opacity hover:opacity-50"
                        style={{ color: "var(--accent)" }}
                      >
                        ↗
                      </a>
                    </div>
                    <p className="text-sm italic mb-5" style={{ color: "var(--muted)" }}>
                      {e.role} · {e.location}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {e.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-[0.88rem]"
                          style={{ color: "var(--body)", lineHeight: 1.85 }}
                        >
                          <span style={{ color: "var(--border)" }} className="shrink-0 mt-1 text-xs">◦</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS (light) ─────────────────────── */}
      <section id="projects" className="py-72" style={{ background: "var(--bg)" }}>
        <div style={wStyle}>
          <div className="flex items-end justify-between mb-16">
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: "var(--ink)",
              }}
            >
              Projects
            </h2>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-1 px-4 py-2 rounded-full text-xs font-semibold transition-opacity hover:opacity-75"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              View all projects
            </a>
          </div>
          <ProjectCards />
        </div>
      </section>

      {/* ─── EDUCATION (dark) ─────────────────────── */}
      <section id="education" style={{ background: "var(--bg-alt)" }} className="py-72">
        <div style={wStyle}>
          <h2
            className="font-extrabold mb-16"
            style={{
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "var(--ink-alt)",
            }}
          >
            Education
          </h2>
          <div className="flex flex-col gap-4">
            {[
              {
                abbr: "UX",
                name: "Your University",
                detail: "Degree Program · Year – Present",
                sub: "Go [Team]!!",
              },
              {
                abbr: "HS",
                name: "Your High School",
                detail: "Year – Year",
                sub: "Placeholder tagline or notable program",
              },
            ].map((edu) => (
              <div
                key={edu.name}
                className="flex items-center gap-5 p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  {edu.abbr}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--ink-alt)" }}>{edu.name}</p>
                  <p className="text-xs italic mt-0.5" style={{ color: "var(--muted-alt)" }}>{edu.detail}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--body-alt)" }}>{edu.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
