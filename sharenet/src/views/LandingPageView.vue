<template>
	<section id="landing">
		<div></div>
	</section>
</template>
  
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
	name: 'LandingPageView',
	components: {},
	data() {
		return {
			spotPrices: [],
		};
	},
	mounted() {
		this.fetchSpotPrices();
	},
	methods: {
		async fetchSpotPrices() {
			try {
				const response = await axios.get('https://sharenet-prac.onrender.com/spots', { withCredentials: true });
				this.spotPrices = response.data;
				console.log(response);
			} catch (error) {
				console.error('Error fetching spot prices:', error);
			}
		},
	},
});
</script>
  