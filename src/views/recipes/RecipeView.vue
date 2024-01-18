<template>
    <div 
      class="body black-gradient flex h-screen overflow-auto py-8" ref="recipeview"
    >
      <div class="content-left w-2/3 pl-16  item">
        <div class="navbar flex items-center">
          <router-link to="/" class="flex items-center">
            <img class="h-12 mr-2" src="/images/recipe-favicon-white.png" alt="">
            <h1 class="logo text-4xl font-medium text-white mr-12 dm-serif">Recipes.</h1>
          </router-link>
          <div class="searchbar rounded-lg w-2/3 h-16 mx-4 flex items-center cursor-pointer hover:bg-slate-200">
            <span class="pl-12 pt-1 text-2xl font-bold text-slate-700">Tìm kiếm</span>
          </div>
        </div>
        <div 
          class="content mt-6"
        >
          <div class="overview_frame pt-12" ref="overview_frame">
            <div class="flex">
              <div class="w-2/3 flex flex-col">
                <p class="author text-xl yellow">{{recipe.author_name}}</p>
                <p class="title text-7xl text-white mt-4 dm-serif" ref="overview_title">{{recipe.name}}</p>
                <div class="flex items-center gap-4 mt-8">
                  <StarsRatingDisplay :stars="recipe.rating" class="flex align-start -ml-2"></StarsRatingDisplay>
                  <p class="text-slate-400 font-bold text-sm font-mono">{{ recipe.rating }} out of 5</p>
                </div>
              </div>
              <div class="image-holder relative">
                <img class="w-96 absolute  -top-5 left-10 rounded-full object-cover max-w-80 h-80 z-50" 
                  :src="recipe.image" alt="">
              </div>            
            </div>
            <div class="description mt-12">
              <p class="title text-white text-2xl font-extralight dm-serif mb-14">Introduction</p>
              <p class="description-text text-xl text-orange-50 word-space-3">
                {{ recipe.description }}
              </p>
            </div>
          </div>

          <div class="instruction_frame pt-8" ref="instruction_frame">
            <div class="instruction mt-8">
              <p class="text-white text-2xl font-extralight dm-serif mb-12" ref="instruction_title">Method</p>
              <div class="instruction-block-container h90screen overflow-auto">
                <InstructionComponent
                  class="mb-8" 
                  v-for="(instruction) in steps" 
                  :key="instruction.order" 
                  :instruction="instruction"
                  :current="current"
                  @jumpToTimeParent="jumpToTimeParent"
                >
                </InstructionComponent>
              </div>
              
            </div>
          </div>

          <div class="gallery_frame pt-24" ref="gallery_frame">
            <div class="gallery mt-8 ">
              <p class="text-white text-2xl font-extralight dm-serif mb-12" ref="gallery_title">Gallery</p>
              <div class="">
                <ImageGallery :images="images"></ImageGallery>
              </div>
            </div>
          </div>

          <div class="w-full h-80">

          </div>

        </div>
      </div>
      <div class="content-right-containter flex-initial w-1/3 m-2 pl-6 relative">
        <!-- :class="[{'bg-transparent' : rightMode == 2}, {'bg-white' : rightMode != 2}]" -->
        <div
          class="content-right flex flex-col justify-between fixed bg-white"
          
        >
          <div
            :class="{hidden : (rightMode != 1) && (rightMode != 4)}" 
            class="p-16 pt-12 slide-left">
            <div class="flex items-center gap-4 mb-12">
                <p class="title text-slate-700 text-3xl dm-serif">Ingredients</p>
                <button @click="toTheMap" class=" bg-green-500 hover:bg-green-600 rounded-full p-2">
                    <IconCart class="w-4 h-4"></IconCart>                   
                    <!-- <p class="text-white font-bold">Buy</p> -->
                </button>
            </div>
            <div class="insideContainer  h-5/6 overflow-y-auto">
              <div v-for="(item,index) in ingredients" :key="index" class="checkbox_ingredient flex mb-8 items-start">
                <IngredientCheckbox :item="index"></IngredientCheckbox>
                <div class="flex justify-between w-5/6 items-center">
                  <p class="text text-lg text-slate-600 ml-8 font-bold">{{ item.name }} </p>
                  <p class="text text-base text-slate-400 font-medium">{{item.amount}} {{item.unit}}</p>
                </div>
              </div>
            </div>

          </div>

          <div
            :class="{hidden : rightMode != 2}"
            class="p-16 h-full -mt-8 min-w-5/6 slide-left">
            <!-- <p class="title text-slate-700 text-3xl dm-serif mb-6">Video</p> -->
            <VideoPlayer 
              class="h-full" 
              :src="recipe.video" 
              :instructions="steps"
              ref="videoplayer"
              @returnCurrentTime="getCurrentTime"
            />

          </div>

          <div
            :class="{hidden : rightMode != 3}"
            class="p-16 pt-12 slide-left">
            <div class="mb-12 justify-between flex items-end">
              <p class="title text-slate-700 text-3xl dm-serif">Reviews</p>
              <p @click="openReviewModal" class="text-slate-400 text-medium font-semibold mb-1 underline-offset-2 underline cursor-pointer">Write a review</p>
            </div>
            <div class="insideContainer h-5/6 overflow-y-auto">
              <UserReviewComponent 
                v-for="(review,index) in reviews" 
                :key="review"
                :review="review"
                :index="index"
                class="pr-6 mb-12"
              >
              </UserReviewComponent>
            </div>
          </div>




  
          <div class="switch-menu self-center bg-slate-200 h-20 mx-4 mb-4 px-8 py-2 gap-4 absolute bottom-0 flex items-center justify-between rounded-3xl">
            <div
              @click="changeRightMode(1)"
              class="ingredient-menu rounded-lg p-1 cursor-pointer" 
              :class="{'bg-white': rightMode == 1} ">
              <svg class="w-8" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.24542 8.91722C5.1997 8.50553 4.8289 8.20886 4.41722 8.25458C4.00553 8.3003 3.70886 8.6711 3.75458 9.08278L5.24542 8.91722ZM5.413 17.221L4.66758 17.3038L4.66759 17.3039L5.413 17.221ZM7.4 19L7.39972 19.75H7.4V19ZM17.6 19L17.6001 18.25H17.6V19ZM19.588 17.221L20.3334 17.3039L20.3334 17.3037L19.588 17.221ZM21.2454 9.08269C21.2911 8.67101 20.9944 8.30024 20.5827 8.25457C20.171 8.2089 19.8002 8.50562 19.7546 8.91731L21.2454 9.08269ZM2.5 8.25C2.08579 8.25 1.75 8.58579 1.75 9C1.75 9.41421 2.08579 9.75 2.5 9.75V8.25ZM22.5 9.75C22.9142 9.75 23.25 9.41421 23.25 9C23.25 8.58579 22.9142 8.25 22.5 8.25V9.75ZM4.82918 8.66459C4.64394 9.03507 4.79411 9.48558 5.16459 9.67082C5.53507 9.85606 5.98558 9.70589 6.17082 9.33541L4.82918 8.66459ZM8.17082 5.33541C8.35606 4.96493 8.20589 4.51442 7.83541 4.32918C7.46493 4.14394 7.01442 4.29411 6.82918 4.66459L8.17082 5.33541ZM18.8292 9.33541C19.0144 9.70589 19.4649 9.85606 19.8354 9.67082C20.2059 9.48558 20.3561 9.03507 20.1708 8.66459L18.8292 9.33541ZM18.1708 4.66459C17.9856 4.29411 17.5351 4.14394 17.1646 4.32918C16.7941 4.51442 16.6439 4.96493 16.8292 5.33541L18.1708 4.66459ZM8.75 15C8.75 15.4142 9.08579 15.75 9.5 15.75C9.91421 15.75 10.25 15.4142 10.25 15H8.75ZM10.25 13C10.25 12.5858 9.91421 12.25 9.5 12.25C9.08579 12.25 8.75 12.5858 8.75 13H10.25ZM11.75 15C11.75 15.4142 12.0858 15.75 12.5 15.75C12.9142 15.75 13.25 15.4142 13.25 15H11.75ZM13.25 13C13.25 12.5858 12.9142 12.25 12.5 12.25C12.0858 12.25 11.75 12.5858 11.75 13H13.25ZM14.75 15C14.75 15.4142 15.0858 15.75 15.5 15.75C15.9142 15.75 16.25 15.4142 16.25 15H14.75ZM16.25 13C16.25 12.5858 15.9142 12.25 15.5 12.25C15.0858 12.25 14.75 12.5858 14.75 13H16.25ZM3.75458 9.08278L4.66758 17.3038L6.15842 17.1382L5.24542 8.91722L3.75458 9.08278ZM4.66759 17.3039C4.82238 18.6961 5.99892 19.7495 7.39972 19.75L7.40028 18.25C6.76356 18.2498 6.22877 17.771 6.15841 17.1381L4.66759 17.3039ZM7.4 19.75H17.6V18.25H7.4V19.75ZM17.5999 19.75C19.0012 19.7502 20.1786 18.6966 20.3334 17.3039L18.8426 17.1381C18.7722 17.7712 18.2371 18.2501 17.6001 18.25L17.5999 19.75ZM20.3334 17.3037L21.2454 9.08269L19.7546 8.91731L18.8426 17.1383L20.3334 17.3037ZM2.5 9.75H22.5V8.25H2.5V9.75ZM6.17082 9.33541L8.17082 5.33541L6.82918 4.66459L4.82918 8.66459L6.17082 9.33541ZM20.1708 8.66459L18.1708 4.66459L16.8292 5.33541L18.8292 9.33541L20.1708 8.66459ZM10.25 15V13H8.75V15H10.25ZM13.25 15V13H11.75V15H13.25ZM16.25 15V13H14.75V15H16.25Z" fill="#5e5e5e"></path> </g></svg>
            </div>
            <div
              @click="changeRightMode(2)"
              class="video-menu rounded-lg p-1 cursor-pointer" 
              :class="{'bg-white': rightMode == 2} ">
              <svg class="w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21H18C20.2091 21 22 19.2091 22 17V7C22 4.79086 20.2091 3 18 3Z" stroke="#5e5e5e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.28 8.03994C9.19003 8.42994 9 10.5199 9 12.0399C9 13.5599 9.19003 15.5999 10.28 16.0399C11.37 16.4799 16 13.7499 16 12.0399C16 10.3299 11.44 7.61994 10.28 8.03994Z" stroke="#5e5e5e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            <div
              @click="changeRightMode(3)" 
              class="comment-menu rounded-lg p-1 cursor-pointer" 
              :class="{'bg-white': rightMode == 3} ">
              <svg class="w-8" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 12C5.49988 14.613 6.95512 17.0085 9.2741 18.2127C11.5931 19.4169 14.3897 19.2292 16.527 17.726L19.5 18V12C19.5 8.13401 16.366 5 12.5 5C8.63401 5 5.5 8.13401 5.5 12Z" stroke="#5e5e5e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.5 13.25C9.08579 13.25 8.75 13.5858 8.75 14C8.75 14.4142 9.08579 14.75 9.5 14.75V13.25ZM13.5 14.75C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25V14.75ZM9.5 10.25C9.08579 10.25 8.75 10.5858 8.75 11C8.75 11.4142 9.08579 11.75 9.5 11.75V10.25ZM15.5 11.75C15.9142 11.75 16.25 11.4142 16.25 11C16.25 10.5858 15.9142 10.25 15.5 10.25V11.75ZM9.5 14.75H13.5V13.25H9.5V14.75ZM9.5 11.75H15.5V10.25H9.5V11.75Z" fill="#5e5e5e"></path> </g></svg>
            </div>
            <div
              @click="bookmark" 
              class="comment-menu rounded-lg p-1 cursor-pointer" >
              <IconHeart class="w-7" :checked="true"></IconHeart>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>
  
<script>
// import VideoPlayer from '@/components/videos/VideoPlayer.vue';
import StarsRatingDisplay from '@/components/stars/StarsRatingDisplay.vue';
import IngredientCheckbox from '@/components/checkboxs/IngredientCheckbox.vue';
import InstructionComponent from '@/components/recipeComponents/InstructionComponent.vue';
import UserReviewComponent from '@/components/userComponents/UserReviewComponent.vue';
import ImageGallery from '@/components/images/ImageGallery.vue';
import IconCart from '@/components/icons/IconCart.vue';
import IconHeart from '@/components/icons/IconHeart.vue';






import VideoPlayer from '@/components/videos/VideoPlayer.vue';
import { openModal } from 'jenesius-vue-modal';
import RecipeReviewModal from '@/components/modals/RecipeReviewModal.vue';
import { useIngredientStore } from '@/stores/ingredient';
import { mapActions, mapState } from 'pinia';
import api from "@/services/api"; 

export default {
  computed: {
    ...mapState(useIngredientStore, ['getIngredients']),
  },
  watch: {
    rightMode(newValue) {
      if (newValue != 2) {
        this.$refs.videoplayer.forcePause();
      }
    },
  },
  components: {
    // VideoPlayer,
    StarsRatingDisplay,
    IngredientCheckbox,
    InstructionComponent,
    UserReviewComponent,
    ImageGallery,
    VideoPlayer,
    RecipeReviewModal,
    IconCart,
    IconHeart,
  },
  data() {
    return {
      scrollTimeOut: null,
      current: 1,
      rightMode: 1,
      videoOptions: {
        src: "https://firebasestorage.googleapis.com/v0/b/recipe-58dab.appspot.com/o/videos%2FS%E1%BB%91t%20tr%E1%BB%99n%20h%E1%BB%A7%20ti%E1%BA%BFu.mp4?alt=media&token=88e95a60-1d51-4fbf-967a-9db765ffd533",
      },
      recipe: {},
      steps: [
        {
          order: 1,
          time: 2,
        },
        {
          time: 10,
          order: 2,
        },
        {
          time: 25,
          order: 3,
        },
        {
          time: 35,
          order: 4,
        },
        {
          time: 45,
          order: 5,
        },
        {
          time: 52,
          order: 6,
        },
      ],
      ingredients: [
        {
            "id": 22,
            "name": "Rau cải xanh",
            "unit": "gram",
            "image": "kale.jpg"
        },
        {
            "id": 23,
            "name": "Mì ống",
            "unit": "gram",
            "image": "penne-pasta.jpg"
        },
        {
            "id": 24,
            "name": "Gia vị cay",
            "unit": "gram",
            "image": "spicy.jpg"
        },
        {
            "id": 25,
            "name": "Sữa đặc có đường",
            "unit": "ml",
            "image": "sweetened-condensed-milk.jpg"
        },
        {
            "id": 26,
            "name": "Bột nghệ",
            "unit": "gram",
            "image": "turmeric.jpg"
        },
      ],
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
      images: [
        {
          src: "https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704931200&semt=sph",
          author: "Alan Smithsonian"
        },
        {
          src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
          author: "Alan Smithsonian"
        },
        {
          src: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/1296x728-header.jpg?w=1155&h=1528",
          author: "Alan Smithsonian"
        },
      ]

    };
  },
  methods: {
    ...mapActions(useIngredientStore, ['assignIngredients']),
    bookmark() {

    },
    fetchData() {
      let that = this;
      api.get('/recipes/detail/'+ this.$route.params.id).then(function (response) {
              console.log(response.data);
              that.recipe = response.data.recipe;
              that.steps = response.data.recipe.steps;
              that.ingredients = response.data.recipe.ingredients;
              that.reviews = response.data.recipe.reviews;

          })
          .catch(function (error) {
              console.error(error);
          })
    },
    toTheMap() {
      this.assignIngredients(this.ingredients);
      console.log(this.ingredients);
      this.$router.push('/map')
    },

    async openReviewModal(predata = null) {
      const modal = await openModal(RecipeReviewModal, {predata: predata})

      modal.on('passData', data => {
          this.reviews.push(data);
      }) 
    },

    jumpToTimeParent (time) { 
      this.$refs.videoplayer.jumpToTimeVideo(time);
    },
    getCurrentTime(time) {
      let currentOrder = 1;
      for (const instruction of this.steps) {
        if (time >= instruction.time) {
          currentOrder = instruction.order;
        } else {
          break;
        }
      }
      this.current = currentOrder;

    },
    changeRightMode(value) {
      this.rightMode = value;
        let el;
        switch (value) {
          case 1:
              el = this.$refs.overview_frame;
              if (el) {
                el.scrollIntoView({behavior: 'smooth'});
              }
            break;
          case 2:
              el = this.$refs.instruction_frame;
              if (el) {
                el.scrollIntoView({behavior: 'smooth'});
              }
            break;
          case 3:
              el = this.$refs.gallery_frame;
              if (el) {
                el.scrollIntoView({behavior: 'smooth'});
              }
            break;
        
          default:
            break;
        }
    },
    handleScroll() {
      if(this.isFullyInViewport(this.$refs.overview_title)) {
        this.rightMode = 1;
      } else if(this.isFullyInViewport(this.$refs.instruction_title)) {
        this.rightMode = 2;
      } else if(this.isFullyInViewport(this.$refs.gallery_title)) {
        this.rightMode = 3;
      }

    },
    isFullyInViewport(element) {
      var elementRect = element.getBoundingClientRect();
      var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      return (
        elementRect.top >= 0 &&
        elementRect.bottom - viewportHeight <= 0
      );
    },
  },
  name: 'RecipeView',
  mounted() {
    function debounce (fn, delay) {
      var timeoutID = null
      return function () {
        clearTimeout(timeoutID)
        var args = arguments
        var that = this
        timeoutID = setTimeout(function () {
          fn.apply(that, args)
        }, delay)
      }
    }
    this.$refs.recipeview.addEventListener('scroll', debounce(this.handleScroll, 100));
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
};
</script>

<style scoped>



.content-right {
  border-radius: 6%;
  height: 95%;
  width: 30%;
}

.insideContainer {
  max-height: 70vh;
}

.insideContainer::-webkit-scrollbar {
  background-color: #c0c0c0;
}

.insideContainer::-webkit-scrollbar-track {
  background-color: #c0c0c0;
}
.insideContainer::-webkit-scrollbar-thumb {
  background-color: #5f5f5f;
}


.searchbar {
  background-color: rgba(245, 246, 247, 0.2);
  transition: background-color 0.2s linear ;
}

.searchbar:hover {
  background-color: rgba(255, 255, 255, 0.845);
}

.searchbar:hover .span {
  color: rgb(0, 0, 0);
}

.instruction-block-container::-webkit-scrollbar {
  width: 10px;
}

.slide-left {
  animation: slideUp 0.2s ease-in-out; /* Độ dài và chế độ animation */
}

@keyframes slideUp {
  from {
    transform: translateX(30%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}



</style>