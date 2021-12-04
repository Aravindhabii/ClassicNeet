const botImg = document.querySelector('.bot-img');
const chat = document.querySelector('.chat');
const chatClose = document.querySelector('.chat_close');
const chatReset = document.querySelector('.chat_reset');

botImg.addEventListener('click', () => {
	chat.classList.add('open');
	botImg.style.display = 'none';
});

chatClose.addEventListener('click', () => {
	chat.classList.remove('open');
	botImg.style.display = 'block';
});

const chatBody = document.querySelector('.chat-body');

chatReset.addEventListener('click', () => {
	chatBody.innerHTML = `<div class="each-chat bot">
	<img src="../images/chatbot/chatbot1.png" alt="" />
	<span class="chat-span">Hello, scholar</span>
</div>
<div class="each-chat bot">
	<img src="../images/chatbot/chatbot1.png" alt="" />
	<span class="chat-span">Enter your name</span>
</div>
<form class="each-chat client name-form" onsubmit="nameFormSubmit()">
	<button>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			id="name_svg"
		>
			<path
				fill-rule="evenodd"
				d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>
	<input
		type="text"
		placeholder="Name"
		maxlength="30"
		minlength="3"
		autofocus
		required
		id="client_name"
	/>
</form>`;
});

window.addEventListener('scroll', (e) => {
	var scroll = window.scrollY;
	if (scroll >= 100) {
		botImg.style.top = `${window.innerHeight}px`;
	} else {
		botImg.style.top = `${window.innerHeight + 300}px`;
	}
});

const nameFormSubmit = () => {
	document.querySelector('.name-form button').style.display = 'none';
	document.querySelector('.name-form input').setAttribute('disabled', true);
	chatBody.setAttribute(
		'data-name',
		document.querySelector('.name-form input').value
	);
	chatBody.innerHTML += `<div class="each-chat bot">
	<img src="../images/chatbot/chatbot1.png">
	<span class="chat-span">Enter your e-mail</span>
	</div>
	<form class="each-chat client email-form" onsubmit="emailFormSubmit(this)">
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					id="email_svg"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<input
				type="email"
				placeholder="Email"
				autofocus
				required
				id="client_email"
			/>
		</form>`;
	document.querySelector('.name-form input').value =
		chatBody.getAttribute('data-name');
	chatBody.scrollTop = chatBody.scrollHeight;
	return false;
};

const validateNumber = (evt) => {
	var ASCIICode = evt.value.slice(-1).charCodeAt(0);
	if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
		evt.value = evt.value.slice(0, -1);
	}
};

const emailFormSubmit = () => {
	document.querySelector('.email-form button').style.display = 'none';
	document.querySelector('.email-form input').setAttribute('disabled', true);
	chatBody.setAttribute(
		'data-email',
		document.querySelector('.email-form input').value
	);
	chatBody.innerHTML += `<div class="each-chat bot">
	<img src="../images/chatbot/chatbot1.png">
	<span class="chat-span">Enter your phone number</span>
	</div>
	<form class="each-chat client phone-form" onsubmit="phoneFormSubmit(this)">
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					id="name_svg"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<input
				type="text"
				placeholder="Phone number"
				autofocus
				oninput="validateNumber(this)"
				pattern="[1-9]{1}[0-9]{9}"
				minlength="10"
				maxlength="10"
				required
				id="client_phone"
			/>
		</form>`;
	document.querySelector('.name-form input').value =
		chatBody.getAttribute('data-name');
	document.querySelector('.email-form input').value =
		chatBody.getAttribute('data-email');
	chatBody.scrollTop = chatBody.scrollHeight;
	return false;
};

const phoneFormSubmit = async () => {
	document.querySelector('.phone-form button').style.display = 'none';
	document.querySelector('.phone-form input').setAttribute('disabled', true);
	chatBody.setAttribute(
		'data-phone',
		document.querySelector('.phone-form input').value
	);

	const neetContent =
		'This course is meant for those who have completed their 12th class board exams and might have already attempted the NEET. They will appear for NEET in the coming year after one year of training focused on NEET.';

	const IITContent =
		'CLASSIC NEET ACADEMY offers a unique IIT/Medical Foundation program aimed at students of the 6th, 7th, 8th, 9th and 10th classes. This program focuses on strengthening the students conceptual clarity of the fundamentals in Mathematics, Physics, Chemistry, Biology, Logical Reasoning & Communication Skills.';

	const medicalContent =
		'This course is meant for students who have completed their 10th std board exams. The course will start at their 11th std and will be conducted till their JEE exam.';

	chatBody.innerHTML += `<div class="each-chat bot">
		<img src="../images/chatbot/chatbot1.png">
		<span class="chat-span">Choose stream</span>
		</div>
		<div class="stream" onclick="coursesDisplay('${neetContent}','/coursesNEET')">NEET</div>
		<div class="stream" onclick="coursesDisplay('${IITContent}','/coursesJEE')">IIT / NEET foundation</div>
		<div class="stream" onclick="coursesDisplay('${medicalContent}','/coursesIIT&Medical')">IIT</div>`;
	document.querySelector('.name-form input').value =
		chatBody.getAttribute('data-name');
	document.querySelector('.email-form input').value =
		chatBody.getAttribute('data-email');
	document.querySelector('.phone-form input').value =
		chatBody.getAttribute('data-phone');
	chatBody.scrollTop = chatBody.scrollHeight;
	return false;
};

const coursesDisplay = (content, redirect) => {
	redirectPage();
	const div1 = document.createElement('div');
	const div2 = document.createElement('div');
	const div3 = document.createElement('div');
	const span1 = document.createElement('span');
	const span2 = document.createElement('span');
	const button1 = document.createElement('button');
	const img = document.createElement('img');
	const img2 = document.createElement('img');

	div1.classList.add('each-chat');
	div1.classList.add('bot');
	img.src = '../images/chatbot/chatbot1.png';
	button1.innerText = 'Read more';
	button1.classList.add('read-more');
	button1.classList.add('stream');
	button1.setAttribute('onclick', `window.location.href='${redirect}'`);
	span1.classList.add('chat-span');
	span1.innerText = content;
	span1.appendChild(button1);
	div2.appendChild(span1);
	div1.appendChild(img);
	div1.appendChild(div2);
	chatBody.appendChild(div1);
	div3.classList.add('each-chat');
	div3.classList.add('bot');
	img2.src = '../images/chatbot/chatbot1.png';
	span2.classList.add('chat-span');
	span2.innerHTML =
		'<b>Thank you, our admin will contact you as soon as possible.</b> 🤩';
	div3.appendChild(img2);
	div3.appendChild(span2);
	chatBody.appendChild(div3);
	chatBody.scrollTop = chatBody.scrollHeight;
};

const redirectPage = async () => {
	await fetch(
		`/chatbot/${chatBody.getAttribute('data-name')}/${chatBody.getAttribute(
			'data-email'
		)}/${chatBody.getAttribute('data-phone')}`
	);
};
