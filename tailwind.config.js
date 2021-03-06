const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      'md': '0px 4px 4px hsl(0, 0%, 0%, .25)',
    },
    extend: {
      backgroundImage: {
       'header-desktop': "url('./images/bg-header-desktop.svg')",
       'header-mobile': "url('./images/bg-header-mobile.svg')",
       'icon-remove': "url('./images/icon-remove.svg')",
      },
      colors: {
       primary: {
         200: 'var(--color-primary-200)',
       },
       neutral: {
         200: 'var(--color-neutral-200)',
         300: 'var(--color-neutral-300)',
         400: 'var(--color-neutral-400)',
         500: 'var(--color-neutral-500)',
         600: 'var(--color-neutral-600)',
         700: 'var(--color-neutral-700)',
       }
      },
      fontFamily: {
        sans: [
          'Spartan',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      maxWidth: {
        '277.5': '69.375rem',  // max width of header
      },
      spacing: {
        22: '5.5rem',      // width and height of company images
        156: '9.75rem',    // height of header
      }
    },
    fontSize: {
      xs: ['0.6875rem', { lineHeight: '0.875rem' }],   // 11px
      sm: ['0.8125rem', { lineHeight: '0.9375rem' }],  // 13px
      base: ['0.875rem', { lineHeight: '1rem' }],      // 14px
      lg: ['0.9375rem', { lineHeight: '1.5rem' }],     // 15px
      xl: ['1.125rem', { lineHeight: '1.5rem' }],      // 18px
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
