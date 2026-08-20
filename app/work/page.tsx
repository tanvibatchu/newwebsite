import Link from "next/link";
import ProjectCards from "@/components/ProjectCards";
import ExperienceSection from "@/components/ExperienceSection";

const wStyle = { paddingLeft: "clamp(2rem, 8vw, 8rem)", paddingRight: "clamp(2rem, 8vw, 8rem)" } as const;

const awards = [
      {
        year: "2025",
        title: "EGOI National Team Camp Qualifier + CIW Bronze Medallist",
    sub: "Top 10 female competitive programmers out of 4,000+ participants in the CCC",
    href: "https://cemc.uwaterloo.ca/contests/past_contests/2025/2025CIWSummary.pdf",
  },
  {
    year: "2025",
    title: "Lieutenant Governor's Community Volunteer Award",
    sub: "Government of Ontario · 1,000+ community service hours",
    href: "#",
  },
  {
    year: "2025",
    title: "President's Entrance Scholarship of Distinction",
    sub: "University of Waterloo · Research Experience Award, International Exchange Award",
    href: "#",
  },
      {
        year: "2024 & 2025",
    title: "Provincial Champion + Top 8% Internationally (ICDC) ×2",
    sub: "DECA Ontario · Business Law & Ethics (2025), Project Management (2024)",
    href: "#",
  },
  {
    year: "2024",
    title: "Best Stock Pitch & Presentation",
    sub: "Wharton School of Business, University of Pennsylvania",
    href: "#",
  },
  {
    year: "2022–2025",
    title: "Provincial Classics Champion (Certamen) — 6× first place",
    sub: "National Junior Classical League · Roman History, Mythology, Latin",
    href: "#",
  },
];

export default function WorkPage() {
  return (
    <div>
      {/* Back link */}
      <div style={wStyle} className="pt-10 pb-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-60"
          style={{ color: "var(--muted)" }}
        >
          ← back
        </Link>
      </div>

      {/* ─── EXPERIENCE ───────────────────── */}
      <section id="experience" style={{ background: "var(--bg)", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div style={wStyle}>
          <h2
            className="font-extrabold"
            style={{
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "var(--ink)",
            }}
          >
            Experience
          </h2>
          <ExperienceSection />
        </div>
      </section>

      {/* ─── PROJECTS ─────────────────────── */}
      <section id="projects" style={{ background: "var(--bg-alt)", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div style={wStyle}>
          <div className="flex items-end justify-between mb-10">
            <h2
              className="font-extrabold"
              style={{
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: "var(--ink-alt)",
              }}
            >
              Projects
            </h2>
            <a
              href="https://github.com/tanvibatchu"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-1 px-4 py-2 rounded-full text-xs font-semibold transition-opacity hover:opacity-75"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              View all on GitHub
            </a>
          </div>
          <ProjectCards dark />
        </div>
      </section>

      {/* ─── AWARDS ──────────────────────── */}
      <section id="awards" style={{ background: "var(--bg)", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div style={wStyle}>
          <h2
            className="font-extrabold mb-10"
            style={{
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "var(--ink)",
            }}
          >
            Awards
          </h2>
          <div className="flex flex-col">
            {awards.map((a, i) => (
              <div
                key={i}
                className="flex gap-8 items-start"
                style={{ borderBottom: "1px solid var(--border)", padding: "1.25rem 0" }}
              >
                <span className="text-xs font-bold shrink-0 w-20 pt-0.5" style={{ color: "var(--accent)" }}>
                  {a.year}
                </span>
                <div className="flex-1 min-w-0">
                  <a
                    href={a.href}
                    target={a.href !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="font-semibold text-sm transition-opacity hover:opacity-60 inline-flex items-center gap-1"
                    style={{ color: "var(--ink)" }}
                  >
                    {a.title}
                    {a.href !== "#" && <span style={{ color: "var(--accent)" }}>↗</span>}
                  </a>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>{a.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ─── EDUCATION ───────────────────────── */}
      <section id="education" style={{ background: "var(--bg-alt)", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div style={wStyle}>
          <h2
            className="font-extrabold mb-10"
            style={{
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "var(--ink-alt)",
            }}
          >
            Education
          </h2>
          <div className="flex flex-col gap-4 mb-14">
            {[{ logo: "/logo-uw.png", name: "University of Waterloo", detail: "CS & Finance (CFM) · Sept 2025 – Present" }].map((edu) => (
              <div key={edu.name} className="flex items-center gap-5 p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 flex items-center justify-center" style={{ background: "#fff" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={edu.logo} alt={edu.name} className="w-full h-full object-contain p-1" />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--ink-alt)" }}>{edu.name}</p>
                  <p className="text-xs italic mt-0.5" style={{ color: "var(--muted-alt)" }}>{edu.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--muted-alt)" }}>
            Programs &amp; workshops
          </p>
          <div className="flex flex-col gap-4">
            {[
              { logo: "/logo-iqc.png",     name: "Quantum School for Young Students (QSYS)", detail: "University of Waterloo · Institute for Quantum Computing", sub: "Invited to an online series of seminars and problem-solving sessions in quantum cryptography." },
              { logo: "/logo-shad.png",    name: "Shad Canada",                              detail: "Summer Program · 2024",                                     sub: "Month-long STEAM entrepreneurship program for high school students." },
              { logo: "/logo-wharton.png", name: "Wharton School of Business, UPenn",        detail: "Summer Program · August 2024",                              sub: "Best Stock Pitch & Presentation award" },
            ].map((prog) => (
              <div key={prog.name} className="flex items-center gap-5 p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 flex items-center justify-center" style={{ background: "#fff" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={prog.logo} alt={prog.name} className="w-full h-full object-contain p-1" />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--ink-alt)" }}>{prog.name}</p>
                  <p className="text-xs italic mt-0.5" style={{ color: "var(--muted-alt)" }}>{prog.detail}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--body-alt)" }}>{prog.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
