<script lang="ts" setup>
const { modelValue } = defineProps(["modelValue"]);

const emits = defineEmits(["update:modelValue"]);
</script>

<template>
  <label
    for="complete"
    class=" min-w-34 h-9 p-2 rounded text-white text-center leading-9"
    :class="modelValue ? 'bg-green-600' : 'bg-gray-500'"
  >
    {{ modelValue ? "complete" : "Mark as complete" }}
    <input
      id="complete"
      type="checkbox"
      class="px-12 py-2 bg-gray"
      :checked="modelValue"
      @change="() => emits('update:modelValue', !modelValue)"
    />
  </label>
</template>

<style scoped>
input {
  display: none;
}
</style>
