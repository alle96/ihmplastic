'use strict';
//if (typeof JY === "undefined")  { $.JY = new Object(); }

(function($) {        
 
 var listA = $(".list_category > ul > li > a");
 var idVal1 = 1;
 var idVal2 = 1;
 var addBefore = $(".befoPhoto_wrap");
 var addAfter = $(".aftPhoto_wrap");
 
$.file = function(){
$(":file").filestyle();
$(":file").filestyle('buttonText', '사진 찾기');
$(":file").filestyle('placeholder', '등록된 사진이 없습니다.');
 };

 listA.on("click",function() {
    listA.removeClass("listOn");
    $(this).addClass("listOn");
 });

$(".list_category > ul > li :eq(0)").click();

$(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });


$(document).on("click", ".before_btn", function(ev) {
ev.preventDefault();    
        if(idVal1 < 3 ) {
        idVal1++;
        addBefore.append("<table class='befoPhoto_table"+parseInt(idVal1)+"'><tbody><tr><td>수술 전 사진 등록</td><td><input type='file'class='filestyle' data-buttonText='사진 찾기'></td></tr><tr><td class='string_push'>수술 전 내용</td><td><textarea name='before_text' id='before_text' cols='96' rows='10'></textarea></td></tr><tr><td><p class='blind'>두 번째 수술 전 사진 등록</p></td><td><p class='before_btn'>+ 사진 추가하기</p></td></tr></tbody></table> ");
        $.file();
    } else {
        alert("사진은 3개까지 추가할 수 있습니다.");
    }
});



$(document).on("click", ".after_btn", function(ev) {
    ev.preventDefault();
    if(idVal2 < 3 ) {
        idVal2++;
        addAfter.find(".after_month").remove();
        addAfter.append("<table class='aftPhoto_table"+parseInt(idVal2)+"'><tbody><tr><td>수술 후 사진 등록</td><td><input type='file' class='filestyle' data-buttonText='사진 찾기'></td></tr><tr><td class='string_push'>수술 후 내용</td><td><textarea name='after_text' id='after_text' cols='96' rows='10'></textarea></td></tr><tr><td><p class='blind'>두 번째 수술 후사진 등록</p></td><td><p class='after_btn'>+ 사진 추가하기</p></td></tr></tbody></table></td></tr></tbody></table>");
        $.file();
    } else {
        alert("수술 후 사진은 3개까지 추가할 수 있습니다.");
    }
});


  

})(jQuery);







