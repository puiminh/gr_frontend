<template>
    <HeaderComponent></HeaderComponent>
      <RouterView :key="$route.fullPath"> 
      </RouterView>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
        components: {
            HeaderComponent,
        },
}


</script>