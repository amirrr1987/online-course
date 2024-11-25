<script setup lang="ts">
const links = [
  {
    label: "Home",
    to: "/",
  },
];

const ui = {
  wrapper: "block py-2 bg-gray-50",
  container: "mx-auto  px-4 sm:px-6 lg:px-8 max-w-7xl",
};
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    class="border-b border-gray-200 dark:border-gray-800"
    :ui="ui"
  />
</template>
