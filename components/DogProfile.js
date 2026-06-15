"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DogCard from "./DogCard";
import ContactModal from "./ContactModal";
import Lightbox from "./Lightbox";
import { useFavorites } from "./useFavorites";
import { Heart, Star, Paw, Clock } from "./icons";

function Detail({ label, value, ok }) {
  return (
    <div className="rounded-3xl bg-cream-100 px-4 py-3 text-center">
      <p className="text-xs font-semibold uppercase tracking-wide text-sand-500">
        {label}
      </p>
      <p
        className={`mt-1 font-hand text-lg font-bold ${
          ok === false ? "text-ink/40" : "text-ink"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function shelterTimeLong(months) {
  if (months >= 12) {
    const years = Math.floor(months / 12);
    const rem = months % 12;
    return `${years} year${years > 1 ? "s" : ""}${rem ? ` ${rem} month${rem > 1 ? "s" : ""}` : ""}`;
  }
  return `${months} month${months > 1 ? "s" : ""}`;
}

export default function DogProfile({ dog, shelter, related }) {
  const [active, setActive] = useState(0);
  const [modal, setModal] = useState(null);
  const [lightbox, setLightbox] = useState(false);
  const { isFavorite, toggle, ready } = useFavorites();
  const fav = ready && isFavorite(dog.id);

  const canAdopt = dog.availableFor === "adoption" || dog.availableFor === "both";
  const canFoster = dog.availableFor === "foster" || dog.availableFor === "both";

  const meta = [dog.breed, dog.ageLabel, dog.gender].filter(Boolean).join(" · ");
  const knownTime = dog.monthsInShelter != null;
  // triState: true -> yes, false -> no, null/undefined -> ask the shelter
  const triState = (v, yes, no) => (v == null ? "Ask shelter" : v ? yes : no);

  // years*… progress bar capped at 24 months for the "time waiting" visual
  const pct = Math.min(100, Math.round(((dog.monthsInShelter ?? 0) / 24) * 100));

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Link
        href="/dogs"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-deep hover:underline"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to all dogs
      </Link>

      <div className="mt-5 grid gap-8 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-4xl border-8 border-white shadow-soft">
            <Image
              src={dog.photos[active]}
              alt={`${dog.name} photo ${active + 1}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              onClick={() => setLightbox(true)}
              className="cursor-zoom-in object-cover"
            />
            <button
              onClick={() => toggle(dog.id)}
              aria-label={fav ? "Remove from favorites" : "Add to favorites"}
              className={`absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-soft transition active:scale-90 ${
                fav ? "text-rose-400 animate-wiggle" : "text-sand-300 hover:text-rose-300"
              }`}
            >
              <Heart filled={fav} className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-3 flex gap-3">
            {dog.photos.map((p, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative aspect-square w-1/4 overflow-hidden rounded-2xl border-4 transition ${
                  active === i ? "border-sky-baby" : "border-white opacity-80 hover:opacity-100"
                }`}
              >
                <Image src={p} alt={`${dog.name} thumbnail ${i + 1}`} fill sizes="20vw" className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip bg-sky-soft text-sky-deep capitalize">
              {dog.availableFor === "both" ? "Adopt or Foster" : `For ${dog.availableFor}`}
            </span>
            {dog.monthsInShelter >= 12 && (
              <span className="chip bg-butter-200 text-ink">
                <Clock className="h-3.5 w-3.5" /> Waiting a long time
              </span>
            )}
          </div>

          <h1 className="mt-3 font-hand text-5xl font-extrabold text-ink">
            {dog.name}
          </h1>
          <p className="mt-1 text-lg text-ink/70">
            {meta || "Contact shelter for details"}
          </p>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <Detail label="Size" value={dog.sizeLabel || dog.size || "Ask shelter"} ok={dog.sizeLabel || dog.size ? undefined : false} />
            <Detail label="Weight" value={dog.weight || "Ask shelter"} ok={dog.weight ? undefined : false} />
            <Detail label="Age" value={dog.ageLabel || "Ask shelter"} ok={dog.ageLabel ? undefined : false} />
          </div>

          {/* About me */}
          <div className="mt-6 rounded-4xl bg-butter-50 p-6">
            <h2 className="flex items-center gap-2 font-hand text-2xl font-bold text-ink">
              <Paw className="h-5 w-5 text-sky-deep" /> About me
            </h2>
            <p className="mt-2 italic leading-relaxed text-ink/80">
              “{dog.personality}”
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {dog.traits.map((t) => (
                <span key={t} className="chip">
                  <Star className="h-3 w-3 text-butter-300" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Storybook: favorite things */}
          {dog.favoriteThings && (
            <div className="mt-5 rounded-4xl bg-sky-soft/60 p-6">
              <h2 className="flex items-center gap-2 font-hand text-2xl font-bold text-brown-600">
                💛 A few of my favourite things
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {dog.favoriteThings.map((f) => (
                  <span key={f} className="rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-brown-500 shadow-soft">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key details */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Detail label="Vaccinated" value={triState(dog.vaccinated, "Yes ✅", "In progress")} ok={dog.vaccinated} />
            <Detail label="Spayed / Neutered" value={triState(dog.neutered, "Yes ✅", "Not yet")} ok={dog.neutered} />
            <Detail label="Good with kids" value={triState(dog.goodWithKids, "Yes 🧒", "Better solo")} ok={dog.goodWithKids} />
            <Detail label="Good with dogs" value={triState(dog.goodWithDogs, "Yes 🐕", "Only pet, please")} ok={dog.goodWithDogs} />
            <Detail label="Good with cats" value={triState(dog.goodWithCats, "Yes 🐱", "Better without")} ok={dog.goodWithCats} />
          </div>

          {/* Time in shelter */}
          {knownTime && (
            <div className="mt-5 rounded-4xl bg-cream-100 p-5">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2 font-semibold text-ink">
                  <Clock className="h-5 w-5 text-sky-deep" />
                  Waiting for a home
                </p>
                <p className="font-hand text-lg font-bold text-sky-deep">
                  {shelterTimeLong(dog.monthsInShelter)}
                </p>
              </div>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-white">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-baby to-butter-300"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-ink/60">
                {dog.name} has been hoping for a family for {shelterTimeLong(dog.monthsInShelter)}. Could it be you?
              </p>
            </div>
          )}

          {/* Shelter */}
          <Link
            href="/#shelters"
            className="mt-5 flex items-center gap-3 rounded-4xl bg-white p-5 shadow-soft transition hover:shadow-cozy"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-butter-100 text-2xl">
              {shelter.emoji}
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-sand-500">
                Cared for at
              </p>
              <p className="font-hand text-lg font-bold text-ink">{shelter.name}</p>
              <p className="text-sm text-ink/60">{shelter.location}</p>
            </div>
          </Link>

          {/* CTAs */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {canAdopt && (
              <button onClick={() => setModal("adopt")} className="btn-primary flex-1">
                <Heart className="h-5 w-5" filled /> Adopt me
              </button>
            )}
            {canFoster && (
              <button onClick={() => setModal("foster")} className="btn-sun flex-1">
                <Paw className="h-5 w-5" /> Foster me
              </button>
            )}
          </div>
        </div>
      </div>

      {/* More from this shelter */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-hand text-3xl font-extrabold text-ink">
            More dogs from {shelter.short}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((d) => (
              <DogCard key={d.id} dog={d} shelter={shelter} />
            ))}
          </div>
        </section>
      )}

      {modal && (
        <ContactModal dog={dog} shelter={shelter} mode={modal} onClose={() => setModal(null)} />
      )}

      {lightbox && (
        <Lightbox
          photos={dog.photos}
          index={active}
          alt={dog.name}
          onClose={() => setLightbox(false)}
        />
      )}
    </div>
  );
}
