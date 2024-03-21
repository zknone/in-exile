/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    boxShadow: {
      card: '0px 10px 25px 5px rgba(0, 0, 0, 0.30)'
    },
    fontFamily: {
      body: ['Suise', 'sans-serif'],
    }
  }
};
export const plugins = [];
