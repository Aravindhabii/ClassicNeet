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
	bodyy.style.overflow = 'scroll';
});

window.addEventListener('load', () => {
	document.querySelectorAll('#imageid').forEach((i) => {
		i.src = i.src.replace('SAMPLE', document.querySelector('.dropdown').value);
		document
			.querySelector('.dropdown')
			.setAttribute('value', document.querySelector('.dropdown').value);
	});
});

document.querySelector('.dropdown').addEventListener('change', () => {
	document
		.querySelector('.dropdown')
		.setAttribute('value', document.querySelector('.dropdown').value);
});
document.querySelectorAll('#imageid').forEach((i) => {
	i.src = i.src.replace(
		document.querySelector('.dropdown').getAttribute('value'),
		document.querySelector('.dropdown').value
	);
});
