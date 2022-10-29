/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '900px',
      lg: '1250px',
      xl: '1440px',
    }
  },
  plugins: [],
}
