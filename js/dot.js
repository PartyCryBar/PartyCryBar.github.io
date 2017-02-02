// HAMBURGLERv2

function togglescroll() {
  $('body').on('touchstart', function(e) {
    if ($('body').hasClass('noscroll')) {
      e.preventDefault();
    }
  });
}

$(document).ready(function() {
  togglescroll()
  $(".icon").click(function() {
    $('.banner-second').slideToggle('slow');
    $(".top-menu").toggleClass("top-animate");
    $("body").toggleClass("noscroll");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
    $(".header__content").toggleClass("header__content__mobile");
    $(".header").toggleClass("header__mobile");
    $(".navigation").toggleClass("navigation__mobile");
    $(".banner__inner").toggleClass("banner__inner-darker");
  });
});

$(document).on('ready', function() {
  $(window).on('resize', function() {
    if(document.documentElement.clientWidth > 768) {          
      $('.banner__inner').removeClass('banner__inner-darker');     
    }
  }).trigger('resize'); 
}); 

// PUSH ESC KEY TO EXIT

// $(document).keydown(function(e) {
//   if (e.keyCode == 27) {
//     $('.banner-second').slideToggle('slow');
//     $(".top-menu").removeClass("top-animate");
//     $("body").removeClass("noscroll");
//     $(".mid-menu").removeClass("mid-animate");
//     $(".bottom-menu").removeClass("bottom-animate");
//     $(".header__content").removeClass("header__content__mobile");
//     $(".header").removeClass("header__mobile");
//     $(".navigation").removeClass("navigation__mobile");
//     $(".banner__inner").removeClass("banner__inner-darker");
//   }
// });