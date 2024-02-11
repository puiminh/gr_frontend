<template lang="">
    <div class="max-w-screen-xl mx-auto mb-40">
        <div class="flex mb-12 items-center gap-6 justify-between">
            <p class="font-bold text-2xl">All ingredients</p>

            <button
                @click="openCreateModel"   
                class="fixed z-50 bottom-4 left-4 p-4 bg-green-600 drop-shadow-xl rounded-full">
              <IconAdd class="w-6 h-6"></IconAdd>
            </button>
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
                                Ingredient
                            </th>
                            <th scope="col" class="font-bold px-6 py-3 w-1/6">
                                Type
                            </th>
                            <th scope="col" class="font-bold px-6 py-3 w-1/5">
                                Unit
                            </th>
                        </tr>
                    </thead>
                    <transition-group name="fade" tag="tbody">
                        <tr 
                            v-for="ingredient in ingredients"
                            :key="ingredient.id"
                            :class="{active : deletedId == ingredient.id}"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="p-4">
                                <img :src="ingredient.image" class="w-16 md:w-32 max-w-full max-h-full mx-auto" alt="Apple Watch">
                            </td>
                            <td class="px-6 py-4 w-fit min-w-40">
                                    {{ingredient.name}}
                            </td>
                            <td class="px-6 py-4">
                                {{ingredient.type}}
                            </td>
                            <td class="px-6 py-4">
                                <button @click="openUpdateModel(ingredient)" class="block font-bold text-yellow-500 dark:text-red-500 hover:underline">Edit</button>
                                <button @click="deleteingredient(ingredient.id)" class="block font-bold text-red-500 dark:text-red-500 hover:underline">Delete</button>

                            </td>
                        </tr>
                    </transition-group>
                </table>
            </div>
    
        </div>
    </div>

</template>
<script>
import IngredientModal from '@/components/modals/IngredientModal.vue';
import IconAdd from '@/components/icons/IconAdd.vue';
import api from '@/services/api';
import { openModal } from 'jenesius-vue-modal';

export default {
    components: {
        IconAdd,
    },
    data () {
        return {
            ingredients: [],
            deletedId: -1,
        }
    },
    methods: {
        async openCreateModel() {
            const modal = await openModal(IngredientModal)

            modal.on('passData', data => {
                this.ingredients.push(data)
                modal.close();
            }) 
        },

        async openUpdateModel(predata = null) {
            const modal = await openModal(IngredientModal, {predata: predata})

            modal.on('passData', data => {
                this.ingredients.unshift(data)
            }) 
        },
        fetchData() {
            let that = this;
            api.get('/ingredients').then(function (response) {
                    console.log(response.data);
                    that.ingredients = response.data.ingredients;
                })
                .catch(function (error) {
                    console.error(error);
                })
        },
        deleteingredient(id) {
            let that = this;
            if(confirm("Are you sure you want to delete this ingredient")) {
                api.delete('/ingredients/'+id).then(function (response) {
                        if (response.data.success) {
                            that.$toast.success('Delete ingredient Successfully')
                            that.ingredients = that.ingredients.filter((ingredient) => ingredient.id !== id);
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