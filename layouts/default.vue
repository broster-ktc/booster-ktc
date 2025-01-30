<template>
	<div>
		<Header />
    <slot />
		<Footer /> 
	</div>
</template>
<script>
	import Header from "../components/Header.vue"; // headerをインポート
	import Footer from "../components/Footer.vue"; // footerをインポート
	export default {
		components: {
			Header,
			Footer
		}
	};
</script>

<script setup>

</script>


<style>
@import url('https://fonts.googleapis.com/earlyaccess/nicomoji.css');
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+1p&display=swap');

h1 {
  font-family: 'Nico Moji', sans-serif; /* Apply Nico Moji font */
  color: #000; /* Set text color to black */
  text-shadow: 
    1px 1px 0 #fff,   /* Top-right shadow */
    -1px -1px 0 #fff, /* Bottom-left shadow */
    1px -1px 0 #fff,  /* Top-left shadow */
    -1px 1px 0 #fff;  /* Bottom-right shadow */
}



h2 {
  font-family: 'M PLUS 1p', sans-serif; /* フォントをM PLUS 1pに設定 */
  color: #000; /* テキストカラーを黒に設定 */
  text-shadow: 
    1px 1px 0 #fff,   /* 右上の影 */
    -1px -1px 0 #fff, /* 左下の影 */
    1px -1px 0 #fff,  /* 左上の影 */
    -1px 1px 0 #fff;  /* 右下の影 */
}
</style>


