'use strict';
//if (typeof JY === "undefined")  { $.JY = new Object(); }

(function($) {        
 
 var listA = $(".list_category > ul > li > a");
 //var addBefore = $(".befoPhoto_table");
 //var addAfter = $(".aftPhoto_table");
 var idVal1 = 1;
 var idVal2 = 1;
 
$.file = function(){
$(":file").filestyle({buttonText: "사진 찾기"});
//$(":file").filestyle({placeholder: "등록된 사진이 없습니다."});
 };
  /*
   data-buttonText="사진 찾기"
 data-buttonText="사진 찾기"
  */
 listA.on("click",function() {
    listA.removeClass("listOn");
    $(this).addClass("listOn");
 });

$(".list_category > ul > li :eq(0)").click();

$(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });

    
/*
    $(".before_btn").on("click", function(ev) {
        .each(function(idVal) {
 //       addBefore_obj = $(".befoPhoto_table:last").clone(true);
            addBefore.append("<ul><li>1</li><li>2</li></ul>");
        });
    });
*/

/*$(".before_btn").click(function(ev) {

$.this = $(".before_btn"); 
    $.this.each(function(index) {
    
        if(idVal1 < 3 ) {
        idVal1++;
       
        addBefore.after("<table class='befoPhoto_table"+parseInt(idVal1)+"'><tbody><tr><td>수술 전 사진 등록</td><td><input type='file'class='filestyle' data-buttonText='사진 찾기'></td></tr><tr><td class='string_push'>수술 전 내용</td><td><textarea name='before_text' id='before_text' cols='96' rows='10'></textarea></td></tr><tr><td><p class='blind'>두 번째 수술 전 사진 등록</p></td><td><p class='before_btn'>+ 사진 추가하기</p></td></tr></tbody></table> ");
        $.file();
    } else {
        alert("사진은 3개까지 추가할 수 있습니다.");
    }
    });  
});*/


//$(".before_btn").each(function(index) {

//$.this = $(".before_btn"); 
    $(".before_btn").on("click", function() {
   // ev.preventDefault();
        if(idVal1 < 3 ) {
        idVal1++;
   var addBefore = $(".befoPhoto_table:last").clone(true);  
   addBefore.find("input[type='file'], input[type='text'], textarea").val("");
        /*addBefore.after("<table class='befoPhoto_table"+parseInt(idVal1)+"'><tbody><tr><td>수술 전 사진 등록</td><td><input type='file'class='filestyle' data-buttonText='사진 찾기'></td></tr><tr><td class='string_push'>수술 전 내용</td><td><textarea name='before_text' id='before_text' cols='96' rows='10'></textarea></td></tr><tr><td><p class='blind'>두 번째 수술 전 사진 등록</p></td><td><p class='before_btn'>+ 사진 추가하기</p></td></tr></tbody></table> ");*/
        $(".befoPhoto_table:last").after(addBefore);
        $.file();
   //     $(".before_btn").click();
    } else {
        alert("사진은 3개까지 추가할 수 있습니다.");
    }
    });  
//});




$(".after_btn").on("click", function(ev) {
//    this = $(".after_btn");
 //   $(this).each(function(){
    if(idVal2 < 3 ) {
        idVal2++;
        var addAfter = $(".aftPhoto_table:last").clone(true);
        addAfter.find(".after_month").remove();
        addAfter.find("input[type='file'], input[type='text'], textarea").val("");
       /* addAfter.after("<table class='aftPhoto_table"+parseInt(idVal2)+"'><tbody><tr><td>수술 후 사진 등록</td><td><input type='file' class='filestyle' data-buttonText='사진 찾기'></td></tr><tr><td class='string_push'>수술 후 내용</td><td><textarea name='after_text' id='after_text' cols='96' rows='10'></textarea></td></tr><tr><td><p class='blind'>두 번째 수술 후사진 등록</p></td><td><p class='after_btn'>+ 사진 추가하기</p></td></tr></tbody></table></td></tr></tbody></table>");*/
        $(".aftPhoto_table:last").after(addAfter);
  $.file();
    } else {
        alert("사진은 3개까지 추가할 수 있습니다.");
    }
  //        });
});


    /*
    <script>

       var _init = 1;

       $('#add').on('click', function(ev) {
           if(_init < 3) {
             _init ++;
             $('#add_form').append("<li id=after_"+parseInt(_init)+">헤헤"+"</li>");
             // 그리고 삭제
           } else {
             alert("테이블이 이미 3개입니다");
           }
       });

   </script>
    */

})(jQuery);







