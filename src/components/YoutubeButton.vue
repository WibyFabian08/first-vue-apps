<template>
  <a
    :href="url"
    target="_blank"
    class="px-6 py-2 text-lg text-white bg-orange-500 rounded-md hover:bg-orange-600"
  >
    Youtube
  </a>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  url: {
    type: String,
    required: true,
  },
});
</script>
