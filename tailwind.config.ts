import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Emotion and category colours are defined in lib/utils.ts
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#fdf8f0",
          100: "#faf0e0",
          200: "#f4ddb8",
          300: "#ecc98a",
          400: "#e3b05a",
          500: "#d49737",
          600: "#b87d2a",
          700: "#956223",
          800: "#784e1f",
          900: "#62401b",
        },
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        gold: {
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
        },
      },
      fontFamily: {
        arabic: ["Amiri", "Scheherazade New", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "arabic-sm": ["1.5rem", { lineHeight: "2.5rem", letterSpacing: "0" }],
        "arabic-base": ["2rem", { lineHeight: "3.5rem", letterSpacing: "0" }],
        "arabic-lg": ["2.5rem", { lineHeight: "4rem", letterSpacing: "0" }],
        "arabic-xl": ["3rem", { lineHeight: "5rem", letterSpacing: "0" }],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(135deg, #fdf8f0 0%, #ecfdf5 50%, #fdf8f0 100%)",
        "hero-pattern-dark":
          "linear-gradient(135deg, #022c22 0%, #064e3b 50%, #022c22 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
