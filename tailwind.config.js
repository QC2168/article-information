module.exports = {
  purge: [
    'src/**/*/html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
  variants: {
    extend: {
      height: ['focus'],
    },
  },
  plugins: [],
};
