$(document).ready(function() {

});

$(window).scroll(function() {
    if ($(window).width() >= 768) {
        if ($(window).scrollTop() >= 100) {
            $("div.collapse.navbar-collapse.navbar-top-collapse.hidden-xs").css({"position": "fixed", "width": "100%", "top": "0px"});
        }
        else {
            $("div.collapse.navbar-collapse.navbar-top-collapse.hidden-xs").css({"position": "unset", "top": "unset"});
        }
    }
});
deher