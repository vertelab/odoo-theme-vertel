$(window).scroll(function () {
    if ($(window).scrollTop() > 400){
        $(".round-icon").fadeIn("slow");
    } else {
        $(".round-icon").fadeOut("fast");
    }
});


