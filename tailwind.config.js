/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "about.html"
  ],
  theme: {
    screens:{
      'xs':'320px',
      's':'375px',
      'sm':'412px',
      'md':'760px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
    },
    extend: {
      fontFamily:{
        jost:'jost',
        forum:'forum'
      },
    },
  },
  plugins: [],
}

