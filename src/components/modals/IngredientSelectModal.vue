<template lang="">
    <div class="w-5/6 h90screen bg-slate-200 rounded-3xl drop-shadow-xl px-12">
        <div class="flex justify-between items-center py-8 gap-6">
            <button @click="passData" class="bg-white bg-yellow border-white border-2 p-2 rounded-full hover:shadow-lg">
                <IconSave class="w-6 bg-yellow"></IconSave>
            </button>
            <input
                v-model="keyword" 
                class="w-2/5 mx-auto py-4 px-6 bg-white rounded-3xl text-black font-bold text-xl" type="text" placeholder="Search for your ingredients">
            <div class="w-1/5 flex justify-start gap-4">
                <div class="flex justify-between gap-4 items-center bg-white p-4 border-green-600 border-2 rounded-full">
                    <IconV class="w-6 bg-green-600 rounded-full"></IconV>
                    <p class="font-bold">{{totalSelected}}</p>
                </div>
                <button @click="deleteAll" class="flex justify-between gap-4 items-center bg-white p-4 border-red-600 border-2 rounded-full">
                    <IconDelete class="w-6 bg-red-600  rounded-full"></IconDelete>
                    <p class="font-bold text-black">Delete</p>
                </button>
            </div>
        </div>

        <div class="mt-6 px-6 h-2/3 overflow-auto">
            <ul>
                <li 
                    v-for="(ingredient) in ingredientsWithKeyword"
                    :key=ingredient.id
                >
                    <div 
                        class="relative cursor-pointer p-4 rounded-3xl bg-white shadow-sm hover:shadow-2xl"
                        :class="{['border-green-600 border-2']: checkIfSelected(ingredient.id)}"
                        @click="selectIngredient(ingredient.id)"
                    >
                        <img class="rounded-full" :src="defaultImg">
                        <IconV v-if="checkIfSelected(ingredient.id)" class="absolute top-2 right-2 w-6 bg-green-600 rounded-full"></IconV>

                        <p class="font-bold text-lg text-center mt-4"> {{ingredient.name}} </p>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import IconV from '../icons/IconV.vue';
import IconDelete from '../icons/IconDelete.vue';
import IconSave from '../icons/IconSave.vue';
import api from "@/services/api"; 

export default {
    data() {
        return {
            defaultImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5umr6GHRZJ8zoRpboUE40KS4pGNQ965_xRg&usqp=CAU',
            ingredients: [],
            selected: this.preSelect,
            keyword: '',
        }
    },
  watch: {
  },
  computed: {
    totalSelected() {
        return this.selected.length;
    },
    ingredientsWithKeyword() {
        if (find == '') {
            return this.ingredients
        } else {
            let find = this.keyword.toLowerCase()
            const newList = this.ingredients.filter((i) => i.name.toLowerCase().includes(find));
            return newList
        }
    }
  },
  methods: {
    checkIfSelected(id) {
        const found = this.selected.find((i) => i == id);
        if (found) {
            return true;
        } else {
            return false;
        }
    },
    selectIngredient(id) {
        if (this.selected.includes(id)) {
            this.selected = this.selected.filter(item => item !== id);
        } else {
            this.selected.push(id);
        }
    },
    deleteAll() {
        this.selected = [];
    },
    passData() {
        const selectedIngredients = this.ingredients.filter(ingredient => this.selected.includes(ingredient.id));
        this.$emit('passData', selectedIngredients);
    },
    fetchData() {
        let that = this;
        api.get('/ingredients').then(function (response) {
                console.log(response.data);
                that.ingredients = response.data.data;
            })
            .catch(function (error) {
                console.error(error);
            })
    }
  },

  props: ['preSelect'],
  components: {
    IconV,
    IconDelete,
    IconSave,
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
  },
}
</script>
<style scoped>
::-webkit-scrollbar {
  background-color: #c0c0c0;
}

::-webkit-scrollbar-track {
  background-color: #c0c0c0;
}
::-webkit-scrollbar-thumb {
  background-color: #5f5f5f;
}

img {
	width: 100%;
	display: block;
	aspect-ratio: 1 / 1;
	object-fit: cover;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
	display: grid;
	gap: 2rem;
	grid-template-columns:  repeat(auto-fit, 17%);;
	max-width: 100%;
	width: 100%;
}
</style>