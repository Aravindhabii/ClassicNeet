const fileimg = document.querySelectorAll('.fileimg');
const sliderimgurl = document.querySelectorAll('.sliderimgurl');

for (let i = 0; i <= fileimg.length - 1; i++) {
	fileimg[i].addEventListener('change', (e) => {
		document.querySelector('.submit').style.display = 'block';
		for (let j = 0; j <= sliderimgurl.length - 1; j++) {
			if (i === j) {
				sliderimgurl[j].innerText = URL.createObjectURL(e.target.files[0]);
			}
		}
	});
}

const previewDiv = document.querySelector('.preview');
const previewSpan = document.querySelectorAll('.previewSpan');

for (let i = 0; i <= previewSpan.length - 1; i++) {
	previewSpan[i].addEventListener('click', (e) => {
		for (let j = 0; j <= sliderimgurl.length - 1; j++) {
			if (i === j) {
				const img = document.createElement('img');
				if (sliderimgurl[j].innerText.length < 1) return;
				img.src = sliderimgurl[j].innerText;
				previewDiv.appendChild(img);
				previewDiv.style.display = 'block';
			}
		}
	});
}
const currentPreviewSpan = document.querySelectorAll('.currentPreviewSpan');
const currentSliderimgurl = document.querySelectorAll('.currentSliderimgurl');
for (let i = 0; i <= currentPreviewSpan.length - 1; i++) {
	currentPreviewSpan[i].addEventListener('click', (e) => {
		for (let j = 0; j <= currentSliderimgurl.length - 1; j++) {
			if (i === j) {
				const img = document.createElement('img');
				img.src = currentSliderimgurl[j].innerText;
				previewDiv.appendChild(img);
				previewDiv.style.display = 'block';
			}
		}
	});
}

const subbutton3Add = document.querySelector('.subbutton3 .addButton');
const subbutton3AddSpan = document.querySelector('.addToppers span');
const addToppers = document.querySelector('.addToppers');

subbutton3Add.addEventListener('click', () => {
	addToppers.style.display = 'block';
});

subbutton3AddSpan.addEventListener('click', () => {
	addToppers.style.display = 'none';
});
