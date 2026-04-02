/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08111f',
          900: '#101b2c',
          800: '#17283f',
        },
        cyan: {
          300: '#8be4ff',
          400: '#54d4ff',
        },
        lime: {
          300: '#c8f169',
        },
        sand: {
          50: '#f8f5ef',
        },
      },
      fontFamily: {
        sans: ['Satoshi', 'Segoe UI', 'sans-serif'],
        display: ['Clash Display', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 20px 50px rgba(8, 17, 31, 0.16)',
      },
    },
  },
  plugins: [],
}
