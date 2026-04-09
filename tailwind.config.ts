import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#F4F0FB",
          200: "#C4B3EE",
          400: "#9370D8",
          600: "#6A45B0",
          800: "#3D2580",
        },
        taupe: {
          50: "#F5F2EE",
          100: "#E8E2DA",
          200: "#D2C8BC",
          400: "#A89880",
          600: "#7D6B58",
          800: "#4A3D30",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
