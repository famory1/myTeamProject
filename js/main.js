// Слайдер и бургерт меню
$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__nav,.header__logo').toggleClass('active');
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
// Кнопка меню для навигации в телефоне
$(document).ready(function(){
	$('.photo__menu').click(function(event){
		$(this).toggleClass('active').next().slideToggle(500);
	});
});
// Фильтр
$(function(){

	let filter = $("[data-filter]");

	filter.on("click", function(event){
		// При нажатии на наш фильтр, страница не будет обновляться и перекидывать нас в начало
		event.preventDefault();
		let cat = $(this).data('filter');
		if(cat == 'all'){
			$("[data-cat]").removeClass('hide');
		}else{
			$("[data-cat]").each(function(){
			let workCat = $(this).data('cat');
			console.log(workCat);
			if (workCat != cat){
				$(this).addClass('hide');
			}else{
				$(this).removeClass('hide');
			}

		});
		}
	});

});
//Плавная прокрутка до нужного раздела 
// $(function(){

// 	$('.portfolio').on('click', function(event){
// 	  $('html,body').stop().animate({ scrollTop: $('.photo__body').offset().top }, 1000);
// 	  event.preventDefault();
// 	});
// 	$('.home').on('click', function(event){
// 	  $('html,body').stop().animate({ scrollTop: $('.slider').offset().top }, 1000);
// 	  event.preventDefault();
// 	});

// });
