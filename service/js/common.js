$('document').ready(function() {

	$('.header__arrow--right').click(function() {
     var currentItem = $('.banner__wrapper.banner__wrapper--slide');
     var currentItemIndex = $('.banner__wrapper.banner__wrapper--slide').index();
     var nextItemIndex = currentItemIndex + 1;
     var nextItem = $('.banner__wrapper').eq(nextItemIndex);
     //currentItem.fadeOut(1000);
     currentItem.removeClass('banner__wrapper--slide');

     if(nextItemIndex == ($('.banner__wrapper:last').index()+1)) {
     	//$('.item').eq(0).fadeIn(1000);
     	$('.banner__wrapper').eq(0).addClass('banner__wrapper--slide');
     } else {
     	//nextItem.fadeIn(1000);
     	nextItem.addClass('banner__wrapper--slide');
     }
   });
	$('.header__arrow--left').click(function() {
		var currentItem = $('.banner__wrapper.banner__wrapper--slide');
		var currentItemIndex = $('.banner__wrapper.banner__wrapper--slide').index();
		var prevItemIndex = currentItemIndex - 1;
		var prevItem = $('.banner__wrapper').eq(prevItemIndex);
		//currentItem.fadeOut(1000);
		currentItem.removeClass('banner__wrapper--slide');
		//prevItem.fadeIn(1000);
		prevItem.addClass('banner__wrapper--slide');
	});

});
