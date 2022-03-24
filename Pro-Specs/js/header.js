$(function () {
    //검색창 애니메이션
    $('.search_icon').on("click", function () {
        var schBox = $(".search_box")
        if (!$(schBox).hasClass("active")) {
            $(schBox).addClass("active");
        }
        else if ($(schBox).hasClass("active")) {
            $(schBox).removeClass("active");
        }
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

})