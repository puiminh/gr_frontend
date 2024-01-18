<template lang="">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 pb-12">
        <div class="broad flex flex-wrap mx-auto w-fit h-fit relative">
            <img class="broad-image object-cover" 
                :src="store.image==''? imageCoverLinkDefault : store.image " 
                alt="">
            <ImageUploadCover @click="openImageModal"></ImageUploadCover>
            <button
                @click="openIngredientModal" 
                class="hover:drop-shadow-md bg-yellow w-40 h-16 rounded-l-full absolute -bottom-8 right-1/2 flex items-center justify-between px-6">
                <p class="text-white font-bold text-lg">Add</p>
                <IconAdd class="h-6 w-6"></IconAdd>
            </button>
            <button
                @click="update" 
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
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5umr6GHRZJ8zoRpboUE40KS4pGNQ965_xRg&usqp=CAU" 
                            alt="">
                    </div>
                    <div class="flex justify-between items-start mt-4 px-2">
                        <p class="text-xl font-bold">{{ingredient.name}}</p>
                        <div class="flex items-center">
                            <p class="text-2xl font-extrabold text-slate-700"
                               @input="ingredient.price = Number($event.target.innerText)"
                               contenteditable="true">{{ ingredient.price ? ingredient.price : 23000 }}</p>
                            <div>
                                <p class="font-bold text-yellow-500 cursor-not-allowed">vnđ</p>
                                <p 
                                    class="font-bold -mt-2 text-slate-500"
                                    @input="ingredient.unit = $event.target.innerText" 
                                    contenteditable="true">/gram</p>  
                            </div>
                        </div>
                    </div>
                </div>

            </li>
        </ul>

        <div class="max-w-screen-xl w-full h-96 flex justify-between mt-24 gap-8">
            <div class="w-1/2 flex items-center">
                <div class="flex flex-col gap-5">
                    <h1 
                        @input="store.name = $event.target.innerText"
                        class="text-4xl font-bold text-slate-900" contenteditable="true">
                           {{store.name}}
                    </h1>
                    <p
                        @input="store.address = $event.target.innerText"
                        class="text-medium font-semibold text-slate-600" contenteditable="true">
                           {{store.address}}
                    </p>
                    <p
                        @input="store.description = $event.target.innerText"
                        class="text-medium font-semibold text-slate-600" contenteditable="true">
                            {{store.description}}
                    </p>
                </div>


            </div>
            <div class="w-1/2 h-full shadow-lg relative">
                <MapComponent
                    class="w-full h-full"
                    ref="MapComponent"
                    :stores="storeList" 
                    :center="{lat: Number(store.lat), lng: Number(store.lng)}"
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
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
import { toRaw } from "vue";
import api from "@/services/api";

export default {
    data () {
        return {
            ingredients: [], 
            imageCoverLinkDefault: '/images/grocerybackground.jpg',
            store: {
                name: '',
                address: '',
                lat: '',
                lng: '',
                type: 1,
                description: '',
                owner: 0,
                image: '',
                ingredients: [],
            }
        }
    },
    methods: {
        update() {
            this.store.lat = this.$refs.MapComponent.otherPos.lat;
            this.store.lng = this.$refs.MapComponent.otherPos.lng;
            this.store.owner = this.currentUser.id;
            this.store.ingredients = this.ingredients
            console.log(this.$refs.MapComponent.otherPos);
            
            console.log(toRaw(this.store));

            api.put('/stores/'+ this.store.id, this.store).then((response) => {
                console.log(response.data);
                if (response.data.success) {
                    this.$toast.success('Store has been updated!')
                    this.$router.push('/store/' + this.store.id)
                }

            }).catch((error) => {
                this.$toast.error('Something went wrong!')
                console.error(error);
            })

        },
        async openImageModal() {
            const modal = await openModal(ImageModal, {imagePropLink: this.image})
            modal.on('passImageLink', link => {
                this.store.image = link;
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
        moneyFormat(price) {
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                price,
            )
        },
        fetchData() {
            let that = this;
            api.get('/stores/detail/'+ this.$route.params.id).then(function (response) {
                    console.log(response.data);
                    that.store = response.data.store;
                    that.ingredients = response.data.store.ingredients;

                })
                .catch(function (error) {
                    console.error(error);
                })
        },
    },
    computed: {
        ...mapState(useAuthStore, ['currentUser']),
        storeList() {
            return [{...this.store}]
        },
    },

    components: {
        MapComponent,
        StarsRatingDisplay,
        ImageUploadCover,
        ImageModal,
        IconAdd,
        IconSave,
    },
    created() {
      // watch the params of the route to fetch the data again
      this.$watch(
        () => this.$route.params,
        () => {
          this.fetchData()
        },
        // fetch the data when the view is created and the data is
        // already being observed
        { immediate: true }
      )
    },
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