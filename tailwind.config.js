/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode using the 'class' strategy
  theme: {
    extend: {
      colors: {
        // You can extend the color palette for dark mode if desired
        darkBackground: '#121212',
        darkText: '#e5e5e5',
        lightBackground: '#ffffff',
        lightText: '#333333',
      },
    },
  },
  plugins: [],
}
