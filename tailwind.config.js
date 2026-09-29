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
        primary: {
          DEFAULT: '#005b96',
          dark: '#013a63',
          light: '#2a87c8',
        },
        brand: {
          yellow: '#f59e0b',
          red: '#e11d48',
        }
      }
    },
  },
  plugins: [],
};
