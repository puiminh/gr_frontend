<template>
    <div>
      <VideoPlayer :options="videoOptions" :highlights="hightlights"/>
    </div>
</template>
  
<script>
import VideoPlayer from '@/components/videos/VideoPlayer.vue';
  
export default {
  methods: {
  },
    name: 'RecipeView',
    components: {
      VideoPlayer
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