
var bw = $("body").width();

$(window).resize(function() {
    bw = $("body").width();
    console.log(bw);
});

/*헤더*/

//pc

$(".gnbt li").on("mouseover focusin",function(){
    if (bw >= 801) {
    var gn = $(this).attr("data-tab");
    $(".bg").stop().slideUp(0);
    $("."+gn).slideDown(300);
    $("header").addClass("gd");
    $("header").addClass("bs");
    }
});

$("header").on("mouseleave focusout",function(){
    $(".bg").stop().slideUp(300);
    $("header").removeClass("gd");
    $("header").removeClass("bs");
});


//mb




$(".ham").click(function(){
    $(".gnbt").animate({"right":0},300);
    $("header div:nth-child(2)").removeClass("wrap");
});

$(".gnbt i").click(function(){
    $(".gnbt").animate({"right":-100+"%"},300);
    $("header div:nth-child(2)").addClass("wrap");
});

$(".gnbt > li ").has("ul").children("a").click(function(){ 
    $(".gnbt ul").slideUp(300);
    $(this).next().stop().slideToggle(300);
    
    return false; 
});
 
































