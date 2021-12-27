const previewDiv = document.querySelector('.preview');
			const closesvg = document.querySelector('.closesvg');
			const submitbtn = document.querySelector('.submit');

			const uploadDisplayInput = (e) => {
				e.parentNode.parentNode.children[2].children[0].removeAttribute(
					'disabled'
				);
				if (e.value != '') {
					e.parentNode.parentNode.children[2].children[0].removeAttribute(
						'disabled'
					);
					submitbtn.classList.remove('warningcheck');
					e.parentNode.children[1].classList.add('btn-info');
					e.parentNode.children[1].removeAttribute('disabled');
					e.parentNode.children[2].innerText = URL.createObjectURL(e.files[0]);
				} else {
					e.parentNode.parentNode.children[2].children[0].setAttribute(
						'disabled',
						true
					);
					e.parentNode.children[1].classList.remove('btn-info');
					e.parentNode.children[1].setAttribute('disabled', true);
					submitbtn.classList.add('warningcheck');
				}
			};

			const nocontentswal = () => {
				Swal.fire({
					position: 'center',
					icon: 'warning',
					title: 'Please upload any image',
					showConfirmButton: false,
					timer: 2500
				});
			};
			const checkswal = () => {
				Swal.fire({
					position: 'center',
					icon: 'warning',
					title: 'Please check any checkbox',
					showConfirmButton: false,
					timer: 2500
				});
			};

			submitbtn.addEventListener('click', () => {
				if (
					submitbtn.getAttribute('type') == 'button' &&
					submitbtn.classList.contains('warningcheck')
				) {
					nocontentswal();
				} else if (
					submitbtn.getAttribute('type') == 'button' &&
					!submitbtn.classList.contains('warningcheck')
				) {
					checkswal();
				} else {
					return;
				}
			});

			const updatesCheckboxChange = (e) => {
				if (
					document.querySelectorAll('input[type="checkbox"]:checked').length
				) {
					submitbtn.setAttribute('type', 'submit');
				} else {
					submitbtn.classList.add('warningcheck');
				}
			};
			const previewSpanClick = (e) => {
				const img = document.createElement('img');
				if (e.parentNode.children[2].innerText.length < 1) return;
				img.src = e.parentNode.children[2].innerText;
				previewDiv.appendChild(img);
				previewDiv.style.display = 'flex';
				previewDiv.style.background = 'rgba(104, 100, 100, 0.671)';
				closesvg.addEventListener('click', () => {
					previewDiv.removeChild(img);
					previewDiv.style.display = 'none';
					previewDiv.style.background = 'none';
				});
			};

			const currentPreviewSpan = (e) => {
				const img = document.createElement('img');
				img.src = e.parentNode.children[2].innerText;
				previewDiv.appendChild(img);
				previewDiv.style.display = 'flex';
				previewDiv.style.background = 'rgba(104, 100, 100, 0.671)';
				closesvg.addEventListener('click', () => {
					previewDiv.removeChild(img);
					previewDiv.style.display = 'none';
					previewDiv.style.background = 'none';
				});
			};