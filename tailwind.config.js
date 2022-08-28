module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-green': '#00e969',
        'theme-blue': '#0778e2',
      },
      backgroundImage: {
        'main_landscape_1': "url('/photos/KBN02251.jpg')",
        'main_landscape_2': "url('/photos/DJI_0099-HDR.jpg')",
        'main_landscape_3': "url('/photos/KBN04780.jpg')",
      }
    },
  },
  plugins: [],
}
