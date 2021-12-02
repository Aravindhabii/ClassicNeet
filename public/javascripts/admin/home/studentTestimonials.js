const addbtn = document.querySelector('.addbtn');
const previewDiv = document.querySelector('.preview');
const backbtn = document.querySelector('.backbtn');
const sectionop = document.querySelector('.mainsection');
const imgform = document.querySelector('.imgform');
const submitbtn = document.querySelector('.submitbtn');
const confirmdelete = document.querySelector('.confirmdelete');
const latestupdateform = document.querySelector('.latestupdateform');

if (addbtn) {
  addbtn.addEventListener('click', () => {
	previewDiv.style.display = 'flex';
	imgform.style.transform = 'translate(300vw,0)';
	previewDiv.style.transform = 'none';
	
})
}

backbtn.addEventListener('click', () => {
	previewDiv.style.transform = 'translate(300vw,0)';
	imgform.style.transform = 'translate(0,0)';
});

const nocontentswal = () => {
	Swal.fire({
		position: "center",
		icon: "warning",
		title: "Please check any checkbox",
		showConfirmButton: false,
		timer: 2500,
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
			latestupdateform.submit();
		}
	});
};

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
