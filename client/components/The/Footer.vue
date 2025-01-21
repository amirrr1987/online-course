
<template>
  <footer class="bg-body-tertiary">
    <div class="py-5">
      <div class="container">
        <div class="row">
          <!-- اطلاعات تماس -->
          <div class="col-6 col-md-3 mb-3">
            <h5>تماس با ما</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <i class="fas fa-map-marker-alt me-2"></i>
                آدرس: تهران، خیابان آزادی، بلوار استقلال
              </li>
              <li class="nav-item mb-2">
                <i class="fas fa-phone me-2"></i>
                تلفن: ۰۲۱-۱۲۳۴۵۶۷۸
              </li>
              <li class="nav-item mb-2">
                <i class="fas fa-envelope me-2"></i>
                ایمیل: info@copperlife.com
              </li>
            </ul>
          </div>

          <!-- لینک‌های مفید -->
          <div class="col-6 col-md-3 mb-3">
            <h5>لینک‌های مفید</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">دوره‌های آموزشی</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">درباره ما</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">تماس با ما</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">سوالات متداول</a>
              </li>
            </ul>
          </div>

          <!-- شبکه‌های اجتماعی -->
          <div class="col-6 col-md-3 mb-3">
            <h5>شبکه‌های اجتماعی</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="https://www.instagram.com/copperlife_ghorbanzadeh/" class="nav-link p-0 text-body-secondary">
                  <i class="fab fa-instagram me-2"></i>
                  اینستاگرام
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  <i class="fab fa-telegram me-2"></i>
                  تلگرام
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  <i class="fab fa-linkedin me-2"></i>
                  لینکدین
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  <i class="fab fa-youtube me-2"></i>
                  یوتیوب
                </a>
              </li>
            </ul>
          </div>

          <!-- فرم عضویت در خبرنامه -->
          <div class="col-md-3 mb-3">
            <form>
              <h5>عضویت در خبرنامه</h5>
              <p>آخرین اخبار و دوره‌های آموزشی را دریافت کنید.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">ایمیل</label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="آدرس ایمیل"
                />
                <button class="btn btn-primary" type="button">عضویت</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- خط جداکننده -->
    <div class="container">
      <hr class="" />
    </div>

    <!-- کپی‌رایت و شبکه‌های اجتماعی -->
    <div class="py-2">
      <div class="container">
        <div class="d-flex flex-column flex-sm-row justify-content-between">
          <p>&copy; ۱۴۰۲ احمد قربانزاده. کلیه حقوق محفوظ است.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-body-emphasis" href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-body-emphasis" href="#">
                <i class="fab fa-telegram"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-body-emphasis" href="#">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>