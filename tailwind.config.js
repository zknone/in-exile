/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    boxShadow: {
      card: '0px 10px 25px 5px rgba(0, 0, 0, 0.30)'
    },
    fontFamily: {
      body: ['Suise', 'sans-serif'],
      title: ['Roboto serif', 'serif']
    },
    fontSize: {
      '4px': '4vw',
      '8px': '8vw',
      '11px': '11vw',
      '16px': '16vw',
      '22px': '22vw',
    },
  }
};
export const plugins = [];
