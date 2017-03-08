var margin_value = 0;
var logo_max_height = 50;
var logo_min_height = 50;

$(window).scroll(function () {
    if ($(window).scrollTop() > margin_value){
        $(".navbar-fixed-top").addClass("navbar-pad-original");
        $("#b2b-logo").css({"max-height":logo_min_height+"px"});
    } else {
        $(".navbar-fixed-top").removeClass("navbar-pad-original");
        $("#b2b-logo").css({"max-height":logo_max_height+"px"});
    }
});

$(document).ready(function() {
    $("#top_menu > .dropdown").mouseover(function() {
        $(this).addClass("open");
    });
    $("#top_menu > .dropdown").mouseout(function() {
        $(this).removeClass("open");
    });
});
