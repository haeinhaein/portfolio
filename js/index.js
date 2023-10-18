var n = 0;
var ln = $("#pf .slide li").length; 

$("#pf .slide").width(100 * ln+"%");
$("#pf .slide li").width(100 / ln+"%");


$("#pf .next").click(function(){
    n++;
    if (n >= ln) {
        n = 0;
    };
    $("#pf .slide").stop().animate({"left":-100*n+"%"},300);
    $("#pf .page li:nth-child("+(n+1)+")").addClass("selected").siblings().removeClass("selected");
});

$("#pf .prev").click(function(){
    n--;
    if (n < 0) {
        n = ln-1;
    };
    $("#pf .slide").stop().animate({"left":-100*n+"%"},300);
    $("#pf .page li:nth-child("+(n+1)+")").addClass("selected").siblings().removeClass("selected");
});






for (var i = 1; i <= ln; i++) {
    if (i == 1) {
        $(".page").append("<li class='selected'>"+i+"</li>");    
    } else {
        $(".page").append("<li>"+i+"</li>");
    }
};