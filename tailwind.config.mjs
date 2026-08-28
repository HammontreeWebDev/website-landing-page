/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        /* Dev brand — Hammontree Full-Stack Solutions */
        canvas: "#0D1A1C",
        "canvas-deep": "#081214",
        cyan: "#00F2FE",
        accent: "#FF6500",
        teal: "#30B8BF",
        copper: "#AA6639",
        slate: "#407C80",

        /* Music brand — Velvet Stage */
        "music-canvas": "#140818",
        "music-wine": "#1A0A1E",
        amethyst: "#9B5DE5",
        bubblegum: "#F15BB5",
        "golden-hour": "#FFB347",
        "lemon-zest": "#FEE440",
        "cream-spot": "#FFF5E6",
      },
      fontFamily: {
        "music-display": ["var(--font-music-display)"],
        "music-body": ["var(--font-music-body)"],
        "dev-display": ["var(--font-dev-display)"],
        "dev-body": ["var(--font-dev-body)"],
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "spin-slow": "spin 20s linear infinite",
        "pulse-soft": "pulse-glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
