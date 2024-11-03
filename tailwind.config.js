const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F9F7F7',
        secondary: '#DBE2EF',
        dominant: '#3F72AF',
        text: '#112D4E',
        secondaryDark: 'rgba(63, 114, 175, 0.5)',
        alternative: '#ffdb76'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem'
        }
      }
    }
  },
  plugins: []
});
