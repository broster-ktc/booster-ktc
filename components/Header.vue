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
          <li><a href="#members">大会結果</a></li>
          <li><nuxt-link to="/news">ニュース</nuxt-link></li>

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
    background-image: url('/assets/back.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-color: rgba(0, 0, 0, 0.7);
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
    font-size: 1.2em;
  }
  
  .nav-list li a, .nav-list li nuxt-link {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s, transform 0.3s;
  }
  
  .nav-list li a:hover, .nav-list li nuxt-link:hover {
    color: #1e90ff;
    transform: scale(1.1); /* ホバー時に少し拡大 */
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
  