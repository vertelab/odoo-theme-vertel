odoo.define("website_theme.theme_block_logo", function (require) {
    "use strict"; // Start of use strict
    $("#top_menu").addClass("justify-content-around align-items-sm-center");
    $(".navbar").addClass("bl-navbar").attr("style","box-shadow: 0px 0px 10px #333 !important");
    $(".navbar-brand.logo").addClass("d-block d-md-none").removeAttr("style");
    $(".navbar-expand-lg").addClass("navbar-expand-md").removeClass("navbar-expand-lg");
    $(".o_header_standard").removeClass("o_header_standard");
    $("li.nav-item.dropdown").addClass("d-none");
    $("#wrapwrap").scroll(function () {
        //~ var t = parseInt(getComputedStyle(document.querySelector(":root")).getPropertyValue("--o-we-toolbar-height"))
        //~ if (!isNaN(t)) {
        //~ }
        var scrollTop = $("#wrapwrap").scrollTop()
        if (scrollTop > $("#block_logo_div").height()) {
            setTimeout(() => { $("#top>nav").css("top", getComputedStyle(document.querySelector(":root")).getPropertyValue("--o-we-toolbar-height")); }, 10);
            $("#top>nav").css({"transform": ""});
            $("#top_menu").addClass("justify-content-end").removeClass("justify-content-around");
            $("#top_menu_container").addClass("col-md-11")
            $(".navbar").addClass("bl-navbar-fixed-top").removeClass("bl-navbar").attr("style","box-shadow: 0px 0px 5px #FF4100 !important");
            $(".navbar-brand.logo").removeClass("d-md-none");
            
            //~ $("#top_menu_container").removeClass("col-md-12");
        } else {
            //~ $("#top").css("top",-1);
            $("#top>nav").css({"transform": ""});
            setTimeout(() => { $("#top>nav").css("top", 0); }, 10);
            $("#top_menu").addClass("justify-content-around").removeClass("justify-content-end");
            $("#top_menu_container").removeClass("col-md-11")
            $(".navbar").addClass("bl-navbar").removeClass("bl-navbar-fixed-top").attr("style","box-shadow: 0px 0px 10px #333 !important");
            $(".navbar-brand.logo").addClass("d-md-none");
            //~ $("#top_menu_container").addClass("col-md-12");
        }
    });
}); // End of use strict
