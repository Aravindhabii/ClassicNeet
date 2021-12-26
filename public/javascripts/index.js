const closeimg = document.querySelector('.closeimage');
const exit = document.querySelector('.exit1');
document.querySelector(".body").style.overflow="hidden";
exit.addEventListener('click', () => {
		closeimg.parentNode.removeChild(closeimg);
        document.querySelector(".body").style.overflow="scroll";	
	});
