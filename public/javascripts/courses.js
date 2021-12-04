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
	.change(function () {
		if (window.screen.width  < 600) {
			$('.para1neet').replaceWith(
				"<p class='hexContent'>This course is meant for those who have completed their 12th...</p>"
			);
			$('.para2neet').replaceWith(
				"<p class='hexContent'>This course is meant for students who have completed their 10th...</p>"
			);

			$('.para3neet').replaceWith(
				"<p class='hexContent'>The course is specifically designed for those who wish to focus on NEET...</p>"
			);

			$('.para4neet').replaceWith(
				"<p class='hexContent'>This course is meant for those who are appearing for their 12th...</p>"
			);
			$('.paraIIT').replaceWith(
				"<p class='hexContent'>CLASSIC NEET ACADEMY offers a unique IIT/Medical Foundation program aimed at...</p>"
			);
			$('.para1JEE').replaceWith(
				"<p class='hexContent'>This course is meant for students who have completed their 10th std...</p>"
			);
			$('.para2JEE').replaceWith(
				"<p class='hexContent'>The course is specifically designed for those who wish to focus on JEE...</p>"
			);
			$('.para3JEE').replaceWith(
				"<p class='hexContent'>This course is meant for those who are appearing for their 12th class...</p>"
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
		if (window.screen.width  > 750) {
			$('.para1neet').replaceWith(
				"<p class='hexContent'>This course is meant for those who have completed their 12 th class board exams andmight have already attempted the NEET. They will appear for NEET in the coming year after one year of training focused on NEET.</p>"
			);
			$('.para2neet').replaceWith(
				"<p class='hexContent'>This course is meant for students who have completed their 10 th  std board exams. The course will start at their 11 th  std and will be conducted till their NEET exam.</p>"
			);

			$('.para3neet').replaceWith(
				"<p class='hexContent'>The course is specifically designed for those who wish to focus on NEET after completing their 11 th  class exams.</p>"
			);

			$('.para4neet').replaceWith(
				"<p class='hexContent'>This course is meant for those who are appearing for their 12 th  class board exams and wish to focus on NEET after the Board exams. These students will be attempting NEET the same year.</p>"
			);
			$('.paraIIT').replaceWith(
				"<p class='hexContent'>CLASSIC NEET ACADEMY offers a unique IIT/Medical Foundation program aimed at students of the 6 th , 7 th , 8 th , 9 th  and 10 th  classes. This program focuses on strengthening the students conceptual clarity of the fundamentals in Mathematics, Physics, Chemistry, Biology, Logical Reasoning &amp; Communication Skills.</p>"
			);
			$('.para1JEE').replaceWith(
				"<p class='hexContent'>This course is meant for students who have completed their 10 th  std board exams. The course will start at their 11 th  std and will be conducted till their JEE exam. Course Methodology</p>"
			);
			$('.para2JEE').replaceWith(
				"<p class='hexContent'>The course is specifically designed for those who wish to focus on JEE after completing their 11 th  class exams.</p>"
			);
			$('.para3JEE').replaceWith(
				"<p class='hexContent'>This course is meant for those who are appearing for their 12 th  class board exams and wish to focus on JEE after the Board exams. These students will be attempting JEE the same year.</p>"
			);
		}
	})
	.change();


