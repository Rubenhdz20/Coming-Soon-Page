/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';

export const content = [
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}',
  './index.html',
  './public/index.html',
  './src/**/*.{html,js}',
];

export const darkMode = 'class';
export const theme = {
  extend: {},
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    "custom-red": "#FF5466",
    "custom-white": "#FFFFFF",
    "custom-gray": "#969696",
    "custom-gray-strong": "#111827",
    "custom-black": "#15202A",
    "light-blue": "#C2D3FF",
    "pale-blue": "hsl(223, 100%, 88%)",
    "strong-blue": "#4C7BF3",
    ...colors,
  },
  fontFamily: {
    sans: ['Libre Franklin', 'sans-serif'],
  },
  fontSize: {
    normal: "1.25rem",
  },
};
export const plugins = [];