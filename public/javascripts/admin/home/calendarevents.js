const addbtn = document.querySelector('.addbtn');
const previewDiv = document.querySelector('.preview');
const backbtn = document.querySelector('.backbtn');
const sectionop = document.querySelector('.mainsection');
const submitbtn = document.querySelector('.submitbtn');
const confirmdelete = document.querySelector('.confirmdelete');
const imgform = document.querySelector('.imgform');
var inputtext = document.querySelector('.inputtext');
const changablespan = document.querySelector('.changablespan');
const year = document.querySelector('.year');
const date = new Date();

console.log((date.getFullYear()-1)+'-'+(date.getMonth()+1)+'-'+date.getDate(),(date.getFullYear()+1)+'-'+(date.getMonth()+1)+'-'+date.getDate());

year.setAttribute('min',(date.getFullYear()-1)+'-'+(date.getMonth()+1)+'-'+date.getDate())
year.setAttribute('max', (date.getFullYear()+1)+'-'+(date.getMonth()+1)+'-'+date.getDate());

addbtn.addEventListener('click', () => {
	previewDiv.style.display = 'flex';
	imgform.style.transform = 'translate(300vw,0)';
	previewDiv.style.transform = 'none';
});

backbtn.addEventListener('click', () => {
	previewDiv.style.transform = 'translate(300vw,0)';
	imgform.style.transform = 'translate(0,0)';
});

submitbtn.addEventListener('click', () => {
	Swal.fire({
		title: 'Are you sure?',
		text: 'Are you sure you want to delete!',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes, delete it!'
	}).then((result) => {
		if (result.isConfirmed) {
			imgform.submit();
		}
	});
});

var counternum = 0;

counternum = inputtext.value.length;
changablespan.innerHTML = counternum;

inputtext.addEventListener('input', (e) => {
	var counternum = e.target.value.length;
	changablespan.innerHTML = counternum;
});

document.querySelectorAll('.updatesCheckbox').forEach((check, i) => {
	check.addEventListener('change', () => {
		if (document.querySelectorAll('input[type="checkbox"]:checked').length) {
			document.querySelector('.submit').removeAttribute('disabled');
		} else {
			document.querySelector('.submit').setAttribute('disabled', true);
		}
	});
});
