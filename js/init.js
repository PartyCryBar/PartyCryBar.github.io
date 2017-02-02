$(document).on('ready', function() {
    $(window).on('resize', function() {
		if(document.documentElement.clientWidth > 768) {
		  	$(window).scroll(function(){
		  		if ($(this).scrollTop()>40) {
		  			$('.header').addClass('fixed');
		  		} else {
		  			$('.header').removeClass('fixed');
		  		}
			});
		}
	}).trigger('resize');	
});	