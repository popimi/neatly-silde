/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: "Noto Serif Display, serif",
        inter: "Inter, sans-serif",
        sans: "Open Sans, sans-serif",
      },
      colors: {
        "green-100": "#F1F5F3",
        "green-200": "#E6EBE9",
        "green-300": "#D5DFDA",
        "green-400": "#ABC0B4",
        "green-500": "#81A08F",
        "green-600": "#5D7B6A",
        "green-700": "#465C50",
        "green-800": "#2F3E35",
        "green-900": "#171F1B",
        "orange-100": "#FAEDE8",
        "orange-200": "#F9DACE",
        "orange-300": "#F3B59C",
        "orange-400": "#ED906B",
        "orange-500": "#E76B39",
        "orange-600": "#C14817",
        "orange-700": "#803010",
        "orange-800": "#631F04",
        "orange-900": "#401808",
        "gray-100": "#F6F7FC",
        "gray-200": "#F1F2F6",
        "gray-300": "#E4E6ED",
        "gray-400": "#D6D9E4",
        "gray-500": "#C8CCDB",
        "gray-600": "#9AA1B9",
        "gray-700": "#646D89",
        "gray-800": "#424C6B",
        "gray-900": "#2A2E3F",
        bg: "#F7F7FB",
        red: "#B61515",
      },
      boxShadow: {
        shadow: "4px 4px 16px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
};
