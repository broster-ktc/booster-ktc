export default defineNuxtConfig({
  buildModules: ['@nuxt/http'],

  publicRuntimeConfig: {
    microcms: {
      apiKey: process.env.MICROCMS_API_KEY2,
      apiUrl: 'https://your-service.microcms.io/api/v1/members',
    },
  },

  http: {
    baseURL: 'https://your-service.microcms.io/api/v1', // APIのベースURL
  },

  compatibilityDate: '2025-01-30'
});


