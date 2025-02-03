<template>
  <div id="app">
    <h2 class="page-title">News</h2>

    <!-- ローディング表示 -->
    <p v-if="pending">Loading...</p>

    <!-- エラー表示 -->
    <p v-if="error">Failed to fetch news. Please try again later.</p>

    <!-- ニュースリスト部分 -->
    <ul v-if="!selectedNewsItem && !pending && !error" class="news-list">
      <li v-for="newsItem in news" :key="newsItem.id" class="news-item" @click="showDetails(newsItem)">
        <h2 class="news-title">{{ newsItem.title }}</h2>
        <small class="news-date">{{ newsItem.date }}</small>
        <img :src="newsItem.image?.url" alt="" class="news-image" v-if="newsItem.image" />
      </li>
    </ul>

    <!-- 詳細表示部分 -->
    <div v-if="selectedNewsItem" class="news-detail">
      <h2 class="news-title">{{ selectedNewsItem.title }}</h2>
      <p class="news-description">{{ selectedNewsItem.content }}</p>
      <small class="news-date">{{ selectedNewsItem.date }}</small>
      <img :src="selectedNewsItem.image?.url" alt="" class="news-image" v-if="selectedNewsItem.image" />
      <button @click="closeDetails">Close</button>
    </div>
  </div>
</template>

<script setup>


// コンポーザブルを使用してデータを取得
const {
  news,
  selectedNewsItem,
  error,
  pending,
  showDetails,
  closeDetails
} = useNews();
</script>



  <style scoped>
  #app {
    background-image: url('/assets/back.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: white;
    font-family: 'Arial', sans-serif;
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 画面の中央に配置 */
    align-items: center;
  }

  .page-title {
    font-size: 3em;
    text-align: center;
    margin-bottom: 30px;
    color: #ffffff;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  }

  .news-list {
    list-style-type: none;
    padding: 0;
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .news-item {
    background-color: rgba(255, 255, 255, 0.85);
    color: black;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer; /* カーソルをポインターに変更 */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-width: 600px;
    margin: 10px auto; /* 中央配置 */
  }

  .news-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  .news-title {
    font-size: 1.8em;
    font-weight: bold;
    margin: 0;
    color: #333;
  }

  .news-description {
    font-size: 1.1em;
    margin-top: 10px;
    color: #555;
    line-height: 1.6;
  }

  .news-date {
    font-size: 0.9em;
    color: gray;
    margin-top: 10px;
    text-align: left;
  }

  .news-image {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-top: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    max-height: 280px;
  }

  .news-detail {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 30px;
    border-radius: 15px;
    max-width: 600px;
    margin: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .news-detail button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }

  .news-detail button:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    .news-item {
      width: 100%;
      padding: 15px;
    }
  }

  @media (max-width: 480px) {
    .page-title {
      font-size: 2em;
    }
    .news-title {
      font-size: 1.5em;
    }
    .news-description {
      font-size: 1em;
    }
  }
  </style>
