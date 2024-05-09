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
      '4px': '0.25em',
      '8px': '0.5em',
      '11px': '0.6875em',
      '16px': '1em',
      '22px': '1.375em'
    }
  }
};
export const plugins = [];
