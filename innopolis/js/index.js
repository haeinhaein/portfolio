

var bw = $("body").width();

$(window).resize(function() {
    bw = $("body").width();
    console.log(bw);
});



$(".pop p").click(function(){
    $(".pop").slideUp(300);
    $(".top button").children("i").attr("class","xi-angle-down-thin");
    $(".top button span").text("팝업열기");
    });


var top_btn = 1;

$(".top button").click(function(){
    if (top_btn==1) {
        $(".pop").stop().slideUp(300);
        $(this).children("i").attr("class","xi-angle-down-thin");
        $(this).children("span").text("팝업열기");
        top_btn = 0;
    } else if (top_btn==0) {
        $(".pop").stop().slideDown(300);
        $(this).children("i").attr("class","xi-angle-up-thin");
        $(this).children("span").text("팝업닫기");
        top_btn = 1;
    }

});


$(window).scroll(function(){
    var wt = $(this).scrollTop();
    if( wt > 45 ){ 
        $(".pop").addClass("invi");
        $(".top").addClass("invi");
        $("header").addClass("fix");
    } else { 
        $(".pop").removeClass("invi");
        $(".top").removeClass("invi");
        $("header").removeClass("fix");
    }

});





$(".gnbt li a").on("mouseover focusin", function(){
    var gi = $(this).attr("data-tab");
    $(".gnb-open").removeClass("on");
    $(".gnb-open."+gi).addClass("on");
});

$("header").on("mouseleave focusout", function(){
    $(".gnb-open").removeClass("on");
});


$("header .site-map-btn").click(function(){
    $("header .site-map").removeClass("invi").addClass("vi");
});


$("header .site-map .close").click(function(){
    $("header .site-map").removeClass("vi").addClass("invi");
});






$("header .parent > li > a").click(function(){
    if (bw < 801) {
        $("header .parent .sub").slideUp(300)
        $(this).next().stop().slideToggle(300);
    }
});




$('#section0 .next_scroll').on('click', function() {  
    $('html, body').animate({scrollTop: $("#section1").offset().top - 130}, 1000);
    return false;
});

$('#section1 .next_scroll').on('click', function() {  
    $('html, body').animate({scrollTop: $("#section2").offset().top - 45}, 1000);
    return false;
});













































