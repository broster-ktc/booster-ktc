<template>
    <header>
      <div class="logo-container">
        <img src="/assets/iconn.png" alt="チームロゴ" class="logo" />
        <h1 class="team-name">ブロスタサークル</h1>
      </div>
      <nav>
        <ul class="nav-list">
          <li><a href="#about">チーム紹介</a></li>
          <li><a href="#members">メンバー紹介</a></li>
          <li><a href="#news">ニュース</a></li>
          <li><a href="#contact">お問い合わせ</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  }
  </script>
  
  <style scoped>
  /* ヘッダーのスタイル */
  a {
    color: #1e90ff;
    text-decoration: none;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
 
  
  /* ヘッダー */
  header {
  background-color: rgba(0, 0, 0, 0.1); /* 軽く透明な背景 */
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* ヘッダー内の要素の位置を相対的に設定 */
  z-index: 1; /* ヘッダーが他のコンテンツより前に表示されるように */
}



  
  
  .logo-container {
    display: flex;
    align-items: center;
  }
  
  .logo {
    width: 80px;
    margin-right: 10px;
  }
  
  .team-name {
    font-size: 2.5em;
    font-weight: bold;
  }
  
  nav {
    margin-left: auto;
  }
  
  .nav-list {
    display: flex;
    gap: 20px;
  }
  
  .nav-list li {
    font-size: 1.2em;
  }
  
  .nav-list li a {
    color: #ffffff;
    transition: color 0.3s;
  }
  
  .nav-list li a:hover {
    color: #1e90ff;
  }
  </style>
  