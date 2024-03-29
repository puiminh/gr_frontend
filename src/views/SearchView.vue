<template>
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 pb-12">

        <div class="flex items-center justify-between w-full">
            <div class="">
                <h1 class="text-3xl text-slate-900 font-extrabold">Recipe Results</h1>
                <p class="text-slate-600 text-lg font-bold">{{ recipes.length }} recipes found</p>
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

        <ul class="list-display mt-16">
            <li 
                v-for="recipe in recipes" :key="recipe.id">
                <RouterLink :to="'/recipe/'+recipe.id">
                    <div class="rounded-3xl bg-gray-100 relative flex justify-center flex-col py-4">
                        <img class="rounded-full w-1/2 self-center" 
                            :src="recipe.image" alt="">
                        
                        <div
                            v-if="recipe.missingAmount"
                            class="slide-up rounded-lg absolute bottom-10 -right-1 h-fit w-32 bg-white  text-red-600 flex flex-col items-center justify-center p-4 shadow-lg"
                            :class="{hidden : hoverItemId != recipe.id}"
                        >
                            <p v-for="(ingredient,index) in recipe.missingIngredients" :key="index" class="font-bold">{{ingredient}}</p>
                        </div>
                        <div 
                            v-if="recipe.missingAmount"
                            @mouseover="hoverItemId = recipe.id" 
                            @mouseleave="hoverItemId = -1" 
                            class="rounded-lg absolute -bottom-1 -right-1 h-10 w-32 bg-white flex items-center justify-center">
                            <span class="font-bold">Need <span class="font-extrabold text-orange-500">{{recipe.missingAmount}}</span> more</span>
                        </div>
                        <div 
                            v-else                            
                            class="rounded-lg absolute -bottom-1 -right-1 h-10 w-32 bg-white flex items-center justify-center">
                            <span class="font-bold">Ready to <span class="font-extrabold text-orange-500">Cook!</span> </span>
                        </div>
                    </div>
                    <div class="flex flex-col items-start mt-4 ml-4">
                        <p class="text-lg font-extrabold">{{recipe.name}}</p>
                        <StarsRatingDisplay class="-ml-3 mt-2" :stars="recipe.rating" :index="recipe.id" :small="true"></StarsRatingDisplay>
                    </div>
                </RouterLink>

            </li>
        </ul>

        <PaginationComponent
            :total-pages="totalPages"
            :current-page="currentPage"
            @pagechanged="onPageChange"
        ></PaginationComponent>
        
    </div>
</template>
<script>
import {closeModal, openModal} from "jenesius-vue-modal";
import StarsRatingDisplay from '@/components/stars/StarsRatingDisplay.vue';
import IngredientSelectModal from '@/components/modals/IngredientSelectModal.vue';
import api from "@/services/api";
import PaginationComponent from "@/components/PaginationComponent.vue";

export default {
    data () {
        return {
            ingredients: [],
            hoverItemId: -1,
            recipes: [],
            currentPage: 1,
            totalPages: 1,
        }
    },
    methods: {
            onPageChange (e) {
                console.log("PAGE CHANGE: ", e);
                this.currentPage = e;
                this.fetchData(e)
            },
            async openIngredientModal () {
                const preSelect = this.ingredients?.map(e => e.id)
                const modal = await openModal(IngredientSelectModal, {preSelect: preSelect})

                modal.on('passData', data => {
                    this.ingredients = data;
                    closeModal();
                })
            },
            fetchData(page = 1) {
                let that = this;
                api.get('/recipes?page='+page).then(function (response) {
                        console.log(response.data);
                        that.recipes = response.data.recipes;

                        that.currentPage = Number(response.data.meta.currentPage) ;
                        that.totalPages = Number(response.data.meta.totalPages);
                    })
                    .catch(function (error) {
                        console.error(error);
                    })
            },
            match() {
                let that = this;
                const ingredientIdsArray = this.ingredients.map(ingredient => ingredient.id);
                const ingredientIdsString = ingredientIdsArray.join(',');

                api.get('/recipes/match?ingredientIds=' + ingredientIdsString).then(function (response) {
                        console.log(response.data);
                        that.recipes = response.data.recipes;
                    })
                    .catch(function (error) {
                        console.error(error);
                    })
            }
    },
    watch: {
        ingredients(newValue) {
            if (newValue.length > 0) {
                this.match();   
            } else {
                this.fetchData()
            }
            
        }
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
    components: { StarsRatingDisplay, PaginationComponent }
}
</script>
<style scoped>

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
	grid-template-columns: 23% 23% 23% 23%;
	max-width: 100%;
	width: 100%;
}

.slide-up {
    animation: slideUp 0.2s ease-in-out; /* Độ dài và chế độ animation */
}

.insideContainer {
    max-height: 70%;
}

@keyframes slideUp {
    from {
        transform: translateY(50%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>