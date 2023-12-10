/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    'index.html',
    'contact.html',
    'about.html',
    'projects.html',
    'mywork.html',
    '.resume.html'
  ],

  theme: {
    extend: {
      colors: {
        'teal': '#087F8C',
        'platinum': '#DADDE0',
        'light-teal': '#E6F6F5',
        'grey-blue': '#A0BCC2',
      },
    },
  },
  plugins: [],
};


