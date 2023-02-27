/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#1877f2',
      primaryHover: '#166fe5',
      white: '#FFFFFF',
      black: '#000000',
      midnight: '#121063',
      slate: '#f1f5f9',
      pink: '#fbcfe8',
      transparent: 'transparent'
    },
    extend: {},
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true
    }
  },
  plugins: []
};
