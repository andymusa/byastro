import Link from "next/link";
import { Paw } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-7xl">🐕‍🦺</p>
      <h1 className="mt-4 font-hand text-4xl font-extrabold text-ink">
        Hmm, this trail went cold
      </h1>
      <p className="mt-2 text-ink/70">
        We sniffed around but couldn't find that page. Let's get you back to the
        good dogs.
      </p>
      <Link href="/dogs" className="btn-primary mt-6">
        <Paw className="h-5 w-5" /> Browse the dogs
      </Link>
    </div>
  );
}
