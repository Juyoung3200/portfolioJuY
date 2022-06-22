$(document).ready(function () {
    //메인슬라이더
    $('#pascucci-wrap #top-wrap .main-slider').slick({
        infinite: true, 
        centerMode: false,
        slidesToShow: 1, 
        slidesToScroll: 1, 
        dots: true, 
        arrows: false, 
        fade: false, 
        vertical: false, 
        autoplay: true, 
        autoplaySpeed: 1800, 
        pauseOnHover: true, 
        vertical: false, 
        prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
        nextArrow: "<button type='button' class='slick-next'>Next</button>",
        dotsClass: "slick-dots",
        draggable: true, 
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    //slidesToShow:3 
                }
					},
            {
                breakpoint: 768, //화면 사이즈 768px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    //slidesToShow:2 
                }
					}
			]
    });

    // 슬라이드버튼
    $("#pascucci-wrap #top-wrap .btn-wrap>.left-btn").click(function () {
        $('.main-slider').slick("slickNext");
    });
    $("#pascucci-wrap #top-wrap .btn-wrap>.right-btn").click(function () {
        $('.main-slider').slick("slickPrev");

    });

    //sns슬라이드
    $('#pascucci-wrap #contents .section04 .sns-wrap >.sns-box>.sns-instagram >.sns-slider').slick({
        infinite: true, 
        centerMode: false,
        slidesToShow: 1, 
        slidesToScroll: 1,
        dots: true, 
        arrows: false, 
        fade: false, 
        vertical: false, 
        autoplay: true, 
        autoplaySpeed: 1500, 
        pauseOnHover: true, 
        dotsClass: "slick-dots", 
    });

    //가맹슬라이드
    $('#pascucci-wrap #contents .section05 .nav-wrap .container .multi-wrap>.multi-item>.img-box').slick({
        infinite: true, 
        centerMode: false,
        slidesToShow: 1, 
        slidesToScroll: 1, 
        dots: true, 
        arrows: false, 
        fade: false, 
        vertical: false, 
        autoplay: true, 
        autoplaySpeed: 1500, 
        pauseOnHover: true, 
        prevArrow: "<button type='button' class='slick-prev'>Previous</button>",

    });
    $("#pascucci-wrap #contents .section05 .nav-wrap .container .multi-wrap>.multi-item >.btn-wrap >.left-btn").click(function () {
        $('#pascucci-wrap #contents .section05 .nav-wrap .container .multi-wrap>.multi-item>.img-box').slick("slickNext");
    });
    $("#pascucci-wrap #contents .section05 .nav-wrap .container .multi-wrap>.multi-item >.btn-wrap>.right-btn").click(function () {
        $('#pascucci-wrap #contents .section05 .nav-wrap .container .multi-wrap>.multi-item>.img-box').slick("slickPrev");

    });


    
    $(".sub-site").on("click", function () {
        $(this).next("#footer-wrap .sub-wrap .sub-site >ul>li>ul").slideToggle("active");
        $("#footer-wrap .sub-wrap .sub-site>ul>li").toggleClass("active");
        $(this).parent().siblings().removeClass("active").find("#footer-wrap .sub-wrap .sub-site >ul>li>ul").slideUp(500);
        $(this).parent().toggleClass("active");
    });

    
     //햄버거메뉴
    $(document).ready(function () {

        $(".hamberger-wrap").click(function () {
            $(".hamberger-wrap").toggleClass("active");
        });

    });

    //top-btn
    $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.top-btn').fadeIn();
    } else {
        $('.top-btn').fadeOut();
    }
});

$('.top-btn').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});
    
//    $(".hamberger-wrap").click(function(){
//        $(".toggle-menu>ul").slideToggle();
//    });
//    
//   $('.toggle-menu >ul>li').click(function(){
//       $(".toggle-menu >ul>li>ul>li").slideToggle();
//   });
//    
//    
//    $(".toggle-menu >ul>li").on("click",function(){
//        $(this).next(".toggle-menu >ul>li>ul").slideToggle();
//        $(this).parent().siblings().removeClass("active").find(".toggle-menu>ul>li>ul>li").slideUp(500);
//        $(this).parent().toggleClass("active");
//    });
 $(".hamberger-wrap").click(function(){
     $(".toggle-menu").slideToggle();
    });
    
$(".top-item .top-tit").on("click", function () {
  $(this).next(".sub-menu").slideToggle();
  $(this).parent().siblings().removeClass("active").find(".sub-menu").slideUp(500);
  $(this).parent().toggleClass("active");
});
    
});
