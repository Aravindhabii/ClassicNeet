document.querySelector(".reset").addEventListener("click", (r) => {
  r.preventDefault();

  document.querySelectorAll(".form-input").forEach((input) => {
    input.value = "";
  });
  document.querySelectorAll(".err").forEach((err) => {
    err.innerHTML = "";
  });
});


document.querySelector(".form").addEventListener("submit", (e) => {
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

  if (phoneInput.value.length != 10) {
    phonenum.style.display = "block";
    phonenum.innerText = "Please enter 10 digit number";
    e.preventDefault();
  }
});
var inputs = document.querySelectorAll(".form-input");

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
    } else {
      nameError.style.display = "none";
      commentError.style.display = "none";
      emailError.style.display = "none";
      phoneErr.style.display = "none";
    }
  });
});
const phoneInput = document.querySelector(".phonenum");
phoneInput.addEventListener("input", (e) => {
  var ASCIICode = e.target.value.slice(-1).charCodeAt(0);
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
    e.target.value = e.target.value.slice(0, -1);
  }
  var phoneErr = document.querySelector(".phoneError");
  if (phoneInput.value.length !== 10) {
    e.preventDefault();
    phoneErr.style.display = "block";
    phoneErr.innerText = "Please enter a 10 digit number";
  } else {
    phoneErr.style.display = "none";
  }
});

const sweetp = document.querySelector(".sweetp");

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
