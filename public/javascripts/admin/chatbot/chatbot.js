// const addbtn = document.querySelector('.addbtn');
// const previewDiv = document.querySelector('.preview');
// const previewDiv2 = document.querySelector('.preview2');
// const backbtn = document.querySelector('.backbtn');
// const backbtn2 = document.querySelector('.backbtn2');
// const sectionop = document.querySelector('.mainsection');
// const imgform = document.querySelector('.imgform');
// const submitbtn = document.querySelector('.submitbtn');
// const editbtn = document.querySelectorAll('.editbtn');
// const editname = document.querySelector('.editname');
// const editstudentimg = document.querySelector('.editstudentimg');
// const editcollegename = document.querySelector('.editcollegename');
// const oldname = document.querySelector('.oldname');

// function editbutton(edit) {
// 	previewDiv2.style.display = 'flex';
// 	imgform.style.transform = 'translate(300vw,0)';
// 	previewDiv2.style.transform = 'none';
// 	const namevalue = edit.parentNode.parentNode.children[0].innerText;
// 	editname.value = namevalue;
// 	const collegenamevalue = edit.parentNode.parentNode.children[2].innerText;
// 	editcollegename.value = collegenamevalue;
// 	oldname.value = namevalue;
// }

// const previewTopper = document.querySelector('.previewTopper');
// const previewSpan = document.querySelectorAll('.currentPreviewSpan');
// const closesvg = document.querySelector('.closesvg');
// const sliderimgurl = document.querySelectorAll('.currentSliderimgurl');
// function showImg(show) {
// 	const img = document.createElement('img');
// 	if (show.parentNode.children[2] < 1) return;
// 	img.src = show.parentNode.children[2].innerText;
// 	previewTopper.appendChild(img);
// 	previewTopper.style.display = 'flex';
// 	sectionop.style.filter = 'blur(20px)';
// 	closesvg.addEventListener('click', () => {
// 		previewTopper.removeChild(img);
// 		previewTopper.style.display = 'none';
// 		sectionop.style.filter = 'blur(0px)';
// 	});
// }

// submitbtn.addEventListener('click', () => {
// 	Swal.fire({
// 		title: 'Are you sure?',
// 		text: 'Are you sure you want to delete!',
// 		icon: 'warning',
// 		showCancelButton: true,
// 		confirmButtonColor: '#3085d6',
// 		cancelButtonColor: '#d33',
// 		confirmButtonText: 'Yes, delete it!'
// 	}).then((result) => {
// 		if (result.isConfirmed) {
// 			document.querySelector('.imgform').submit();
// 		}
// 	});
// });

// function checkboxCheck(check) {
// 	if (document.querySelectorAll('input[type="checkbox"]:checked').length) {
// 		document.querySelector('.submit').removeAttribute('disabled');
// 	} else {
// 		document.querySelector('.submit').setAttribute('disabled', true);
// 	}
// }

// const pagination = async (currentPage) => {
// 	const res = await fetch('/chatbotresponce', {
// 		method: 'POST',
// 		body: JSON.stringify({
// 			page: currentPage
// 		}),
// 		headers: {
// 			'Content-Type': 'application/json'
// 		}
// 	});
// 	const data = await res.json();
// 	return data;
// };

// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');
// const tbody = document.querySelector('.tbody');

// const loadDetails = async (page, type) => {
// 	const details = await pagination(page);
// 	details.forEach((detail) => {
// 		const row = `<tr>
// 		<td>
// 			<p>${detail.name}</p>
// 		</td>
// 		<td>
// 			<p>${detail.number}</p>
// 		</td>
// 		<td>
// 			<p>${detail.gmail}</p>
// 		</td>
// 	</tr>`;
// 		switch (type) {
// 			case 'load':
// 				tbody.innerHTML += row;
// 				break;
// 			case 'next':
// 				tbody.innerHTML += row;
// 				break;
// 			case 'prev':
// 				tbody.innerHTML += row;
// 				break;
// 		}
// 	});
// 	return details.length;
// };

// window.addEventListener('load', async () => {
// 	loadDetails(1, 'load');
// 	await fetch('/pagination/totalCount')
// 		.then((response) => response.json())
// 		.then((data) => {
// 			tbody.setAttribute('data-total', Math.ceil(data / 5));
// 		});
// });

// next.addEventListener('click', async (e) => {
// 	if (
// 		parseInt(tbody.getAttribute('data-total')) >
// 		parseInt(tbody.getAttribute('data-current'))
// 	) {
// 		tbody.innerHTML = '';

// 		next.removeAttribute('disabled');
// 		prev.removeAttribute('disabled');
// 		await loadDetails(parseInt(tbody.getAttribute('data-current')) + 1, 'next');
// 		tbody.setAttribute(
// 			'data-current',
// 			parseInt(tbody.getAttribute('data-current')) + 1
// 		);
// 		if (
// 			parseInt(tbody.getAttribute('data-total')) ===
// 			parseInt(tbody.getAttribute('data-current'))
// 		) {
// 			next.setAttribute('disabled', true);
// 		}
// 	} else {
// 		next.setAttribute('disabled', true);
// 	}
// });

// prev.addEventListener('click', async (e) => {
// 	next.removeAttribute('disabled');
// 	tbody.innerHTML = '';
// 	if (
// 		parseInt(tbody.getAttribute('data-current')) != 1 &&
// 		parseInt(tbody.getAttribute('data-current')) <=
// 			parseInt(tbody.getAttribute('data-total'))
// 	) {
// 		prev.removeAttribute('disabled');
// 		await loadDetails(parseInt(tbody.getAttribute('data-current')) - 1, 'prev');
// 		tbody.setAttribute(
// 			'data-current',
// 			parseInt(tbody.getAttribute('data-current')) - 1
// 		);
// 		if (parseInt(tbody.getAttribute('data-current')) === 1) {
// 			prev.setAttribute('disabled', true);
// 		}
// 	}
// });

$('#pagination-container').pagination({
	dataSource: function (done) {
		$.ajax({
			type: 'GET',
			url: `/chatbotresponce`,
			success: function (response) {
				done(response);
			}
		});
	},
	className: 'paginationjs-theme-blue paginationjs-big',

	pageSize: 5,
	callback: function (data, pagination) {
		// template method of yourself
		var dataHtml = '';

		$.each(data, function (index, detail) {
			dataHtml += `<tr>
				<td>
					<p>${detail.name}</p>
				</td>
				<td>
					<p>${detail.number}</p>
				</td>
				<td>
					<p>${detail.gmail}</p>
				</td>
				<td>
					<p>${detail.date}</p>
				</td>
				<td>
					<button type="button" class="btn btn-outline-danger submit ms-5 px-3 submitbtn" onclick="reload(this)" value ="${detail.name},${detail.gmail}">
							Delete
					</button>
				</td>
			</tr>`;
		});

		$('.tbody').html(dataHtml);
	}
});

function success() {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Successfully Deleted',
		showConfirmButton: false,
		timer: 2500
	})
}

if (window.localStorage.flash == "true") {
	console.log('call from reload');
	window.localStorage.removeItem("flash");
	success();
}

const reload = async(thisfun) => {
	var name = thisfun.value.split(',')[0];
	var mail = thisfun.value.split(',')[1];
	resdelete(name, mail);
	window.localStorage.setItem('flash', "true");
	window.location.reload()
}

const resdelete =async (name,mail) => {
	
	const res = await fetch('/chatbotdelete', {
		method: 'POST',
		body: JSON.stringify({
			stuname: name,
			gmail: mail
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});
}

