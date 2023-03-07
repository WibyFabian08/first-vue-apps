<template>
  <div
    class="container grid grid-cols-1 px-10 pb-10 mx-auto gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
  >
    <MealItem v-for="meal of meals" :key="meal.strMeal" :meal="meal"></MealItem>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import MealItem from "./MealItem.vue";

defineProps({
  meals: {
    required: true,
    type: Array,
    default: [],
  },
});
</script>
