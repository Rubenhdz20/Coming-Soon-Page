/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}',
  './index.html',
	'./public/index.html', 
	'./src/**/*.{html,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "custom-gray": "#969696",
      "custom-black": "#15202A"
    }
  },
  plugins: [],
}

