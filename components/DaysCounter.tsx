"use client";
import { useEffect, useState } from "react";

const START = new Date("2019-09-01");

export default function DaysCounter() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const calc = () => {
      const ms = Date.now() - START.getTime();
      setDays(Math.floor(ms / 86_400_000));
    };
    calc();
    const id = setInterval(calc, 60_000);
    return () => clearInterval(id);
  }, []);

  return <span>I&apos;ve been building things for {days.toLocaleString()} days.</span>;
}
