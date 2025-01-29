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
