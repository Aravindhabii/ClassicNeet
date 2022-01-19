//dropdown

const dropdown = document.querySelector('.dropdownNeet');
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
};
exit.addEventListener('click', (e) => {
	prevContainer.style.display = 'none';
	bodyy.style.overflow = 'unset';
});

const opt = document.querySelectorAll('.opt');

window.addEventListener('load', (e) => {
	$.ajax({
		type: 'GET',
		url: `/aboutus/pagination/${dropdown.value}`,
		success: function (response) {
			(function () {
				'use strict';
				function Pagination() {
			const objJson = response;

					const prevButton = document.getElementById('button_prev');
					const nextButton = document.getElementById('button_next');
					const clickPageNumber = document.querySelectorAll('.clickPageNumber');

					let current_page = 1;
					let records_per_page = 8;

					this.init = function () {
						changePage(1);
						pageNumbers();
						selectedPage();
						clickPage();
						addEventListeners();
					};

					let addEventListeners = function () {
						prevButton.addEventListener('click', prevPage);
						nextButton.addEventListener('click', nextPage);
					};

					let selectedPage = function () {
						let page_number = document
							.getElementById('page_number')
							.getElementsByClassName('clickPageNumber');
						for (let i = 0; i < page_number.length; i++) {
							if (i == current_page - 1) {
								page_number[i].style.background = '#289de9';
								page_number[i].style.color = 'white';
							} else {
								page_number[i].style.background = 'white';
								page_number[i].style.color = '#289de9';
							}
						}
					};

					let checkButtonOpacity = function () {
						current_page == 1
							? prevButton.classList.add('opacity')
							: prevButton.classList.remove('opacity');
						current_page == numPages()
							? nextButton.classList.add('opacity')
							: nextButton.classList.remove('opacity');
					};

					let changePage = function (page) {
						const listingTable = document.querySelector('.galleryMain');

						if (page < 1) {
							page = 1;
						}
						if (page > numPages() - 1) {
							page = numPages();
						}

						listingTable.innerHTML = '';

						for (
							var i = (page - 1) * records_per_page;
							i < page * records_per_page && i < objJson.length;
							i++
						) {
							listingTable.innerHTML += `<div class="galleryItem">
								<img onclick="galCLick(this)" id="imageid" src="../images/gallery/${dropdown.value}/${objJson[i]}" alt="">
							</div>`;
						}
						checkButtonOpacity();
						selectedPage();
					};

					let prevPage = function () {
						if (current_page > 1) {
							current_page--;
							changePage(current_page);
						}
					};

					let nextPage = function () {
						if (current_page < numPages()) {
							current_page++;
							changePage(current_page);
						}
					};

					let clickPage = function () {
						document.addEventListener('click', function (e) {
							if (
								e.target.nodeName == 'SPAN' &&
								e.target.classList.contains('clickPageNumber')
							) {
								current_page = e.target.textContent;
								changePage(current_page);
							}
						});
					};

					let pageNumbers = function () {
						let pageNumber = document.getElementById('page_number');
						pageNumber.innerHTML = '';

						for (let i = 1; i < numPages() + 1; i++) {
							pageNumber.innerHTML +=
								"<span class='clickPageNumber'>" + i + '</span>';
						}
					};

					let numPages = function () {
						return Math.ceil(objJson.length / records_per_page);
					};
				}
				let pagination = new Pagination();
				pagination.init();
			})();
		}
	});
});

dropdown.addEventListener('change', (e) => {
	$.ajax({
		type: 'GET',
		url: `/aboutus/pagination/${e.target.value}`,
		success: function (response) {
			(function () {
				'use strict';

				function Pagination() {
					const objJson = response;

					const prevButton = document.getElementById('button_prev');
					const nextButton = document.getElementById('button_next');
					const clickPageNumber = document.querySelectorAll('.clickPageNumber');

					let current_page = 1;
					let records_per_page = 8;

					this.init = function () {
						changePage(1);
						pageNumbers();
						selectedPage();
						clickPage();
						addEventListeners();
					};

					let addEventListeners = function () {
						prevButton.addEventListener('click', prevPage);
						nextButton.addEventListener('click', nextPage);
					};

					let selectedPage = function () {
						let page_number = document
							.getElementById('page_number')
							.getElementsByClassName('clickPageNumber');
						for (let i = 0; i < page_number.length; i++) {
							if (i == current_page - 1) {
								page_number[i].style.background = '#289de9';
								page_number[i].style.color = 'white';
							} else {
								page_number[i].style.background = 'white';
								page_number[i].style.color = '#289de9';
							}
						}
					};

					let checkButtonOpacity = function () {
						current_page == 1
							? prevButton.classList.add('opacity')
							: prevButton.classList.remove('opacity');
						current_page == numPages()
							? nextButton.classList.add('opacity')
							: nextButton.classList.remove('opacity');
					};

					let changePage = function (page) {
						const listingTable = document.querySelector('.galleryMain');

						if (page < 1) {
							page = 1;
						}
						if (page > numPages() - 1) {
							page = numPages();
						}

						listingTable.innerHTML = '';

						for (
							var i = (page - 1) * records_per_page;
							i < page * records_per_page && i < objJson.length;
							i++
						) {
							listingTable.innerHTML += `<div class="galleryItem">
								<img onclick="galCLick(this)" id="imageid" src="../images/gallery/${e.target.value}/${objJson[i]}" alt="">
							</div>`;
						}
						checkButtonOpacity();
						selectedPage();
					};

					let prevPage = function () {
						if (current_page > 1) {
							current_page--;
							changePage(current_page);
						}
					};

					let nextPage = function () {
						if (current_page < numPages()) {
							current_page++;
							changePage(current_page);
						}
					};

					let clickPage = function () {
						document.addEventListener('click', function (e) {
							if (
								e.target.nodeName == 'SPAN' &&
								e.target.classList.contains('clickPageNumber')
							) {
								current_page = e.target.textContent;
								changePage(current_page);
							}
						});
					};

					let pageNumbers = function () {
						let pageNumber = document.getElementById('page_number');
						pageNumber.innerHTML = '';

						for (let i = 1; i < numPages() + 1; i++) {
							pageNumber.innerHTML +=
								"<span class='clickPageNumber'>" + i + '</span>';
						}
					};

					let numPages = function () {
						return Math.ceil(objJson.length / records_per_page);
					};
				}
				let pagination = new Pagination();
				pagination.init();
			})();
		}
	});
});
