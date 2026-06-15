import Link from "next/link";
import { Star } from "./icons";
import Logo from "./Logo";
import { shelters } from "@/data/shelters";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-cream-200 bg-cream-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Logo sketchClass="h-10 w-10" textClass="text-3xl" />
          <p className="mt-3 max-w-xs text-sm text-ink/70">
            Because every dog deserves a name, a story, and a place to call home.
          </p>
        </div>

        <div>
          <h4 className="font-hand text-lg font-bold text-ink">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink/70">
            <li><Link href="/dogs" className="hover:text-sky-deep">Browse all dogs</Link></li>
            <li><Link href="/#how" className="hover:text-sky-deep">How it works</Link></li>
            <li><Link href="/#shelters" className="hover:text-sky-deep">Partner shelters</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-hand text-lg font-bold text-ink">Our shelters</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink/70">
            {shelters.map((s) => (
              <li key={s.id}>
                <a href={s.instagram} target="_blank" rel="noreferrer" className="hover:text-sky-deep">
                  {s.short} · {s.location}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-200 py-5">
        <p className="flex items-center justify-center gap-1.5 text-sm text-sand-500">
          In memory of Astro
          <Star className="h-4 w-4 text-butter-300" />
        </p>
        <p className="mt-1 text-center text-xs text-ink/50">
          © {new Date().getFullYear()} ByAstro · Made with love for UAE rescue dogs
        </p>
      </div>
    </footer>
  );
}
