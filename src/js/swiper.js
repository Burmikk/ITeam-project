import Swiper, { Navigation, Pagination, EffectCoverflow } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, EffectCoverflow],
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 25,
  loop: true,
  centeredSlides: true,
  speed: 1000,
  grabCursor: true,
  loopFillGroupWithBlank: true,

        
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 20,
    scale: 0.6,
    slideShadows: false,
    depth:350,
  },
        
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });