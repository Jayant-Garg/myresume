/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // 'title': '64px',
      },
      colors: {
        primary: '#2A2A2A',
        // secondary: '#000',
        accent: '#8dff00'
      }
    },
  },
  plugins: [],
}

