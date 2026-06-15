// Little dogs that peek up from the bottom corners now and then. Decorative,
// hidden on small screens so they never crowd the content or chat widget.
function PeekDog({ flip }) {
  return (
    <svg
      viewBox="0 0 120 110"
      className="h-24 w-24 lg:h-28 lg:w-28"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      {/* tall, straight, pointed Doberman ears set close together */}
      <path d="M46 32 L50 0 L58 28 Z" fill="#6F503F" />
      <path d="M74 32 L70 0 L62 28 Z" fill="#6F503F" />
      <path d="M50 28 L52 9 L55 26 Z" fill="#D2B98A" />
      <path d="M70 28 L68 9 L65 26 Z" fill="#D2B98A" />
      {/* head: long, tapered Doberman face (dark) */}
      <path d="M60 22 C44 22 33 31 32 46 C31 55 33 63 39 70 C43 83 49 98 60 101 C71 98 77 83 81 70 C87 63 89 55 88 46 C87 31 76 22 60 22 Z" fill="#6F503F" />
      {/* tan muzzle (long snout) */}
      <path d="M47 66 C45 83 51 97 60 99 C69 97 75 83 73 66 C73 60 67 57 60 57 C53 57 47 60 47 66 Z" fill="#D2B98A" />
      {/* tan eyebrow dots — the signature Doberman markings */}
      <ellipse cx="48" cy="43" rx="4.5" ry="3.2" fill="#D2B98A" />
      <ellipse cx="72" cy="43" rx="4.5" ry="3.2" fill="#D2B98A" />
      {/* eyes */}
      <circle cx="48" cy="51" r="4.4" fill="#3D2E24" />
      <circle cx="72" cy="51" r="4.4" fill="#3D2E24" />
      <circle cx="49.6" cy="49.4" r="1.5" fill="#fff" />
      <circle cx="73.6" cy="49.4" r="1.5" fill="#fff" />
      {/* nose + smile */}
      <path d="M54 75 Q60 70 66 75 Q66 83 60 86 Q54 83 54 75 Z" fill="#3D2E24" />
      <path d="M60 86 q0 6 -7 7 M60 86 q0 6 7 7" stroke="#3D2E24" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function PeekingDogs() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 bottom-0 z-20 hidden lg:block">
      <div className="absolute bottom-0 left-6 animate-peek" style={{ animationDuration: "11s" }}>
        <PeekDog />
      </div>
      <div className="absolute bottom-0 right-40 animate-peek" style={{ animationDuration: "13s", animationDelay: "3s" }}>
        <PeekDog flip />
      </div>
    </div>
  );
}
