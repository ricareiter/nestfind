import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkBlue: "hsl(227, 100, 8)",
        blueBlack: "hsl(245, 79, 19)",
        lightPurple: "hsl(245, 82, 67)",
        lighterPurple: "hsl(245, 61, 92)",
        lightGray: "hsl(245, 60, 98)",
      },
    },
  },
  plugins: [],
};
export default config;
