"use client";

import { useMemo, useState } from "react";
import { dogs } from "@/data/dogs";
import { shelters, shelterById } from "@/data/shelters";
import DogCard from "@/components/DogCard";
import { useFavorites } from "@/components/useFavorites";
import { Paw, Heart } from "@/components/icons";

const SIZES = ["small", "medium", "large"];
const AGES = ["puppy", "young", "adult", "senior"];
const GENDERS = ["Male", "Female"];
const AVAIL = [
  { key: "adoption", label: "Adoption" },
  { key: "foster", label: "Foster" },
  { key: "both", label: "Both" },
];

const LIFESTYLE = [
  { key: "goodWithKids", label: "Family dog", emoji: "🧒" },
  { key: "goodWithDogs", label: "Good with dogs", emoji: "🐕" },
  { key: "goodWithCats", label: "Good with cats", emoji: "🐱" },
];

const initial = {
  shelter: "all",
  size: "all",
  age: "all",
  gender: "all",
  avail: "all",
  lifestyle: [],
  favOnly: false,
};

export default function BrowsePage() {
  const [filters, setFilters] = useState(initial);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { favorites } = useFavorites();

  const activeCount =
    (filters.shelter !== "all" ? 1 : 0) +
    (filters.size !== "all" ? 1 : 0) +
    (filters.age !== "all" ? 1 : 0) +
    (filters.gender !== "all" ? 1 : 0) +
    (filters.avail !== "all" ? 1 : 0) +
    filters.lifestyle.length +
    (filters.favOnly ? 1 : 0);

  const set = (key, value) =>
    setFilters((f) => ({ ...f, [key]: f[key] === value ? "all" : value }));

  const toggleLifestyle = (key) =>
    setFilters((f) => ({
      ...f,
      lifestyle: f.lifestyle.includes(key)
        ? f.lifestyle.filter((k) => k !== key)
        : [...f.lifestyle, key],
    }));

  const filtered = useMemo(() => {
    return dogs.filter((d) => {
      if (filters.shelter !== "all" && d.shelterId !== filters.shelter) return false;
      if (filters.size !== "all" && d.size !== filters.size) return false;
      if (filters.age !== "all" && d.ageGroup !== filters.age) return false;
      if (filters.gender !== "all" && d.gender !== filters.gender) return false;
      if (filters.avail !== "all") {
        // "both" dogs are available for either, so they match adoption & foster too
        if (filters.avail === "both" && d.availableFor !== "both") return false;
        if (filters.avail !== "both" && d.availableFor !== filters.avail && d.availableFor !== "both")
          return false;
      }
      for (const key of filters.lifestyle) {
        if (!d[key]) return false;
      }
      if (filters.favOnly && !favorites.includes(d.id)) return false;
      return true;
    });
  }, [filters, favorites]);

  const Pill = ({ active, onClick, children }) => (
    <button
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-sm font-semibold capitalize transition ${
        active
          ? "bg-sky-deep text-white shadow-cozy"
          : "bg-white text-ink/70 hover:bg-cream-200"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="text-center">
        <h1 className="font-hand text-4xl font-extrabold text-ink sm:text-5xl">
          Meet the dogs
        </h1>
        <p className="mt-2 text-ink/70">
          Every one of them is hoping today is the day. Filter to find your match.
        </p>
      </div>

      {/* Filter toggle */}
      <div className="mt-8 flex items-center justify-between gap-3">
        <button
          onClick={() => setFiltersOpen((o) => !o)}
          className="flex items-center gap-2 rounded-full bg-cream-100 px-4 py-2 text-sm font-bold text-ink/80 transition hover:bg-cream-200"
          aria-expanded={filtersOpen}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M4 6h16M7 12h10M10 18h4" strokeLinecap="round" />
          </svg>
          {filtersOpen ? "Hide filters" : "Filter dogs"}
          {activeCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-sky-deep px-1.5 text-xs font-bold text-white">
              {activeCount}
            </span>
          )}
          <svg
            viewBox="0 0 24 24"
            className={`h-4 w-4 transition-transform ${filtersOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {activeCount > 0 && (
          <button
            onClick={() => setFilters(initial)}
            className="text-sm font-semibold text-sky-deep hover:underline"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Filters */}
      {filtersOpen && (
      <div className="mt-4 space-y-4 rounded-4xl bg-cream-100 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-20 text-sm font-bold text-sand-500">Shelter</span>
          <Pill active={filters.shelter === "all"} onClick={() => setFilters((f) => ({ ...f, shelter: "all" }))}>
            All
          </Pill>
          {shelters.map((s) => (
            <Pill key={s.id} active={filters.shelter === s.id} onClick={() => set("shelter", s.id)}>
              {s.short}
            </Pill>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="w-20 text-sm font-bold text-sand-500">Size</span>
          {SIZES.map((s) => (
            <Pill key={s} active={filters.size === s} onClick={() => set("size", s)}>
              {s}
            </Pill>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="w-20 text-sm font-bold text-sand-500">Age</span>
          {AGES.map((a) => (
            <Pill key={a} active={filters.age === a} onClick={() => set("age", a)}>
              {a}
            </Pill>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="w-20 text-sm font-bold text-sand-500">Gender</span>
          {GENDERS.map((g) => (
            <Pill key={g} active={filters.gender === g} onClick={() => set("gender", g)}>
              {g}
            </Pill>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="w-20 text-sm font-bold text-sand-500">Available</span>
          {AVAIL.map((a) => (
            <Pill key={a.key} active={filters.avail === a.key} onClick={() => set("avail", a.key)}>
              {a.label}
            </Pill>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-cream-200 pt-4">
          <span className="w-20 text-sm font-bold text-sand-500">Good with</span>
          {LIFESTYLE.map((l) => {
            const active = filters.lifestyle.includes(l.key);
            return (
              <button
                key={l.key}
                onClick={() => toggleLifestyle(l.key)}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
                  active
                    ? "bg-terra-400 text-white shadow-soft"
                    : "bg-white text-ink/70 hover:bg-cream-200"
                }`}
              >
                <span>{l.emoji}</span>
                {l.label}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-cream-200 pt-4">
          <button
            onClick={() => setFilters((f) => ({ ...f, favOnly: !f.favOnly }))}
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              filters.favOnly ? "bg-rose-100 text-rose-500" : "bg-white text-ink/70 hover:bg-cream-200"
            }`}
          >
            <Heart filled={filters.favOnly} className="h-4 w-4" />
            Favorites only{favorites.length ? ` (${favorites.length})` : ""}
          </button>
          <button
            onClick={() => setFilters(initial)}
            className="text-sm font-semibold text-sky-deep hover:underline"
          >
            Reset filters
          </button>
        </div>
      </div>
      )}

      {/* Results */}
      <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-sand-500">
        <Paw className="h-4 w-4" />
        {filtered.length} {filtered.length === 1 ? "dog" : "dogs"} found
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((dog) => (
            <DogCard key={dog.id} dog={dog} shelter={shelterById(dog.shelterId)} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-4xl bg-cream-100 p-12 text-center">
          <p className="text-5xl">🐕</p>
          <p className="mt-3 font-hand text-2xl font-bold text-ink">
            No dogs match those filters
          </p>
          <p className="mt-1 text-ink/70">
            Try loosening a filter — there's a perfect pup out there.
          </p>
          <button onClick={() => setFilters(initial)} className="btn-sun mt-5">
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
