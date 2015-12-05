$(window).scroll(function () {
    if ($(window).scrollTop() > margin_value){
        $("#ml-menu").addClass("ml-navbar-fixed-top");
        $("#ml-menu").removeClass("ml-navbar");
        $("#ml-logo").removeClass("logo_grown");
        $("#ml-logo").addClass("logo_shrink");
    } else {
        $("#ml-menu").removeClass("ml-navbar-fixed-top");
        $("#ml-menu").addClass("ml-navbar");
        $("#ml-logo").removeClass("logo_shrink");
        $("#ml-logo").addClass("logo_grown");
    }
});
