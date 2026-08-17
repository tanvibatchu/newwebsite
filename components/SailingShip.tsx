"use client";

export default function SailingShip() {
  return (
    <div
      className="fixed pointer-events-none overflow-hidden"
      style={{ bottom: 0, left: 0, right: 0, zIndex: 4, height: "90px" }}
      aria-hidden="true"
    >
      <div style={{ position: "absolute", bottom: 0, animation: "sailLeft 55s linear infinite" }}>
        <svg width="220" height="90" viewBox="0 0 220 90" fill="none" style={{ color: "var(--body)", opacity: 0.35 }}>
          {/* Hull */}
          <path d="M20 62 Q30 74 55 76 L165 76 Q190 74 200 62 L188 58 L32 58 Z" fill="currentColor" />
          {/* Hull stripe */}
          <rect x="32" y="56" width="156" height="5" rx="2" fill="currentColor" opacity="0.4" />
          {/* Keel */}
          <path d="M90 76 Q110 84 130 76" stroke="currentColor" strokeWidth="2.5" fill="none" />
          {/* Main mast */}
          <line x1="95" y1="16" x2="95" y2="58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          {/* Foremast */}
          <line x1="140" y1="26" x2="140" y2="58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          {/* Main sail */}
          <path d="M95 18 L95 52 L52 52 Z" fill="currentColor" opacity="0.6" />
          {/* Main sail back */}
          <path d="M95 18 L95 52 L134 44 Z" fill="currentColor" opacity="0.45" />
          {/* Fore sail */}
          <path d="M140 28 L140 54 L108 50 Z" fill="currentColor" opacity="0.5" />
          {/* Top sail */}
          <path d="M95 16 L95 32 L76 30 Z" fill="currentColor" opacity="0.4" />
          {/* Bowsprit */}
          <line x1="28" y1="50" x2="70" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Jib sail */}
          <path d="M30 50 L70 38 L68 56 Z" fill="currentColor" opacity="0.35" />
          {/* Flag */}
          <line x1="95" y1="16" x2="95" y2="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M95 10 L108 13 L95 16 Z" fill="currentColor" opacity="0.6" />
          {/* Portholes */}
          {[60, 85, 110, 135, 160].map((x) => (
            <circle key={x} cx={x} cy="67" r="3" fill="var(--bg)" opacity="0.5" />
          ))}
          {/* Water line ripple */}
          <path d="M10 78 Q30 74 50 78 Q70 82 90 78 Q110 74 130 78 Q150 82 170 78 Q190 74 210 78" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
        </svg>
      </div>
    </div>
  );
}
