import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        colorButton: "#f58334",
        colorText: "#0364b0",
        colorBgHero: "#eeeeee",
        colorYellow:"#ecb22d"
      },
    },
  },
  plugins: [],
};
export default config;
