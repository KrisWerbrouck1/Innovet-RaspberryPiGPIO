module.exports = {
  title: 'Innovet Raspberry PI GPIO',
  description: 'Innovet Raspberry PI GPIO',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: 'https://stem-ict.be/' },
      { text: 'License', link: '/LICENSE.md' },
    ],
    sidebar: [
      ['/', 'Home'],
    ],
    repo: 'https://github.com/KrisWerbrouck1/Innovet-RaspberryPIGPIO.git',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
