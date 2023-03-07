<template>
  <div class="container px-10 py-10 mx-auto">
    <h1 class="text-4xl font-bold text-orange-500">Random Meals</h1>
  </div>

  <Meals :meals="meals"></Meals>

  <div
    v-if="meals.length === 0"
    class="flex items-center justify-center py-20 text-sm text-center text-gray-500 capitalize"
  >
    Loading...
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Meals from "../components/Meals.vue";
import API from "../axios/index";

let meals = ref([]);

onMounted(() => {
  for (let index = 1; index < 10; index++) {
    API.get("/random.php").then((res) => {
      meals.value.push(res.data.meals[0]);
    });
  }
});
</script>
