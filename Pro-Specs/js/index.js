

$(function () {
    //풀페이지 스크롤///////////////////////////

    //화면이 이동해야될 위치값을 저장할 변수 만들기
    let moveTop = null;
    //화면의 방향을 위 아래로 이동할지를 체크하는 변수만들기
    var delta;
    let windowWidth = $(window).outerWidth();
    console.log(windowWidth)

    function fullpage() {
        $("#fullpage>.section").each(function (i) {
            $(this).on("mousewheel DOMMouseScroll", function (e) {
                //이벤트 정보를 저장할 변수
                e.preventDefault();
                let event = e.originalEvent;
                if (event.detail) {
                    //파이어폭스
                    delta = event.detail * -40;
                }
                else {
                    //다른 브라우저
                    delta = event.wheelDelta;
                }
                //마우스휠을 아래로 내리면 delta -120 위로 올리면 delta 120
                if (delta < 0) {
                    if ($(this).next().length) {
                        moveTop = $(this).next().offset().top
                    }
                }
                else {
                    if ($(this).prev().length) {
                        moveTop = $(this).prev().offset().top
                    }
                }
                if (delta > 0) {
                    $("header").css("top", "0px")
                }
                else {
                    $("header").css("top", "-100%")
                }

                $("html,body").stop().animate({
                    scrollTop: moveTop
                }, 600)

            })
        })
    }
    if (windowWidth >= 1680) {
        $("header").css("top", "0px")
        fullpage();
    }

    //풀페이지 리사이즈 확인////////////////////////////////////

    $(window).on("resize", function (i) {
        let windowWidth = $(window).outerWidth();
        if (windowWidth >= 1680) {
            fullpage();
        }
        else {
            $("#fullpage>.section").unbind("mousewheel DOMMouseScroll");
            $("header").css("top", "0px");
        }

    })


    //스크롤 페이드 aos//////////////////////////////
    AOS.init({
        duration: 1000,
    });


    //메인배너 스와이프 슬라이드///////////////////////
    var swiper = new Swiper(".mySwiper", {

        spaceBetween: 10,
        loop: true,
        breakpoints: { //반응형 조건 속성
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,

            },
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: 'swiper-button-disabled'
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    //검색창/////////////////////////////////////////

    $('.search_icon').on("click", function () {
        var schBox = $(".search_box")
        if (!$(schBox).hasClass("active")) {
            $(schBox).addClass("active");
        }
        else if ($(schBox).hasClass("active")) {
            $(schBox).removeClass("active");
        }
    })


    //신상품 탭 클릭 시 제품변경///////////////////////////////////

    $(".new_tab>ul>li").on("click", function () {
        var tabindex = $(this).index();
        var product = $(".new_product>ul")
        if (!$(this).hasClass("active")) {
            $(this).addClass("active").siblings().removeClass("active");

        }
        if (tabindex == 0) {
            $(".Life").addClass("active")
                .siblings().removeClass("active");
        }
        else if (tabindex == 1) {
            $(".Sports").addClass("active")
                .siblings().removeClass("active");
        }
        else if (tabindex == 2) {
            $(".Run").addClass("active")
                .siblings().removeClass("active");
        }
    })


    //메인배너 페이드/////////////////////////////////////////

    //현재 보여지는 배너가 누구인지를 체크할 변수
    let curIndex = 0;

    let timer = setInterval(autoBanner, 3000);

    function autoBanner() {
        if (curIndex < 3) {
            curIndex++;
        }
        else {
            curIndex = 0;
        }

        $(".fade_slide>li").eq(curIndex).fadeIn(3000).siblings().fadeOut(3000);
    }
    //banner에 마우스가 들어가면 올라가면 setInterval로 만든 timer가 중지
    $(".fade_slide").on("mouseenter", function () {
        clearInterval(timer);
    })

    //banner 에서 마우스가 벗어나면 아웃되면 setInterval이 다시 실행되도록
    $(".fade_slide").on("mouseleave", function () {
        timer = setInterval(autoBanner, 3000);
    })


    //콜라보1 상하슬라이드 bxslider////////////////////////////
    $(".clb1_slide").bxSlider({
        mode: 'vertical',
        auto: true,
        pause: 2500,
        slideWidth: 1000,
        controls: false,
        touchEnabled: false,
        autoDelay: 500,
    });


    //오리지널 탭 멀티 슬라이드/////////////////////////////////////

    //작은 이미지가 시작하는 순서
    let smallOrder = 4;
    //큰이미지 순서
    let bigOrder = 0;

    let clickImg;

    let smallWidth = $(".small_box>li").outerWidth();
    let smallCount = $(".small_box>li").length;
    console.log("복사전" + smallCount);

    let firstli = $(".small_box>li:lt(4)").clone();
    let lastli = $(".small_box>li:gt(4)").clone();
    $(".small_box").append(firstli);
    $(".small_box").prepend(lastli);

    let copyCount = $(".small_box>li").length;
    console.log("복사후: " + copyCount);

    pre = smallOrder;
    //작은 이미지 시작위치
    $(".small_box").css("left", -smallOrder * smallWidth);

    $(".small_box>li").on("click", function () {
        let smallWidth = $(".small_box>li").outerWidth();
        $(".small_box").css("left", -smallOrder * smallWidth);
        clickImg = $(this).index();
        console.log("클릭이미지: " + clickImg);
        move = clickImg - pre;
        console.log("무브: " + move);
        //이전오더
        pre = clickImg;
        if (clickImg > 10) {
            clickImg = clickImg - 7 - move;
            $(".small_box").css("left", -clickImg * smallWidth);
            smallOrder = clickImg + move;
        } else {
            smallOrder = clickImg + 1;
        }
        bigOrder = smallOrder - 4;
        $(".small_box").stop().animate({
            "left": -smallOrder * smallWidth
        }, 1000);

        $('.big_box>li').eq(bigOrder).fadeIn(500).siblings().fadeOut(500);
    })

    //리사이즈 되면 li,ul 크기 다시잡기
    $(window).on("resize", function () {
        //작은 이미지가 시작하는 순서
        let smallOrder = 4;
        //큰이미지 순서
        let bigOrder = 0;

        let clickImg;

        let smallWidth = $(".small_box>li").outerWidth();

        pre = smallOrder;
        //작은 이미지 시작위치
        $(".small_box").css("left", -smallOrder * smallWidth);

        $('.big_box>li').eq(bigOrder).fadeIn(500).siblings().fadeOut(500);
    })

    //햄버거버튼 애니메이션 /////////////////////////////////////////////////
    $('.line_box').on('click', function () {
        $('#line_top').toggleClass('line_top');
        $('#line_mid').toggleClass('line_mid');
        $('#line_bot').toggleClass('line_bot');
        $(".line").toggleClass("active");
        $(".ham_Btn").toggleClass("active");
        $(".m_nav").toggleClass("active");
    })


    //셀렉트 제품 클릭 이벤트///////////////////////////////////////

    //성별 선택시 성별이미지 나오기
    $(".gender_text>p").on("click", function () {
        let gender = $(this).index();
        let gender_img = $(".gender_img>div").eq(gender);

        $(this).addClass('active').siblings().removeClass('active');
        $(gender_img).addClass("active").siblings().removeClass("active")

        if ($(".gender_text>p").hasClass("active")) {
            $(".slt_product>p").removeClass("active");
            $(".slt_product_img>div>div").removeClass("active");
        }
    })

    //제품 선택 시 제품 이미지 나오기
    $('.slt_product>p').on("click", function () {
        let gender_product = $(this).index();
        let man_img = $(".man>div").eq(gender_product);
        let woman_img = $(".woman>div").eq(gender_product);

        if ($(".gender_text>p:eq(0)").hasClass("active")) {
            $(".woman>div").removeClass("active");
            $(man_img).addClass("active").siblings().removeClass("active");


        }
        else if ($(".gender_text>p:eq(1)").hasClass("active")) {
            $(".man>div").removeClass("active");
            $(woman_img).addClass("active").siblings().removeClass("active");
        }

        if ($(".gender_text>p").hasClass("active")) {
            $(this).addClass("active").siblings().removeClass("active");
        }
        else {
            alert("성별을 선택해주세요.");
            $(man_img).removeClass("active");
        }



    })

})