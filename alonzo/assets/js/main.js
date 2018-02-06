var swiper = new Swiper('.swiper-container-review', {
  slidesPerView: 3,
  spaceBetween: 25,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-review__next',
    prevEl: '.swiper-review__prev',
  },
});


var swiper1 = new Swiper('.swiper-container-catalog', {
  navigation: {
        nextEl: '.swiper-catalog__next',
        prevEl: '.swiper-catalog__prev',
      },
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
});
  


  
