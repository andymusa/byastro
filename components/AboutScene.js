// Decorative storybook landscape for the About page — sun, clouds, sage
// mountains, a calm lake and rolling foreground hills, framed by leafy plants
// and little flowers, with Astro standing at the right edge. Pure SVG.
export default function AboutScene() {
  return (
    <svg
      viewBox="0 0 1000 350"
      className="mx-auto w-full max-w-3xl"
      role="img"
      aria-label="A calm illustrated landscape with a lake, hills, sun and Astro the dog"
    >
      <defs>
        <clipPath id="scene-clip">
          <rect x="40" y="150" width="920" height="200" rx="36" />
        </clipPath>
      </defs>

      {/* Sky elements */}
      <circle cx="205" cy="66" r="36" fill="#F4A93C" />

      <g fill="#FFFFFF">
        <g transform="translate(240 96)">
          <ellipse cx="0" cy="0" rx="40" ry="21" />
          <ellipse cx="30" cy="5" rx="29" ry="17" />
          <ellipse cx="-26" cy="5" rx="25" ry="15" />
        </g>
        <g transform="translate(645 62)">
          <ellipse cx="0" cy="0" rx="46" ry="23" />
          <ellipse cx="34" cy="5" rx="31" ry="18" />
          <ellipse cx="-30" cy="6" rx="27" ry="16" />
        </g>
      </g>

      {/* stars */}
      <g transform="translate(4 -78)">
        <path d="M812 118l7 15 16 1.6-12 11 3.4 16-14.4-8-14.4 8 3.4-16-12-11 16-1.6z" fill="#FBD75A" />
      </g>
      <g transform="translate(0 -146)">
        <path d="M905 250l5 11 12 1.2-9 8 2.5 12-10.5-6-10.5 6 2.5-12-9-8 12-1.2z" fill="#FBD75A" />
      </g>

      {/* little daisy floating left */}
      <g transform="translate(118 108)">
        <path d="M0 0 C2 20 4 34 7 52" fill="none" stroke="#6E7E3F" strokeWidth="3.2" strokeLinecap="round" />
        <g fill="#FFFFFF">
          <ellipse cx="0" cy="-8" rx="4.5" ry="8" />
          <ellipse cx="0" cy="8" rx="4.5" ry="8" />
          <ellipse cx="-8" cy="0" rx="8" ry="4.5" />
          <ellipse cx="8" cy="0" rx="8" ry="4.5" />
        </g>
        <circle cx="0" cy="0" r="4.5" fill="#FBD75A" />
      </g>

      {/* ---- The landscape ---- */}
      <g clipPath="url(#scene-clip)">
        {/* back mountains */}
        <path d="M40 262 L40 204 C160 172 250 190 340 185 C470 179 560 166 700 185 C800 197 880 188 960 204 L960 262 Z" fill="#B6C091" />
        <path d="M40 262 L40 218 C150 192 260 200 380 191 C520 180 640 200 760 191 C840 185 900 200 960 210 L960 262 Z" fill="#9DAE72" />

        {/* lake */}
        <rect x="40" y="246" width="920" height="42" fill="#AFDCEE" />
        <g stroke="#CDEAF5" strokeWidth="2.5" strokeLinecap="round" opacity="0.8">
          <path d="M150 260 q24 -5 48 0 t48 0" fill="none" />
          <path d="M460 256 q24 -5 48 0 t48 0" fill="none" />
          <path d="M250 276 q22 -5 44 0 t44 0" fill="none" />
        </g>

        {/* foreground hills */}
        <path d="M40 350 L40 274 C180 262 300 290 440 284 C560 279 640 266 760 277 C840 285 900 270 960 279 L960 350 Z" fill="#94A45C" />
        <path d="M40 350 L40 300 C200 289 320 311 480 305 C620 300 720 287 960 300 L960 350 Z" fill="#7F9049" />

        {/* grass tufts */}
        <g stroke="#5E6B36" strokeWidth="3" strokeLinecap="round" fill="none">
          <path d="M250 320 q-4 -14 -9 -19 M250 320 q0 -16 0 -21 M250 320 q4 -14 9 -19" />
          <path d="M450 316 q-4 -14 -9 -19 M450 316 q0 -16 0 -21 M450 316 q4 -14 9 -19" />
        </g>

        {/* foreground flowers (left side, away from Astro) */}
        <g transform="translate(170 322)">
          <path d="M0 0 C-2 18 0 30 2 44" fill="none" stroke="#5E6B36" strokeWidth="3.5" strokeLinecap="round" />
          <g fill="#FBD75A">
            <ellipse cx="0" cy="-8" rx="5" ry="8.5" />
            <ellipse cx="0" cy="8" rx="5" ry="8.5" />
            <ellipse cx="-8" cy="0" rx="8.5" ry="5" />
            <ellipse cx="8" cy="0" rx="8.5" ry="5" />
          </g>
          <circle cx="0" cy="0" r="5" fill="#F4A93C" />
        </g>
        <g transform="translate(213 334)">
          <path d="M0 0 C-1 12 0 20 1 32" fill="none" stroke="#5E6B36" strokeWidth="3" strokeLinecap="round" />
          <g fill="#FFFFFF">
            <ellipse cx="0" cy="-6" rx="4" ry="6.5" />
            <ellipse cx="0" cy="6" rx="4" ry="6.5" />
            <ellipse cx="-6" cy="0" rx="6.5" ry="4" />
            <ellipse cx="6" cy="0" rx="6.5" ry="4" />
          </g>
          <circle cx="0" cy="0" r="4" fill="#FBD75A" />
        </g>
      </g>

      {/* framing plants (drawn over the clipped scene edges) */}
      <g transform="translate(108 152)">
        <path d="M0 196 C-7 138 -3 70 5 12" fill="none" stroke="#5E6B36" strokeWidth="5.5" strokeLinecap="round" />
        <g fill="#6E8142">
          <ellipse cx="-20" cy="46" rx="20" ry="10" transform="rotate(-28 -20 46)" />
          <ellipse cx="24" cy="80" rx="20" ry="10" transform="rotate(24 24 80)" />
          <ellipse cx="-18" cy="112" rx="18" ry="9" transform="rotate(-26 -18 112)" />
          <ellipse cx="20" cy="142" rx="18" ry="9" transform="rotate(22 20 142)" />
        </g>
        <g fill="#7E9450">
          <ellipse cx="5" cy="4" rx="14" ry="8" transform="rotate(-6 5 4)" />
        </g>
      </g>

      {/* Astro standing at the right edge of the meadow */}
      <g clipPath="url(#scene-clip)">
        <ellipse cx="862" cy="348" rx="108" ry="12" fill="#3F4A22" opacity="0.18" />
        <image
          href="/astro-right.png"
          x="752"
          y="150"
          width="216"
          height="200"
          preserveAspectRatio="xMaxYMax meet"
        />
      </g>
    </svg>
  );
}
