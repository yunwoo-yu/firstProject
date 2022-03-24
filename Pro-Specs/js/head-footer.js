$(function () {

    $.ajax({
        url: "header.html",
        dataType: "html",
        success: function (data) {
            head = $("#header").html(data).find(".headerWrap");
            $("#header").html(head);
        }
    })

    $.ajax({
        url: "footer.html",
        dataType: "html",
        success: function (data) {
            foot = $("#footer").html(data).find(".footerWrap");
            $("#footer").html(foot);
        }
    })
})