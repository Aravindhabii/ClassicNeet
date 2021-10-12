
const previewDiv = document.querySelector('.preview');
const previewSpan = document.querySelectorAll('.previewSpan');
const sectionop = document.querySelector('.mainsection');
const closesvg = document.querySelector('.closesvg');


const fileimg = document.querySelectorAll('.fileimg');
const sliderimgurl = document.querySelectorAll('.sliderimgurl');
for (let i = 0; i <= fileimg.length - 1; i++) {
	fileimg[i].addEventListener('change', (e) => {
		document.querySelector('.submit').removeAttribute('disabled');
		for (let j = 0; j <= sliderimgurl.length - 1; j++) {
			if (i === j) {
				sliderimgurl[j].innerText = URL.createObjectURL(e.target.files[0]);
			}
		}
	});
}

console.log(sectionop);
for (let i = 0; i <= previewSpan.length - 1; i++) {
	previewSpan[i].addEventListener('click', (e) => {
		for (let j = 0; j <= sliderimgurl.length - 1; j++) {
			if (i === j) {
				const img = document.createElement('img');
				if (sliderimgurl[j].innerText.length < 1) return;
				img.src = sliderimgurl[j].innerText;
				previewDiv.appendChild(img);
				previewDiv.style.display = 'block';
				sectionop.style.filter = 'blur(20px)';
				closesvg.addEventListener('click',()=>{
					previewDiv.removeChild(img);
					previewDiv.style.display = 'none';
					sectionop.style.filter = 'blur(0px)';
				})
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
				sectionop.style.filter = 'blur(20px)';
				closesvg.addEventListener('click',()=>{
					console.log('hi');
					previewDiv.removeChild(img);
					previewDiv.style.display = 'none';
					sectionop.style.filter = 'blur(0px)';
				})
			}
		}
	});
}