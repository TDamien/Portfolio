$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("header").removeClass("large").addClass("small");
    } else{
        $("header").removeClass("small").addClass("large");
    }
});

$(document).on("scroll",function(){
    if($(document).scrollTop()>15){
        $("span").removeClass("paraText1").addClass("paraText2");
    } else{
        $("span").removeClass("paraText2").addClass("paraText1");
    }
});