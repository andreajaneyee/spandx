$(document).ready(function(){
    $("#nav-guide").interactive_bg();
    $(".react").interactive_bg({
         strength: 10,
         scale: 1.05,
         contain: false,
         wrapContent: true,
         animationSpeed: "250ms" 
    });
    
    $('.scroll-down-btn').click (function() {
      $('html, body').animate({scrollTop: $('#about').offset().top }, 'slow');
      return false;
    });
    
     $('.scroll-up-btn').click (function() {
      $('html, body').animate({scrollTop: $('#nav-guide').offset().top }, 'slow');
      return false;
    });
    
    $('#product-btn').click(function() {
            $('#nav-guide, #about').fadeOut(500);
            $('#product').fadeIn(700);
    });
    $('#process-btn').click(function() {
            $('#nav-guide, #about').fadeOut(500);
            $('#process').fadeIn(700);
    });
    $('#report-btn').click(function() {
            $('#nav-guide, #about').fadeOut(500);
            $('#report').fadeIn(700);
    });
    $('#output-btn').click(function() {
            $('#nav-guide, #about').fadeOut(500);
            $('#outputs').fadeIn(700);
    });
    
    $('#process-next').click(function() {
            $('#product').fadeOut(500);
            $('#process').fadeIn(500);
    });
    $('#report-next').click(function() {
            $('#process').fadeOut(500);
            $('#report').fadeIn(500);
    });
    $('#output-next').click(function() {
            $('#report').fadeOut(500);
            $('#outputs').fadeIn(500);
    });
});