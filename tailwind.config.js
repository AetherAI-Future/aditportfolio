/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B46C1',
          dark: '#4C1D95',
          light: '#8B5CF6',
        },
        dark: {
          DEFAULT: '#0a0118',
          light: '#1a1333',
          lighter: '#2d1f4d',
        },
        accent: {
          purple: '#9F7AEA',
          blue: '#4299E1',
          pink: '#ED64A6',
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};