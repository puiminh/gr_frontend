<template>
  <div>
    <div class="broad flex flex-wrap mx-auto w-fit h-fit relative mb-40">
      <img class="broad-image object-cover" src="/images/cookingbackground4.jpg" alt="">
      <div class="absolute bottom-24 left-1/2">
        <p class="text-slate-200 font-serif font-semibold text-2xl word-space-3 pt-6">What are you<br>cooking today?</p>
        <p class="text-slate-300 text-base text-right mt-2">Let's see...</p>
      </div>
      <router-link to="/search" class="bg-yellow w-1/4 h-16 rounded-full absolute -bottom-8 centered-axis-x flex items-center justify-between px-6 drop-shadow-lg">
        <p class="text-slate-800 font-medium text-lg">Search for recipes...</p>
        <svg class="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#5e5e5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </router-link>
    </div>
    
  </div>
</template>
<script>
export default {

  components: {
  }

  

  
}
</script>
<style scoped>

.broad-image {
  width: 1280px;
  height: 550px;
}
</style>
