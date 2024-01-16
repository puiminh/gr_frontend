<template lang="">

    <div class="max-w-screen-xl mx-auto">
        <div class="">
            <p class="font-bold text-2xl mb-12">Stores</p>
        </div>
        <div class="">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="text-lg w-full text-left rtl:text-right text-gray-700 dark:text-gray-400">
                    <thead class="text-xs text-slate-100 uppercase bg-slate-800 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="font-bold w-fit">
                                <span class="sr-only">Image</span>
                            </th>
                            <th scope="col" class="font-bold px-6 py-3 w-1/4">
                                Store's name
                            </th>
                            <th scope="col" class="font-bold px-6 py-3 w-1/4">
                                Address
                            </th>
                            <th scope="col" class="font-bold px-6 py-3 w-1/4">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="p-4">
                                <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505" class="max-w-60 mx-auto" alt="Apple Watch">
                            </td>
                            <td class="px-6 py-4">
                                <router-link to="/store/1" class="font-semibold text-gray-900 dark:text-white hover:underline">
                                    Siêu thị big C thăng long
                                </router-link>
                            </td>
                            <td class="px-6 py-4">
                                23 Nguyễn Thị Định, Trung Hoà, Cầu Giấy, Hà Nội
                            </td>
                            <td class="px-6 py-4">
                                <router-link to="" class="block mb-3 font-medium text-yellow-500 dark:text-red-500 hover:underline">Edit</router-link>
                                <p class="mb-3 font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">Remove</p>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    
        </div>
    </div>

</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>