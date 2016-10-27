/**
 * Created by hxsd on 2016/10/6.
 */
$(function(){
    var n=1;
   setInterval(function(){
       $(".phone").find("ul").css("left",-270*n+"px");
       n++;
       if(n==3){
           n=0;
       }
   },1500);



    $("#wrap").fullpage({
        keyboardScrolling:true,
        resize:true,
        css3:true,
        anchors: ['page1', 'page2', 'page3', 'page4'],
        menu: '#navbar',
        afterLoad:function(link,index){
            console.log(link)
            $("#navbar").find("li").eq(index-1).siblings().removeClass("liactive").end().addClass("liactive");
            switch (index){
                case 2:
                    $(".phone").eq(0).addClass("one");
                    $(".phone").eq(0).css("opacity",1);
                    $(".text").eq(0).addClass("two");
                    $(".text").eq(0).css("opacity",1);
                    break;
                case 3:
                    $(".phone").eq(1).addClass("three");
                    $(".phone").eq(1).css("opacity",1);
                    $(".text").eq(1).addClass("four");
                    $(".text").eq(1).css("opacity",1);
                    break;
                case 4:
                    $(".what").eq(0).addClass("leftmove");
                    $(".what").eq(0).css("opacity",1);
                    $(".right").eq(0).addClass("rightmove");
                    $(".right").eq(0).css("opacity",1);
                    break;

            }
        },
        onLeave:function(index,nextIndex,direction){
            $(".navbar").find("li").eq(index-1).removeClass("liactive");
            switch (index){
                case 2:
                    $(".phone").eq(0).removeClass("one");
                    $(".text").eq(0).removeClass("two");
                    $(".phone").eq(0).css("opacity",0);
                    $(".text").eq(0).css("opacity",0);
                    break;
                case 3:
                    $(".phone").eq(1).removeClass("three");
                    $(".phone").eq(1).css("opacity",0);
                    $(".text").eq(1).removeClass("four");
                    $(".text").eq(1).css("opacity",0);
                    break;
                case 4:
                    $(".what").eq(0).removeClass("leftmove");
                    $(".what").eq(0).css("opacity",0);
                    $(".right").eq(0).removeClass("rightmove");
                    $(".right").eq(0).css("opacity",0);
                    break;
            }
        }
    });
})