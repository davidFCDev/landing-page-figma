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
        orange: "#E3723B",
        orange2: "#f89360",
        yellow: "#FFC102",
        palid: "#F4E2D8",
        gray: "#6E6D7A",
        gray2: "rgba(255, 255, 255, 0.60)",
      },
      fontFamily: {
        averia: ["Averia Serif Libre", "cursive"],
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
