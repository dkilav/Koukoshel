const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed:500,
  //effect:'flip',
  //effect:'fade',
  //effect:'cards',
  effect: 'cube',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//  import {
//   Carousel,
//   initTE,
// } from "tw-elements";

// initTE({ Carousel });