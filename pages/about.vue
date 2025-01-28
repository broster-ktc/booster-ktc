<template>
    <div id="app">
      <!-- ヘッダー -->
  
  
     
      <h2>メンバー紹介</h2>
      <section id="members" class="members">
        <div v-for="(member, index) in members" :key="index" class="member-card">
          <img class="member-img" :src="member.image" :alt="'メンバー' + (index + 1)" />
          <h3>{{ member.name }}</h3>
          <p>得意キャラ: {{ member.favorite }}</p>
          <p>総合トロフィー: {{ member.toro }}</p>
  
          <div class="social-links">
            <a :href="member.twitchLink" target="_blank">
              <img src="/assets/icon-ig.png" alt="Twitch" class="social-icon" />
            </a>
            <a :href="member.twitter" target="_blank">
              <img src="/assets/icon-x.png" alt="Twitter" class="social-icon" />
            </a>
            <a :href="member.instagram" target="_blank">
              <img src="/assets/icon-you.png" alt="Instagram" class="social-icon" />
            </a>
            <a :href="member.youtube" target="_blank">
              <img src="/assets/icon-tiktok.png" alt="YouTube" class="social-icon" />
            </a>
          </div>
        </div>
      </section>
  
      <!-- フッター -->
    
    </div>
  </template>
  
  <script>
 export default {
  name: 'App',
  layout: 'special',  // 'special' レイアウトを使用
  data() {
    return {
        members: [
          {
            name: 'メンバー1',
            favorite: 'タラ',
            image: './assets/a.jpg',
            toro: '50000',
            twitchLink: 'https://twitch.tv/member1',
            twitter: 'https://twitter.com/member1',
            instagram: 'https://instagram.com/member1',
            youtube: 'https://youtube.com/member1',
          },
          {
            name: 'メンバー2',
            favorite: 'ガス',
            image: './assets/b.jpg',
            toro: '50000',
            twitchLink: 'https://twitch.tv/member2',
            twitter: 'https://twitter.com/member2',
            instagram: 'https://instagram.com/member2',
            youtube: 'https://youtube.com/member2',
          },
          {
            name: 'メンバー3',
            favorite: 'カール',
            image: './assets/c.jpg',
            toro: '50000',
            twitchLink: 'https://twitch.tv/member3',
            twitter: 'https://twitter.com/member3',
            instagram: 'https://instagram.com/member3',
            youtube: 'https://youtube.com/member3',
          },
          {
            name: 'メンバー4',
            favorite: 'ニタ',
            image: './assets/d.jpg',
            toro: '50000',
            twitchLink: 'https://twitch.tv/member4',
            twitter: 'https://twitter.com/member4',
            instagram: 'https://instagram.com/member4',
            youtube: 'https://youtube.com/member4',
          },
          {
            name: 'メンバー5',
            favorite: 'ルー',
            image: './assets/e.jpg',
            toro: '50000',
            twitchLink: 'https://twitch.tv/member5',
            twitter: 'https://twitter.com/member5',
            instagram: 'https://instagram.com/member5',
            youtube: 'https://youtube.com/member5',
          },
          {
            name: 'メンバー6',
            favorite: 'ビー',
            image: './assets/e.jpg',
            toro: '50000',
            twitchLink: 'https://twitch.tv/member6',
            twitter: 'https://twitter.com/member6',
            instagram: 'https://instagram.com/member6',
            youtube: 'https://youtube.com/member6',
          },
          {
            name: 'メンバー7',
            favorite: 'プリモ',
            image: './assets/f.jpg',
            toro: '50000',
            twitchLink: 'https://twitch.tv/member7',
            twitter: 'https://twitter.com/member7',
            instagram: 'https://instagram.com/member7',
            youtube: 'https://youtube.com/member7',
          },
          {
            name: 'メンバー8',
            favorite: 'ポニー',
            image: './assets/g.jpg',
            toro: '50000',
            twitchLink: 'https://twitch.tv/member8',
            twitter: 'https://twitter.com/member8',
            instagram: 'https://instagram.com/member8',
            youtube: 'https://youtube.com/member8',
          },
        ],
      }
    },
  }
  </script>
  
  <style scoped>
  /* グローバル設定 */
  a {
    color: #1e90ff;
    text-decoration: none;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  #app {
    background-image: url('/assets/img1.jpg'); /* パブリックアセットフォルダを使用 */
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
  
  h2 {
    font-size: 2.5em;
    margin-top: 7rem;
    text-align: center;
  }
  
  /* メインコンテンツ */
  .about,
  .members {
    padding:  20px;
    text-align: center;
    margin-left: 2rem;
  }
  
  .member-card {
    display: inline-block;
    width: 250px;
    margin: 20px;
    background-color: rgba(51, 51, 51, 0.8);
    padding: 10px;
    border-radius: 10px;
  }
  .members {
    padding: 40px 20px;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 3列に設定 */
  }
  
  .member-card img {
    width: 100%;
  
    object-fit: cover;
    border-radius: 10px;
  }
  .member-img {
    height: 200px;
  }
  .member-card h3 {
    font-size: 1.5em;
    margin-top: 10px;
  }
  
  .member-card a {
    display: block;
    margin-top: 10px;
  }
  
  /* SNSアイコンのスタイル */
  /* SNSアイコンのスタイル */
  .social-links {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    padding: 0; /* 親要素の余計なパディングを排除 */
  }
  
  .social-icon {
    width: 20px; /* アイコンサイズを小さくする */
    height: 20px;
    margin: 0 5px; /* アイコン間のスペースを少し広げる */
    flex-shrink: 0; /* アイコンが縮小しないようにする */
  }
  
  .social-icon:hover {
    transform: scale(1.1);
  }
  
  </style>
  