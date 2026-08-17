"use client";
import { useEffect, useState } from "react";

type Bubble = { id: number; left: string; size: number; dur: number; delay: number };

export default function FloatingBubbles({ count = 20 }: { count?: number }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${2 + Math.random() * 96}%`,
        size: Math.floor(32 + Math.random() * 120),
        dur:  Math.floor(10 + Math.random() * 18),
        delay: Math.floor(Math.random() * 30),
      }))
    );
  }, [count]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 3 }} aria-hidden="true">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full"
          style={{
            left: b.left,
            bottom: `-${b.size}px`,
            width: b.size,
            height: b.size,
            opacity: 0,
            animation: `floatUp ${b.dur}s ${b.delay}s ease-in-out infinite`,
            background: `radial-gradient(
              circle at 36% 32%,
              rgba(140,170,255,0.65) 0%,
              rgba(80,120,240,0.32) 38%,
              rgba(59,91,219,0.12) 65%,
              transparent 100%
            )`,
            border: "1px solid rgba(100,140,255,0.22)",
            boxShadow: `
              inset 3px 3px 8px rgba(180,200,255,0.4),
              inset -2px -3px 8px rgba(30,60,180,0.15),
              0 4px 20px rgba(59,91,219,0.08)
            `,
          }}
        />
      ))}
    </div>
  );
}
