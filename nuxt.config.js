export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Óscar Abad Portfolio',
    description: 'Front End Dev, Video Production, 3D & Mograph.',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/assets/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png', size: '128x128' },
      { rel:"stylesheet", type:"text/css", href: 'https://use.fontawesome.com/releases/v5.15.3/css/all.css' }
      // { rel:"stylesheet", type:"text/css", href: '/styles/fontawesome-5-15-3.all.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
        // Load a Node.js module directly (here it's a Sass file)
        // 'purecss',
        // CSS file in the project
        '@/styles/global.css',
        '@/styles/palete.css',
        '@/styles/animations.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '@/plugins/youtube.js', ssr: false }
    // '@./tools/youtube.js',
    // '@./tools/parallax.js',
    // { src: '@/tools/parallax.js', ssr: false }
    // {
    //   src: '~/node_modules/vue-responsive-video-background-player',
    //   ssr: false
    // }
    // "~/node_modules/vue-cute-timeline/dist",
    // "~/plugins/myplugin.js"
    // "~/node_modules/vue-pipeline-scalable/dist",
    // "~/node_modules/vue-pipeline-scalable/dist"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // storage: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
