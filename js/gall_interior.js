'use strict';
/*
if (typeof JY === "undefined")  { $.JY = new Object(); }
*/




(function($) {      

var num = 0;

   $('.img_slider>ul>li:first-of-type').css('z-index','20');
   $('.btn_next').on('click',function(){
       num++;
       if( num > 7 ) {
           num = 0;
       };
       slideMove();
   });

   $('.btn_prev').on('click',function(){
       num--;
       if( num < 0 ){
           num = 7;
       };
       slideMove();
   });

   $('.img_thumbnail>ul>li').on('click', function(){
       num = $(this).index();
       slideMove();
   });

   function slideMove (){
       $('.img_slider>ul>li').not('.img_slider>ul>li:eq("+num+")').css('opacity','0');
       $('.img_slider>ul>li').eq(num).css('opacity','1');
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


})(jQuery);

/*})(jQuery);*/



