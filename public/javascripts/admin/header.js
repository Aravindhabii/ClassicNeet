const removesection = document.querySelector('.removesection');
const alerter = document.querySelectorAll('.alert')
const sweetp = document.querySelector('.sweetp')
const sweetperr = document.querySelector('.sweetperr')


setTimeout(function () {
    alerter.forEach(function (item) {
        item.classList.remove('show')
    })
}, 4000);

if(sweetp){
    function successdialog() {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: sweetp.innerText,
            showConfirmButton: false,
            timer: 2500
        })
        sweetp.parentNode.removeChild(sweetp);
    }
    successdialog() 
}
if(sweetperr){
    function errdialog() {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: sweetperr.innerText,
            showConfirmButton: false,
            timer: 2500
        })
        sweetperr.parentNode.removeChild(sweetperr);
    }
    errdialog() 
}


const width = window.screen.width;
const height = window.screen.height;
window.addEventListener('resize', function (e) {
    if (window.screen.width < 1280) {
        window.location.href = '/';
    }
});

if (parseInt(width) < 1280) {
    window.location.href = '/';
};