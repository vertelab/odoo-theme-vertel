$(window).scroll(function () {
    if ($(".navbar").offset().top > 120){
        $("#rl-menu").addClass("rl-navbar-fixed-top");
        $("#rl-menu").removeClass("rl-navbar");
        $("#top_menu").removeClass("nav-justified");
        $("#top_menu").addClass("navbar-nav").addClass("navbar-right");
        $(".navbar-header").removeClass("hidden");
        $(".logo").removeClass("hidden");
        $("#rl-menu-bar").removeClass("col-md-12");
        $("#rl-menu-bar").addClass("col-md-11").addClass("navbar-right");
    } else {
        $("#rl-menu").removeClass("rl-navbar-fixed-top");
        $("#rl-menu").addClass("rl-navbar");
        $("#top_menu").removeClass("navbar-nav").removeClass("navbar-right");
        $("#top_menu").addClass("nav-justified");
        $(".navbar-header").addClass("hidden");
        $(".logo").addClass("hidden");
        $("#rl-menu-bar").removeClass("col-md-11").removeClass("navbar-right");
        $("#rl-menu-bar").addClass("col-md-12");
    }
});
