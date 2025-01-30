<template>
    <div id="app">
      <!-- ヘッダー -->
      <h2>お問い合わせ</h2>
  
      <!-- お問い合わせフォーム -->
      <section id="contact" class="contact">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">お名前</label>
            <input type="text" id="name" v-model="form.name" required placeholder="お名前を入力してください" />
          </div>
  
          <div class="form-group">
            <label for="email">メールアドレス</label>
            <input type="email" id="email" v-model="form.email" required placeholder="メールアドレスを入力してください" />
          </div>
  
          <div class="form-group">
            <label for="message">お問い合わせ内容</label>
            <textarea id="message" v-model="form.message" required placeholder="お問い合わせ内容を入力してください"></textarea>
          </div>
  
          <button type="submit" class="submit-btn">送信する</button>
        </form>
      </section>
  
      <!-- フッター -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
    layout: 'default',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      handleSubmit() {
        // ここでフォームの送信処理を行います。例えばAPIの呼び出しなど。
        console.log("送信された内容:", this.form);
  
        // フォームをリセットする
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
  
        alert('お問い合わせありがとうございました！');
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
    padding-bottom: 20px;
  }
  
  /* お問い合わせフォーム */
  .contact {
    padding: 20px;
    text-align: center;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-group {
    margin: 15px 0;
    text-align: left;
    width: 100%;
  }
  
  label {
    display: block;
    font-size: 1.1em;
    margin-bottom: 8px;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    font-size: 1em;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
  
  button.submit-btn {
    background-color: #e91eff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1.1em;
    cursor: pointer;
  }
  
  button.submit-btn:hover {
    background-color:#e91effb4 ;
  }
  </style>
  