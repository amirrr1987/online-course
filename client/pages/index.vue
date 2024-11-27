<template>
  <section>
    <UContainer :ui="{ base: 'grid gap-4 lg:grid-cols-4' }">
      <UCard v-for="item in data" :key="item.id"
        >{{ item.title }}

        <template #footer>
          <NuxtLink :to="`/${item.id}`">more</NuxtLink>
        </template>
      </UCard>
    </UContainer>
  </section>
</template>
<script setup lang="ts">
const { data } = await useFetch("https://jsonplaceholder.org/posts");
</script>
