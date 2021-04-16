'use strict'

$(function(){
    // 메인 슬라이드 
  let mySwiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    autoplay: {
        delay: 5000,
    },
  });

// 영화 차트 탭메뉴
  let movie_btn = $('.movie_title>ul>li');
  let movie_cont = $('.movie_chart > div');
  movie_cont.hide().eq(0).show();
  
  movie_btn.click(function(e){
    e.preventDefault();
    let target = $(this);
    let idx = target.index();
    // alert(idx)
    movie_btn.removeClass('active');
    $(this).addClass('acitve');
    movie_cont.css('display','none');
    movie_cont.eq(idx).css('display','block');
  });

  let swiper = new Swiper('.swiper-container2', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

});
