<template>
    <div class="iframe-container">
        <iframe class="iframe" width="760" height="515" src="https://www.youtube.com/embed/lnHJpTMnB4g?si=_bkBwNyv3Pw9ANu7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</template>


<style>

#app {
  position: relative;
  background-image: url('/assets/back.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  font-family: 'Arial', sans-serif;
  margin: 0;
  min-height: 100vh; /* 画面の高さに合わせる */
  display: flex;
  flex-direction: column;
}

h1{


font-size: 42px;


}

.member-p{
  font-size: 28px;
}
.member-container {
  display: flex;
  align-items: center; /* 縦方向の中央揃え */
  justify-content: center; /* 横方向の中央揃え */
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto; /* 左右中央揃え */
  margin-bottom: 5rem; /* 下の余白も調整 */
}



.member-image {
  flex-shrink: 0;
  margin-right: 20px;
}

.member-img {
  width: 500px;
  height: 500px;
  object-fit: cover;
}

.member-info {
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.6); /* 背景を少し暗くして可読性向上 */
  border-radius: 10px; /* 角を丸くする */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* 少し影をつける */
  width: 1000px; /* 'rem'から'px'に変更（意図的かどうか不明） */
  height: auto; /* 高さを自動に調整 */
  padding: 20px; /* 内側の余白を調整 */
  text-align: center; /* テキストを中央揃え */
}

.iframe-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* 親要素の幅に合わせる */
}

.iframe {

  display: block;
  margin: 0 auto; /* 横方向で中央揃え */
  margin-bottom: 3rem;
  margin-top: 5rem;
}
 
/* フッター */
footer {
  background-color: rgba(17, 17, 17, 0.8);
  padding: 20px;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-links {
  margin-top: 10px;
}

.social-links a {
  margin: 0 10px;
  font-size: 1.2em;
}

.social-links a:hover {
  color: #1e90ff;
}
</style>
