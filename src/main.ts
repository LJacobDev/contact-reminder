import './assets/main.css'

import HomeView from './views/HomeView.vue'
import InteractionsView from './views/InteractionsView.vue'
import InteractionView from './views/InteractionView.vue'

import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'

//Begin section of lines added to follow github actions guide, even though routes are crated in router/index.ts
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/interactions', name: 'interactions', component: InteractionsView },
  { path: '/interaction', name: 'interaction', component: InteractionView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

//End section of lines added to follow github actions guide, even though routes are crated in router/index.ts

const app = createApp(App)

app.use(router)

app.mount('#app')
