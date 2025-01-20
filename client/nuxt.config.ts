// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  css: [
    "bootstrap/dist/css/bootstrap.rtl.min.css",
    "bootstrap-icons/font/bootstrap-icons.css",
  ],

  app: {
    head: {
      htmlAttrs: {
        dir: "rtl",
        lang: "fa",
      },
    },
  },

  modules: ["@nuxt/fonts"],
});