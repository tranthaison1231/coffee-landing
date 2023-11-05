/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#F7F2E8',
        primary: {
          DEFAULT: '#431B1B',
          foreground: '#fff'
        }
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem'
      },
      maxWidth: {
        '1/2': '50%'
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: []
}
