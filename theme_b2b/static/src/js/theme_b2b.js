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
    $("#fonts").find("h1").each(function() {
        $(this).html("H1 (" + $(this).css("font-family") + ")");
    });
    $("#fonts").find("h2").each(function() {
        $(this).html("H2 (" + $(this).css("font-family") + ")");
    });
    $("#fonts").find("h3").each(function() {
        $(this).html("H3 (" + $(this).css("font-family") + ")");
    });
    $("#fonts").find("h4").each(function() {
        $(this).html("H4 (" + $(this).css("font-family") + ")");
    });
    $("#fonts").find("h5").each(function() {
        $(this).html("H5 (" + $(this).css("font-family") + ")");
    });
    $("#fonts").find("h6").each(function() {
        $(this).html("H6 (" + $(this).css("font-family") + ")");
    });
    $("#fonts").find("p").each(function() {
        if ($(this).html() !== "")
            $(this).append(" (" + $(this).css("font-family") + ")");
    });
});
