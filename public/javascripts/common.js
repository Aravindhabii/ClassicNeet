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




var swiper = new Swiper(".swipTop", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
	loop: true,
	autoplay: true,
	loopFillGroupWithBlank: false,
	spaceBetween: 10,
  
  navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
  },
  breakpoints: {
	  640: {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 20,
	  },
	  850: {
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 40,
	  },
	  1305: {
		slidesPerView: 3,
		spaceBetween: 50,
	  },
	},
  });


  var swiper = new Swiper(".swipYt", {
	slidesPerGroup: 3,
	loop: true,
	slidesPerView: 1,
	spaceBetween: 10,
	autoplay: {
	delay: 2500,
	disableOnInteraction: false,
  },
  
  navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
  },
  breakpoints: {
	  640: {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 20,
	  },
	  850: {
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 40,
	  },
	  1305: {
		slidesPerView: 3,
		spaceBetween: 50,
	  },
	},
  });



  