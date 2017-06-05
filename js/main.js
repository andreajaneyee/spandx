$(document).ready(function(){
    $("#nav-guide").interactive_bg();
    $(".react").interactive_bg({
         strength: 5,
         scale: 1,
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
});

var showProduct = function(){
    $("#product").css("display", "flex");
    $("#nav-guide").css("display", "hidden");
    $("#nav-guide").css("visibility", "none");
    $("#process","#about").css("display", "hidden");
}
var showProcess = function(){
    $("#product").css("display", "hidden");
    $("#nav-guide").css("display", "hidden");
    $("#process").css("display", "flex");
}
var showReport = function(){
    $("#product").css("display", "hidden");
    $("#nav-guide").css("display", "hidden");
    $("#report").css("display", "flex");
}
var showOutputs = function(){
    $("#product").css("display", "hidden");
    $("#nav-guide").css("display", "hidden");
    $("#outputs").css("display", "flex");
}