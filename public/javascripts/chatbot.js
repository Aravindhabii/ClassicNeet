const botImg = document.querySelector('.bot-img');
const chat = document.querySelector('.chat');
const chatClose = document.querySelector('.chat-close');

botImg.addEventListener('click', () => {
	chat.classList.add('open');
});

chatClose.addEventListener('click', () => {
	chat.classList.remove('open');
});

window.addEventListener('scroll', (e) => {
	var scroll = window.scrollY;
	if (scroll >= 100) {
		botImg.style.top = '100vh';
	} else {
		botImg.style.top = '120vh';
	}
});
