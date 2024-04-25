import {fontFamily} from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['JetBrains Mono', 'sans-serif', ...fontFamily.sans]
    },
    extend: {
      screens: {
        tall: {raw: '(min-height: 800px)'}
      },
      animation: {
        fade: 'fadeIn .25s ease-in-out'
      },

      keyframes: {
        fadeIn: {
          from: {opacity: '0'},
          to: {opacity: '1'}
        }
      }
    },
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      black: 'rgb(0 0 0)',
      white: 'rgb(255 255 255)',
      ['lavender-blue']: {
        50: '#f2f3ff',
        100: '#e4e7ff',
        200: '#c9cfff',
        300: '#aeb8ff',
        400: '#93a0ff',
        500: '#7888ff',
        600: '#606dcc',
        700: '#485299',
        800: '#303666',
        900: '#181b33'
      },
      ['rose']: {
        50: '#fff1f2',
        100: '#ffe4e6',
        200: '#fecdd3',
        300: '#fda4af',
        400: '#fb7185',
        500: '#f43f5e',
        600: '#e11d48',
        700: '#be123c',
        800: '#9f1239',
        900: '#881337'
      }
    }
  }
};
