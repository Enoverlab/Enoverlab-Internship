import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constant/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        ipad: "992px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "plus-jakarta-sans": ['"Plus Jakarta Sans", sans-serif'],
      },
      colors: {
        primary: {
          100: "#DBF5FF",
          200: "#0088FF",
          300: "#0046FF",
        },
        secondary: {
          DEFAULT: "#323232",
          100: "#C5C5C5",
        },
      },
      scale: {
        98: "0.98",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
