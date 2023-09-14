/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: "#ed2c49",
        green: "#aad742",
        blue: "#3e54a3",

        "very-light-blue": "rgba(240,244,244,0.5)",
        
        grey: "#1c2022",
        "light-grey": "#737373",
        "very-light-grey": "#dbe5e6"
      }
    }
  },
  plugins: [],
}
