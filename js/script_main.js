//스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


//slick.js

  $(function(){
     $('.visual .slide').slick({
        arrows: false,  //화살표
        dots: false, //인디케이트 해제
        fade: true,//페이드효과
        autoplay:true, //자동재생
        autoplaySpeed: 4000, //재생시간
        pauseOnHover: false,
        pauseOnFocus: false   
    });
      
      //slide2
    $('.intro_dining .slide2').slick({
        arrows: false,  //화살표
        dots: false, //인디케이트 해제
        fade: false,//페이드효과
        autoplay:true, //자동재생
        autoplaySpeed: 4000, //재생시간
        pauseOnHover: false,
        pauseOnFocus: false     
    });
});

// 탭메뉴
$(function(){
   $('.introduce .roominfo .tab li a ').on('click', function(){
       var num = $('.introduce .roominfo .tab li a ').index($(this));
       $('.introduce .roominfo .tabbox').removeClass('on');
       $('.introduce .roominfo .tabbox:eq('+ num +')').addClass('on');
   });
});

// 스크롤애니메이션
    $(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
      }); 