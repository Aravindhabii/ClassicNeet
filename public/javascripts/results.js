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

const dropdown = document.querySelector('.dropdown1');

window.addEventListener('load', (e) => {
	$('#pagination-container').pagination({
		dataSource: function (done) {
			$.ajax({
				type: 'GET',
				url: `/results/pagination/${dropdown.value}`,
				success: function (response) {
					done(response);
				}
			});
		},
		className: 'paginationjs-theme-blue paginationjs-small',

		pageSize: window.innerWidth <= 1250 ? 8 : 9,
		callback: function (data, pagination) {
			// template method of yourself
			var dataHtml = '';

			$.each(data, function (index, item) {
				dataHtml += `
				<div class="gridbox">
					<div class="imgDesign">
						<img src="${item.image}" alt="" />
					</div>
					<span>
						<h3>${item.name}</h3>
						<p>${item.collegename}</p>
						<h3>${item.mark!=0 ? item.mark+'/720':''}</h3>
					</span>
				</div>
			`;
			});

			$('.gridcontainer').html(dataHtml);
		}
	});
});

dropdown.addEventListener('change', (e) => {
	$('#pagination-container').pagination({
		dataSource: function (done) {
			$.ajax({
				type: 'GET',
				url: `/results/pagination/${e.target.value}`,
				success: function (response) {
					done(response);
				}
			});
		},
		className: 'paginationjs-theme-blue paginationjs-small',
		pageSize: window.innerWidth <= 1250 ? 8 : 9,
		callback: function (data, pagination) {
			// template method of yourself
			var dataHtml = '';

			$.each(data, function (index, item) {
				dataHtml += `
				<div class="gridbox">
					<div class="imgDesign">
						<img src="${item.image}" alt="" />
					</div>
					<span>
						<h3>${item.name}</h3>
						<p>${item.collegename}</p>
						<h3>${item.mark!=0 ? item.mark+'/720':''}</h3>
					</span>
				</div>
			`;
			});

			$('.gridcontainer').html(dataHtml);
		}
	});
});
