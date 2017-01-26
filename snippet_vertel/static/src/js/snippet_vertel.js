$(window).scroll(function () {
    if ($(window).scrollTop() > 400){
        $("top-side-nav").fadeIn("slow");
    } else {
        $("top-side-nav").fadeOut("fast");
    }
});
