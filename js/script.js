(function($){

	$(document).ready(function(){
		
		var main = {
				init : function(){
							var orderbox = $(".orderbox");
							var threshold = 700
							$(window).scroll(function( event ){
									var scrollTop = $(window).scrollTop();
										if(scrollTop > threshold ){
											orderbox.addClass("fixed-top");
										}
										else{
											orderbox.removeClass("fixed-top");
										}

									});

							$('.change').click(function(){
								var orderbox = $("#orderbox");
								var _temp1 = orderbox.hasClass('temp1');
								if( _temp1 ){
									orderbox.removeClass('temp1');
									setTimeout(function(){
										orderbox.addClass('temp2');
									}, 500);
									

								}else{
									orderbox.removeClass('temp2');
									orderbox.addClass('temp1');
								}
							});
						}


		};
		main.init();
	});
})(jQuery);