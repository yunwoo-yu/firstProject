$(function(){
    //m_menu 클릭이벤트
    $(".hamBtn>a").on("click",function(){
        $(".hamBtn>a").toggleClass("Imgchg");
        if($(".hamBtn>a").hasClass("Imgchg")){
            $(".mobile_nav").css("right","0");
        }
        else {
            $(".mobile_nav").css("right","-100%");
        }
    })

//m_sub 클릭 이벤트
    $("#m_nav>li>a").on("click",function(){
        $(this).next(".m_sub").slideToggle(300)
        .parent().siblings().children(".m_sub").slideUp();    
    })

// //play,pause 클래스 hide 추가
// $('.vid_btn .play').addClass('hide');
// $('.vid_btn .pause').click(function(){
//     $(this).addClass('hide');
//     $('.vid_btn .play').removeClass('hide');
// });
// $('.vid_btn .play').click(function(){
//     $(this).addClass('hide');
//     $('.vid_btn .pause').removeClass('hide');
// });
// //muteOn,muteOff 클래스 hide 추가
// $('.mute-onoff .muteOn').addClass('hide');
// $('.mute-onoff .muteOff').click(function(){
//     $(this).addClass('hide');
//     $('.mute-onoff .muteOn').removeClass('hide');
// });
// $('.mute-onoff .muteOn').click(function(){
//     $(this).addClass('hide');
//     $('.mute-onoff .muteOff').removeClass('hide');
// });

// 스크롤 이벤트 header
let scrollY = $(this).scrollTop();

// $("html,body").on("resize",function(){
//     let scrollY = $(this).scrollTop();
// })
$(window).on("scroll",function(){
    let scrollY = $(this).scrollTop();
    if(scrollY == 0){
        $("header").css("background","rgba(245, 249, 255, 0)")
    }
    else{
        $("header").css("background","rgba(245, 249, 255, 0.6)")
    }
})




})

// bx슬라이더 외부전경 view
$(function(){
    $(".viewSlider").bxSlider({
        auto:true
    });
})

// Activity 슬라이더
$(function(){
    let curIndex = 0;

    // let liWidth = $(".imgList>li:eq(0)").outerWidth();
    
    let Count = $(".imgList>li").length;

    let Pager = $(".pager>li");

    let Copyfirst = $(".imgList>li:first").clone();

    $(".imgList").append(Copyfirst);

    // $(".imgList").width((Count+1)*liWidth)

    function slideBanner(){
        if(curIndex == Count){
        $(Pager).eq(0).addClass("active").siblings().removeClass("active");
        }
        else{
        $(Pager).eq(curIndex).addClass("active").siblings().removeClass("active");
        }
        $(".imgList").stop().animate({
            "margin-left":-curIndex * 100+"%"
        },500)
    }
    //페이징 클릭 설정
    $(".pager>li").on("click",function(){
        curIndex = $(this).index();
        slideBanner();
    })
    //자동 슬라이드
    var timer;
    
    function autoBanner(){
        if(curIndex == Count ){
            curIndex = 0;
            $(".imgList").css("margin-left",0);
        }
        curIndex++;
        slideBanner();
    }
    timer = setInterval(autoBanner,4000);
    function stopBanner(){
        clearInterval(timer)
    }
    $(".imgList").on("mouseenter",function(){
        stopBanner();
    })
    $(".imgList").on("mouseleave",function(){
        timer = setInterval(autoBanner,4000);
    })
    
})

// room 페이드 
$(function(){
    let Leftpager = $(".inner_box>.room_Box:eq(0)>.img_Box>.room_pager>li");
    let Rightpager = $(".inner_box>.room_Box:eq(1)>.img_Box>.room_pager>li")
    let ImgBox = $(".fade_Img").index();
    let textBox = $(".text_Box").index();
    let SelectIndex = 0;

    $(Leftpager).on("click",function(){
        let SelectIndex = $(this).index();
        console.log(SelectIndex)
        //페이저 색상 추가
        $(this).addClass("act").siblings().removeClass("act");
        //이미지 페이드 변경
        $(".fade_Img:eq(0)>li").eq(SelectIndex).fadeIn(1000).siblings().fadeOut(1000);
        //텍스트 박스 페이드 변경
        $(".text_Box:eq(0)>.fade_text").eq(SelectIndex).fadeIn(1000).siblings().fadeOut(1000);
    })
    $(Rightpager).on("click",function(){
        let SelectIndex = $(this).index();
        console.log(SelectIndex)
        //페이저 색상 추가
        $(this).addClass("act").siblings().removeClass("act");
        //이미지 페이드 변경
        $(".fade_Img:eq(1)>li").eq(SelectIndex).fadeIn(1000).siblings().fadeOut(1000);
        //텍스트 박스 페이드 변경
        $(".text_Box:eq(1)>.fade_text").eq(SelectIndex).fadeIn(1000).siblings().fadeOut(1000);
    })



})

