<template>
  <div class="flex w-full h-full">
    <div class="left-bar bg-white w-1/5 pt-8 flex flex-col">
      <LogoDefault class="mb-10 mx-auto"></LogoDefault>

      <div class="flex flex-col gap-4 pl-12">
        <div class="menu-item flex items-center gap-4 relative">
          <IconDashboard :checked="true" class="h-8"></IconDashboard>
          <h2 class=" font-bold text-slate-800 text-lg">Explore</h2>
          <div class="w-1 h-full absolute right-0 bg-black"></div>
        </div>
        <div class="menu-item flex items-center gap-4 relative">
          <IconHeart :checked="false" class="h-8"></IconHeart>
          <h2 class="font-semibold text-slate-600 text-lg">Favorites</h2>
        </div>
        <div class="menu-item flex items-center gap-4 relative">
          <IconMap :checked="false" class="h-8"></IconMap>
          <h2 class="font-semibold text-slate-600 text-lg">Store</h2>
        </div>
        <div class="menu-item flex items-center gap-4 relative">
          <IconSetting :checked="false" class="h-8"></IconSetting>
          <h2 class="font-semibold text-slate-600 text-lg">Setting</h2>
        </div>
      </div>

      <div class="relative flex flex-col items-center mb-4 h-full">
        <img class="z-10 absolute -top-2 h-52 left-12" src="/images/cooking1.webp" alt="">
        <div class="absolute flex flex-col bottom-0 pt-12 pb-6 px-8 rounded-2xl bg-orange font-bold text-white text-lg">
          <p>Share your <span class="font-extrabold">Recipes</span> <br></p> 
          <p>with the whole world</p> 

          <button class="mt-4 orange bg-white font-bold px-3 py-2 rounded-xl mx-auto">Upload Now</button>
        </div>
      </div>


    </div>
    <div class="content w-4/5 flex">
      <div class="middle-content bg-lightGray w-3/4">
      </div>
      <div class="right-bar bg-white w-1/4">
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



export default {

  components: {
    LogoDefault,
    IconDashboard,
    IconHeart,
    IconProfile,
    IconSetting,
    IconMap,
  }

  

  
}
</script>
<style scoped>

.broad-image {
  width: 1280px;
  height: 550px;
}
</style>
