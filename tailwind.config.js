const base = 1.118;

module.exports = {
  purge: ['./src/*.html'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1024px',
    },
    fontSize: {
      xs: `${base * 0.75}rem`,
      sm: `${base * 0.875}rem`,
      tiny: `${base * 0.875}rem`,
      base: `${base * 1}rem`,
      lg: `${base * 1.125}rem`,
      xl: `${base * 1.25}rem`,
      '2xl': `${base * 1.5}rem`,
      '3xl': `${base * 1.875}rem`,
      '4xl': `${base * 2.25}rem`,
      '5xl': `${base * 3}rem`,
      '6xl': `${base * 4}rem`,
      '7xl': `${base * 5}rem`,
    },
    extend: {
      colors: {
        white: '#f2f2f0',
        gray: {
          lighter: '#b3b3b3',
          default: '#636f6f',
        },
        green: {
          lightest: '#7b9e7b',
          lighter: '#8da492',
          default: '#1c3929',
          darker: '#475a4f',
          dark: '#1f362a',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
