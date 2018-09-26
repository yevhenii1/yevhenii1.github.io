$(document).ready(function() {


	$( ".contact-info__button" ).click(function() {
	  $( ".contact-info__content" ).toggle( "slow" );
	});

	$( ".toggle-button" ).click(function() {
	  $( ".main-nav" ).slideToggle( "slow" );
	});
});
$(function(){
	$('#portfolio').mixItUp({
		// controls: {
		// 	enable:true,
		// 	activeClass:'filter__item--active'
		// }
	});
});
