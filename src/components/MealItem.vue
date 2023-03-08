<template>
  <div
    class="flex flex-col w-full overflow-hidden transition-all duration-75 ease-in-out bg-white shadow-xl rounded-xl hover:scale-105"
  >
    <router-link :to="{ name: 'mealDetail', params: { id: meal.idMeal } }">
      <img
        :src="
          meal.strMealThumb ||
          'https://leaveitwithme.com.au/wp-content/uploads/2013/11/dummy-image-square.jpg'
        "
        class="object-cover w-full"
        :alt="meal.strMeal"
        style="flex: 1; max-height: 300px"
      />
    </router-link>
    <div class="flex flex-col justify-between flex-1 p-5">
      <div class="">
        <p class="text-lg font-semibold text-justify text-gray-700">
          {{ meal.strMeal }}
        </p>
        <p class="text-sm text-gray-400">
          {{ $filters.truncate(meal.strInstructions, 20) }}
        </p>
      </div>
      <div class="mt-5" v-if="meal.strYoutube">
        <YoutubeButton :url="meal.strYoutube"></YoutubeButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import YoutubeButton from "./YoutubeButton.vue";

defineProps({
  meal: {
    type: Object,
    required: true,
    default: {},
  },
});
</script>
