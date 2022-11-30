const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "648px" },
        tablet: { min: "768px", max: "1024px" },
      },

      colors:
        /* Object */
        {
          primary: "#0077B6",
        },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode:"class"
};
