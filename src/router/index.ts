import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InteractionsView from '../views/InteractionsView.vue'
import InteractionView from '../views/InteractionView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  //changed the history line to this to follow a github actions guide but it might have a mistake in it
  history: createWebHistory('/contact-reminder/'),
  routes: [
    // Original routes from the Vite scaffolding files
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },

    { path: '/', name: 'home', component: HomeView },
    { path: '/interactions', name: 'interactions', component: InteractionsView },
    { path: '/interaction', name: 'interaction', component: InteractionView },
  ],
})

export default router
