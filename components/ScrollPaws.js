"use client";

import { useEffect, useRef } from "react";
import { Paw } from "./icons";

// A meandering trail of paw prints that gently fade + lift in as you scroll
// down the page. Purely decorative.
const PAWS = Array.from({ length: 9 }).map((_, i) => ({
  top: `${10 + i * 10}%`,
  side: i % 2 === 0 ? "left" : "right",
  offset: `${6 + (i % 3) * 7}%`,
  rot: i % 2 === 0 ? -18 : 22,
  size: i % 3 === 0 ? "h-9 w-9" : "h-7 w-7",
}));

export default function ScrollPaws() {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const els = ref.current?.querySelectorAll(".scroll-paw") ?? [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-in");
        });
      },
      { threshold: 0.4 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
    >
      {PAWS.map((p, i) => (
        <span
          key={i}
          className={`scroll-paw absolute text-brown-300 ${p.size}`}
          style={{
            top: p.top,
            [p.side]: p.offset,
            ["--rot"]: `${p.rot}deg`,
          }}
        >
          <Paw className="h-full w-full" />
        </span>
      ))}
    </div>
  );
}
