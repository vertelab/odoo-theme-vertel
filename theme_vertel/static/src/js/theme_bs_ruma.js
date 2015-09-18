$(window).scroll(function () {
    if ($(window).scrollTop() > margin_value){
        $(".navbar-fixed-top").addClass("navbar-pad-original");
    } else {
        $(".navbar-fixed-top").removeClass("navbar-pad-original");
    }
});