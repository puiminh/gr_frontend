<template>
    <div class="p-8 bg-white rounded-3xl relative min-w-96">
        <div class="flex justify-between mb-6 items-center mx-8">
            <p class="font-bold text-xl">Review</p>
            <StarsRating ref="rating"></StarsRating>
        </div>

        <div class="rounded-2xl border-2 border-purple-600 mx-8">
            <textarea v-model="review.comment" class="w-full h-24 bg-inherit px-4 py-2 overflow-hidden text-slate-800" type="text"></textarea>
        </div>

        <ImageModal
            v-if="mode != 1"
            class="w-full h-full"
            @passImageLink="getLink"
        >
        </ImageModal>

        <button
            @click="save" 
            class="hover:drop-shadow-md bg-green-600 rounded-full absolute -bottom-8 -right-4 flex items-center justify-between p-4">
            <IconSave class="h-4 w-4"></IconSave>
        </button>
    </div>
</template>
<script>
import api from '@/services/api';
import IconSave from '../icons/IconSave.vue';
import StarsRating from '../stars/StarsRating.vue';
import ImageModal from './ImageModal.vue';
import { mapState } from 'pinia';
import { useAuthStore } from '@/stores/auth';

export default {
    props: ['predata', 'mode'],
    computed: {
        ...mapState(useAuthStore, ['currentUser']),
    },
    methods: {
        save () {
            this.review.rating = this.$refs.rating.stars 
            this.review.user_id = this.currentUser.id
            this.review.recipe_id = this.$route.params.id
            console.log(this.review);
            api.post('/recipe-reviews/', this.review).then((response) => {
                console.log(response.data);
                if (response.data.success) {
                    this.$toast.success('Review has been created!')
                    this.$router.go(0)
                }

            }).catch((error) => {
                this.$toast.error('Something went wrong!')
                console.error(error);
            })
        },
        getLink(link) {
            this.review.image = link;
        }
    },
    data () {

        return {
            review: {
                comment: '',
                rating: 0,
                image: '',
                recipe_id: 0,
                user_id: 0,
            },
        }
    },

    mounted () {
        if (this.predata) {
            this.review = this.predata;
        }
    },
    components: { StarsRating, IconSave, ImageModal },
    
}
</script>
<style scoped>
    
</style>