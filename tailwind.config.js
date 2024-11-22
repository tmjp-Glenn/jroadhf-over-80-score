/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/main/frontend/index.html', './src/main/frontend/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006D77', // Main primary color
        },
        secondary: {
          light: '#83C5BE', // Lighter teal accent
          lighter: '#EDF6F9', // Light background color
          peach: '#FFDDD2', // Warm peach for alerts/special sections
        },
        text: {
          primary: '#073B4C', // Dark teal for primary text
          secondary: '#6D757D', // Neutral gray for secondary text
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'], // Heading font
        body: ['Open Sans', 'sans-serif'], // Body font
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'slide-down': 'slide-down 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
