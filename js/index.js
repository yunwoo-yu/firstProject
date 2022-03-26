$(function () {
    // var back1 = $(".load1")
    // //스크롤 막아두기
    // $("#Wrap").css('overflow', 'hidden');

    // $(".loading>a").on("click", function () {

    //     $(".full").animate({
    //         "top": "-100%",
    //     }, 1000)

    //     setTimeout(function () {
    //         $(back1).animate({
    //             "left": "-100%",
    //         }, 1000)
    //     }, 1000)

    //     setTimeout(() => {
    //         $("#Wrap").css('overflow', 'auto');
    //         shadow();
    //     }, 2000);

    // })

    //컨텐츠1 그림자 이펙트

    shadow();
    gnbscrollEvent();
})
function shadow() {
    var cnt1text = $(".cnt1_welcome")
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



