const addbtn = document.querySelector('.addbtn');
const previewDiv = document.querySelector('.preview');
const previewDiv2 = document.querySelector('.preview2');
const backbtn = document.querySelector('.backbtn');
const backbtn2 = document.querySelector('.backbtn2');
const sectionop = document.querySelector('.mainsection');
const imgform = document.querySelector('.imgform');
const submitbtn = document.querySelector('.submitbtn');
const editbtn = document.querySelectorAll('.editbtn');
const editname = document.querySelector('.editname');
const editstudentimg = document.querySelector('.editstudentimg');
const editcollegename = document.querySelector('.editcollegename');
const oldname = document.querySelector('.oldname');

function editbutton(edit) {
	console.log(edit.parentNode.parentNode.children[2].innerText);

	previewDiv2.style.display = 'flex';
	imgform.style.transform = 'translate(300vw,0)';
	previewDiv2.style.transform = 'none';
	const namevalue = edit.parentNode.parentNode.children[0].innerText;
	editname.value = namevalue;
	const collegenamevalue = edit.parentNode.parentNode.children[2].innerText;
	editcollegename.value = collegenamevalue;
	oldname.value = namevalue;
}

addbtn.addEventListener('click', () => {
	previewDiv.style.display = 'flex';
	imgform.style.transform = 'translate(300vw,0)';
	previewDiv.style.transform = 'none';
});

backbtn.addEventListener('click', () => {
	previewDiv.style.transform = 'translate(300vw,0)';
	imgform.style.transform = 'translate(0,0)';
});

backbtn2.addEventListener('click', () => {
	previewDiv2.style.transform = 'translate(300vw,0)';
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

submitbtn.addEventListener('click', () => {
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
			latestupdateform.submit();
		}
	});
});

document.querySelectorAll('.updatesCheckbox').forEach((check, i) => {
	check.addEventListener('change', () => {
		if (document.querySelectorAll('input[type="checkbox"]:checked').length) {
			document.querySelector('.submit').removeAttribute('disabled');
		} else {
			document.querySelector('.submit').setAttribute('disabled', true);
		}
	});
});

// editbtn.addEventListener('click', () => {});

const pagination = async (currentPage) => {
	const res = await fetch('/pagination', {
		method: 'POST',
		body: JSON.stringify({
			page: currentPage
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

const loadDetails = async (page, type) => {
	const details = await pagination(page);
	console.log(details);
	details.forEach((detail) => {
		const row = `<tr>
		<td>
			<p>${detail.name}</p>
		</td>
		<td>
			<p class="onclickimg">${detail.studentimg}</p>
			<span class="currentPreviewSpan btn btn-info"
				>Show Image</span
			>
			<span class="currentSliderimgurl">${detail.studentimg}</span>
		</td>
		<td>
			<p>${detail.collegename}</p>
		</td>
		<td>
			<input
				type="checkbox"
				id="checkbox"
				class="updatesCheckbox"
				name="checkbox"
				value="${detail.cloudinaryname}"
				style="height: 20px; width: 20px"
			/>
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
		var rows = '';
		rows += row;
		switch (type) {
			case 'load':
				tbody.innerHTML = rows;
				break;
			case 'next':
				tbody.innerHTML = '';
				tbody.innerHTML = rows;
				break;
			case 'prev':
				tbody.innerHTML = '';
				tbody.innerHTML = rows;
				break;
		}
	});
	return details.length;
};

window.addEventListener('load', async () => {
	loadDetails(1, 'load');
	await fetch('/pagination/totalCount')
		.then((response) => response.json())
		.then((data) => {
			tbody.setAttribute('data-total', data);
		});
});
next.addEventListener('click', async (e) => {
	await loadDetails(parseInt(next.getAttribute('data-page')), 'next');
	prev.removeAttribute('disabled');
	if (
		parseInt(next.getAttribute('data-page')) >=
		Math.ceil(parseInt(tbody.getAttribute('data-total') / 10))
	) {
		next.setAttribute('disabled', true);
	} else if (
		parseInt(next.getAttribute('data-page')) <=
		Math.ceil(parseInt(tbody.getAttribute('data-total') / 10))
	) {
		next.setAttribute(
			'data-page',
			parseInt(next.getAttribute('data-page')) + 1
		);
		prev.setAttribute(
			'data-page',
			parseInt(next.getAttribute('data-page')) - 1
		);
	}
});
prev.addEventListener('click', async (e) => {
	await loadDetails(parseInt(next.getAttribute('data-page')) - 1, 'prev');
});
