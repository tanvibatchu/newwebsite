"use client";

function HomeIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 7L8.5 2l6 5V14.5a.5.5 0 01-.5.5H11v-4.5H6V15H3a.5.5 0 01-.5-.5V7z" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1.5" y="6" width="14" height="9" rx="1.5" />
      <path d="M5.5 6V4.5A1.5 1.5 0 017 3h3a1.5 1.5 0 011.5 1.5V6" />
      <line x1="1.5" y1="10" x2="15.5" y2="10" />
    </svg>
  );
}
function FolderIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.5 4.5A1.5 1.5 0 013 3h3l2 2h6A1.5 1.5 0 0115.5 6.5V12A1.5 1.5 0 0114 13.5H3A1.5 1.5 0 011.5 12V4.5z" />
    </svg>
  );
}
function GradCapIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 2L1 6l7.5 4 7.5-4-7.5-4z" />
      <path d="M4 8v4c0 1.5 2 2.5 4.5 2.5S13 13.5 13 12V8" />
      <line x1="16" y1="6" x2="16" y2="10" />
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="currentColor">
      <path d="M8.5 1C4.36 1 1 4.36 1 8.5c0 3.32 2.16 6.14 5.14 7.13.38.07.52-.16.52-.36v-1.26c-2.1.45-2.54-.99-2.54-.99-.34-.87-.84-1.1-.84-1.1-.69-.47.05-.46.05-.46.76.05 1.16.78 1.16.78.67 1.15 1.77.82 2.2.63.07-.49.26-.82.48-1.01-1.68-.19-3.44-.84-3.44-3.73 0-.82.29-1.5.78-2.02-.08-.19-.34-.96.07-2 0 0 .64-.2 2.1.78a7.32 7.32 0 011.91-.26c.65 0 1.3.09 1.91.26 1.46-.99 2.1-.78 2.1-.78.41 1.04.15 1.81.07 2 .49.52.78 1.2.78 2.02 0 2.9-1.76 3.54-3.44 3.73.27.23.51.69.51 1.39v2.06c0 .2.13.43.52.36A7.51 7.51 0 0016 8.5C16 4.36 12.64 1 8.5 1z" />
    </svg>
  );
}

const items = [
  { id: "top",        label: "Home",       icon: <HomeIcon />,      scroll: true  },
  { id: "experience", label: "Experience", icon: <BriefcaseIcon />, scroll: true  },
  { id: "projects",   label: "Projects",   icon: <FolderIcon />,    scroll: true  },
  { id: "education",  label: "Education",  icon: <GradCapIcon />,   scroll: true  },
  { id: "github",     label: "GitHub",     icon: <GithubIcon />,    href: "https://github.com" },
];

export default function BottomDock() {
  const scrollTo = (id: string) => {
    if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 px-3 py-2 rounded-full"
      style={{
        background: "rgba(248,244,237,0.82)",
        border: "1px solid var(--border)",
        backdropFilter: "blur(18px)",
        boxShadow: "0 4px 28px var(--shadow-lg)",
      }}
    >
      {items.map((item) =>
        "href" in item ? (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            title={item.label}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all hover:opacity-60"
            style={{ color: "var(--accent)" }}
          >
            {item.icon}
          </a>
        ) : (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            title={item.label}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all hover:opacity-60"
            style={{ color: "var(--muted)" }}
          >
            {item.icon}
          </button>
        )
      )}
    </div>
  );
}
