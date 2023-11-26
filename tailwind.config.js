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
        'redwood': '#000000',
        'mint': '#087F8C',
        'dark-cyan': '#DADDE0',
        'sunset': '#FFFFFF',
      },
    },
  },
  plugins: [],
};


