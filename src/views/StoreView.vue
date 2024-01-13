<template lang="">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 pb-12">
        <div class="broad flex flex-wrap mx-auto w-fit h-fit relative mb-40">
            <img class="broad-image object-cover" src="/images/grocerybackground.jpg" alt="">
            <router-link to="/search" class="bg-yellow w-1/4 h-16 rounded-full absolute -bottom-8 centered-axis-x flex items-center justify-between px-6 drop-shadow-lg">
              <p class="text-slate-800 font-medium text-lg">Search for recipes...</p>
              <svg class="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#5e5e5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </router-link>
        </div>

        <ul class="list-display mt-16">
            <li 
                v-for="i in 10" :key="i">
                <div>
                    <div class="rounded-3xl bg-gray-100 relative flex justify-center flex-col h-60">
                        <img class="rounded-full h-52 p-8" 
                            src="https://cdn.pixabay.com/photo/2016/06/11/15/33/broccoli-1450274_640.png" 
                            alt="">
                    </div>
                    <div class="flex justify-between items-start mt-4 px-2">
                        <p class="text-xl font-bold">Súp Lơ</p>
                        <div class="flex items-center">
                            <p class="text-2xl font-extrabold text-slate-700">23,800</p>
                            <div>
                                <p class="font-bold text-yellow-500">vnđ</p>
                                <p class="font-bold -mt-2 text-slate-500">/kg</p>  
                            </div>
                        </div>
                    </div>
                </div>

            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.broad-image {
    width: 1280px;
    height: 550px;
  }

img {
	display: block;
	aspect-ratio: 1 / 1;
	object-fit: cover;
	transition: transform 1000ms;
}

ul {
	list-style: none;
	padding: 0;
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
	max-width: 100%;
	width: 100%;
}
    
</style>