<script>
  import {container} from "jenesius-vue-modal";
  export default {
      components: {WidgetContainerModal: container},
      name: "App"
  }
</script>

<template>
  <component :is="$route.meta.layout"></component>
  <widget-container-modal />
</template>

<style scoped>

</style>
