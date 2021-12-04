
const submitbtn = document.querySelector('.submit');


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
			document.querySelector('.chatbotform').submit();
		}
	});
})


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
				<td class="dateCol">
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

