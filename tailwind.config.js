const themesConfigs = require("./src/utils/themes-configs");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
      },
    },
  },
  daisyui: {
    themes: themesConfigs,
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
