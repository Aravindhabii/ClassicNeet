const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// // If we need pagination
	// pagination: {
	// 	el: '.swiper-pagination'
	// },

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});

//toppers

const box = document.querySelectorAll('.refbox');
const name1 = document.querySelectorAll('.nameStudent');
const score = document.querySelectorAll('.scoreStudent');
const img = document.querySelectorAll('.imgTopper');
const main = document.querySelector('.gridcontainer');
const card = document.querySelectorAll('.gridbox');
const arr = [];

box.forEach((n) => {
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
