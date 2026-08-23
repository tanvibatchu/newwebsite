"use client";
import React from "react";

const books = [
  { src: "/book-odyssey.png",      title: "The Odyssey",                author: "Homer"                },
  { src: "/book-1984.png",         title: "1984",                       author: "George Orwell"        },
  { src: "/book-meditations.png",  title: "Meditations",                author: "Marcus Aurelius"      },
  { src: "/book-nightingale.png",  title: "The Nightingale",            author: "Kristin Hannah"       },
  { src: "/book-fifthbusiness.png", title: "Fifth Business",            author: "Robertson Davies"     },
  { src: "/book-bookthief.png",    title: "The Book Thief",             author: "Markus Zusak"         },
  { src: "/book-secondsex.png",    title: "The Second Sex",             author: "Simone de Beauvoir"   },
  { src: "/book-negroes.png",      title: "The Book of Negroes",        author: "Lawrence Hill"        },
  { src: "/book-artofthinking.png", title: "The Art of Thinking Clearly", author: "Rolf Dobelli"      },
];

const albums = [
  { src: "/album-hamilton.png",       title: "Hamilton",               artist: "Original Broadway Cast" },
  { src: "/album-flowerboy.png",      title: "Flower Boy",             artist: "Tyler, the Creator"    },
  { src: "/album-sza.png",            title: "Ctrl",                   artist: "SZA"                   },
  { src: "/album-mbdtf.png",          title: "My Beautiful Dark Twisted Fantasy", artist: "Kanye West" },
  { src: "/album-renee.png",          title: "Snow Angel",             artist: "Renee Rapp"            },
  { src: "/album-kendrick-gkmc.png",  title: "good kid, m.A.A.d city", artist: "Kendrick Lamar"       },
  { src: "/album-dearevanhansen.png", title: "Dear Evan Hansen",       artist: "Original Broadway Cast" },
  { src: "/album-noah-busyhead.png",  title: "Busyhead",               artist: "Noah Kahan"            },
  { src: "/album-metro.png",          title: "We Don't Trust You",     artist: "Future & Metro Boomin" },
  { src: "/album-olivia.png",         title: "The Art of Loving",      artist: "Olivia Dean"           },
  { src: "/album-chromakopia.png",    title: "Chromakopia",            artist: "Tyler, the Creator"    },
  { src: "/album-khalid.png",         title: "American Teen",          artist: "Khalid"                },
  { src: "/album-intheheights.png",   title: "In the Heights",         artist: "Original Broadway Cast" },
  { src: "/album-harry.png",          title: "Harry's House",          artist: "Harry Styles"          },
  { src: "/album-jcole.png",          title: "The Off-Season",         artist: "J. Cole"               },
  { src: "/album-1d-takemehome.png",  title: "Take Me Home",           artist: "One Direction"         },
  { src: "/album-noah-cape.png",      title: "Cape Elizabeth",         artist: "Noah Kahan"            },
];

// duplicate for seamless loop
const strip = [...albums, ...albums];

export default function MediaPage() {
  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .album-strip {
          display: flex;
          gap: 1rem;
          width: max-content;
          animation: scroll-left 28s linear infinite;
        }
        .album-strip:hover {
          animation-play-state: paused;
        }
        .book-strip {
          display: flex;
          gap: 1rem;
          width: max-content;
          animation: scroll-right 22s linear infinite;
        }
        .book-strip:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", background: "var(--bg)", overflow: "hidden", padding: "3rem 0" }}>

        {/* Heading */}
        <div style={{ paddingLeft: "clamp(1rem, 4vw, 4rem)", paddingRight: "clamp(1rem, 4vw, 4rem)", maxWidth: "1200px", margin: "0 auto 2rem", width: "100%" }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--ink)", lineHeight: 1.1, marginBottom: "0.5rem" }}>
            What I&apos;m into.
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
            Hover to pause. Books and albums I keep coming back to.
          </p>
        </div>

        {/* Books row: 3/4 carousel + 1/4 sticky note */}
        <div style={{ display: "flex", width: "100%", alignItems: "stretch", marginBottom: "1.5rem" }}>

          {/* Carousel — 75% wide, clipped */}
          <div style={{ width: "75%", overflow: "hidden", minWidth: 0 }}>
            <p style={{ paddingLeft: "clamp(1rem, 4vw, 4rem)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.75rem" }}>Books</p>
            <div className="book-strip">
              {[...books, ...books].map((b, i) => (
                <div key={i} style={{ flexShrink: 0, width: "110px", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.src} alt={b.title} style={{ width: "110px", height: "160px", objectFit: "cover", borderRadius: "0.5rem", border: "1px solid var(--border)", display: "block" }} />
                  <p style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{b.title}</p>
                  <p style={{ fontSize: "0.65rem", color: "var(--muted)", marginTop: "-0.2rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{b.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky note — 25% wide */}
          <div style={{ width: "25%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 1.5rem 0 1rem" }}>
            <div style={{
              background: "#fed7aa",
              color: "#1a1a1a",
              padding: "1.25rem 1.25rem 1.5rem",
              borderRadius: "2px",
              boxShadow: "3px 4px 12px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)",
              transform: "rotate(-1.5deg)",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.82rem",
              lineHeight: 1.6,
              maxWidth: "220px",
              width: "100%",
            }}>
              <p style={{ fontWeight: 700, marginBottom: "0.6rem", fontSize: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase", opacity: 0.5 }}>to read</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <li style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}><span style={{ opacity: 0.4 }}>—</span> The Iliad</li>
                <li style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}><span style={{ opacity: 0.4 }}>—</span> Cobalt Red</li>
                <li style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}><span style={{ opacity: 0.4 }}>—</span> The Gallic Wars</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Albums strip — scrolls left */}
        <div style={{ overflow: "hidden", width: "100%" }}>
          <p style={{ paddingLeft: "clamp(1rem, 4vw, 4rem)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.75rem" }}>Albums</p>
          <div className="album-strip">
            {strip.map((a, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  width: "160px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.src}
                  alt={a.title}
                  style={{
                    width: "160px",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "0.75rem",
                    border: "1px solid var(--border)",
                    display: "block",
                  }}
                />
                <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {a.title}
                </p>
                <p style={{ fontSize: "0.7rem", color: "var(--muted)", marginTop: "-0.25rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {a.artist}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
