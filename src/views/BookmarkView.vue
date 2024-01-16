<template lang="">

    <div class="max-w-screen-xl mx-auto">
        <div class="">
            <p class="font-bold text-2xl mb-12">Bookmarked Recipe</p>
        </div>
        <div class="">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
                    <thead class="text-xs text-slate-100 uppercase bg-slate-800 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="font-bold px-16 py-3 w-fit">
                                <span class="sr-only">Image</span>
                            </th>
                            <th scope="col" class="font-bold px-6 py-3 w-1/4">
                                Recipe'name
                            </th>
                            <th scope="col" class="font-bold px-6 py-3 w-2/3">
                                Description
                            </th>
                            <th scope="col" class="font-bold px-6 py-3 w-1/5">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="p-4">
                                <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505" class="w-16 md:w-32 max-w-full max-h-full mx-auto" alt="Apple Watch">
                            </td>
                            <td class="px-6 py-4">
                                <router-link to="/recipe/1" class="font-semibold text-gray-900 dark:text-white hover:underline">
                                    Apple Watch
                                </router-link>
                            </td>
                            <td class="px-6 py-4">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit interdum sem conubia nibh duis est fringilla posuere, augue suscipit fames condimentum cursus enim aenean sed ac vulputate viverra sagittis eu eget.
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
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