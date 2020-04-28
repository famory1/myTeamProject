$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.slider').slick({
		adaptiveHeight:true,
		dots:true,
		autoplay: true,
  		autoplaySpeed: 3000,
  		cssEase: 'ease-out',
  		speed: 1000,
	});
});