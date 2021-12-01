const addbtn = document.querySelector('.addbtn');
const previewDiv = document.querySelector('.preview');
const previewDiv2 = document.querySelector('.preview2');
const backbtn = document.querySelector('.backbtn');
const sectionop = document.querySelector('.mainsection');
const imgform = document.querySelector('.imgform');
const submitbtn = document.querySelector('.submitbtn');

if (addbtn) {
	addbtn.addEventListener('click', () => {
		previewDiv.style.display = 'flex';
		imgform.style.transform = 'translate(300vw,0)';
		previewDiv.style.transform = 'none';
	});
}

backbtn.addEventListener('click', () => {
	previewDiv.style.transform = 'translate(300vw,0)';
	imgform.style.transform = 'translate(0,0)';
});

const previewTopper = document.querySelector('.previewTopper');
const previewSpan = document.querySelectorAll('.currentPreviewSpan');
const closesvg = document.querySelector('.closesvg');
const sliderimgurl = document.querySelectorAll('.currentSliderimgurl');
for (let i = 0; i <= previewSpan.length - 1; i++) {
	previewSpan[i].addEventListener('click', (e) => {
		for (let j = 0; j <= sliderimgurl.length - 1; j++) {
			if (i === j) {
				const img = document.createElement('img');
				if (sliderimgurl[j].innerText.length < 1) return;
				img.src = sliderimgurl[j].innerText;
				previewTopper.appendChild(img);
				previewTopper.style.display = 'flex';
				sectionop.style.filter = 'blur(20px)';
				closesvg.addEventListener('click', () => {
					previewTopper.removeChild(img);
					previewTopper.style.display = 'none';
					sectionop.style.filter = 'blur(0px)';
				});
			}
		}
	});
}

const checkswal = () => {
	Swal.fire({
		title: 'Are you sure?',
		text: 'Are you sure you want to delete!',
		icon: 'question',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes, delete it!'
	}).then((result) => {
		if (result.isConfirmed) {
			imgform.submit();
		}
	});
};

const nocontentswal = () => {
	Swal.fire({
		position: "center",
		icon: "warning",
		title: "Please check any checkbox",
		showConfirmButton: false,
		timer: 2500,
	});
}

submitbtn.addEventListener('click', () => {
	if (
		submitbtn.getAttribute("type") == "button" &&
		submitbtn.classList.contains("warningcheck")
	  ) {
		nocontentswal();
	  } else if (
		submitbtn.getAttribute("type") == "button" &&
		!submitbtn.classList.contains("warningcheck")
	  ) {
		checkswal();
	  } else {
		return;
	  }
});

document.querySelectorAll('.updatesCheckbox').forEach((check, i) => {
	check.addEventListener('change', () => {
		if (document.querySelectorAll('input[type="checkbox"]:checked').length) {
			submitbtn.classList.remove("warningcheck");
		} else {
			submitbtn.classList.add("warningcheck");
		}
	});
});
