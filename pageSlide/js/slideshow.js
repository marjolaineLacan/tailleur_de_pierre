
$(document).ready(function(){

    $("#image ul>li").hover(function(){ 
        $(this).stop().animate({
            "width": "400px"}, 1000);
    },function(){ 
        $(this).stop().animate({
            "width": "200px"}, 1000);
    });


}); // fin ready

