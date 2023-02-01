/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-cyan': 'hsl(158, 36%, 37%)',
        'Cream' : 'hsl(30, 38%, 92%)',
        
        'grayish-blue': 'hsl(228, 12%, 48%)',
        'dark blue':'hsl(212, 21%, 14%)',
        'white': 'hsl(0, 0%, 100%)'
      },
    },
  },
  plugins: [],
}
