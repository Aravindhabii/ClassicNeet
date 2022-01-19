const togleswitch = document.querySelector('.toggleswitch');
const loadingspan = document.querySelector('.loadingspan');
const latestupdateform = document.querySelector('.latestupdateform');
var stater = '';

const formsubmit = async (state) => {
	const res = await fetch('/admin/loadingimg', {
		method: 'POST',
		body: JSON.stringify({
			currentstate: state
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});
};

const conditioncheck = () => {
	if (togleswitch.checked) {
		loadingspan.innerHTML = 'Active';
		stater = 'active';
		formsubmit(stater);
	} else {
		loadingspan.innerHTML = 'Inactive';
		stater = 'inactive';
		formsubmit(stater);
	}
};

togleswitch.addEventListener('click', () => {
	conditioncheck();
});
