<template>
    <div class="p-8 bg-white rounded-3xl relative min-w-96">
        <div class="rounded-2xl border-2 border-purple-600 mx-8 flex gap-5">
            <input v-model="ingredient.name" class="w-2/3 h-24 bg-inherit px-4 py-2 overflow-hidden text-slate-800" type="text">
            <input type="number" min="0" max="1" v-model="ingredient.type" class="w-1/6 h-24 bg-inherit px-4 py-2 overflow-hidden text-slate-800">
            <input v-model="ingredient.unit" class="w-1/6 h-24 bg-inherit px-4 py-2 overflow-hidden text-slate-800" type="text">
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

            console.log(this.ingredient);

            if (this.predata) {
                api.put('/ingredients/' + this.predata.id, this.ingredient).then((response) => {
                console.log(response.data);
                if (response.data.success) {
                    this.$toast.success('Ingredient has been updated!')
                    
                    // this.$router.go(0)
                }

                }).catch((error) => {
                    this.$toast.error('Something went wrong!')
                    console.error(error);
                })
            } else {
                api.post('/ingredients/', this.ingredient).then((response) => {
                console.log(response.data);
                if (response.data.success) {
                    this.$toast.success('Ingredient has been created!')
                    // this.$router.go(0)
                    this.$emit('passData', this.ingredient);
                    
                }

                }).catch((error) => {
                    this.$toast.error('Something went wrong!')
                    console.error(error);
                })
            }


        },
        getLink(link) {
            this.ingredient.image = link;
        }
    },
    data () {

        return {
            ingredient: {
                name: 'Apple',
                unit: 'gram',
                type: 0,
                image: 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,h_128,dpr_3/https://assets.app.engoo.com/images/2ccpXtxnnM4W56Xt5dl08E.jpeg',
            },
        }
    },

    mounted () {
        if (this.predata) {
            this.ingredient = this.predata;
        }
    },
    components: { IconSave, ImageModal },
    
}
</script>
<style scoped>
    
</style>