const changablespan = document.querySelector('.changablespan1');
const formtextarea = document.querySelector('.formtextarea1');
changablespan.innerText = formtextarea.value.length;
formtextarea.addEventListener('input', (e) => {
	changablespan.innerText = e.target.value.length;
});

const changablespan1 = document.querySelector('.changablespan2');
const formtextarea1 = document.querySelector('.formtextarea2');
changablespan1.innerText = formtextarea1.value.length;
formtextarea1.addEventListener('input', (e) => {
	changablespan1.innerText = e.target.value.length;
});
