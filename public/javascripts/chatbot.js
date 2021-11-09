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

chatReset.addEventListener('click', () => {
	document.querySelector('.chat-body').innerHTML = `<div class="each-chat bot">
	<img src="../images/chatbot/chatbot1.png" alt="" />
	<span class="chat-span">Hello, scholar</span>
</div>
<div class="each-chat bot">
	<img src="../images/chatbot/chatbot1.png" alt="" />
	<span class="chat-span">Enter your name</span>
</div>
<div class="each-chat client">
	<span>
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
	</span>
	<input
		type="text"
		placeholder="Name"
		maxlength="30"
		minlength="3"
		autofocus
		required
		id="client_name"
	/>`;
});

window.addEventListener('scroll', (e) => {
	var scroll = window.scrollY;
	if (scroll >= 100) {
		botImg.style.top = '100vh';
	} else {
		botImg.style.top = '120vh';
	}
});

const inputs_name = document.getElementById('client_name');
document.querySelector('#name_svg').addEventListener('click', (e) => {
	if (document.querySelector('#client_name').value.length > 2) {
		const div = document.createElement('div');
		const divEmailInput = document.createElement('div');
		const img = document.createElement('img');
		const input = document.createElement('input');
		const span_email = document.createElement('span');
		const spanAskEmail = document.createElement('span');
		span_email.innerHTML = `<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		id="email_svg"
	>
		<path
			fill-rule="evenodd"
			d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
			clip-rule="evenodd"
		/></svg>`;
		document.querySelector('#name_svg').remove();

		document
			.querySelectorAll('.chat-body .each-chat input')[0]
			.setAttribute('disabled', true);
		spanAskEmail.innerText = 'Enter you e-mail';
		spanAskEmail.classList.add('chat-span');
		div.classList.add('each-chat');
		div.classList.add('bot');
		img.src = '../images/chatbot/chatbot1.png';
		input.type = 'email';
		input.id = 'client_email';
		input.placeholder = 'Email';
		input.setAttribute('autofocus', 'true');
		input.setAttribute('required', 'true');
		div.appendChild(img);
		div.appendChild(spanAskEmail);
		divEmailInput.appendChild(span_email);
		divEmailInput.appendChild(input);
		divEmailInput.classList.add('each-chat');
		divEmailInput.classList.add('client');
		document.querySelector('.chat-body').appendChild(div);
		document.querySelector('.chat-body').appendChild(divEmailInput);
		document.querySelector('.chat-body').scrollTop =
			document.querySelector('.chat-body').scrollHeight;

		const validityStateName = input.validity;
		document.querySelector('#email_svg').addEventListener('click', (e) => {
			console.log(validityStateName);
			if (validityStateName.valid) {
				span_email.remove();
				const div1 = document.createElement('div');
				const divPhoneInput = document.createElement('div');
				const img = document.createElement('img');
				const input1 = document.createElement('input');
				input.setAttribute('disabled', true);
				input1.id = 'client_phone';
				const span_phone = document.createElement('span');
				const spanAskPhone = document.createElement('span');
				span_phone.innerHTML = `<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				id="phone_svg"
				>
				<path
				fill-rule="evenodd"
				d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
				clip-rule="evenodd"
				/></svg>`;
				div1.classList.add('each-chat');
				div1.classList.add('bot');
				divPhoneInput.classList.add('each-chat');
				divPhoneInput.classList.add('client');
				spanAskPhone.innerText = 'Enter you Phone number';
				spanAskPhone.classList.add('chat-span');
				img.src = '../images/chatbot/chatbot1.png';
				input1.type = 'text';
				input1.placeholder = 'Phone number';
				input1.setAttribute('maxlength', '10');
				input1.setAttribute('minlength', '10');
				input1.setAttribute('autofocus', 'true');
				input1.setAttribute('required', 'true');
				div1.appendChild(img);
				div1.appendChild(spanAskPhone);
				divPhoneInput.appendChild(span_phone);
				divPhoneInput.appendChild(input1);
				document.querySelector('.chat-body').appendChild(div1);
				document.querySelector('.chat-body').appendChild(divPhoneInput);
				document.querySelector('.chat-body').scrollTop =
					document.querySelector('.chat-body').scrollHeight;

				document.querySelector('#phone_svg').addEventListener('click', (e) => {
					span_phone.remove();
					input1.setAttribute('disabled', true);
					const div2 = document.createElement('div');
					const div3 = document.createElement('div');
					const div4 = document.createElement('div');
					const div5 = document.createElement('div');
					const img2 = document.createElement('img');
					const span2 = document.createElement('span');
					div2.classList.add('each-chat');
					div2.classList.add('bot');
					img2.src = '../images/chatbot/chatbot1.png';
					span2.innerText = 'Choose stream';
					span2.classList.add('chat-span');
					div2.appendChild(img2);
					div2.appendChild(span2);
					div3.innerText = 'NEET';
					div4.innerText = 'IIT / NEET foundation';
					div5.innerText = 'IIT';
					div3.classList.add('stream');
					div4.classList.add('stream');
					div5.classList.add('stream');
					document.querySelector('.chat-body').appendChild(div2);
					document.querySelector('.chat-body').appendChild(div3);
					document.querySelector('.chat-body').appendChild(div4);
					document.querySelector('.chat-body').appendChild(div5);
					document.querySelector('.chat-body').scrollTop =
						document.querySelector('.chat-body').scrollHeight;

					document.querySelectorAll('.stream').forEach((element) => {
						element.addEventListener('click', (e) => {
							switch (e.target.innerText) {
								case 'NEET':
									const div6 = document.createElement('div');
									const img3 = document.createElement('img');
									const span3 = document.createElement('span');
									const span4 = document.createElement('span');
									div6.classList.add('each-chat');
									div6.classList.add('bot');
									img3.src = '../images/chatbot/chatbot1.png';
									span3.innerText =
										'this course is meant for those who have completed their 12th class board exams and might have already attempted the NEET. They will appear for NEET in the coming year after one year of training focused on NEET.';
									span3.classList.add('chat-span');
									span4.classList.add('stream');
									span4.classList.add('read-more');
									span4.innerText = 'Read more';
									div6.appendChild(img3);
									div6.appendChild(span3);
									document.querySelector('.chat-body').appendChild(div6);
									document.querySelector('.chat-body').appendChild(span4);
									document.querySelector('.chat-body').scrollTop =
										document.querySelector('.chat-body').scrollHeight;

									span4.addEventListener('click', (e) => {
										window.location.href = '/coursesNEET';
									});
									break;
								case 'IIT / NEET foundation':
									const div7 = document.createElement('div');
									const img4 = document.createElement('img');
									const span5 = document.createElement('span');
									const span6 = document.createElement('span');
									div7.classList.add('each-chat');
									div7.classList.add('bot');
									img4.src = '../images/chatbot/chatbot1.png';
									span5.innerText =
										'this course is meant for those who have completed their 12th class board exams and might have already attempted the NEET. They will appear for NEET in the coming year after one year of training focused on NEET.';
									span5.classList.add('chat-span');
									span6.classList.add('stream');
									span6.classList.add('read-more');
									span6.innerText = 'Read more';
									div7.appendChild(img4);
									div7.appendChild(span5);
									document.querySelector('.chat-body').appendChild(div7);
									document.querySelector('.chat-body').appendChild(span6);
									document.querySelector('.chat-body').scrollTop =
										document.querySelector('.chat-body').scrollHeight;

									span6.addEventListener('click', (e) => {
										window.location.href = '/coursesIIT&Medical';
									});
									break;
								case 'IIT':
									const div8 = document.createElement('div');
									const img5 = document.createElement('img');
									const span7 = document.createElement('span');
									const span8 = document.createElement('span');
									div8.classList.add('each-chat');
									div8.classList.add('bot');
									img5.src = '../images/chatbot/chatbot1.png';
									span7.innerText =
										'this course is meant for those who have completed their 12th class board exams and might have already attempted the NEET. They will appear for NEET in the coming year after one year of training focused on NEET.';
									span7.classList.add('chat-span');
									span8.classList.add('stream');
									span8.classList.add('read-more');
									span8.innerText = 'Read more';
									div8.appendChild(img5);
									div8.appendChild(span7);
									document.querySelector('.chat-body').appendChild(div8);
									document.querySelector('.chat-body').appendChild(span8);
									document.querySelector('.chat-body').scrollTop =
										document.querySelector('.chat-body').scrollHeight;

									span8.addEventListener('click', (e) => {
										window.location.href = '/coursesJEE';
									});
									break;
							}
						});
					});
				});
			} else {
				document
					.getElementById('client_email')
					.setCustomValidity('Enter a valid Email.');
				document.getElementById('client_email').reportValidity();
			}
		});
	} else {
		inputs_name.setCustomValidity('Name must be a minimum of 3 characters.');
		inputs_name.reportValidity();
	}
});
