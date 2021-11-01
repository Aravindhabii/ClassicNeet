const botImg = document.querySelector('.bot-img');
const chat = document.querySelector('.chat');

botImg.addEventListener('click', () => {
	chat.classList.toggle('open');
});

window.addEventListener('scroll', (e) => {
    var scroll = window.scrollY;
    if(scroll>=100){
        botImg.style.top = '100vh';
    }else{
        botImg.style.top = '120vh';
        
    }
})