<template>
    <div class="">
        <div>404</div>
        <button class="bg-red-500 px-12 py-2" @click="handleError">Reset error</button>
    </div>
</template>
<script setup lang="ts">
const handleError = () => {
    clearError({
        redirect: '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3'
    })
}
</script>