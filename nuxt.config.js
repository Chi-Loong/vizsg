import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    titleTemplate: 'Viz.SG',
    title: 'Viz.SG',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'First test for Nuxt framework' },
      { name: 'format-detection', content: 'telephone=no' },
      // Twitter
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
      { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js'},
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://jamstack-explorers-nuxt-mission.com'},
      { hid: 'twitter:title', name: 'twitter:title', content: 'Nuxt Mission'},
      { hid: 'twitter:description', name: 'twitter:description', content: 'A mission to explore the Jamstack using Nuxt.'},
      { hid: 'twitter:image', name: 'twitter:image', content:'https://jamstack-explorers-nuxt-mission.com/social-preview.png'},
      // Open Graph
      { hid: 'og:site_name', property: 'og:site_name', content: 'JamStack Explorers - Nuxt'},
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://jamstack-explorers-nuxt-mission.com'},
      { hid: 'og:title', property: 'og:title', content: 'Nuxt Mission'},
      { hid: 'og:description', property: 'og:description', content: 'A mission to explore the Jamstack using Nuxt.'},
      { hid: 'og:image', property: 'og:image', content: 'https://jamstack-explorers-nuxt-mission.com/social-preview.png'},
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://jamstack-explorers-nuxt-mission.com/social-preview.png'},
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Nuxt Mission'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Comfortaa:400,700'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  //PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
