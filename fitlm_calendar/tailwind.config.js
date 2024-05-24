/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // src 폴더 안에 있는 해당 확장자들에는 tailwindcss 적용
  ],
  theme: {
    extend: {
      textShadow: {
        sm: "0px 1px 1px var(--tw-shadow-color)",
        DEFAULT: "2px 2px 4px var(--tw-shadow-color)",
        lg: "4px 4px 8px var(--tw-shadow-color)",
        xl: "4px 4px 16px var(--tw-shadow-color)",
      },
      colors: {
        "dark-color": "#401c0c",
        "semi-dark-color": "#6d4226",
        "regular-color": "#b09C93",
        "semi-light-color": "#e2d7d2",
        "light-color": "#f1ebe9",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
