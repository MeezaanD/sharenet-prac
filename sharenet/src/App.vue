<template>
	<div>
		<Navbar />
		<router-view />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/NavBar.vue';


export default defineComponent({
	name: 'LandingPageView',
	components: {
		Navbar
	},
});
</script>

<style>
</style>
