const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    
      extend: {
        fontFamily: {
          'fira-sans': ['"Fira Sans"', 'sans-serif'],
          'inter':["Inter",'sans-serif'],
          'rubik':["Rubik",'sans-serif'],
          'zen':["Zen Kurenaido",'sans-serif'],
          'incon':['Inconsolata', 'monospace'],
          'recur':["Recursive",'sans-serif'],
          'pt':["PT Sans Narrow",'sans-serif'],
          'lato':["Lato",'sans-serif'],
        },
        
      colors: {
        
        cyan: colors.cyan,
        indigo: colors.indigo,
        teal:colors.teal,
        blueGray:colors.slate,
        orange:colors.orange,
        white: colors.white,
        custom:'#22303C',
        lime:colors.lime,
      },
  }},
  plugins: [],
}
