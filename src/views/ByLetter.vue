<template>
  <div class="container px-10 py-10 mx-auto">
    <h1 class="mb-10 text-4xl font-bold text-orange-500">Meals By Letter</h1>
    <div class="flex flex-wrap items-center justify-center w-full gap-5 mt-10">
      <span
      class="text-gray-400 transition-all cursor-pointer hover:text-orange-500 hover:scale-150"
      :class="{'text-orange-500 scale-150': activeLetter === letter}"
        v-for="letter of letters"
        :key="letter"
        @click.prevent="selectedLetter = letter"
        >{{ letter }}</span
      >
    </div>
  </div>
  <div v-if="mealsByLetter.length > 0">
    <Meals :meals="mealsByLetter"></Meals>
  </div>
  <div
    v-else-if="meals.mealsByLetter === 0"
    class="flex items-center justify-center text-sm text-center text-gray-500 capitalize"
  >
    Data not found
  </div>
</template>

<script setup>
import Meals from "../components/Meals.vue";
import { ref, watch, computed } from "vue";
import store from "../store";

const mealsByLetter = computed(() => {
  return store.state.mealsByLetter
})
const activeLetter = computed(() => {
  return store.state.activeLetter
})

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const meals = ref([]);
const selectedLetter = ref("")

function getByLetter (value) {
  store.dispatch("searchMealsByLetter", value)

}

watch(selectedLetter, (value)  => {
  if(value !== "") {
    getByLetter(value)
    store.commit("setActiveLetter", value)
  }
})
</script>
