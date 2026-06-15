"use client";

import { useRef } from "react";
import DogCard from "./DogCard";

export default function FeaturedCarousel({ items }) {
  const ref = useRef(null);

  const scroll = (dir) => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
      >
        {items.map(({ dog, shelter }) => (
          <div
            key={dog.id}
            className="w-[78%] flex-none snap-start sm:w-[46%] lg:w-[31%]"
          >
            <DogCard dog={dog} shelter={shelter} />
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-3">
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sky-deep shadow-soft transition hover:bg-sky-soft active:scale-90"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sky-deep shadow-soft transition hover:bg-sky-soft active:scale-90"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
