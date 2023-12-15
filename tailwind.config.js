/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-black-100": "#000",
        "primary-white-100": "#fff",
        "accent-purple": "#ceb0ff",
        "gray-500": "#757575",
        gray1: {
          "100": "#fffefe",
          "200": "#010101",
        },
        dimgray: "#646464",
        lightgray: "#d2d2d2",
        gainsboro: {
          "100": "#e7e7e7",
          "200": "#e6e6e6",
          "300": "#e4e4e4",
          "400": "#d9d9d9",
        },
        whitesmoke: {
          "100": "#f0f0f0",
          "200": "#eee",
        },
      },
      spacing: {},
      fontFamily: {
        "heading-h3": "'GLD Display'",
        "label-medium-600": "Inter",
        "tradegothic-lt-extended": "'TradeGothic LT Extended'",
        "editors-note": "'Editor\\'s Note'",
        "noto-sans-egyptian-hieroglyphs": "'Noto Sans Egyptian Hieroglyphs'",
      },
      borderRadius: {
        "13xl": "32px",
        mini: "15px",
        xl: "20px",
      },
    },
    fontSize: {
      "3xl": "22px",
      xl: "20px",
      base: "16px",
      "45xl": "64px",
      "77xl": "96px",
      "55xl": "74px",
      "109xl": "128px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
