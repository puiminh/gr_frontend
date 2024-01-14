import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MapView from '@/views/MapView.vue'
import RecipeView from '@/views/recipes/RecipeView.vue'
import SearchView from '@/views/SearchView.vue'


import MainLayout from '@/layouts/MainLayout.vue'
import RecipeViewLayout from '@/layouts/RecipeViewLayout.vue'
import StoreView from '@/views/stores/StoreView.vue'
import CreateStore from '@/views/stores/CreateStore.vue'

import CreateRecipeVue from '@/views/recipes/CreateRecipe.vue'



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
      path: '/store/:id',
      name: 'storeView',
      meta: {
        layout: MainLayout,
      },
      component: StoreView,
    },
    {
      path: '/create-store',
      name: 'create-store',
      meta: {
        layout: MainLayout,
      },
      component: CreateStore,
    },
    {
      path: '/recipe/:id',
      name: 'recipeView',
      meta: {
        layout: RecipeViewLayout,
      },
      component: RecipeView,
    },
    {
      path: '/create-recipe',
      name: 'create-recipe',
      meta: {
        layout: RecipeViewLayout,
      },
      component: CreateRecipeVue,
    },

  ]
})

export default router
