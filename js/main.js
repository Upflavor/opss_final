"use strict";


const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");


// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener("click", function () {
  
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

/**
 * 슬라이드 요소 관리
 */
new Swiper(".notice-line .swiper-container", {
  direction: "vertical", // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
});
new Swiper(".promotion .swiper-container", {
  
  autoplay: {
    // 자동 재생 여부
    delay: 5000, 
  },
  loop: true, 
  slidesPerView: 3, 
  spaceBetween: 10, 
  centeredSlides: true, 
  pagination: {
    // 페이지 번호 사용 여부
    el: ".promotion .swiper-pagination", 
    clickable: true, 
  },
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".promotion .swiper-prev", 
    nextEl: ".promotion .swiper-next", 
  },
});
new Swiper(".awards .swiper-container", {
  
  autoplay: true, 
  loop: true, 
  spaceBetween: 30, 
  slidesPerView: 5, 
  
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".awards .swiper-prev", 
    nextEl: ".awards .swiper-next", 
  },
});

