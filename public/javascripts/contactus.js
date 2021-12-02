document.querySelector(".reset").addEventListener("click", (r) => {
  r.preventDefault();

  document.querySelectorAll(".form-input").forEach((input) => {
    input.value = "";
  });
});

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
});
var inputs = document.querySelectorAll(".form-input");

var submit = document.querySelector(".submit");
const form1 = document.querySelector("form");
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  var nameError = document.querySelector(".nameError");
  var nameInput = document.querySelector(".name-input");
  var phonenum = document.querySelector(".phoneError");
  var phoneInput = document.querySelector(".phonenum");
  var emailError = document.querySelector(".emailError");
  var emailInput = document.querySelector(".email-input");
  var commentError = document.querySelector(".commentError");
  var commentInput = document.querySelector(".comment-input");
  if (nameInput.value == "") {
    nameError.style.display = "block";
    nameError.innerText = "Please enter your name";
    e.preventDefault();
  }
  if (phoneInput.value == "") {
    phonenum.style.display = "block";
    phonenum.innerText = "Please enter your number";
    e.preventDefault();
  }
  if (emailInput.value == "") {
    emailError.style.display = "block";
    emailError.innerText = "Please enter your email";
    e.preventDefault();
  }
  if (commentInput.value == "") {
    commentError.style.display = "block";
    commentError.innerText = "Please enter your comment";
    e.preventDefault();
  }

  inputs.forEach((input) => {
    var phoneInput = document.querySelector(".phonenum");
    if (phoneInput.value.length !== 10) {
      e.preventDefault();
    }
    if (input.value == "") {
      e.preventDefault();
      // submit.style.backgroundColor = '#ff0000';
    }
  });
});

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    var nameInput = document.querySelector(".name-input");
    var phoneInput = document.querySelector(".phonenum");
    var emailInput = document.querySelector(".email-input");
    var commentInput = document.querySelector(".comment-input");
    var nameError = document.querySelector(".nameError");
    var commentError = document.querySelector(".commentError");
    var emailError = document.querySelector(".emailError");
    var phoneErr = document.querySelector(".phoneError");
    if (
      !nameInput.value == "" &&
      !phoneInput.value == "" &&
      !emailInput.value == "" &&
      !commentInput.value == "" &&
      phoneInput.value.length == 10
    ) {
      // submit.style.backgroundColor = '#AAAAAA';
      submit.style.backgroundColor = "#3986be";
    } else {
      submit.style.backgroundColor = "#AAAAAA";
      nameError.style.display = "none";
      commentError.style.display = "none";
      emailError.style.display = "none";
      phoneErr.style.display = "none";
    }
  });
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
