/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans' : 'Red Hat Display'
    },
    backgroundImage: {
      'patternMobile' : 'url(./src/assets/images/pattern-background-mobile.svg)',
      'patternDesktop' : 'url(./src/assets/images/pattern-background-desktop.svg)'
    },
    extend: {
      colors: {
        'bgColor' : '#E0E8FF',
        'hover' : '#766CF1'
      },
      boxShadow: {
        'btn' : '0px 20px 20px rgba(56, 42, 225, 0.190291);',
        'container' : '0px 40px 40px -20px rgba(13, 48, 189, 0.151826)'
      }
    },
  },
  plugins: [],
}

