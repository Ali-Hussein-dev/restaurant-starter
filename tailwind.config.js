const themesConfigs = require("./src/utils/themes-configs");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: themesConfigs,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animated"),
    require("daisyui"),
  ],
};
