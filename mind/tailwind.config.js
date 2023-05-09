/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bgdarkblue': '#041255',
        'bglightblue': '#00A6FB',
        'lgBg1': '#f6d5f7',
        'lgBox1':'#295270',
        'lgBox2': '#524175',
        'lgBox3': '#0e1c26',
        'lgBox4': '#294861',
        'lgBox3Light':'#8364e8',
        'lgBox4Light':'#5e3f9c',
        'lgbgdark1': '#f6d5f7',
        'lgbgdark3': '#abc9e9',
        'lgBg2': '#fbe9d7',
        'lgText1': '#f6d5f7',
        'lgText2': '#fbe9d7',
        'bg1': '#212033',
        'purpleTXT': '#9997FF',
        'grayTXT' : '#494949',
        'grayTXTHeadline' : '#242424',
            },
      fontFamily: {
        'Roboto' : ['Roboto', 'sans-serif'],
        'Poppins' : ['Poppins', 'sans-serif'],
        'Montserrat' : ['Montserrat', 'sans-serif'],
        'Alata' : ['Alata', 'sans-serif'],
        'jetbrains' : ['JetBrains Mono', 'monospace'],
        'Sora'  : ['Sora', 'sans-serif'],
        'Jost' : ['Jost', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      maxWidth: {
        '9xl': '96rem',
      },
         fontFamily: {
        'Poppins': ['"Poppins"', 'cursive'],
      },
      width: {
        '192': '48rem ',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '7/10': '70%',
        '9/10': '90%',
      },
      height: {
        '192': '48rem ',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '7/10': '70%',
        '9/10': '90%',
      },
    },
  },
  plugins: [],
}
