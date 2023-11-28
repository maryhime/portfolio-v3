
/** @type {import('tailwindcss').Config} */

export const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      xs : '640px',
      sm : '768px',
      md : '960px',
      lg : '1120px',
      xl : '1440px',
      xxl: '1900px'
    },
    fontFamily: {
      notes: ['Nanum Pen Script', 'cursive'],
      main: ['Larsseit', 'sans-serif'],
    },

    extend: {
      colors: {
        primary: '#733B8A',
        white: '#FAF9FF',
        textMain: '#111515',
      },

      gap: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '48px',
        xl: '64px',
        xxl: '80px',
      },
      padding: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '50px',
        xl: '100px',
        xxl: '160px',
      },

      gradientColorStopPositions: {
        navbar: '', // bg-gradient-to-b from-fuchsia-900 to-slate-100
        text: '',
        'text-rectangle': '', //bg-gradient-to-r from-fuchsia-900 to-blue-400
      },
      backgroundImage: {
        'hero': "url('/images/background.png')",
      },
      transitionProperty: {
        'backgroundSize': 'background-size'
    },
    },
  },

  plugins: [],
});

