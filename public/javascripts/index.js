let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;

function MBBS_Seats() {
	count1++;
	document.querySelector('.MBBS_Seats').innerHTML = count1;
	if (
		count1 == document.querySelector('.MBBS_Seats').getAttribute('data-target')
	) {
		clearInterval(MBBS_Seats);
	}
}

function Consecutive() {
	count2++;
	document.querySelector('.Consecutive').innerHTML = count2;
	if (
		count2 == document.querySelector('.Consecutive').getAttribute('data-target')
	) {
		clearInterval(Consecutive);
	}
}

function successRate() {
	count3++;
	document.querySelector('.successRate').innerHTML = `${count3}%`;
	if (
		count3 == document.querySelector('.successRate').getAttribute('data-target')
	) {
		clearInterval(successRate);
	}
}

function admission() {
	count4++;
	document.querySelector('.admission').innerHTML = `${count4}%`;
	if (
		count4 == document.querySelector('.admission').getAttribute('data-target')
	) {
		clearInterval(admission);
	}
}
window.add


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}
function showSlides() {
	var i;
	var slides = document.getElementsByClassName('mySlides');
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex - 1].style.display = 'block';
	setTimeout(showSlides, 4000);
}

var swiper = new Swiper('.mySwiper', {
	effect: 'cards',
	grabCursor: true
});
