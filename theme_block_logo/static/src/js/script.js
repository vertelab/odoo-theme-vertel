odoo.define('website_theme.theme_block_logo', function (require) {
    "use strict"; // Start of use strict
    $("li.nav-item.dropdown").addClass('d-none');
    $("#wrapwrap").scroll(function () {
        var t = parseInt(getComputedStyle(document.querySelector(':root')).getPropertyValue('--o-we-toolbar-height'))
        if (isNaN(t)) {
            t = 0
        }
        var scrollTop = $("#wrapwrap").scrollTop()
        if (scrollTop > $("#block_logo_div").height()) {
            $("#top>nav").css("transform", "");
            $("#top>nav").css("top", t);
            $(".navbar").addClass("bl-navbar-fixed-top")
            $(".navbar").attr('style','box-shadow: 0px 0px 5px #FF4100 !important');
            $(".navbar").removeClass("bl-navbar");
            $(".logo").removeClass("d-none");
            //~ $("#top_menu_container").removeClass("col-md-12");
            $("#top_menu_container").addClass("col-md-11")
            $("#top_menu").addClass("justify-content-end");
            $("#top_menu").removeClass("justify-content-around");
        } else {
            //~ $("#top").css("top",-1);
            $("#top>nav").css("transform", "");
            $(".navbar").addClass("bl-navbar");
            $(".navbar").attr('style','box-shadow: 0px 0px 10px #333 !important');
            $(".navbar").removeClass("bl-navbar-fixed-top")
            $(".logo").addClass("d-none");
            $("#top_menu_container").removeClass("col-md-11")
            $("#top_menu").addClass("justify-content-around");
            $("#top_menu").removeClass("justify-content-end");
            //~ $("#top_menu_container").addClass("col-md-12");
        }
    });
}); // End of use strict
