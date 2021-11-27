const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});
const gridContainer = document.querySelector('.gridcontainer');

window.addEventListener('load', (e) => {
	$('#pagination-container').pagination({
		dataSource: function (done) {
			$.ajax({
				type: 'GET',
				url: `/aboutus/pagination/${dropdown.value}`,
				success: function (response) {
					done(response);
				}
			});
		},
		className: 'paginationjs-theme-blue paginationjs-big',

		pageSize: 8,
		callback: function (data, pagination) {
			// template method of yourself
			var dataHtml = '';

			$.each(data, function (index, item) {
				dataHtml += `<div class="galleryItem">
				<img
					id="imageid"
					src="../images/gallery/${dropdown.value}/${item}"
					alt=""
				/>
			</div>`;
			});

			$('.galleryMain').html(dataHtml);
		}
	});
});

dropdown.addEventListener('change', (e) => {
	$('#galleryMainPagination').pagination({
		dataSource: function (done) {
			$.ajax({
				type: 'GET',
				url: `/aboutus/pagination/${e.target.value}`,
				success: function (response) {
					done(response);
				}
			});
		},
		className: 'paginationjs-theme-blue paginationjs-small',
		pageSize: 8,
		callback: function (data, pagination) {
			// template method of yourself
			var dataHtml = '';

			$.each(data, function (index, item) {
				dataHtml += `<div class="galleryItem">
				<img
					id="imageid"
					src="../images/gallery/${e.target.value}/${item}"
					alt=""
				/>
			</div>`;
			});

			$('.galleryMain').html(dataHtml);
		}
	});
});
