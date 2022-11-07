/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFE3E3',
        secondary: '#F9C846',
        terziary: '#F96E46',
        danger: '#E3170A',
        quaternary: '#05b6c6',
        gray: '#545863'
      }
    }
  },
  plugins: []
};
