const addbtn = document.querySelector('.addbtn');
const previewDiv = document.querySelector('.preview');
const backbtn = document.querySelector('.backbtn');
const sectionop = document.querySelector('.mainsection');
const imgform = document.querySelector('.imgform');
const submit = document.querySelector('.submit');
const submitbtn = document.querySelector('.submitbtn');

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
	swal({
		title: 'Are you sure?',
		text: 'Once deleted, you will not be able to recover this imaginary file!',
		icon: 'warning',
		buttons: true,
		dangerMode: true
	}).then((willDelete) => {
		if (willDelete) {
			swal('Poof! Your imaginary file has been deleted!', {
				icon: 'success'
			});
		} else {
			swal('Your imaginary file is safe!');
		}
	});
});
