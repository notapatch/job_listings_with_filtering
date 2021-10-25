module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
