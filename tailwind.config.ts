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
        main: '#4E2096',
        primary: '#26203B',
        secondary: '#4D4E4E',
        stroke: '#DFE4E8',
        placeholder: '#B2B2B2',
        danger: '#E03131',
        success: '#08D58B'
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
