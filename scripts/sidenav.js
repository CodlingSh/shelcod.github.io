// jQuery code to slide down and slide up the mobile navigation menu.
// The name "sideNav" doesn't make much sense anymore, but I didn't want to go and replace all the instances of the class name.
$(document).ready(function() {
    
    $(".menuBtn").click(function() {
        if ($("#mySideNav").css("display") == "flex") {
            $(".sideNav").slideUp(200, "swing");
        }
        else {
            
            $(".sideNav").slideDown(200, "swing");
            $(".sideNav").css("display", "flex");
        }
    });
});
