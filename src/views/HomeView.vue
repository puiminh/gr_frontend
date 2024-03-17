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
          <IconSetting :checked="false" class="h-6"></IconSetting>
          <h2 class=" font-bold text-slate-600 ">Setting</h2>
        </div>
      </div>

      <div class="flex flex-col items-center mb-4 mt-auto relative">
          <img class="z-10 absolute -top-36 left-8 h-48" src="/images/cooking1.webp" alt="">
        <div class="flex flex-col bottom-0 pt-12 pb-6 m-4 px-8 rounded-2xl bg-orange font-bold text-white text-md">
          <p>Share your <span class="font-extrabold">Recipes</span> <br></p> 
          <p>with the whole world</p> 

          <button class="mt-4 orange bg-white font-bold px-3 py-2 rounded-xl mx-auto">Upload Now</button>
        </div>
      </div>


    </div>
    <div class="content w-4/5 flex">
      <div class="bg-lightGray w-3/4">
          <div class="bg-white rounded-3xl flex gap-4 mx-16 px-4 items-center mt-8">
            <IconSearch class="h-6"></IconSearch>
            <input type="text" class="bg-white p-2 font-bold w-full" placeholder="Search for Recipes, Ingredients and Tags">
          </div>

      </div>
      <div class="bg-white w-1/4">
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



export default {

  components: {
    LogoDefault,
    IconDashboard,
    IconHeart,
    IconProfile,
    IconSetting,
    IconMap,
    IconSearch,
    IconExplore
  }

  

  
}
</script>
<style scoped>

.broad-image {
  width: 1280px;
  height: 550px;
}
</style>
