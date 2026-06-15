"use client";

import { useEffect, useState } from "react";

const KEY = "byastro:favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setFavorites(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    const onChange = (e) => {
      if (e.detail) setFavorites(e.detail);
    };
    window.addEventListener("byastro:fav-change", onChange);
    return () => window.removeEventListener("byastro:fav-change", onChange);
  }, []);

  const toggle = (id) => {
    setFavorites((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {}
      window.dispatchEvent(
        new CustomEvent("byastro:fav-change", { detail: next })
      );
      return next;
    });
  };

  return { favorites, toggle, ready, isFavorite: (id) => favorites.includes(id) };
}
