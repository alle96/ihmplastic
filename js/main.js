'use strict';
if (typeof JY === "undefined")  { $.JY = new Object(); }

(function($) {       


        var gnbA = $(".gnb > li > a");
        var sub = $(".gnb_m");
         //  $.this = sub; 
           
        gnbA.on("mouseenter focus",function() {
            sub.hide();
            $(this).next().show();
            gnbA.removeClass("on");
            $(this).each(function() {
                $(this).addClass("on");
            });
        });
        $(".gnb").on("mouseleave",function() {
            sub.hide();
            gnbA.removeClass("on");
        });
        

        
        
        
        
        
        

    
})(jQuery);











/*

$(function() {        
        
        var gnbA = $(".gnb > li > a");
        var sub = $(".gnb > li > ul");
        
        gnbA.on("mouseenter focus",function() {
            sub.hide();
            $(this).next().show();
            gnbA.removeClass("on");
            $(this).each(function() {
                $(this).addClass("on");
            });
        });
        $(".gnb").on("mouseleave focus",function() {
            sub.hide();
            gnbA.removeClass("on");
        });
        
        $(".quick_m").click(function() {
            if(!quickOn) {
                quickOn = true;
                $("#quick").stop().animate({right:0});
            }else { 
                quickOn = false;
                $("#quick").stop().animate({right:-150});
            }
            return false;
        });
});
*/







/*
       $('.open_menu').on('click', function(ev) {
       //$('.open_menu') = this;
       ev.preventDefault();
       $('.gnb_slide').is(':hidden');
       if($('.gnb_slide').is(':hidden')){
           $('.gnb_slide').slideDown('show');
       }else {
           $('.gnb_slide').slideUp();
       }
    });

*/

/*

$(function() {        
        
        var gnbA = $(".gnb > li > a");
        var sub = $(".gnb > li > ul");
        
        var boxA = $("#content .sect_box > div > a");
        var boxH = $(".box_hover").height() * -1;
            
        
        function memo(target,imgN1,imgN2,upDown) {
            
            var targetImg = $(target).find("img");
            targetImg.attr("src",targetImg.attr("src").replace(imgN1,imgN2));
            $(target).find(".box_hover").stop().animate({top:upDown},1000,"easeOutCirc");
            
        }
        
        boxA.hover(function() {
            memo(this,"out","over",boxH);
            console.log(boxH);
            
        }, function() {
            memo(this,"over","out",0);
        });
        
        
        var quickOn = true;
        var quickT = $("#header").height();
        //var quickT = ($(window).height()/2)-($("#quick").height()/2.16); // 2 , 1.5 (수정전)
        //alert(quickT);
        $("#quick").stop().animate({top:quickT},function(){
            $("#quick").stop().animate({right:0},500)
            //$("#quick").css({top:quickT,right:0});
        })
        $(window).scroll(function() {
            $("#quick").stop().animate({top:quickT});
        });
        
        gnbA.on("mouseenter focus",function() {
            sub.hide();
            $(this).next().show();
            gnbA.removeClass("on");
            $(this).each(function() {
                $(this).addClass("on");
            });
        });
        $(".gnb").on("mouseleave focus",function() {
            sub.hide();
            gnbA.removeClass("on");
        });
        
        $(".quick_m").click(function() {
            if(!quickOn) {
                quickOn = true;
                $("#quick").stop().animate({right:0});
            }else { 
                quickOn = false;
                $("#quick").stop().animate({right:-150});
            }
            return false;
        });
        //$("#quick").stop().animate({top:quickT, right:0});




});
*/





//})(jQuery);



