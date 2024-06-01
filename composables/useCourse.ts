interface Course {
  chapters: Chapter[];
  title: string;
}
export interface Chapter {
  lessons: Lesson[];
  number: number;
  slug: string;
  title: string;
}

export interface Lesson {
  downloadUrl: string;
  number: number;
  slug: string;
  sourceUrl?: string;
  text: string;
  title: string;
  path: string
  videoId: number;
}
export const useCourse = async (): Promise<Ref<Course>> => {
  const res = await $fetch("/api/course");
  const data = {
    ...res,
    chapters: res.chapters.map((chapter) => {
      const lessons: Lesson[] = chapter.lessons.map((lesson) => {
        return {
          ...lesson,
          path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
        };
      });
      return {
        ...chapter,
        lessons,
      };
    }),
  };
  return ref(data);
};
