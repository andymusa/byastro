// The hero illustration — three rescue dogs (fawn cocker, doberman, golden
// retriever) sitting from behind, gazing out over a quiet lake. Sourced from
// /hero-dogs.png (3:2), shown full inside a soft white frame.
import { Star } from "./icons";

export default function HeroScene() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="overflow-hidden rounded-[2.5rem] border-[6px] border-white shadow-soft">
        <div
          className="w-full"
          style={{
            aspectRatio: "3 / 2",
            backgroundImage: "url(/hero-dogs.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Three rescue dogs sitting and gazing out over a lake"
        />
      </div>

      {/* little speech tag */}
      <div className="absolute -bottom-5 left-6 max-w-[15rem] rotate-[-5deg] rounded-3xl bg-butter-200 px-5 py-2.5 shadow-soft">
        <p className="font-hand text-base font-bold leading-snug text-ink">
          Meet rescue dogs from across the UAE, all in one place. 🐾
        </p>
      </div>
      <Star className="absolute -right-2 -top-3 h-10 w-10 text-butter-300 drop-shadow" />
    </div>
  );
}
