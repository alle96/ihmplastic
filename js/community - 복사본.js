'use strict';
//if (typeof JY === "undefined")  { $.JY = new Object(); }

(function($) {        
 
 var listA = $(".list_category > ul > li > a"),
 current = -1;
 
/* function init() {
  $listA.on("click",open);
 }
 */
 listA.on("click",function() {
    listA.removeClass("listOn");
    $(this).addClass("listOn");
 });

/*function open {
   
    if(current !== -1) {
        $listA.eq(current).removeClass("listOn");
    } else {
        $listA.addClass("listOn");
    }
     
}*/
listA.eq(current).addClass("listOn");
/*

current = -1;

function init() {
		$menuItems.on( 'click', open );
		$listItems.on( 'click', function( event ) { event.stopPropagation(); } );
	}

	function open( event ) {

		if( current !== -1 ) {
			$listItems.eq( current ).removeClass( 'cbp-hropen' );
		}

		var $item = $( event.currentTarget ).parent( 'li' ),
			idx = $item.index();

		if( current === idx ) {
			$item.removeClass( 'cbp-hropen' );
			current = -1;
		}
		else {
			$item.addClass( 'cbp-hropen' );
			current = idx;
			$body.off( 'click' ).on( 'click', close );
		}

		return false;

	}

	function close( event ) {
		$listItems.eq( current ).removeClass( 'cbp-hropen' );
		current = -1;
	}

	return { init : init };

})();


*/


$(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });

    

})(jQuery);







