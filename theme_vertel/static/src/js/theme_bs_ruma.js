(function ($) {
    "use strict";
    var mainApp = {
        main_fun: function () {
            //ADD REMOVE PADDING CLASS ON SCROLL
            $(window).scroll(function () {
                if ($(".navbar").offset().top >50) {
                    $(".navbar-fixed-top").addClass("navbar-pad-original");
                } else {
                    $(".navbar-fixed-top").removeClass("navbar-pad-original");
                }
            });
            //SLIDESHOW SCRIPT
            $('.carousel').carousel({
                interval: 1000 //TIME IN MILLI SECONDS
            })
            // PRETTYPHOTO FUNCTION

            $("a.preview").prettyPhoto({
                social_tools: false
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



