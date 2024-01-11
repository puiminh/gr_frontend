<template>
    <div 
      class="body flex h-screen overflow-auto" ref="recipeview"
    >
      <!-- <VideoPlayer :options="videoOptions" :highlights="hightlights"/> -->
      <div class="content-left w-3/4 pl-16 pt-8 item">
        <div class="navbar flex items-center">
          <svg class="hambugericon w-12 mr-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Alt_03"> <path id="Vector" d="M5 17H13M5 12H19M5 7H13" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
          <h1 class="logo text-4xl font-medium text-white mr-12 dm-serif">Recipes.</h1>
          <div class="searchbar rounded-lg w-2/3 h-16 mx-4 flex items-center">
            <span class="pl-12 pt-1 text-2xl font-bold text-slate-700">Tìm kiếm</span>
          </div>
        </div>
        <div 
          class="content mt-6"
        >
          <div class="overview_frame pt-12" ref="overview_frame">
            <div class="flex">
              <div class="w-2/3 flex flex-col">
                <p class="author text-xl yellow">Julian Nguyen</p>
                <p class="title text-7xl text-white mt-4 dm-serif" ref="overview_title">Chicken Tikka Masala</p>
                <div class="flex items-center gap-4 mt-8">
                  <StarsRatingDisplay :stars="4.3" class="flex align-start -ml-2"></StarsRatingDisplay>
                  <p class="text-slate-400 font-bold text-sm font-mono">4 out of 5</p>
                </div>
              </div>
              <div class="image-holder relative">
                <img class="w-96 absolute  -top-5 left-5 max-w-none z-50" src="https://veerji.ca/wp-content/uploads/2021/12/malai-kofta-indian-vegetarian-meatballs-curry-traditionally-served-hot-flatbread-tandoori-rumali-roti-naan-traditional-158606665-removebg-preview.png" alt="">
              </div>            
            </div>
            <div class="description mt-8">
              <p class="title text-white text-2xl font-extralight dm-serif mb-12">Introduction</p>
              <p class="description-text text-xl text-orange-50 word-space-3">
                Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi a, posuere class magna elementum montes feugiat cubilia aliquet. Vel cursus sollicitudin nunc fringilla justo cum urna at potenti pellentesque tincidunt fusce, tellus inceptos morbi nostra metus varius turpis interdum nisl lacus. Porta in non porttitor venenatis suspendisse, cras dis curae.
              </p>
            </div>
          </div>

          <div class="instruction_frame pt-8" ref="instruction_frame">
            <div class="instruction mt-8">
              <p class="text-white text-2xl font-extralight dm-serif mb-12" ref="instruction_title">Method</p>
              <div class="instruction-block-container h80screen overflow-auto">
                <InstructionComponent
                  class="mb-8" 
                  v-for="(step,index) in 8" 
                  :key="step" 
                  :step="{order: index+1}"></InstructionComponent>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="content-right-containter flex-initial w-1/4 m-4">
        <div class="content-right flex flex-col justify-between fixed bg-white">
          <div
            :class="{hidden : rightMode != 1}" 
            class="pl-16 pt-16">
            <p class="title text-slate-700 text-3xl dm-serif mb-6">Ingredients</p>
            <div v-for="(item,index) in 5" :key="index" class="checkbox_ingredient flex mt-8">
              <IngredientCheckbox :item="item"></IngredientCheckbox>
              <p class="text text-lg text-slate-600 ml-8 font-bold">Hành tím {{item}}</p>
            </div>
          </div>

          <div
            :class="{hidden : rightMode != 2}"
            class="pl-16 pt-16">
            <p class="title text-slate-700 text-3xl dm-serif mb-6">Reviews</p>
            <div class="">
              <div class="flex">
                <img class="w-8 h-8 object-cover" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="">
                <div>
                  <p>Allison Smith</p>
                  <StarsRatingDisplay :stars="3.8"></StarsRatingDisplay>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, odio pulvinar mollis fames habitant lacus, ut nunc fusce justo est placerat.
              </p>
            </div>
          </div>


  
          <div class="switch-menu self-center bg-slate-200 h-20 mx-4 mb-4 px-8 py-2 gap-4 flex items-center justify-between rounded-3xl">
            <div
              @click="changeRightMode(1)"
              class="ingredient-menu rounded-lg p-1 cursor-pointer" 
              :class="{'bg-white': rightMode == 1} ">
              <svg class="w-6" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z" stroke="#5e5e5e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z" stroke="#5e5e5e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z" stroke="#5e5e5e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z" stroke="#5e5e5e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            <div
              @click="changeRightMode(2)"
              class="ingredient-menu rounded-lg p-1 cursor-pointer" 
              :class="{'bg-white': rightMode == 2} ">
              <svg class="w-6" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.24542 8.91722C5.1997 8.50553 4.8289 8.20886 4.41722 8.25458C4.00553 8.3003 3.70886 8.6711 3.75458 9.08278L5.24542 8.91722ZM5.413 17.221L4.66758 17.3038L4.66759 17.3039L5.413 17.221ZM7.4 19L7.39972 19.75H7.4V19ZM17.6 19L17.6001 18.25H17.6V19ZM19.588 17.221L20.3334 17.3039L20.3334 17.3037L19.588 17.221ZM21.2454 9.08269C21.2911 8.67101 20.9944 8.30024 20.5827 8.25457C20.171 8.2089 19.8002 8.50562 19.7546 8.91731L21.2454 9.08269ZM2.5 8.25C2.08579 8.25 1.75 8.58579 1.75 9C1.75 9.41421 2.08579 9.75 2.5 9.75V8.25ZM22.5 9.75C22.9142 9.75 23.25 9.41421 23.25 9C23.25 8.58579 22.9142 8.25 22.5 8.25V9.75ZM4.82918 8.66459C4.64394 9.03507 4.79411 9.48558 5.16459 9.67082C5.53507 9.85606 5.98558 9.70589 6.17082 9.33541L4.82918 8.66459ZM8.17082 5.33541C8.35606 4.96493 8.20589 4.51442 7.83541 4.32918C7.46493 4.14394 7.01442 4.29411 6.82918 4.66459L8.17082 5.33541ZM18.8292 9.33541C19.0144 9.70589 19.4649 9.85606 19.8354 9.67082C20.2059 9.48558 20.3561 9.03507 20.1708 8.66459L18.8292 9.33541ZM18.1708 4.66459C17.9856 4.29411 17.5351 4.14394 17.1646 4.32918C16.7941 4.51442 16.6439 4.96493 16.8292 5.33541L18.1708 4.66459ZM8.75 15C8.75 15.4142 9.08579 15.75 9.5 15.75C9.91421 15.75 10.25 15.4142 10.25 15H8.75ZM10.25 13C10.25 12.5858 9.91421 12.25 9.5 12.25C9.08579 12.25 8.75 12.5858 8.75 13H10.25ZM11.75 15C11.75 15.4142 12.0858 15.75 12.5 15.75C12.9142 15.75 13.25 15.4142 13.25 15H11.75ZM13.25 13C13.25 12.5858 12.9142 12.25 12.5 12.25C12.0858 12.25 11.75 12.5858 11.75 13H13.25ZM14.75 15C14.75 15.4142 15.0858 15.75 15.5 15.75C15.9142 15.75 16.25 15.4142 16.25 15H14.75ZM16.25 13C16.25 12.5858 15.9142 12.25 15.5 12.25C15.0858 12.25 14.75 12.5858 14.75 13H16.25ZM3.75458 9.08278L4.66758 17.3038L6.15842 17.1382L5.24542 8.91722L3.75458 9.08278ZM4.66759 17.3039C4.82238 18.6961 5.99892 19.7495 7.39972 19.75L7.40028 18.25C6.76356 18.2498 6.22877 17.771 6.15841 17.1381L4.66759 17.3039ZM7.4 19.75H17.6V18.25H7.4V19.75ZM17.5999 19.75C19.0012 19.7502 20.1786 18.6966 20.3334 17.3039L18.8426 17.1381C18.7722 17.7712 18.2371 18.2501 17.6001 18.25L17.5999 19.75ZM20.3334 17.3037L21.2454 9.08269L19.7546 8.91731L18.8426 17.1383L20.3334 17.3037ZM2.5 9.75H22.5V8.25H2.5V9.75ZM6.17082 9.33541L8.17082 5.33541L6.82918 4.66459L4.82918 8.66459L6.17082 9.33541ZM20.1708 8.66459L18.1708 4.66459L16.8292 5.33541L18.8292 9.33541L20.1708 8.66459ZM10.25 15V13H8.75V15H10.25ZM13.25 15V13H11.75V15H13.25ZM16.25 15V13H14.75V15H16.25Z" fill="#5e5e5e"></path> </g></svg>
            </div>
            <div
              @click="changeRightMode(3)"
              class="video-menu rounded-lg p-1 cursor-pointer" 
              :class="{'bg-white': rightMode == 3} ">
              <svg class="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21H18C20.2091 21 22 19.2091 22 17V7C22 4.79086 20.2091 3 18 3Z" stroke="#5e5e5e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.28 8.03994C9.19003 8.42994 9 10.5199 9 12.0399C9 13.5599 9.19003 15.5999 10.28 16.0399C11.37 16.4799 16 13.7499 16 12.0399C16 10.3299 11.44 7.61994 10.28 8.03994Z" stroke="#5e5e5e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            <div
              @click="changeRightMode(4)" 
              class="comment-menu rounded-lg p-1 cursor-pointer" 
              :class="{'bg-white': rightMode == 4} ">
              <svg class="w-5" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 12C5.49988 14.613 6.95512 17.0085 9.2741 18.2127C11.5931 19.4169 14.3897 19.2292 16.527 17.726L19.5 18V12C19.5 8.13401 16.366 5 12.5 5C8.63401 5 5.5 8.13401 5.5 12Z" stroke="#5e5e5e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.5 13.25C9.08579 13.25 8.75 13.5858 8.75 14C8.75 14.4142 9.08579 14.75 9.5 14.75V13.25ZM13.5 14.75C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25V14.75ZM9.5 10.25C9.08579 10.25 8.75 10.5858 8.75 11C8.75 11.4142 9.08579 11.75 9.5 11.75V10.25ZM15.5 11.75C15.9142 11.75 16.25 11.4142 16.25 11C16.25 10.5858 15.9142 10.25 15.5 10.25V11.75ZM9.5 14.75H13.5V13.25H9.5V14.75ZM9.5 11.75H15.5V10.25H9.5V11.75Z" fill="#5e5e5e"></path> </g></svg>
            </div>
            <div
              @click="changeRightMode(5)"
              class="image-menu rounded-lg p-1 cursor-pointer" 
              :class="{'bg-white': rightMode == 5} ">
              <svg class="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2639 15.9375L12.5958 14.2834C11.7909 13.4851 11.3884 13.086 10.9266 12.9401C10.5204 12.8118 10.0838 12.8165 9.68048 12.9536C9.22188 13.1095 8.82814 13.5172 8.04068 14.3326L4.04409 18.2801M14.2639 15.9375L14.6053 15.599C15.4112 14.7998 15.8141 14.4002 16.2765 14.2543C16.6831 14.126 17.12 14.1311 17.5236 14.2687C17.9824 14.4251 18.3761 14.8339 19.1634 15.6514L20 16.4934M14.2639 15.9375L18.275 19.9565M18.275 19.9565C17.9176 20 17.4543 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4.12796 18.7313 4.07512 18.5321 4.04409 18.2801M18.275 19.9565C18.5293 19.9256 18.7301 19.8727 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V16.4934M4.04409 18.2801C4 17.9221 4 17.4575 4 16.8V7.2C4 6.0799 4 5.51984 4.21799 5.09202C4.40973 4.71569 4.71569 4.40973 5.09202 4.21799C5.51984 4 6.07989 4 7.2 4H16.8C17.9201 4 18.4802 4 18.908 4.21799C19.2843 4.40973 19.5903 4.71569 19.782 5.09202C20 5.51984 20 6.0799 20 7.2V16.4934M17 8.99989C17 10.1045 16.1046 10.9999 15 10.9999C13.8954 10.9999 13 10.1045 13 8.99989C13 7.89532 13.8954 6.99989 15 6.99989C16.1046 6.99989 17 7.89532 17 8.99989Z" stroke="#5e5e5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
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

export default {
  methods: {
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
        
          default:
            break;
        }
    },
    handleScroll() {
      if(this.isFullyInViewport(this.$refs.overview_title)) {
        this.rightMode = 1;
      } else if(this.isFullyInViewport(this.$refs.instruction_title)) {
        this.rightMode = 2;
      }

    },
    isFullyInViewport(element) {
      var elementRect = element.getBoundingClientRect();
      var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      console.log(element, elementRect.top, elementRect.bottom, viewportHeight);
      return (
        elementRect.top >= 0 &&
        elementRect.bottom - viewportHeight <= 0
      );
    },
  },
  name: 'RecipeView',
  components: {
    // VideoPlayer,
    StarsRatingDisplay,
    IngredientCheckbox,
    InstructionComponent,
  },
  data() {
    return {
      scrollTimeOut: null,
      rightMode: 1,
      videoOptions: {
        src: "https://firebasestorage.googleapis.com/v0/b/recipe-58dab.appspot.com/o/videos%2FS%E1%BB%91t%20tr%E1%BB%99n%20h%E1%BB%A7%20ti%E1%BA%BFu.mp4?alt=media&token=88e95a60-1d51-4fbf-967a-9db765ffd533",
      },
      hightlights: [
        {
          time: 5,
        },
        {
          time: 15,
        },
        {
          time: 25,
        },
      ]
    };
  },
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
    console.log(this.$refs.recipeview);
    this.$refs.recipeview.addEventListener('scroll', debounce(this.handleScroll, 100));
  }
};
</script>

<style scoped>

.body {
  background: rgb(86,94,116);
  background: linear-gradient(151deg, rgba(86,94,116,1) 0%, rgba(21,28,45,1) 79%);
}

.content-right {
  border-radius: 6%;
  height: 95%;
  width: 360px;
}


.searchbar {
  background-color: rgba(245, 246, 247, 0.2);
}

.instruction-block-container::-webkit-scrollbar {
  width: 10px;
}



</style>