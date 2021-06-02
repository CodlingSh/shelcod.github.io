$(document).ready(function() {
    //$('.menu').click(function() {
    //    $('.dropdown').toggleClass("active")
    //})

    $('.menu').click(function() {
        
        if ($('.dropdown').css("display") == "block") {
            $(".dropdown").slideUp(200, "swing");
            $(".arrow").css("transform", "rotate(0deg)");
        }
        else {
            $(".dropdown").slideDown(200, "swing");
            $(".dropdown").css("display", "block");
            $(".arrow").css("transform", "rotate(180deg)");
        }
    })
})