<template>
  <div class="container px-10 py-10 mx-auto">
    <h1 class="mb-10 text-4xl font-bold text-orange-500">
      Search Meals By Name
    </h1>
    <InputText
      :placeholder="'Meals Name'"
      :type="'text'"
      v-model:model="keyword"
    ></InputText>
  </div>
  <div v-if="mealsByName.length > 0">
    <Meals :meals="mealsByName"></Meals>
  </div>
  <div
    v-else-if="mealsByName.length === 0"
    class="flex items-center justify-center text-sm text-center text-gray-500 capitalize"
  >
    Data not found
  </div>
</template>

<script setup>
import InputText from "../components/InputText.vue";
import Meals from "../components/Meals.vue";
import { ref, watch, computed } from "vue";
import store from "../store/index"

const keyword = ref("");
const mealsByName = computed(() => {
  return store.getters.mealsByName
})

function getMealsbyName(keyword) {
  store.dispatch("searchMealsByName", keyword)
}

watch(keyword, (value) => {
  if (value.length > 1) {
    getMealsbyName(value);
  } else {
    store.commit("setMealsByName", [])
  }
});

</script>
