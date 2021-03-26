export default {
  target: 'static',
  router: {
    base: '/resume/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.npm_package_description || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://github.com/robcresswell/nuxt-compress
    ['nuxt-compress', { gzip: { cache: true }, brotli: { threshold: 10240 } }],
    // https://github.com/nuxt-community/fontawesome-module
    '@nuxtjs/fontawesome',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // https://sitemap.nuxtjs.org/usage/sitemap-options
    '@nuxtjs/sitemap',
    'vue-github-buttons/nuxt'
  ],

  loading: { color: '#fff' },

  // https://github.com/nuxt-community/fontawesome-module
  fontawesome: {
    component: 'Fa',
    suffix: true,
    icons: {
      solid: ['faAt', 'faPhoneAlt', 'faMapMarkerAlt'],
      regular: ['faBuilding'],
      brands: ['faGithub', 'faLinkedin', 'faTwitter', 'faSkype']
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      theme_color: '#212121'
    },
    manifest: {
      lang: 'en'
    }
  },

  // for robots.txt https://github.com/nuxt-community/robots-module
  robots: {
    UserAgent: '*'
  },

  sitemap: {
    hostname: 'https://szczynk.github.io/'
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  }
}
