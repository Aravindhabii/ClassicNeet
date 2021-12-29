const formtextarea = document.querySelector('.formtextarea');
const changablespan = document.querySelector('.changablespan');
formtextarea.addEventListener('input', (e) => {
	changablespan.innerText = e.target.value.length;
});
const formtextarea1 = document.querySelector('.formtextarea1');
const changablespan1 = document.querySelector('.changablespan1');
formtextarea1.addEventListener('input', (e) => {
	changablespan1.innerText = e.target.value.length;
});
const addbtn = document.querySelector('.addbtn');
const preview = document.querySelector('.preview');
const backbtn = document.querySelector('.backbtn');
const sectionop = document.querySelector('.mainsection');
const imgform = document.querySelector('.imgform');
const submit = document.querySelector('.submit');
const submitbtn = document.querySelector('.submitbtn');
const confirmdelete = document.querySelector('.confirmdelete');
const latestupdateform = document.querySelector('.latestupdateform');
const contents = document.querySelectorAll('.content');
const closebtn = document.querySelector('.closebtn');
const backbtn2 = document.querySelector('.backbtn2');
const previewdiv = document.querySelector('.previewdiv');
const yearnum = document.querySelector('.yearnum');
const previewDiv2 = document.querySelector('.preview2');
const edityear = document.querySelector('.edityear');
const editcontent = document.querySelector('.editcontent');
const oldid = document.querySelector('.oldid');

yearnum.setAttribute('max', new Date().getFullYear() + 1);

addbtn.addEventListener('click', () => {
	preview.style.display = 'flex';
	imgform.style.transform = 'translate(300vw,0)';
	preview.style.transform = 'none';
});

backbtn.addEventListener('click', () => {
	preview.style.transform = 'translate(300vw,0)';
	imgform.style.transform = 'translate(0,0)';
});

// closebtn.addEventListener('click', () => {
// 	previewdiv.style.opacity = '0';
// 	previewdiv.style.zIndex = '-5';
// });

contents.forEach((content) => {
	content.addEventListener('click', () => {
		previewdiv.style.opacity = '1';
		previewdiv.style.zIndex = '5';
		const value = content.value;
		formtextarea.value = value;
	});
});

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

function editbutton(edit) {
	previewDiv2.style.display = 'flex';
	imgform.style.transform = 'translate(300vw,0)';
	previewDiv2.style.transform = 'none';
	const cloudinarynamevalue =
		edit.parentNode.parentNode.children[3].children[0].value;
	oldid.value = cloudinarynamevalue;
	const contval = cloudinarynamevalue.split('**')[0];
	const yearval = cloudinarynamevalue.split('**')[1];
	edityear.value = yearval;
	editcontent.value = contval;
	// const namevalue = edit.parentNode.parentNode.children[0].innerText;
	// const collegenamevalue = edit.parentNode.parentNode.children[2].innerText;
}

backbtn2.addEventListener('click', () => {
	previewDiv2.style.transform = 'translate(300vw,0)';
	imgform.style.transform = 'translate(0,0)';
});

const updatesCheckboxChange = (e) => {
	if (document.querySelectorAll('input[type="checkbox"]:checked').length) {
		submitbtn.classList.remove('warningcheck');
	} else {
		submitbtn.classList.add('warningcheck');
	}
};

$('#pagination-container').pagination({
	dataSource: function (done) {
		$.ajax({
			type: 'GET',
			url: `/sql/history`,
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
          id="content"
          class="content"
          value=" ${i.content}"
          readonly
          style="width: 80%; border: none"
        />
      </td>
      <td>
        <input
          type="text"
          id="year"
          value=" ${i.year}"
          readonly
          style="width: 80%; border: none"
        />
      </td>
	  <td>
			<button
				type="button"
				class="btn btn-danger editbtn"
        onclick="editbutton(this)"
				value="${i.content}, ${i.year}"
			>
				Edit
			</button>
		</td>
      <td>
        <input
          type="checkbox"
          id="checkbox"
          class="updatesCheckbox"
          name="checkbox"
		  onchange="updatesCheckboxChange(this)"
          value="${i.content}**${i.year}"
          style="height: 20px; width: 20px"
        />
      </td>
    </tr>
		`;
		});

		$('.tbody').html(dataHtml);
	}
});
