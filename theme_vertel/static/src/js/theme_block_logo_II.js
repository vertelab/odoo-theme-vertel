$(window).scroll(function () {
    if ($(window).scrollTop() > margin_value){
        $("#bl2-menu").addClass("bl2-navbar-fixed-top");
        $("#bl2-menu").removeClass("bl2-navbar");
        $("#top_menu").removeClass("nav-justified");
        $("#top_menu").addClass("navbar-nav").addClass("navbar-right");
        $(".navbar-header").removeClass("hidden-lg").removeClass("hidden-md").removeClass("hidden-sm");
        $(".logo").removeClass("hidden-lg").removeClass("hidden-md").removeClass("hidden-sm");
        $("#bl2-menu-bar").removeClass("col-md-12");
        $("#bl2-menu-bar").addClass("col-md-11").addClass("navbar-right");
    } else {
        $("#bl2-menu").removeClass("bl2-navbar-fixed-top");
        $("#bl2-menu").addClass("bl2-navbar");
        $("#top_menu").removeClass("navbar-nav").removeClass("navbar-right");
        $("#top_menu").addClass("nav-justified");
        $(".navbar-header").addClass("hidden-lg").addClass("hidden-md").addClass("hidden-sm");
        $(".logo").addClass("hidden-lg").addClass("hidden-md").addClass("hidden-sm");
        $("#bl2-menu-bar").removeClass("col-md-11").removeClass("navbar-right");
        $("#bl2-menu-bar").addClass("col-md-12");
    }
});
