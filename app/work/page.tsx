import Link from "next/link";
import ProjectCards from "@/components/ProjectCards";
import ExperienceSection from "@/components/ExperienceSection";

const wStyle = { paddingLeft: "clamp(2rem, 8vw, 8rem)", paddingRight: "clamp(2rem, 8vw, 8rem)", maxWidth: "1200px", margin: "0 auto" } as const;

const awards = [
      {
        year: "2025",
        title: "EGOI National Team Camp Qualifier + CIW Bronze Medallist",
    sub: "Top 10 female competitive programmers out of 4,000+ participants in the CCC",
    href: "/ciw_summary.pdf",
  },
  {
    year: "2025",
    title: "Lieutenant Governor's Community Volunteer Award",
    sub: "Government of Ontario · 1,000+ community service hours",
    href: "https://lgontario.ca/en/learn/community-duties/honouring-ontarians/",
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
    href: "https://www.linkedin.com/posts/tanvi-batchu_i-am-pleased-to-share-that-earlier-this-month-ugcPost-7233536481724698624-2erN/",
  },
  {
    year: "2022–2025",
    title: "Provincial Classics Champion (Certamen) — 6× first place",
    sub: "National Junior Classical League · Roman History, Mythology, Latin",
    href: "https://www.njcl.org/NJCL-Convention/Convention-Contests/Certamen",
  },
];

export default function WorkPage() {
  return (
    <div>
      {/* Back link */}
      <div style={{ ...wStyle, paddingTop: "1.375rem", paddingBottom: "0.5rem" }} className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-60"
          style={{ color: "var(--muted)" }}
        >
          ← back
        </Link>
        <a
          href="mailto:tsabatch@uwaterloo.ca?subject=Resume%20Request&body=Hi%20Tanvi%2C%0A%0AI%27d%20love%20to%20get%20a%20copy%20of%20your%20resume!"
          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-60"
          style={{ color: "var(--muted)", textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          resume ↗
        </a>
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

      {/* ─── AWARDS + EDUCATION (side by side) ──────────────────────── */}
      <section id="awards" style={{ background: "var(--bg)", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div style={wStyle}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Awards */}
            <div id="awards-col">
              <h2
                className="font-extrabold mb-10"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.04em", lineHeight: 1, color: "var(--ink)" }}
              >
                Awards
              </h2>
              <div className="flex flex-col" style={{ borderTop: "1px solid var(--border)" }}>
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

            {/* Education */}
            <div id="education">
              <h2
                className="font-extrabold mb-10"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.04em", lineHeight: 1, color: "var(--ink)" }}
              >
                Education
              </h2>
              <div className="flex flex-col gap-4 mb-10" style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
                {[{ logo: "/logo-uw.png", name: "University of Waterloo", detail: "CS & Finance (CFM) · Sept 2025 – Present" }].map((edu) => (
                  <div key={edu.name} className="flex items-center gap-5 p-5 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 flex items-center justify-center" style={{ background: "#fff" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={edu.logo} alt={edu.name} className="w-full h-full object-contain p-1" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "var(--ink)" }}>{edu.name}</p>
                      <p className="text-xs italic mt-0.5" style={{ color: "var(--muted)" }}>{edu.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--muted)", marginTop: "1.5rem" }}>
                Programs &amp; workshops
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { logo: "/logo-ciw.png",     name: "Canadian Informatics Workshop (CIW)",      detail: "CEMC, University of Waterloo",           sub: "Week-long on-campus program for top female-identifying & non-binary competitors in the CCC. Top performers selected to represent Canada at EGOI.",  href: "https://cemc.uwaterloo.ca/contests/ccc" },
                  { logo: "/logo-iqc.png",     name: "Quantum School for Young Students (QSYS)", detail: "University of Waterloo · Institute for Quantum Computing", sub: "Invited to an online series of seminars and problem-solving sessions in quantum cryptography.", href: "https://uwaterloo.ca/institute-for-quantum-computing/outreach/qsys" },
                  { logo: "/logo-shad.png",    name: "Shad Canada",                              detail: "Summer Program · 2024",                                     sub: "Month-long STEAM entrepreneurship program for high school students.",                         href: undefined },
                  { logo: "/logo-wharton.png", name: "Wharton School of Business, UPenn",        detail: "Summer Program · August 2024",                              sub: "Best Stock Pitch & Presentation award",                                                       href: undefined },
                ].map((prog) => (
                  <div key={prog.name} className="flex items-center gap-4 p-5 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 flex items-center justify-center" style={{ background: "#fff" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={prog.logo} alt={prog.name} className="w-full h-full object-contain p-1" />
                    </div>
                    <div>
                      {prog.href ? (
                        <a href={prog.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-sm transition-opacity hover:opacity-60 inline-flex items-center gap-1" style={{ color: "var(--ink)" }}>
                          {prog.name}<span style={{ color: "var(--accent)" }}>↗</span>
                        </a>
                      ) : (
                        <p className="font-semibold text-sm" style={{ color: "var(--ink)" }}>{prog.name}</p>
                      )}
                      <p className="text-xs italic mt-0.5" style={{ color: "var(--muted)" }}>{prog.detail}</p>
                      <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>{prog.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
