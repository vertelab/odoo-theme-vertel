$(window).scroll(function () {
    if ($(window).scrollTop() > margin_value){
        $("#menu-center").addClass("hidden");
        $("#ml-menu").addClass("ml-navbar-fixed-top");
        $("#ml-menu").removeClass("ml-navbar");
        $("#menu-leftside").removeClass("col-md-5");
        $("#menu-rightside").removeClass("col-md-5");
        $("#menu-leftside").addClass("col-md-6");
        $("#menu-rightside").addClass("col-md-6");
    } else {
        $("#menu-center").removeClass("hidden");
        $("#ml-menu").removeClass("ml-navbar-fixed-top");
        $("#ml-menu").addClass("ml-navbar");
        $("#menu-leftside").removeClass("col-md-6");
        $("#menu-rightside").removeClass("col-md-6");
        $("#menu-leftside").addClass("col-md-5");
        $("#menu-rightside").addClass("col-md-5");
    }
});