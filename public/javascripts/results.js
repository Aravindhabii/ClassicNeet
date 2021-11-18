// swiper js

// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",

//   },
// });

// var swiper2 = new Swiper(".mySwiper2", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   slidesPerGroup: 1,
//   loop: true,
//   autoplay:true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
// var swiper1 = new Swiper(".mySwiper1", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   slidesPerGroup: 1,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// var a = 0;
// $(window).scroll(function() {

//   var oTop = $('#counter').offset().top - window.innerHeight;
//   if (a == 0 && $(window).scrollTop() > oTop) {
//     $('.counter-value').each(function() {
//       var $this = $(this),
//         countTo = $this.attr('data-count');
//       $({
//         countNum: $this.text()
//       }).animate({
//           countNum: countTo
//         },

//         {

//           duration: 2000,
//           easing: 'swing',
//           step: function() {
//             $this.text(Math.floor(this.countNum));
//           },
//           complete: function() {
//             $this.text(this.countNum);
//             //alert('finished');
//           }

//         });
//     });
//     a = 1;
//   }

// });

//toppers

const box = document.querySelectorAll('.refbox');
const name1 = document.querySelectorAll('.nameStudent');
const score = document.querySelectorAll('.scoreStudent');
const img = document.querySelectorAll('.imgTopper');
const main = document.querySelector('.gridcontainer');
const card = document.querySelectorAll('.gridbox');
console.log('kok');
const arr = [];

box.forEach((n) => {
	// console.log(n.getAttribute('data-name'),'klk');
	// const box = document.createElement("div");
	// box.classList.add('gridbox');
	// const p = document.createElement("h3");
	// box.appendChild(p);
	// p.classList.add('nameStudent');
	// p.innerText = n.getAttribute('data-name');
	// console.log(p.innerText,"lol");
	// main.appendChild(box);
	arr.push({
		name: n.getAttribute('data-name'),
		score: n.getAttribute('data-score'),
		img: n.getAttribute('data-img')
	});
});

var count = 0;

window.addEventListener('load', () => {
	if (arr[count]) {
		name1[0].innerText = arr[count].name;
		score[0].innerText = arr[count].score;
		card[0].classList.add('gridanime1');
		img[0].src = arr[count].img;
		count++;
	} else {
		count = 0;
		name1[0].innerText = arr[count].name;
		score[0].innerText = arr[count].score;
		img[0].src = arr[count].img;
		card[0].classList.add('gridanime1');
		count++;
	}

	if (arr[count]) {
		name1[1].innerText = arr[count].name;
		score[1].innerText = arr[count].score;
		img[1].src = arr[count].img;
		card[1].classList.add('gridanime2');
		count++;
	} else {
		count = 0;
		name1[1].innerText = arr[count].name;
		score[1].innerText = arr[count].score;
		img[1].src = arr[count].img;
		card[1].classList.add('gridanime2');
		count++;
	}
	if (arr[count]) {
		name1[2].innerText = arr[count].name;
		score[2].innerText = arr[count].score;

		img[2].src = arr[count].img;
		card[2].classList.add('gridanime1');
		count++;
	} else {
		count = 0;
		name1[2].innerText = arr[count].name;
		score[2].innerText = arr[count].score;
		img[2].src = arr[count].img;
		card[2].classList.add('gridanime1');
		count++;
	}
	if (arr[count]) {
		name1[3].innerText = arr[count].name;
		score[3].innerText = arr[count].score;
		img[3].src = arr[count].img;
		card[3].classList.add('gridanime2');
		count++;
	} else {
		count = 0;
		name1[3].innerText = arr[count].name;
		score[3].innerText = arr[count].score;
		img[3].src = arr[count].img;
		card[3].classList.add('gridanime2');
		count++;
	}
	if (arr[count]) {
		name1[4].innerText = arr[count].name;
		score[4].innerText = arr[count].score;
		img[4].src = arr[count].img;
		card[4].classList.add('gridanime1');
		count++;
	} else {
		count = 0;
		name1[4].innerText = arr[count].name;
		score[4].innerText = arr[count].score;
		img[4].src = arr[count].img;
		card[4].classList.add('gridanime1');
		count++;
	}
	if (arr[count]) {
		name1[5].innerText = arr[count].name;
		score[5].innerText = arr[count].score;
		img[5].src = arr[count].img;
		card[5].classList.add('gridanime2');
		count++;
	} else {
		count = 0;
		name1[5].innerText = arr[count].name;
		score[5].innerText = arr[count].score;
		img[5].src = arr[count].img;
		card[5].classList.add('gridanime2');
		count++;
	}
	if (arr[count]) {
		name1[6].innerText = arr[count].name;
		score[6].innerText = arr[count].score;
		img[6].src = arr[count].img;
		card[6].classList.add('gridanime1');
		count++;
	} else {
		count = 0;
		name1[6].innerText = arr[count].name;
		score[6].innerText = arr[count].score;
		img[6].src = arr[count].img;
		card[6].classList.add('gridanime1');
		count++;
	}
	if (arr[count]) {
		name1[7].innerText = arr[count].name;
		score[7].innerText = arr[count].score;
		img[7].src = arr[count].img;
		card[7].classList.add('gridanime2');
		count++;
	} else {
		count = 0;
		name1[7].innerText = arr[count].name;
		score[7].innerText = arr[count].score;
		img[7].src = arr[count].img;
		card[7].classList.add('gridanime2');
		count++;
	}
	if (arr[count]) {
		name1[8].innerText = arr[count].name;
		score[8].innerText = arr[count].score;
		img[8].src = arr[count].img;
		card[8].classList.add('gridanime1');
		count++;
	} else {
		count = 0;
		name1[8].innerText = arr[count].name;
		score[8].innerText = arr[count].score;
		img[8].src = arr[count].img;
		card[8].classList.add('gridanime1');
		count++;
	}
});
setInterval(() => {
	if (arr[count]) {
		name1[0].innerText = arr[count].name;
		score[0].innerText = arr[count].score;
		card[0].classList.add('gridanime1');
		img[0].src = arr[count].img;
		count++;
	} else {
		count = 0;
		name1[0].innerText = arr[count].name;
		score[0].innerText = arr[count].score;
		img[0].src = arr[count].img;
		card[0].classList.add('gridanime1');
		count++;
	}

	if (arr[count]) {
		name1[1].innerText = arr[count].name;
		score[1].innerText = arr[count].score;
		img[1].src = arr[count].img;
		card[1].classList.add('gridanime2');
		count++;
	} else {
		count = 0;
		name1[1].innerText = arr[count].name;
		score[1].innerText = arr[count].score;
		img[1].src = arr[count].img;
		card[1].classList.add('gridanime2');
		count++;
	}
	if (arr[count]) {
		name1[2].innerText = arr[count].name;
		score[2].innerText = arr[count].score;

		img[2].src = arr[count].img;
		card[2].classList.add('gridanime1');
		count++;
	} else {
		count = 0;
		name1[2].innerText = arr[count].name;
		score[2].innerText = arr[count].score;
		img[2].src = arr[count].img;
		card[2].classList.add('gridanime1');
		count++;
	}
	if (arr[count]) {
		name1[3].innerText = arr[count].name;
		score[3].innerText = arr[count].score;
		img[3].src = arr[count].img;
		card[3].classList.add('gridanime2');
		count++;
	} else {
		count = 0;
		name1[3].innerText = arr[count].name;
		score[3].innerText = arr[count].score;
		img[3].src = arr[count].img;
		card[3].classList.add('gridanime2');
		count++;
	}
	if (arr[count]) {
		name1[4].innerText = arr[count].name;
		score[4].innerText = arr[count].score;
		img[4].src = arr[count].img;
		card[4].classList.add('gridanime1');
		count++;
	} else {
		count = 0;
		name1[4].innerText = arr[count].name;
		score[4].innerText = arr[count].score;
		img[4].src = arr[count].img;
		card[4].classList.add('gridanime1');
		count++;
	}
	if (arr[count]) {
		name1[5].innerText = arr[count].name;
		score[5].innerText = arr[count].score;
		img[5].src = arr[count].img;
		card[5].classList.add('gridanime2');
		count++;
	} else {
		count = 0;
		name1[5].innerText = arr[count].name;
		score[5].innerText = arr[count].score;
		img[5].src = arr[count].img;
		card[5].classList.add('gridanime2');
		count++;
	}
	if (arr[count]) {
		name1[6].innerText = arr[count].name;
		score[6].innerText = arr[count].score;
		img[6].src = arr[count].img;
		card[6].classList.add('gridanime1');
		count++;
	} else {
		count = 0;
		name1[6].innerText = arr[count].name;
		score[6].innerText = arr[count].score;
		img[6].src = arr[count].img;
		card[6].classList.add('gridanime1');
		count++;
	}
	if (arr[count]) {
		name1[7].innerText = arr[count].name;
		score[7].innerText = arr[count].score;
		img[7].src = arr[count].img;
		card[7].classList.add('gridanime2');
		count++;
	} else {
		count = 0;
		name1[7].innerText = arr[count].name;
		score[7].innerText = arr[count].score;
		img[7].src = arr[count].img;
		card[7].classList.add('gridanime2');
		count++;
	}
	if (arr[count]) {
		name1[8].innerText = arr[count].name;
		score[8].innerText = arr[count].score;
		img[8].src = arr[count].img;
		card[8].classList.add('gridanime1');
		count++;
	} else {
		count = 0;
		name1[8].innerText = arr[count].name;
		score[8].innerText = arr[count].score;
		img[8].src = arr[count].img;
		card[8].classList.add('gridanime1');
		count++;
	}
}, 10000);
// (arr).forEach(async function(person){

//   console.log('outside settime');
//   await setInterval(function(){
//     console.log('inside');
//     name1.innerText = person.name;
//     console.log(name1.innerText);
//     score.innerText = person.score;
//   },2000);

// });
// for (let i = 0; i < arr.length; i++) {

//   var interval = setTimeout(function(){

//     console.log('inside');
//     name1.innerText = arr[i].name;
//     console.log(name1.innerText);
//     score.innerText = arr[i].score;
//     i++;
//   },2000);

// }
// var i = 0;

// while (i<arr.length) {

//   console.log('inside');

//     name1.innerText = arr[i].name;
//     console.log(name1.innerText);
//     score.innerText = arr[i].score;
//     i++;

// }
// function loopCards(arr) {
//   var k = -5;
//   for ( k; k < arr.length; k++) {
//     console.log(arr.length);

//         k = k + 5;
//         if( k >= arr.length) {
//           k = -5;
//         }

// for each iteration console.log a name

//       (function  (k) {
//           setTimeout(function () {

//               name1[0].innerText = arr[k].name;
//               score[0].innerText = arr[k].score;
//               console.log('loop',k);
//               img[0].src = arr[k].img;
//               k++;
//               name1[1].innerText = arr[k].name;
//               score[1].innerText = arr[k].score;
//               img[1].src = arr[k].img;
//               k++;
//               name1[2].innerText = arr[k].name;
//               score[2].innerText = arr[k].score;
//               k++;
//               name1[3].innerText = arr[k].name;
//               score[3].innerText = arr[k].score;
//               img[3].src = arr[k].img;
//               k++;
//               name1[4].innerText = arr[k].name;
//               score[4].innerText = arr[k].score;
//               img[4].src = arr[k].img;
//               k++;
//               name1[5].innerText = arr[k].name;
//               score[5].innerText = arr[k].score;
//               img[5].src = arr[k].img;
//               k++;
//               name1[6].innerText = arr[k].name;
//               score[6].innerText = arr[k].score;
//               img[6].src = arr[k].img;
//               k++;
//               name1[7].innerText = arr[k].name;
//               score[7].innerText = arr[k].score;
//               img[7].src = arr[k].img;
//               k++;
//               name1[8].innerText = arr[k].name;
//               score[8].innerText = arr[k].score;
//               img[8].src = arr[k].img;
//               k++;
//               console.log('inside loop',k);
//               console.log(arr[k]);

//           }, 600 * k);

//       })(k);
//     }

//   };

// loopCards(arr);
