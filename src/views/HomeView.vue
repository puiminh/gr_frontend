<template>
  <div class="flex w-full h-full">


    <div class="left-bar bg-white w-1/6 pt-8 flex flex-col">
      <LogoDefault class="mb-10 mx-auto"></LogoDefault>

      <div class="flex flex-col gap-4 pl-12">
        <div class="menu-item flex items-center gap-4 relative">
          <IconDashboard :checked="true" class="h-6"></IconDashboard>
          <h2 class="  font-bold text-slate-800 ">Home</h2>
          <div class="w-1 h-full absolute right-0 bg-black"></div>
        </div>
        <div class="menu-item flex items-center gap-4 relative">
          <IconExplore :checked="false" class="h-6"></IconExplore>
          <h2 class="  font-bold text-slate-600 ">Explore</h2>
        </div>
        <div class="menu-item flex items-center gap-4 relative">
          <IconHeart :checked="false" class="h-6"></IconHeart>
          <h2 class=" font-bold text-slate-600 ">Favorites</h2>
        </div>
        <div class="menu-item flex items-center gap-4 relative">
          <IconMap :checked="false" class="h-6"></IconMap>
          <h2 class=" font-bold text-slate-600 ">Store</h2>
        </div>
        <div class="menu-item flex items-center gap-4 relative">
          <IconSetting :checked="false" class="h-7"></IconSetting>
          <h2 class=" font-bold text-slate-600 ">Account</h2>
        </div>
      </div>

      <div class="flex flex-col items-center mb-4 mt-auto relative">
          <img style="transform: translate(-50%, -70%);" class="z-10 absolute upload-box left-1/2" src="/images/cooking3.webp" alt="">
        <div class="flex flex-col bottom-0 pt-12 pb-6 m-4 px-8 rounded-2xl bg-orange font-bold text-white text-md xl:text-lg upload-box">
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


    </div>
    <div class="content w-5/6 flex h-screen overflow-auto">
      <div class="bg-lightGray w-3/4 px-8 h-screen overflow-y-auto overflow-x-hidden">
          
          <!-- Search Bar -->
          <div class="bg-white rounded-3xl flex gap-4 mx-16 px-4 items-center mt-8">
            <IconSearch class="h-6"></IconSearch>
            <input type="text" class="bg-white p-2 font-bold w-full" placeholder="Search for Recipes, Ingredients and Tags">
          </div>

          <!-- Banner -->
          <div class="w-full  flex h-40  mt-10 relative ">
            <div class="bg-orange custom-shape w-full h-full rounded-2xl  text-white pt-10 pb-8 px-8">
              <h1 class="font-extrabold text-2xl">
                All of your Favorite Recipes <br>
                in one place!
              </h1>
              <h5 class="text-md mt-2 text-white">
                Browse through out collection of <span class="font-bold">120,000+</span> tasty recipes
                for your family
              </h5>
            </div>
            <img class="absolute h-48 right-10 -top-10 z-10" src="/images/model.png" alt="">
          </div>

          <!-- Categories -->

          <section class="mt-6 ">
            <h1 class="font-extrabold mb-6 text-xl">Categories</h1>
            <div class="grid grid-cols-4 xl:grid-cols-6 gap-4 ">
              
              <div class="flex items-center justify-center relative">
                <img class="w-full h-16 brightness-50 object-cover rounded-xl" src="/images/breakfast.jpg" alt="">
                <h1 class="font-bold text-white text-xl absolute">Breakfast</h1>
              </div>

              <div class="flex items-center justify-center relative">
                <img class="w-full h-16 brightness-50 object-cover rounded-xl" src="/images/lunch.jpg" alt="">
                <h1 class="font-bold text-white text-xl absolute">Lunch</h1>
              </div>

              <div class="flex items-center justify-center relative">
                <img class="w-full h-16 brightness-50 object-cover rounded-xl" src="/images/dinner.jpg" alt="">
                <h1 class="font-bold text-white text-xl absolute">Dinner</h1>
              </div>

              <div class="flex items-center justify-center relative">
                <img class="w-full h-16 brightness-50 object-cover rounded-xl" src="/images/dessert.jpg" alt="">
                <h1 class="font-bold text-white text-xl absolute">Dessert</h1>
              </div>
            </div>
          </section>

          <!-- Popular -->

          <section class="mt-6">
            <h1 class="font-extrabold mb-6 text-xl">Popular Recipes</h1>

            <div class="grid grid-cols-3 xl:grid-cols-3 gap-6">
              <div 
                  v-for="recipe in recipes" :key="recipe.id">
                  <div class="cursor-pointer">
                      <div class="flex flex-col h-96 bg-white shadow-sm rounded-xl ">
                        <div class="h-72 w-full overflow-hidden rounded-t-xl">
                          <img class="h-full w-full object-cover rounded-t-xl transition ease-in-out delay-50 hover:scale-110 duration-300 " 
                              :src="recipe.image" alt="">
                        </div>

                          <div class="px-4 py-2">
                            <p class="text-lg font-extrabold my-2">{{recipe.name}}</p>

                            <div class="flex justify-between  ">
                              <div class="flex gap-2">
                                <IconTime class="h-6"></IconTime>
                                <p class="font-bold text-slate-500">1 hour 20 minutes</p>
                              </div>
                              <div class="flex gap-2">
                                <IconChef class="h-6"></IconChef>
                                <p class="font-bold text-slate-500">Easy</p>
                              </div>
                            </div>

                          </div>
                      </div>
                    </div>
      
                </div>
            </div>
          </section>



      </div>
      <div class="bg-white w-1/4 h-screen py-8 flex justify-center">
        <div class="">
          <div class="flex gap-3 items-center pb-4 border-b-2 border-slate-300">
            <IconDocumentation class="h-8 orange"></IconDocumentation>
            <p class="font-extrabold text-xl orange">Recipe Preview</p>
          </div>
        </div>
      </div>
    </div>

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
      }
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
    IconDocumentation
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

</style>
