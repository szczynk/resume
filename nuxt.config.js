import hooks from './hooks'
const config = {
  router: {
    base: '/resume'
  }
}

export default {
  target: 'static',
  router: {
    base: '/resume/'
  },
  hooks: hooks(config),
  render: {
    static: {
      prefix: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
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
    // https://sitemap.nuxtjs.org/usage/sitemap-options
    '@nuxtjs/sitemap',
    // https://github.com/frenchrabbit/nuxt-precompress
    'nuxt-precompress',
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
      theme_color: '#212121',
      ogSiteName: 'szczynk.github.io/resume/',
      ogTitle: 'Szczynk Resume',
      ogHost: 'https://szczynk.github.io',
      ogUrl: 'https://szczynk.github.io/resume/',
      ogImage: {
        path:
          'https://szczynk.github.io/resume/_nuxt/icons/icon_120x120.2cde48.png',
        width: 120,
        height: 120,
        type: 'image/png'
      },
      twitterCard: 'summary',
      twitterSite: '@szczynk',
      twitterCreator: '@szczynk'
    },
    manifest: {
      name: 'Szczynk Resume',
      short_name: 'Szczynk Resume',
      background_color: '#000000',
      lang: 'en'
    }
  },

  sitemap: {
    hostname: 'https://szczynk.github.io/'
  },

  // Default options of nuxt-precompress, override if needed
  nuxtPrecompress: {
    enabled: true, // Enable in production
    report: true, // set true to turn one console messages during module init
    test: /\.(js|css|html|txt|xml|svg)$/, // files to compress on build
    // Serving options
    middleware: {
      // You can disable middleware if you serve static files using nginx...
      enabled: false
    },
    // build time compression settings
    gzip: {
      // should compress to gzip?
      enabled: true
    },
    brotli: {
      // should compress to brotli?
      enabled: true
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  cache: true,
  sourceMap: true,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  }
}
