



/*===========================Бургер меню=========================================*/

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__contacts-wrapper').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$(".header__contacts-tel").mask("8(999) 999-9999");

	$(function () {
		$('.slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			infinite: false,
		});
	});

	$(function () {
		$('.sub-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			infinite: true,
		});
	});
	$('.gallery-linck').click(function () {
		$('.branch__popup-presnya').addClass('open');
		$('body').addClass('stop');
		$('.popup__content').addClass('open');
		$('.popup__close').click(function () {
			$('.branch__popup-presnya').removeClass('open');
			$('body').removeClass('stop');
			$('.popup__content').removeClass('open');
		});
	});
	$(function () {
		$('a').on('click', function (event) {
			event.preventDefault();
		});
	});
	$('.gallery-linck-meteor').click(function name(params) {
		$('.popup-meteor').addClass('open');
		$('body').addClass('stop');
		$('.popup__content').addClass('open');
	})
	$('.popup__close').click(function () {
		$('.popup-meteor').removeClass('open');
		$('.popup__content').removeClass('open');
		$('body').removeClass('stop');
	})
	$('.gallery-linck-leninsky').click(function () {
		$('.popup-leninsky').addClass('open');
		$('.popup__content').addClass('open');
		$('body').addClass('stop');
	})
	$('.popup__close').click(function () {
		$('.popup-leninsky').removeClass('open');
		$('.popup__content').removeClass('open');
		$('body').removeClass('stop');
	})
	$('.gallery-linck-newgame').click(function () {
		$('.popup-newgame').addClass('open');
		$('.popup__content').addClass('open');
		$('body').addClass('stop');
	})
	$('.popup__close').click(function () {
		$('.popup-newgame').removeClass('open');
		$('.popup__content').removeClass('open');
		$('body').removeClass('stop');
	});
	$(function () {
		$('.photo__sliderbig').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			//infinite: false,
			fade: true,
			asNavFor: ".photo__slidermini"
		});
	});
	$(function () {
		$('.photo__slidermini').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			//infinite: false,
			asNavFor: ".photo__sliderbig"
		});
	});
	//$('.photo__content').click(function () {
	//	$(this).toggleClass('active').next().slideToggle(300);
	//	$('.photo__arrow').toggleClass('active');
	//});
	$('.photo__arrow-section1').click(function () {
		$(this).toggleClass('active')
		$('.photo__body-section1').slideToggle(300);
	});
	$('.photo__arrow-section2').click(function () {
		$(this).toggleClass('active')
		$('.photo__body-section2').slideToggle(300);
	});
	$('.photo__arrow-section3').click(function () {
		$(this).toggleClass('active')
		$('.photo__body-section3').slideToggle(300);
	});
	$('.photo__arrow-section4').click(function () {
		$(this).toggleClass('active')
		$('.photo__body-section4').slideToggle(300);
	});
	$('.photo__arrow-section5').click(function () {
		$(this).toggleClass('active')
		$('.photo__body-section5').slideToggle(300);
	});
	$('.photo__arrow-section6').click(function () {
		$(this).toggleClass('active')
		$('.photo__body-section6').slideToggle(300);
	});



	function responsive_slider(selector, size, options) {
		if ($(window).width() < size) {
			if (!$(selector).hasClass('slick-slider')) {
				$(selector).slick(options)
			}
		} else {
			if ($(selector).hasClass('slick-slider')) {
				$(selector).slick('destroy');
			}
		}
	}

	responsive_slider('.staff__body-slider', 479.98, {
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		infinite: false,
	});

	$(window).resize(function () {
		responsive_slider('.staff__body-slider', 479.98, {
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			infinite: false
		});
	})
	$('.mainblock__scroll').click(function () {
		$('html, body').animate({
			scrollTop: $('.footer').offset().top
		}, 3000);
	});

	$('.input__name').focus(function () {
		$('.span__name').css("display", "none");
	});
	$('.input__name').blur(function () {
		$('.span__name').css("display", "block");
	});
	/*--------*/
	$('.input__mail').focus(function () {
		$('.span__mail').css("display", "none");
	});
	$('.input__mail').blur(function () {
		$('.span__mail').css("display", "block");
	});
	/*---------*/
	$('.input__tel').focus(function () {
		$('.span__tel').css("display", "none");
	});
	$('.input__tel').blur(function () {
		$('.span__tel').css("display", "block");
	});
});
/*-------------------------------------*/







/*=============Бургер при нажатии меняет цвет============================*/

//$('.header__burger').on('click', function (e) {
//	e.preventDefault();
//	$(this).toggleClass('burger__active');
//});

/*===================Слайдер=====================================================*/

//$(document).ready(function () {
//	$('.news__clider').slick({
//		slidesToShow: 2,
//		slidesToScroll: 2,
//		arrows: false,
//		dots: true,
//		infinite: false,
//		responsive: [
//			{
//				breakpoint: 991.98,
//				settings: {
//					slidesToShow: 1,
//					slidesToScroll: 1,
//				}
//			}
//		]
//	});
//});

/*==================Адаптация слайдера=============================================*/

/*
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 1
				}
			}
		]
	});

	*/

/*==========================================================================*/

