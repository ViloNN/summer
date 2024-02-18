// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxtjs/i18n",
  ],
  colorMode: {
    preference: "light",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: ["en", "pl"],
    defaultLocale: "pl",
  },
});
