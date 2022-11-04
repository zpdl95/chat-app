/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#3BA55D",
        gray: {
          900: "#202225",
          800: "#292B2F",
          700: "#2F3136",
          600: "#36393F",
          500: "#40444B",
          400: "#4F545C99",
          300: "#4F545C7A",
          200: "#4F545C",
        },
        blue: {
          100: "#00AFF4",
          200: "#5865F2",
        },
      },
      textColor: {
        "icon-green": "#3BA55D",
        white: {
          100: "#FFFFFF",
          200: "#F6F6F7",
          300: "#DCDDDE",
        },
        gray: {
          100: "#B9BBBE",
          200: "#A3A6AA",
          300: "#96989D",
          400: "#8E9297",
          500: "#72767D",
        },
      },
      keyframes: {
        bgOpen: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        bgClose: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        formOpen: {
          "0%": {
            opacity: 0,
            transform: "scale(0)",
          },
          "85%": {
            transform: "scale(1.05)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        formClose: {
          "0%": {
            opacity: 1,
            transform: "scale(1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale(0)",
          },
        },
      },
      animation: {
        bgOpen: "bgOpen .2s linear",
        bgClose: "bgClose .2s linear forwards",
        formOpen: "formOpen .2s ease-in-out",
        formClose: "formClose .2s ease-in-out forwards",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("optional", "&:optional");
      addVariant("group-optional", ":merge(.group):optional &");
      addVariant("peer-optional", ":merge(.peer):optional ~ &");
    }),
  ],
};
