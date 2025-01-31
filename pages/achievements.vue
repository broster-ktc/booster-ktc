<template>
    <div id="app">
      <h2 class="page-title">活動</h2>
  
      <!-- ニュースリスト部分 -->
      <ul v-if="!selectedNewsItem" class="news-list">
        <li v-for="newsItem in news" :key="newsItem.id" class="news-item" @click="showDetails(newsItem)">
         <!--<h2 class="news-title">{{ newsItem.title }}</h2>
          <small class="news-date">{{ newsItem.date }}</small>--> 
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
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        news: [], // ニュースアイテムを格納する配列
        selectedNewsItem: null, // 初期状態では詳細は非表示（null）
      };
    },
    async mounted() {
      try {
        const apiUrl = 'https://wqfkdkp1er.microcms.io/api/v1/achievements';
        const apiKey = 'I9iu0WyMU0nWG67IONlYf4sVGzfbj3aegKsZ';
        const response = await axios.get(apiUrl, {
          headers: {
            'X-MICROCMS-API-KEY': apiKey,
          },
        });
        this.news = response.data.contents; // APIから取得したニュースデータをセット
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    },
    methods: {
      // ニュースアイテムをクリックした時に詳細を表示
      showDetails(newsItem) {
        this.selectedNewsItem = newsItem; // クリックされたニュースをselectedNewsItemにセット
      },
      // 詳細を閉じる
      closeDetails() {
        this.selectedNewsItem = null; // 詳細を非表示にする
      }
    },
  }
  </script>
  
  <style>

  
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
 
    color: black;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 15px;
   
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.346);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer; /* カーソルをポインターに変更 */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-width: 800px;
    margin: 10px auto; /* 中央配置 */
  }
  
  .news-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.68);
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
    margin-bottom: 30px;
  }
  
  .news-image {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-top: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    max-height: 580px;
    margin-bottom: 15px;
  }
  
  .news-detail {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 30px;
    border-radius: 15px;
    max-width: 750px;
    margin: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
     margin: 0 auto;
    margin-bottom: 25px;
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
  