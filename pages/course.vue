<template>
  <div class="bg-gray-200 min-h-screen">
    <section class="py-12">
      <div class="container mx-auto">
        <div class="text-center text-4xl">
          Course: <span class="font-bold">{{ course.title }}</span>
        </div>
      </div>
      <div class="container mx-auto grid grid-cols-12 gap-4">
        <div class="bg-white p-12 rounded-l col-span-3">
          <div>Chapters</div>
          <hr />
          <ul>
            <li v-for="chapter in course.chapters" class="mb-8 mt-4">
              {{ chapter.title }}
              <ol class="px-6 mt-2">
                <li v-for="lesson in chapter.lessons" class="mb-2">
                  <NuxtLink
                    :to="lesson.path"
                    active-class="text-green-500"
                    class="text-blue-500"
                  >
                    {{ lesson.title }}
                  </NuxtLink>
                </li>
              </ol>
            </li>
          </ul>
        </div>
        <div class="bg-white p-12 rounded-r col-span-9">
          <NuxtErrorBoundary>
            <NuxtPage />
            <template #error="{ error }">
              <div>this code</div>
              <div>{{ error }}</div>
              <button @click="resetError(error)">reset error</button>
            </template>
          </NuxtErrorBoundary>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const course = await useCourse();

const resetError = (error: any) => {
  error.value = null;
};
</script>
