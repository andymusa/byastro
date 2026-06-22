// Decorative storybook landscape for the About page — sun, clouds, a dashed
// heart trail, sage mountains, a calm lake and rolling foreground hills, framed
// by leafy plants and little flowers. Pure SVG, no image asset.
export default function AboutScene() {
  return (
    <svg
      viewBox="0 0 1000 600"
      className="mx-auto w-full max-w-2xl"
      role="img"
      aria-label="A calm illustrated landscape with a lake, hills, sun and flowers"
    >
      <defs>
        <clipPath id="scene-clip">
          <rect x="60" y="270" width="880" height="330" rx="44" />
        </clipPath>
      </defs>

      {/* Sky elements (float above the landscape) */}
      <circle cx="225" cy="120" r="48" fill="#F4A93C" />

      {/* clouds */}
      <g fill="#FFFFFF">
        <g transform="translate(250 220)">
          <ellipse cx="0" cy="0" rx="46" ry="26" />
          <ellipse cx="34" cy="6" rx="34" ry="20" />
          <ellipse cx="-30" cy="6" rx="30" ry="18" />
        </g>
        <g transform="translate(660 150)">
          <ellipse cx="0" cy="0" rx="52" ry="28" />
          <ellipse cx="40" cy="6" rx="36" ry="21" />
          <ellipse cx="-36" cy="7" rx="32" ry="19" />
        </g>
      </g>

      {/* stars */}
      <path
        d="M812 118l7 15 16 1.6-12 11 3.4 16-14.4-8-14.4 8 3.4-16-12-11 16-1.6z"
        fill="#FBD75A"
      />
      <path
        d="M905 250l5 11 12 1.2-9 8 2.5 12-10.5-6-10.5 6 2.5-12-9-8 12-1.2z"
        fill="#FBD75A"
      />

      {/* dashed heart trail */}
      <path
        d="M715 235c80-46 150 6 95 58-30 28-78 40-95 58-17-18-65-30-95-58-55-52 15-104 95-58z"
        fill="none"
        stroke="#D2B98A"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="2 16"
      />

      {/* little daisy floating left */}
      <g transform="translate(120 215)">
        <path d="M0 0 C2 26 4 44 8 70" fill="none" stroke="#6E7E3F" strokeWidth="3.5" strokeLinecap="round" />
        <g fill="#FFFFFF">
          <ellipse cx="0" cy="-9" rx="5" ry="9" />
          <ellipse cx="0" cy="9" rx="5" ry="9" />
          <ellipse cx="-9" cy="0" rx="9" ry="5" />
          <ellipse cx="9" cy="0" rx="9" ry="5" />
        </g>
        <circle cx="0" cy="0" r="5" fill="#FBD75A" />
      </g>

      {/* ---- The landscape ---- */}
      <g clipPath="url(#scene-clip)">
        {/* back mountains */}
        <path d="M60 470 L60 400 C160 320 250 360 340 350 C470 335 560 300 700 340 C800 368 880 348 940 388 L940 470 Z" fill="#B6C091" />
        <path d="M60 470 L60 425 C150 372 260 392 380 372 C520 348 640 392 760 372 C840 358 900 392 940 408 L940 470 Z" fill="#9DAE72" />

        {/* lake */}
        <rect x="60" y="430" width="880" height="70" fill="#AFDCEE" />
        <g stroke="#CDEAF5" strokeWidth="3" strokeLinecap="round" opacity="0.8">
          <path d="M180 452 q26 -7 52 0 t52 0" fill="none" />
          <path d="M520 446 q26 -7 52 0 t52 0" fill="none" />
          <path d="M300 470 q24 -6 48 0 t48 0" fill="none" />
          <path d="M640 472 q24 -6 48 0 t48 0" fill="none" />
        </g>

        {/* foreground hills */}
        <path d="M60 600 L60 478 C180 452 300 512 440 500 C560 490 640 460 760 484 C840 500 900 470 940 486 L940 600 Z" fill="#94A45C" />
        <path d="M60 600 L60 520 C200 498 320 548 480 534 C620 522 720 500 940 528 L940 600 Z" fill="#7F9049" />

        {/* grass tufts */}
        <g stroke="#5E6B36" strokeWidth="3.5" strokeLinecap="round" fill="none">
          <path d="M250 540 q-4 -16 -10 -22 M250 540 q0 -18 0 -24 M250 540 q4 -16 10 -22" />
          <path d="M600 528 q-4 -16 -10 -22 M600 528 q0 -18 0 -24 M600 528 q4 -16 10 -22" />
          <path d="M760 548 q-4 -16 -10 -22 M760 548 q0 -18 0 -24 M760 548 q4 -16 10 -22" />
        </g>

        {/* foreground flowers inside the scene */}
        <g transform="translate(185 540)">
          <path d="M0 0 C-2 24 0 40 2 60" fill="none" stroke="#5E6B36" strokeWidth="4" strokeLinecap="round" />
          <g fill="#FBD75A">
            <ellipse cx="0" cy="-10" rx="6" ry="10" />
            <ellipse cx="0" cy="10" rx="6" ry="10" />
            <ellipse cx="-10" cy="0" rx="10" ry="6" />
            <ellipse cx="10" cy="0" rx="10" ry="6" />
          </g>
          <circle cx="0" cy="0" r="6" fill="#F4A93C" />
        </g>
        <g transform="translate(235 558)">
          <path d="M0 0 C-1 16 0 28 1 42" fill="none" stroke="#5E6B36" strokeWidth="3.5" strokeLinecap="round" />
          <g fill="#FFFFFF">
            <ellipse cx="0" cy="-7" rx="4.5" ry="7.5" />
            <ellipse cx="0" cy="7" rx="4.5" ry="7.5" />
            <ellipse cx="-7" cy="0" rx="7.5" ry="4.5" />
            <ellipse cx="7" cy="0" rx="7.5" ry="4.5" />
          </g>
          <circle cx="0" cy="0" r="4.5" fill="#FBD75A" />
        </g>
        <g transform="translate(810 532)">
          <path d="M0 0 C2 24 0 40 -2 60" fill="none" stroke="#5E6B36" strokeWidth="4" strokeLinecap="round" />
          <g fill="#FBD75A">
            <ellipse cx="0" cy="-10" rx="6" ry="10" />
            <ellipse cx="0" cy="10" rx="6" ry="10" />
            <ellipse cx="-10" cy="0" rx="10" ry="6" />
            <ellipse cx="10" cy="0" rx="10" ry="6" />
          </g>
          <circle cx="0" cy="0" r="6" fill="#F4A93C" />
        </g>
      </g>

      {/* Astro, sitting in the middle of the meadow */}
      <g clipPath="url(#scene-clip)">
        <ellipse cx="500" cy="582" rx="115" ry="17" fill="#3F4A22" opacity="0.18" />
        <image
          href="/astro-cutout.png"
          x="402"
          y="322"
          width="196"
          height="268"
          preserveAspectRatio="xMidYMax meet"
        />
      </g>

      {/* framing plants (drawn over the clipped scene edges) */}
      <g transform="translate(120 290)">
        <path d="M0 250 C-8 170 -4 90 6 16" fill="none" stroke="#5E6B36" strokeWidth="6" strokeLinecap="round" />
        <g fill="#6E8142">
          <ellipse cx="-22" cy="60" rx="22" ry="11" transform="rotate(-28 -22 60)" />
          <ellipse cx="26" cy="100" rx="22" ry="11" transform="rotate(24 26 100)" />
          <ellipse cx="-20" cy="140" rx="20" ry="10" transform="rotate(-26 -20 140)" />
          <ellipse cx="22" cy="180" rx="20" ry="10" transform="rotate(22 22 180)" />
        </g>
        <g fill="#7E9450">
          <ellipse cx="6" cy="6" rx="16" ry="9" transform="rotate(-6 6 6)" />
        </g>
      </g>

      <g transform="translate(880 290)">
        <path d="M0 250 C8 170 4 90 -6 16" fill="none" stroke="#5E6B36" strokeWidth="6" strokeLinecap="round" />
        <g fill="#6E8142">
          <ellipse cx="22" cy="60" rx="22" ry="11" transform="rotate(28 22 60)" />
          <ellipse cx="-26" cy="100" rx="22" ry="11" transform="rotate(-24 -26 100)" />
          <ellipse cx="20" cy="140" rx="20" ry="10" transform="rotate(26 20 140)" />
          <ellipse cx="-22" cy="180" rx="20" ry="10" transform="rotate(-22 -22 180)" />
        </g>
        <g fill="#7E9450">
          <ellipse cx="-6" cy="6" rx="16" ry="9" transform="rotate(6 -6 6)" />
        </g>
      </g>
    </svg>
  );
}
