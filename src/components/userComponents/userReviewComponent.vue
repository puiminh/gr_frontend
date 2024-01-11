<template>
    <div>
        <div class="review-block">
            <div class="flex">
              <img class="w-12 h-12 object-cover" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="">
              <div class="ml-2 flex flex-col">
                <p class="text-xl text-slate-900 font-bold ml-3">Allison Smith</p>
                <StarsRatingDisplay :stars="3.8" :index="index"></StarsRatingDisplay>
              </div>
            </div>
            <p class="text-base text-slate-700 font-semibold mt-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, odio pulvinar mollis fames habitant lacus, ut nunc fusce justo est placerat.
            </p>
        </div>
    </div>
</template>
<script>
import StarsRatingDisplay from '../stars/StarsRatingDisplay.vue';

export default {
  props: ['index'],
  components: { StarsRatingDisplay }
}
</script>
<style scoped>
    
</style>