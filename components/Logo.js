import Link from "next/link";

export default function Logo({ className = "", textClass = "text-3xl", tribute = false }) {
  return (
    <Link href="/" className={`flex flex-col leading-none text-brown-600 ${className}`}>
      <span className="flex items-center gap-1.5">
        <span className={`font-hand font-extrabold tracking-tight ${textClass}`}>
          ByAstro
        </span>
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-sky-deep" fill="currentColor" aria-hidden="true">
          <path d="M12 21s-7.5-4.6-10-9.3C.6 8.9 2 5.5 5.2 5.1 7.2 4.9 8.9 6 12 9c3.1-3 4.8-4.1 6.8-3.9C22 5.5 23.4 8.9 22 11.7 19.5 16.4 12 21 12 21z" />
        </svg>
      </span>
      {tribute && (
        <span className="mt-1 text-[0.7rem] font-semibold uppercase tracking-wide text-sand-500">
          In memory of Astro
        </span>
      )}
    </Link>
  );
}
