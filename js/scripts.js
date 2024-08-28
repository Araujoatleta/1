var swiper = new Swiper(".slide-videos", {
    slidesPerView: 3,
    spaceBetween: 28,
    speed: 800,
    pagination: {
      el: ".s-last-videos .top .swiper-pagination",
    },
    navigation: {
      nextEl: ".s-last-videos .btn-next",
      prevEl: ".s-last-videos .btn-prev",
    },
    breakpoints: {
      32: {
        slidesPerView: 1.2,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2.1,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 28,
      }
    }
  });