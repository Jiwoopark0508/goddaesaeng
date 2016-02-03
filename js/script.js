(function($){

	$(document).ready(function(){
		
		var main = {
				init : function(){
							var orderbox = $(".orderbox-temp");
							$(window).scroll(function(){
									var scrollTop = $(window).scrollTop();
										if(scrollTop > 650 ){
											orderbox.addClass("fixed-top");
										}
										else{
											orderbox.removeClass("fixed-top");
										}

									});
						}


		};
		main.init();
	});
})(jQuery);