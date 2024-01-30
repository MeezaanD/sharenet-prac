<template>
	<section id="venues">
		<div class="container-fluid mt-3">
			<h2>Venues</h2>
			<button @click="fetchWorkshops">Fetch Workshops</button>
		</div>
	</section>
</template>
  
<script lang="ts">
export default {
	methods: {
		async fetchWorkshops() {
			try {
				const response = await fetch('http://localhost:3000/workshops');
				const data = await response.json();

				console.log('Workshops:', data);
			} catch (error) {
				console.error('Error fetching workshops:', error);
			}
		},
	},
};
</script>
  
<style>
@import "../assets/css/style.css";
</style>
  