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
        green: "#006B61",
        green2: "rgba(0, 0, 0, 0.10)",
        dark: "rgba(8, 7, 8, 0.60)",
        orange: "#E3723B",
        orange2: "#f89360",
        yellow: "#FFC102",
        palid: "#F4E2D8",
        palid2: "rgba(243, 234, 218, 0.37)",
        palid3: "#F9F3E8",
        gray: "#6E6D7A",
        gray2: "rgba(255, 255, 255, 0.60)",
        gray3: "rgba(37, 37, 37, 0.80)",
      },
      fontFamily: {
        averia: ["Averia Libre", "cursive"],
        averiaLibre: ["Averia Serif Libre", "cursive"],
        averiaSans: ["Averia Sans Libre", "cursive"],
        rubik: ["Rubik", "sans-serif"],
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
export default config;
