/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    'index.html',
    './Contact%20page/contact.html',
    './About%20page/about.html',
    './Projects%20page/projects.html',
    './Sample%20Projects/mywork.html',
    './Resume/resume.html'
  ],

  theme: {
    extend: {
      colors: {
        'teal': '#087F8C',
        'platinum': '#DADDE0',
      },
    },
  },
  plugins: [],
};


