//'use strict';
//if (typeof JY === "undefined")  { $.JY = new Object(); }

(function($) {        
 
    $(".board_menu .menu_list li").click(function(ev) {
        ev.preventDefault();
        $("*").removeClass("on");
        $("*").removeClass("on2");
        var sub = this;
        var $id = sub.id;
        var $target = ev.target;
        $($target).addClass("on");
        //== $($target, this).addClass("on");

        var menuCK = $(".snb ul li :eq("+$id+")");
        menuCK.addClass("on2");
    });
    
    $(".snb ul li").click(function(ev) {
        ev.preventDefault();
         $("*").removeClass("on2");
         $("*").removeClass("on");
        var sub2 = this;
        var $id2= sub2.id;
        var $target2 = ev.target;
        $($target2).addClass("on2");

        var menuCK2 = $(".board_menu .menu_list li :eq("+$id2+")");
        menuCK2.addClass("on");
    });
$(".board_menu .menu_list li :eq(0)").click();

})(jQuery);






