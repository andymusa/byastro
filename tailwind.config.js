/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFF9F2",
          100: "#FFF1E4",
          200: "#FBE6D4",
        },
        brown: {
          300: "#C8AE9F",
          400: "#B2937F",
          500: "#9E7E6B",
          600: "#876551",
        },
        terra: {
          100: "#F7DCCC",
          200: "#EFC3AC",
          300: "#E5A98E",
          400: "#D9896A",
          500: "#C5704F",
        },
        sky: {
          soft: "#DCEFF8",
          baby: "#AFDCEE",
          deep: "#79BBDA",
        },
        butter: {
          50: "#FFF8E0",
          100: "#FFEFB8",
          200: "#FFE48C",
          300: "#FBD75A",
        },
        sand: {
          100: "#F1E4CE",
          200: "#E4D2B0",
          300: "#D2B98A",
          500: "#A8895C",
        },
        ink: "#5C4A3D",
      },
      fontFamily: {
        hand: ["var(--font-hand)", "cursive"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 34px -12px rgba(140, 106, 88, 0.28)",
        cozy: "0 8px 24px -8px rgba(217, 137, 106, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        wiggle: {
          "0%,100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        drift: {
          "0%": { transform: "translateX(-10px)" },
          "100%": { transform: "translateX(40px)" },
        },
        sway: {
          "0%,100%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
        },
        peek: {
          "0%,100%": { transform: "translateY(64%)" },
          "45%,55%": { transform: "translateY(14%)" },
        },
        "bob": {
          "0%,100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-5px) rotate(2deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        wiggle: "wiggle 0.4s ease-in-out",
        float: "float 4s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite alternate",
        sway: "sway 5s ease-in-out infinite",
        peek: "peek 9s ease-in-out infinite",
        bob: "bob 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
