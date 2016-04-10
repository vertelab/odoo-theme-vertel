$(window).scroll(function () {
    if ($(window).scrollTop() > margin_value){
        $(".navbar-fixed-top").addClass("navbar-pad-original");
        $("#chameleon-logo").css({"max-height":logo_min_height+"px"});
    } else {
        $(".navbar-fixed-top").removeClass("navbar-pad-original");
        $("#chameleon-logo").css({"max-height":logo_max_height+"px"});
    }
});
