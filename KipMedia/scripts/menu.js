$(document).ready(function() {
    // Script for the desktop menu
    $('.menu').click(function() {
        
        if ($('.dropdown').css("display") == "flex") {
            $(".dropdown").slideUp(200, "swing");
            $(".arrow").css("transform", "rotate(0deg)");
        }
        else {
            $(".dropdown").slideDown(200, "swing");
            $(".dropdown").css("display", "flex");
            $(".arrow").css("transform", "rotate(180deg)");
        }
    })

    // Script for the mobile menu
    $(".burger").click(function() {
        $(".sidenav").toggleClass("on")

        if ($(".sidenav").hasClass("on")) {
            $(".sidenav").animate({width: "100%"}, 200)
        } else {
            $(".sidenav").animate({width: "0%"}, 200)
        }
    })

    // Controls for the mobile submenu
    $(".menuM").click(function() {
        if ($('.dropdownM').css("display") == "block") {
            $(".dropdownM").slideUp(200, "swing");
        }
        else {
            $(".dropdownM").slideDown(200, "swing");
            $(".dropdownM").css("display", "block");
        }
    })
});