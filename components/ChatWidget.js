"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { faqs, greeting, fallback } from "@/data/faqs";
import { Paw, Star } from "./icons";

// Lightweight keyword scoring against the FAQ knowledge base.
function findAnswer(input) {
  const text = input.toLowerCase();
  const words = text.replace(/[^a-z\s]/g, " ").split(/\s+/).filter(Boolean);
  let best = null;
  let bestScore = 0;
  for (const faq of faqs) {
    let score = 0;
    for (const kw of faq.keywords) {
      if (text.includes(kw)) score += 2;
      else if (words.includes(kw)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = faq;
    }
  }
  return bestScore >= 2 ? best.answer : null;
}

const suggestions = [
  "What's the difference between adopting and fostering?",
  "How much does it cost to adopt?",
  "Where can I meet these dogs?",
  "Can I adopt if I live in an apartment?",
  "What documents do I need?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "astro", text: greeting },
  ]);
  const [input, setInput] = useState("");
  const [showFallbackLink, setShowFallbackLink] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = (raw) => {
    const q = (raw ?? input).trim();
    if (!q) return;
    const answer = findAnswer(q);
    const reply = answer ?? fallback;
    setShowFallbackLink(!answer);
    setMessages((m) => [
      ...m,
      { from: "user", text: q },
      { from: "astro", text: reply },
    ]);
    setInput("");
  };

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat with Astro"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-sky-deep px-4 py-3 font-semibold text-white shadow-cozy transition hover:bg-sky-baby hover:text-ink active:scale-95"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <>
            <Paw className="h-6 w-6" />
            <span className="hidden sm:inline">Ask Astro</span>
          </>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-4 z-50 flex h-[30rem] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-4xl border border-cream-200 bg-cream-50 shadow-soft animate-fade-up sm:right-5">
          {/* Header */}
          <div className="flex items-center gap-3 bg-sky-baby px-4 py-3 text-ink">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sky-deep">
              <Paw className="h-6 w-6" />
            </span>
            <div className="leading-tight">
              <p className="font-hand text-xl font-extrabold">
                Astro <Star className="inline h-3 w-3 text-butter-300" />
              </p>
              <p className="text-xs text-ink/70">Your adoption guide · always here</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-3xl px-4 py-2.5 text-sm leading-relaxed shadow-soft ${
                    m.from === "user"
                      ? "rounded-br-md bg-butter-200 text-ink"
                      : "rounded-bl-md bg-white text-ink/90"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {showFallbackLink && (
              <div className="flex justify-start">
                <Link
                  href="/#shelters"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-sky-soft px-4 py-2 text-sm font-semibold text-sky-deep shadow-soft hover:bg-sky-baby"
                >
                  See the shelters list →
                </Link>
              </div>
            )}

            {messages.length <= 1 && (
              <div className="space-y-2 pt-1">
                <p className="px-1 text-xs font-semibold uppercase tracking-wide text-sand-500">
                  Try asking
                </p>
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="block w-full rounded-2xl border border-cream-200 bg-white px-3 py-2 text-left text-sm text-ink/80 transition hover:border-sky-baby hover:bg-cream-100"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-center gap-2 border-t border-cream-200 bg-white px-3 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything…"
              className="flex-1 rounded-full bg-cream-100 px-4 py-2.5 text-sm text-ink outline-none ring-sky-baby focus:ring-2"
            />
            <button
              type="submit"
              aria-label="Send"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-deep text-white transition hover:bg-sky-baby hover:text-ink active:scale-90"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M3.4 20.4l17.5-7.5c.9-.4.9-1.6 0-2L3.4 3.6c-.7-.3-1.5.3-1.4 1.1l1 5.8c.1.4.4.7.8.8l8.2 1.2-8.2 1.2c-.4.1-.7.4-.8.8l-1 5.8c-.1.8.7 1.4 1.4 1.1z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
