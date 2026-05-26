$(function() {
    $(window).scroll(function() {
        // 스크롤 상단 on
        if ($(window).scrollTop() > 0) {
            $('#header').addClass('on');
        } else {
            $('#header').removeClass('on');
        }

        // 스크롤 예약 버튼 on
        var cont_h = $('#container').outerHeight() - $(window).height() + $('.ft_btn_reserve').outerHeight();
        if ($(window).scrollTop() > cont_h) {
            $('.ft_btn_reserve, .ft_kakao').removeClass('on');
        } else {
            $('.ft_btn_reserve, .ft_kakao').addClass('on');
        }
    });

    // 상단 lnb
    var max_h = 0;
    $('.depth_box').each(function(){
        var h = parseInt($(this).css('height'));
        if(max_h < h) {
            max_h = h;
        }
    });

    function lnb() {
        $('#hd_lnb, .depth_box, .hd_lnb_bg').on({
            mouseover : function() {
                $('.depth_box, .hd_lnb_bg').addClass('on');
            },
            mouseout : function() {
                $('.depth_box, .hd_lnb_bg').removeClass('on');
            },
            mouseleave : function() {
                $('.depth_box, .hd_lnb_bg').removeClass('on');
            }
        });
    }
    lnb();

    // aside on off
    $('.btn_menu, .btn_close').on('click', function() {
        if ($('.aside').hasClass('on')) {
            $('.aside, .aside_bg').removeClass('on');
            $('html, body').css({'height':'inherit', 'overflow':'inherit'});
        } else {
            $('.aside, .aside_bg').addClass('on');
            $('html, body').css({'height':'100%', 'overflow':'hidden'});
        }
    });
    $('.aside_bg').on('click', function() {
        $('.aside, .aside_bg').removeClass('on');
        $('html, body').css({'height':'inherit', 'overflow':'inherit'});
    });
    $('.aside .depth1').on('click', function() {
        $('.depth_list').not($(this).next()).slideUp();
        $(this).next().slideToggle();
    });

    // 비주얼 scroll
    var visual_h = $('.visual').height();
    hd_h = $('.header').height();
    function swing() {
        $('.scroll_down').animate({'bottom':'15px'},900).animate({'bottom':'30px'},900, swing);
    }
    swing();
    $('.scroll_down').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({'scrollTop':visual_h - hd_h},600);
    });

    // 메인 비주얼 sld
    var swiper2 = new Swiper('.main_visual_box .swiper-container', {
        loop : true,
        paginationClickable: true,
        spaceBetween: 0,
        nextButton: '.main_visual .arw_right',
        prevButton: '.main_visual .arw_left',
        effect : 'fade',
        autoplay: 4000,
        autoplayDisableOnInteraction: false
    });

    // preview sld
    var swiper = new Swiper('.swiper-container_special', {
        nextButton: '.main_room .arw_right',
        prevButton: '.main_room .arw_left',
        loop : true,
        slidesPerView: 3,
        spaceBetween: 30,
        paginationClickable: true,
        grabCursor: true,
        //autoplay: 5000,
        autoplayDisableOnInteraction: false,
        breakpoints: {
            479: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            960: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
    });

    // 메인 healing sld
    var swiper3 = new Swiper('.swiper-container_room', {
        loop : true,
        paginationClickable: true,
        spaceBetween: 0,
        nextButton: '.sub_visual_wide .arw_right',
        prevButton: '.sub_visual_wide .arw_left',
        effect : 'fade',
        autoplay: 4000,
        autoplayDisableOnInteraction: false
    });

    // 서브 비주얼 sld
    var swiper4 = new Swiper('.sub_visual_box .swiper-container', {
        loop : true,
        paginationClickable: true,
        spaceBetween: 0,
        nextButton: '.sub_visual_wide .arw_right',
        prevButton: '.sub_visual_wide .arw_left',
        effect : 'fade',
        autoplay: 4000,
        autoplayDisableOnInteraction: false
    });

});








