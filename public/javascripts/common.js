


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
					}
				}
			);
		});
		a = 1;
	}
});




var swiper = new Swiper(".swipTop", {
	slidesPerView: 1,
	spaceBetween: 30,
	slidesPerGroup: 1,
	// loop: true,
	autoplay: true,
	// loopFillGroupWithBlank: false,
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
		slidesPerGroup: 3
	  },
	},
  });


  var swiper = new Swiper(".swipYt", {
	slidesPerView: 1,
	spaceBetween: 30,
	slidesPerGroup: 1,
	// loop: true,
	autoplay: true,
	// loopFillGroupWithBlank: false,
	
  
  navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
  },
  breakpoints: {
	  640: {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 30,
	  },
	  850: {
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 40,
	  },
	  1305: {
		slidesPerView: 3,
		spaceBetween: 50,
		slidesPerGroup: 3
	  },
	},
  });


const newsbox = document.querySelector('.news-box');
const scrollmarquee = document.querySelector('.marqueetext');
if (innerWidth < 600) {
	newsbox.removeAttribute('onmousedown');
	newsbox.removeAttribute('onmouseup');
	newsbox.removeAttribute('onmouseout');
	newsbox.removeAttribute('onmousedown');
	newsbox.removeAttribute('onmouseover'); 

	scrollmarquee.removeAttribute('onmousedown');
	scrollmarquee.removeAttribute('onmouseup');
	scrollmarquee.removeAttribute('onmouseout');
	scrollmarquee.removeAttribute('onmousedown');
	scrollmarquee.removeAttribute('onmouseover'); 
} 
