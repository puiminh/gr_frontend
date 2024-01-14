<template lang="">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 pb-12">
        <div class="broad flex flex-wrap mx-auto w-fit h-fit relative">
            <img class="broad-image object-cover" src="/images/grocerybackground.jpg" alt="">
            <input to="/search"
              v-model="keyword" 
              placeholder="Search..."  
              class="text-lg bg-white w-1/4 h-16 rounded-full absolute -bottom-8 centered-axis-x flex items-center justify-between px-8 drop-shadow-lg">
        </div>

        <ul class="list-display mt-32">
            <li 
                v-for="i in 10" :key="i">
                <div>
                    <div class="rounded-3xl bg-gray-100 relative flex justify-center flex-col h-60">
                        <img class="rounded-full h-52 p-8" 
                            src="https://cdn.pixabay.com/photo/2016/06/11/15/33/broccoli-1450274_640.png" 
                            alt="">
                    </div>
                    <div class="flex justify-between items-start mt-4 px-2">
                        <p class="text-xl font-bold">Súp Lơ</p>
                        <div class="flex items-center">
                            <p class="text-2xl font-extrabold text-slate-700">23,800</p>
                            <div>
                                <p class="font-bold text-yellow-500">vnđ</p>
                                <p class="font-bold -mt-2 text-slate-500">/kg</p>  
                            </div>
                        </div>
                    </div>
                </div>

            </li>
        </ul>

        <div class="max-w-screen-xl w-full h-96 flex justify-between mt-24">
            <div class="w-1/2 flex items-center">
                <div class="flex flex-col gap-5">
                    <h1 class="text-4xl font-bold text-slate-900">Siêu thị BigC Hà Đông</h1>
                    <p class="text-medium font-semibold text-slate-600">Số 1, Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội</p>
                    <div class="flex">
                        <StarsRatingDisplay class="-ml-4" :stars="3.5"></StarsRatingDisplay>
                        <p class="font-bold text-slate-400">3.5 of 5</p>
                    </div>
                </div>


            </div>
            <MapComponent
                :stores="storeList" 
                :center="store.position"
                class="w-1/2 h-full shadow-lg"
            ></MapComponent>
            
        </div>
    </div>
</template>
<script>
import StarsRatingDisplay from "@/components/stars/StarsRatingDisplay.vue"
import MapComponent from "@/components/maps/MapComponent.vue";
export default {
    computed: {
        storeList() {
            return [{...this.store}]
        }
    },
    data () {
        return {
            keyword: '',
            store: {
                type: 0,
                position: {
                    lat: 21.0226,
                    lng: 105.798466
                }
            }
        }
    },
    components: {
        MapComponent,
        StarsRatingDisplay,
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