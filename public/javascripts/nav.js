function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');
const body = document.querySelector('body');
allEventListners();

function allEventListners() {
	navToggler.addEventListener('click', togglerClick);
	navLinks.forEach((elem) => elem.addEventListener('click', navLinkClick));
}

function togglerClick() {
	navToggler.classList.toggle('toggler-open');
	navMenu.classList.toggle('open');
	body.classList.toggle('overflow-hidden');
}

function navLinkClick() {
	if (navMenu.classList.contains('open')) {
		navToggler.click();
	}
}

// DARK MODE

const toggleDarkTheme = () => {
	document.querySelector('body').classList.toggle('dark');
	document.querySelector('.dark-mode-toggle').classList.toggle('dark');
	document.querySelector('nav').classList.toggle('dark');
	document.querySelector('.backgroundMain')
		? document.querySelector('.backgroundMain').classList.toggle('dark')
		: '';
	document.querySelectorAll('.calenderCard').forEach((card) => {
		card.classList.toggle('dark');
	});
	document.querySelector('.news-box')
		? document.querySelector('.news-box').classList.toggle('dark')
		: '';
	document.querySelector('.sec-2 .div-1')
		? document.querySelector('.sec-2 .div-1').classList.toggle('dark')
		: '';
	document.querySelector('.sec-2 .div-2')
		? document.querySelector('.sec-2 .div-2').classList.toggle('dark')
		: '';
	document.querySelector('.cardsDiv')
		? document.querySelector('.cardsDiv').classList.toggle('dark')
		: '';
	document.querySelector('.neet-2020-toppers-a')
		? document.querySelector('.neet-2020-toppers-a').classList.toggle('dark')
		: '';
	document.querySelector('footer')
		? document.querySelector('footer').classList.toggle('dark')
		: '';
};

document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
	toggleDarkTheme();
});

const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
if (darkThemeMq.matches) {
	fetch(`/toggledark/dark`);
} else {
	fetch(`/toggledark/light`);
}
