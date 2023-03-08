<template>
  <div class="container px-10 py-10 mx-auto">
    <h1 class="mb-10 text-4xl font-bold text-orange-500">Meals By Letter</h1>
    <div class="mt-10 flex items-center gap-5 justify-center w-full flex-wrap">
      <span
      class="text-gray-400 cursor-pointer hover:text-orange-500 transition-all hover:scale-150"
      :class="{'text-orange-500 scale-150': selectedLetter === letter}"
        v-for="letter of letters"
        :key="letter"
        @click.prevent="selectedLetter = letter"
        >{{ letter }}</span
      >
    </div>
    <div
      v-if="isLoading === true"
      class="flex items-center justify-center py-20 text-sm text-center text-gray-500 capitalize"
    >
      Loading...
    </div>
  </div>
  <div v-if="!isLoading && meals.length > 0">
    <Meals :meals="meals"></Meals>
  </div>
  <div
    v-else-if="!isLoading || meals.length === 0"
    class="flex items-center justify-center text-sm text-center text-gray-500 capitalize"
  >
    Data not found
  </div>
</template>

<script setup>
import Meals from "../components/Meals.vue";
import { ref, watch } from "vue";
import API from "../axios";
import { useRoute } from "vue-router";

const route = useRoute();
const isLoading = ref(false);
const meals = ref([]);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const selectedLetter = ref("")

function getByLetter (value) {
  API.get(`/search.php?f=${value}`).then((res) => {
    if(res.data.meals !== null) {
      meals.value = res.data.meals
    } else {
      meals.value = []
    }
  })
}

watch(selectedLetter, (value)  => {
  if(value !== "") {
    getByLetter(value)
  }
})
</script>
