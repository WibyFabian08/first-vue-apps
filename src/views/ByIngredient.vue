<template>
  <div class="container px-10 py-10 mx-auto">
    <h1 class="mb-10 text-4xl font-bold text-orange-500">
      Meals for {{ mealName }}
    </h1>
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
import { ref, onMounted } from "vue";
import { computed } from "@vue/reactivity";
import API from "../axios";
import { useRoute } from "vue-router";

const route = useRoute()
const isLoading = ref(false);
const meals = ref([]);

const mealName = computed(() => {
  return route.params.ingredient
})

onMounted(() => {
  API.get(`/filter.php?i=${route.params.ingredient}`).then((res) => {
    meals.value = res.data.meals
  })
})

</script>
