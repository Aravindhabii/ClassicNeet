// var valueArr = [];
// document.querySelectorAll(".updatesCheckbox").forEach((checkBox) => {
//   checkBox.addEventListener("change", (e) => {
//     let value = checkBox.value;
//     if (valueArr.includes(value)) {
//       valueArr.filter((val) => val !== value);
//       document.querySelector('.imgform').action=`/imgupdate?`
//     } else {
//       valueArr.push(value);
//     }
//   });
// });

// const popup = document.querySelector(".popupimg");
// const popupimg = document.querySelector('.popupimg img');
// const trigger = document.querySelector('.onclickimg');
// const Homepage = document.querySelector(".Homepage");

// trigger.addEventListener("click", () => {
//   console.log("hello");
//   popup.style.display = "block";
// Homepage.style.backdropFilter = 'blur(20px)';
// });

const fileimg = document.querySelectorAll('.fileimg');
const sliderimgurl = document.querySelectorAll('.sliderimgurl');

for (let i = 0; i <= fileimg.length - 1; i++) {
	fileimg[i].addEventListener('change', (e) => {
		document.querySelector('.subbutton1 button').style.display = 'block';
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
