$(document).ready(function() {
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