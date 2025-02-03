<template>
  <div id="app">
    <h2>メンバー紹介</h2>
    <section id="members" class="members">
      <ul>
        <li v-for="member in news" :key="member.id" class="member-card">
          <nuxt-link :to="`/member/${member.id}`">
            <img :src="member.image?.url" alt="" class="member-img" v-if="member.image" />
            <h3 class="news-title">{{ member.name }}</h3>
            <p>専攻: {{ member.subject }}</p>
            <p>学年: {{ member.grade }}</p>
          </nuxt-link>
        </li>
      </ul>
    </section>
  </div>
</template>
<script setup>


// ニュースアイテムを格納する変数
const news = ref([]);

// `useFetch`を使ってデータを取得
const { data, error, pending } = useFetch('https://tzbo429akz.microcms.io/api/v1/members', {
  headers: {
    'X-MICROCMS-API-KEY': 'g0l29UYCHSmmRpNLwIia2RqsVUxpqbZSdFKf', // APIキーをヘッダーに設定
  },
});

// `watch`でデータが更新されたときに`news`を更新
watch(() => data.value, (newData) => {
  if (newData) {
    news.value = newData.contents; // APIから取得したデータを`news`に格納
  }
});

// エラーハンドリングのために`error`と`pending`も使う
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
  position: relative;
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
}

h2 {
  font-size: 2.5em;
  margin-top: 7rem;
  text-align: center;
}

h3{
  color: white;
}

.members {
  padding: 40px 20px;
  text-align: center;
  grid-template-columns: repeat(4, 1fr); /* 3列に設定 */
}

.member-card {
  display: inline-block;
  width: 250px;
  margin: 20px;
  background-color: rgba(51, 51, 51, 0.8);
  padding: 10px;
  border-radius: 10px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.member-card:hover {
  transform: scale(1.05); /* Slightly enlarges the card */
  background-color: rgba(51, 51, 51, 1); /* Darker background */
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
</style>
