<template>
    <div class="min-w-52 flex flex-col gap-2">
        <h1 class="text-lg font-bold text-black self-center">{{ data.name }}</h1>
        <div class="flex justify-between">
            <p class="w-3/4 truncate  text-medium font-semibold text-slate-600">{{ data.address }}</p>
            <p class="w-1/4">{{ data.distance }} km</p>
        </div>
        <StarsRatingDisplay class=" self-start -ml-0.5" :small="true" :stars="data.rating" :index="data.id"></StarsRatingDisplay>
    </div>
</template>

<script>
import StarsRatingDisplay from '../stars/StarsRatingDisplay.vue';


export default {
    props: ['data'],
    data() {
        return {};
    },
    components: { StarsRatingDisplay }
}
</script>

<style scoped>
.flex {
    display: flex;
    justify-content: space-around;
}

img {
    object-fit: cover;
    height: 50px;
    width: 50px;
}

</style>