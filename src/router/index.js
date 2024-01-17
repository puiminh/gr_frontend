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

import { useAuthStore } from '@/stores/auth';


import NoneLayoutVue from '@/layouts/NoneLayout.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign-in',
      name: 'sign-in',
      meta: {
        requiresAuth: 0,
        layout: NoneLayoutVue,
      },
      component: SignInView
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      meta: {
        requiresAuth: 0,
        layout: NoneLayoutVue,
      },
      component: SignUpView
    },
    {
      path: '/',
      name: 'home',
      meta: {
        requiresAuth: 0,
        layout: MainLayout,
      },
      component: HomeView
    },
    {
      path: '/bookmarks',
      name: 'bookmars',
      meta: {
        requiresAuth: 1,
        layout: MainLayout,
      },
      component: BookmarkViewVue
    },
    {
      path: '/manage-stores',
      name: 'manage-stores',
      meta: {
        requiresAuth: 2,
        layout: MainLayout,
      },
      component: ManageStoreViewVue
    },
    {
      path: '/map',
      name: 'map',
      meta: {
        requiresAuth: 0,
        layout: MainLayout,
      },
      component: MapView,
    },
    {
      path: '/search',
      name: 'search',
      meta: {
        requiresAuth: 0,
        layout: MainLayout,
      },
      component: SearchView,
    },
    {
      path: '/store/:id',
      name: 'storeView',
      meta: {
        requiresAuth: 0,
        layout: MainLayout,
      },
      component: StoreView,
    },
    {
      path: '/create-store',
      name: 'create-store',
      meta: {
        requiresAuth: 2,
        layout: MainLayout,
      },
      component: CreateStore,
    },
    {
      path: '/recipe/:id',
      name: 'recipeView',
      meta: {
        requiresAuth: 1,
        layout: RecipeViewLayout,
      },
      component: RecipeView,
    },
    {
      path: '/create-recipe',
      name: 'create-recipe',
      meta: {
        requiresAuth: 1,
        layout: RecipeViewLayout,
      },
      component: CreateRecipeVue,
    },

  ]
})


router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  //require sign in
  if (to.matched.some((record) => record.meta.requiresAuth>0)) {
    if (authStore.isAuthenticated) {
      next();
      return;
    }
    next("/sign-in");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  //require promoter sign in
  if (to.matched.some((record) => record.meta.requiresAuth>1)) {
    if (authStore.isPromoter) {
      next();
      return;
    }
    next("/sign-in");
  } else {
    next();
  }
});

export default router
