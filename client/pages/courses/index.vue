<script setup lang="ts">
const courses = ref([
  {
    id: "1",
    title: "sdfsdf",
    description: "sdfsdf",
    slug: "asdas",
  },
]);
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-4"
          v-for="item in courses"
          :key="item.id"
        >
          <div class="card">
            <div class="card-image">
              <iframe
                class="rounded w-100"
                src="https://www.aparat.com/video/video/embed/videohash/lfwrw78/vt/frame?titleShow=true&muted=true"
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              />
            </div>
            <div class="card-body">
              <div class="card-title">title</div>
              <div class="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque officia voluptates nam, quos assumenda ad odio sint
                perferendis praesentium, dolor quam dicta cum nobis numquam
                consequuntur cumque debitis voluptatum vel.
              </div>
              <NuxtLink :to="`/courses/${item.slug}`">more</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
