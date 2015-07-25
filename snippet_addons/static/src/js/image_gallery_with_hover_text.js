$(document).ready(function(){
    $(".hover-image").mouseover(function(){
        $(this).children(".hover-text").removeClass("hidden");
    });
    $(".hover-image").mouseout(function(){
        $(".hover-text").addClass("hidden");
    });
});