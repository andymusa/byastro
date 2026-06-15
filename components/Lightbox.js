"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Full-screen image viewer. Pass an array of photos and the index to open at.
// Supports Escape to close, arrow keys / on-screen arrows to navigate when
// there's more than one photo, and click-outside to dismiss.
export default function Lightbox({ photos, index = 0, alt = "Photo", onClose }) {
  const [i, setI] = useState(index);
  const many = photos.length > 1;

  const go = (delta) => (e) => {
    e?.stopPropagation();
    setI((p) => (p + delta + photos.length) % photos.length);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (!many) return;
      if (e.key === "ArrowLeft") setI((p) => (p - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight") setI((p) => (p + 1) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, many, photos.length]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm animate-fade-up sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>

      {many && (
        <button
          onClick={go(-1)}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 sm:left-6"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      <div
        className="relative h-full max-h-[85vh] w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photos[i]}
          alt={alt}
          fill
          sizes="100vw"
          priority
          className="object-contain"
        />
      </div>

      {many && (
        <button
          onClick={go(1)}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 sm:right-6"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {many && (
        <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-sm font-semibold text-white">
          {i + 1} / {photos.length}
        </p>
      )}
    </div>
  );
}
