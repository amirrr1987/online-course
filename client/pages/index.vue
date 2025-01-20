<template>
  <Header />
  <section class="py-5">
    <div class="container">
        <h1 class="text-center">Videos</h1>
        <hr class="w-25 mx-auto mb-5">
    </div>
    <div class="container">
      <div class="row mb-4">
        <div class="col-12 col-md-6 col-lg-4" v-for="item in 3" :key="item">
          <Post />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4" v-for="item in 3" :key="item">
          <Post />
        </div>
      </div>
    </div>
  </section>
</template>
