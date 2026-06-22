import Link from "next/link";
import { Paw, Heart } from "@/components/icons";
import AboutScene from "@/components/AboutScene";

export const metadata = {
  title: "About ByAstro — Built in memory of Astro",
  description:
    "ByAstro brings rescue dogs across the UAE together in one place, so more of them are seen and find loving homes. Built with love, in memory of Astro.",
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="paw-bg absolute inset-0 opacity-40" />
      <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-butter-100 blur-3xl opacity-50" />
      <div className="absolute -right-10 top-40 h-64 w-64 rounded-full bg-sky-soft blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        {/* Header */}
        <div className="text-center animate-fade-up">
          <p className="flex items-center justify-center gap-1.5 text-sm font-bold uppercase tracking-widest text-sky-deep">
            In memory of Astro
            <Heart className="h-4 w-4 text-sky-baby" filled />
          </p>
          <h1 className="mt-3 inline-flex items-start gap-2 font-hand text-5xl font-extrabold leading-[1.1] text-brown-600 sm:text-6xl">
            About ByAstro
            <Paw className="mt-2 h-7 w-7 text-sand-500" />
          </h1>
          <svg viewBox="0 0 120 12" className="mx-auto mt-1 h-3 w-28 text-sky-deep" fill="none" aria-hidden="true">
            <path d="M4 8C30 2 90 2 116 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>

        {/* Scene */}
        <div className="mt-8 animate-fade-up">
          <AboutScene />
        </div>

        {/* Tagline */}
        <h2 className="mt-10 text-center font-hand text-3xl font-extrabold text-brown-600 sm:text-4xl">
          More than a website. A place where rescue dogs are seen.
        </h2>

        {/* Mission */}
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
          <p>
            Finding a rescue dog in the UAE can be surprisingly difficult. Many
            incredible dogs are spread across different shelters, foster homes,
            Instagram pages, and adoption groups, making it easy for them to be
            overlooked.
          </p>
          <p>
            ByAstro exists to make it easier for people to discover rescue dogs
            across the UAE. Instead of searching through countless Instagram
            pages and websites, we wanted to create one place where every dog
            has the chance to be seen.
          </p>
          <p>
            Our hope is that by bringing these dogs together in one place, more
            people will discover the companion they didn't know they were
            looking for.
          </p>
        </div>

        {/* Goal callout */}
        <div className="mt-10 rounded-4xl bg-sky-baby p-7 text-brown-600 shadow-soft sm:p-9">
          <h2 className="font-hand text-2xl font-bold">Our goal is simple</h2>
          <p className="mt-3 text-ink/80">
            To help more rescue dogs find loving homes by giving them the
            visibility they deserve. Whether you're looking to adopt, foster,
            volunteer, or simply share a dog's story, every small action helps
            bring them one step closer to home.
          </p>
        </div>

        {/* In memory of Astro */}
        <div className="mt-14">
          <div className="flex items-center justify-center gap-2 text-center">
            <Heart className="h-6 w-6 text-terra-400" filled />
            <h2 className="font-hand text-3xl font-extrabold text-brown-600">
              In memory of Astro
            </h2>
            <Heart className="h-6 w-6 text-terra-400" filled />
          </div>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>This project is built with love, in memory of my dog, Astro.</p>
            <p>
              Astro was more than just a pet, he was family, my best friend, and
              a constant reminder of the joy, loyalty, and unconditional love
              that dogs bring into our lives. He had a personality too big for
              words and a way of making every ordinary day feel special.
            </p>
            <p>
              ByAstro carries his name because I wanted his legacy to be one of
              kindness and second chances. I hope that, through this project,
              more dogs are seen, more stories are shared, and more families
              find the companion they didn't know they were missing. I hope that
              every adoption, every foster, and every shared story becomes a
              small part of Astro's legacy, spreading the same joy he brought
              into my life to someone else's.
            </p>
          </div>

          <p className="mt-8 text-center font-hand text-xl font-bold text-brown-600">
            This project is dedicated to Astro, and to every rescue dog still
            waiting for their person.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link href="/dogs" className="btn-terra">
            <Paw className="h-5 w-5" />
            Meet the dogs
          </Link>
        </div>
      </div>
    </div>
  );
}
