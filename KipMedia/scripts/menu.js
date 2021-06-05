$(document).ready(function() {
 // Script for the desktop menu
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

// Script for the mobile menu
    $('.burger').click(function() {
        console.log($('.sidenav').css("width"))
        if ($('.sidenav').css("width") == "100%") {
            $('.sidenav').animate({width: "0%"})

        }
        else if ($('.sidenav').css("width") == "0%") {
            $('.sidenav').animate({width: "100%"})
        }
    })
})