$(function () {
    


    loding();
    gnbscrollEvent();
    parallax();
    scrollbar();
    AOS.init({
        duration:800,
    });
})

//첫화면
function loding(){
    var back1 = $(".load1")
    //스크롤 막아두기
    $('#Wrap').on('scroll touchmove mousewheel', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });

    $(".loading>a").on("click", function () {

        $(".lodingBox").animate({
            "top": "-100%",
        }, 1000)

        setTimeout(function () {
            $(back1).animate({
                "left": "-100%",
            }, 1000)
        }, 1000)

        setTimeout(() => {
            shadow();
            $('#Wrap').off('scroll touchmove mousewheel');
        }, 2000);

    })
}

//커스텀 스크롤바
function scrollbar(){
    let scrollbar = document.getElementById('scrollbar')
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function(){
        let scrollbarHeight = (window.scrollY / totalHeight) * 100;
        scrollbar.style.height = scrollbarHeight + "%";
    }
}

//cnt1 그림자 이펙트

function shadow() {
    var cnt1text = $(".cnt1_title")
    var shadow = '';
    for (var i = 0; i < 30; i++) {
        shadow += (shadow ? ',' : '') + i * 1 + 'px ' + i * 1 + 'px 0 #191919'
    }

    $(cnt1text).css({
        "text-shadow": shadow,
        "opacity": "1",
        "transform": "translateX(-50%) translateY(-50%)",
    })

}

//gnb click 및 스크롤 이벤트

function gnbscrollEvent() {


    var mHtml = $("html");

    var $menu = $(".gnb>ul>li");

    var $cnt = $(".cnt");

    $($menu).on("click", "a", function (e) {
        var $target = $(this).parent();
        var idx = $target.index()
        var offsetTop = (idx) * $(window).height();

        mHtml.stop().animate({
            scrollTop: offsetTop
        }, 800);
    })

    $(window).on("scroll", function () {
        $($cnt).each(function (idx) {
            if ($(this).offset().top <= $(window).scrollTop()) {
                $menu.removeClass("active");
                $menu.eq(idx).addClass("active");
            }
        })
    })

}

//cnt1 배경 별,달 패럴렉스

function parallax() {

    let stars = $(".stars");
    let moon = $(".moon");

    $(window).on("scroll", function () {

        let value = $(this).scrollTop();
        $(stars).css("left", value * 0.3 + "px");
        $(moon).css("top", value * 0.6 + "px");
    })
}