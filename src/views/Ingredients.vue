<template>
  <div class="container px-10 py-10 mx-auto">
    <h1 class="mb-10 text-4xl font-bold text-orange-500">
      Search Meals By Ingredietns
    </h1>
    <InputText
      :placeholder="'Ingredietns'"
      :type="'text'"
      v-model:model="keyword"
    ></InputText>

    <div
      v-if="isLoading === true"
      class="flex items-center justify-center py-20 mt-10 text-sm text-center text-gray-500 capitalize"
    >
      Loading...
    </div>
    <div v-if="!isLoading && computedIngredients.length > 0">
      <div class="grid grid-cols-1 gap-3 mt-10 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="ingredietn of computedIngredients"
          :key="ingredietn.strIngredient"
          @click.prevent="handleClick(ingredietn)"
          class="py-3 font-semibold text-center bg-white border border-gray-300 rounded-md cursor-pointer"
        >
          {{ ingredietn.strIngredient }}
        </div>
      </div>
    </div>
    <div
      v-else-if="!isLoading || computedIngredients.length === 0"
      class="flex items-center justify-center mt-10 text-sm text-center text-gray-500 capitalize"
    >
      Data not found
    </div>
  </div>
</template>

<script setup>
import InputText from "../components/InputText.vue";
import { ref, onMounted } from "vue";
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
import API from "../axios";

const router = useRouter()
const keyword = ref("");
const isLoading = ref(false);
const ingredietns = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredietns;
  return ingredietns.value.filter((value) =>
    value.strIngredient
      .toLowerCase()
      .includes(keyword.value.toLocaleLowerCase())
  );
});

function handleClick(ingredietn) {
    router.push({
        name: "byName",
        params: {
            ingredietn: ingredietn.strIngredient
        }
    })
}

onMounted(() => {
  API.get("/list.php?i=list").then((res) => {
    ingredietns.value = res.data.meals;
  });
});
</script>
