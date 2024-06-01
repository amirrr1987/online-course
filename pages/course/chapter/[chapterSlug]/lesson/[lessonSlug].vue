<template>
  <div class="">
    <span>Lesson: {{ chapter.number }} - {{ lesson.number }} </span>
    <h3>{{ lesson.title }}</h3>
    <a :href="lesson.downloadUrl" class="block">Download Video</a>
    <VideoPlayer
      class="h-[700px] w-full object-cover"
      :video-id="lesson.videoId"
    />
    <p>{{ lesson.text }}</p>
    <ClientOnly>
      <LessonCompleteButton
        :modelValue="isLessonComplete"
        @update:modelValue="toggleComplete"
      />
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
const course = await useCourse();

const route = useRoute();
const chapter = computed(() => {
  const index = course.value.chapters.findIndex(
    (item) => item.slug === route.params.chapterSlug
  );
  return course.value.chapters[index];
});

const lesson = computed(() => {
  const index = chapter.value.lessons.findIndex(
    (item) => item.slug === route.params.lessonSlug
  );
  return chapter.value.lessons[index];
});

const title = computed(() => {
  return `${lesson.value.title} | ${course.value.title}`;
});
useHead({
  title: title.value,
});

const progress = useLocalStorage<Array<Array<boolean | null>>>("progress", []);

const isLessonComplete = computed(() => {
  if (!progress.value[chapter.value.number - 1]) {
    return false;
  }
  if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
    return false;
  }
  return progress.value[chapter.value.number - 1][lesson.value.number - 1];
});

const toggleComplete = () => {
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = [];
  }
  progress.value[chapter.value.number - 1][lesson.value.number - 1] =
    !isLessonComplete.value;
};
</script>
