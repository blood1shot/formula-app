import eslintVitePlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          "defineStore",
          ["defineStore", "definePiniaStore"]
        ]
      }
    ],
    "@pinia-plugin-persistedstate/nuxt"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  alias: {
    "@": ""
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      title: "formula-app",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1, user-scalable=0, shrink-to-fit=no"
        },
        {
          name: "format-detection",
          content: "telephone=no"
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      VUE_APP_API_URL: process.env.VUE_APP_API_URL
    }
  },
  ssr: false,
  css: ["@/assets/scss/styles.scss"],
  vite: {
    plugins: [eslintVitePlugin({
      fix: true
    })],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            "@import \"@/assets/scss/_variables.scss\";" +
            "@import \"@/assets/scss/_fonts.scss\"; " +
            "@import \"@/assets/scss/_mixins.scss\"; " +
            "@import \"@/assets/scss/_media.scss\"; "
        }
      }
    }
  }
});
