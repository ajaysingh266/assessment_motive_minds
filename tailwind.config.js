/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      default: ["'Manrope', sans-serif"],
      lead: ["'Domine', serif"],
    },
    container: {
      center: true,
    },
    extend: {
      minHeight: {
        40: "5rem",
      },
      aspectRatio: {
        h: "1",
        w: "1",
        1: "1",
      },
      fontWeight: {
        400: 400,
        500: 500,
        600: 600,
        700: 700,
      },
      colors: {
        primary: {
          DEFAULT: "#004239",
        },
        secondary: {
          DEFAULT: "#f1f2f3",
        },
        text: {
          DEFAULT: "#34373c",
        },
        theme: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
    },
  },
  plugins: [],
};
