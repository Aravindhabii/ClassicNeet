const togleswitch = document.querySelector('.toggleswitch');
const loadingspan = document.querySelector('.loadingspan');

const conditioncheck = () => {
    if (togleswitch.checked) {
        loadingspan.innerHTML = 'ON';
    } else {
        loadingspan.innerHTML = 'OFF';
    }
}


togleswitch.addEventListener('click', () => {
    conditioncheck();
})

