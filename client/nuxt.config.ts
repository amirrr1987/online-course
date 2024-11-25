// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  site: {
    url: "https://online-course-amirmaghami.netlify.app/",
    name: "online course",
  },
  app: {
    head: {
      htmlAttrs: { dir: "rtl", lang: "fa" },
      link: [
        {
          rel: "icon",
          type: "image/co",
          href: "/fav-light.icon",
        },
      ],
    },
  },

  modules: [
    "@nuxt/fonts",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/sitemap",
  ],
});
