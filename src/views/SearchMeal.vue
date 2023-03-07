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
import InputText from "../components/InputText.vue";
import Meals from "../components/Meals.vue";
import { ref, watch } from "vue";
import API from "../axios";

const keyword = ref("");
const isLoading = ref(false);
const meals = ref([]);

function getMealsbyName(keyword) {
  isLoading.value = true;
  API.get(`search.php?s=${keyword}`).then((res) => {
    if (res.data.meals.length > 0) {
      meals.value = res.data.meals;
      isLoading.value = false;
    } else {
      (isLoading.value = false), (meals.value = []);
    }
  });
}

watch(keyword, (value) => {
  if (value.length > 1) {
    getMealsbyName(value);
  } else {
    meals.value = [];
  }
});
</script>
