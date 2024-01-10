<template>
    <div class="body flex">
      <!-- <VideoPlayer :options="videoOptions" :highlights="hightlights"/> -->
      <div class="content-left w-2/3 px-16 pt-16 item">
        <div class="navbar flex items-center">
          <svg class="hambugericon w-12 mr-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Alt_03"> <path id="Vector" d="M5 17H13M5 12H19M5 7H13" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
          <h1 class="logo text-4xl font-medium text-white mr-12">Recipes.</h1>
          <div class="searchbar rounded-lg w-3/5 h-16 mx-4 flex items-center">
            <span class="pl-12 pt-1 text-2xl font-bold text-slate-700">Tìm kiếm</span>
          </div>
        </div>
        <div class="content mt-12">
          <div class="flex">
            <div class="w-2/3 flex flex-col">
              <p class="author font-mono text-xl">Julian Nguyen</p>
              <p class="title text-7xl text-white mt-4">Chicken Tikka Masala</p>
              <div class="flex items-center gap-4">
                <StarsRating class="flex align-start -ml-2 my-16"></StarsRating>
                <p class="font-mono text-slate-400 font-bold text-sm">4 out of 5</p>
              </div>
            </div>
            <div class="image-holder">
              <img class="h-96 absolute" src="https://veerji.ca/wp-content/uploads/2021/12/malai-kofta-indian-vegetarian-meatballs-curry-traditionally-served-hot-flatbread-tandoori-rumali-roti-naan-traditional-158606665-removebg-preview.png" alt="">
            </div>            
          </div>


          <div class="description">
            <p class="description-title text-white text-2xl font-extralight">Introduction</p>
            <p class="description-text font-mono text-xl text-slate-300 mt-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi a, posuere class magna elementum montes feugiat cubilia aliquet. Vel cursus sollicitudin nunc fringilla justo cum urna at potenti pellentesque tincidunt fusce, tellus inceptos morbi nostra metus varius turpis interdum nisl lacus. Porta in non porttitor venenatis suspendisse, cras dis curae.
            </p>
          </div>
        </div>
      </div>
      <div class="content-right flex-none w-1/3 bg-white m-4">
      </div>
    </div>
</template>
  
<script>
// import VideoPlayer from '@/components/videos/VideoPlayer.vue';
import StarsRating from '@/components/stars/StarsRating.vue';
export default {
  methods: {
  },
    name: 'RecipeView',
    components: {
      // VideoPlayer,
      StarsRating
    },
    data() {
      return {
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
}

.logo, .title, .description-title {
  font-family: 'DM Serif Display', serif;
}

.searchbar {
  background-color: rgba(245, 246, 247, 0.2);
}

.author {
  color: #FCBE84;
}

.description-text {
  font-family: 'Nunito Sans', sans-serif;
}


</style>