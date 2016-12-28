'use strict';
if (typeof JY === "undefined")  { $.JY = new Object(); }

(function($) {       



var open = false;
var gnbA = $(".open_menu > a");
var sub = $(".gnb_menu");
//var index = 0;
   $.this = sub; 
   
   var index = 0;
            
        
  //var index = $.this.index();
 //console.log(index); 
  
        
   //     var quickOn = true;
    //    var quickT = $("#header").height();
        //var quickT = ($(window).height()/2)-($("#quick").height()/2.16); // 2 , 1.5 (수정전)
        //alert(quickT);
/*        $("#quick").stop().animate({top:quickT},function(){
            $("#quick").stop().animate({right:0},500)
            //$("#quick").css({top:quickT,right:0});
        })
        $(window).scroll(function() {
            $("#quick").stop().animate({top:quickT});
        });*/
        
        gnbA.on("mouseenter focus",function() {
          //  sub.hide();
/*          ev.preventDefault();*/
          $(".gnb_menu").is(':hidden');
      
        //    $(this).show();
            gnbA.removeClass("on");
            $(this).each(function() {
                
                if(!open) {
                    
                    $(this).addClass("on");
                //    $.this.slideDown('show');
                slideSubM();
                } else {
                    
                    $(".gnb_menu").is(':hidden');
                }
                /*$(this).addClass("on");
                $.this.slideDown('show');
                */
                
         //       $.this.index(eq).slideDown('show');
      //          console.log($.this.index(eq));
            });
            
        });
/*        return false;*/
        
        $(".gnb_menu").on("mouseleave focus",function() {
            sub.slideUp();
            gnbA.removeClass("on");
           
        });
        
        function slideSubM () {
            $(".gnb_menu").not('.gnb_menu:eq("+index+")').slideUp();
            $(".gnb_menu").eq(index).slideDown();
        };
     
  /*
      var num = 0;

    $('.btn_next').on('click',function(){
        num++;
        if( num > 3 ) {
        num = 0;
        };
        slideMove();
    });

    $('.btn_prev').on('click',function(){
        num--;
        if( num < 0 ){
        num = 3;
        };
        slideMove();
    }); 

    $('.img_thumbnail>ul>li').on('click', function(){
        num = $(this).index();
        slideMove();
    });

    function slideMove (){
        $('.img_slider>ul>li').not('.img_slider>ul>li:eq("+num+")').fadeOut(300);
        $('.img_slider>ul>li').eq(num).fadeIn(300);
    };
  
  */   
     
     /*
     
     $(this).find("a").addClass("on");
		play(); // 스탑플레이 추가 2
		return false;
        
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
         
         
     /*   $(".quick_m").click(function() {
            if(!quickOn) {
                quickOn = true;
                $("#quick").stop().animate({right:0});
            }else { 
                quickOn = false;
                $("#quick").stop().animate({right:-150});
            }
            return false;
        });*/
        
        
        
        
/*        var gnbM = $('open_menu');
         $.this = gnbM;*/
/*    var gnbM = $('open_menu');  
    var subM = $('gnb_menu');
 $.this = $('.open_menu');
//$('.open_menu').on('click', function(ev)
   $.this.on('click', function(ev){   
       //$('.open_menu') = this;
       ev.preventDefault();
       $('.gnb_menu').is(':hidden');
  //     $('.gnb_menu > p > img').css({visibility:'hidden'});
       if($('.gnb_menu').is(':hidden')){
             var subM = $('.gnb_menu');
            $.this=subM;
            $.this.slideDown('show');
    //        $('.gnb_menu > p > img').slideDown('show').css({visibility:'visible'});
       }else {
          $('.gnb_menu').slideUp();

       }
    });*/
    
    ////////////////////////
/*    var gnbA = $(".open_menu > a");
     var sub = $(".gnb_menu");
        
        gnbA.on("mouseenter focus",function() {
  //          sub.hide();
 // sub.removeClass("on");
//            $(this).next().show();
 //           gnbA.removeClass("on");
   //         gnbA.hide();
            
            $.this = sub;
            console.log(this);
            $(".gnb_menu").each(function() {
                $(this).slideDown('show');
      //            sub.addClass("on");
            });
            
        });
        $(".gnb_menu").on("mouseleave focus",function(ev) {
            console.dir(ev);
        
        $(".gnb_menu").slideUp();
   //         sub.removeClass("on");
  //          sub.hide();
  //          gnbA.removeClass("on");
  //sub.show();

        });*/ /////////////////////////////
        
    /*    $(".quick_m").click(function() {
            if(!quickOn) {
                quickOn = true;
                $("#quick").stop().animate({right:0});
            }else { 
                quickOn = false;
                $("#quick").stop().animate({right:-150});
            }
            return false;
        });*/
        
        
        
    
    
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



