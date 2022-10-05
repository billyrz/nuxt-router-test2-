import colors from 'vuetify/es5/util/colors';
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Starter',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/vuetify'],
  vuetify: {
    /* module options */

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
          success: colors.green.accent3,
        },
      },
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/axios'],

    axios: {
      // proxy: true
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
  },
  loading: {
    color: '#ff0000', // 进度条的颜色
    failedColor: 'red', // 页面加载失败时的颜色（ 当 data 或 fetch 方法返回错误时）
    height: '1px', // 进度条的高度(在进度条元素的 style 属性上体现)
    throttle: 200, // 在 ms 中， 在显示进度条之前等待指定的时间。 用于防止条形闪烁
    duration: 5000, // 进度条的最大显示时长， 单位毫秒。 Nuxt.js 假设页面在该时长内加载完毕
    continuous: false, // 当加载时间超过duration时， 保持动画进度条
    css: true, // 设置为 false 以删除默认进度条样式（ 并添加自己的样式）
    rtl: false, // 从右到左设置进度条的方向
  },
};
