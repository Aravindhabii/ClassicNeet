const addbtn = document.querySelector('.addbtn');
const previewDiv = document.querySelector('.preview');
const previewDiv2 = document.querySelector('.preview2');
const previewDiv3 = document.querySelector('.preview3');
const backbtn = document.querySelector('.backbtn');
const backbtn2 = document.querySelector('.backbtn2');
const backbtn3 = document.querySelector('.backbtn3');
const sectionop = document.querySelector('.mainsection');
const imgform = document.querySelector('.imgform');
const submitbtn = document.querySelector('.submitbtn');
const editbtn = document.querySelectorAll('.editbtn');
const editname = document.querySelector('.editname');
const editstudentimg = document.querySelector('.editstudentimg');
const editcollegename = document.querySelector('.editcollegename');
const editmark = document.querySelector('.editmark');
const oldname = document.querySelector('.oldname');
const select = document.querySelector('.form-select');
const currentyear = document.querySelector('.currentYear');
const year = document.querySelector('.year');

function editbutton(edit) {
	previewDiv2.style.display = 'flex';
	imgform.style.transform = 'translate(300vw,0)';
	previewDiv2.style.transform = 'none';
	currentyear.setAttribute('disabled', true);
	const namevalue = edit.parentNode.parentNode.children[0].innerText;
	editname.value = namevalue;
	const collegenamevalue = edit.parentNode.parentNode.children[2].innerText;
	editcollegename.value = collegenamevalue;
	const cloudinarynamevalue =
		edit.parentNode.parentNode.children[4].children[0].value;
	oldname.value = cloudinarynamevalue;
	const markvalue = edit.parentNode.parentNode.children[3].innerText;
	editmark.value = markvalue;
}

addbtn.addEventListener('click', () => {
	previewDiv.style.display = 'flex';
	imgform.style.transform = 'translate(300vw,0)';
	previewDiv.style.transform = 'none';
	currentyear.setAttribute('disabled', true);
});

backbtn.addEventListener('click', () => {
	previewDiv.style.transform = 'translate(300vw,0)';
	imgform.style.transform = 'translate(0,0)';
	currentyear.removeAttribute('disabled');
});

backbtn2.addEventListener('click', () => {
	previewDiv2.style.transform = 'translate(300vw,0)';
	imgform.style.transform = 'translate(0,0)';
	currentyear.removeAttribute('disabled');
});

year.setAttribute('max', new Date().getFullYear());

const previewTopper = document.querySelector('.previewTopper');
const previewSpan = document.querySelectorAll('.currentPreviewSpan');
const closesvg = document.querySelector('.closesvg');
const sliderimgurl = document.querySelectorAll('.currentSliderimgurl');
function showImg(show) {
	const img = document.createElement('img');
	if (show.parentNode.children[2] < 1) return;
	img.src = show.parentNode.children[2].innerText;
	previewTopper.appendChild(img);
	previewTopper.style.display = 'flex';
	sectionop.style.filter = 'blur(20px)';
	closesvg.addEventListener('click', () => {
		previewTopper.removeChild(img);
		previewTopper.style.display = 'none';
		sectionop.style.filter = 'blur(0px)';
	});
}

const nocontentswal = () => {
	Swal.fire({
		position: 'center',
		icon: 'warning',
		title: 'Please check any checkbox',
		showConfirmButton: false,
		timer: 2500
	});
};

const checkswal = () => {
	Swal.fire({
		title: 'Are you sure?',
		text: 'Are you sure you want to delete!',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes, delete it!'
	}).then((result) => {
		if (result.isConfirmed) {
			document.querySelector('.latestupdateform').submit();
		}
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

function checkboxCheck(check) {
	if (document.querySelectorAll('input[type="checkbox"]:checked').length) {
		submitbtn.classList.remove('warningcheck');
	} else {
		submitbtn.classList.add('warningcheck');
	}
}

const pagination = async (currentPage, currentYear) => {
	const res = await fetch('/pagination', {
		method: 'POST',
		body: JSON.stringify({
			page: currentPage,
			year: currentYear
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const data = await res.json();
	return data;
};

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const tbody = document.querySelector('.tbody');

const loadDetails = async (page, type, year) => {
	const details = await pagination(page, year);
	details.forEach((detail) => {
		const row = `<tr>
		<td>
			<p>${detail.name}</p>
		</td>
		<td>
			<p class="onclickimg">${detail.image}</p>
			<span class="currentPreviewSpan btn btn-info" onclick="showImg(this)"
				>Show Image</span>
			<span class="currentSliderimgurl">${detail.image}</span>
		</td>
		<td>
			<p>${detail.collegename}</p>
		</td>
		<td>
			<p>${detail.mark}</p>
		</td>
		<td>
			<input
				type="checkbox"
				id="checkbox"
				class="updatesCheckbox"
				onchange="checkboxCheck(this)"
				name="checkbox"
				value="${detail.cloudinaryname}"
				style="height: 20px; width: 20px"
			/>
		</td>
		<td>
			<p>${detail.year}</p>
		</td>
		<td>
			<button
				type="button"
				class="btn btn-danger ms-5 px-3 editbtn"
        onclick="editbutton(this)"
				value="${detail.name}, ${detail.collegename}, ${detail.cloudinaryname}"
			>
				Edit
			</button>
		</td>
	</tr>`;
		switch (type) {
			case 'load':
				tbody.innerHTML += row;
				break;
			case 'next':
				tbody.innerHTML += row;
				break;
			case 'prev':
				tbody.innerHTML += row;
				break;
		}
	});
	return details.length;
};

window.addEventListener('load', async () => {
	loadDetails(1, 'load', document.querySelector('.currentYear').value);
	await fetch(
		`/pagination/totalCount/${document.querySelector('.currentYear').value}`
	)
		.then((response) => response.json())
		.then((data) => {
			tbody.setAttribute('data-total', Math.ceil(data / 5));
		});
	if (tbody.getAttribute('data-total') > 1) {
		next.removeAttribute('disabled');
	} else {
		next.setAttribute('disabled', true);
	}
});

document.querySelector('.currentYear').addEventListener('change', async (e) => {
	tbody.innerHTML = '';

	loadDetails(1, 'load', e.target.value);
	await fetch(
		`/pagination/totalCount/${document.querySelector('.currentYear').value}`
	)
		.then((response) => response.json())
		.then((data) => {
			tbody.setAttribute('data-total', Math.ceil(data / 5));
		});
	if (tbody.getAttribute('data-total') > 1) {
		next.removeAttribute('disabled');
	} else {
		next.setAttribute('disabled', true);
	}
});

next.addEventListener('click', async (e) => {
	if (
		parseInt(tbody.getAttribute('data-total')) >
		parseInt(tbody.getAttribute('data-current'))
	) {
		tbody.innerHTML = '';

		next.removeAttribute('disabled');
		prev.removeAttribute('disabled');
		await loadDetails(
			parseInt(tbody.getAttribute('data-current')) + 1,
			'next',
			document.querySelector('.currentYear').value
		);
		tbody.setAttribute(
			'data-current',
			parseInt(tbody.getAttribute('data-current')) + 1
		);
		if (
			parseInt(tbody.getAttribute('data-total')) ===
			parseInt(tbody.getAttribute('data-current'))
		) {
			next.setAttribute('disabled', true);
		}
	} else {
		next.setAttribute('disabled', true);
	}
});
prev.addEventListener('click', async (e) => {
	next.removeAttribute('disabled');
	tbody.innerHTML = '';
	if (
		parseInt(tbody.getAttribute('data-current')) != 1 &&
		parseInt(tbody.getAttribute('data-current')) <=
			parseInt(tbody.getAttribute('data-total'))
	) {
		prev.removeAttribute('disabled');
		await loadDetails(
			parseInt(tbody.getAttribute('data-current')) - 1,
			'prev',
			document.querySelector('.currentYear').value
		);
		tbody.setAttribute(
			'data-current',
			parseInt(tbody.getAttribute('data-current')) - 1
		);
		if (parseInt(tbody.getAttribute('data-current')) === 1) {
			prev.setAttribute('disabled', true);
		}
	}
});