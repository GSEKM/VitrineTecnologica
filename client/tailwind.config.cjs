/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      maxWidth: {
        'fill-available': '-webkit-fill-available',
      },
    },
    button: {
      primary: {
        backgroundColor: '#18A0FB',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#18A0FB',
          color: '#fff',
        },
      },
    },
  },
  plugins: [],
};
