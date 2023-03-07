<template>
  <input
    class="w-full px-6 py-2 border border-orange-500 rounded-md outline-none focus:outline-none"
    :type="type"
    :placeholder="placeholder"
    :value="model"
    @input="$emit('update:model', $event.target.value)"
  />
</template>

<script setup>
defineProps({
    placeholder: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: "text"
    },
    model: String
})

defineEmits(
    ["update:model"]
)

</script>
