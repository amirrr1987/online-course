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
                    active-class="text-green"
                    class="text-blue"
                  >
                    {{ lesson.title }}
                  </NuxtLink>
                </li>
              </ol>
            </li>
          </ul>
        </div>
        <div class="bg-white p-12 rounded-r col-span-9">
          <NuxtPage />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const course = await useCourse();
</script>
