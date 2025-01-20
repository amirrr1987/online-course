NuxtLink
<style lang="scss">
.user-panel {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content 1fr;
  min-height: 100vh;
  nav {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  aside {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  main {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
}
</style>
<template>
  <div class="user-panel" v-if="1">
    <ul
      class="nav text-bg-dark flex align-items-center justify-content-end"
      style="height: 70px"
    >
      <li class="nav-item">
        <NuxtLink to="/" class="nav-link text-white"> احمد قربانزاده </NuxtLink>
      </li>
    </ul>

    <aside
      class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style="width: 280px"
    >
      <NuxtLink
        to="/user"
        class="d-flex gap-2 align-items-center text-white text-decoration-none"
      >
        <span class="fs-3">پنل کاربری</span>
      </NuxtLink>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li>
          <NuxtLink
            to="/user"
            active-class="active"
            class="nav-link text-white"
          >
            <i class="bi bi-speedometer"></i>
            داشبورد
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/user/courses"
            active-class="active"
            class="nav-link text-white"
          >
            <i class="bi bi-book-half"></i>
            دوره‌ها
          </NuxtLink>
        </li>
      </ul>
      <hr />
      <ul class="nav nav-pills flex-column">
        <li>
          <NuxtLink
            to="/user/settings"
            active-class="active"
            class="nav-link text-white"
          >
            <i class="bi bi-gear"></i>
            تنظیمات
          </NuxtLink>
        </li>
      </ul>
    </aside>

    <main class="p-2">
      <slot />
    </main>
  </div>
</template>
