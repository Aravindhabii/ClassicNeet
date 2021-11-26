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

window.addEventListener('load', () => {
	document.querySelectorAll('#imageid').forEach((i) => {
		i.src = i.src.replace('SAMPLE', document.querySelector('.dropdown').value);
		document
			.querySelector('.dropdown')
			.setAttribute('value', document.querySelector('.dropdown').value);
	});
});

document.querySelector('.dropdown').addEventListener('change', () => {
	document.querySelectorAll('#imageid').forEach((i) => {
		i.src = i.src.replace(
			document.querySelector('.dropdown').getAttribute('value'),
			document.querySelector('.dropdown').value
		);
	});
	document
		.querySelector('.dropdown')
		.setAttribute('value', document.querySelector('.dropdown').value);
});
