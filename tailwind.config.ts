import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        accent: "#ED3C6A", // button color
      },
      screens: {
        xl2: "1440px",
      },

      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"], // Use the DM Sans font with a fallback to sans-serif
      },
    },
  },
  plugins: [],
};

export default config;
