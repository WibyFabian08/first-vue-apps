<template>
  <div
    v-if="Object.keys(meal).length !== 0"
    class="flex flex-col justify-center w-9/12 py-10 mx-auto lg:w-1/2 xl:w-1/2"
  >
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      style="max-height: 500px"
      class="max-w-[100%] object-cover"
    />
    <div
      class="flex flex-col items-center justify-between w-full mt-5 md:flex-row lg:flex-row"
    >
      <p class="mb-5 text-xl md:mb-0">
        <span class="font-semibold">Category : </span> {{ meal.strCategory }}
      </p>
      <p class="mb-5 text-xl md:mb-0">
        <span class="font-semibold">From :</span> {{ meal.strArea }}
      </p>
      <p class="mb-5 text-xl md:mb-0">
        <span class="font-semibold">Tags :</span> {{ meal.strTags }}
      </p>
    </div>
    <div class="mt-5">
      <p class="text-justify text-gray-500 text-md">
        {{ meal.strInstructions }}
      </p>
    </div>
    <div class="flex justify-between w-full px-0 mt-5 md:justify-start">
      <div class="mr-0 text-left md:mr-10">
        <ul class="list-disc">
          <template v-for="(el, ind) of new Array(20)">
            <li
              class="text-gray-500 text-md"
              v-if="meal[`strIngredient${ind + 1}`]"
            >
              {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="text-left">
        <ul class="list-disc">
          <template v-for="(el, ind) of new Array(20)">
            <li
              class="text-gray-500 text-md"
              v-if="
                meal[`strMeasure${ind + 1}`] !== ' ' &&
                meal[`strMeasure${ind + 1}`] !== ''
              "
            >
             {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="flex mt-5">
      <YoutubeButtonVue :url="meal.strYoutube"></YoutubeButtonVue>
      <a
        :href="meal.strSource"
        target="_blank"
        class="px-3 py-2 ml-3 text-indigo-600 transition-colors border-2 border-transparent rounded"
      >
        View Original Source
      </a>
    </div>
  </div>
  <div
    v-if="isLoading"
    class="flex items-center justify-center py-20 text-xl text-center capitalize"
  >
    Loading...
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import YoutubeButtonVue from "../components/YoutubeButton.vue";
import API from "../axios";

const meal = ref({});
const isLoading = ref(false);

const route = useRoute();

onMounted(() => {
  isLoading.value = true;
  API.get(`lookup.php?i=${route.params.id}`).then((res) => {
    meal.value = res.data.meals[0];
    isLoading.value = false;
  });
});
</script>
