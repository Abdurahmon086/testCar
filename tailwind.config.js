/** @type {import('tailwindcss').Config} */
export default {
  content: ["{srcDir}/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/plugins/**/*.{js,ts,mjs}",
    "{srcDir}/composables/**/*.{js,ts,mjs}",
    "{srcDir}/utils/**/*.{js,ts,mjs}",
    "{srcDir}/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/app.config.{js,ts,mjs}",
    "{srcDir}/app/spa-loading-template.html"],
  theme: {
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1336px',
      },
      padding: {
        DEFAULT: '20px',
      },
      center: true,
    },

    extend: {
      colors: {
        primary: '#000000',
        secondary: '#2684E5',
        grayer: '#293843',
        lightGray: '#989898'
      }
    },
  },
  plugins: [],
}

