/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      ...defaultTheme.screens,
      xs: '350px',
      slg: '1152px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    lineHeight: {
      ...defaultTheme.lineHeight,
      'lineheight1-2': '1.2',
      'lineheight1-45': '1.45',
    },
    fontFamily: {
      RobotoCondensed: ['Roboto Condensed', 'sans-serif'],
      Roboto: ['Roboto', 'sans-serif'],
      Noto: ['Noto Sans TC', 'sans-serif'],
    },
    spacing: {
      18: '72px',
      ...defaultTheme.spacing,
    },
    extend: {
      screens: {
        xs: '350px',
        slg: '1152px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
      colors: {
        dark: '#3B3B3B',
        red: '#FF0202',
        gray: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#6D6D6D',
          600: '#5D5D5D',
          700: '#4F4F4F',
          800: '#454545',
          900: '#3B3B3B',
          950: '#262626',
        },
        primary: {
          50: '#F1FCF8',
          100: '#D0F7EA',
          200: '#A1EED5',
          300: '#6ADEBD',
          DEFAULT: '#52ccad',
          500: '#22AA8A',
          600: '#198870',
          700: '#186D5B',
        },
        secondary: {
          50: '#FFEEDD',
          100: '#F2DCC5',
          300: '#DFBD9A',
          DEFAULT: '#C09879',
          500: '#B18669',
        },
      },
      fontSize: {
        '2.5xl': '28px',
      },
      boxShadow: {
        md: '0 2px 4px rgba(0, 0, 0, 0.08), 0 0 2px rgba(0, 0, 0, 0.2)',
        lg: '0px 0px 2px 0px rgba(0, 0, 0, 0.08), 0px 4px 4px 0px rgba(0, 0, 0, 0.08)',
        bottom: '0px 8px 8px 0px rgba(0, 0, 0, 0.08)',
      },
      textShadow: {
        DEFAULT: '1px 1px 1px rgba(0, 0, 0, 0.25)',
        none: 'none',
        lg: '2px 2px 1px rgba(0, 0, 0, 0.2)',
        s: '0px 1.5px 0px rgba(59, 59, 59, 0.4)',
      },
      dropShadow: {
        s: '0px 1.5px 0px rgba(59, 59, 59, 0.4)',
      },
      zIndex: {
        modal: 1050,
      },
    },
  },
  plugins: [
    require('tailwindcss-3d'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
