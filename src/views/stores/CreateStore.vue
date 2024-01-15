<template lang="">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 pb-12">
        <div class="broad flex flex-wrap mx-auto w-fit h-fit relative">
            <img class="broad-image object-cover" 
                :src="imageCoverLink==''? imageCoverLinkDefault : imageCoverLink " 
                alt="">
            <ImageUploadCover @click="openImageModal"></ImageUploadCover>
            <button
                @click="openIngredientModal" 
                class="hover:drop-shadow-md bg-yellow w-40 h-16 rounded-l-full absolute -bottom-8 right-1/2 flex items-center justify-between px-6">
                <p class="text-white font-bold text-lg">Add</p>
                <IconAdd class="h-6 w-6"></IconAdd>
            </button>
            <button
                @click="save" 
                class="hover:drop-shadow-md bg-green-600 w-40 h-16 rounded-r-full absolute -bottom-8 left-1/2 flex items-center justify-between px-6">
                <p class="text-white font-bold text-lg">Save</p>
                <IconSave class="h-6 w-6"></IconSave>
            </button>
        </div>

        <ul class="list-display mt-32">
            <li 
                v-for="ingredient in ingredients" :key="ingredient">
                <div>
                    <div class="rounded-3xl bg-gray-100 relative flex justify-center flex-col h-60">
                        <img class="rounded-full h-52 p-8"
                            src="https://cdn.pixabay.com/photo/2016/06/11/15/33/broccoli-1450274_640.png" 
                            alt="">
                    </div>
                    <div class="flex justify-between items-start mt-4 px-2">
                        <p class="text-xl font-bold">{{ingredient.name}}</p>
                        <div class="flex items-center">
                            <p class="text-2xl font-extrabold text-slate-700" contenteditable="true">23,800</p>
                            <div>
                                <p class="font-bold text-yellow-500 cursor-not-allowed">vnđ</p>
                                <p class="font-bold -mt-2 text-slate-500" contenteditable="true">/kg</p>  
                            </div>
                        </div>
                    </div>
                </div>

            </li>
        </ul>

        <div class="max-w-screen-xl w-full h-96 flex justify-between mt-24">
            <div class="w-1/2 flex items-center">
                <div class="flex flex-col gap-5">
                    <h1 class="text-4xl font-bold text-slate-900" contenteditable="true">Siêu thị BigC Hà Đông</h1>
                    <p class="text-medium font-semibold text-slate-600" contenteditable="true">Số 1, Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội</p>
                    <div class="flex cursor-not-allowed">
                        <StarsRatingDisplay class="-ml-4" :stars="3.5"></StarsRatingDisplay>
                        <p class="font-bold text-slate-400">3.5 of 5</p>
                    </div>
                </div>


            </div>
            <div class="w-1/2 h-full shadow-lg relative">
                <MapComponent
                    class="w-full h-full"
                    ref="MapComponent"
                ></MapComponent>
            </div>
        </div>
    </div>
</template>
<script>
import StarsRatingDisplay from "@/components/stars/StarsRatingDisplay.vue"
import MapComponent from "@/components/maps/CreateStoreMapComponent.vue";
import ImageUploadCover from "@/components/images/ImageUploadCover.vue";
import ImageModal from "@/components/modals/ImageModal.vue";
import { closeModal, openModal } from "jenesius-vue-modal";
import IngredientSelectModal from "@/components/modals/IngredientSelectModal.vue";
import IconAdd from "@/components/icons/IconAdd.vue";
import IconSave from "@/components/icons/IconSave.vue";


export default {
    methods: {
        save() {
            console.log(this.$refs.MapComponent.otherPos);
            
        },
        async openImageModal() {
            const modal = await openModal(ImageModal, {imagePropLink: this.imageCoverLink})
            modal.on('passImageLink', link => {
                this.imageCoverLink = link;
            }) 
        },
        async openIngredientModal () {
            const preSelect = this.ingredients.map(e => e.id)
            const modal = await openModal(IngredientSelectModal, {preSelect: preSelect})

            modal.on('passData', data => {
                this.ingredients = data;
                closeModal();
            })
        },
    },
    computed: {
        storeList() {
            return [{...this.store}]
        }
    },
    data () {
        return {
            ingredients: [],
            keyword: '',
            imageCoverLink: '',
            imageCoverLinkDefault: '/images/grocerybackground.jpg'
        }
    },
    components: {
        MapComponent,
        StarsRatingDisplay,
        ImageUploadCover,
        ImageModal,
        IconAdd,
        IconSave,
    }
}
</script>
<style scoped>

.broad-image {
    width: 1280px;
    height: 550px;
  }

img {
	display: block;
	aspect-ratio: 1 / 1;
	object-fit: cover;
	transition: transform 1000ms;
}

ul {
	list-style: none;
	padding: 0;
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
	max-width: 100%;
	width: 100%;
}
    
</style>