export function Star({ className = "h-4 w-4", filled = true }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 2.5l2.7 5.9 6.4.7-4.8 4.3 1.3 6.3L12 16.9 6.4 19.7l1.3-6.3L2.9 9.1l6.4-.7L12 2.5z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Paw({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <ellipse cx="6" cy="11" rx="1.9" ry="2.5" />
      <ellipse cx="10" cy="8" rx="1.9" ry="2.6" />
      <ellipse cx="14" cy="8" rx="1.9" ry="2.6" />
      <ellipse cx="18" cy="11" rx="1.9" ry="2.5" />
      <path d="M12 12.5c-2.7 0-5 2-5 4.3 0 1.7 1.4 2.7 3 2.7 1 0 1.5-.4 2-.4s1 .4 2 .4c1.6 0 3-1 3-2.7 0-2.3-2.3-4.3-5-4.3z" />
    </svg>
  );
}

export function Heart({ className = "h-5 w-5", filled = false }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 20.3l-1.4-1.3C5.4 14.3 2 11.2 2 7.5 2 4.9 4 3 6.5 3c1.7 0 3.3.9 4.1 2.3h.8C12.2 3.9 13.8 3 15.5 3 18 3 20 4.9 20 7.5c0 3.7-3.4 6.8-8.6 11.5L12 20.3z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Clock({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
