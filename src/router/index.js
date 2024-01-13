import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MapView from '@/views/MapView.vue'
import RecipeView from '@/views/RecipeView.vue'
import SearchView from '@/views/SearchView.vue'


import MainLayout from '@/layouts/MainLayout.vue'
import RecipeViewLayout from '@/layouts/RecipeViewLayout.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: MainLayout,
      },
      component: HomeView
    },
    {
      path: '/map',
      name: 'map',
      meta: {
        layout: MainLayout,
      },
      component: MapView,
    },
    {
      path: '/search',
      name: 'search',
      meta: {
        layout: MainLayout,
      },
      component: SearchView,
    },
    {
      path: '/recipeView',
      name: 'recipeView',
      meta: {
        layout: RecipeViewLayout,
      },
      component: RecipeView,
    },
  ]
})

export default router
