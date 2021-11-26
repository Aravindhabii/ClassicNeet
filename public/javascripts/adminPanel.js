

const subbutton3Add = document.querySelector('.subbutton3 .addButton');
const subbutton3AddSpan = document.querySelector('.addToppers span');
const addToppers = document.querySelector('.addToppers');

subbutton3Add.addEventListener('click', () => {
	addToppers.style.display = 'block';
});

subbutton3AddSpan.addEventListener('click', () => {
	addToppers.style.display = 'none';
	popupdiv.style.display = "none";
});


const popupdiv = document.querySelector(".popupdiv");

subbutton3Add.addEventListener("click", () => {
  popupdiv.style.display = "block";
});


