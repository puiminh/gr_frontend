<template lang="">
    <div>
        <div class="max-w-xl bg-gray-100 rounded-3xl drop-shadow-lg">
            <div class="flex flex-wrap rounded-lg p-6 dark:bg-gray-600">
                <h2 class="text-xl font-bold text-gray-600 dark:text-gray-300 mb-6">Account settings:</h2>
    
                <div class="flex flex-col gap-4 w-full border-gray-400">
                        <div class="flex justify-between">
                            <div class="w-2/5">
                                <label class="text-gray-600 dark:text-gray-400">
                                    First Name
                                </label>
                                <input
                                    class="w-full py-3 border border-slate-200 rounded-l-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                                    type="text"
                                    v-model="user.first_name"
                                    >
                            </div>
                            <div class="w-2/5">
                                <label class="text-gray-600 dark:text-gray-400">
                                    Last Name
                                </label>
                                <input
                                    class="w-full py-3 border border-slate-200 rounded-r-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                                    type="text"
                                    v-model="user.last_name"
                                    >
                            </div>
                        </div>
    
                    <div>
                        <label class="text-gray-600 dark:text-gray-400">Email</label>
                        <input
                            class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                            type="text"
                            v-model="user.email"
                            >
                    </div>

                    <div class="w-full ">
                        <label class="text-gray-600 dark:text-gray-400">Avatar</label>
                        <ImageModal ref="imageModal" :imagePropLink="user.avatar" class="mx-auto items-center border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"></ImageModal>
                    </div>

    

                    <div class="flex justify-end">
                        <button
                            @click="save"
                            class="py-1.5 px-3 m-1 text-center bg-green-600 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700"
                            type="submit">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ImageModal from './ImageModal.vue';
export default {
    methods: {
        save() {
            this.user.avatar =  this.$refs.imageModal.imageLink;
            console.log(this.user);
        },

    },
    props: ['predata'],
    data () {
        return {
            user: {
                first_name: '',
                last_name: '',
                email: '',
                avatar: '',
            }
        }
    },
    mounted() {
        this.user = this.predata;
        console.log(this.predata);
    },
    components: {
        ImageModal,
    }
    
}
</script>
<style scoped>
input {
    border-width: 2;
    border-style: solid;
    border-color: rgb(189, 189, 189);
}

label {
    font-weight: 600;
}
</style>