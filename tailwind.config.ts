import type { Config } from "tailwindcss";

/**
 * Tailwind v4 primarily reads theme tokens from `app/globals.css` (`@theme`).
 * This file documents and mirrors `sm-*` colors for tooling/IDE hints.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sm-teal": "#1E5AA5",
        "sm-teal-dark": "#163F78",
        "sm-teal-light": "#D6E8FF",
        "sm-orange": "#E52D1E",
        "sm-orange-dark": "#C21E11",
        "sm-orange-light": "#FFF0EE",
        "sm-green": "#5A8730",
        "sm-green-dark": "#447020",
        "sm-green-light": "#EBF5D6",
        "sm-dark": "#0B1628",
        "sm-darker": "#060D1F",
        "sm-off-white": "#F5F9FF",
        "sm-gray-50": "#F8FAFC",
        "sm-gray-100": "#F1F5F9",
        "sm-gray-200": "#E2E8F0",
        "sm-gray-300": "#CBD5E1",
        "sm-gray-400": "#94A3B8",
        "sm-gray-500": "#64748B",
        "sm-gray-600": "#475569",
        "sm-gray-700": "#334155",
        "sm-gray-800": "#1E293B",
        "sm-gray-900": "#0F172A",
        "sm-gold": "#D4A017",
      },
    },
  },
  plugins: [],
};

export default config;
