(function ($) {
    var mainApp = {
        main_fun: function () {
            //ADD REMOVE CLASS ON SCROLL
            $(window).scroll(function () {
                if ($(".navbar").offset().top > margin_value){
                    $("#bl-menu").addClass("bl-navbar-fixed-top");
                    $("#bl-menu").removeClass("bl-navbar");
                } else {
                    $("#bl-menu").removeClass("bl-navbar-fixed-top");
                    $("#bl-menu").addClass("bl-navbar");
                }
            });
        },
        initialization: function () {
            mainApp.main_fun();
        }
    }
    // Initializing ///
    $(document).ready(function () {
        mainApp.main_fun();
    });
}(jQuery));
