<template>
  <div id="app">
    <!-- ヘッダー -->

    <h2>メンバー紹介</h2>
    <section id="members" class="members">
      <div v-for="(member, index) in members" :key="index" class="member-card">
        <!-- 画像をクリックすると個別ページに飛ぶ -->
        <nuxt-link :to="`/member/${member.id}`">
          <img class="member-img" :src="member.image" :alt="'メンバー' + (index + 1)" />
        </nuxt-link>
        <h3>{{ member.name }}</h3>
        <p>専攻: {{ member.subject }}</p>
        <p>学年: {{ member.grade}}</p>

      </div>
    </section>

    <!-- フッター -->

  </div>
</template>

<script>
export default {
  name: 'App',
  layout: 'default',  
  data() {
    return {
      members: [
        {
          id: 1,  // 各メンバーにIDを追加
          name: 'メンバー1',
          subject: 'スーパーITエンジニア',
          image: './assets/a.jpg',
          grade: '1年',
          
        },
        {
          id: 2,
          name: 'メンバー2',
          subject: 'スーパーITエンジニア',
          image: './assets/b.jpg',
          grade: '1年',
          
        },
        {
          id: 3,
          name: 'メンバー3',
          subject: 'スーパーITエンジニア',
          image: './assets/c.jpg',
          grade: '1年',
         
        },
        {
          id: 4,
          name: 'メンバー4',
          subject: 'スーパーITエンジニア',
          image: './assets/d.jpg',
          grade: '1年',
          
        },
        {
          id: 5,
          name: 'メンバー5',
          subject: 'スーパーITエンジニア',
          image: './assets/e.jpg',
          grade: '1年',
          
        },
        {
          id: 6,
          name: 'メンバー6',
          subject: 'スーパーITエンジニア',
          image: './assets/e.jpg',
          grade: '1年',
          
        },
        {
          id: 7,
          name: 'メンバー7',
          subject: 'スーパーITエンジニア',
          image: './assets/f.jpg',
          grade: '1年',
          
        },
        {
          id: 8,
          name: 'メンバー8',
         subject: 'スーパーITエンジニア',
          image: './assets/g.jpg',
          grade: '1年',
        
        },
      ]
    }
  }
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

/* 背景の上に暗いオーバーレイを追加 */
#app::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* 透明度0.5で暗くする */
  z-index: -1; /* 背景が重ならないように後ろに配置 */
}

h2 {
  font-size: 2.5em;
  margin-top: 7rem;
  text-align: center;
}

/* メインコンテンツ */
.about,
.members {
  padding: 20px;
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
.member-card {
  transition: transform 0.3s ease;
}

.member-card:hover {
  transform: scale(1.05); /* 5%の拡大 */
}


.members {
  padding: 40px 20px;
  text-align: center;
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
