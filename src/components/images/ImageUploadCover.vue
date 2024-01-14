<template lang="">
    <div class="opacity-0 hover:opacity-50 w-full h-full bg-black absolute flex items-center cursor-pointer">
        <div class="rounded-full border-2 border-white flex gap-5 justify-between mx-auto p-4">
            <p class="font-bold text-xl text-white self-center text-center">Change Image</p>
            <IconUpload class="w-8 h-8"></IconUpload>
        </div>
    </div>
</template>
<script>
import IconUpload from '../icons/IconUpload.vue';
export default {
    components: {
        IconUpload,
    }
}
</script>
<style lang="">
    
</style>