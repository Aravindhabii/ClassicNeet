const addbtn = document.querySelector('.addbtn');
const previewDiv = document.querySelector('.preview');
const backbtn = document.querySelector('.backbtn');
const sectionop = document.querySelector('.mainsection');
const imgform = document.querySelector('.imgform');
const submit = document.querySelector('.submit');
const submitbtn = document.querySelector('.submitbtn');
const confirmdelete = document.querySelector('.confirmdelete');
const latestupdateform = document.querySelector('.latestupdateform');
var inputtext = document.querySelector('.inputtext');
const changablespan = document.querySelector('.changablespan');
addbtn.addEventListener('click', () => {
	previewDiv.style.display = 'flex';
	imgform.style.transform = 'translate(300vw,0)';
	previewDiv.style.transform = 'none';
});

backbtn.addEventListener('click', () => {
	previewDiv.style.transform = 'translate(300vw,0)';
	imgform.style.transform = 'translate(0,0)';
});

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

var counternum = 0;

counternum = inputtext.value.length;
changablespan.innerHTML = counternum;

inputtext.addEventListener('input', (e) => {
	var counternum = e.target.value.length;
	changablespan.innerHTML = counternum;
});

const updatesCheckboxChange = (e) => {
	if (document.querySelectorAll('input[type="checkbox"]:checked').length) {
		document.querySelector('.submit').removeAttribute('disabled');
	} else {
		document.querySelector('.submit').setAttribute('disabled', true);
	}
};
$('#pagination-container').pagination({
	dataSource: function (done) {
		$.ajax({
			type: 'GET',
			url: `/sql/latestupdates`,
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
				<input
					type="text"
					id="linkinput"
					value="${i.link}"
					readonly
					style="width: 80%; border: none"
				/>
			</td>
			<td>
				<input
					type="text"
					id="linkinput"
					value="${i.link1}"
					readonly
					style="width: 80%; border: none"
				/>
			</td>
			<td>
				<input
					type="checkbox"
					id="checkbox"
					class="updatesCheckbox"
					onchange="updatesCheckboxChange(this)"
					name="checkbox"
					value="${i.link1}"
					style="height: 20px; width: 20px"
				/>
			</td>
		</tr>
		`;
		});

		$('.tbody').html(dataHtml);
	}
});
