<template>
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-4">{{ article.title }}</h2>
      <img :src="article.image.url" :alt="article.title" class="w-full h-64 object-cover rounded-lg mb-4" />
      <div v-html="article.content" class="prose"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import axios from 'axios'
  
  const route = useRoute()
  const article = ref(null)
  
  onMounted(async () => {
    const { data } = await axios.get(`https://your-microcms-domain.microcms.io/api/v1/news/${route.params.slug}`, {
      headers: {
        'X-API-KEY': 'YOUR_API_KEY'
      }
    })
    article.value = data
  })
  </script>
  