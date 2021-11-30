const sweetp = document.querySelector('.sweetp');

const phonenum = document.querySelector('.phonenum');
const phoneError = document.querySelector('.phoneError');
var sub = false;
phonenum.addEventListener('input', (e) => {
	var num = e.target.value;
	var filter =
		/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
	if (!e.target.value) {
		phoneError.style.display = 'none';
	} else {
		phoneError.style.display = 'block';
		if (filter.test(num)) {
			if (num.length == 10) {
				phoneError.style.display = 'none';
				sub = true;
			} else {
				phoneError.innerText = 'Please put 10 digit mobile number';
			}
		} else {
			phoneError.innerText = 'Not a valid number';
		}
	}
});
var inputs = document.querySelectorAll('.form-input');

var submit = document.querySelector('.submit');

document.querySelector('.form').addEventListener('submit', (e) => {
	var nameError = document.querySelector('.nameError');
	var nameInput = document.querySelector('.name-input');
	var phonenum = document.querySelector('.phoneError');
	var phoneInput = document.querySelector('.phonenum');
	var emailError = document.querySelector('.emailError');
	var emailInput = document.querySelector('.email-input');
	var commentError = document.querySelector('.commentError');
	var commentInput = document.querySelector('.comment-input');
	if (nameInput.value == '') {
		nameError.style.display = 'block';
		nameError.innerText = 'Please enter your name';
		e.preventDefault();
	}
	if (phoneInput.value == '') {
		phonenum.style.display = 'block';
		phonenum.innerText = 'Please enter your number';
		e.preventDefault();
	}
	if (emailInput.value == '') {
		emailError.style.display = 'block';
		emailError.innerText = 'Please enter your email';
		e.preventDefault();
	}
	if (commentInput.value == '') {
		commentError.style.display = 'block';
		commentError.innerText = 'Please enter your comment';
		e.preventDefault();
	}

	inputs.forEach((input) => {
		var phoneInput = document.querySelector('.phonenum');
		if (phoneInput.value.length !== 10) {
			e.preventDefault();
		}
		if (input.value == '') {
			e.preventDefault();
		}
	});
});

inputs.forEach((input) => {
	input.addEventListener('input', (e) => {
		var nameInput = document.querySelector('.name-input');
		var phoneInput = document.querySelector('.phonenum');
		var emailInput = document.querySelector('.email-input');
		var commentInput = document.querySelector('.comment-input');
		var nameError = document.querySelector('.nameError');
		var commentError = document.querySelector('.commentError');
		var emailError = document.querySelector('.emailError');
		if (
			!nameInput.value == '' &&
			!phoneInput.value == '' &&
			!emailInput.value == '' &&
			!commentInput.value == '' &&
			phoneInput.value.length == 10
		) {
			// submit.style.backgroundColor = '#AAAAAA';
		} else {
			nameError.style.display = 'none';
			commentError.style.display = 'none';
			emailError.style.display = 'none';
		}
	});
});

document.querySelector('.reset').addEventListener('click', (r) => {
	r.preventDefault();
	document.querySelectorAll('.form-input').forEach((input) => {
		input.value = '';
	});
	document.querySelectorAll('.err').forEach((input) => {
		input.style.display = 'none';
	});
});

phonenum.addEventListener('keypress', (evt) => {
	var ASCIICode = evt.which ? evt.which : evt.keyCode;
	if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
		evt.preventDefault();
	}
});

if (sweetp) {
	function successdialog() {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: sweetp.innerText,
			showConfirmButton: false,
			timer: 2500
		});
	}
	successdialog();
	sweetp.parentNode.removeChild(sweetp);
}
