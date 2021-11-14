// Navbar
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navlinks');
const navlinks = document.querySelectorAll('.navlinks li');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const body = document.querySelector('body');

const navslide = () => {
	hamburger.addEventListener('click', () => {
		console.log('lol');

		body.classList.toggle('bodyy');
		if (body.getAttribute('class').includes('bodyy')) {
			body.style.overflowY = 'hidden';
		} else {
			body.style.overflowY = 'scroll';
		}

		nav.classList.toggle('nav-active');
		//animation
		navlinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navlinkFade 0.5s ease forwards ${
					index / 7 + 0.5
				}s`;
			}
		});
		if (line1.style.transform) {
			line1.style.transform = '';
			line2.style.display = '';
			line3.style.transform = '';
		} else {
			line1.style.transform = 'rotate(-45deg) translate(-5px,6px)';
			line2.style.display = 'none';
			line3.style.transform = 'rotate(45deg) translate(0px,0px)';
		}
	});
};

//
//

navslide();

// DARK MODE

const toggleDarkTheme = () => {
	document.querySelector('body').classList.toggle('dark');
	document.querySelector('.dark-mode-toggle').classList.toggle('dark');
	document.querySelector('nav').classList.toggle('dark');
	document.querySelector('.backgroundMain').classList.toggle('dark');
	document.querySelectorAll('.calenderCard').forEach((card) => {
		card.classList.toggle('dark');
	});
	document.querySelector('.news-box').classList.toggle('dark');
	document.querySelector('.sec-2 .div-1').classList.toggle('dark');
	document.querySelector('.sec-2 .div-2').classList.toggle('dark');
	document.querySelector('.cardsDiv').classList.toggle('dark');
	document.querySelector('.neet-2020-toppers-a').classList.toggle('dark');
	document.querySelector('footer').classList.toggle('dark');
};

document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
	toggleDarkTheme();
});

const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
if (darkThemeMq.matches) {
	toggleDarkTheme();
}

// swiper js

var swiper = new Swiper('.mySwiper', {
	pagination: {
		el: '.swiper-pagination'
	}
});

var swiper2 = new Swiper('.mySwiper2', {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
	loop: true,
	autoplay: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});
var swiper1 = new Swiper('.mySwiper1', {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
	loop: true,
	autoplay: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});

var a = 0;
$(window).scroll(function () {
	var oTop = $('#counter').offset().top - window.innerHeight;
	if (a == 0 && $(window).scrollTop() > oTop) {
		$('.counter-value').each(function () {
			var $this = $(this),
				countTo = $this.attr('data-count');
			$({
				countNum: $this.text()
			}).animate(
				{
					countNum: countTo
				},

				{
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
						//alert('finished');
					}
				}
			);
		});
		a = 1;
	}
});
