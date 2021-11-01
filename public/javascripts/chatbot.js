const botImg = document.querySelector('.bot-img');
const chat = document.querySelector('.chat');

botImg.addEventListener('click', () => {
	chat.classList.toggle('open');
});
