<template>
	<nav class="navbar navbar-expand-lg">
		<div class="container-fluid">
			<a class="nav-link" href="/"><i class="bi bi-house"></i> Home</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link" href="/venues"><i class="bi bi-building"></i> Venues</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/contact"><i class="bi bi-telephone-fill"></i> Contact Us</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'navbar',
	components: {

	},
});
</script>

<style>
@import url("../assets/css/style.css");
</style>
