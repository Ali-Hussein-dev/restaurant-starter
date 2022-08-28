/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
      },
    },
  },
  daisyui: {
    themes: ["black"],
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
