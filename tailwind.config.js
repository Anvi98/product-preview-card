/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-cyan': 'hsl(158, 36%, 37%)',
        'cream' : 'hsl(30, 38%, 92%)',

        'grayish-blue': 'hsl(228, 12%, 48%)',
        'dark blue':'hsl(212, 21%, 14%)',
        'white': 'hsl(0, 0%, 100%)'
      },
      fontSize: {
        sm: '0.6rem',
        base: '14px',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
        custom: '4px',
      }
    },
  },
  plugins: [],
}
