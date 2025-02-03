export default defineNuxtConfig({
  buildModules: ['@nuxt/http'],

  runtimeConfig: {
    public: {
      // 公開用の API キーや URL
      microcmsApiKeyArticles: process.env.MICROCMS_API_KEY_ARTICLES,
      microcmsApiKeyCategories: process.env.MICROCMS_API_KEY_CATEGORIES,
      microcmsApiUrl: 'https://your-service.microcms.io/api/v1/members',
    },
    // サーバー側で利用する秘密の設定
    private: {
      apiKey: process.env.MICROCMS_API_KEY2,
    }
  },

  http: {
    baseURL: 'https://your-service.microcms.io/api/v1', // APIのベースURL
  },

  compatibilityDate: '2025-01-30',
});
