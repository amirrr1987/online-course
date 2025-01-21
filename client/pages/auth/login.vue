<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
const auth = ref({ mobile: "", password: "" });
const submitHandler = async () => {
  try {
  } catch (error) {}
};
</script>
<template>
  <form @submit.prevent="submitHandler">
    <div class="mb-3">
      <label for="exampleInputMobile1" class="form-label">شماره تماس</label>
      <input
        type="tel"
        inputmode="tel"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="mobileHelp"
        v-model="auth.mobile"
      />
      <!-- <div id="mobileHelp" class="form-text">
        We'll never share your mobile with anyone else.
      </div> -->
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">گذر واژه</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="auth.password"
      />
    </div>
    <div class="d-flex gap-4">
      <button type="submit" class="btn btn-primary">ورود</button>
      <NuxtLink to="/auth/register" class="btn">ثبت نام</NuxtLink>
    </div>
  </form>
</template>
