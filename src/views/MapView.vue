<template>
    <div class="max-w-screen-xl mx-auto py-8 pb-12">
        <div class="flex items-center justify-between w-full mb-12">
            <div class="">
                <h1 class="text-3xl text-slate-900 font-extrabold">Store</h1>
                <p class="text-slate-600 text-lg font-bold">{{ stores.length }} store found</p>
            </div>
    
            <div class="">
                <button
                    @click="openIngredientModal" 
                    class="rounded-3xl bg-yellow text-black flex items-center w-36 py-3 px-4 justify-between">
                    <p class="font-bold texl-xl">Filter</p>
                    <svg class="h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 3H5C3.58579 3 2.87868 3 2.43934 3.4122C2 3.8244 2 4.48782 2 5.81466V6.50448C2 7.54232 2 8.06124 2.2596 8.49142C2.5192 8.9216 2.99347 9.18858 3.94202 9.72255L6.85504 11.3624C7.49146 11.7206 7.80967 11.8998 8.03751 12.0976C8.51199 12.5095 8.80408 12.9935 8.93644 13.5872C9 13.8722 9 14.2058 9 14.8729L9 17.5424C9 18.452 9 18.9067 9.25192 19.2613C9.50385 19.6158 9.95128 19.7907 10.8462 20.1406C12.7248 20.875 13.6641 21.2422 14.3321 20.8244C15 20.4066 15 19.4519 15 17.5424V14.8729C15 14.2058 15 13.8722 15.0636 13.5872C15.1959 12.9935 15.488 12.5095 15.9625 12.0976C16.1903 11.8998 16.5085 11.7206 17.145 11.3624L20.058 9.72255C21.0065 9.18858 21.4808 8.9216 21.7404 8.49142C22 8.06124 22 7.54232 22 6.50448V5.81466C22 4.48782 22 3.8244 21.5607 3.4122C21.1213 3 20.4142 3 19 3Z" fill="#5e5e5e"></path> </g></svg>
                </button>

                <p class="mt-2 font-semibold text-medium text-slate-600">Selected <span class="font-bold text-orange-600">{{ingredients.length}} </span>  ingredients</p>
            </div>

            
        </div>
      <div class="relative">
        <GMapMap
            class="w-full h80screen"
            ref="mapRef" :center="center" :zoom="18" map-type-id="terrain" >
            <GMapMarker 
                :key="index"
                v-for="(store, index) in stores"
                :icon="icons[store.type]"
                :position="store.position"
                :disableDefaultUI="true"
                @click="handleMarkerClick(store.id)"
            >
                <GMapInfoWindow
                :opened="selectedMarkerId == store.id"
                :options=" {
                        pixelOffset: {
                            width: 10, height: 0
                        },
                        maxWidth: 320,
                        maxHeight: 320,
                }"
                >
                <InfoWindow :data="store"></InfoWindow>
                </GMapInfoWindow>
            </GMapMarker>

            <GMapMarker
                :icon="icons[0]"
                :position="coords"
                :disableDefaultUI="true"
            >
            </GMapMarker>
        </GMapMap>
        <div
            v-for="(store) in stores"
            :key="store.id"
            class="hidden store-info slide-down w-80 h-96 bg-white drop-shadow-lg absolute top-6 left-5 p-6"
            :class="{'!block' : selectedMarkerId==store.id}"
        >
            <div class="flex flex-col mb-8">
                <router-link :to="'/store/'+store.id" class="text-2xl font-bold text-black hover:underline-offset-1 hover:underline">{{ store.name }}</router-link>
                <div class="flex justify-between">
                    <p class="w-3/4 truncate  text-medium font-semibold text-slate-600">{{ store.address }}</p>
                    <p class="">{{ store.distance }} km</p>
                </div>
                <StarsRatingDisplay class=" self-start -ml-1" :small="true" :stars="store.rating" :index="store.id + '-' + store.id"></StarsRatingDisplay>
        
            </div>
    
            <div class="insideContainer  h-full overflow-y-auto">
                <div v-for="(item,index) in ingredients" :key="index" class="checkbox_ingredient flex mb-4 items-start justify-start">
                    <div class="flex justify-between w-full items-center pr-4">
                        <p class="text text-lg text-slate-600 font-bold">{{ item.name }} </p>
                        <div class="flex items-center">
                            <p class="text-xl font-extrabold text-slate-700">23,800</p>
                            <div>
                                <p class="font-bold text-yellow-500">vnđ</p>
                                <p class="font-bold -mt-2 text-slate-500">/kg</p>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>



</template>
<script>
import { useGeolocation } from '@vueuse/core'
import { toRaw } from 'vue';
import axios from 'axios'
import InfoWindow from '../components/maps/InfoWindow.vue';
import data from '@/db.json'
import icon from '@/components/maps/icons.json';
import IngredientCheckbox from '@/components/checkboxs/IngredientCheckbox.vue';
import StarsRatingDisplay from '@/components/stars/StarsRatingDisplay.vue';
import { closeModal, openModal } from 'jenesius-vue-modal';
import IngredientSelectModal from '@/components/modals/IngredientSelectModal.vue';
import { useIngredientStore } from '@/stores/ingredient';
import { mapState } from 'pinia';

export default {
    computed: {
        ...mapState(useIngredientStore, ['getIngredients']),
        updateKey() {
            return this.$router.name
        }
    },
    mounted() {
        const success = (position) => {
            const lat  = position.coords.latitude;
            const lng = position.coords.longitude;

            // Do something with the position

            this.coords.lat = lat;
            this.coords.lng = lng;

            this.stores = data.stores.map(store => {
                const distance = this.getDistanceFromLatLonInKm(
                    this.coords.lat,
                    this.coords.lng,
                    store.position.lat,
                    store.position.lng
                );

                // Thêm khoảng cách vào đối tượng cửa hàng
                return { ...store, distance };
            });

            this.getDistanceMaxtrix(this.stores);
        };

        const error = (err) => {
            console.log(error)
        };

        // This will open permission popup
        navigator.geolocation.getCurrentPosition(success, error);
        

        if (this.getIngredients) {
                this.ingredients = this.getIngredients
        }


    },
    data() {
        return {
            KEY: 'AIzaSyAu94igMGdWyK9JSVIKwM-e-M9vzZtsTWI',
            selectedMarkerId: -1,
            coords: {
                lat: 0,
                lng: 0
            },
            distance: 0,
            center: { lat: 21.0070115, lng: 105.8414017 },
            showSidewindow: false,
            options: {},
            stores: data.stores,
            icons: icon.icons,
            ingredients: [],
        };
    },
    methods: {
        async openIngredientModal () {
            const preSelect = this.ingredients.map(e => e.id)

            const modal = await openModal(IngredientSelectModal, {preSelect: preSelect})

            modal.on('passData', data => {
                this.ingredients = data;
                closeModal();
            })
        },

        handleMarkerClick(id) {
            this.selectedMarkerId = id;

        },
        getDistanceMaxtrix(stores) {
            const destinations = stores.map(store => `${store.position.lat},${store.position.lng}`).join('|');
            const corDelete = 'https://cors-anywhere.herokuapp.com/';
            const url = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destinations}&origins=${this.coords.latitude}, ${this.coords.longitude}&key=${this.KEY}`;
            const config = {
                method: 'get',
                url: corDelete + url,
                secure: false,
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
            };

            axios(config).then(response => {
                console.log(response);
                // this.distance = response.data.rows[0].elements[0].distance.text;
                // console.log(this.distance);
            }).catch(err => {
                console.error(err);
            });
        },
        getDistanceFromLatLonInKm(lat1,lng1,lat2,lng2) {
            function deg2rad(deg) {
                return deg * (Math.PI/180)
            }
            var R = 6371; // Radius of the earth in km
            var dLat = deg2rad(lat2-lat1);  // deg2rad below
            var dLon = deg2rad(lng2-lng1); 
            var a = 
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
                Math.sin(dLon/2) * Math.sin(dLon/2)
                ; 
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            var d = R * c; // Distance in km
            return d.toFixed(2);
        }

    },
    components: { InfoWindow, IngredientCheckbox, StarsRatingDisplay },
}
</script>

<style scoped>

.slide-down {
    animation: slideUp 0.4s ease-in-out; /* Độ dài và chế độ animation */
}

.insideContainer {
    max-height: 70%;
}

@keyframes slideUp {
    from {
        transform: translateY(-50%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>