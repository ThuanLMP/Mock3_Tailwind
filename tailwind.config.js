module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo']
      },
      fontSize: {
        base: '1rem',
        xl: '1.25rem',
        '5xl': '2.75rem',
        sm: ['22px','60px']
      },
      with: {
        '128': '32rem'
      },
      colors: {
        primary: '#FF6464',
        primary_1: '#EDF7FA',
        secondry: '#00A8CC',
        border_cl: '#E0E0E0',
        text_1: '#8695A4'
      }
    },
  },
  plugins: [],
}