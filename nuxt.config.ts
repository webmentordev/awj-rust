// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  app: {
    head: {
      title: "AWJ Rust Server — Official Website",
      meta: [
        {
          name: "description",
          content: "Welcome to AWJ Rust Offical Website. Join our Best PVP and PVE Rust Server for ultimate rust experience."
        }
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "/awj_logo.png"
        }
      ]
    }
  }
})
