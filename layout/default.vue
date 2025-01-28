<!-- layouts/default.vue -->
<template>
  <div class="layout-container">
    <!-- サイドバー -->
    <div class="sidebar">
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </div>

    <!-- メインコンテンツ -->
    <div class="main-content">
      <header>
        <h1>Website Header</h1>
      </header>

      <main>
        <slot></slot> <!-- ページごとの内容 -->
      </main>
    </div>
  </div>
</template>

<script setup>
// 追加のロジックやデータが必要であればここに追加
</script>

<style scoped>
.layout-container {
  display: flex;
}

.sidebar {
  width: 250px;
  background-color: #333;
  color: white;
  padding: 15px;
}

.sidebar nav ul {
  list-style-type: none;
  padding: 0;
}

.sidebar nav ul li {
  margin: 10px 0;
}

.sidebar nav ul li a {
  color: white;
  text-decoration: none;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
}

header {
  background-color: #f4f4f4;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
