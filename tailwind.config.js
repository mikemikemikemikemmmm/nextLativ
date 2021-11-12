module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#4D3126",
        aside:{

        },
        nav:{
          lihovered:'#F0EDE5'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
