<template>
    <div>
        <div class="review-block relative">
            <div class="flex">
              <img class="w-12 h-12 object-cover rounded-full" :src="review.user.avatar" alt="">
              <div class="ml-2 flex flex-col relative">
                <p class="text-xl text-slate-900 font-bold ml-3">{{review.user.name}}</p>
                <StarsRatingDisplay :stars="review.rating" :index="index"></StarsRatingDisplay>
              </div>
            </div>
            <p class="text-base text-slate-700 font-semibold mt-4">
              {{review.comment}}
            </p>
            <IconEdit @click="openReviewModal" class="absolute p-2 w-8 bg-red-300 right-0 -bottom-2 rounded-full cursor-pointer hover:shadow-md"></IconEdit>
        </div>
    </div>
</template>
<script>
import { openModal } from 'jenesius-vue-modal';
import IconEdit from '../icons/IconEdit.vue';
import StarsRatingDisplay from '../stars/StarsRatingDisplay.vue';
import StoreReviewModal from '../modals/StoreReviewModal.vue';

export default {
  methods: {
    async openReviewModal() {
      const modal = await openModal(StoreReviewModal, {predata: this.review, mode: 1})

      modal.on('passData', data => {
          this.reviews.push(data);
      }) 
    },
  },
  props: ['index','review'],
  components: { StarsRatingDisplay, IconEdit }
}
</script>
<style scoped>
    
</style>