(function($){
  $(function() {
    $('.main-nav__icon').on('click', function() {
      $(this).closest('.main-nav')
      .toggleClass('main-nav__stateOpen');
    });
    $('.main-nav__lists').on('click',
    function() {
      $(this).closest('.main-nav')
      .removeClass('main-nav__stateOpen');
    });
  });
})(jQuery);

$(function(){
   $('#portfolio_grid').mixItUp({
     controls: {
       enable:true,
       activeClass:'portfolio__list--active'
     }
   });

   });

$(".item").imagefill();

var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = $(".team__items");
  var dots = $(".dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i=0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i=0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("slider-pagination__control--active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className+= " slider-pagination__control--active";
}


  // $.scrollUp({
  //     scrollName: 'scrollUp',      // Element ID
  //     scrollDistance: 300,         // Distance from top/bottom before showing element (px)
  //     scrollFrom: 'top',           // 'top' or 'bottom'
  //     scrollSpeed: 1000,            // Speed back to top (ms)
  //     easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
  //     animation: 'fade',           // Fade, slide, none
  //     animationSpeed: 300,         // Animation speed (ms)
  //     scrollText: '', // Text for element, can contain HTML
  //     scrollImg: true            // Set true to use image
  // });

 $(document).ready(function(){
 	$(".main-nav__lists").on("click","a", function (event) {
 		//отменяем стандартную обработку нажатия по ссылке
 		event.preventDefault();

 		//забираем идентификатор бока с атрибута href
 		var id  = $(this).attr('href'),

 		//узнаем высоту от начала страницы до блока на который ссылается якорь
 			top = $(id).offset().top;

 		//анимируем переход на расстояние - top за 1500 мс
 		$('body,html').animate({scrollTop: top}, 1500);
 	});
 });
