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
import BookmarkViewVue from '@/views/BookmarkView.vue'
import ManageStoreViewVue from '@/views/stores/ManageStoreView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'


import NoneLayoutVue from '@/layouts/NoneLayout.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign-in',
      name: 'sign-in',
      meta: {
        layout: NoneLayoutVue,
      },
      component: SignInView
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      meta: {
        layout: NoneLayoutVue,
      },
      component: SignUpView
    },
    {
      path: '/',
      name: 'home',
      meta: {
        layout: MainLayout,
      },
      component: HomeView
    },
    {
      path: '/bookmarks',
      name: 'bookmars',
      meta: {
        layout: MainLayout,
      },
      component: BookmarkViewVue
    },
    {
      path: '/manage-stores',
      name: 'manage-stores',
      meta: {
        layout: MainLayout,
      },
      component: ManageStoreViewVue
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
