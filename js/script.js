$(function(){
    "use strict";
    
    // Product information when Click the tap to read its message
    $(".information ul li").click(function(){
        $("." + $(".information ul li.selected").data("value")).hide();
        $(this).addClass("selected").siblings().removeClass("selected");
        $("." + $(this).data("value")).fadeIn(1000);
    });
    
    $(".nav-bar i").click(function(){
        $(".nav-bar ul").slideToggle(500);
    });

});