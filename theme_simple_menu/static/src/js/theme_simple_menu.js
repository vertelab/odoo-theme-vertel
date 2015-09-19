$(window).scroll(function () {
    if ($(window).scrollTop() > margin_value){
        $("#sm-menu").addClass("sm-navbar-fixed-top");
        $("#sm-menu").removeClass("sm-navbar");
        $(".navbar-header").removeClass("hidden-lg").removeClass("hidden-md").removeClass("hidden-sm");
        $("#sm-menu-bar").removeClass("col-md-12");
        $("#sm-menu-bar").addClass("col-md-11").addClass("navbar-right");
    } else {
        $("#sm-menu").removeClass("sm-navbar-fixed-top");
        $("#sm-menu").addClass("sm-navbar");
        $(".navbar-header").addClass("hidden-lg").addClass("hidden-md").addClass("hidden-sm");
        $("#sm-menu-bar").removeClass("col-md-11").removeClass("navbar-right");
        $("#sm-menu-bar").addClass("col-md-12");
    }
});