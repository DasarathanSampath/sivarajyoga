const { description } = require('../../package')
const languagesList = require('./navigation/languageList')
const englishLang = require('./navigation/en')
const tamilLang = require('./navigation/ta')
const path = require("path")
const autometa_options = {
  site: {
    name   : 'sivarajyoga.com',
    twitter: 'sivarajyoga.com',
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
    ['script', { src: "https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js" }],
    ['script', { src: "https://www.gstatic.com/firebasejs/8.3.1/firebase-analytics.js" }],    
    ['script', { src: "https://www.googletagmanager.com/gtag/js?id=G-Y9VZZ7RZEQ",async: true}]
  ],
  locales: languagesList.list,
  themeConfig: {
    logo: '/logo.png',    
    lastUpdated: false,
    locales:{
      '/': englishLang.list,
      '/ta/': tamilLang.list
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['clean-urls', {
      normalSuffix: '/',
      indexSuffix: '/'
    }],
    ['feed', {
      canonical_base: 'https://sivarajyoga.com',
      posts_directories: ['/naturopathy/', '/meditation/', '/yoga/', '/gallery/']
    }],
    ['autometa', autometa_options],
    ['sitemap', {hostname: 'https://sivarajyoga.org'}],
    ['@vuepress/google-analytics', {'ga': 'G-Y9VZZ7RZEQ'}]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, '../assets')
      }
    }
  },
  chainWebpack (config) {
    config.plugin('injections').tap(([options]) => [
      Object.assign(options, {
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ])
  }
}
