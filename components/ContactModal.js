"use client";

import { useEffect } from "react";
import { Paw, Star } from "./icons";

export default function ContactModal({ dog, shelter, mode, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const verb = mode === "foster" ? "foster" : "adopt";
  const channels = [
    shelter.whatsapp && {
      label: "WhatsApp the shelter",
      href: shelter.whatsapp,
      bg: "bg-[#25D366] text-white",
      icon: "💬",
    },
    shelter.phone && {
      label: `Call ${shelter.phoneLabel || "the shelter"}`,
      href: `tel:${shelter.phone}`,
      bg: "bg-sky-deep text-white",
      icon: "📞",
    },
    {
      label: "Email the shelter",
      href: `mailto:${shelter.email}?subject=I'd like to ${verb} ${dog.name}`,
      bg: "bg-brown-500 text-white",
      icon: "✉️",
    },
    {
      label: "Visit their Instagram",
      href: shelter.instagram,
      bg: "bg-butter-300 text-ink",
      icon: "📸",
    },
  ].filter(Boolean);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/40 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-4xl bg-cream-50 shadow-soft animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-sky-baby px-6 py-5 text-ink">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-ink hover:bg-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
          <p className="flex items-center gap-2 font-hand text-2xl font-extrabold">
            <Paw className="h-6 w-6" />
            {mode === "foster" ? `Foster ${dog.name}` : `Adopt ${dog.name}`}
          </p>
          <p className="mt-1 text-sm text-ink/75">
            Yay! 🎉 Reach out to {shelter.short} to start the process.
          </p>
        </div>

        <div className="space-y-3 p-6">
          <p className="text-sm text-ink/70">
            {dog.name} is cared for by{" "}
            <span className="font-semibold text-ink">{shelter.name}</span> in{" "}
            {shelter.location}. Pick how you'd like to say hello:
          </p>
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-3 rounded-2xl px-5 py-3.5 font-semibold shadow-soft transition hover:opacity-90 active:scale-[0.98] ${c.bg}`}
            >
              <span className="text-xl">{c.icon}</span>
              {c.label}
            </a>
          ))}
          <p className="flex items-center justify-center gap-1 pt-1 text-xs text-sand-500">
            <Star className="h-3 w-3 text-butter-300" />
            Thank you for giving a shelter dog a chance
          </p>
        </div>
      </div>
    </div>
  );
}
