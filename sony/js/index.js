$(function () {

    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",

        coverflowEffect: {
            rotate: 50,
            stretch: 40,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        observer: true,
        observeParents: true,
    });

    var gameswiper = new Swiper(".gameswiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        observer: true,
        observeParents: true,

        breakpoints: { //반응형 조건 속성
            240: { //240 이상일 경우
                slidesPerView: 1, //레이아웃 2열
            },
            767: {
                slidesPerView: 2,
            },

        }
    });


    //Products 메뉴 클릭이벤트

    var index = 0;
    $(".Products_gnb>p").on("click", function () {
        index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");

        $(".Products_slideBox>div").eq(index).fadeIn(700).siblings().fadeOut(700);


        $(".Products_bigimg>ul").eq(index).fadeIn(700).siblings().fadeOut(700);
    })

    var slide = $(".Products_slideBox>.Products_slide");
    var bigfade = $(".Products_bigimg>.Products_fade");
    slide.each(function (i) {
        console.log("i:" + i)
        $(this).find(".Products_pagerBox>li").each(function (j) {
            console.log("j:" + j);
            $(this).on("click", function () {
                $(this).addClass("active").siblings().removeClass("active");

                //상품의 이미지에 페이저 인덱스값을 주고 
                $(this).parent().parent().prev().children("li").eq(j).fadeIn(700).siblings().fadeOut(700);

                $(this).parents(".Products_slideBox").next().children("ul").eq(i).find("li").eq(j).fadeIn(700).siblings().fadeOut(700)
            })
        })
    })

    //모바일 메뉴 이벤트

    $(".menu-trigger").on("click", function () {

        $(".menu-trigger").toggleClass("active");
        $(".mobile_header").toggleClass("active");
        $(".ham_Btn").toggleClass("active");

        $(".backClick").on("click", function () {

            $(".menu-trigger").removeClass("active")
            $(".mobile_header").removeClass("active");
            $(".ham_Btn").removeClass("active");

            if (!$(".menu-trigger").hasClass("active")) {
                $(".m_nav").css("right", "-100%")
            }
        })
        if ($(".menu-trigger").hasClass("active")) {
            $(".m_nav").css("right", "0px")


        }
        else {
            $(".m_nav").css("right", "-100%")
        }


    })

    //검색창 인아웃
    $(".searchBox").on("click", function () {
        $(".searchBox>div").toggleClass("active");
    })


    //리사이즈

    // var winWidth = $(window).outerWidth();
    // $(window).on("resize", function () {

    // })
})