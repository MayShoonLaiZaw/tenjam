$(function() {
    $(".mobile-nav .nav").hide();
    $(".logo-icon i").click(function() {
        $(".mobile-nav .nav").slideToggle();
    })
    $("#m-nav").click(function() {
        $(".mobile-nav .nav").slideToggle();
    });
})