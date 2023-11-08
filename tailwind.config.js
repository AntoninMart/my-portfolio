/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes : {
        float: {
          '0%, 100%': { transform: 'translateY(7px)' },
          '50%': { transform: 'translateY(-7px)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}