
var mySwiper = new Swiper(".swiper-gallery", {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	centeredSlides: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	breakpoints: {
		1024: {
			slidesPerView: 5,
			spaceBetween: 10,
		},
		600: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
	}
});

var mySwiper = new Swiper(".swiper-testimonials", {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	centeredSlides: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	breakpoints: {

		768: {
			spaceBetween: 100,
		},
	}
});

$('.menu-btn').on('click', function (e) {
	e.preventDefault;
	$(this).toggleClass('menu-btn-active');
	$('.toggle-menu').toggleClass('toggle-menu-active');
});

//Sticky header
var height = $('header').innerHeight();
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('header').addClass('sticky');
	}
	else if ($(this).scrollTop() < 100) {
		$('header').removeClass('sticky');
	}
});