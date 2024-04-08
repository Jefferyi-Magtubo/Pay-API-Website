import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "darkPink" : "#ba4270",
        "linkWaterWhite" : "#fbfcefe",
        "sanJuanBlue" : "#36536b",
        "mirageBlue" : "#1b262f",
        "charmPink" : "#da6d97",
        "lightSanJuanBlue" : "#6c8294"
      },
      fontFamily: {
        'athl' : ["Atkinson Hyperlegible", "sans-serif"]
      },
      screens: {
        'xs' : '320px',
        'smh' : '400px'
      },
      fontSize: {
        'xxs' : '.5rem'
      },
      width: {
        '45%': '45%',
        '32%': '32%'
      },
    },
  },
  plugins: [],
};
export default config;
