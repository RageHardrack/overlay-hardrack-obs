// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt"],
  pinia: { autoImports: ["defineStore", ["defineStore", "definePiniaStore"]] },
  imports: {
    dirs: ["stores"],
  },
  devServer: {
    port: 3001,
  },
  runtimeConfig:{
    twitchClientId: process.env.TWITCH_CLIENT_ID,
    twitchClientSecret: process.env.TWITCH_CLIENT_SECRET,
    twitchOAuthUrl: process.env.TWITCH_OAUTH_URL,
  }
});
