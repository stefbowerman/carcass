export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Carcass',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { property: 'og:type', content: 'website' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: './apple-touch-icon-57x57.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: './apple-touch-icon-114x114.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: './apple-touch-icon-72x72.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: './apple-touch-icon-144x144.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: './apple-touch-icon-60x60.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: './apple-touch-icon-120x120.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: './apple-touch-icon-76x76.png' },
      // { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: './apple-touch-icon-152x152.png' },
      // { rel: 'icon', type: 'image/png', href: './favicon-196x196.png', sizes: '196x196' },
      // { rel: 'icon', type: 'image/png', href: './favicon-96x96.png', sizes: '96x96' },
      // { rel: 'icon', type: 'image/png', href: './favicon-32x32.png', sizes: '32x32' },
      // { rel: 'icon', type: 'image/png', href: './favicon-16x16.png', sizes: '16x16' },
      // { rel: 'icon', type: 'image/png', href: './favicon-128.png', sizes: '128x128' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/web-font-loader.client.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  /*
   ** Load SCSS into each component
   */
   styleResources: {
    scss: [
      '~/assets/styles/_variables.scss',
      '~/assets/styles/_mixins.scss'
    ]
  }   
}
