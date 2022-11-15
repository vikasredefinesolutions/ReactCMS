const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/appComponents/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: false,
    extend: {
      fontFamily: {
        Outfit: 'var(--tw-theme-body-font)',
        title: 'var(--tw-theme-title-font)', // title font family
        'sub-title': 'var(--tw-theme-sub-title-font)', // Sub title font family
        'small-title': 'var(--tw-theme-small-title-font)', // Small title font family
      },
      fontSize: {
        base: [
          'var(--tw-theme-body-font-size)',
          {
            lineHeight: '20px',
            letterSpacing: 'var(--tw-theme-body-font-letter-spacing)',
          },
        ],
        title: [
          'var(--tw-theme-title-font-size)',
          {
            lineHeight: '3.5rem',
            letterSpacing: 'var(--tw-theme-title-font-letter-spacing)',
          },
        ], // title font size , line height , letter spacing
        'sub-title': [
          'var(--tw-theme-sub-title-font-size)',
          {
            lineHeight: '2.25rem',
            letterSpacing: 'var(--tw-theme-sub-title-font-letter-spacing)',
          },
        ], // Sub title font size , line height , letter spacing
        'small-title': [
          'var(--tw-theme-small-title-font-size)',
          {
            lineHeight: '1.75rem',
            letterSpacing: 'var(--tw-theme-small-title-font-letter-spacing)',
          },
        ], // Small title font size , line height , letter spacing
        'default-text': [
          'var(--tw-theme-body-font-size)',
          {
            lineHeight: '1.5rem',
            letterSpacing: 'var(--tw-theme-body-font-letter-spacing)',
          },
        ], // default font size , line height , letter spacing
      },
      fontWeight: {
        title: 'var(--tw-theme-title-font-weight)',
        'sub-title': 'var(--tw-theme-sub-title-font-weight)',
        'small-title': 'var(--tw-theme-small-title-font-weight)',
        'default-text': 'var(--tw-theme-body-font-weight)',
        base: 'var(--tw-theme-body-font-weight)',
      },
      colors: {
        title: 'var(--tw-theme-title-color)', // title color
        'sub-title': 'var(--tw-theme-sub-title-color)', // sub title color
        'small-title': 'var(--tw-theme-small-title-color)', // small title color
        'default-text': '#000000', // default color
        default: 'var(--tw-theme-font-color)',
        'default-hover': '#000000',
        primary: 'var(--tw-theme-btn-primary-color)', // primary color
        'primary-hover': 'var(--tw-theme-btn-primary-hover-color)', // primary hover color
        primarytext: 'var(--tw-theme-btn-primary-text-color)', // primary text color
        'primarytext-hover': 'var(--tw-theme-btn-primary-hover-text-color)', // primary text hover color
        secondary: 'var(--tw-theme-btn-secondary-color)', // secondary color
        'secondary-hover': 'var(--tw-theme-btn-secondary-hover-color)', // secondary hover color
        secondarytext: 'var(--tw-theme-btn-secondary-text-color)', // secondary text color
        'secondarytext-hover': 'var(--tw-theme-btn-secondary-hover-text-color)', // secondary text hover color
        anchor: 'var(--tw-theme-link-color)', // anchor color
        'anchor-hover': '#72a84b', // anchor hover color
        'light-gray': '#d8dfe1', // gray background color
      },
      borderRadius: {
        'primary-radius': 'var(--tw-theme-btn-primary-border-radius)', // primary border radius
        'secondary-radius': 'var(--tw-theme-btn-secondary-border-radius)', // secondary border radius
      },
      borderWidth: {
        'primary-width': 'var(--tw-theme-btn-primary-border-width)', // primary border width
        'secondary-width': 'var(--tw-theme-btn-secondary-border-width)', // secondary border width
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('tailwind-scrollbar'),
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
    // add custom variant for expanding sidebar
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.sidebar-expanded .${e(
              `sidebar-expanded${separator}${className}`,
            )}`,
        );
      });
    }),
  ],
  variants: {
    scrollbar: ['rounded'],
  },
};
