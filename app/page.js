import Link from "next/link";
import { dogs, dogsByWaiting } from "@/data/dogs";
import { shelters, shelterById } from "@/data/shelters";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import HeroScene from "@/components/HeroScene";
import ScrollPaws from "@/components/ScrollPaws";
import DogCard from "@/components/DogCard";
import { Star, Paw, Heart, Clock } from "@/components/icons";

const featured = dogs.slice(0, 8).map((dog) => ({
  dog,
  shelter: shelterById(dog.shelterId),
}));

const stillWaiting = dogsByWaiting.slice(0, 4);

const steps = [
  {
    title: "Meet them",
    emoji: "🐶",
    text: "Somewhere among these faces is a dog who's been waiting for you all along.",
  },
  {
    title: "Say hello",
    emoji: "💬",
    text: "Reach their shelter directly — a quick WhatsApp, email or Instagram message is all it takes.",
  },
  {
    title: "Take them home",
    emoji: "🏡",
    text: "Adopt or foster, and give a waiting dog the one thing they've dreamed of: a family.",
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      <ScrollPaws />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="paw-bg absolute inset-0 opacity-50" />
        <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-butter-100 blur-3xl opacity-50" />
        <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-sky-soft blur-3xl opacity-60" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
          <div className="animate-fade-up">
            <h1 className="font-hand text-4xl font-extrabold leading-[1.1] text-brown-600 sm:text-5xl md:text-[3.4rem]">
              Some hearts are still waiting to be chosen.
            </h1>
            <p className="mt-5 max-w-md text-lg text-ink/75">
              Meet rescue dogs across the UAE and help write the next chapter of
              their story through adoption or fostering.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/dogs" className="btn-terra">
                Meet them
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="#still-waiting" className="btn-ghost">
                <Heart className="h-5 w-5 text-sky-deep" filled />
                See who's waiting longest
              </Link>
            </div>
          </div>

          <div className="animate-fade-up">
            <HeroScene />
          </div>
        </div>
      </section>

      {/* Still Waiting */}
      <section id="still-waiting" className="relative overflow-hidden bg-terra-100/60 py-16">
        <div className="cozy-wash absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <span className="chip bg-white text-terra-500">
              <Clock className="h-3.5 w-3.5" /> Dogs waiting the longest
            </span>
            <h2 className="mt-4 font-hand text-4xl font-extrabold text-brown-600 sm:text-5xl">
              The Ones Who Need You Most
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink/75">
              They've watched friends leave for their forever homes while they
              continue to wait. Their turn is coming. Maybe with you.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stillWaiting.map((dog) => (
              <DogCard key={dog.id} dog={dog} shelter={shelterById(dog.shelterId)} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/dogs" className="btn-terra">
              Give one a chance →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="font-hand text-3xl font-extrabold text-brown-600 sm:text-4xl">
            How a happy ending happens
          </h2>
          <p className="mt-2 text-ink/70">Three little steps to a wagging tail.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="card p-7 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-sky-soft text-3xl animate-float" style={{ animationDelay: `${i * 0.4}s` }}>
                {s.emoji}
              </div>
              <p className="mt-4 font-hand text-sm font-bold uppercase tracking-wide text-terra-400">
                Step {i + 1}
              </p>
              <h3 className="font-hand text-2xl font-bold text-brown-600">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured dogs */}
      <section className="bg-cream-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-end gap-4">
            <Link href="/dogs" className="hidden btn-sun sm:inline-flex">
              See all dogs
            </Link>
          </div>
          <div className="mt-8">
            <FeaturedCarousel items={featured} />
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link href="/dogs" className="btn-sun">
              See all dogs
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 rounded-4xl bg-sky-baby p-8 text-center text-brown-600 sm:grid-cols-3 sm:p-10">
          {[
            { n: "200+", l: "dogs hoping for a home" },
            { n: "4", l: "UAE shelters & rescues" },
            { n: "100%", l: "good boys and girls" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-hand text-5xl font-extrabold">{s.n}</p>
              <p className="mt-1 text-sm font-semibold text-brown-600/80">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shelters */}
      <section id="shelters" className="bg-cream-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-hand text-3xl font-extrabold text-brown-600 sm:text-4xl">
              The kind humans behind the dogs
            </h2>
            <p className="mt-2 text-ink/70">
              Our partner shelters, caring for these pups every single day.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shelters.map((s) => (
              <div key={s.id} className="card flex flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-butter-100 text-3xl">
                    {s.emoji}
                  </span>
                  <div>
                    <h3 className="font-hand text-xl font-bold leading-tight text-brown-600">
                      {s.name}
                    </h3>
                    <p className="text-xs font-semibold text-terra-400">
                      {s.location}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-ink/70">{s.blurb}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <a
                    href={s.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-butter-100 px-3.5 py-1.5 text-sm font-semibold text-brown-600 transition hover:bg-butter-200"
                  >
                    <span>📸</span> Instagram
                  </a>
                  <a
                    href={`tel:${s.phone}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-sky-soft px-3.5 py-1.5 text-sm font-semibold text-sky-deep transition hover:bg-sky-baby"
                  >
                    <span>📞</span> {s.phoneLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-4xl bg-butter-200 p-10 text-center shadow-soft">
          <Star className="absolute left-6 top-6 h-8 w-8 text-white/70" />
          <Star className="absolute bottom-6 right-8 h-6 w-6 text-white/70" />
          <h2 className="font-hand text-3xl font-extrabold text-brown-600 sm:text-4xl">
            Somewhere, a dog is dreaming of you
          </h2>
          <p className="mx-auto mt-3 max-w-md text-ink/75">
            Go and meet them. Your story together is just one click away.
          </p>
          <Link href="/dogs" className="btn-terra mt-6">
            <Paw className="h-5 w-5" />
            Meet the dogs
          </Link>
        </div>
      </section>
    </div>
  );
}
