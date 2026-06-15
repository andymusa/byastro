"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Clock, Star } from "./icons";
import { useFavorites } from "./useFavorites";
import Lightbox from "./Lightbox";

function shelterTime(months) {
  if (months >= 12) {
    const years = Math.floor(months / 12);
    const rem = months % 12;
    if (rem === 0) return `In shelter ${years} year${years > 1 ? "s" : ""}`;
    return `In shelter ${years}y ${rem}m`;
  }
  return `In shelter ${months} month${months > 1 ? "s" : ""}`;
}

const availLabel = {
  adoption: "Adopt",
  foster: "Foster",
  both: "Adopt or Foster",
};

export default function DogCard({ dog, shelter }) {
  const { isFavorite, toggle, ready } = useFavorites();
  const [lightbox, setLightbox] = useState(false);
  const fav = ready && isFavorite(dog.id);
  const knownTime = dog.monthsInShelter != null;
  const urgent = knownTime && dog.monthsInShelter >= 12;
  const meta = [dog.breed, dog.ageLabel, dog.gender].filter(Boolean).join(" · ");

  return (
    <div className="card group relative flex flex-col overflow-hidden">
      <button
        onClick={(e) => {
          e.preventDefault();
          toggle(dog.id);
        }}
        aria-label={fav ? "Remove from favorites" : "Add to favorites"}
        className={`absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-soft transition active:scale-90 ${
          fav ? "text-rose-400 animate-wiggle" : "text-sand-300 hover:text-rose-300"
        }`}
      >
        <Heart filled={fav} className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={() => setLightbox(true)}
        aria-label={`View photo of ${dog.name}`}
        className="block w-full cursor-zoom-in"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={dog.photos[0]}
            alt={dog.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          {knownTime && (
            <span
              className={`absolute bottom-3 left-3 flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold shadow-soft ${
                urgent
                  ? "bg-butter-300 text-ink"
                  : "bg-white/90 text-sand-500"
              }`}
            >
              <Clock className="h-3.5 w-3.5" />
              {shelterTime(dog.monthsInShelter)}
            </span>
          )}
        </div>
      </button>

      {lightbox && (
        <Lightbox
          photos={dog.photos}
          alt={dog.name}
          onClose={() => setLightbox(false)}
        />
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <Link href={`/dogs/${dog.id}`}>
            <h3 className="font-hand text-2xl font-bold text-ink hover:text-terra-500">
              {dog.name}
            </h3>
          </Link>
          <span className="chip">{availLabel[dog.availableFor]}</span>
        </div>
        <p className="mt-1 text-sm text-ink/70">
          {meta || "Contact shelter for details"}
        </p>

        {dog.quirkyHabit && (
          <p className="mt-3 line-clamp-2 text-sm italic text-brown-500">
            “{dog.quirkyHabit}”
          </p>
        )}

        {shelter && (
          <p className="mt-3 flex items-center gap-1 text-xs text-sand-500">
            <Star className="h-3 w-3 text-butter-300" />
            {shelter.short} · {shelter.location}
          </p>
        )}

        <Link href={`/dogs/${dog.id}`} className="btn-ghost mt-4 w-full text-sm">
          Meet {dog.name}
        </Link>
      </div>
    </div>
  );
}
