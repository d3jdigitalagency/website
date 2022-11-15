/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // ensure these match with .storybook/preview.js
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    container: {
      center: true,
    },
    fontFamily: {
      body: ['"Montserrat"'],
      primary: ['"Grifter"'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#ffe01b',
      },
      backgroundImage: {
        noise: "url('/assets/backgrounds/noise.png')",
      },
    },
  },
  plugins: [],
};
