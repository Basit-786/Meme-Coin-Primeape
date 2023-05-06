/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        primary: "#EE9E83",
        secondary: "#5454AD",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white": "#ffff",
      },
    },
  },
  plugins: [],
}