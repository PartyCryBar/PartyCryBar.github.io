$(document).ready(function(){
 	$('.port').on('click', function(){
        $('.band,.videogallery,.information').hide(0);
 		$('.portfolio').slideDown(0);
 		$("html,body").animate({scrollTop: $(".anchor").offset().top}, 500);
        $('.navigation,li,a').removeClass('underline');
        $('.port').addClass('underline');
 	})
});

$(document).ready(function(){
 	$('.vid').on('click', function(){
        $('.band,.portfolio,.information').hide(0);
 		$('.videogallery').slideDown(0);
 		$("html,body").animate({scrollTop: $(".anchor").offset().top}, 500);
        $('.navigation,li,a').removeClass('underline');
        $('.vid').addClass('underline');
 	})
});

$(document).ready(function(){
 	$('.info').on('click', function(){
        $('.band,.portfolio,.videogallery').hide(0);
 		$('.information').slideDown(0);
 		$("html,body").animate({scrollTop: $(".anchor").offset().top}, 500);
        $('.navigation,li,a').removeClass('underline');
        $('.info').addClass('underline'); 
 	})
});

$(document).ready(function(){
 	$('.about').on('click', function(){
        $('.portfolio,.videogallery,.information').hide(0);
 		$('.band').slideDown(0);
 		$("html,body").animate({scrollTop: $(".anchor").offset().top}, 500);
        $('.navigation,li,a').removeClass('underline');
        $('.about').addClass('underline');
 	})
});

$(document).ready(function(){
 	$('.up').click(function () {
      	$(this).parent().slideUp(500);
      	$("html,body").animate({scrollTop: $("header").offset().top}, 500);
        $('.navigation,li,a').removeClass('underline');
 	})
});