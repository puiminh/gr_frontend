<template>
  <div class="flex w-full h-full">

            <div
              class="flex items-center absolute right-0 top-0">
                <button type="button" class="flex text-sm bg-white border-2 border-gray-400 rounded-full">
                  <IconSetting class="w-8"></IconSetting>

                </button>
                <button
                  type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                  <img class="w-8 h-8 rounded-full object-cover" :src="user.avatar" alt="user photo">
                </button>
                  


            </div>

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
          <IconSetting :checked="false" class="h-6"></IconSetting>
          <h2 class=" font-bold text-slate-600 ">Setting</h2>
        </div>
      </div>

      <div class="flex flex-col items-center mb-4 mt-auto relative">
          <img style="transform: translate(-50%, 0);" class="z-10 absolute -top-36 h-48 left-1/2" src="/images/cooking3.webp" alt="">
        <div class="flex flex-col bottom-0 pt-12 pb-6 m-4 px-8 rounded-2xl bg-orange font-bold text-white text-md">
          <p>Share your <span class="font-extrabold">Recipes</span> <br></p> 
          <p>with the whole world</p> 

          <button class="mt-4 orange bg-white font-bold px-3 py-2 rounded-xl mx-auto">Upload Now</button>
        </div>
      </div>


    </div>
    <div class="content w-4/5 flex">
      <div class="bg-lightGray w-3/4 px-8">
          
          <!-- Search Bar -->
          <div class="bg-white rounded-3xl flex gap-4 mx-16 px-4 items-center mt-8">
            <IconSearch class="h-6"></IconSearch>
            <input type="text" class="bg-white p-2 font-bold w-full" placeholder="Search for Recipes, Ingredients and Tags">
          </div>

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




      </div>
      <div class="bg-white w-1/4">
        <div class="grid-cols-2">
          <div class="">

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




export default {
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
    IconExplore
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


</style>
