<template lang="">
    <div class="max-w-screen-xl mx-auto mb-40">
        <div class="flex mb-12 items-center gap-6">
            <p class="font-bold text-2xl">Your store</p>
            <router-link to="/create-store" class="block bg-blue-600 p-2 text-white text-sm font-bold h-fit rounded-full">
                Add
            </router-link>
        </div>
        <div class="">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
                    <thead class="text-xs text-slate-100 uppercase bg-slate-800 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="font-bold px-16 py-3 w-fit">
                                <span class="sr-only">Image</span>
                            </th>
                            <th scope="col" class="font-bold px-6 py-3">
                                Store'name
                            </th>
                            <th scope="col" class="font-bold px-6 py-3 w-1/3">
                                Address
                            </th>
                            <th scope="col" class="font-bold px-6 py-3 w-1/5">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <transition-group name="fade" tag="tbody">
                        <tr 
                            v-for="store in stores"
                            :key="store.id"
                            :class="{active : deletedId == store.id}"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="p-4">
                                <img :src="store.image" class="w-16 md:w-32 max-w-full max-h-full mx-auto" alt="Apple Watch">
                            </td>
                            <td class="px-6 py-4 w-fit min-w-40">
                                <router-link :to="'/store/'+store.id" class="font-semibold text-gray-900 dark:text-white hover:underline">
                                    {{store.name}}
                                </router-link>
                            </td>
                            <td class="px-6 py-4">
                                {{store.address}}
                            </td>
                            <td class="px-6 py-4">
                                <router-link :to="'/update-store/'+store.id" class="block font-bold text-yellow-500 dark:text-red-500 hover:underline">Edit</router-link>
                                <button @click="deletestore(store.id)" class="block font-bold text-red-500 dark:text-red-500 hover:underline">Delete</button>

                            </td>
                        </tr>
                    </transition-group>
                </table>
            </div>
    
        </div>
    </div>

</template>
<script>
import api from '@/services/api';
import { useAuthStore } from '@/stores/auth';
import { mapState } from 'pinia';

export default {
    data () {
        return {
            stores: [],
            deletedId: -1,
        }
    },
    computed: {
        ...mapState(useAuthStore, ['currentUser'])
    },
    methods: {
        fetchData() {
            let that = this;
            api.get('/stores/author/' + this.currentUser.id).then(function (response) {
                    console.log(response.data);
                    that.stores = response.data.stores;
                })
                .catch(function (error) {
                    console.error(error);
                })
        },
        deletestore(id) {
            let that = this;
            if(confirm("Are you sure you want to delete this store")) {
                api.delete('/stores/'+id).then(function (response) {
                        if (response.data.success) {
                            that.$toast.success('Delete store Successfully')
                            that.stores = that.stores.filter((store) => store.id !== id);
                        }
                        
                        
                    })
                    .catch(function (error) {
                        that.$toast.error('Something went wrong')
                        console.error(error);
                    })
            }

        }
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
    }
    
}
</script>
<style scoped>
    /* Hiệu ứng khi xóa hàng */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>