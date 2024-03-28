<template>
  <div class="content w-full flex h-screen overflow-auto">
    <div class="bg-lightGray w-3/4 px-8 h-screen overflow-y-auto overflow-x-hidden">
        
        <!-- Search Bar -->
        <div class="bg-white rounded-3xl flex gap-4 mx-16 px-4 items-center mt-8">
          <IconSearch class="h-6"></IconSearch>
          <input type="text" class="bg-white p-2 font-bold w-full" placeholder="Search for Recipes, Ingredients and Tags">
        </div>

        <!-- Banner -->
        <div class="w-full  flex h-40  mt-10 relative ">
          <div class="bg-orange custom-shape w-full h-full rounded-2xl  text-white pt-10 pb-8 px-8">
            <h1 class="font-extrabold text-2xl">
              All of your Favorite Recipes <br>
              in one place!
            </h1>
            <h5 class="text-md mt-2 text-white">
              Browse through out collection of <span class="font-bold">120,000+</span> tasty recipes
              for your family
            </h5>
          </div>
          <img class="absolute h-48 right-10 -top-10 z-10" src="/images/model.png" alt="">
        </div>

        <!-- Categories -->

        <section class="mt-6 ">
          <h1 class="font-extrabold mb-6 text-xl">Categories</h1>
          <div class="grid grid-cols-4 xl:grid-cols-6 gap-4 ">
            
            <div class="flex items-center justify-center relative">
              <img class="w-full h-16 brightness-50 object-cover rounded-xl" src="/images/breakfast.jpg" alt="">
              <h1 class="font-bold text-white text-xl absolute">Breakfast</h1>
            </div>

            <div class="flex items-center justify-center relative">
              <img class="w-full h-16 brightness-50 object-cover rounded-xl" src="/images/lunch.jpg" alt="">
              <h1 class="font-bold text-white text-xl absolute">Lunch</h1>
            </div>

            <div class="flex items-center justify-center relative">
              <img class="w-full h-16 brightness-50 object-cover rounded-xl" src="/images/dinner.jpg" alt="">
              <h1 class="font-bold text-white text-xl absolute">Dinner</h1>
            </div>

            <div class="flex items-center justify-center relative">
              <img class="w-full h-16 brightness-50 object-cover rounded-xl" src="/images/dessert.jpg" alt="">
              <h1 class="font-bold text-white text-xl absolute">Dessert</h1>
            </div>

            <div class="flex items-center justify-center relative">
              <img class="w-full h-16 brightness-50 object-cover rounded-xl" src="/images/dessert.jpg" alt="">
              <h1 class="font-bold text-white text-xl absolute">Dessert</h1>
            </div>

            <div class="flex items-center justify-center relative">
              <img class="w-full h-16 brightness-50 object-cover rounded-xl" src="/images/dessert.jpg" alt="">
              <h1 class="font-bold text-white text-xl absolute">Dessert</h1>
            </div>
          </div>
        </section>

        <!-- Popular -->

        <section class="mt-6">
          <h1 class="font-extrabold mb-6 text-xl">Popular Recipes</h1>

          <div class="grid grid-cols-3 xl:grid-cols-3 gap-6">
            <button
              @click="changeViewRecipe(index)"
              class="relative" 
              v-for="(recipe, index) in recipes" :key="recipe.id">
                  <Transition name="pin">
                    <div v-if="viewingRecipe == index" class="absolute -top-2 -right-2 z-10 red">
                      <svg class="w-8 h-8" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="SVGCleanerId_0" style="fill:#D8143A;" d="M505.185,130.937l-62.061-62.059L381.063,6.818 c-9.087-9.089-23.824-9.089-32.912,0L224.97,129.997l-45.604-45.605c-9.087-9.087-23.824-9.087-32.912,0l-77.576,77.576 c-9.09,9.089-9.09,23.824,0,32.914l107.664,107.664L193,319.003l16.455,16.457l107.667,107.666 c4.541,4.543,10.499,6.814,16.454,6.814c5.958,0,11.913-2.271,16.457-6.816l77.576-77.576c9.087-9.089,9.087-23.824,0-32.914 l-45.605-45.604l123.183-123.179C514.273,154.762,514.273,140.028,505.185,130.937z"></path> <path id="SVGCleanerId_1" style="fill:#A9A8AE;" d="M176.543,302.546L6.818,472.271c-9.09,9.089-9.09,23.824,0,32.914 C11.361,509.729,17.318,512,23.273,512c5.958,0,11.913-2.271,16.457-6.816L209.455,335.46l-16.454-16.455L176.543,302.546z"></path> <path id="SVGCleanerId_2" style="fill:#B8002B;" d="M505.185,130.937l-62.061-62.059L303.488,208.515l45.604,45.604l16.457,16.455 l16.455,16.457l123.181-123.179C514.273,154.762,514.273,140.028,505.185,130.937z"></path> <path id="SVGCleanerId_3" style="fill:#70001E;" d="M257.882,162.909l45.607,45.605L443.126,68.878L381.065,6.818 c-9.087-9.089-23.824-9.089-32.912,0L224.97,129.997l16.457,16.455L257.882,162.909z"></path> <path style="fill:#B8002B;" d="M193,319.003l16.455,16.457L193,319.003z"></path> <path id="SVGCleanerId_4" style="fill:#B8002B;" d="M303.488,208.515l-45.605-45.605l-16.454-16.455l-16.458-16.457l-45.604-45.605 c-9.087-9.087-23.824-9.087-32.912,0l-77.576,77.576c-9.09,9.089-9.09,23.824,0,32.914l107.664,107.664L193,319.003L303.488,208.515 z"></path> <path style="fill:#D8143A;" d="M193,319.003l-16.457-16.457L193,319.003z"></path> <g> <path id="SVGCleanerId_0_1_" style="fill:#D8143A;" d="M505.185,130.937l-62.061-62.059L381.063,6.818 c-9.087-9.089-23.824-9.089-32.912,0L224.97,129.997l-45.604-45.605c-9.087-9.087-23.824-9.087-32.912,0l-77.576,77.576 c-9.09,9.089-9.09,23.824,0,32.914l107.664,107.664L193,319.003l16.455,16.457l107.667,107.666 c4.541,4.543,10.499,6.814,16.454,6.814c5.958,0,11.913-2.271,16.457-6.816l77.576-77.576c9.087-9.089,9.087-23.824,0-32.914 l-45.605-45.604l123.183-123.179C514.273,154.762,514.273,140.028,505.185,130.937z"></path> </g> <g> <path id="SVGCleanerId_1_1_" style="fill:#A9A8AE;" d="M176.543,302.546L6.818,472.271c-9.09,9.089-9.09,23.824,0,32.914 C11.361,509.729,17.318,512,23.273,512c5.958,0,11.913-2.271,16.457-6.816L209.455,335.46l-16.454-16.455L176.543,302.546z"></path> </g> <g> <path id="SVGCleanerId_2_1_" style="fill:#B8002B;" d="M505.185,130.937l-62.061-62.059L303.488,208.515l45.604,45.604 l16.457,16.455l16.455,16.457l123.181-123.179C514.273,154.762,514.273,140.028,505.185,130.937z"></path> </g> <g> <path id="SVGCleanerId_3_1_" style="fill:#70001E;" d="M257.882,162.909l45.607,45.605L443.126,68.878L381.065,6.818 c-9.087-9.089-23.824-9.089-32.912,0L224.97,129.997l16.457,16.455L257.882,162.909z"></path> </g> <path style="fill:#B8002B;" d="M193,319.003l16.455,16.457L193,319.003z"></path> <g> <path id="SVGCleanerId_4_1_" style="fill:#B8002B;" d="M303.488,208.515l-45.605-45.605l-16.454-16.455l-16.458-16.457 l-45.604-45.605c-9.087-9.087-23.824-9.087-32.912,0l-77.576,77.576c-9.09,9.089-9.09,23.824,0,32.914l107.664,107.664L193,319.003 L303.488,208.515z"></path> </g> <path style="fill:#D8143A;" d="M193,319.003l-16.457-16.457L193,319.003z"></path> </g></svg>
                    </div>
                  </Transition>

                  <div class="flex flex-col h-96 bg-white shadow-sm rounded-xl">
                    <div class="h-72 w-full overflow-hidden rounded-t-xl">
                      <img class="h-full w-full object-cover rounded-t-xl transition ease-in-out delay-50 hover:scale-110 duration-300 " 
                          :src="recipe.image" alt="">
                    </div>

                      <div class="px-4 py-2">
                        <p class="text-xl font-extrabold my-2">{{recipe.name}}</p>

                        <div class="flex justify-between  ">
                          <div class="flex gap-2">
                            <IconTime class="h-6"></IconTime>
                            <p class="font-bold text-slate-500">1 hour 20 minutes</p>
                          </div>
                          <div class="flex gap-2">
                            <IconChef class="h-6"></IconChef>
                            <p class="font-bold text-slate-500">Easy</p>
                          </div>
                        </div>

                      </div>
                  </div>      
            </button>
          </div>
        </section>



    </div>
    <div class="bg-white w-1/4 h-screen py-8 flex flex-col justify-between mx-6">
      <div 
        class="relative "
        :class="{'slide-in-out': changingRecipe}"
        >
        <div class="flex gap-3 items-center justify-between">
          <div>
            <div class="flex gap-3">
              <IconDocumentation class="h-8 orange"></IconDocumentation>
              <p class="font-extrabold text-lg leading-5 self-end">Recipe Preview</p>                
            </div>
            <!-- <div class="w-40 h-0.5 mt-4 bg-slate-200"></div> -->
          </div>


          <div class="flex flex-col items-center">
            <img class="border-2 border-white rounded-xl w-8 h-8 object-cover" :src="user.avatar" alt="">
            <p class="font-semibold text-gray-700 text-sm">Jame Romes</p>
          </div>
        </div>
        

          <div 
            class="flex flex-col items-center gap-4 my-6 border-b-2 border-spacing-4 pb-4 border-gray-300"
          >
            <img class="rounded-xl h-72 w-full object-cover" :src="recipes[viewingRecipe].image" alt="">
            <h1 class="text-xl font-extrabold ">{{recipes[viewingRecipe].name}}</h1>
            <TagList></TagList>
            <p class="text-lg font-semibold text-slate-700 h-20 w-full line-clamp-3">
              {{ recipes[viewingRecipe].description }}
            </p>
          </div>





        <div class="flex justify-between">
          <div class="flex justify-between flex-col gap-3">
              <div class="flex gap-2 items-end">
                <IconChef class="h-6"></IconChef>
                <p class="text-md font-bold text-slate-500">Easy</p>
              </div>
              <div class="flex gap-2 items-end">
                <IconTime class="h-6"></IconTime>
                <p class="text-md font-bold text-slate-500">1h 20m</p>
              </div>
              <div class="flex gap-2 items-end">
                <IconEat class="h-6"></IconEat>
                <p class="text-md font-bold text-slate-500">4-8</p>
              </div>            
          </div>

          <div class="flex justify-between flex-col items-end gap-3">
              <div class="flex gap-2 items-end">
                <IconStar class="h-6"></IconStar>
                <p class="text-md font-bold text-slate-500">3 out of 5</p>
              </div>
              <div class="flex gap-2 items-end">
                <IconNutrion class="h-6"></IconNutrion>
                <p class="text-md font-bold text-slate-500 cursor-pointer hover:underline underline-offset-2">500 kcal</p>
              </div>
              <div class="flex gap-2 items-end">
                <IconIngredient class="h-6"></IconIngredient>
                <p class="text-md font-bold text-slate-500 cursor-pointer hover:underline underline-offset-2">12 Ingredients</p>
              </div>            
          </div>


        </div>
      </div>



      <div class="flex justify-center items-center gap-2">
          <CookButtonComponet class="flex-shrink-0"></CookButtonComponet>
          <!-- <IngredientButton ></IngredientButton> -->
          <FavoriteButton></FavoriteButton>
      </div>


    </div>
  </div>
</template>
<script>
import LogoDefault from '@/components/barComponents/LogoDefault.vue';
import IconDashboard from '@/components/icons/IconDashboard.vue';
import IconHeart from '@/components/icons/IconHeart.vue';
import IconProfile from '@/components/icons/IconProfile.vue';
import IconSetting from '@/components/icons/IconSetting.vue';
import IconMap from '@/components/icons/IconMap.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconExplore from '@/components/icons/IconExplore.vue';
import { mapState, mapActions } from 'pinia';
import { useAuthStore } from '@/stores/auth';
import IconLogout from '@/components/icons/IconLogout.vue';
import data from '../db.json'
import StarsRatingDisplay from '@/components/stars/StarsRatingDisplay.vue';
import IconChef from '@/components/icons/IconChef.vue';
import IconTime from '@/components/icons/IconTime.vue';
import IconDocumentation from '@/components/icons/IconDocumentation.vue';
import CookButton from '@/components/recipeComponents/CookButton.vue';
import IconCook from '@/components/icons/IconCook.vue';
import IconEat from '@/components/icons/IconEat.vue';
import IconStar from '@/components/icons/IconStar.vue';

import IconNutrion from '@/components/icons/IconNutrion.vue';
import IconIngredient from '@/components/icons/IconIngredient.vue';



import FavoriteButton from '@/components/recipeComponents/FavoriteButton.vue';
import IngredientButton from '@/components/recipeComponents/IngredientButton.vue';

import TagList from '@/components/recipeComponents/TagList.vue';





export default {
data () {
  return {
    openUserDropdown: false,
    recipes: data.recipes,

    user: {
      first_name: "Minh",
      last_name: "Bui",
      email: "abc@gmail.com",
      avatar: "https://www.paratime.vn/wp-content/uploads/2019/09/timestudio.vn-corporate-headshot-pricing-01.jpg",
    },

    viewingRecipe: 0,
    changingRecipe: false,
  }
},

computed: {
  ...mapState(useAuthStore, ['isAuthenticated','currentUser']),
  currentRouteName() {
      return this.$route.name;
  }
},
methods: {
  ...mapActions(useAuthStore, ['signOut']),
  async changeViewRecipe(index) {
    this.changingRecipe = true;

    this.viewingRecipe = index;
    
    setTimeout(() => {
    this.changingRecipe = false;
      
    }, 1000);

  },
  handleClickUserDropdown () { 
    this.openUserDropdown = !this.openUserDropdown;
  },
  async openProfile() {
    await openModal(UserInfoModal, {predata: this.user})
  },
  openContentManage() {
    this.$router.push('/manage-contents');
  },
  openBookmark() {
    this.$router.push('/bookmarks');
  },
  signoutMethod() {
    this.signOut();
    this.$router.push('/sign-in');
  },
  managerStore() {
    this.$router.push('/manage-stores');
  }
},
components: {
  LogoDefault,
  IconDashboard,
  IconHeart,
  IconProfile,
  IconSetting,
  IconMap,
  IconSearch,
  IconExplore,
  IconLogout,
  StarsRatingDisplay,
  IconChef,
  IconTime,
  IconDocumentation,
  CookButtonComponet: CookButton,
  IconCook,
  FavoriteButton,
  IngredientButton,
  TagList,
  IconEat,
  IconNutrion,
  IconIngredient,
  IconStar,
},
mounted () {
  if (this.isAuthenticated) {
    this.user = this.currentUser;
  }
}




}
</script>
<style scoped>

.custom-shape{
clip-path: polygon(0 0, 100% 35%, 100% 100%, 0% 100%);
}

.upload-box {
width: calc(100% - 2rem);
}

.pin-enter-from,
.pin-leave-to {
  transform: translate(20px, -20px);
}

.pin-enter-to,
.pin-leave-from {
  transform: translate(0, 0);

}

.pin-enter-active, .pin-leave-active {
  transition: all 0.3s ease-in-out;
}


@keyframes slideIn {
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

.slide-in-out {
  animation: slideIn 0.5s ease-in-out;
}


</style>
