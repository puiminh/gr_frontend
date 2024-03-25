<template>
  <div id="menu" ref="menu" class="relative w-full">
    <div class="flex gap-2 py-1 px-4 w-full whitespace-nowrap overflow-x-hidden " :class="{'justify-center': !leftOver&&!rightOver}" id="menulist" ref="menulist">
        <div class="select-none cursor-pointer bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 menuitem hover:shadow-md hover:text-white hover:bg-orange-500 ease-in duration-150" v-for="(tag, index) in items" :key="index">{{'#' + tag }}</div>
    </div>
    <div v-if="leftOver" class="select-none cursor-pointer absolute top-0 -left-4 bg-white shadow-sm shadow-slate-300 rounded-full w-8 h-8 flex justify-center items-center font-extrabold" id="prev" @click="scroll(-100)">&lt;</div>
    <div v-if="rightOver" class="select-none cursor-pointer absolute top-0 -right-4 bg-white shadow-sm shadow-slate-300 rounded-full w-8 h-8 flex justify-center items-center font-extrabold" id="next" @click="scroll(100)">&gt;</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      items: ["item1", "item2","item1", "item2","item1", "item2"],
      leftOver: false,
      rightOver: false,
    };
  },
  computed: {
  },
  mounted() {
    if (this.$refs.menu.offsetWidth < this.$refs.menulist.scrollWidth) {
        this.leftOver= true;
        this.rightOver= true;
    }
  },
  methods: {
    scroll(distance) {
      this.$refs.menulist.scrollLeft += distance;
    }
  }
};
</script>

<style scoped>
#menu {
    scroll-behavior: smooth;
}
#menulist {
    scroll-behavior: smooth;
}
</style>
