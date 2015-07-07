$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $('#logo-header').addClass('affix');
        $(".nav-top clearfix").addClass("logo");
    } else {
        $('#logo-header').removeClass('affix');
        $(".nav-top clearfix").removeClass("logo");
        
    }
    
});
