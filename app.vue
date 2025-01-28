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
import Header from '~/components/Header.vue' // Headerコンポーネントをインポート
import Footer from '~/components/Footer.vue' // Footerコンポーネントをインポート

export default {
  name: 'App',
  components: {
    Header // コンポーネントとしてHeaderを登録
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

main {
  padding: 20px;
}
</style>
