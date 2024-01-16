import { defineStore } from "pinia"

export const useIngredientStore = defineStore('ingredient', {
  state: () => (
    { 
      ingredients: []
    }
  ),
  getters: {
    getIngredients(state) {
      if (state.ingredients.length == 0) return false;
      else return state.ingredients
    }
  },
  actions: {
    addIngredient(ingredient) {
      this.ingredients.push(ingredient)
    },
    assignIngredients(ingredients) {
      this.ingredients = ingredients
    }
  },
})