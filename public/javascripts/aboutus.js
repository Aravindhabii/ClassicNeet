//dropdown

const dropdown = document.querySelector('.dropdown');

const prevYear = document.querySelector('.prev-btn'); //2019
const currentYear = document.querySelector('.current-btn'); //2020
const btn = document.querySelectorAll('.btn');

const galleryclick = document.querySelectorAll('.galleryItem');
const previmg = document.querySelector('.previewimg');
const prevContainer = document.querySelector('.previewImg');
const bodyy = document.querySelector('body');
const exit = document.querySelector('.close');
galleryclick.forEach((galleryclick) => {
	galleryclick.addEventListener('click', (e) => {
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

const pagination = async (folder, start) => {
	const res = await fetch('/aboutus/pagination', {
		method: 'POST',
		body: JSON.stringify({
			folder,
			start
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const data = await res.json();
	return data;
};

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const galleryMain = document.querySelector('.galleryMain');

window.addEventListener('load', async () => {
	const imgs = await pagination(dropdown.value, 0);
	imgs.forEach((img) => {
		galleryMain.innerHTML += `<div class="galleryItem">
			<img
				id="imageid"
				src="../images/gallery/${dropdown.value}/${img}"
				alt=""
			/>
		</div>`;
	});
});
