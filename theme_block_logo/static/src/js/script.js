odoo.define('website_theme.theme_block_logo', function (require) {
    "use strict"; // Start of use strict
    $("#wrapwrap").scroll(function () {
        if ($("#wrapwrap").scrollTop() > 200) {
            $("#top_menu").addClass("bl2-navbar-fixed-top");
            $("#top_menu").removeClass("bl2-navbar");
            $(".logo").removeClass("hidden-lg").removeClass("hidden-md").removeClass("hidden-sm");
            $("#top_menu_container").removeClass("col-md-12");
            $("#top_menu_container").addClass("col-md-11").addClass("navbar-right");
        } else {
            $("#top_menu").removeClass("bl2-navbar-fixed-top");
            $("#top_menu").addClass("bl2-navbar");
            $(".logo").addClass("hidden-lg").addClass("hidden-md").addClass("hidden-sm");
            $("#top_menu_container").removeClass("col-md-11").removeClass("navbar-right");
            $("#top_menu_container").addClass("col-md-12");
        }
    });
}); // End of use strict
