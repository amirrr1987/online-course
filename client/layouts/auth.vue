<template>
  <section class="auth">
    <div class="auth-form">
      <img
        style="width: 100px; margin: 2rem auto; display: block"
        src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
        alt=""
      />

      <slot />
    </div>
  </section>
</template>
<style>
.auth {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth-form {
  width: 400px;
}
</style>
