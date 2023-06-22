/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'fondo': '#EEE6E2',
        'fondo-claro': '#E2FEE0',
        'wapp-verde': '#00B79E',
        'gris': '#111B21',
        'resalta': '#DED078',
        'dark-fondo': '#131B28',
        'dark-fondo-claro': '#222A37',
        'dark-wapp-verde': '#00927E',
        'dark-gris': '#E6E9F2',
      },
    },
  },
  plugins: [],
}