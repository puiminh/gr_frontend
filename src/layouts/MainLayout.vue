<template>
    <div class="flex w-full h-full">

    
      <TransitionGroup
        name="sidebar"
        tag="div"
        mode="out-in"
        class="left-bar bg-white w-1/6 pt-8 flex flex-col relative "
        :class="{'w-24': collapseSidebar}"
      >
        <div class="mb-10 mx-auto">
            <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/images/logo.png" class="h-12 flex-shrink-0" alt="Flowbite Logo" />
                <Transition name="sidebar">
                  <span v-if="!collapseSidebar" class="self-center text-2xl font-semibold whitespace-nowrap dm-serif orange">Recipes.</span>
                </Transition>
            </router-link>
        </div>
  
        <div class="flex flex-col gap-4 text-lg"
          :class="{'expandSidebar': !collapseSidebar}"
        >
          <div class="menu-item py-1 flex items-center gap-4 relative">
            <IconDashboard :checked="true" class="h-8 flex-shrink-0"></IconDashboard>
            <Transition name="sidebar">
              <h2 v-if="!collapseSidebar" class="  font-bold text-slate-900 ">Home</h2>
            </Transition>
            
            <div class="w-1 h-full absolute right-0 bg-orange"></div>
          </div>
          <div class="menu-item py-1 flex items-center gap-4 relative">
            <IconExplore :checked="false" class="h-8 flex-shrink-0"></IconExplore>
            <Transition name="sidebar">
              <h2 v-if="!collapseSidebar" class="  font-bold text-slate-600 ">Explore</h2>
            </Transition>
          </div>
          <div class="menu-item py-1 flex items-center gap-4 relative">
            <IconHeart :checked="false" class="h-8 flex-shrink-0"></IconHeart>
            <Transition name="sidebar">
              <h2 v-if="!collapseSidebar" class="  font-bold text-slate-600 ">Favorite</h2>
            </Transition>
          </div>
          <div class="menu-item py-1 flex items-center gap-4 relative">
            <IconMap :checked="false" class="h-8 flex-shrink-0"></IconMap>
            <Transition name="sidebar">
              <h2 v-if="!collapseSidebar" class="  font-bold text-slate-600 ">Map</h2>
            </Transition>
          </div>
          <div class="menu-item py-1 flex items-center gap-4 relative">
            <IconSetting :checked="false" class="h-8 flex-shrink-0"></IconSetting>
            <Transition name="sidebar">
              <h2 v-if="!collapseSidebar" class="  font-bold text-slate-600 ">Account</h2>
            </Transition>
          </div>
        </div>
  
        <div style="transform: translate(0,-50%);" class="absolute top-1/2 -right-4" >
          <button @click="collapseSidebar = !collapseSidebar"  class="rounded-full  text-lg font-extrabold flex justify-center items-center bg-white p-2">
            <transition name="icon" mode="out-in">
                <svg v-if="!collapseSidebar" class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 5.70711C13.0976 5.31658 13.0976 4.68342 12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289L4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071C13.0976 19.3166 13.0976 18.6834 12.7071 18.2929L6.41421 12L12.7071 5.70711ZM19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711Z" fill="#666666"></path> </g></svg>
                <svg v-else class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 5.70711C13.0976 5.31658 13.0976 4.68342 12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289L4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071C13.0976 19.3166 13.0976 18.6834 12.7071 18.2929L6.41421 12L12.7071 5.70711ZM19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711Z" fill="#666666"></path> </g></svg>    
            </transition>
            
          </button>
        </div>
  
        <Transition name="sidebar" mode="out-in">
          <div v-if="!collapseSidebar" class="flex flex-col items-center mb-4 mt-auto relative">
            <img style="transform: translate(-50%, -70%);" class="z-10 absolute upload-box left-1/2" src="/images/cooking3.webp" alt="">
            <div class="flex flex-col bottom-0 pt-12 pb-6 m-4 px-8 rounded-2xl bg-orange font-bold text-white text-lg upload-box">
              <p>Share your <span class="font-extrabold">Recipes</span> <br> with the whole world</p>  
              <div class="flex items-center mt-4">
                <button class="orange bg-white font-bold px-3 py-2 rounded-xl mx-auto">Workspace</button>
                <button
                        type="button" class="h-min bg-gray-800 rounded-full ring-4 ring-white">
                        <img class="w-8 h-8 rounded-full object-cover" :src="user.avatar" alt="user photo">
                </button>
              </div>
    
            </div>
          </div>
          <div v-else class="flex flex-col items-center mb-4 mt-auto relative">
            <div class="flex flex-col bottom-0 rounded-2xl font-bold text-white text-lg gap-4">
                <button class="bg-white font-bold mx-auto">
                  <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 14.5001L11.6422 19.3212C11.7734 19.3868 11.839 19.4196 11.9078 19.4325C11.9687 19.4439 12.0313 19.4439 12.0922 19.4325C12.161 19.4196 12.2266 19.3868 12.3578 19.3212L22 14.5001M2 9.50006L11.6422 4.67895C11.7734 4.61336 11.839 4.58056 11.9078 4.56766C11.9687 4.55622 12.0313 4.55622 12.0922 4.56766C12.161 4.58056 12.2266 4.61336 12.3578 4.67895L22 9.50006L12.3578 14.3212C12.2266 14.3868 12.161 14.4196 12.0922 14.4325C12.0313 14.4439 11.9687 14.4439 11.9078 14.4325C11.839 14.4196 11.7734 14.3868 11.6422 14.3212L2 9.50006Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
                <button
                        type="button" class="h-min bg-gray-800 rounded-full ring-2 ring-white">
                        <img class="w-8 h-8 rounded-full object-cover" :src="user.avatar" alt="user photo">
                </button>  
            </div>
          </div>
        </Transition>

      </TransitionGroup>
      <RouterView class="w-5/6" :key="$route.fullPath"></RouterView>
  
    </div>
  </template>
<script>
import LogoDefault from '@/components/barComponents/LogoDefault.vue';
import IconDashboard from '@/components/icons/IconDashboard.vue';
import IconHeart from '@/components/icons/IconHeart.vue';
import IconProfile from '@/components/icons/IconProfile.vue';
import IconSetting from '@/components/icons/IconSetting.vue';
import IconMap from '@/components/icons/IconMap.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconExplore from '@/components/icons/IconExplore.vue';
import { mapState, mapActions } from 'pinia';
import { useAuthStore } from '@/stores/auth';
import IconLogout from '@/components/icons/IconLogout.vue';
import data from '../db.json'
import StarsRatingDisplay from '@/components/stars/StarsRatingDisplay.vue';
import IconChef from '@/components/icons/IconChef.vue';
import IconTime from '@/components/icons/IconTime.vue';
import IconDocumentation from '@/components/icons/IconDocumentation.vue';
import CookButton from '@/components/recipeComponents/CookButton.vue';
import IconCook from '@/components/icons/IconCook.vue';
import IconEat from '@/components/icons/IconEat.vue';
import IconStar from '@/components/icons/IconStar.vue';

import IconNutrion from '@/components/icons/IconNutrion.vue';
import IconIngredient from '@/components/icons/IconIngredient.vue';



import FavoriteButton from '@/components/recipeComponents/FavoriteButton.vue';
import IngredientButton from '@/components/recipeComponents/IngredientButton.vue';

import TagList from '@/components/recipeComponents/TagList.vue';





export default {
data () {
    return {
    openUserDropdown: false,
    recipes: data.recipes,
    user: {
        first_name: "Minh",
        last_name: "Bui",
        email: "abc@gmail.com",
        avatar: "https://www.paratime.vn/wp-content/uploads/2019/09/timestudio.vn-corporate-headshot-pricing-01.jpg",
    },
    collapseSidebar: true,
    
    }
},

computed: {
    ...mapState(useAuthStore, ['isAuthenticated','currentUser']),
    currentRouteName() {
        return this.$route.name;
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
components: {
    LogoDefault,
    IconDashboard,
    IconHeart,
    IconProfile,
    IconSetting,
    IconMap,
    IconSearch,
    IconExplore,
    IconLogout,
    StarsRatingDisplay,
    IconChef,
    IconTime,
    IconDocumentation,
    CookButtonComponet: CookButton,
    IconCook,
    FavoriteButton,
    IngredientButton,
    TagList,
    IconEat,
    IconNutrion,
    IconIngredient,
    IconStar,
},
mounted () {
    if (this.isAuthenticated) {
    this.user = this.currentUser;
    }
}




}
</script>
<style scoped>

.custom-shape{
clip-path: polygon(0 0, 100% 35%, 100% 100%, 0% 100%);
}

.upload-box {
width: calc(100% - 2rem);
}

/* Thiết lập transition */
.expandSidebar .menu-item {
  justify-content: start;
  padding-left: 3rem;
}
.menu-item {
  justify-content: center;
}

.left-bar {
  transition: all 0.5s ease-in-out;
}


.sidebar-enter-from {
  opacity: 0;
}
.sidebar-enter-to {
  opacity: 1;
}
.sidebar-leave-from {
  opacity: 1;
}
.sidebar-leave-to {
  opacity: 0;
}
.sidebar-enter-active {
  transition: all 0.3s ease-in-out 0.5s;
} 



</style>
  