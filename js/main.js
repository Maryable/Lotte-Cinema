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
    slidesPerView: '4',
    spaceBetween: 12,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView:1.4,
        spaceBetween:10
      },
      768: {
        slidesPerView:2,
        spaceBetween:10
      },
      960: {
        slidesPerView:3,
        spaceBetween:10
      },
    }
  });

  //공지사항 탭메뉴 
  let tab = $('.notice_box');
  tab.find('ul>li>ul').hide();
  tab.find('ul>li.active >ul').show();

  function tabList(e) {
    e.preventDefault();
    let target = $(this);
    target.next().show().parent('li')
      .addClass('active').siblings('li')
      .removeClass('active').find('ul').hide();
  }

  tab.find('ul>li>a').click(tabList).focus(tabList);
  // tab을 했을 때 자동으로 tablist에 focus되도록 함.
});

