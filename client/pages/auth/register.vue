<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
const auth = ref({ username: "", password: "" });
const submitHandler = async () => {
  try {
  } catch (error) {}
};
</script>
<template>
  <form @submit.prevent="submitHandler">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="auth.username"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="auth.password"
      />
    </div>
    <div class="d-flex gap-4">
      <button type="submit" class="btn btn-primary">Register</button>
      <NuxtLink to="/auth/login" class="btn">Login</NuxtLink>
    </div>
  </form>
</template>
