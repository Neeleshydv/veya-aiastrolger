import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: "#06060c",
          900: "#0b0b16",
          850: "#101020",
          800: "#16162d",
          700: "#222245",
          600: "#323260",
          500: "#494982",
        },
        celestial: {
          gold: "#f59e0b",
          amber: "#fbbf24",
          light: "#fef3c7",
          purple: "#8b5cf6",
          violet: "#7c3aed",
          indigo: "#6366f1",
          rose: "#f43f5e",
          cyan: "#38bdf8",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at center, var(--tw-gradient-stops))",
        "nebula-glow": "radial-gradient(ellipse at top, rgba(124, 58, 237, 0.15), transparent 70%), radial-gradient(ellipse at bottom, rgba(245, 158, 11, 0.1), transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
