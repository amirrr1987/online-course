export const useCourse = async () => {
  const res = await $fetch("/api/course");
  const data = {
    ...res,
    chapters: res.chapters.map((chapter) => {
      return {
        ...chapter,
        lessons: chapter.lessons.map((lesson) => {
          return {
            ...lesson,
            path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
          };
        }),
      };
    }),
  };
  return ref(data);
};
