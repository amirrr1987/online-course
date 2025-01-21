<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm position-sticky">
    <div class="container">
      <NuxtLink
        class="navbar-brand"
        active-class="active"
        aria-current="page"
        to="/"
      >
        آموزش کده
      </NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink
              class="nav-link"
              active-class="active"
              aria-current="page"
              to="/"
            >
              صفحه اصلی
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              class="nav-link"
              active-class="active"
              aria-current="page"
              to="/about"
            >
              درباره ما
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              class="nav-link"
              active-class="active"
              aria-current="page"
              to="/courses"
            >
              دوره‌ها
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              class="nav-link"
              active-class="active"
              aria-current="page"
              to="/contact"
            >
              تماس با ما
            </NuxtLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="جستجو"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">جستجو</button>
        </form>
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink to="/auth/login" class="nav-link">ورود / ثبت</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- <nav aria-label="breadcrumb">
    <ol class="breadcrumb breadcrumb-chevron p-3 bg-body-tertiary rounded-3">
      <li class="breadcrumb-item">
        <a class="link-body-emphasis" href="#">
          <svg class="bi" width="16" height="16"><use xlink:href="#house-door-fill"></use></svg>
          <span class="visually-hidden">Home</span>
        </a>
      </li>
      <li class="breadcrumb-item">
        <a class="link-body-emphasis fw-semibold text-decoration-none" href="#">Library</a>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        Data
      </li>
    </ol>
  </nav> -->
</template>
