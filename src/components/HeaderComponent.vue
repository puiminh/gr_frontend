<template lang="">
    <div>
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 pb-12">
            <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/images/recipe-favicon-black.png" class="h-10" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white dm-serif">Recipes.</span>
            </router-link>
            <div
              v-if="isAuthenticated" 
              class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  @click="handleClickUserDropdown" 
                  type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full object-cover" :src="user.avatar" alt="user photo">
                </button>
                <!-- Dropdown menu -->
                <div 
                  class="absolute top-10 right-10 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" 
                  :class="{hidden: !openUserDropdown}"
                  id="user-dropdown">
      
                  <div class="px-4 py-3">
                    <span class="block text-sm text-gray-900 dark:text-white">{{user.name}}</span>
                    <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{{user.email}}</span>
                  </div>
                  <ul class="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <p @click="openContentManage" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Content</p>
                    </li>
                    <li>
                      <p @click="openBookmark" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Bookmark</p>
                    </li>
                    <li>
                      <p @click="openProfile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</p>
                    </li>
                    <li v-if="user.role == 2">
                      <p @click="managerStore" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Manager Stores</p>
                    </li>
                   
                    <li>
                      <p @click="signoutMethod" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</p>
                    </li>
                  </ul>
                </div>
                <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
            </div>
            <div class="bg-blue-600 p-2 rounded-2xl text-white text-bold text-medium flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse" v-else> 
              <router-link to="/sign-in" >
                Sign In
              </router-link>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
              <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <router-link
                  :class="{['md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 dark:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700']: currentRouteName == 'home'}" 
                  to="/" class="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</router-link>
                </li>
                <li>
                  <router-link
                  :class="{['md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 dark:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700']: currentRouteName == 'search'}" 
                  to="/search" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Search</router-link>
                </li>
                <!-- <li>
                  <router-link
                  :class="{['md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 dark:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700']: currentRouteName == 'storeView'}" 
                  to="/store/1" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Store</router-link>
                </li> -->
                <li>
                  <router-link
                  :class="{['md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 dark:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700']: currentRouteName == 'map'}" 
                  to="/map" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Map</router-link>
                </li>
                <li>
                  <router-link
                  :class="{['md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 dark:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700']: currentRouteName == ''}" 
                  to="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</router-link>
                </li>
              </ul>
            </div>
            </div>
          </nav>
    </div>
</template>
<script>
import { openModal } from 'jenesius-vue-modal';
import UserInfoModal from './modals/UserInfoModal.vue';
import { mapState, mapActions } from 'pinia';
import { useAuthStore } from '@/stores/auth';

export default {
  computed: {
    ...mapState(useAuthStore, ['isAuthenticated','currentUser']),
    currentRouteName() {
        return this.$route.name;
    }
  },
  watch: {
    currentUser() {
      console.log("currentUser changed");
    }
  },

  methods: {
    ...mapActions(useAuthStore, ['signOut']),
    handleClickUserDropdown () { 
      this.openUserDropdown = !this.openUserDropdown;
    },
    async openProfile() {
      await openModal(UserInfoModal, {predata: this.user})
    },
    openContentManage() {
      this.$router.push('/manage-contents');
    },
    openBookmark() {
      this.$router.push('/bookmarks');
    },
    signoutMethod() {
      this.signOut();
      this.$router.push('/sign-in');
    },
    managerStore() {
      this.$router.push('/manage-stores');
    }
  },
  data () {
    return {
      openUserDropdown: false,
      user: {
        first_name: "Minh",
        last_name: "Bui",
        email: "abc@gmail.com",
        avatar: "https://www.paratime.vn/wp-content/uploads/2019/09/timestudio.vn-corporate-headshot-pricing-01.jpg",
      }
    }
  },
  mounted () {
    if (this.isAuthenticated) {
      this.user = this.currentUser;
    }
  }
}
</script>
<style lang="">
    
</style>