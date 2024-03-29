<template lang="">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 pb-12">
        <div class="broad flex flex-wrap mx-auto w-fit h-fit relative">
            <img class="broad-image object-cover" 
                :src="store.image" 
                alt="">
            <input to="/search"
              v-model="keyword" 
              placeholder="Search..."  
              class="text-lg bg-white w-1/4 h-16 rounded-full absolute -bottom-8 centered-axis-x flex items-center justify-between px-8 drop-shadow-lg">
        </div>

        <ul class="list-display mt-32">
            <li 
                v-for="ingredient in store.ingredients" :key="ingredient.id">
                <div>
                    <div class="rounded-3xl bg-gray-100 relative flex justify-center flex-col h-60">
                        <img class="rounded-full h-52 p-8" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5umr6GHRZJ8zoRpboUE40KS4pGNQ965_xRg&usqp=CAU" 
                            alt="">
                    </div>
                    <div class="flex justify-between items-start mt-4 px-2">
                        <p class="text-xl font-bold">{{ingredient.name}}</p>
                        <div class="flex items-center">
                            <p class="text-2xl font-extrabold text-slate-700">{{ingredient.price}}</p>
                            <div>
                                <p class="font-bold text-yellow-500">vnđ</p>
                                <p class="font-bold -mt-2 text-slate-500">{{ingredient.unit}}</p>  
                            </div>
                        </div>
                    </div>
                </div>

            </li>
        </ul>

        <div class="max-w-screen-xl w-full min-h-96 h-screen flex justify-between mt-24">
            <div class="w-1/2 mr-12 flex flex-col  divide-y-4">
                <div class="flex flex-col gap-5 h-1/4">
                    <h1 class="text-4xl font-bold text-slate-900">{{store.name}} <span @click="getDirection" class="text-slate-500 text-sm font-medium underline cursor-pointer">Get direction</span></h1>
                    <p class="text-medium font-semibold text-slate-600">{{store.address}}</p>
                    <!-- <p class="text-medium font-semibold text-slate-500">{{store.description}}</p> -->

                    <div class="flex">
                        <StarsRatingDisplay class="-ml-4" :stars="store.rating"></StarsRatingDisplay>
                        <p class="font-bold text-slate-400">{{store.rating}} of 5</p>
                    </div>
                </div>

                <div class="h-3/4 pt-12">
                    <div class="mb-12 justify-between flex items-end">
                    <p class="title text-slate-700 text-2xl dm-serif">Reviews</p>
                    <p @click="openReviewModal" class="text-slate-400 text-medium font-semibold mb-1 underline-offset-2 underline cursor-pointer">Write a review</p>
                    </div>
                    <div class="insideContainer h-5/6 overflow-y-auto">
                    <UserReviewStoreComponent 
                        v-for="(review,index) in reviews" 
                        :key="review"
                        :review="review"
                        :index="index"
                        class="pr-6 mb-12"
                    >
                    </UserReviewStoreComponent>
                    </div>
                </div>
            </div>
            <MapComponentForDisplay
                :stores="storeList" 
                :center="{lat: Number(store.lat), lng: Number(store.lng)}"
                class="w-1/2 h-full shadow-lg"
            ></MapComponentForDisplay>
            
        </div>
    </div>
</template>
<script>
import StarsRatingDisplay from "@/components/stars/StarsRatingDisplay.vue"
import MapComponentForDisplay from "@/components/maps/MapComponentForDisplay.vue";
import UserReviewStoreComponent from "@/components/userComponents/UserReviewStoreComponent.vue";
import { openModal } from "jenesius-vue-modal";
import StoreReviewModal from "@/components/modals/StoreReviewModal.vue";
import api from "@/services/api";

export default {
    methods: {
        async openReviewModal(predata = null) {
            const modal = await openModal(StoreReviewModal, {predata: predata})

            modal.on('passData', data => {
                this.reviews.push(data);
            }) 
        },
        fetchData() {
            let that = this;
            api.get('/stores/detail/'+ this.$route.params.id).then(function (response) {
                    console.log(response.data);
                    that.store = response.data.store;
                    that.reviews = response.data.store.reviews;

                })
                .catch(function (error) {
                    console.error(error);
                })
        },
        getDirection() {
            let destination = this.store.lat + ',' + this.store.lng
            window.open(`https://www.google.com/maps/dir/21.0044531,105.8468822/${destination}/am=t/`)
        }
    },
    computed: {
        storeList() {
            return [this.store]
        }
    },
    data () {
        return {
            keyword: '',
            store: {
                id: 0,
                name: "Chợ nhỏ",
                description: "Khu chợ nhỏ gần ký túc xá",
                img: "https://static2.yan.vn/YanNews/2167221/201708/20170818-021910-tri_0018_1200x795.png",
                type: 2,
                address: "Số 1 Đại Cồ Việt",
                rating: 3,
                position: {
                lat: 21.0050115,
                lng: 105.8414017
                }
            },
            reviews: [
                {
                user: {
                    name: "Alan Smit",
                    avatar: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                },
                comment: "Lorem ipsum dolor sit amet consectetur adipiscing elit, odio pulvinar mollis fames habitant lacus, ut nunc fusce justo est placerat.",
                rating: 4,
                
                },
                {
                user: {
                    name: "Alan Smith 2",
                    avatar: "https://www.toonsmag.com/wp-content/uploads/2023/04/Bart-Simpson-cartoon-686x1024.png"
                },
                comment: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
                rating: 3,
                },
            ],
        }
    },
    components: {
        MapComponentForDisplay,
        StarsRatingDisplay,
        UserReviewStoreComponent
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