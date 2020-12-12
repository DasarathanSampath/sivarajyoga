const { description } = require('../../package')
const englishLang = require('./navigation/en')
const autometa_options = {
  site: {
    name   : 'sivarajyoga',
    twitter: 'sivarajyoga',
  },
  canonical_base: 'https://sivarajyoga.com'
};

module.exports = {
  title: 'Sri Ramakrishna Yogashramam',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', integrity:'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN', crossorigin:'anonymous'}],
    ['script', { src: "https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js" }],
    ['script', { src: "https://www.gstatic.com/firebasejs/8.1.1/firebase-analytics.js" }],
    ['script', { src: "https://www.googletagmanager.com/gtag/js?id=G-80BL7FEJGV",async: true}],
    ['script', {},
                "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-80BL7FEJGV');"]
    
  ],
  themeConfig: englishLang.list,
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/nprogress',
    ['clean-urls', {
      normalSuffix: '/',
      indexSuffix: '/'
    }],
    ['autometa', autometa_options],
    ['sitemap', {hostname: 'https://sivarajyoga.com'}],
    ['@vuepress/google-analytics', {'ga': 'G-80BL7FEJGV'}],
    ['feed', {
      canonical_base: 'https://thedatatalks.in',
      posts_directories: ['/politics/', '/economics/', '/education/', '/others/'],
    }]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}
