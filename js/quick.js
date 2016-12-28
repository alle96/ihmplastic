'use strict';

(function($) {       



        var popA = $(".pop");
        //var popOn = $(".popOn");
        var goConsult = $(".btn_callCouns");
        
         $(window).scroll(function() {	   
            if ($(this).scrollTop() > 127 ) {
                $("#quick_menu").css({top:0});
              } else {
                $("#quick_menu").css({top:127});
              }
              
            });
        $(document).ready(function (){
            $("#click").click(function (){
                $('html, body').animate({
                    scrollTop: $("html, body").offset().top
                }, 500);
              
            });
        });
        

        
        
   //     popA.click(function() {
        //$(".close").css({top:41});   //위치 리셋
        //$("#container > .top_btn").hide();
        //$("#container > #gnb_c").hide();
        /*$(this).siblings().slideDown(700,function(){
            $(this).animate({ scrollTop:0}).css({"overflow-y":"scroll"});
            $("body").css({overflow:"hidden"});
            $(".close").fadeIn(1500);     
        });
        return false;*/
   //     $(".pop_layer").hide();
        //$(this).siblings().slideDown(700);
   //     $(this).siblings().fadeIn();
   //     return false;
  //  });
    
    
   /* gnbA.on("mouseenter focus",function() {
            sub.hide();
            $(this).next().show();
            gnbA.removeClass("on");
            $(this).each(function() {
                $(this).addClass("on");
            });
        });
    
    
    */
    
        popA.on("click",function() {
          //  var this = popA;
            $(".pop_layer").hide();
            popA.removeClass("popOn");
             $(this).siblings().fadeIn();
             $(this).each(function(){
                $(this).addClass("popOn");
             });
             
            return false;
        });
   /*     
        popA.on("click",function() {
            $(".pop_layer").hide();
            popA.removeClass("popOn");
        });
        */
        
        goConsult.click(function() {
            $(".pop_layer").hide();
            popA.removeClass("popOn");
        });
        
        
        
        $(".pop_close").click(function() {
        //var this = $(".close");
      //  $(this).fadeOut(200);             
        $(".pop_layer").fadeOut(700);//,function() {
           // $("body").css({overflow:"scroll"}); 
          //  $("#container > #gnb_c").show();
          //  $("#container > .top_btn").show();
       // });       
       popA.removeClass("popOn");
        return false;
    });

    
})(jQuery);




