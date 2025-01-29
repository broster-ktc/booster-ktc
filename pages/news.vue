<template>
    <div id="app">
      <h1 class="page-title">News</h1>
      <ul class="news-list">
        <li v-for="newsItem in news" :key="newsItem.id" class="news-item">
          <h2 class="news-title">{{ newsItem.title }}</h2>
          <p class="news-description">{{ newsItem.content }}</p>
          <small class="news-date">{{ newsItem.date }}</small>
          <img :src="newsItem.image?.url" alt="" class="news-image" v-if="newsItem.image" />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  // axiosをインポート
  import axios from 'axios';
  
  export default {
    data() {
      return {
        news: [],
      };
    },
    async mounted() {
      try {
        // MicroCMSのAPIエンドポイントとAPIキーを指定
        const apiUrl = 'https://9sbf9z4wl3.microcms.io/api/v1/news'; // エンドポイント
        const apiKey = '9T1FcWxsEOpZhcmqHl9q1Co7mX6IO0fZo3wN'; // 実際のAPIキー
  
        // APIリクエストを送信
        const response = await axios.get(apiUrl, {
          headers: {
            'X-MICROCMS-API-KEY': apiKey, // APIキーをヘッダーに設定
          },
        });
  
        // レスポンスのデータを`news`に格納
        this.news = response.data.contents; // MicroCMSのレスポンスに合わせて修正
  
      } catch (error) {
        console.error('Error fetching news:', error); // エラーがあれば表示
      }
    },
  }
  </script>
  
  <style scoped>
  #app {
    background-image: url('/assets/back.jpg'); /* 背景画像 */
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: white;
    font-family: 'Arial', sans-serif;
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center; /* コンテンツを中央に配置 */
    align-items: center;
  }
  
  .page-title {
    font-size: 3em;
    text-align: center;
    margin-bottom: 30px;
    color: #ffffff;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* タイトルに影をつけて目立たせる */
  }
  
  .news-list {
    list-style-type: none;
    padding: 0;
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .news-item {
    background-color: rgba(255, 255, 255, 0.85); /* 半透明の背景 */
    color: black;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 強調した影 */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .news-item:hover {
    transform: translateY(-8px); /* ホバー時に少し浮き上がる */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3); /* さらに強調された影 */
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
    line-height: 1.6; /* 読みやすくするための行間調整 */
  }
  
  .news-date {
    font-size: 0.9em;
    color: gray;
    margin-top: 10px;
    text-align: left;
  }
  
  .news-image {
    width: 100%;  /* 親要素の幅に合わせて画像をリサイズ */
    max-width: 100%; /* 最大幅を100%に設定 */
    height: auto;
    margin-top: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* 画像に影をつける */
  }
  
  @media (max-width: 768px) {
    .news-item {
      width: 100%; /* スマホでは幅を100%に */
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
  