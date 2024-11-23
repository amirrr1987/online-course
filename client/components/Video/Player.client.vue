<script lang="ts" setup>
const { videoId } = defineProps(["videoId"]);
</script>

<template>
  <iframe
    :frameborder="0"
    :src="`https://player.vimeo.com/video/${videoId}`"
    allowfullscreen
  />
</template>
