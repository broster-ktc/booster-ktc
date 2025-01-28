<template>
  <div id="app">
    <!-- メインコンテンツエリア -->
    <main>
      <Header />
      <NuxtPage /> <!-- Nuxtが自動でページコンテンツを挿入します -->
      <Footer/>
    </main>
  </div>
</template>

<script>
import Header from '@/component/Header.vue' // Headerコンポーネントをインポート

import Footer from '@/component/Footer.vue';

export default {
  name: 'App',
  components: {
    Header // コンポーネントとしてHeaderを登録
    ,
    Footer
}
}
</script>

<style scoped>
/* グローバルなスタイル */
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}


</style>
