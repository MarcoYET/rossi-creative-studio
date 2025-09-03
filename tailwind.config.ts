// tailwind.config.js
import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: 'class', // <-- Make sure this is 'class' for next-themes
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // These already map to your CSS variables, which is correct
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        'primary-accent': 'rgb(var(--primary-accent))', // Rossi Red
        'secondary-bg': 'rgb(var(--secondary-bg))', // For section backgrounds

        // --- ADD THESE NEW ACCENT COLORS HERE ---
        'accent-pink-dark': 'rgb(var(--accent-pink-dark))',
        'accent-pink-light': 'rgb(var(--accent-pink-light))',
        // --- END ADDITION ---

        // YouMe-specific colors (if still needed, map to variables)
        'youme-green': 'rgb(var(--youme-green))',
        'youme-green-dark': 'rgb(var(--youme-green-dark))',
      },
      backgroundImage: {
        // Keep this empty if you don't use default radial/conic gradients
      },
      fontFamily: {
        'newbery': ["newbery-sans-pro", ...fontFamily.sans],
        'industry': ["industry-inc-base", ...fontFamily.sans],
        'forma': ["forma-djr-text", ...fontFamily.sans],
        'diazo': ["diazo-mvb-ex-cond", ...fontFamily.sans],
        'greycliff': ["greycliff-cf", ...fontFamily.sans],
        'obvia-wide': ["obvia-wide", ...fontFamily.sans],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'pulse-slow': 'pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // <-- Aspect ratio plugin added here
  ],
};
export default config;