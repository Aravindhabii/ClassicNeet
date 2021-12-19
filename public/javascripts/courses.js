const btn1 = document.querySelector('.neet1btn');
const btn2 = document.querySelector('.neet2btn');
const btn3 = document.querySelector('.neet3btn');
const btn4 = document.querySelector('.neet4btn');
const btn5 = document.querySelector('.neet5btn');
const meth = document.querySelector('.bgmeth');
const meth2 = document.querySelector('.bgmeth2');
const meth3 = document.querySelector('.bgmeth3');
const meth4 = document.querySelector('.bgmeth4');
const meth5 = document.querySelector('.bgmeth5');
let bodyCourse = document.querySelector('body');
const exit = document.querySelectorAll('.exit');
if (btn1) {
	btn1.addEventListener('click', (e) => {
		meth.style.display = 'flex';
		bodyCourse.style.overflow = 'hidden';
	});
}
if (btn2) {
	btn2.addEventListener('click', (e) => {
		meth2.style.display = 'flex';
		bodyCourse.style.overflow = 'hidden';
	});
}
if (btn3) {
	btn3.addEventListener('click', (e) => {
		meth3.style.display = 'flex';
		bodyCourse.style.overflow = 'hidden';
	});
}
if (btn4) {
	btn4.addEventListener('click', (e) => {
		meth4.style.display = 'flex';
		bodyCourse.style.overflow = 'hidden';
	});
}
if (btn5) {
	btn5.addEventListener('click', (e) => {
		meth5.style.display = 'flex';
		bodyCourse.style.overflow = 'hidden';
	});
}

exit.forEach((e) => {
	e.addEventListener('click', () => {
		if (meth) {
			meth.style.display = 'none';
		}
		if (meth2) {
			meth2.style.display = 'none';
		}
		if (meth3) {
			meth3.style.display = 'none';
		}

		if (meth4) {
			meth4.style.display = 'none';
		}
		bodyCourse.style.overflow = 'unset';
	});
});

//media query
const para1 = document.querySelector('.para1');
$(window)
	.resize(function () {
	if (window.screen.width  < 600) {
		$('.para1neet').replaceWith(
			"<p class='hexContent'>Repeaters course is meant for those who have completed their 12th...</p>"
		);
		$('.para2neet').replaceWith(
			"<p class='hexContent'>Two-year Course is meant for students who have completed their 10th...</p>"
		);

		$('.para3neet').replaceWith(
			"<p class='hexContent'>One-year course is specifically designed for those who wish to focus on NEET...</p>"
		);

		$('.para4neet').replaceWith(
			"<p class='hexContent'>Crash course is meant for those who are appearing for their 12th...</p>"
		);
		$('.paraIIT').replaceWith(
			"<p class='hexContent'>CLASSIC NEET ACADEMY offers a unique IIT/Medical Foundation program aimed at...</p>"
		);
		$('.para1JEE').replaceWith(
			"<p class='hexContent'>Repeaters course is meant for students who have completed their 10th std...</p>"
		);
		$('.para2JEE').replaceWith(
			"<p class='hexContent'>Two-year course is specifically designed for those who wish to focus on JEE...</p>"
		);
		$('.para3JEE').replaceWith(
			"<p class='hexContent'>One-year course is meant for those who are appearing for their 12th class...</p>"
		);
	}
	if (window.screen.width  < 750) {
		$('.para1neet').replaceWith(
			"<p class='hexContent'>This course is meant for those who have completed their 12th classboard exams and might have already attempted the NEET.</p>"
		);
		$('.para2neet').replaceWith(
			"<p class='hexContent'>This course is meant for students who have completed their 10th std board exams.</p>"
		);
		$('.para4neet').replaceWith(
			"<p class='hexContent'>This course is meant for those who are appearing for their 12th class board exams and wish to focus on NEET after the Board exams.</p>"
		);
		$('.paraIIT').replaceWith(
			"<p class='hexContent'>CLASSIC NEET ACADEMY offers a unique IIT/Medical Foundation program aimed at students of the 6th, 7th, 8th, 9th and 10th classes.</p>"
		);
		$('.para1JEE').replaceWith(
			"<p class='hexContent'>This course is meant for students who have completed their 10th std board exams. The course will start at their 11th std...</p>"
		);
		$('.para3JEE').replaceWith(
			"<p class='hexContent'>This course is meant for those who are appearing for their 12th class board exams and wish to focus on JEE...</p>"
		);
	}
})
.resize();

