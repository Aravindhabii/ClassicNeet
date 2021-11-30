//dropdown

const dropdown = document.querySelector('.dropdown');

const prevYear = document.querySelector('.prev-btn'); //2019
const currentYear = document.querySelector('.current-btn'); //2020
const btn = document.querySelectorAll('.btn');

const galleryclick = document.querySelectorAll('.galleryItem');
const previmg = document.querySelector('.previewimg');
const prevContainer = document.querySelector('.previewImg');
const bodyy = document.querySelector('body');
const exit = document.querySelector('.close');

const galCLick = (src) => {
	prevContainer.style.display = 'flex';
	previmg.src = src.src;
	bodyy.style.overflow = 'hidden';
}
exit.addEventListener('click', (e) => {
	prevContainer.style.display = 'none';
	bodyy.style.overflow = 'unset';
});

const opt = document.querySelectorAll('.opt');

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
					onclick="galCLick(this)"
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
	$('#pagination-container').pagination({
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
					onclick="galCLick(this)"
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
