'use strict';
(function($) {

	var gnbA = $("#treatment_go");
    $.this = gnbA;

/*    jQuery.noConflict();*/
	gnbA.click(function() {
		var target = $.this.attr("href"); // href 선택한 a의 href값
		$("html,body").animate({ scrollTop:$(target).offset().top-160 },300); // body를 움직여도 됨 ( , but , body는 크롬에서 적용되지 않는다, 그러므로 " group = , " 선택자를 사용한다)
																	// scrollTop 이 CSS에 들어가는 경우이다 $(target)은 $가 없으면 단순 문자가 되므로 꼭 삽입한다. .top 은 겟이 아니라 셋이다
																	// 누르는 순간  gnb와 html이 이동하기 시작하므로 stop() 을 넣지 않아도 된다.
                                                                   
		return false;
	});
/*     gnbA.attr('onclick', '').unbind('click');*/
	
})(jQuery);