const swiper = new Swiper('.hero-gallery-inner-wrap', {
  direction: 'horizontal',
  loop: true,
  effect: 'fade',

  navigation: {
    nextEl: '.btn-prev',
    prevEl: '.btn-next',
  },

  autoplay: {
    delay: 2000,
  },


  fadeEffect: {
    crossFade: true
  },
});
