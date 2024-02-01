<template>
	<section id="venues">
		<div class="container-fluid py-3">
			<h2>Venues</h2>
			<div class="mb-3">
				<label for="statusFilter" class="form-label text-dark">Filter by Status:</label>
				<select v-model="statusFilter" id="statusFilter" class="form-select">
					<option value="">All</option>
					<option value="available">Available</option>
					<option value="sold out">Sold Out</option>
				</select>
			</div>
			<div v-if="filteredWorkshops.length === 0" class="card mt-3">
				<div class="card-body">
					<h5 class="card-title">Fetching Workshops...</h5>
					<p class="card-text">Please wait a moment.</p>
				</div>
			</div>
			<div class="d-flex flex-wrap justify-content-evenly">
				<div v-for="workshop in filteredWorkshops" :key="workshop.date"
					class="shadow-lg border-1 rounded-4 card rounded py-3 mt-3">
					<h5 class="card-header text-start">{{ workshop.workshop_name }}</h5>
					<div class="card-body">
						<div class="information">
							<div class="d-flex align-items-start justify-content-between">
								<h6 class="card-subtitle card-venue mb-2 text-body-secondary">
									{{ workshop.venue }}
								</h6>
								<p class="card-subtitle card-date">{{ formatDate(workshop.date) }}</p>
							</div>
							<div class="py-1"></div>
							<div class="d-flex align-items-start justify-content-between">
								<span class="card-text badge w-auto card-status p-3" :class="{
									'text-bg-success': workshop.status === 'available',
									'text-bg-danger': workshop.status === 'sold out',
								}">
									{{ workshop.status }}
								</span>
								<button type="button" class="btn btn-secondary p-2"
									:disabled="workshop.status === 'sold out'" @click="bookWorkshop(workshop)">
									Book Now
								</button>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

interface Workshop {
	venue: string;
	date: string;
	workshop_name: string;
	status: string;
}

export default defineComponent({
	data() {
		return {
			workshops: [] as Workshop[],
			statusFilter: '' as string,
		};
	},
	computed: {
		filteredWorkshops(this: { workshops: Workshop[], statusFilter: string }) {
			if (!this.statusFilter) {
				return this.workshops;
			}
			return this.workshops.filter((workshop) => workshop.status === this.statusFilter);
		},
	},
	mounted() {
		this.fetchWorkshops();
	},
	methods: {
		async fetchWorkshops() {
			try {
				const response = await fetch('https://sharenet-prac-api.onrender.com/workshops');
				const data = await response.json();
				this.workshops = data;
				console.log('Workshops:', this.workshops);
			} catch (error) {
				console.error('Error fetching workshops:', error);
			}
		},
		formatDate(date: string) {
			const formattedDate = new Date(date).toISOString().split('T')[0];
			return formattedDate;
		},
		async bookWorkshop(workshop: Workshop) {
			if (workshop.status === 'available') {
				const confirmBooking = confirm('Are you sure you want to book this workshop?');
				if (confirmBooking) {
					workshop.status = 'sold out';
				}
			}
		},
	},
});
</script>
  
<style>
@import "../assets/css/style.css";
</style>
  