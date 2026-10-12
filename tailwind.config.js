/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          border: "rgba(255, 255, 255, 0.18)",
          bg: "rgba(255, 255, 255, 0.07)",
        }
      },
    },
  },
  plugins: [],
}