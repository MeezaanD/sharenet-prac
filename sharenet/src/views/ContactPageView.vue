<template>
	<section id="contact">
		<div class="container-fluid py-3">
			<h2>Contact Us</h2>
			<router-link to="/"><i class="bi bi-arrow-left"></i> Return Home</router-link>
			<div class="row pt-5 text-center">
				<div class="col-lg-5 col-md-6 col-sm-12 pt-lg-5">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4949556038996!2d18.627532676377612!3d-33.87690447322349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc41e6218f7ab3%3A0xbdd802ca53b92d43!2sSharenet%20(Pty)%20Ltd!5e0!3m2!1sen!2sza!4v1706621523182!5m2!1sen!2sza"
						width="500" height="500" style="border: 0" loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
				<div class="col-lg-7 col-md-6 col-sm-12 text-start pt-5">
					<div class="info p-4 rounded-3 bg-body-tertiary">
						<h2>Contact Information</h2>
						<h3>FIND US <span><a target="_blank" href="https://www.sharenet.co.za/">HERE</a></span></h3>
						<div class="d-flex pt-3">
							<h6 class="w-25">HEAD OFFICE</h6>
							<ul>
								<li>301, 3rd Floor Imperial Terraces</li>
								<li>Tyger Waterfront</li>
								<li>Carl Cronje Drive</li>
								<li>Bellville, Cape Town</li>
								<li>7530</li>
							</ul>
						</div>
						<div class="d-flex pt-3">
							<h6 class="w-25">TELEPHONE</h6>
							<ul>
								<li>(021) 700 4800</li>
								<li>+27 21 700 4800 (International)</li>
							</ul>
						</div>
						<div class="d-flex pt-3">
							<h6 class="w-25">EMAIL</h6>
							<ul>
								<li>support@sharenet.co.za</li>
							</ul>
						</div>
						<div class="d-flex pt-3">
							<h6 class="w-25">Operation Hours</h6>
							<ul>
								<li>Monday - Friday, 8am - 5pm</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "contact",
	components: {},
});
</script>

<style>
@import "../assets/css/style.css";
</style>
