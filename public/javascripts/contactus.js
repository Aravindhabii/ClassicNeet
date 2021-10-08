document.querySelector('.reset').addEventListener('click', (r) => {
	r.preventDefault();
	document.querySelectorAll('.form-input').forEach((input) => {
		input.value = '';
	});
});
