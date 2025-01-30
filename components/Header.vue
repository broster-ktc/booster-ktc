<template>
  <header>
    <div class="logo-container">
      <nuxt-link to="/">
        <img src="/assets/b-iconn.png" alt="チームロゴ" class="logo" />
      </nuxt-link>
      <h1 class="team-name">ブロスタサークル</h1>
    </div>
    <nav>
      <ul class="nav-list">
        <li><nuxt-link to="/about">メンバー紹介</nuxt-link></li>
        <li><nuxt-link to="/achievements">活動</nuxt-link></li>
        <li><nuxt-link to="/news">ニュース</nuxt-link></li>
        <li><nuxt-link to="/#store">ストア</nuxt-link></li>
        <li><nuxt-link to="/qa">お問い合わせ</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
/* ヘッダー */
header {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-color: rgba(0, 0, 0, 0.531); /* 透明度を少し強くする */
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: relative;
  z-index: 10;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 130px;
  margin-right: 10px;
}

.team-name {
  font-size: 2.5em;
  font-weight: bold;
}

nav {
  margin-left: auto;
  border-radius: 10px;
  padding: 10px 20px;
}

.nav-list {
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-list li {
  position: relative; /* リスト項目に相対位置を設定 */
}

.nav-list li a, .nav-list li nuxt-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2em;
  transition: color 0.3s; /* 色の変更にアニメーション */
}

.nav-list li a::after, .nav-list li nuxt-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px; /* 線の高さ */
  background-color: #e91eff; /* 線の色 */
  transition: width 0.3s ease; /* アニメーション */
}

.nav-list li a:hover::after, .nav-list li nuxt-link:hover::after {
  width: 100%; /* ホバー時に線を100%表示 */
}



/* グローバル設定 */
#app {
  background-image: url('/assets/img1.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  font-family: 'Arial', sans-serif;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
