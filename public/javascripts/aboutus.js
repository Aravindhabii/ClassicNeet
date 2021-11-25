// var slide = document.getElementsByClassName("slide");
//         var indicator = document.getElementById("indicator");
//         var dots = document.getElementsByClassName("dots");
//         var autoplay = document.getElementsByClassName("container")[0].getAttribute("data-autoplay");
//         var l = slide.length;
//         var interval = 5000;
//         var set;

//         window.onload = function () {
//             initialize();
//             slide[0].style.opacity = "1";
//             for (var j = 0; j < l; j++) {
//                 indicator.innerHTML += "<div class='dots' onclick=change(" + j + ")></div>";
//             }

//             dots[0].style.background = "#696969";

//         }

//         function initialize() {
//             if (autoplay === "true")
//                 set = setInterval(function () { next(); }, interval);
//         }

//         function change(index) {
//             clearInterval(set);
//             count = index;
//             for (var j = 0; j < l; j++) {
//                 slide[j].style.opacity = "0";
//                 dots[j].style.background = "#bdbdbd";
//             }
//             slide[count].style.opacity = "1";
//             dots[count].style.background = "#696969";

//         }

//         var count = 0;
//         function next() {
//             clearInterval(set);
//             slide[count].style.opacity = "0";
//             count++;
//             for (var j = 0; j < l; j++) {
//                 dots[j].style.background = "#bdbdbd";
//             }

//             if (count == l) {
//                 count = 0;
//                 slide[count].style.opacity = "1";
//                 dots[count].style.background = "#696969";

//             } else {
//                 slide[count].style.opacity = "1";
//                 dots[count].style.background = "#696969";
//             }
//             initialize()
//         }

//         function prev() {
//             clearInterval(set);
//             slide[count].style.opacity = "0";
//             for (var j = 0; j < l; j++) {
//                 dots[j].style.background = "#bdbdbd";
//             }
//             count--;

//             if (count == -1) {
//                 count = l - 1;
//                 slide[count].style.opacity = "1";
//                 dots[count].style.background = "#696969";

//             } else {
//                 slide[count].style.opacity = "1";
//                 dots[count].style.background = "#696969";
//             }
//             initialize()
//         }

//dropdown

const dropdown = document.querySelector('.dropdown');
// dropdown.addEventListener("change", (e) => {
//   console.log(dropdown.value);
// });

//GALLERY

const prevYear = document.querySelector('.prev-btn'); //2019
const currentYear = document.querySelector('.current-btn'); //2020
const btn = document.querySelectorAll('.btn');

// dropdown.addEventListener("change", (e) => {
//   document.querySelectorAll("#imageid").forEach((img, i) => {
//     img.src = `../images/gallery/${e.target.value}/${e.target.value}img${
//       i + 1
//     }.jpg`;
//   });
// });

const galleryclick = document.querySelectorAll('.galleryItem');
const previmg = document.querySelector('.previewimg');
const prevContainer = document.querySelector('.previewImg');
const bodyy = document.querySelector('body');
const exit = document.querySelector('.close');
galleryclick.forEach((galleryclick) => {
	galleryclick.addEventListener('click', (e) => {
		// document.querySelector('.popup').style.display = 'flex';
		prevContainer.style.display = 'flex';
		previmg.src = e.target.src;
		bodyy.style.overflow = 'hidden';
	});
});
exit.addEventListener('click', (e) => {
	prevContainer.style.display = 'none';
	bodyy.style.overflow = 'unset';
});

const opt = document.querySelectorAll('.opt');

window.addEventListener('load', () => {
	// document.querySelectorAll("#imageid").forEach((i) => {
	//   i.src = i.src.replace("SAMPLE", document.querySelector(".dropdown").value);
	//   document
	//     .querySelector(".dropdown")
	//     .setAttribute("value", document.querySelector(".dropdown").value);
	// })
	opt.forEach((o, i) => {
		if (o.selected) {
			var arr = o.getAttribute('data-obj').split(',');
			arr.forEach((a) => {
				const img = document.createElement('img');
				const div = document.createElement('div');
				div.classList.add('galleryItem');
				img.id = 'imageid';
				img.src = `images/gallery/${o.value}/${a}`;
				div.appendChild(img);
				document.querySelector('.galleryMain').appendChild(div);
			});
		}
	});
});

document.querySelector('.dropdown').addEventListener('change', () => {
	// document.querySelectorAll("#imageid").forEach((i) => {
	//   i.src = i.src.replace(
	//     document.querySelector(".dropdown").getAttribute("value"),
	//     document.querySelector(".dropdown").value
	//   )
	// });
	// document
	//   .querySelector(".dropdown")
	//   .setAttribute("value", document.querySelector(".dropdown").value);
	opt.forEach((o, i) => {
		if (o.selected) {
			document.querySelector('.galleryMain').innerHTML = '';
			var arr = o.getAttribute('data-obj').split(',');
			arr.forEach((a) => {
				const img = document.createElement('img');
				const div = document.createElement('div');
				div.classList.add('galleryItem');
				img.id = 'imageid';
				img.src = `images/gallery/${o.value}/${a}`;
				div.appendChild(img);
				document.querySelector('.galleryMain').appendChild(div);
			});
		}
	});
});

var main = document.querySelector('.galleryMain');
var item = document.querySelectorAll('.galleryItem');
// item.parentNode.children;
function getPageList(totalPages, page, maxLength) {
	function range(start, end) {
		return Array.from(Array(end - start + 1), (_, i) => i + start);
	}

	var sideWidth = maxLength < 6 ? 0 : 1;
	var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
	var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

	if (totalPages <= maxLength) {
		return range(1, totalPages);
	}

	if (page <= maxLength - sideWidth - 1 - rightWidth) {
		return range(1, maxLength - sideWidth - 1).concat(
			0,
			range(totalPages - sideWidth + 1, totalPages)
		);
	}

	if (page >= totalPages - sideWidth - 1 - rightWidth) {
		return range(1, sideWidth).concat(
			0,
			range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
		);
	}
	return range(1, sideWidth).concat(
		0,
		range(page - leftWidth, page + rightWidth),
		0,
		range(totalPages - sideWidth + 1, totalPages)
	);
}

$(function () {
	var main = document.querySelector('.galleryMain');
	var item = document.querySelectorAll('.galleryItem');
	var numberofitems = $('.galleryMain .galleryItem').length;
	var limitperpage = 8;
	if (window.innerWidth < 1150) {
		limitperpage = 6;
	}

	var totalPages = Math.ceil(numberofitems / limitperpage);
	var paginationSize =
		totalPages <= 5 ? Math.ceil(numberofitems / limitperpage) : 5;
	var currentPage;

	function showPage(whichpage) {
		if (whichpage < 1 || whichpage > totalPages) return false;

		currentPage = whichpage;

		$('.galleryMain .galleryItem')
			.hide()
			.slice((currentPage - 1) * limitperpage, currentPage * limitperpage)
			.show();
		$('.pagination li').slice(1, -1).remove();

		getPageList(totalPages, currentPage, paginationSize).forEach((item) => {
			$('<li>')
				.addClass('page-item')
				.addClass(item ? 'current-page' : 'dott')
				.toggleClass('active', item === currentPage)
				.append(
					$('<a>')
						.addClass('page-link')
						.attr({ href: 'javascript:void(0)' })
						.text(item || '...')
				)
				.insertBefore('.next-page');
		});

		$('.previous-page').toggleClass('disable', currentPage === 1);
		$('.next-page').toggleClass('disable', currentPage === totalPages);
		return true;
	}
	$('.pagination').append(
		$('<li>')
			.addClass('page-item')
			.addClass('previous-page')
			.append(
				$('<a>')
					.addClass('page-link')
					.attr({ href: 'javascript:void(0)' })
					.text('Prev')
			),
		$('<li>')
			.addClass('page-item')
			.addClass('next-page')
			.append(
				$('<a>')
					.addClass('page-link')
					.attr({ href: 'javascript:void(0)' })
					.text('Next')
			)
	);

	$('.galleryMain').show();
	const dropdown = document.querySelector('.dropdown');

	dropdown.addEventListener('change', (e) => {
		showPage(1);
	});
	showPage(1);

	$(document).on(
		'click',
		'.pagination li.current-page:not(.active)',
		function () {
			return showPage(+$(this).text());
		}
	);

	$('.next-page').on('click', function () {
		return showPage(currentPage + 1);
	});
	$('.previous-page').on('click', function () {
		return showPage(currentPage - 1);
	});
});

// var main = document.querySelector(".galleryMain");
// var item = document.querySelectorAll(".galleryItem");
// console.log(item);
// console.log(main.childNodes[4]);
// main.childNodes.forEach((i) => {

//     console.log(i,'');

// });
