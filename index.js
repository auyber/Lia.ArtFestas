document.addEventListener("DOMContentLoaded", function () {
  // Inicializa o Swiper da Home
  new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
  });

  // Inicializa todos os Swipers da seção de serviços
  document.querySelectorAll(".mySwiperServices").forEach(swiperContainer => {
      new Swiper(swiperContainer, {
          slidesPerView: 1,
          spaceBetween: 10,
          loop: true,
          navigation: {
              nextEl: swiperContainer.querySelector(".swiper-button-next"),
              prevEl: swiperContainer.querySelector(".swiper-button-prev"),
          },
          pagination: {
              el: swiperContainer.querySelector(".swiper-pagination"),
              clickable: true,
          },
          autoplay: {
              delay: 3000,
              disableOnInteraction: false,
          },
      });
  });
});
