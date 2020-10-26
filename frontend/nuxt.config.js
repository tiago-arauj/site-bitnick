const nodeExternals = require('webpack-node-externals');
const pkg = require('./package');

let config = {
  mode: 'universal',

  server: {
    port: process.env.BASE_PORT || 3000, // default: 3000
    host: process.env.BASE_DOMAIN || '0.0.0.0', // default: localhost
  },

  router: {
    base: '/'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.description,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.descriptionComplete},
      {hid: 'keywords', name: 'keywords', content: "organik; orgânico; investimento orgânico; investimento agrícola"}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#EBBB17'},

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'reset-css',
    '~assets/css/fonts.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '@/plugins/element-ui', ssr: false},
    '@/plugins/BaseComponents.js',
    '@/plugins/imports.js',
    {src: '@/plugins/imports-without-ssr.js', ssr: false},
    '@/plugins/api.js',
    '@/plugins/utils.js',


  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'nuxt-client-init-module'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            allowlist: [/^vue-slick/]
          })
        ]
      }
    }
  }
};

if (process.env.GENERATION_TYPE === 'gitlab_ci') {
  config.router = {
    base: '/organic/site/'
  }
}

module.exports = config;
