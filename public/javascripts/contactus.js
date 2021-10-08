document.querySelector('.reset').addEventListener('click', (r) => {
	r.preventDefault();
	document.querySelectorAll('.form-input').forEach((input) => {
		input.value = '';
	});
});

const phonenum = document.querySelector('.phonenum');

phonenum.addEventListener('input', (e) => {
	console.log(
		parseInt(e.target.value.substr(e.target.value.length - 1, e.target.value))
	);
});

document.querySelector('form').addEventListener('submit', (e) => {
	if (parseInt(phonenum.value).length !== 10) {
		e.preventDefault();
		alert('Phone number must be 10 digits!');
	}
});
