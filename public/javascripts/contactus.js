document.querySelector('.reset').addEventListener('click', (r) => {
	r.preventDefault();
	
	document.querySelectorAll('.form-input').forEach((input) => {
		input.value = '';
	});
});

const phonenum = document.querySelector('.phonenum');
const phoneError = document.querySelector('.phoneError');
var sub = false;
phonenum.addEventListener('input', (e) => {
	var num = e.target.value;
	var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
			if(!e.target.value) {
				phoneError.style.display = 'none';
			} else {
				phoneError.style.display = 'block';
				if (filter.test(num)) {
					if(num.length==10){
						phoneError.style.display = 'none';
						sub = true;
						
					} else {
					  phoneError.innerText = 'Please put 10  digit mobile number';
						
					}
				  }
				  else {
					  phoneError.innerText ='Not a valid number';
					
				  }
	  
			   
			}

            
	
	// console.log(
	// 	parseInt(e.target.value.substr(e.target.value.length - 1, e.target.value))
	// );
});
var inputs = document.querySelectorAll('.form-input')

inputs.forEach((input) => {
	input.addEventListener('input',(e)=> {
	if (!input.value == "")
	 {
		
		// submit.style.backgroundColor = '#AAAAAA';
		submit.style.backgroundColor = '#3986be';

	 } 
	 else {
		submit.style.backgroundColor = '#AAAAAA';
	 }
	})
	
});
var submit = document.querySelector('.submit');
document.querySelector('form').addEventListener('submit', (e) => {
	// e.preventDefault();
	var nameError = document.querySelector('.nameError');
	var nameInput = document.querySelector('.name-input');
	var phonenum = document.querySelector('.phoneError');
	var phoneInput = document.querySelector('.phonenum');
	var emailError = document.querySelector('.emailError');
	var emailInput = document.querySelector('.email-input');
	if(nameInput.value == '') {
		nameError.style.display = 'block';
		nameError.innerText = 'Please enter your name';
		e.preventDefault();
		
	}
	if(phoneInput.value == '') {
		phonenum.style.display = 'block';
		phonenum.innerText = 'Please enter your number';
		e.preventDefault();
		
	}
	if(emailInput.value == '') {
		emailError.style.display = 'block';
		emailError.innerText = 'Please enter your email';
		e.preventDefault();
		
	}

	
	
	inputs.forEach((input) => {
		if (input.value == "")
		 {
			e.preventDefault();	
			// submit.style.backgroundColor = '#ff0000';

		 } 
	});

});


