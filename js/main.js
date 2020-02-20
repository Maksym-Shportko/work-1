$(function(){
	$('.slider__inner').slick({
		  
	});
   $(".fancybox").fancybox();
   $(".popup").magnificPopup();
});
var slickSlide = $('.slider__inner');
  slickSlide.on('mousewheel', function(e) {
    if (e.deltaY < 0) {
      e.preventDefault();
      $(this).slick('slickNext');
    } else {
      e.preventDefault();
      $(this).slick('slickPrev');
    }
  });

const background = document.querySelector('.slide');

background.addEventListener('mousemove', rotate);

function rotate(event) {
    const $image = $('.slick-current .slider__background-image');
    const halfHeight = $image.height() / 2;

    $image.css('transform', 'rotateX(' + (event.screenY - halfHeight) / 40 + 'deg) rotateY(' + (event.screenX - halfHeight) / 80 + 'deg)');
}
$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu').toggleClass('menu_active');
});





