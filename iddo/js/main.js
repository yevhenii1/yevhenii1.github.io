/*******************************************************
					MODULE accordion
*******************************************************/
$(function() {
	"use strict";
	 
	//toggle header
	$(".nav-toggle").click(function(){
		$(".header-nav").slideToggle( "slow" );
	});
	//prtfolio mixitup
	$('#portfolio-items').mixItUp({
		controls: {
			enable:true,
			activeClass:'filter--active'
		}
	});
	//testimonial
	$('.testimonial__slides').slick({
		dots: true,
		infinite: false,
		slidesToShow: 1,
		adaptiveHeight: false,
		arrows: false,
	});
	//numbers
	let show = true;
	$(window).on("scroll", function() {
			if(!show) return false;
			$("#number").each(function(){
					let cPos = $(this).offset().top;
					let topWindow = $(window).scrollTop();

					if (cPos < topWindow + 600  ) {
							$('.number-item__numder').each(function () {
								$(this).prop('Counter', 0).animate({
									Cointer: $(this).text()
								}, {
									duration: 2000,
									easing: 'swing',
									step:function(now){
										$(this).text(Math.ceil(now));
									}
								});
							});
							show = false;
						}
			});
	});
	//progress bar cirlc

	var showskilla = true;
	$(window).on("scroll", function() {
			if(!showskilla) return false;

			$("#skills").each(function(){

					var cPos = $(this).offset().top;
					var topWindow = $(window).scrollTop();

					if (cPos < topWindow + 600  ) {
							$('#cirlc-1').circleProgress({
									value: 0.75,
									size: 170,
									fill: "#42b8dd",
									thickness: '10',
									startAngle: 300,
									emptyFill: "transparent"

							}).on('circle-animation-progress', function(event, progress) {
									$(this).find('#number-1').html(Math.round(75 * progress));
							});
							$('#cirlc-2').circleProgress({
									value: 0.25,
									size: 170,
									fill: "#42b8dd",
									thickness: '10',
									startAngle: 300,
									emptyFill: "transparent"

							}).on('circle-animation-progress', function(event, progress) {
									$(this).find('#number-2').html(Math.round(25 * progress));
							});
							$('#cirlc-3').circleProgress({
									value: 0.75,
									size: 170,
									fill: "#42b8dd",
									thickness: '10',
									startAngle: 300,
									emptyFill: "transparent"

							}).on('circle-animation-progress', function(event, progress) {
									$(this).find('#number-3').html(Math.round(75 * progress));
							});
							$('#cirlc-4').circleProgress({
									value: 0.50,
									size: 170,
									fill: "#42b8dd",
									thickness: '10',
									startAngle: 300,
									emptyFill: "transparent"

							}).on('circle-animation-progress', function(event, progress) {
									$(this).find('#number-4').html(Math.round(50 * progress));
							});

							showskilla = false;
					 }
			});
	});

	//accordeon

  $('.accordeon-item__toggle').click(function(e) {
    e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('show') && $this.hasClass('accordeon-item__toggle--active')) {
				$this.next().removeClass('show');
				$this.removeClass('accordeon-item__toggle--active');
        $this.next().slideUp(350);
    } else {
				$this.parent().parent().find('li .inner').removeClass('show');
				$this.parent().parent().find('li .accordeon-item__toggle').removeClass('accordeon-item__toggle--active');
        $this.parent().parent().find('li .inner').slideUp(350);
				$this.next().toggleClass('show');
				$this.toggleClass('accordeon-item__toggle--active');
        $this.next().slideToggle(350);
    }
	});
	// scrollTop
	$(function(){
		$(window).scroll(function(){
			if($(document).scrollTop()>$(window).height()){
				$('.btnUp').show();
			}else{
				$('.btnUp').hide();
			}
		});
		$('.btnUp').click(function(){
			$('html,body').animate({scrollTop: 0}, 1500);
		});
	});
	// scrollMenu
	$(document).ready(function(){
    $('.header-nav__link').click( function(){
	  const scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
	    return false;
    });
	});
});
