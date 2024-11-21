// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "GPS",
      meta: [
        {
          name: "description",
          content:
            "Aplikacja na zaliczenie",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "Aleksandra Rabcewicz" },
        {
          name: "keywords",
          content:
            "GPS",
        },
      ],
    },
  },
})
