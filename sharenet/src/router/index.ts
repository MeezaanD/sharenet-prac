import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: LandingPageView
	},
	{
		path: '/venues',
		name: 'venues',
		component: () => import('../views/VenuesPageView.vue')
	},
	{
		path: '/contact',
		name: 'contact',
		component: () => import('../views/ContactPageView.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
