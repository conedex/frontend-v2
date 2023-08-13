const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  // important: '#__next',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'token-section': 'auto minmax(auto, 1fr) auto',
      },
      backgroundImage: () => ({
        bars: "url('/images/trident/bars-pattern.png')",
        binary: "url('/images/trident/binary-pattern.png')",
        bubble: "url('/images/trident/bubble-pattern.png')",
        dots: "url('/images/trident/dots-pattern.png')",
        'x-times-y-is-k': "url('/images/trident/x-times-y-is-k.png')",
        wavy: "url('/images/trident/wavy-pattern.png')",
        chevron: "url('/images/trident/chevron-pattern.png')",
        'gradient-radial': 'radial-gradient(100% 100% at 50% 25%, var(--tw-gradient-stops))',
      }),
      linearBorderGradients: (theme) => ({
        directions: {
          t: 'to top',
          tr: 'to top right',
          r: 'to right',
        },
        colors: {
          'blue-pink': ['#0993ecBF', '#f338c3BF'],
          'blue-pink-hover': ['#0993ec99', '#f338c399'],
          'pink-red-light-brown': ['#FE5A75', '#FEC464'],
        },
        background: {
          'dark-1000': '#FFDEA8',
          'dark-900': '#FFD791',
          'dark-800': '#FFC963',
          'dark-pink-red': '#FFECD6',
        },
        border: {
          1: '1px',
          2: '2px',
          3: '3px',
          4: '4px',
        },
      }),

      // use https://www.tailwindshades.com/ to generate shades
      colors: {
        purple: {
          DEFAULT: '#A755DD',
          50: '#F6EEFC',
          100: '#EDDDF8',
          200: '#DCBBF1',
          300: '#CA99EB',
          400: '#B977E4',
          500: '#A755DD',
          600: '#8E2AD0',
          700: '#6E20A2',
          800: '#4E1773',
          900: '#2E0E44',
        },
        blue: {
          DEFAULT: '#0993EC',
          50: '#B1DEFC',
          100: '#9DD6FB',
          200: '#76C6FA',
          300: '#4EB6F8',
          400: '#27A5F7',
          500: '#0993EC',
          600: '#0771B6',
          700: '#055080',
          800: '#032E4A',
          900: '#010C14',
        },
        pink: {
          DEFAULT: '#F338C3',
          50: '#FDE5F7',
          100: '#FCD2F1',
          200: '#FAABE6',
          300: '#F885DA',
          400: '#F55ECF',
          500: '#F338C3',
          600: '#E50EAE',
          700: '#B00B86',
          800: '#7B075E',
          900: '#460435',
        },
        green: {
          DEFAULT: '#7CFF6B',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#E8FFE5',
          300: '#C4FFBD',
          400: '#A0FF94',
          500: '#7CFF6B',
          600: '#4AFF33',
          700: '#1DFA00',
          800: '#16C200',
          900: '#108A00',
        },
        red: {
          DEFAULT: '#FF3838',
          50: '#FFF0F0',
          100: '#FFDBDB',
          200: '#FFB2B2',
          300: '#FF8A8A',
          400: '#FF6161',
          500: '#FF3838',
          600: '#FF0000',
          700: '#C70000',
          800: '#8F0000',
          900: '#570000',
        },
        yellow: {
          DEFAULT: '#FFD166',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFF6E0',
          300: '#FFEAB8',
          400: '#FFDD8F',
          500: '#FFD166',
          600: '#FFC02E',
          700: '#F5AB00',
          800: '#BD8400',
          900: '#855D00',
        },

        'opaque-blue': '#0993ec80',
        'transparent-blue': '#0993EC2A',
        'transparent-pink': '#FE5A752A',
        'opaque-pink': '#f338c380',
        'pink-red': {
          DEFAULT: '#FE5A75',
          50: '#FFFFFF',
          100: '#FFFCFD',
          200: '#FFD4DB',
          300: '#FEABB9',
          400: '#FE8397',
          500: '#FE5A75',
          600: '#FE2246',
          700: '#E60127',
          800: '#AF011E',
          900: '#770114',
        },
        'light-brown': {
          DEFAULT: '#FEC464',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFF2DE',
          300: '#FFE3B5',
          400: '#FED38D',
          500: '#FEC464',
          600: '#FEAF2C',
          700: '#F09602',
          800: '#B97301',
          900: '#815101',
        },
        'dark-pink': '#FFECD6', // Very light orange
        'dark-blue': '#FFE5BF', // Light orange
        'dark-1000': '#FFDEA8', // Slightly darker orange
        'dark-900': '#FFD791', // More orange
        'dark-850': '#FFD07A', // More orange
        'dark-800': '#FFC963', // More orange
        'dark-700': '#FFC24C', // More orange
        'dark-600': '#FFBB35', // More orange
        'dark-500': '#FFB41E', // More orange
        'dark-400': '#FFAD07', // More orange
        'orange-dark': '#FF8000',
        'orange-primary': '#FFB366',
        white: '#FFFFFF',
        'low-emphesis': '#575757',
        primary: '#BFBFBF',
        secondary: '#7F7F7F',
        'high-emphesis': '#E3E3E3',
        'higher-emphesis': '#FCFCFD',
      },
      lineHeight: {
        '48px': '48px',
      },
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        hero: [
          '48px',
          {
            letterSpacing: '-0.02em;',
            lineHeight: '96px',
            fontWeight: 700,
          },
        ],
      },
      borderRadius: {
        none: '0',
        px: '1px',
        DEFAULT: '0.625rem',
      },
      boxShadow: {
        swap: '0px 50px 250px -47px rgba(39, 176, 230, 0.29)',
        liquidity: '0px 50px 250px -47px rgba(123, 97, 255, 0.23)',
        'pink-glow': '0px 57px 90px -47px rgba(250, 82, 160, 0.15)',
        'blue-glow': '0px 57px 90px -47px rgba(39, 176, 230, 0.17)',
        'pink-glow-hovered': '0px 57px 90px -47px rgba(250, 82, 160, 0.30)',
        'blue-glow-hovered': '0px 57px 90px -47px rgba(39, 176, 230, 0.34)',
      },
      ringWidth: {
        DEFAULT: '1px',
      },
      padding: {
        px: '1px',
        '3px': '3px',
      },
      minHeight: {
        empty: '128px',
        cardContent: '230px',
        fitContent: 'fit-content',
      },
      minHeight: {
        5: '1.25rem',
      },
      minWidth: {
        5: '1.25rem',
      },
      dropShadow: {
        currencyLogo: '0px 3px 6px rgba(15, 15, 15, 0.25)',
      },
      screens: {
        '3xl': '1600px',
      },
      animation: {
        ellipsis: 'ellipsis 1.25s infinite',
        'spin-slow': 'spin 2s linear infinite',
        fade: 'opacity 150ms linear',
      },
      keyframes: {
        ellipsis: {
          '0%': { content: '"."' },
          '33%': { content: '".."' },
          '66%': { content: '"..."' },
        },
        opacity: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
      },
    },
  },
  variants: {
    linearBorderGradients: ['responsive', 'hover', 'dark'],
    extend: {
      backgroundColor: ['checked', 'disabled'],
      backgroundImage: ['hover', 'focus'],
      borderColor: ['checked', 'disabled'],
      cursor: ['disabled'],
      opacity: ['hover', 'disabled'],
      placeholderColor: ['hover', 'active'],
      ringWidth: ['disabled'],
      ringColor: ['disabled'],
    },
  },
  plugins: [require('tailwindcss-border-gradient-radius')],
}
