$(function(){
    var back1 = $(".load1")
    //스크롤 막아두기
    $("#Wrap").css('overflow','hidden');

    $(".loading>a").on("click",function(){
        
        $(".full").animate({
            "top":"-100%",
        },1000)

        setTimeout(function(){
            $(back1).animate({
                "left":"-100%",
            },1000)
        },1000)

        setTimeout(() => {
            $("#Wrap").css('overflow','auto');
        }, 2000);
        
    })
})