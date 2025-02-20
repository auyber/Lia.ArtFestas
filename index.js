document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1, // Uma imagem por vez
      spaceBetween: 10, // Espaço entre imagens
      loop: true, // Faz o carrossel reiniciar ao chegar no fim
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3000, // Tempo entre os slides (3s)
        disableOnInteraction: false, // Continua mesmo se o usuário interagir
      },
    });
  });
  