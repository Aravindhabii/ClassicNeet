const addbtn = document.querySelector('.addbtn');
const previewDiv = document.querySelector('.preview');
const backbtn = document.querySelector('.backbtn');
const sectionop = document.querySelector('.mainsection');
const imgform = document.querySelector('.imgform');
const submitbtn = document.querySelector('.submitbtn');
const latestupdateform = document.querySelector('.imgform');

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
				closesvg.addEventListener('click', () => {
					previewTopper.removeChild(img);
					previewTopper.style.display = 'none';
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

$('#pagination-container').pagination({
	dataSource: function (done) {
		$.ajax({
			type: 'GET',
			url: `/sql/calendarevents`,
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

		$.each(data, function (index, i) {
			dataHtml += `<tr>
      <td>
        <p>${i.name}</p>
      </td>
      <td>
        <p class="onclickimg">${i.imgname}</p>
        <span class="currentPreviewSpan btn btn-info"
          >Show Image</span
        >
        <span class="currentSliderimgurl">${i.studentimg}</span>
      </td>
      <td>
        <p>${i.score}</p>
      </td>
      <td>
        <p>${i.collegename}</p>
      </td>
      <td>
        <input
          type="checkbox"
          id="checkbox"
          class="updatesCheckbox"
          name="checkbox"
          value="${i.cloudinaryname}"
          style="height: 20px; width: 20px"
        />
      </td>
    </tr>
		`;
		});

		$('.tbody').html(dataHtml);
	}
});
