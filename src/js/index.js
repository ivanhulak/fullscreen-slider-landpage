import mobileNav from './modules/mobile-nav';
import loader from './modules/loader';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

loader();
// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  draggable: true,
  parallax: true,
  speed: 1000,
  keyboard: {
    enabled: true,
  },

  // If we need pagination
  pagination: {
    el: '.count-btn',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
mobileNav();

// window.onload = function(){ 
//   const navBtnOpen = document.getElementById('modalOpen');
// 	const navBtnClose = document.getElementById('modalClose');

//   console.log(navBtnOpen)
//   console.log(navBtnClose)
// };
