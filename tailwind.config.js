/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'card': '0px 10px 25px 5px rgba(0, 0, 0, 0.30)',
      }
    }
  },
  plugins: []
};
