$(window).scroll(function () {
    if ($(window).scrollTop() > margin_value){
        $("#bl-menu").addClass("bl-navbar-fixed-top");
        $("#bl-menu").removeClass("bl-navbar");
    } else {
        $("#bl-menu").removeClass("bl-navbar-fixed-top");
        $("#bl-menu").addClass("bl-navbar");
    }
});