<template>
  <button class="flex red items-center border-2 border-red-500 rounded-xl p-1.5 max-h-10" @click="checked = !checked">
      <svg class="active w-8 h-8" v-if="checked" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z"></path></g></svg>
      <svg class="w-8 h-8"  v-else  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>  

    <div class="ml-1 text-md font-bold text-left leading-4">
      <h1 class="active" v-if="checked">Favorited</h1>
      <h1 v-else>Favourite</h1>
    </div>

  </button>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    }
  },
};
</script>

<style scoped>
.active {
  animation: grow-shrink 0.3s ease 1;
}
@keyframes grow-shrink {
  40% {
    transform: scale(1.1);
 }
  75% {
    transform: scale(0.9);
 }
  100% {
    transform: scale(1);
 }
}


</style>