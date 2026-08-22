import React from "react";
import Link from "next/link";

const wStyle = { paddingLeft: "clamp(2rem, 8vw, 8rem)", paddingRight: "clamp(2rem, 8vw, 8rem)", maxWidth: "1200px", margin: "0 auto" } as const;

const bullets: React.ReactNode[] = [
  <>co-founded a financial literacy org at 15 — grew it to 500+ students across Canada.</>,
  "EGOI National Team Camp Qualifier — top 10 female competitive programmer out of 4,000+ in the CCC.",
  "led social initiatives from age 13–18 tackling youth homelessness, affordable healthcare, and financial literacy.",
  "huge classics nerd — 6x provincial certamen champion in roman history & latin.",
];

const building: React.ReactNode[] = [
  <>building multi-asset trading tools — researching & building models on the algo research team at <a href="https://www.rbccm.com/en/expertise/global-markets/electronic-trading/ai-trading" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>RBC Capital Markets</a>.</>,
  <>
    <a href="https://devpost.com/tanvibatchu10" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>hacking</a>
    {", "}
    <a href="/work#projects" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>building</a>
    {", and "}
    <a href="https://cemc.uwaterloo.ca/contests/past_contests/2025/2025CIWSummary.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>competitive programming</a>
    {"! (click the links 🙈)"}
  </>,
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

const socials = [
  { href: "https://github.com/tanvibatchu",            icon: <GithubIcon />,   label: "GitHub"   },
  { href: "https://www.linkedin.com/in/tanvi-batchu/", icon: <LinkedInIcon />, label: "LinkedIn" },
  { href: "mailto:tanvibatchuw@gmail.com",             icon: <MailIcon />,     label: "Email"    },
];

export default function Home() {
  return (
    <div>

      {/* ─── HERO ─────────────────────────────────── */}
      <section className="pb-32" style={{ paddingTop: "2rem" }}>
        <div style={wStyle}>

        {/* Top nav */}
        <div className="flex gap-4 items-start">

          {/* Left */}
          <div className="flex-1 min-w-0">
            <h1
              className="font-extrabold leading-[1.05] mb-7"
                style={{ fontSize: "clamp(2.4rem, 5vw, 3.2rem)", letterSpacing: "-0.03em" }}
            >
              Hey! I&apos;m{" "}
              <span style={{ color: "var(--accent)" }}>Tanvi</span>.
            </h1>

            <p className="text-base mb-14" style={{ color: "var(--body)", lineHeight: 1.9 }}>
              <a href="https://uwaterloo.ca/future-students/programs/computing-and-financial-management" target="_blank" rel="noopener noreferrer" style={{ color: "var(--body)", textDecoration: "underline", textUnderlineOffset: "3px" }}>CS + Finance @ University of Waterloo</a>
            </p>

            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)", marginTop: "0.5rem", marginBottom: "1rem" }}>
              Currently:
            </p>
            <ul className="flex flex-col gap-1.5 mb-6">
              {building.map((b, i) => (
                <li key={i} className="flex gap-3 text-[0.95rem]" style={{ color: "var(--body)", lineHeight: 1.85 }}>
                  <span style={{ color: "var(--ink)" }} className="shrink-0">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)", marginTop: "1.5rem", marginBottom: "1rem" }}>
              A brief dive:
            </p>
            <ul className="flex flex-col gap-1.5 mb-16">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-[0.95rem]" style={{ color: "var(--body)", lineHeight: 1.85 }}>
                  <span style={{ color: "var(--ink)" }} className="shrink-0 mt-1">•</span>
                  {b}
                </li>
              ))}
            </ul>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70 mt-6"
              style={{ color: "var(--accent)" }}
            >
              See my work <span>→</span>
            </Link>
          </div>

          {/* Right — nav + photo */}
          <div className="shrink-0 flex flex-col items-start gap-5" style={{ width: "auto", paddingTop: "1.25rem" }}>
            {/* Nav links + socials */}
            <div className="flex items-center gap-3 whitespace-nowrap">
              <Link
                href="/work"
                className="font-semibold transition-opacity hover:opacity-60"
                  style={{ color: "var(--ink)", fontSize: "1rem", textDecoration: "underline", textUnderlineOffset: "4px" }}
                >
                  work
                </Link>
                <Link
                  href="/work#projects"
                  className="font-semibold transition-opacity hover:opacity-60"
                  style={{ color: "var(--ink)", fontSize: "1rem", textDecoration: "underline", textUnderlineOffset: "4px" }}
                >
                  projects
                </Link>
                <Link
                  href="/work#awards"
                  className="font-semibold transition-opacity hover:opacity-60"
                  style={{ color: "var(--ink)", fontSize: "1rem", textDecoration: "underline", textUnderlineOffset: "4px" }}
                >
                  awards
                </Link>
                <Link
                  href="/media"
                  className="font-semibold transition-opacity hover:opacity-60"
                  style={{ color: "var(--ink)", fontSize: "1rem", textDecoration: "underline", textUnderlineOffset: "4px" }}
                >
                  media
                </Link>
              <span style={{ color: "var(--border)" }}>|</span>
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo-main.png"
              alt="Tanvi"
              className="w-48 rounded-2xl object-cover object-top"
              style={{ height: "256px", width: "192px", border: "1px solid var(--border)", marginTop: "2.5rem" }}
            />
          </div>

        </div>
        </div>
      </section>

      {/* ─── ABOUT (dark) ─────────────────────────── */}
      <section id="about" style={{ background: "var(--bg-alt)", paddingTop: "1rem" }} className="pb-72">
        <div style={wStyle}>
          <h2
            className="font-extrabold mb-16"
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "var(--ink-alt)",
            }}
          >
            About me
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "center" }}>
            <div className="flex flex-col gap-4">
              <p style={{ color: "var(--body-alt)", lineHeight: 1.9 }}>
                Hey! I&apos;m Tanvi, and I like solving random problems and building things. Ever since I was little, I&apos;ve loved the concept of solving problems and creating impact. It started with social initiatives and moved to programming to build the actual tools behind it.
              </p>
              <p style={{ color: "var(--body-alt)", lineHeight: 1.9 }}>
                Outside of tech, I love music (I&apos;ve been singing carnatic music for 15+ years!), media (books, tv shows, you name it), cooking, and finding new spots in the city!
              </p>
              <p style={{ color: "var(--body-alt)", lineHeight: 1.9 }}>
                Feel free to scroll through my experience and projects and let me know what you think! Or if you have any food spots in Toronto, let me know. Enjoy!
              </p>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                View my work →
              </Link>
              <div className="flex gap-6 flex-wrap mt-2">
                {[
                  { label: "GitHub", href: "https://github.com/tanvibatchu" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/tanvi-batchu/" },
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
                style={{ height: "160px", border: "1px solid rgba(255,255,255,0.25)", marginTop: "0px" }}
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

    </div>
  );
}
